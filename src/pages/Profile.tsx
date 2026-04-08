import { motion } from 'motion/react';
import { Verified, Home, Book, User, Settings, Star, StarHalf, ChevronRight, Library, History, Award } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// BACKEND: Estas estatísticas devem ser calculadas no servidor e retornadas via API
const STATS = [
  { label: 'Livros este Ano', value: '24', goal: 'Meta: 32 livros', progress: 75, color: 'primary' },
  { label: 'Momento Diário', value: '42', sub: 'Média de Páginas / Dia', momentum: true },
  { label: 'Narrativa de Vida', value: '12.8k', sub: 'Total de Páginas Lidas', icon: true }
];

// BACKEND: Esta lista deve ser carregada da API (ex: GET /api/user/completed-books)
const COMPLETED = [
  { title: 'A Sombra do Vento', rating: 4.5, cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyptZLdLIbEFIUZeCtGleiQDkOECC1DR2aJwP_SoL36_E5cI5wQCjjrptgqdDG3JAikwUbuJUmUsfBeklKPaVYYJVLmLFDIRJkbXXc2ShHgVfxhpJX_8SB_pzuDWIux2X2G7yaFqxEQ8LNGp7tFtQNZ65Li9xiGuJYgcAquhZrPKeH1pHRCXN5-zI9lHraVl9ZmYOjcevKeBIJ1NkpFYzLaa1fBcyfJXNyY3_tUwMSMV7Qw11SCH3BDEZlWDWy_MPqJ1Do1F3M740' },
  { title: 'Amanhã, Amanhã e Amanhã', rating: 5, cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO4ja6oMNaqIvuit5L2D8AkFUWgCAFhRDvIHDPXSuvt_xpNH2gYubnQkVBLA5P7wJqD3Oycjk_Vtw_ZGvKsIJwSFyin-qsRf3JD1xYZHnZIff-11BDDoroBUdowoAm5ag_KPZn1LlVfEvZpHqpPDOkSLFlYGvt-ZzCeoI2iJil3eVXZop7UCJkHmxDgAK0DKMMcqh8V-KIKGsZBJ2XuVslRAGMVnaDUvNYGI0nW-kj9kFMcJdR0oFw9wAyROsaatQH6LXDmLBogfs' },
  { title: 'O Mar Sem Estrelas', rating: 4, cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6a4kJ-96M7BHffmPRZ2pott9AkrUF-pOpHK0zxbUQzbHGlsuC94Wt5xaLXxhKBdoTud4hcLYj5vBVR8UwqzHk8fPLgk4La9qQQlXDQap7qokPnOSm1URtp-2fFFYUsGysecCUbBkiD3fyRgnyxrRdW_tjCFRpr0upNMBjvkwYKtql2wRn-pP5hCmT9P3vJlyLCxaqfCN0zr_ENJ_-2os-uaLQZHA8FOqj-gvyHJApURGt6ksV7WyhKdtNdg6__ooGaOpkkJIdgE' },
  { title: 'Orgulho e Preconceito', rating: 5, cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBagVK1IdwLahTA94052jQhFoldfA-c4tFfUhZe3W9egasajZu9qpUl9bkJQE98BzxosQprvYid_S7nVbdslmVjCPjnrhH_NpymSUDs6MVbeBiIcr11kN_vLODHnQBi-jtRSleXIpXsur3-7moulnWjmDMbL6hx372-MQAeo0E8E5xPcAzvPli4TNhR6Zt6ZVBCh4UqWZkyajbdFG3djr1lgF6d_5E7eDZW70NRUghMDGB8ds-il_NL7yf2W1qp2LftYz7DGlflt5g' },
  { title: 'Circe', rating: 5, cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjI598SxQnUrj-yMWuY9qnaEbv6aLhaGevYtgD6n6Yi63ts8_WE94jHZ7q2kLKG2PlrMDl7aZFnRuVpOYDMqZWJj-tyqO-bUdPWcW8tK8olIcctxGl3OcXOYT8dM8Slnb02u6V95dE8V7liMBeD6UFtv9bDXIX8tC3GrdJ_2rUEpCJgqv1Ucby73F86GD4IHK_OxW2F276PGDoNQ5AEX8SPLnHAtuK9Lkkg59cx67j1h5r2YiH9r3wuCNoQJg5A17y99VM5as5B98' }
];

export default function Profile() {
  return (
    <div className="px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Navegação Lateral */}
      <aside className="md:col-span-3 hidden md:block">
        <div className="sticky top-28 space-y-1">
          <div className="p-4 bg-surface-container-low rounded-xl mb-6">
            <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">Perfil do Leitor</p>
            <p className="text-on-surface font-semibold">Membro Ouro</p>
            <div className="mt-4 flex items-center gap-2 text-primary">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-xs font-bold uppercase tracking-wider">Top 1% Leitores</span>
            </div>
          </div>
          
          <nav className="space-y-1">
            {[
              { name: 'Início', icon: Home, active: false },
              { name: 'Biblioteca', icon: Book, active: false },
              { name: 'Perfil', icon: User, active: true },
              { name: 'Configurações', icon: Settings, active: false },
            ].map((item) => (
              <button 
                key={item.name}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg w-full transition-colors group",
                  item.active ? "bg-primary/10 text-primary" : "text-on-surface/60 hover:bg-surface-container-low"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <section className="md:col-span-9 space-y-12">
        {/* Cabeçalho Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-surface-container-low p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-white/40"
        >
          <div className="relative">
            {/* BACKEND: Buscar avatar do usuário logado */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <img src="https://picsum.photos/seed/julian/200/200" alt="Julian Thorne" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-2 right-2 bg-secondary text-white p-2 rounded-full shadow-lg">
              <Verified className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            {/* BACKEND: Buscar nome e bio do usuário logado */}
            <h1 className="serif-title text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-2">Julian Thorne</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center">
              <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest border border-secondary/20">Mestre Arquivista</span>
              <span className="text-on-surface-variant/60 text-sm">•</span>
              <span className="text-on-surface-variant font-medium">Membro desde Out 2021</span>
            </div>
            <p className="mt-4 text-on-surface-variant max-w-lg leading-relaxed italic">"Colecionando histórias como conchas. Atualmente perdido na seção de literatura francesa do século XVIII."</p>
          </div>
        </motion.div>

        {/* Grade de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_8px_30px_rgba(41,23,11,0.04)] flex flex-col items-center text-center"
            >
              <span className="text-secondary/60 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</span>
              <span className="serif-title text-5xl font-bold text-primary">{stat.value}</span>
              {stat.goal && (
                <>
                  <div className="mt-4 w-full bg-surface-container rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${stat.progress}%` }}></div>
                  </div>
                  <p className="mt-2 text-xs text-on-surface-variant">{stat.goal}</p>
                </>
              )}
              {stat.momentum && (
                <>
                  <p className="mt-2 text-xs text-on-surface-variant font-medium">{stat.sub}</p>
                  <div className="mt-4 flex gap-1 items-end h-8">
                    {[4, 6, 8, 5, 7].map((h, i) => (
                      <div key={i} className={cn("w-1.5 rounded-full", i % 2 === 0 ? "bg-secondary" : "bg-surface-container-high")} style={{ height: `${h * 4}px` }}></div>
                    ))}
                  </div>
                </>
              )}
              {stat.icon && (
                <>
                  <p className="mt-2 text-xs text-on-surface-variant font-medium">{stat.sub}</p>
                  <Book className="mt-4 w-6 h-6 text-secondary" />
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Lendo Atualmente */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="serif-title text-2xl font-bold text-on-surface">Lendo Atualmente</h2>
            <button className="text-primary text-sm font-bold uppercase tracking-widest hover:underline">Ver Todos</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* BACKEND: Mapear livros que o usuário está lendo no momento */}
            {[1, 2].map((i) => (
              <div key={i} className="bg-surface-container-low p-5 rounded-2xl flex gap-6 items-center">
                <div className="w-24 h-36 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                  <img src={`https://picsum.photos/seed/book${i}/200/300`} alt="Livro" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-bold text-on-surface text-lg">{i === 1 ? 'O Paciente Silencioso' : 'Os Miseráveis'}</h3>
                    <p className="text-sm text-on-surface-variant">{i === 1 ? 'Alex Michaelides' : 'Victor Hugo'}</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-on-surface">
                      <span>Progresso</span>
                      <span>{i === 1 ? '68%' : '12%'}</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: i === 1 ? '68%' : '12%' }}></div>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1 group">
                    Atualizar Progresso 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conquistas */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl">
          <h2 className="serif-title text-2xl font-bold text-on-surface mb-8">Conquistas & Medalhas</h2>
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {/* BACKEND: Buscar conquistas desbloqueadas pelo usuário */}
            {[
              { name: 'Leitor Ativo', icon: Star, lv: 'LV3' },
              { name: 'Finalizou 10 Livros', icon: Library },
              { name: 'Mestre Anotador', icon: History },
              { name: 'Campeão do Ano', icon: Award, locked: true },
            ].map((badge) => (
              <div key={badge.name} className={cn("flex flex-col items-center gap-3 w-32 group", badge.locked && "opacity-40 grayscale")}>
                <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-secondary relative transition-transform group-hover:scale-110">
                  <badge.icon className="w-10 h-10 fill-current" />
                  {badge.lv && (
                    <div className="absolute -bottom-1 -right-1 bg-primary w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                      {badge.lv}
                    </div>
                  )}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-center text-on-surface leading-tight">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Finalizados Recentemente */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="serif-title text-2xl font-bold text-on-surface">Finalizados Recentemente</h2>
            <button className="text-primary text-sm font-bold uppercase tracking-widest hover:underline">Arquivo Completo</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* BACKEND: Mapear livros finalizados pelo usuário */}
            {COMPLETED.map((book) => (
              <div key={book.title} className="space-y-3 group">
                <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="px-1">
                  <h4 className="text-sm font-bold text-on-surface truncate">{book.title}</h4>
                  <div className="flex text-secondary gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>
                        {i + 1 <= Math.floor(book.rating) ? (
                          <Star className="w-3.5 h-3.5 fill-current" />
                        ) : i < book.rating ? (
                          <StarHalf className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Star className="w-3.5 h-3.5" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
