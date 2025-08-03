import { HTML_TS } from './html';
import { HTML_QUESTIONS_M_S } from './html_m_s';
import { REACT_JS } from './react';

type Questions = {
  question: string;
  response: string[];
  fullResponse: string;
};

export const ALL_QUESTIONS_BY_ID = new Map<string, Questions[]>([
  ['01', [...HTML_QUESTIONS_M_S, ...HTML_TS]],
  ['2', REACT_JS],
  //['3', questionId_3],
  // ['4', questionId_4],
]);

export const DEFAULT_COLLECTIONS_QUESTION = [
  {
    id: '01',
    title: 'Html',
    subtitle: 'Html',
    level: 'A1',
    category: ['Other'],
    topic: ['CSS'],
    learningStyle: 'Selecting/Matching',
    learnByInterest: 'Books',
    learnBySkill: 'Reading',
  },
  {
    id: '1',
    title: 'CSS',
    subtitle: 'CSS',
    level: 'A1',
    category: ['Other'],
    topic: ['CSS'],
    learningStyle: 'Selecting/Matching',
    learnByInterest: 'Books',
    learnBySkill: 'Reading',
  },
  {
    id: '2',
    title: 'REACT',
    subtitle: 'REACT',
    level: 'B2',
    category: ['Other', 'Adjectives'],
    topic: ['REACT'],
    learningStyle: 'Selecting/Matching',
    learnByInterest: 'Books',
    learnBySkill: 'Reading',
  },
  {
    id: '3',
    title: 'TYPESCRIPT',
    subtitle: 'TYPESCRIPT',
    level: 'C1',
    category: ['Other', 'Adjectives', 'Verbs'],
    topic: ['TYPESCRIPT'],
    learningStyle: 'Selecting/Matching',
    learnByInterest: 'Books',
    learnBySkill: 'Reading',
  },
  {
    id: '4',
    title: 'JS',
    subtitle: 'JS',
    level: 'B2',
    category: ['Adjectives', 'Verbs'],
    topic: ['JS'],
    learningStyle: 'Selecting/Matching',
    learnByInterest: 'Books',
    learnBySkill: 'Reading',
  },
];
