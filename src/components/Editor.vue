<template>
  <a-row>
    <a-col :span="16">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' :height="window.height" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>



    </a-col>
    <a-col :span="8">

      <a-button v-on:click='loadPdf' type="primary">pdfAxios</a-button>
      <a-button v-on:click='loadDoc' type="primary">docAxios</a-button>
      <AiChat/>
    </a-col>
  </a-row>


</template>

<script>

import {defineComponent, reactive, onMounted,} from 'vue';
import axios from "axios";
import CvEditor from "../services/CvEditor.js";
import {

  DocumentEditorContainerComponent, Toolbar,
} from '@syncfusion/ej2-vue-documenteditor';
import {registerLicense} from '@syncfusion/ej2-base';
import AiChat from "./AiChat.vue";

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cW2hIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjW35YcHBXTmBaWUR/Ww==');
export default defineComponent({
  components: {

    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
    AiChat


  },
  data() {
    return {
      serviceUrl: 'https://documenteditor-server.azurewebsites.net/api/documenteditor/',
      meme: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      pdf:'https://res.cloudinary.com/dwtvwjhn3/raw/upload/v1709711264/Andoch_Bonin_CV_1_bq6f7w.pdf',
      doc:'https://res.cloudinary.com/dwtvwjhn3/raw/upload/v1655471491/Lucky_Okoh_CV_R_2_zktpjy.doc',
      window: {
        width: 0,
        height: 0
      },
      sfdt: ''
    }
  },
  provide: {
    DocumentEditorContainer: [Toolbar],
    DocumentEditor: []
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  async mounted() {

  },
  methods: {

    handleResize() {
      this.window.width = window.innerWidth / 2;
      this.window.height = window.innerHeight;
    },
    loadFile() {
      let CLOUDINARY_URL = 'https://res.cloudinary.com/dwtvwjhn3/raw/upload/v1655471491/Lucky_Okoh_CV_R_2_zktpjy.doc'

      axios({
        url: CLOUDINARY_URL, //your url
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        // create file link in browser's memory
        const href = URL.createObjectURL(response.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', 'file'); //or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);


      });
    },
    loadDoc(){

      let content = {fileUrl: this.doc};
      CvEditor.loadDoc(content)
          .then(resp=>{
            console.log(resp.data)
            this.$refs.container.ej2Instances.documentEditor.open(resp.request.responseText);
          })
    },
    loadPdf(){
      let content = {fileUrl: this.pdf};
      CvEditor.loadPdf(content)
          .then(resp=>{
            console.log(resp.data)
            this.$refs.container.ej2Instances.documentEditor.open(resp.request.responseText);
          }).catch(err=>{
            console.log(err)
      })
    },



  }
})


</script>

<style scoped>


.Title {

  font-family: 'Poppins', sans-serif;
  color: #15161A;
  font-weight: bold;
}

.cardTitle {
  background: #D3D9EB;
  border-radius: 0;
  border: none;
}

.cardTitle2 {
  height: 100%;
  border-radius: 0;

}

.capitalize {
  text-transform: capitalize;
}
</style>