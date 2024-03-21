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
  const [nickname, setNickname] = useState("");
  const [heroExp, setExp] = useState(null);

  function handleAddPlayer(player: { nickname: string; heroExp: number }) {
    setPlayers((players) => [...players, player]);
    setPlayersData((playersData) => [...playersData, player]);
  }

  function handleDeleteTAbleData() {
    setPlayersData([]);
  }
  return (
    <>
      <Form
        onAddPlayer={handleAddPlayer}
        nickname={nickname}
        setNickname={setNickname}
        heroExp={heroExp}
        setExp={setExp}
      />
      {playersData.length > 0 ? (
        <>
          <span>
            <Button onClick={handleDeleteTAbleData}>Очитсить таблицу</Button>
          </span>
          <ScoutTable
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
