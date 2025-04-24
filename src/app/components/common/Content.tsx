import {ReactNode} from "react";
import styles from './Content.module.css';

type ContentProps = {
    children: ReactNode
    className?: string
}
export default function Content({ children, className } : ContentProps) {
    return (
        <div className={ `${ styles.content } ${ className ?? '' }`.trim() }>
            { children }
        </div>
    )
}