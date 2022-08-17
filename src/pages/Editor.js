import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
import { EditorData } from '../data/dummy';


export default function Editor() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white roounded-3xl'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent
        height='500px'
      >
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}
