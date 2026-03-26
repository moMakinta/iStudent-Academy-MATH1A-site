import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from './components/Sidebar';
import { Quiz } from './components/Quiz';
import { TOPICS } from './constants';
import { TopicId } from './types';
import { BookOpen, GraduationCap, Lightbulb, Trophy, Zap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState<TopicId>(TOPICS[0].id);
  const [view, setView] = useState<'learn' | 'quiz'>('learn');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const activeTopic = TOPICS.find((t) => t.id === activeTopicId)!;

  useEffect(() => {
    // Reset view to learn when topic changes
    setView('learn');
  }, [activeTopicId]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-academy-bg flex transition-colors duration-300">
      <Sidebar
        topics={TOPICS.map((t) => ({ id: t.id, title: t.title, icon: t.icon }))}
        activeTopic={activeTopicId}
        onSelectTopic={setActiveTopicId}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="flex-1 ml-72 p-12 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTopicId + view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <header className="mb-12">
              <div className="flex items-center gap-2 text-academy-green-primary mb-2">
                <GraduationCap size={20} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{activeTopic.subtitle}</span>
              </div>
              <h1 className="text-5xl font-black text-academy-text-primary tracking-tight mb-6">
                {activeTopic.title}
              </h1>

              <div className="flex gap-4">
                <button
                  onClick={() => setView('learn')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                    view === 'learn'
                      ? 'bg-academy-green-primary text-white shadow-lg'
                      : 'bg-academy-card text-academy-text-secondary hover:bg-academy-green-primary/10'
                  }`}
                >
                  <BookOpen size={18} /> Learn
                </button>
                <button
                  onClick={() => setView('quiz')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                    view === 'quiz'
                      ? 'bg-academy-green-primary text-white shadow-lg'
                      : 'bg-academy-card text-academy-text-secondary hover:bg-academy-green-primary/10'
                  }`}
                >
                  <Trophy size={18} /> Quiz Lab
                </button>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {view === 'learn' ? (
                  <div className={`glass-card p-10 prose ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
                    <div className="markdown-body">
                      <ReactMarkdown>{activeTopic.content}</ReactMarkdown>
                    </div>
                    
                    <div className="mt-12 p-6 bg-academy-green-primary/5 rounded-2xl border-l-4 border-academy-green-primary">
                      <div className="flex items-center gap-2 mb-2 text-academy-green-primary font-bold">
                        <Lightbulb size={18} />
                        Did you know?
                      </div>
                      <p className="text-sm text-academy-text-secondary italic">
                        Mathematical logic is the foundation of all modern computing. Every app you use is built on these core principles.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="glass-card p-10">
                    <Quiz questions={activeTopic.questions} topicTitle={activeTopic.title} />
                  </div>
                )}
              </div>

              <aside className="space-y-8">
                <div className="bg-academy-card border border-academy-border text-academy-text-primary p-8 rounded-3xl shadow-xl">
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Zap size={20} className="text-academy-green-primary" />
                    Quick Reference
                  </h4>
                  <ul className="space-y-4 text-sm text-academy-text-secondary">
                    <li className="flex justify-between">
                      <span>Topic</span>
                      <span className="text-academy-text-primary font-medium">{activeTopic.title}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Difficulty</span>
                      <span className="text-academy-green-primary font-medium">Intermediate</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Quizzes</span>
                      <span className="text-academy-text-primary font-medium">{activeTopic.questions.length}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-academy-card p-8 rounded-3xl border border-academy-border shadow-sm">
                  <h4 className="text-lg font-bold text-academy-text-primary mb-4">Learning Path</h4>
                  <div className="space-y-4">
                    {TOPICS.slice(0, 4).map((t, i) => (
                      <div key={t.id} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          t.id === activeTopicId ? 'bg-academy-green-primary text-white' : 'bg-academy-bg text-academy-text-secondary'
                        }`}>
                          {i + 1}
                        </div>
                        <span className={`text-sm font-medium ${t.id === activeTopicId ? 'text-academy-text-primary' : 'text-academy-text-secondary'}`}>
                          {t.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
