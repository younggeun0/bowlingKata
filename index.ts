class Game {
    rolls: number[] = [];
    currentRoll: number = 0;

    private isSpare(frameIndex: number) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }

    private sumOfBallsInFrame(frameIndex: number) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }

    private spareBonus(frameIndex: number) {
        return this.rolls[frameIndex + 2];
    }

    private strikeBonus(frameIndex: number) {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }

    roll(pins: number) {
        this.rolls[this.currentRoll++] = pins;
    }

    score() {
        let totalScore = 0;
        let frameIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.rolls[frameIndex] === 10) {
                // strike
                totalScore += 10 + this.strikeBonus(frameIndex);
                frameIndex += 1;
            } else if (this.isSpare(frameIndex)) {
                totalScore += 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            } else {
                totalScore += this.sumOfBallsInFrame(frameIndex);
                frameIndex += 2;
            }
        }

        return totalScore;
    }
}

export { Game };
