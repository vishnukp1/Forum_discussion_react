import { Home } from "../pages";
import { homePath} from "./route.constant";

const routes = [
  {
    path: "/",
    component: Home, 
    exact: true,
  },
 
];

export default routes;