import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    ...HomePage, //add component: Home and if exist loadData: loadData
    path: "/",
    exact: true,
  },
  {
    ...UsersListPage, //add component: Home and loadData: loadData
    path: "/users",
  },
];
