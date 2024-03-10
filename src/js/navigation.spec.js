import { getBestPlayers } from "./navigation";

test("Returns about-us for english language", () => {
    // given
    global.localStorage = {
        getItem: () => `[
            {"name":"Invader","points":270},
            {"name":"BeastyBest","points":250},
            {"name":"Biggismall","points":210},
            {"name":"MDM","points":110},
            {"name":"Bigos","points":80},
            {"name":"Anna","points":70}
        ]`
    }

    // when
    let result = getBestPlayers()

    // then
    expect(result.length).toBe(6);
});


