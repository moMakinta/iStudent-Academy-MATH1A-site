import React from 'react';
import { motion } from 'motion/react';
import { TopicId } from '../types';

interface InteractiveGraphicProps {
  topicId: TopicId;
}

export const InteractiveGraphic: React.FC<InteractiveGraphicProps> = ({ topicId }) => {
  const renderGraphic = () => {
    switch (topicId) {
      case 'math-thinking':
        return (
          <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto">
            <motion.rect
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              x="50" y="50" width="80" height="80" rx="8" fill="#333"
            />
            <text x="90" y="95" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Complex</text>
            <text x="90" y="115" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Task</text>
            
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              d="M 140 90 L 190 90" stroke="#8B4513" strokeWidth="4" fill="none"
            />
            
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <rect x="210" y="30" width="120" height="40" rx="5" fill="#D2B48C" />
              <text x="270" y="55" fill="#333" fontSize="12" fontWeight="bold" textAnchor="middle">Break Down</text>
              
              <rect x="210" y="80" width="120" height="40" rx="5" fill="#D2B48C" />
              <text x="270" y="105" fill="#333" fontSize="12" fontWeight="bold" textAnchor="middle">Find Patterns</text>
              
              <rect x="210" y="130" width="120" height="40" rx="5" fill="#D2B48C" />
              <text x="270" y="155" fill="#333" fontSize="12" fontWeight="bold" textAnchor="middle">Form Logic</text>
            </motion.g>
          </svg>
        );
      case 'cartesian':
        return (
          <svg viewBox="0 0 300 300" className="w-full max-w-xs mx-auto">
            <line x1="150" y1="20" x2="150" y2="280" stroke="#333" strokeWidth="2" />
            <line x1="20" y1="150" x2="280" y2="150" stroke="#333" strokeWidth="2" />
            <text x="270" y="140" fill="#333" fontSize="14" fontWeight="bold">X</text>
            <text x="160" y="30" fill="#333" fontSize="14" fontWeight="bold">Y</text>
            
            <motion.circle
              initial={{ r: 0 }}
              animate={{ r: 6 }}
              cx="220" cy="80" fill="#8B4513"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              x="230" y="75" fill="#8B4513" fontSize="12" fontWeight="bold"
            >
              (x, y)
            </motion.text>
          </svg>
        );
      case 'pythagoras':
        return (
          <svg viewBox="0 0 400 250" className="w-full max-w-md mx-auto">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              d="M 100 200 L 300 200 L 300 50 Z"
              fill="rgba(139, 69, 19, 0.1)"
              stroke="#8B4513"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <text x="200" y="230" fill="#333" fontSize="16" fontWeight="bold">a</text>
            <text x="320" y="130" fill="#333" fontSize="16" fontWeight="bold">b</text>
            <text x="140" y="110" fill="#8B4513" fontSize="18" fontWeight="bold">c</text>
          </svg>
        );
      default:
        return (
          <div className="flex items-center justify-center h-48 bg-academy-brown-light/5 rounded-2xl border-2 border-dashed border-academy-brown-light/20">
            <p className="text-academy-brown-warm italic">Interactive Graphic for {topicId}</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-inner border border-academy-brown-light/10 my-8">
      {renderGraphic()}
    </div>
  );
};
