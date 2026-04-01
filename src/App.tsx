import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sun, 
  Moon, 
  Github, 
  Mail, 
  Twitter, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown,
  Flame,
  Home,
  LineChart,
  Binary,
  Shapes,
  Palette,
  UserCircle,
  User,
  LayoutGrid,
  MessageCircle
} from 'lucide-react';
import { cn } from './lib/utils';
import { Tab, Post, FeaturedArticle } from './types';
import { POSTS, FEATURED_ARTICLES } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('首页');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const tabs: { name: Tab; icon: any; hasDropdown?: boolean }[] = [
    { name: '首页', icon: Home },
    { name: '证券', icon: LineChart, hasDropdown: true },
    { name: '编程', icon: Binary, hasDropdown: true },
    { name: '建模', icon: Shapes, hasDropdown: true },
    { name: '兴趣', icon: Palette, hasDropdown: true },
    { name: '关于我', icon: UserCircle },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Header */}
      <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 px-6 py-3 flex items-center justify-between",
        scrolled ? "glass-dark border-b border-white/10 shadow-2xl" : "bg-transparent"
      )}>
        <div className="flex items-center gap-8">
          <h1 className={cn(
            "text-2xl font-black tracking-tighter transition-all duration-500 cursor-pointer",
            scrolled ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent scale-95" : "text-white scale-100"
          )}>
            晓林的博客
          </h1>
          
          <div className={cn(
            "hidden md:flex items-center rounded-full px-4 py-2 gap-2 border transition-all duration-500 group focus-within:ring-2 ring-blue-500/50",
            scrolled ? "bg-white/5 border-white/10 w-48 focus-within:w-64" : "bg-black/20 border-white/20 w-64"
          )}>
            <Search size={18} className="text-zinc-400 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="搜索... (Ctrl K)" 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-zinc-500 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all relative group",
                activeTab === tab.name 
                  ? "text-blue-400" 
                  : "text-zinc-100 hover:text-white hover:bg-white/10"
              )}
            >
              <tab.icon size={16} className={cn("transition-transform group-hover:scale-110", activeTab === tab.name && "animate-pulse")} />
              {tab.name}
              {tab.hasDropdown && <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
              {activeTab === tab.name && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full hover:bg-white/10 transition-all text-zinc-100 hover:text-white active:scale-90"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <div className="h-8 w-px bg-white/10" />
          <button className="p-2.5 rounded-full hover:bg-white/10 transition-all text-zinc-100 hover:text-white active:scale-90">
            <LayoutGrid size={22} />
          </button>
        </div>
      </header>

      {/* Hero Section - Pure Image Display Space */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image is handled by body background in index.css */}
        {/* We add a subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20"
        >
          <motion.h2 
            className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            animate={{ letterSpacing: ["-0.05em", "0.02em", "-0.05em"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            晓林的博客
          </motion.h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-white/30" />
            <p className="text-xl md:text-3xl text-zinc-100 font-light tracking-[0.3em] drop-shadow-lg uppercase">
              哪有什么突然想起，只是一直放在心里
            </p>
            <div className="h-px w-12 bg-white/30" />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold hover:bg-white/20 transition-all shadow-xl group"
          >
            开始阅读
            <ChevronRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-30">
        {/* Sidebar */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-glass rounded-2xl overflow-hidden"
          >
            <div className="h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative">
              <img 
                src="https://picsum.photos/seed/avatar/150/150" 
                alt="Avatar" 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white/50 shadow-lg object-cover"
              />
            </div>
            <div className="pt-12 pb-6 px-6 text-center">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">晓林</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                程序猿，自由职业者，博主，英语爱好者，健身达人
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                {[Github, Mail, Twitter].map((Icon, i) => (
                  <button key={i} className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Articles */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="card-glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-2 font-bold text-zinc-800 dark:text-zinc-100">
                <Flame size={18} className="text-orange-500" />
                精选文章
              </h3>
              <div className="flex gap-1">
                <button className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <ul className="space-y-4">
              {FEATURED_ARTICLES.map((article, i) => (
                <li key={article.id} className="group cursor-pointer">
                  <div className="flex gap-3">
                    <span className="text-zinc-400 font-mono text-sm">{i + 1}</span>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <span className="text-[10px] text-zinc-400 mt-1 block">{article.date}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {POSTS.filter(post => 
                activeTab === '首页' || post.category.includes(activeTab) || activeTab === '关于我' && post.category === '关于本站'
              ).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Floating Character - Improved Loading and Display */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-2">
        <AnimatePresence>
          {showBubble && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md px-4 py-2 rounded-2xl rounded-bl-none shadow-xl border border-white/20 dark:border-zinc-700/50 text-sm font-medium text-zinc-800 dark:text-zinc-100"
            >
              欢迎来到晓林的博客~ ✨
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          className="relative group cursor-pointer pointer-events-auto"
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          onClick={() => setShowBubble(!showBubble)}
        >
          <div className="relative w-32 h-48">
            <img 
              src="https://raw.githubusercontent.com/iMeiji/iMeiji.github.io/master/images/rem.png" 
              alt="Rem" 
              className="w-full h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
              referrerPolicy="no-referrer"
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
              style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Footer Character / Decoration */}
      <div className="fixed bottom-0 right-0 p-4 opacity-20 pointer-events-none">
        <LayoutGrid size={200} className="text-white/10" />
      </div>
    </div>
  );
}

interface PostCardProps {
  post: Post;
  key?: string | number;
}

function PostCard({ post }: PostCardProps) {
  return (
    <motion.article 
      whileHover={{ y: -4 }}
      className="card-glass rounded-2xl overflow-hidden flex flex-col md:flex-row group"
    >
      <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] text-white font-medium uppercase tracking-wider">
          {post.category}
        </div>
      </div>
      <div className="md:w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 line-clamp-3 leading-relaxed">
            {post.summary}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1">
              <User size={12} />
              {post.author}
            </span>
            <span>{post.date}</span>
          </div>
          <button className="text-sm font-bold text-blue-500 hover:text-blue-600 transition-colors flex items-center gap-1 group/btn">
            阅读全文
            <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
