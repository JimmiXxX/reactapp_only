// @ts-ignore
import styles from "./ui/background.module.css"
// @ts-ignore
import { Header } from "../header/header.tsx";
// @ts-ignore
import { Date } from "../mainDate/date.tsx";
// @ts-ignore
import { Contex } from "../contex.tsx";
// @ts-ignore
import { Slider } from "../slider/slider.tsx";
import * as React from "react";

type Props ={
    children: React.ReactNode
}
export const Background = (children:Props) => {

    return (
        <div className={styles.container}>
            <Header/>
            <Contex>
                <Slider/>
            </Contex>
            <div className={styles.centralBall}></div>
        </div>
    )
}