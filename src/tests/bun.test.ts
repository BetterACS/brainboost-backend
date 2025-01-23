// This is a simple test file to test that bun:test works correctly
import { expect, test } from "bun:test";

test("Simple test", () => {
  expect(1 + 1).toBe(2);
  expect("Hello, world!").toBe("Hello, world!");
  expect(true).toBe(true);
  expect(false).toBe(false);
});
