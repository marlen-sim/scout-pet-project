import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";

const StyledError = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4.5rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-emerald-100);
  border: 1px solid var(--color-emerald-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
`;

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <StyledError>
      <Box>
        <Heading as="h1">Упс!</Heading>
        <p>Извините, произошла непредвиденная ошибка.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Box>
    </StyledError>
  );
}
