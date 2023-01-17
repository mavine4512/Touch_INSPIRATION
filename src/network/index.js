import { BaseUrl as baseUrl, headers } from "./baseUrl";

const fetchUser = () => {
  return fetch(baseUrl, { headers });
};

export { fetchUser };
