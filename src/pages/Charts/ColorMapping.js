import React from 'react'
import { Header } from '../../components'
import { colorMappingData, rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy'

import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  ColumnSeries, Category, Highlight, DataLabel, Tooltip, ILoadedEventArgs, Legend, ChartTheme, RangeColorSettingsDirective, RangeColorSettingDirective
} from '@syncfusion/ej2-react-charts';



export default function ColorMapping() {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Charts' title='Color-Mapping Chart' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          tooltip={{ enable: true }}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              xName='x'
              yName='y'
              type='Column'
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}
