import {useContext} from "react";
import {NotificationContext, type NotificationData} from "../context/NotificationContext.tsx";
import {NotificationType} from "../model/NotificationType.tsx";

export default function useNotification() {
    const notificationContext = useContext(NotificationContext)

    return (notificationData: NotificationData | string) => {
        if (typeof notificationData === "string") {
            notificationContext.setData({
                message: notificationData,
                type: NotificationType.INFO
            })

            return
        }

        notificationContext.setData(notificationData)
    }

}