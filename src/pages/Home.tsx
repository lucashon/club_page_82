import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// BACKEND: Estas constantes devem ser substituídas por dados vindos da API/Banco de Dados
const CURRENTLY_READING = [
  {
    id: '1984',
    title: '1984',
    author: 'George Orwell',
    progress: 42,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_vRw_X6998XNm2nlA4k_W06tAAlXhqj9_65oDgIg_CmBf6KW4XUC-5SVsxx9i7pfB1XBcyDDOa6zCPPoquaejLOa9rKpYcZuCMI2dxFj32qnsvF6ZRa0iThePrKPozgLQUm1ahy9NyODwf2TL-q7_muMTxaCU5Zj3K3HKYyWHM9_RVYezNLw8ttIdpaJ7ZyeZAAp7wTlG3yps9gq6f4b4Yl632EU998AMYibnsb2PkTDDEXoxAF0GePsXQizcUtGhT2fDGs2LBIo'
  },
  {
    id: 'gatsby',
    title: 'O Grande Gatsby',
    author: 'F. Scott Fitzgerald',
    progress: 15,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYqhjDAh9qq7UMVH-8uVAsalp5a_VBL4r-QPc12q73uJrNLEiRJsTuyl2MzrllDf7ZBa9IUrq4t9x5pfi7Sh5Ff_s6hY6IbvCpxgMr6QFCrWBwnDh9r0CddB7GyoDAG3TxU8x3Q6-ys3NmU3inFFRfaSmv0KpLbu2nLizPjnqyNYh-v3ssynWCEaot8pr-VwRKmWWag3bdjR4_1zdGDz9kwiwl08oNBQmoCM100248yKb_PXsD6nU0GouCLxv5GgQWu7JqlNhaBQE'
  }
];

const RANKING = [
  { name: 'Beatriz Souza', role: 'Devoradora de Livros', pts: '2.450', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHtkjvKffoJ6bov-cxEM7xrXJvhjYvVutKlv3_o4JTSvAt8oMgQdmFvXLdFIpRzaPZv1Whgw1vLsiWXoaCDMic89pvqWT8Nokux7OKPe40-GpHWZJIr1dmMM0lm4qxwsgTEE7NncicvAQlEHeMTNTuTwgtlsAylmaDAq4qSxk5WmxvdcWYxchmx5z5IjcJgfFVZutdY-KJSr5oEVAan2cz3ABiKxxSzoijHl-tFD3IlM-EVQSzjFa9pJ8KWZQCa2qKEnpEwjz7zps', rank: 1 },
  { name: 'Lucas Mendes', role: 'Explorador Clássico', pts: '2.120', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_fMgT9I4u8AsHi9cMDthKsNdw7BCpwiTgoGvj_q3bpsn037XevZBeGIvWdyRQf61Q34l_rrMX05CWitibfJYJIJIxnj_09hAYrR8vlnPCTXYAOGWJQ4fICvc8-1jmzWYIvFVHHTEyxGGBsiSOzCoYqQb5lk83OzPiGvFAgEYV2Z7YYGiXM35G-VyuVie-UDuCEgrx0cps4349cr9aZqDaUhMBxpHIAE1_2basVZUvss5Bgx7lQZCWJDkgH25oCwSHWlWZWjI9mBE', rank: 2 },
  { name: 'Carla Dias', role: 'Leitora Ávida', pts: '1.890', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp45ogWr_ixinaCmrXpZjnF8N9R2vp6KGj-KvQP0BCR9-KYbiNqWNQdw-YjhhZvdHzSsTKlQfJCIRRdeEcN32eiWUP3F_259CoXds0pGU1pDuPkQNbWWWSE9euCWS9lQ3wXyqnKSyTp5tPjgRnqdUFYlmUj7WauZaluj0QTp2AEehD8hqSp2cIRUlCktWZMv3krpU2X5buDidvUu-EQd4QMtq4QWEP8KL3W4jr4BEb0GJgrogzqa7YndnMYQ3xgXR2GhpW0apaRF0', rank: 3 }
];

export default function Home() {
  return (
    <div className="px-8 py-12 max-w-screen-2xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        {/* BACKEND: Buscar nome do usuário logado */}
        <h1 className="serif-title text-4xl md:text-5xl font-bold text-on-surface leading-tight">
          Olá, Dilyanne! <br />
          <span className="text-secondary italic font-normal">Pronto para mais um capítulo?</span>
        </h1>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Livro do Mês */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Livro do Mês</span>
          </div>
          {/* BACKEND: Buscar dados do livro destaque do mês */}
          <div className="w-full md:w-1/3 shrink-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3jRevP66MyGU9bh4Rfd5Tm0hh62plYhb-Aj1bPwbR4WCOy0TTXvjoKxKWa5eI0M6dx3DVUICtrp4I2b1MJAUo_fksgLzW1tnzOnT_LqQvwohM0HcLnTazZX10_XLpmBHx5JBQDagU_1AO0ZJgguUxN550Omcbtfdodc8e5jNz-vh2YeuFSJFy6s_JjYzaA9XQ35mZBzBTqJFbWbGEIcnWLJC3kboovGd67rAWlon_cT1Yk2hl3hEnbKWKASDPhm92RvGuwmdCtA" 
              alt="O Alquimista"
              className="w-full aspect-[2/3] object-cover rounded-lg shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <h2 className="serif-title text-3xl font-bold text-on-surface mb-2">Noites Brancas</h2>
            <p className="text-on-surface-variant font-medium mb-6">por Fiódor Dostoiévski</p>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-on-surface">Progresso de Leitura</span>
                <span className="serif-title text-2xl font-bold text-primary">46%</span>
              </div>
              <div className="w-full bg-surface-variant h-3 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '46%' }}></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                <span>Página 43</span>
                <span>Total 96</span>
              </div>
            </div>
            <Link 
              to="/book/alquimista"
              className="mt-8 bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide shadow-md self-start hover:shadow-lg transition-all active:scale-95 text-center"
            >
              Continuar Leitura
            </Link>
          </div>
        </motion.div>

        {/* Coluna de Estatísticas */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-low rounded-xl p-6 border-l-4 border-secondary shadow-sm"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Meta Mensal Pessoal</h3>
            {/* BACKEND: Calcular progresso da meta do usuário */}
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path className="stroke-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" />
                  <path className="stroke-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="65, 100" strokeLinecap="round" strokeWidth="3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-on-surface">65%</div>
              </div>
              <div>
                <p className="text-xl font-bold text-on-surface">2 / 3 Livros</p>
                <p className="text-xs text-on-surface-variant">Faltam 12 dias para o fim do mês</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Progresso Coletivo</h3>
            {/* BACKEND: Calcular progresso médio de todos os usuários ou do clube específico */}
            <div className="flex justify-between items-center mb-2">
              <span className="serif-title text-3xl font-bold text-on-surface">75%</span>
              <div className="flex -space-x-2">
                {[1, 2].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-surface-variant overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="Membro" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-background bg-surface-variant flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                  +12
                </div>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant italic mb-4">"Estamos quase lá, clube!"</p>
            <div className="w-full bg-surface-variant h-2 rounded-full">
              <div className="bg-tertiary-container h-full rounded-full" style={{ width: '75%', backgroundColor: '#008092' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Lendo Atualmente */}
        <div className="md:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="serif-title text-2xl font-bold text-on-surface">Lendo Atualmente</h3>
            <Link to="/library" className="text-primary text-sm font-bold hover:underline">Ver todos</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {/* BACKEND: Mapear livros que o usuário está lendo no momento */}
            {CURRENTLY_READING.map((book, idx) => (
              <motion.div 
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-surface-container-lowest p-3 md:p-5 rounded-xl flex flex-col sm:flex-row gap-3 md:gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full sm:w-20 h-32 sm:h-28 object-cover rounded shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col justify-between flex-grow py-1">
                  <div>
                    <h4 className="font-bold text-on-surface text-sm md:text-base leading-tight mb-1">{book.title}</h4>
                    <p className="text-[10px] md:text-xs text-on-surface-variant">{book.author}</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-tighter">
                      <span>Progresso</span>
                      <span>{book.progress}%</span>
                    </div>
                    <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: `${book.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ranking */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-4"
        >
          <div className="bg-surface-container-high rounded-xl p-6 h-full shadow-sm">
            <h3 className="serif-title text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-secondary" />
              Ranking de Leitores
            </h3>
            <div className="space-y-6">
              {/* BACKEND: Buscar lista de líderes do banco de dados */}
              {RANKING.map((user) => (
                <div key={user.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={cn(
                        "w-10 h-10 rounded-full bg-surface-variant border-2 overflow-hidden",
                        user.rank === 1 ? "border-primary" : "border-transparent"
                      )}>
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className={cn(
                        "absolute -top-1 -right-1 text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full",
                        user.rank === 1 ? "bg-primary" : "bg-on-surface-variant"
                      )}>
                        {user.rank}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">{user.name}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">{user.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-secondary">{user.pts} pts</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-2 border-2 border-outline-variant text-on-surface-variant text-xs font-bold rounded-lg hover:bg-surface-variant transition-colors">
              Ver Ranking Completo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
