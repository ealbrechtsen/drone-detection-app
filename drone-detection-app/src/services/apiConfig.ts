// src/services/apiConfig.ts
import Constants from "expo-constants";

export const API_URL = Constants.expoConfig?.extra?.apiUrl;

export const API_HEADERS = {
  "Content-Type": "application/json",
  "Ocp-Apim-Subscription-Key": Constants.expoConfig?.extra?.apiSubscriptionKey,
};
