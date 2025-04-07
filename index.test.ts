import { it, expect } from "vitest";
import { Game } from "./index";

it("gutter game", () => {
    const game = new Game();

    for (let i = 0; i < 20; i++) {
        game.roll(0);
    }
});
