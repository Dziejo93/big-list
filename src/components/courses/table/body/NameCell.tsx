import styled from "styled-components";
import { Courses } from "../../../../models/courses";
import { Cell } from "react-table";
import { BodyCell } from "../../../table";

interface NameCellProps {
  cell: Cell<Courses, Courses["name"]>;
}

function NameCell({ cell }: NameCellProps) {
  return (
    <BodyCell {...cell.getCellProps()} data-testid="courses-table-body-cell">
      <StyledText>{cell.value}</StyledText>
    </BodyCell>
  );
}

const StyledText = styled.p`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-normal);
  line-height: var(--line-height-large);
  color: var(--color-primary);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default NameCell;
