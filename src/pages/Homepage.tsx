import { useState } from "react";

import ScoutTable from "../features/scoutTable/ScoutTable";
import Form from "../ui/Form";
import Button from "../ui/Button";
import EmbtyTable from "../ui/EmtyTable";

export default function Homepage() {
  const [players, setPlayers] = useState([]);

  function handleDeleteTAbleData() {
    setPlayers([]);
  }
  return (
    <>
      <Form players={players} setPlayers={setPlayers} />
      {players.length > 0 ? (
        <>
          <span>
            <Button onClick={handleDeleteTAbleData}>Очитсить таблицу</Button>
          </span>
          <ScoutTable players={players} setPlayers={setPlayers} />
        </>
      ) : (
        <EmbtyTable>Таблица пуста</EmbtyTable>
      )}
    </>
  );
}
