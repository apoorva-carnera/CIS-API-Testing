export const CISEnvName = process.env.ENV || "local";
export const env = CISEnvName.toLowerCase();
export const envVars = {
  LOCAL: {
    BASE_API: "http://localhost:9000/api",
    BEARER_TOKEN:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjIxMzYzNzY4NDgsImlhdCI6MTc1NzY4NTY0OCwidXNlcklkIjoiVXNlcjpiNWYwN2E2ZS04MDBjLTQ2YTktODEzMi0zMzY1Yjk2ZTVhMTIiLCJhY2NvdW50SWQiOiJBY2NvdW50OjdlZTkxNTNhLTBjMzctNDA5ZC05YzUxLTRiZTdiNjhkMWU5YSIsInBlcm1pc3Npb25zSW5BY2NvdW50IjpbXSwiYWNjb3VudHNXaXRoQWNjZXNzIjpbXX0.mW7e08c8_JZNNoeqdiZK9ilyTJkg61THfWP3ICxnO2l4QJV2DRebN1QMHZSRV_5w8oGBjU6h3emjRBu7iRlWAw",
  },
};

export const getEnvVars = (key) => {
  return envVars[CISEnvName.toUpperCase()][key];
};
