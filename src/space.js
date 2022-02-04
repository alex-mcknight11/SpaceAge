export class AgeCalculator {
	constructor(age, planet) {
		(this.age = age), (this.planet = planet);
	}
	ageJupiter() {
		this.age = this.age / 11.86;
	}
	ageMars() {
		this.age = this.age / 1.88;
	}
	ageVenus() {
		this.age = this.age / 0.62;
	}
	ageMercury() {
		this.age = this.age / 0.24;
	}
}
