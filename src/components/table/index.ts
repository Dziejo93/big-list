import styled from "styled-components";

export const Table = styled.div`
  display: inline-block;
  background: var(--color-white);
  box-shadow: var(--shadow);
  border-radius: 4px;
`;

export const Header = styled.div`
  background-color: var(--color-table-header-background);
`;

export const HeaderRow = styled.div`
  padding: 0 23px 0 8px;
`;

export const HeaderCell = styled.div`
  padding: 16px 0 16px 16px;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-small);
  line-height: var(--line-height-xsmall);
  text-transform: uppercase;
  color: var(--color-table-header-background-text);
`;

export const BodyRow = styled.div`
  padding: 0 8px;
  align-items: center;
  border-bottom: 2px solid var(--color-table-header-background);

  &:last-of-type {
    border-bottom: none;
  }
`;

export const BodyCell = styled.div`
  padding-left: 16px;
  max-height: 80px;
`;
