import { DroneAlarm } from "@/types/dronedetection";
import { API_URL, API_HEADERS } from "./apiConfig";

export async function getDroneAlarm(): Promise<DroneAlarm[]> {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: API_HEADERS
    });
    if (!response.ok) {
      throw new Error(`API-error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('[getDroneAlarms] error:', error);
    throw error;
  }
}