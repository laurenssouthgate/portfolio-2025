import {ReactNode} from "react";
import styles from './FullPageSection.module.css'

type FullPageSectionProps = {
    children: ReactNode
    id: string | null
    className?: string
}
export default function FullPageSection({ children, id, className } : FullPageSectionProps) {
    return (
        <section
            className={ `${ styles.full } ${ className ?? '' }`.trim() }
            id={ id ?? '' }>
            { children }
        </section>
    )
}