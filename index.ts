class Game {
    rolls: number[] = [];
    currentRoll: number = 0;

    roll(pins: number) {
        this.rolls[this.currentRoll++] = pins;
    }

    score() {
        let totalScore = 0;

        for (let i = 0; i < this.rolls.length; i++) {
            totalScore += this.rolls[i];
        }

        return totalScore;
    }
}

export { Game };
