import { userDetail } from "../stores/type";

export const fetchApi = async (URL: string): Promise<any> => {
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export const fetchLogin = async (
  URL: string,
  userDetails: userDetail
): Promise<any> => {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(userDetails),
  });
};
