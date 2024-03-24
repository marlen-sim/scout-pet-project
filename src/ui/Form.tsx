import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { useEffect, useState } from "react";

const StyledForm = styled.form`
  background-color: #52525b;
  border: 1px solid var(--color-gray-600);
  padding: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
`;

const StyledInput = styled.input`
  width: 120px;
  padding: 0.5rem;
  border: 1px solid var(--color-emerald-300);
  background-color: var(--color-slate-400);
  color: var(--color-white);
  border-radius: 9px;
`;

interface FormProps {
  players: [];
  setPlayers: React.Dispatch<React.SetStateAction<[]>>;
  setExpChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function Form({ players, setPlayers, setExpChange }: FormProps) {
  const [nickname, setNickname] = useState("");
  const [heroExp, setExp] = useState(null);
  const [savedNickname, setSavedNickname] = useState("");

  const timeNow = new Date().toLocaleTimeString();

  const player = {
    timeNow,
    nickname,
    heroExp,
    coords: "",
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nickname || !heroExp) return;

    handleAddPlayer(player);
    setSavedNickname(nickname);

    setNickname("");
    setExp(null);
  }

  interface playerProps {
    timeNow: string;
    nickname: string;
    heroExp: number | null;
    coords: string;
  }

  function handleAddPlayer(player: any) {
    setPlayers((players) => [...players, player]);
  }

  useEffect(
    function () {
      const filteredPlayers = players.filter(
        (obj) => obj?.nickname === savedNickname
      );
      if (filteredPlayers.length === 1) return;
      const heroExpChage =
        filteredPlayers.at.length -
        1?.heroExp -
        filteredPlayers.at.length -
        2?.heroExp;

      setExpChange(heroExpChage);
    },
    [players, savedNickname]
  );

  return (
    <StyledForm className="form" onSubmit={handleSubmit}>
      <Heading as="h2">Данные о герое</Heading>

      <StyledDiv>
        <label htmlFor="atacker">Атакующий</label>
        <StyledInput
          id="atacker"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <label htmlFor="heroExp">Опыт</label>
        <StyledInput
          id="heroExp"
          type="text"
          value={!heroExp ? "" : heroExp}
          onChange={(e) => setExp(parseInt(e.target.value))}
        />
        <Button>Добавить</Button>
      </StyledDiv>
    </StyledForm>
  );
}
