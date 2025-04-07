class Game {
    rolls: number[] = [];
    currentRoll: number = 0;

    roll(pins: number) {
        this.rolls[this.currentRoll++] = pins;
    }

    score() {
        let totalScore = 0;
        let frameIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10) {
                // spare
                totalScore += 10 + this.rolls[frameIndex + 2];
            } else {
                totalScore += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
            }
            frameIndex += 2;
        }

        return totalScore;
    }
}

export { Game };
