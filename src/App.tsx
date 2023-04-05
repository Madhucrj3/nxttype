import { Provider } from "mobx-react";
import * as allStore from "./stores/index";

import RoutesPath from "./routes/Route/Routes";

const App = () => {
  return (
    <div className="App">
      <Provider {...allStore}>
        <RoutesPath />
      </Provider>
    </div>
  );
};

export default App;
