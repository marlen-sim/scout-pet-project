import { useState } from "react";

import ScoutTable from "../features/scoutTable/ScoutTable";
import Form from "../ui/Form";
import { playerData } from "../data/data-players";
import { useLocalStorageState } from "../ui/useLocalStorageState";
import Button from "../ui/Button";
import EmbtyTable from "../ui/EmtyTable";

export default function Homepage() {
  const [players, setPlayers] = useState([]);

  console.log(players);

  const [expChange, setExpChange] = useState();

  function handleDeleteTAbleData() {
    setPlayers([]);
  }
  return (
    <>
      <Form
        players={players}
        setPlayers={setPlayers}
        setExpChange={setExpChange}
      />
      {players.length > 0 ? (
        <>
          <span>
            <Button onClick={handleDeleteTAbleData}>Очитсить таблицу</Button>
          </span>
          <ScoutTable
            players={players}
            expChange={expChange}
            setPlayers={setPlayers}
          />
        </>
      ) : (
        <EmbtyTable>Таблица пуста</EmbtyTable>
      )}
    </>
  );
}
