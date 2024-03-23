import { useState } from "react";

import ScoutTable from "../features/scoutTable/ScoutTable";
import Form from "../ui/Form";
import { playerData } from "../data/data-players";
import { useLocalStorageState } from "../ui/useLocalStorageState";
import Button from "../ui/Button";
import EmbtyTable from "../ui/EmtyTable";

export default function Homepage() {
  const [players, setPlayers] = useState(playerData);
  const [playersData, setPlayersData] = useLocalStorageState(
    playerData,
    "playersData"
  );
  const [expChange, setExpChange] = useState();

  function handleDeleteTAbleData() {
    setPlayersData([]);
  }
  return (
    <>
      <Form
        players={players}
        setPlayers={setPlayers}
        setPlayersData={setPlayersData}
        setExpChange={setExpChange}
      />
      {playersData.length > 0 ? (
        <>
          <span>
            <Button onClick={handleDeleteTAbleData}>Очитсить таблицу</Button>
          </span>
          <ScoutTable
            expChange={expChange}
            playersData={playersData}
            setPlayersData={setPlayersData}
          />
        </>
      ) : (
        <EmbtyTable>Таблица пуста</EmbtyTable>
      )}
    </>
  );
}
