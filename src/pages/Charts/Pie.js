import React from 'react'
import { Header } from '../../components'
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
import { pieChartData, ecomPieChartData } from '../../data/dummy';


export default function Pie() {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Charts' title='Pie Chart' />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pie-chart'
          center={{ x: '50%', y: '50%' }}
          tooltip={{ enable: true }}
          title='Company Employees Pie Chart'
        >
          <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              name='Browser'
              xName='x'
              yName='y'
              explode={true}
              explodeOffset='10%'
              // explodeIndex={0}
              dataLabel={{ visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600' } }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}
