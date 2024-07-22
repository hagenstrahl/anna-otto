import { getMetadata, websiteTitle } from "../../libs/metadata";

describe("metadata", () => {
  test("should return title without prefix", () => {
    expect(getMetadata({})).toEqual({
      title: websiteTitle,
    });
  });

  test("should return title with prefix", () => {
    expect(getMetadata({ title: "test" })).toEqual({
      title: "test - " + websiteTitle,
    });
  });
});
