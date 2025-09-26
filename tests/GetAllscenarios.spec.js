import { test, expect, request } from "@playwright/test";
import getAllscenarios from "../pages/getAllScenarios-page";

test.describe("Verify CIS API Test Cases", { tag: ["@API"] }, async () => {
  test("Verify all scenarios are listed", async ({}) => {
    const apiContext = await request.newContext();
    const scenario = new getAllscenarios(apiContext);
    await scenario.getAllScenarios();
  });

  test("Verify first 5 scenarios are listed", async ({}) => {
    const apiContext = await request.newContext();
    const scenario = new getAllscenarios(apiContext);
    await scenario.getFirstFiveScenarios();
  });

  test("Verify scenarios by the entered keyword", async ({}) => {
    const apiContext = await request.newContext();
    const scenario = new getAllscenarios(apiContext);
    await scenario.getScenariosBySpecificKeyword();
  });
});
