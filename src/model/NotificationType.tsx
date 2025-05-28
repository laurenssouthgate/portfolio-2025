export const NotificationType = {
    INFO: 'info',
    SUCCESS: 'success',
    ERROR: 'error'
} as const;

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];