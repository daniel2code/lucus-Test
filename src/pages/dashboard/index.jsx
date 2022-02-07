import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layout/index";
import TodoPage from "./todo/index";
import PhotoAlbumPage from "./photoAlbum/index";
import TableListPage from "./tableList/index";

const Index = () => {
  return (
    <DashboardLayout>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<TableListPage />} />
          <Route path="/photo" element={<PhotoAlbumPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </React.Fragment>
    </DashboardLayout>
  );
};

export default Index;
