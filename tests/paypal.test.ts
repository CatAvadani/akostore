import { generateAccessToken } from "../lib/paypal";

// Test to generate access token from PayPal
test("generate token from PayPal", async () => {
  const tokenResponse = await generateAccessToken();

  expect(typeof tokenResponse).toBe("string");
  expect(tokenResponse.length).toBeGreaterThan(0);
});
