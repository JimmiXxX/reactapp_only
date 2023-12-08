// @ts-ignore
import { Header } from '../header/header.tsx';
// @ts-ignore
import { Background } from "../background/background.tsx";
// @ts-ignore
import { Date } from "../mainDate/date.tsx";
// @ts-ignore
import { Contex } from "../contex.tsx";
// @ts-ignore
import { Slider } from "../slider/slider.tsx";
import * as React from 'react'



export const MainPage = () => {

    return (
        <Background>
            <Header/>
            <Contex>
                <Slider/>
            </Contex>
        </Background>
    )
}