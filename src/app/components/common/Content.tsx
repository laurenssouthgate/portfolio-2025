import {ReactNode} from "react";
import styles from './Content.module.css';

type ContentProps = {
    children: ReactNode
    className?: string
    narrow?: boolean
}
export default function Content({ children, className, narrow = false } : ContentProps) {
    return (
        <div className={ `${ !narrow ? styles.content : styles.narrow } ${ className ?? '' }`.trim() }>
            { children }
        </div>
    )
}