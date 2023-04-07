import globalStore from ".";
import { HOME } from "../../constants/MenuItem";
import { DARK, LIGHT } from "../../constants/themes";

describe("GlobalStore", () => {
  it("should initialize with default values", () => {
    expect(globalStore.themes).toBe(LIGHT);
    expect(globalStore.status).toBe(HOME);
    expect(globalStore.hasCrossBanner).toBe(true);
  });

  it("should be able to set theme", () => {
    globalStore.setTheme();
    expect(globalStore.themes).toBe(DARK);
    globalStore.setTheme();
    expect(globalStore.themes).toBe(LIGHT);
  });

  it("should be able to set status", () => {
    globalStore.setStatus("about");
    expect(globalStore.status).toBe("about");

    globalStore.setStatus("contact");
    expect(globalStore.status).toBe("contact");
  });

  it("should be able to set cross banner", () => {
    globalStore.setCrossBanner();
    expect(globalStore.hasCrossBanner).toBe(false);
  });
});
