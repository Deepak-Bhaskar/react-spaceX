import Home from "./Home";
import Grid from "./Grid";
import { fetchSpaceXLaunches } from "./api";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    fetchInitialData: (path = "") => fetchSpaceXLaunches(path.split("/").pop()),
  },
  {
    exact: true,
    path: "/spaceX",
    component: Grid,
    fetchInitialData: (launch, land, year) =>
      fetchSpaceXLaunches(launch, land, year),
  },
];

export default routes;
