import { test, expect, request } from "@playwright/test";
import { getEnvVars } from "../utils/env.utils";

//verify all scenarios get shown when the API is called
//verify the results with name filter
//verify first x of number of records based on the input

const baseAPI = getEnvVars("BASE_API");
const bearerToken = getEnvVars("BEARER_TOKEN");

export default class getAllscenarios {
  constructor() {
    this.response = null;
    this.responseBody = null;
  }

  async getAllScenarios() {
    const apiRequest = await request.newContext();
    const postData = {
      first: null,
      filterByName: "",
    };

    this.response = await apiRequest.post(`${baseAPI}/scenarios/list`, {
      data: postData,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    });

    expect(this.response.status()).toBe(200);
    this.responseBody = await this.response.json();
    //console.log(JSON.stringify(responseBody, null, 2));
    const ids = this.responseBody.edges.map((edge) => edge.node.id);
    console.log("All Scenario IDs are: " + ids);
    //console.log(responseBody);
  }

  async getFirstFiveScenarios() {
    const apiRequest = await request.newContext();
    const postData = {
      first: 5,
      filterByName: "",
    };

    this.response = await apiRequest.post(`${baseAPI}/scenarios/list`, {
      data: postData,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    });

    expect(this.response.status()).toBe(200);
    this.responseBody = await this.response.json();
    const names = this.responseBody.edges.map((edge) => edge.node.name);
    console.log("First 5 Scenario are: " + names);
  }

  async getScenariosBySpecificKeyword() {
    const apiRequest = await request.newContext();
    const postData = {
      first: null,
      filterByName: "testing",
    };

    this.response = await apiRequest.post(`${baseAPI}/scenarios/list`, {
      data: postData,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    });

    expect(this.response.status()).toBe(200);
    this.responseBody = await this.response.json();
    const names = this.responseBody.edges.map((edge) => edge.node.name);
    console.log("Scenarios with filtered keyword are: " + names);
  }
}
