import { test, expect, request } from "@playwright/test";
import { getEnvVars } from "../utils/env.utils";
import { eventNames } from "process";

const baseAPI = getEnvVars("BASE_API");
const bearerToken = getEnvVars("BEARER_TOKEN");

export default class getallprojects {
  constructor() {
    this.response = null;
    this.responseBody = null;
  }

  async getAllProjects() {
    const apiRequest = await request.newContext();
    const postData = {
      name: "",
    };

    this.response = await apiRequest.post(`${baseAPI}/projects/list`, {
      data: postData,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    });

    expect(this.response.status()).toBe(200);
    this.responseBody = await this.response.json();
    //console.log(JSON.stringify(responseBody, null, 2));
    const names = this.responseBody.edges.map((edge) => edge.node.name);
    console.log("All Project names are: " + names);
    console.log("Total project count is: " + `${names.length}`);
    //console.log(responseBody);
  }

  async getProjectsByAppliedFilter() {
    const apiRequest = await request.newContext();
    const postData = {
      name: "CARNERA TESTING",
    };

    this.response = await apiRequest.post(`${baseAPI}/projects/list`, {
      data: postData,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    });

    expect(this.response.status()).toBe(200);
    this.responseBody = await this.response.json();
    const names = this.responseBody.edges.map((edge) => edge.node.name);
    console.log("Project with applied filters are: " + names);
    console.log("Total project count is: " + `${names.length}`);
  }
}
