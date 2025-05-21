export const Content = {
    Home: 'home',
    About: 'about',
    Projects: 'projects',
    Contact: 'contact'
} as const;

export type ContentType = typeof Content[keyof typeof Content];