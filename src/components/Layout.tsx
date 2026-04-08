import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// BACKEND: O Layout pode ser usado para gerenciar estados globais como o usuário logado
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
