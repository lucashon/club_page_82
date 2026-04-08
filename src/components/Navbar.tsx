import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bell, User, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Biblioteca', path: '/library' },
    { name: 'Adicionar Livro', path: '/add-book' },
    { name: 'Comunidade', path: '/community' },
    { name: 'Eventos', path: '/events' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-[0_8px_30px_rgba(41,23,11,0.06)]">
      <nav className="flex justify-between items-center px-4 md:px-8 h-20 w-full max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-bold font-headline text-on-surface tracking-tight">
          A Biblioteca Viva
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
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

        <div className="hidden lg:flex items-center space-x-4">
          {/* BACKEND: Integrar sistema de notificações aqui */}
          <button className="p-2 text-on-surface/70 hover:text-primary transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          {/* BACKEND: Buscar dados do usuário logado para exibir nome e avatar */}
          <Link to="/profile" className="flex items-center space-x-2 pl-4 border-l border-outline-variant/30">
            <span className="text-sm font-bold text-primary hidden sm:inline">Perfil</span>
            <User className="w-6 h-6 text-primary" />
          </Link>
          <Link to="/login" className="text-sm font-bold text-on-surface-variant hover:text-primary ml-4">
            Sair
          </Link>
        </div>

        {/* Mobile Menu Toggle & Icons */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button className="p-2 text-on-surface/70 hover:text-primary transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button 
            className="p-2 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-background border-t border-on-surface/10 shadow-2xl py-6 px-6 flex flex-col space-y-6 overflow-y-auto z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => cn(
                "font-headline tracking-tight transition-colors duration-300 text-2xl",
                isActive
                  ? "text-primary font-bold"
                  : "text-on-surface/80 hover:text-primary"
              )}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-6 border-t border-on-surface/10 flex flex-col space-y-6 mt-auto">
            <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3 text-primary font-bold text-xl">
              <User className="w-6 h-6" />
              <span>Meu Perfil</span>
            </Link>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant font-bold text-xl hover:text-primary">
              Sair / Entrar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
