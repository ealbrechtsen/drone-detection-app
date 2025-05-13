import { DroneAlarm } from "@/types/dronedetection";

const API_URL = 'https://dronedetection-apim.azure-api.net/dronealarm-m/GetDroneAlarm'; 

export async function getDroneAlarm(): Promise<DroneAlarm[]> {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "ff53d9578575498897e99d7e536e6464"
      }
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