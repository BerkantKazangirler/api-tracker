import { toast } from "react-toastify";

enum Errors {
  emptyInput = "Girdiğiniz değer boş veya hatalı",
  noData = "Girdiğiniz IP Adresi hatalı",
  sameData = "Girmeye çalıştığınız değer aynı",
}

export function fetchData(ip: string) {
  return fetch(`http://ip-api.com/json/${ip}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        return { data, error: null };
      } else {
        toast.error(Errors.noData);
        return { data: null, error: Errors.noData };
      }
    });
}
