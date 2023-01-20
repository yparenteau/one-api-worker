import React, {useEffect} from "react";

/* eslint import/no-webpack-loader-syntax:0 */
// @ts-ignore
import MyWorker from "worker-loader!./worker";

const App = () => {
  useEffect(() => new MyWorker(), []);

  return (
    <div>SEE ERROR IN THE CONSOLE</div>
  );
};

export default App;
