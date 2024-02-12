import { fetchData } from "./fetchData.ts";

export const fetchText = async (endpoint: string, init?: RequestInit): Promise<string> => {
  const response = await fetchData(endpoint, init);
  return response.text();
};