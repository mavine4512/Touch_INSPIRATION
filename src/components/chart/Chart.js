import React from 'react';
import styles from './styles.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title,data, grid,dataKey }) {
  
  return (
    <div style={styles.chart} >
      <h3 style={styles.chartTitle}>{title}</h3>

  <ResponsiveContainer width="100%" aspect={4 / 1}>
    <LineChart data={data}>
      <XAxis dataKey={'name'} stroke="#5550bd"/>
      <YAxis stroke="#5550bd"/>
      <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
      <Tooltip/>
      {grid && <CartesianGrid stroke="rgb(238, 238, 238)" strokeDasharray={'7 7'}/>}
    </LineChart>

  </ResponsiveContainer>
</div>
  )
}