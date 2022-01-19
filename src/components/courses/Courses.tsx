import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadCourses } from "../../store/coursesSlice";
import CoursesTable from "./table";
import { Layout } from "../../layout";
import { useEffect } from "react";

function Courses() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <Layout>
      <TableWrapper>
        <CoursesTable />
      </TableWrapper>
    </Layout>
  );
}

export default Courses;

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
