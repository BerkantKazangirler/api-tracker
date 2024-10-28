import { Errors } from "../types";

export function fetchData(ip: string) {
  return fetch(`http://ip-api.com/json/${ip}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        return { data, error: null };
      } else {
        return { data: null, error: Errors.noData };
      }
    });
}
