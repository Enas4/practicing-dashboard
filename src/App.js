import { BrowserRouter } from "react-router-dom";
import RoutesFactory from "./routes/RoutesFactory/RoutesFactory";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RoutesFactory />
      </BrowserRouter>
    </div>
  );
};

export default App;
