import { it, expect, describe, beforeEach } from "vitest";
import { Game } from "./index";

describe("Game", () => {
    let game: Game;

    beforeEach(function setUp() {
        game = new Game();
    });

    function rollMany(n: number, pins: number) {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }

    it("gutter game", () => {
        rollMany(20, 0);

        expect(game.score()).toBe(0);
    });

    it("all ones", () => {
        rollMany(20, 1);

        expect(game.score()).toBe(20);
    });

    // it("one spare", () => {
    //     game.roll(5);
    //     game.roll(5); // spare
    //     game.roll(3);

    //     rollMany(17, 0);

    //     expect(game.score()).toBe(16);
    // });
});
