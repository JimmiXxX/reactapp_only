import { createContext } from "react";
import * as React from "react";
export const DateAll = [
    {
        firstDate: 2015 ,
        secondDate: 2022 ,
        totalDate: [
            { date: 2015,
                text: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды` } ,
            { date: 2016,
                text: `Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11` } ,
            { date: 2017,
                text: `Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi` } ,
            { date: 2018,
                text: `4 TEXT` } ,
            { date: 2019,
                text: `5 TEXT` } ,
            { date: 2020,
                text: `6 TEXT` } ,
            { date: 2021,
                text:`7 TEXT` } ,
            { date: 2022,
                text:`8 TEXT` } ,
        ] ,
    },
    {
        firstDate: 1942 ,
        secondDate: 1945 ,
        totalDate: [
            { date: 1942,
                text: `Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11` } ,
            { date: 1943,
                text: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды` } ,
            { date: 1944,
                text: `Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi` } ,
            { date: 1945,
                text: `4 text` } ,
            { date: 1945,
                text: `5 text` } ,
            { date: 1945,
                text:`6 text` }
        ],
    },
    {
        firstDate: 1812 ,
        secondDate: 1833 ,
        totalDate:[
            { date: 2019,
                text: `Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11` } ,
            { date: 2020,
                text: `13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды` } ,
            { date: 1888,
                text: `Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi` }
        ],
    },
    {
        firstDate: 1911 ,
        secondDate: 1925 ,
        totalDate:[
            { date: 2011,
                text: `2011GOD` } ,
            { date: 2015,
                text: `2015GOD` } ,
            { date: 2016,
                text: `2016GOD` }
        ],
    }
]



export const dateContext = createContext(DateAll)

type DateProps ={
    children : React.ReactNode
}


export const Contex = ({children}:DateProps) =>
{
    return (
        <dateContext.Provider value={DateAll}>{children}</dateContext.Provider>
    )
}
