import React from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './App.css';

function App() {
  let editorObj: DocumentEditorContainerComponent | null;
  const onSave=()=>{
    //editorObj?.documentEditor.save("Sample", "Docx");
    editorObj?.documentEditor.saveAsBlob('Docx').then((exportedDocument) => {
      // The blob can be processed further
      console.log("exportedDocument:", exportedDocument)
    });
  }
  return (
    <>
      <button type="button" onClick={onSave} style={{marginBottom:10, position: "absolute", zIndex: 3 }}>Save</button>
      <DocumentEditorContainerComponent 
        ref={(ins=>editorObj=ins)} 
        height='100vh' 
        enableToolbar={true}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
      >
        <Inject services={[Toolbar]}></Inject>
      </DocumentEditorContainerComponent>
    </>
  );
}

export default App;
