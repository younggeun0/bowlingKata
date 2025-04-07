class Game {
    rolls: number[] = [];
    currentRoll: number = 0;

    roll(pins: number) {
        this.rolls[this.currentRoll++] = pins;
    }

    score() {
        let totalScore = 0;
        let i = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.rolls[i] + this.rolls[i + 1] === 10) {
                // spare
                totalScore += 10 + this.rolls[i + 2];
            } else {
                totalScore += this.rolls[i] + this.rolls[i + 1];
            }
            i += 2;
        }

        return totalScore;
    }
}

export { Game };
