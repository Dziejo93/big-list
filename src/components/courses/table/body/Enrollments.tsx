import styled from "styled-components";
import { Courses } from "../../../../models/courses";
import { Cell } from "react-table";
import { BodyCell } from "../../../table";

interface EnrollmentsCellProps {
  cell: Cell<Courses, Courses["count"]>;
}

function EnrollmentsCell({ cell }: EnrollmentsCellProps) {
  return (
    <BodyCell {...cell.getCellProps()} data-testid="courses-table-body-cell">
      <StyledText>{cell.value}</StyledText>
    </BodyCell>
  );
}

const StyledText = styled.p`
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-normal);
  line-height: var(--line-height-normal);
  color: var(--color-ink);
`;

export default EnrollmentsCell;
