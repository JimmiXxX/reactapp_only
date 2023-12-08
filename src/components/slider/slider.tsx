// @ts-ignore
import styles from "./ui/slider.module.css"
// @ts-ignore
import stylesDate from "../mainDate/ui/date.module.css"

import { BottomContent } from "../bottomContent";

import {dateContext} from "../contex";
import { useContext , useState } from "react";
import { Swiper , SwiperSlide } from 'swiper/react';
import { Navigation , Pagination } from "swiper/modules";
import * as React from "react";
import 'swiper/css';
import 'swiper/css/navigation';

interface AllTotal {
    date:number,
    text:string,
    index: number,
}


export const Slider = () => {

    let [index, setIndex] = useState( 0)
    let counterHeader = useContext(dateContext)

    let Date = counterHeader.map( function(total:
    {
        totalDate: any,
    })
    {
    return total.totalDate
    })


    const NextSlide = () =>{
        index+1 === Object.keys(counterHeader as Object).length ? alert('Дальше слайдов нет!') : setIndex(index + 1)
    }
    const LastSlide = () =>{
        index+1 === 1 ? alert('Это крайний слайд!') :  setIndex(index - 1)
    }
    return (
        <>
            <div className={stylesDate.totalDate}>
                <div className={stylesDate.firstDate}>{counterHeader[index]['firstDate']}</div>
                <div className={stylesDate.secondDate}>{counterHeader[index]['secondDate']}</div>
            </div>


            <div className={styles.sliderMenu}>


                <div className={styles.flexButton}>
                    <div className={styles.counter}>{index+1}/{Object.keys(counterHeader as Object).length}</div>
                    <div className={styles.buttonClick}>
                        <button className={styles.button} onClick={LastSlide}>&#60;</button>
                        <button className={styles.secondButton} onClick={NextSlide}>&#62;</button>
                    </div>
                </div>


                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={3}
                    spaceBetween={50}
                    navigation={{ hideOnClick: true}}
                    pagination={{ clickable: true }}
                    className={styles.swiperBlock}
                >
                    {
                        Date[index].map((total:AllTotal, idx: number)=>{
                            return(
                            <SwiperSlide key={idx}>
                                <BottomContent key={index} text={total.text} header={total.date}/>
                            </SwiperSlide>)}
                        )}
                </Swiper>
            </div>
        </>
    )
}