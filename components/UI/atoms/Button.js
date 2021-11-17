import React, { useEffect, } from "react";
import styles from './atoms.module.css';

export const Button  = function(props){

    return(
        <button 
            onClick={props.clickEvent} 
            className={styles.filterButtons}
            {...props}
        >
            {props.value}
        </button>
    )
}