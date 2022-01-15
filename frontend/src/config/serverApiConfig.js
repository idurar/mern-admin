export const API_BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:8888/api/"
    : "https://starter-mern.herokuapp.com/api/"
// export const API_BASE_URL = "https://starter-mern.herokuapp.com/api/";
export const ACCESS_TOKEN_NAME = "x-auth-token"
