import { Header } from '../header/header';
import { Background } from "../background/background";
import { Contex } from "../contex";
import { Slider } from "../slider/slider";
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