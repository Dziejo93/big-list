import styled from "styled-components";

interface LozenageProps {
  text: string;
}

function Lozenage({ text }: LozenageProps) {
  return <StyledText>{text}</StyledText>;
}

export default Lozenage;

const StyledText = styled.span`
  background: var(--color-green-light);
  border-radius: 10px;
  padding: 2px 8px;
  color: var(--color-green-dark);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xsmall);
  line-height: var(--line-height-xsmall);
`;
