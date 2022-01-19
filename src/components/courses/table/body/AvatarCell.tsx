import styled from "styled-components";
import { Course } from "../../../../models/courses";
import { Cell } from "react-table";

const PLACEHOLDER_URL = "https://via.placeholder.com/48";

interface AvatarCellProps {
  cell: Cell<Course, Course["imageUrl"]>;
}

function AvatarCell({ cell }: AvatarCellProps) {
  return (
    <div {...cell.getCellProps()} data-testid="courses-table-body-cell">
      <StyledWrapper>
        <StyledImage src={cell.value || PLACEHOLDER_URL} />
      </StyledWrapper>
    </div>
  );
}

export default AvatarCell;

const StyledWrapper = styled.div`
  display: flex;
  padding-left: 16px;
`;

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
