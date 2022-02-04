/* eslint-disable no-undef */
import { TestScheduler } from 'jest';
import Space from '../src/index.js';

beforeEach(function () {
	let userInput = [25];
});

describe('Space'),
	() => {
		test('should calculate age based on Jupiter equation', () => {
			const ageJupiter = Math(Space.age / 11.86);
		});
		test('should calculate age based on Mars equation', () => {
			const ageMars = Math(Space.age / 11.88);
		});
		test('should calculate age based on Venus equation', () => {
			const ageVenus = Math(Space.age / 0.62);
		});
		test('should calculate age based on Mercury equation', () => {
			const ageMercury = Math(Space.age / 0.24);
		});
	};
