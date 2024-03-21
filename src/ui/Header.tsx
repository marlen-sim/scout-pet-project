import styled from "styled-components";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  grid-column: 1/-1;
  align-items: center;
  padding: 0.8rem;
  background-color: rgba(12, 13, 15, 0.7);
  backdrop-filter: blur(5px);
`;

export default function Header() {
  return (
    <StyledHeader>
      <Heading as="h1">Разведка</Heading>
      <Link to={`contacts/1`}>Contact 1</Link>
    </StyledHeader>
  );
}
