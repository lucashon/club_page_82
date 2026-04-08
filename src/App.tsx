/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Library from './pages/Library';
import BookDetails from './pages/BookDetails';
import Community from './pages/Community';
import Profile from './pages/Profile';
import AddBook from './pages/AddBook';
import Events from './pages/Events';
import Login from './pages/Login';

// BACKEND: Configurar rotas protegidas e autenticação global aqui
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </Router>
  );
}

