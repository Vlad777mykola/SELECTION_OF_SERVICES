import { HTML_TS } from './html';
import { REACT_JS } from './react';

type Question = {
	readonly  question: string;
	readonly  response: readonly string[];
	readonly fullResponse: string;
};

type QuestionsArray = readonly Question[];

export const ALL_QUESTIONS_BY_ID = new Map<string, QuestionsArray>([
	['1', HTML_TS],
	['2', REACT_JS],
]);

export const DEFAULT_COLLECTIONS_QUESTION = [
	{
		id: '1',
		title: 'HTML',
		subtitle: 'HTML',
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
