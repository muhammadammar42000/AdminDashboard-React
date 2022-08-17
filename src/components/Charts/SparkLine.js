import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


export default function SparkLine({ id, height, width, color, data, type, currentColor }) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      markerSettings={{ visible: ['All'], size: 6, fill: '#555', border: { color: 'orange', width: 2 } }}
      tooltipSettings={{
        visible: true, format: '${x} : data ${yval}',

        trackLineSettings: {
          visible: true,
          color: '#fc5070',
          width: 1
        }
      }

      }
    >
      <Inject services={[SparklineTooltip]} />

    </SparklineComponent>
  )
}
