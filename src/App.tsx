import store from "./store";
import { Provider } from "react-redux";
import CoursesPage from "./pages/CoursesPage";
import { GlobalStyles } from "./theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <CoursesPage />
      </Provider>
    </>
  );
}

export default App;
