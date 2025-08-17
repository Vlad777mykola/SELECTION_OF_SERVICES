import { CSS_TS } from './css';
import { HTML_TS } from './html';
import { HTML_QUESTIONS_M_S } from './html_m_s';
import { JS_TS } from './js';
import { REACT_JS } from './react';
import { TS_TS } from './ts';
import { GENERAL_QUESTIONS } from './general_questions';
import { WEB_PERFORMANCE } from './web_performance';
import { API_TS } from './api';
import { NETWORK_BASICS } from './networks_basics';
import { WORK_BACKEND } from './work_backend';
import { DATA_STRUCTURE } from './data_structure';
import { GIT_TS } from './git';
import { TESTING } from './testing';
import { ACCESSIBILITY } from './accessibility';
import { ARCHITECTURE } from './architecture';
import { SECURITY } from './security';

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
	['5', CSS_TS],
	['6', GENERAL_QUESTIONS],
	['7', WEB_PERFORMANCE],
	['8', API_TS],
	['9', NETWORK_BASICS],
	['10', WORK_BACKEND],
	['11', DATA_STRUCTURE],
	['12', GIT_TS],
	['13', TESTING],
	['14', ACCESSIBILITY],
	['15', ARCHITECTURE],
	['16', SECURITY]
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
	{
		id: '6',
		title: 'General Questions',
		subtitle: 'General Questions',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['General Questions'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '7',
		title: 'Web Performance',
		subtitle: 'Web Performance',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Web Performance'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '8',
		title: 'Api of browser',
		subtitle: 'Api of browser',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Api of browser'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '9',
		title: 'Network Basics',
		subtitle: 'Network Basics',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Network Basics'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '10',
		title: 'Work with backend',
		subtitle: 'Work with backend',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Work with backend'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '11',
		title: 'Data structure',
		subtitle: 'Data structure',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Data structure'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '12',
		title: 'Git',
		subtitle: 'Git',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Git'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '13',
		title: 'Testing',
		subtitle: 'Testing',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Testing'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '14',
		title: 'Accessibility',
		subtitle: 'Accessibility',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Accessibility'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '15',
		title: 'Architercture',
		subtitle: 'Architercture',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Architercture'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
	{
		id: '16',
		title: 'Security',
		subtitle: 'Security',
		level: 'B2',
		category: ['Adjectives', 'Verbs'],
		topic: ['Security'],
		learningStyle: 'Selecting/Matching',
		learnByInterest: 'Books',
		learnBySkill: 'Reading',
	},
];
