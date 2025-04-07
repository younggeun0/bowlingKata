class Game {
    totalScore: number = 0;

    roll(pins: number) {
        this.totalScore += pins;
    }

    score() {
        return this.totalScore;
    }
}

export { Game };
