
import {useEffect, useRef} from "react";
import './Notification.css'
import type {NotificationData} from "../../context/NotificationContext.tsx";

type NotificationProps = {
    data: NotificationData
    onClear: () => void
}
export default function Notification({ data, onClear } : NotificationProps) {
    const timeoutRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        if (data.message && data.message.length > 0) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                onClear();
            }, data.time ?? 5000);
        }

        return () => {
            clearTimeout(timeoutRef.current);
        }
    }, [data.message]);

    const confirmHandler = () => {
        if (typeof data.onConfirm === "function") data.onConfirm()
        onClear()
    }

    return data.message && (
        <div
            className="notification"
            data-type={ data.type }>
            <p>{ data.message }</p>
            {
                data.onConfirm &&
                <button type="button" onClick={ confirmHandler }>Ok</button>
            }
        </div>
    )
}