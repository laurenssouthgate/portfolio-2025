import Image from "next/image";
import styles from './RoundButton.module.css'

type RoundButtonProps = {
    img: string
    link: string
    title: string
    className?: string
}
export default function RoundButton({ img, link, title, className } : RoundButtonProps) {
    return (
        <a href={ link }
           title={ title }
           target="_blank"
           rel="noreferrer"
           className={ `${ styles.button } ${ className ?? '' }`.trim() }>
            <Image src={ img } alt="Icon" width={ 16 } />
        </a>
    )
}