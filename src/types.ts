export type TopicId = 
  | 'math-thinking' 
  | 'size-magnitude' 
  | 'number-systems' 
  | 'cartesian' 
  | 'pythagoras' 
  | 'precedence' 
  | 'int-division' 
  | 'modulus' 
  | 'increments' 
  | 'mixing-types'
  | 'calculus';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Topic {
  id: TopicId;
  title: string;
  subtitle: string;
  icon: string;
  content: string;
  questions: Question[];
}
