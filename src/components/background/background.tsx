// @ts-ignore
import styles from "./ui/background.module.css"
import { Header } from "../header/header";
import { Contex } from "../contex";
import { Slider } from "../slider/slider";
import * as React from "react";

type Props = {
    children: React.ReactNode
}
export const Background = ( children: Props ) => {

    return (
        <div className={ styles.container }>
            <Header/>
            <Contex>
                <Slider/>
            </Contex>
            <div className={ styles.centralBall }></div>
        </div>
    )
}