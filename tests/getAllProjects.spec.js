import { test, expect, request } from "@playwright/test";
import getallprojects from "../pages/getAllprojects-page";

test.describe("Verify CIS API Test Cases", { tag: ["@API"] }, async () => {
  test.only("Verify all projects are listed", async ({}) => {
    const apiContext = await request.newContext();
    const project = new getallprojects(apiContext);
    await project.getAllProjects();
  });

  test("Verify projects with applied filters are listed", async ({}) => {
    const apiContext = await request.newContext();
    const project = new getallprojects(apiContext);
    await project.getProjectsByAppliedFilter();
  });
});
