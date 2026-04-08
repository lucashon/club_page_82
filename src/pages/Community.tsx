import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, MoreVertical, Paperclip, Smile, Send } from 'lucide-react';

// BACKEND: Estas listas devem ser carregadas da API (ex: GET /api/circles)
const CIRCLES = [
  { id: 'classic', name: 'Círculos Literários', lastMsg: 'Digitando...', time: '12:45', active: true, cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFia2AvwQolOBb4ay_jKO_x_Pm30ltUxqwSMe6l3_GDl1iVNm3xVpUMoQ0uvWY3POII-bbBQJzrds2Yz-sGhmjB9Iwj8he62-PbqxWgXciuFXoI-Oc8WNcF-fIL6wTHOSR2DemrpA1h5feFX6UrAj8iJMte30vWdQsM70PYC0xVoTxbBE8mg_3M5PuOUkWPmmfwMZM6Z-W53orgW3ZwuCy02NQ5Yh_1oH3aKF2vuIg3omrt0xzlCTHqdDuH6otUaNi26hN1avfIBc' },
  { id: 'scifi', name: 'Exploradores Sci-Fi', lastMsg: 'O que acharam do final?', time: 'Ontem', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMuoPQCG4G5t0X0GlnMVc0fMeedvT4Bcp6nBNs_higH7pLsGjwq_6fJQTb3oPFStoHrYhwS9kadOiD_hxxaVbtkS2fMqfK_zoO6gxR8BTXX8-iFyRXZJKFxjEOD7mte1OpI1E8MpBGADm8uvpC11rdzb_zZQBD_fNX-cT3h9a_elBSWZS4KISVzC_n-iljfYBsxHb3ft8_10cgW9OsBO0O1k5JL6UB_CAURDnWdnjwlFZZ8QqCb59Bnz4FP_Rc1RxI951OYMKHlJw' },
  { id: 'art', name: 'Arte & Poesia', lastMsg: 'Vejam esta estrofe.', time: 'Seg', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUpThtOtPiW50Uc_kMQ5zUDxpN6-mJHuGOnGMxNwmlwYj8izKA2uYFwsZfD0Wg0FnDKEr162fZNkEGBHgmJNDzzKztdTJ5_9PbRtoEoGk91uJ55OsKutWxht_X4LRyKuqT8oMOMhzp31RyZJm3_eDF8ZmJAxSssX_UnnRqWedjoaXVQPoXjnQSkJ3zR0tUCzJ98YS_Oa-TwFjrZILPuVYIUn7bKevH3blaQaQVaRDLaifKlg72_uofeqVNyTsCZCZe6iINvSh3-yU' }
];

export default function Community() {
  useEffect(() => {
    console.log("Página de Comunidade carregada com sucesso.");
  }, []);

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-8 pb-12 flex h-[calc(100vh-120px)]">
      {/* Chat da Comunidade (Agora ocupando o espaço central) */}
      <section className="flex-1 flex bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-on-surface/5">
        {/* Sidebar do Chat */}
        <div className="w-80 bg-surface-container-low flex flex-col border-r border-on-surface/5">
          <div className="p-6 pb-2">
            <h2 className="text-xl font-bold text-on-surface mb-4">Círculos de Leitura</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
              <input 
                type="text" 
                placeholder="Encontrar um grupo..."
                className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
            {/* BACKEND: Mapear círculos vindos da API */}
            {CIRCLES.map((circle) => (
              <div 
                key={circle.id}
                className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all ${circle.active ? 'bg-primary/5' : 'hover:bg-surface-container-high'}`}
              >
                <div className="relative w-12 h-12 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                  <img src={circle.cover} alt={circle.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm truncate">{circle.name}</span>
                    <span className="text-[10px] text-on-surface-variant shrink-0">{circle.time}</span>
                  </div>
                  <p className={`text-xs truncate ${circle.active ? 'text-primary font-medium italic' : 'text-on-surface-variant'}`}>
                    {circle.lastMsg}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Área Principal do Chat */}
        <div className="flex-1 flex flex-col relative bg-surface-container-lowest">
          <div className="p-4 border-b border-on-surface/5 flex justify-between items-center bg-surface-container-lowest/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-lg">Círculo de Clássicos</h3>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] uppercase tracking-widest font-bold rounded">12 Online</span>
            </div>
            <div className="flex gap-4">
              <button className="text-on-surface-variant hover:text-primary transition-colors"><Search className="w-5 h-5" /></button>
              <button className="text-on-surface-variant hover:text-primary transition-colors"><MoreVertical className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
            <div className="flex justify-center">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant bg-surface-container-low px-4 py-1 rounded-full">Hoje</span>
            </div>

            {/* BACKEND: Mapear mensagens do círculo selecionado vindas do WebSocket ou API */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <img src="https://picsum.photos/seed/clara/100/100" className="w-8 h-8 rounded-lg object-cover" alt="Clara" referrerPolicy="no-referrer" />
              <div className="bg-surface-container-high p-4 rounded-2xl rounded-bl-sm">
                <p className="text-xs font-bold text-secondary mb-1">Clara S.</p>
                <p className="text-sm leading-relaxed">Alguém já começou a releitura de "O Grande Gatsby"? A prosa é ainda mais deslumbrante do que eu lembrava.</p>
                <p className="text-[10px] text-on-surface-variant mt-2 text-right">10:24</p>
              </div>
            </div>

            <div className="flex items-end gap-3 max-w-[80%] ml-auto flex-row-reverse">
              <div className="bg-primary text-white p-4 rounded-2xl rounded-br-sm shadow-sm">
                <p className="text-sm leading-relaxed">Acabei de terminar o primeiro capítulo! A descrição da luz verde no fim do cais é pura poesia.</p>
                <p className="text-[10px] opacity-70 mt-2 text-right">10:30</p>
              </div>
            </div>

            <div className="flex items-end gap-3 max-w-[80%]">
              <img src="https://picsum.photos/seed/julian/100/100" className="w-8 h-8 rounded-lg object-cover" alt="Julian" referrerPolicy="no-referrer" />
              <div className="bg-surface-container-high p-4 rounded-2xl rounded-bl-sm">
                <p className="text-xs font-bold text-secondary mb-1">Julian V.</p>
                <p className="text-sm mb-3">Vejam esta cópia da primeira edição que encontrei no mercado de pulgas!</p>
                <div className="rounded-lg overflow-hidden mb-2">
                  <img src="https://picsum.photos/seed/book/400/300" className="w-full h-48 object-cover" alt="Livro Antigo" referrerPolicy="no-referrer" />
                </div>
                <p className="text-[10px] text-on-surface-variant text-right">10:45</p>
              </div>
            </div>
          </div>

          {/* Área de Entrada */}
          <div className="p-4 bg-surface-container-low/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 bg-surface-container-lowest p-2 rounded-xl border border-on-surface/5">
              <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant"><Paperclip className="w-5 h-5" /></button>
              <input type="text" placeholder="Compartilhe seus pensamentos..." className="flex-1 bg-transparent border-none focus:ring-0 text-sm" />
              <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant"><Smile className="w-5 h-5" /></button>
              <button className="bg-primary text-white p-2 rounded-lg hover:scale-105 active:scale-95 transition-transform">
                <Send className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
