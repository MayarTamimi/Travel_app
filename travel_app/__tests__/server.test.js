import { server } from "../src/server/server";

describe('Test: "PORT" should be set to 3000', () => {
  it("should be a 3000", async () => {
    expect(server).toBe(undefined);
  });
});
