import Api from './Api.js'

export default {
  loadDoc (docUrl){
    return Api().post('/documenteditor/ImportFileURL',docUrl)
  },
  loadPdf (pdfUrl){
    return Api().post('/pdfviewer/load/',pdfUrl)
  },

}
