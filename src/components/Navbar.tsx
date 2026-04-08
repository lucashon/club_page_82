import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Biblioteca', path: '/library' },
    { name: 'Adicionar Livro', path: '/add-book' },
    { name: 'Comunidade', path: '/community' },
    { name: 'Eventos', path: '/events' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-[0_8px_30px_rgba(41,23,11,0.06)]">
      <nav className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-bold font-headline text-on-surface tracking-tight">
          A Biblioteca Viva
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => console.log(`Tentando navegar para: ${item.path}`)}
              className={({ isActive }) => cn(
                "font-headline tracking-tight transition-colors duration-300 pb-1",
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface/70 hover:text-primary"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* BACKEND: Integrar sistema de notificações aqui */}
          <button className="p-2 text-on-surface/70 hover:text-primary transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          {/* BACKEND: Buscar dados do usuário logado para exibir nome e avatar */}
          <Link to="/profile" className="flex items-center space-x-2 pl-4 border-l border-outline-variant/30">
            <span className="text-sm font-bold text-primary hidden sm:inline">Perfil</span>
            <User className="w-6 h-6 text-primary" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
