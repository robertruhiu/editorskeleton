
<template>
  <input style="margin-top: 1rem"  type="file"
         @change="convertDoc">



  <div style="margin:10px 0px; padding:20px; border:1px solid #ddd;">
    <h3>convertToHtml</h3>
    <div id="result1"></div>
  </div>

<!--  <div style="margin:10px 0px; padding:20px; border:1px solid #ddd;">-->
<!--    <h3>convertToMarkdown</h3>-->
<!--    <div id="result3"></div>-->
<!--  </div>-->


</template>

<script>
import {defineComponent, reactive, onMounted} from 'vue';
import mammoth from "mammoth";
import { convertWordFileToHTML } from 'convert-multiple-files-ul';
import * as path from 'path';



export default defineComponent({



  setup() {

    onMounted(() => {




    });
    const formState = reactive({
      otp: '',

    });





    const convertDoc = async (e) => {


      const file = e.target.files[0];
      const infoOutput = await convertWordFileToHTML(file, '', 'filehtml-151412');
      console.log(infoOutput);



      // let reader = new FileReader();
      // reader.onloadend = function(event) {
      //   let arrayBuffer = reader.result;
      //
      //   mammoth.convertToHtml({arrayBuffer: arrayBuffer}).then(function (resultObject) {
      //     let result1=document.querySelector('#result1')
      //     result1.innerHTML = resultObject.value
      //     console.log(resultObject.value)
      //
      //   })
      //
      //
      //
      //
      //
      // };
      // reader.readAsArrayBuffer(file);

    };



    return {
      convertDoc,
      formState


    };
  }
});
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