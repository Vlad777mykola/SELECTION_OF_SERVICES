import { CSS_TS } from './css';
import { HTML_TS } from './html';
import { HTML_QUESTIONS_M_S } from './html_m_s';
import { JS_TS } from './js';
import { REACT_JS } from './react';
import { TS_TS } from './ts';

export type Questions = {
  readonly question: string;
  readonly response: readonly string[];
  readonly fullResponse: string;
};

export const ALL_QUESTIONS_BY_ID = new Map<string, Questions[]>([
  ['1', [...HTML_QUESTIONS_M_S, ...HTML_TS]],
  ['2', REACT_JS],
	['3', TS_TS],
	['4', JS_TS],
	['5', CSS_TS]
]);

export const DEFAULT_COLLECTIONS_QUESTION = [
	{
		id: '1',
		title: 'HTML',
		subtitle: 'HTML',
		level: 'A1',
		category: ['Other'],
		topic: ['HTML'],
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
	{
		id: '5',
		title: 'CSS',
		subtitle: 'CSS',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['CSS'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
];
