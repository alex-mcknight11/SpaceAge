import $ from 'jquery';
import 'bootstrap';

export default class AgeCalculator {
	constructor(age) {
		this.age = age;
	}
	ageJupiter() {
		return this.age / 11.86;
	}
	ageMars() {
		return this.age / 1.88;
	}
	ageVenus() {
		return this.age / 0.62;
	}
	ageMercury() {
		return this.age / 0.24;
	}
}
