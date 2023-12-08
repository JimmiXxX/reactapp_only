// @ts-ignore
import styles from "../styles/wrapper.module.css"
import * as React from "react";

export class Wrapper extends React.Component<{ children: any }> {
    render() {
        let { children } = this.props;

        return (
            <div className={ styles.wrapper }>
                { children }
            </div>
        )
    }
}