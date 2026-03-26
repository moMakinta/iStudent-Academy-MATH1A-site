import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { TopicId } from '../types';

interface SidebarProps {
  topics: { id: TopicId; title: string; icon: string }[];
  activeTopic: TopicId;
  onSelectTopic: (id: TopicId) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ topics, activeTopic, onSelectTopic, isDarkMode, onToggleDarkMode }) => {
  return (
    <aside className="w-72 bg-academy-card border-r border-academy-border text-academy-text-primary h-screen fixed left-0 top-0 overflow-y-auto z-50 flex flex-col">
      <div className="p-8 border-b border-academy-border">
        <div className="flex items-center gap-3 mb-2">
          <Icons.Sigma className="text-academy-green-primary w-8 h-8" />
          <h1 className="text-xl font-bold tracking-tight">iStudent Academy</h1>
        </div>
        <p className="text-xs text-academy-text-secondary uppercase tracking-widest font-semibold">Maths & Logic Lab</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {topics.map((topic) => {
          const IconComponent = (Icons as any)[topic.icon] || Icons.Book;
          return (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                activeTopic === topic.id
                  ? 'bg-academy-green-primary text-white shadow-lg'
                  : 'text-academy-text-secondary hover:bg-academy-green-primary/10 hover:text-academy-green-primary'
              }`}
            >
              <IconComponent size={20} />
              <span className="font-medium text-sm">{topic.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-academy-border space-y-4">
        <button
          onClick={onToggleDarkMode}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-academy-bg border border-academy-border hover:border-academy-green-primary transition-all text-sm font-medium"
        >
          <div className="flex items-center gap-3">
            {isDarkMode ? <Icons.Moon size={18} /> : <Icons.Sun size={18} />}
            <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
          <div className={`w-10 h-5 rounded-full p-1 transition-colors ${isDarkMode ? 'bg-academy-green-primary' : 'bg-gray-300'}`}>
            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
        </button>
        
        <div className="text-center">
          <p className="text-[10px] text-academy-text-secondary uppercase tracking-tighter">© 2026 iStudent Academy</p>
        </div>
      </div>
    </aside>
  );
};
