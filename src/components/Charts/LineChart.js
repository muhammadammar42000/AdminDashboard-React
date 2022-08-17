import { ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'


export default function LineChart() {
  return (
    <ChartComponent
      id='line-chart'
      height='450px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}
