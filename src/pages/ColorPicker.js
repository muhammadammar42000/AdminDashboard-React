import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import React from 'react'
import { Header } from '../components'

const change = (color) => {
  document.getElementById('preview').style.backgroundColor = color.currentValue.hex
}

export default function ColorPicker() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white roounded-3xl'>
      <Header category='App' title='Color Picker' />
      <div className='text-center'>
        <div id='preview' />
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-xl font-semibold mt-2 mb-4'>Inline Palette</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-picker'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
