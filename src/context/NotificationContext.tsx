import {createContext} from "react";
import {NotificationType} from "../model/NotificationType.tsx";

export interface NotificationData {
    message: string | null
    time?: number | null
    type?: NotificationType
    onConfirm?: () => | boolean
}

type NotificationContextType = {
    data: NotificationData
    setData: (data: NotificationData) => void | null
}

export const defaultNotification = {
    message: null,
    time: null,
    type: NotificationType.INFO,
    onConfirm: undefined
}

export const NotificationContext = createContext<NotificationContextType>({ data: defaultNotification, setData: () => null})

