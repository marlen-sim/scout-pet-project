import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

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
  onAddPlayer: (player: {
    timeNow: string;
    nickname: string;
    heroExp: string;
    coords: number | string;
  }) => void;
  nickname: string;
  heroExp: string;
}

export default function Form({
  onAddPlayer,
  nickname,
  heroExp,
  setNickname,
  setExp,
}: FormProps) {
  const date = new Date();
  const timeNow = date.toLocaleTimeString();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nickname || !heroExp) return;

    const newPlayer = {
      timeNow,
      nickname,
      heroExp,
      coords: "",
    };

    onAddPlayer(newPlayer);

    setNickname("");
    setExp(null);
  }
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
