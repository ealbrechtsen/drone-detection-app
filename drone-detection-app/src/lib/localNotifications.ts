// import * as Notifications from "expo-notifications";

// export const setNotificationHandler = async () => {
//     Notifications.setNotificationHandler({
//         handleNotification: async () => ({
//             shouldShowAlert: true,
//             shouldPlaySound: false,
//             shouldSetBadge: false
//         }),
//     });
// }

// export const requestNotificationPermissions = async () => {
//     const { status } = await Notifications.requestPermissionsAsync();
//     if (status !== "granted") {
//         alert("Permission denied!");
//     }
// };

// // call scheduleNotificationAsync()
// export const scheduleNotification = async (title: string, body: string, seconds: number) => {
//     await Notifications.scheduleNotificationAsync({
//         content: {
//             title,
//             body,
//         },
//         trigger: { type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, seconds },
//     });
// };