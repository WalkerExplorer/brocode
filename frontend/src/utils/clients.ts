import { useEffect, useState } from "react";
import type { Code, ResponseData } from "~/types/code";

const server = "http://13.53.37.23:8000"; // Replace with the actual backend URL


export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export const healthCheckApi = async (): Promise<boolean | undefined> => {
  try {
    const response = await fetch(`${server}`, {
      method: "GET",
    });

    await response.json();

    return true;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const sendDataToApi = async (
  data: Code
): Promise<ResponseData | undefined> => {
  try {
    const response = await fetch(`${server}/gen/code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return (await response.json()) as ResponseData;
  } catch (error) {
    console.error("Error:", error);
  }
};
