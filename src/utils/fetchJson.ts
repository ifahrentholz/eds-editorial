import { fetchData } from './fetchData.ts';

export const fetchJson = async <T>(endpoint: string, init?: RequestInit): Promise<T> => {
  const response = await fetchData(endpoint, init);
  return await response.json();
};
