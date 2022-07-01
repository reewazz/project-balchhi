import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const App = () => useRoutes([
  {path:"/",element:<Home />},
  {path:"/home",element:<Home />},
  {path:"*",element:<NotFound />}
])

export default App;
