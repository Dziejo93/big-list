import Lozenage from "../../../lozenage";
import styled from "styled-components";
import { Courses } from "../../../../models/courses";
import { Cell } from "react-table";

interface CategoriesCellProps {
  cell: Cell<Courses, Courses["categories"]>;
}

function CategoriesCell({ cell }: CategoriesCellProps) {
  return (
    <div {...cell.getCellProps()} data-testid="courses-table-body-cell">
      <StyledWrapper>
        {cell.value.map((category, index) => (
          <Lozenage key={index} text={category} />
        ))}
      </StyledWrapper>
    </div>
  );
}

export default CategoriesCell;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px 8px;
`;
