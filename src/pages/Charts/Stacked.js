import React from 'react'
import { Header } from '../../components'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedChartData, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';


export default function Stacked() {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Charts' title='Stacked Chart' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={stackedPrimaryXAxis}
          primaryYAxis={stackedPrimaryYAxis}
          tooltip={{ enable: true }}
        >
          <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}
