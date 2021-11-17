import React, { useEffect, } from "react";
import styles from './atoms.module.css';

export const TextField = function(props){
    
    return(
        <input 
            type="text" 
            ref={props.fieldRef} 
            className={styles.filterField} 
            {...props}
        />
    )
}
