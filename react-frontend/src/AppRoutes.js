import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Sections/Layout/Layout';

import Home from './pages/Home';
import TodoMvc from './pages/TodoMvc';
import Login from './pages/Login';
import Fluree from './pages/Fluree';
import TimeTravel from './pages/TimeTravel';
import AcademicCredentials from './pages/AcademicCredentials';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="todo-mvc" element={<TodoMvc />} />
      <Route path="fluree" element={<Fluree />} />
      <Route path="time-travel" element={<TimeTravel />} />
      <Route path="academic-credentials" element={<AcademicCredentials />} />
    </Route>
  </Routes>
);
export default AppRoutes;
