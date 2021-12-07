import {lazy} from "react";

const HomePage = lazy(() => import("./view/HomePage"));
const ProfilePage = lazy(() => import("./view/ProfilePage"));
const ProjectsPage = lazy(() => import("./view/ProjectsPage"));
const RegisterProjectPage = lazy(() => import("./view/RegisterProjectPage"));

const RouteList = [
  {exact: true, path: "/", component: HomePage},
  {exact: true, path: "/profile", component: ProfilePage},
  {exact: true, path: "/projects", component: ProjectsPage},
  {exact: true, path: "/register-project", component: RegisterProjectPage},
];

export default RouteList;
