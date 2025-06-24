import { StaticImageData } from "next/image"
import css from "./service.module.css"

import Image from "next/image"

type PropsType = {
    name: string,
    description?: string,
    image: StaticImageData,
    price: string
}

export default function Service(props : PropsType) {
    return (
        <div className={css.service}>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <Image src={props.image} alt="image.jpg" width={325} height={225}></Image>
            <button className={css.info}>Подробнее</button>
        </div>
    )
}
