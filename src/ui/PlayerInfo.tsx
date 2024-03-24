import styled from "styled-components";
import Button from "./Button";
import { useRef } from "react";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 1.2fr 0.5fr 0.2fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

export default function PlayerInfo({ player, expChange, setPlayers, players }) {
  function handleDeletePlayerInfo() {
    const filteredData = players.filter(
      (item) => item.timeNow !== player.timeNow
    );
    setPlayers(filteredData);
  }

  return (
    <TableRow>
      <span>
        <b>{player.timeNow} </b>
      </span>
      <span>{player.nickname}</span>
      <span>{player.heroExp}</span>
      <span></span>
      <span>
        <Button onClick={handleDeletePlayerInfo}>X</Button>
      </span>
    </TableRow>
  );
}
