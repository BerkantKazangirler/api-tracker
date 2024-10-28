export enum Errors {
  emptyInput = "Girdiğiniz değer boş veya hatalı",
  noData = "Girdiğiniz IP Adresi hatalı",
  sameData = "Girmeye çalıştığınız değer aynı",
}

export interface IPTrackerI {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  city: string;
  lat: number;
  lon: number;
  timezone: string;
  query: string;
  message: string;
  zip: string;
  isp: string;
  org: string;
}