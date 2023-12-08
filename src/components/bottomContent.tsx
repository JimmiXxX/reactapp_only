// @ts-ignore
import styles from '../styles/bottomContent.module.css'
import * as React from "react";
import { useState } from "react";

type AppProps = {
    header: number,
    text: string,
}

export const BottomContent = ( { header, text } : AppProps) => {


    return (
       <div className={styles.contentHeader}>
           {header}
           <div className={styles.contentText}>
               {text}
           </div>
       </div>
    )
}