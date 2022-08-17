import React from 'react'
import { Header } from '../../components'
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, IAccAnimationCompleteEventArgs, AccPoints,
  IAccTextRenderEventArgs, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, IAccLoadedEventArgs, AccumulationSelection,
  IAccResizeEventArgs, AccumulationTheme
} from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';



export default function Pyramid() {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Charts' title='Pyramid Chart' />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pyramid-chart'
          tooltip={{ enable: true }}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width='45%'
              height='80%'
              explode={true}
              dataLabel={{visible: true , position: 'Inside', name: 'text'}}
            >

            </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}
