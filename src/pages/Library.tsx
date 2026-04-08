import { motion } from 'motion/react';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// BACKEND: Esta lista deve ser carregada da API (ex: GET /api/books)
const BOOKS = [
  {
    id: 'midnight-library',
    title: 'A Biblioteca da Meia-Noite',
    author: 'Matt Haig',
    progress: 75,
    tag: 'Livro do Mês',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Qr2eP9-KcJUJlLUnbfGWUX3LKhlE9azUveuqS8YHXrbt6SJcZamcYIThgPD7Vj8fZ-QY0LrhRQYivy5eYmtYLM2MBhm3L99ZQOso4xI-qQCDbo4tEeRFcBzu24vuoG7w_VzxgSVd_ITjiSo80tOl41sMKPCJPgA_-TH0--EHOZOTOGCBknTJvTa-D-jMsXsND6MnHNz9vJbCW-P0-gcVcM8MCzzvpa3YlvltImaYAnHLJ85W2IAiI1Y1nxRl34sTskg66T5b96c'
  },
  {
    id: 'great-expectations',
    title: 'Grandes Esperanças',
    author: 'Charles Dickens',
    progress: 32,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEhgtraI_bb-h0pbclwEkIT9gQUoiHuhD-NffmGi9FyLwdZtfBOCjit9VR7Kl8rpsrEjplDnwb20b7FO3tJIa3kMUNtiz1RESvz8mAMGtkySDUTmVR768kxDzWpj1RvMlf02LE2EEihgJdh7ch90FAAseOsQuklEgywNXJRLZToA1ItMOss-IBi3AifleCwErwUbuid0dfMOR0EwDDBvDHWgb3U2h15UuyyqmdQwW1TiKkzgmFs8k7JBN3gCMEe0LRXymLZgBPFZ8'
  },
  {
    id: 'anxious-people',
    title: 'Gente Ansiosa',
    author: 'Fredrik Backman',
    progress: 100,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4f08qcDQ0rpXnjivdF-Lzq3r0akGYxpCa5waJ83DiXfvnwjOZ6qZarO9BYtdiCnR_5JhzgCN23agMMEp-k0I-niYpc4kZiV3F2t2vUeEfa0YYmp7ete_Fs2sWI6CTyWEDOoZHlVqYRpx34TuZz2dmHh6yU7CjyLNM86AR_iFZXiaKFrrEsXMooqAKZ38AIC1IMVUI3lM2udWXBsyBGTit-Nbi6UA6EziEpYxXh5FkpezMj2zGcgwkUB1PEVK3kxzmnk-ThXNFwz4'
  },
  {
    id: 'circe',
    title: 'Circe',
    author: 'Madeline Miller',
    progress: 50,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDxiII9KnCznpeO4ArLUCGt2n8iFMX_bXEt553wT2_v_8GovPoML9U51so9_7rBx1JzDpCT2HWk7xkuA-WGFFEYYQyLhhHsGKfcRvKL7j2PgE3ghUztiSgwuktn2UIOtL6_XwqXgBpLO5xDvNWxolBUPA4yzRC5pBge948cF7dirPvfZmEa0jBlHh1tt2t1nycuJ5RcqRMEe8NAUaYWoyF4iAj3CqjdO0X8Y6ir9NgwW6UW4xtRJ2JRa5VfqCHFbii98bviOeMNmQ'
  },
  {
    id: 'normal-people',
    title: 'Pessoas Normais',
    author: 'Sally Rooney',
    progress: 12,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnWbwUgsL-I_838tj2ZdwRCKrLRahAZv4TikcxNt1tMo1m4_YiiJOBrRwLKxKFA1wAxjjCXh618DErz3QOWdd-2T8y5QgoIjs5vMHmbGDFwH_FPDK-hC1Wc3_AbdQaKVy4_nQTpRNvUxfZs4RtwpQzGSUUjpOsKpoeDSTVNPJG_ejG0QkGx9t0y4m2veXNl1vbhQdlGK0l52-PIkMsgXU_A5cYC9s_c9qvHpAc_Ml01WQ8FC0snevV7ivcoJNO6jtob0hS1_hpQG0'
  },
  {
    id: 'project-hail-mary',
    title: 'Devotos de Hail Mary',
    author: 'Andy Weir',
    progress: 0,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdkft2Sp4VgqoBDquN-jL33fMgE1cXy6bJC31pT45k1aftcb-G0zVEm_oA826mQ_tlXGZ7j6W1T1pe-ibIuUAH2MZ7_wf4EZ8nwy_tD4JrwZpL_BYTIXxyq_k-Cp__rFPKDm8tQqIHrbRNPCBQdRCbZLk0eaBfzG_HIzkntrTKMVJmvPCJS27R8BPrk2rZM9dTJT4OGKLmWm8eNBgsEKU19xiMxKbTuju-z4XVmDJlCv8BBMer7TXzceXe1H4STo_OBmMjjdM8daE'
  }
];

export default function Library() {
  return (
    <div className="px-8 py-12 max-w-screen-2xl mx-auto">
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-headline font-bold text-on-surface tracking-tight mb-4"
            >
              Seu Arquivo Pessoal
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant text-lg font-medium leading-relaxed"
            >
              Curadoria da sua jornada através da palavra escrita. Acompanhe seu progresso, participe de discussões e descubra sua próxima grande narrativa.
            </motion.p>
          </div>
          <div className="w-full md:w-96">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors w-5 h-5" />
              <input 
                type="text" 
                placeholder="Buscar título ou autor..."
                className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-10">
          {['Todos os Livros', 'Lendo Atualmente', 'Lista de Desejos', 'Finalizados'].map((filter, idx) => (
            <button 
              key={filter}
              className={idx === 0 
                ? "px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-md"
                : "px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium hover:bg-surface-variant transition-colors"
              }
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {/* BACKEND: Mapear lista de livros vinda do estado (carregada da API) */}
        {BOOKS.map((book, idx) => (
          <motion.article 
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group relative flex flex-col bg-surface-container-lowest rounded-xl p-4 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(41,23,11,0.12)] hover:-translate-y-1"
          >
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-6 shadow-sm">
              <img 
                src={book.cover} 
                alt={book.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {book.tag && (
                <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                  {book.tag}
                </div>
              )}
            </div>
            <div className="flex-grow">
              <h3 className="font-headline text-xl font-bold text-on-surface leading-tight mb-1">{book.title}</h3>
              <p className="text-on-surface-variant text-sm font-medium mb-6">{book.author}</p>
              <div className="mb-6">
                <div className="flex justify-between text-[11px] font-bold text-primary uppercase tracking-widest mb-2">
                  <span>Progresso</span>
                  <span>{book.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${book.progress}%` }}></div>
                </div>
              </div>
            </div>
            <Link 
              to={`/book/${book.id}`}
              className="w-full py-3 bg-surface-container-low text-on-surface font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-center"
            >
              Ver detalhes
            </Link>
          </motion.article>
        ))}

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="group flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-xl p-8 hover:bg-surface-container-low transition-colors duration-300 min-h-[400px]"
        >
          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Plus className="text-primary w-8 h-8" />
          </div>
          <span className="font-headline text-lg font-bold text-on-surface">Adicionar à Biblioteca</span>
          <span className="text-on-surface-variant text-xs mt-1 uppercase tracking-widest font-bold">Expanda sua estante</span>
        </motion.button>
      </section>
    </div>
  );
}
