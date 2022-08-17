import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Resize, ContextMenu, Filter, Page, Inject } from '@syncfusion/ej2-react-grids'
import React from 'react'
import { Header } from '../components'
import { contextMenuItems, ordersData, ordersGrid } from '../data/dummy'


export default function Orders() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page]} />
      </GridComponent>
    </div>
  )
}
