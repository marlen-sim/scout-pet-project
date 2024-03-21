import styled from "styled-components";
import PlayerInfo from "../../ui/PlayerInfo";

const Table = styled.div`
  border: 1px solid var(--color-emerald-200);

  font-size: 1.4rem;
  background-color: var(--color-slate-400);
  border-radius: var(--border-radius-lg);
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 0.2fr;
  column-gap: 2.4rem;
  align-items: center;
  text-align: center;

  background-color: var(--color-amber-50);
  border-bottom: 1px solid var(--color-amber-400);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-gray-600);
  padding: 1.6rem 2.4rem;
`;

function ScoutTable({ playersData, player, setPlayersData }) {
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Время</div>
        <div>Ник</div>
        <div>Опыт</div>
        <div>Удалить строку</div>
      </TableHeader>
      {playersData.map((player) => (
        <PlayerInfo
          key={player.timeNow}
          player={player}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />
      ))}
    </Table>
  );
}

export default ScoutTable;
