import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/400.css";
import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers";

const prepare = () => {
  const worker = setupWorker(...handlers);
  return worker.start();
};

prepare().then(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
