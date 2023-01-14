import React from 'react';
import styles from './styles.js';
import {Visibility} from '@material-ui/icons';

export default function WidgetSm({data}) {

  return (
    <div style={styles.widgetSm}>
        <span style={styles.widgetSmTitle}>New Employee</span>
        <ul  style={styles.widgetSmList}>
            {data && data.map((item, index)=>{
            return(
            <li  style={styles.widgetSmListItem} key={index}>
                <img src="https://i.pinimg.com/originals/89/90/4a/89904abe41cf1555e7f4a6163ef4cc53.jpg"alt=''  style={styles.widgetSmImg} />
                <div style={styles.widgetSmUser}>
                    <span style={styles.widgetSmUsername}>{item.name}</span>
                    <span style={styles.widgetSmUserTitle}>{item.occupation}</span>
                </div>
                <button style={styles.widgetSmButton}>
                   <Visibility style={styles.widgetSmIcon}/>
                    Display
                </button>
            </li>
                )
            })}
    </ul>
</div>
  )
}