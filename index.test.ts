import { it, expect, describe, beforeEach } from "vitest";
import { Game } from "./index";

describe("Game", () => {
    let game: Game;

    beforeEach(function setUp() {
        game = new Game();
    });

    it("gutter game", () => {
        for (let i = 0; i < 20; i++) {
            game.roll(0);
        }

        expect(game.score()).toBe(0);
    });

    it("all ones", () => {
        for (let i = 0; i < 20; i++) {
            game.roll(1);
        }

        expect(game.score()).toBe(20);
    });
});
