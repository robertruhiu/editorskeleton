
<script>
import moment from 'moment';


export default {
  name: "AiChat",
  components:{

  },
  data() {
    return {
      visible: false,
      moment,
      response:("To optimize your CV, here are some suggestions:\n\n1. Update your professional summary: Start by summarizing your skills, experience, and expertise as a Fullstack Software Engineer. Highlight your proficiency in NodeJS, ReactJS, and ASP.NET. Emphasize your ability to build scalable web applications and mention your problem-solving, attention to detail, and collaboration skills.\n\n2. Prioritize relevant work experience: Arrange your work experience section in reverse chronological order, starting with your most recent position. Provide concise and impactful bullet points that highlight your achievements and responsibilities in each role. Use action verbs and quantify your achievements when possible. For example:\\n   - Implemented a smooth onboarding API for a telemedicine application using the Keycloak IAM system, resulting in improved user experience.\\n   - Increased conversation rate by 10% by developing a fully functional frontend for a healthcare system, paying attention to supplied designs.\\n\\n3. Highlight collaboration and code quality: Emphasize your ability to collaborate with team members and ensure clean code and high-quality deliverables. Mention your experience with code reviews and tools like SonarQube. For example:\\n   - Collaborated with team members to ensure clean code and high-quality code using SonarQube and detailed code reviews.\\n\\n4. Showcase your technical skills: Create a separate section to highlight your technical skills. List the programming languages, frameworks, tools, and databases that you are proficient in. For example:\\n   - Technologies: C#, JavaScript, NodeJS, ExpressJS, TypeScript, ReactJS, ASP.NET\\n   - Others: MongoDB, PostgreSQL, REST API, Docker, Keycloak IAM, SQL, Git, SonarQube, HTML, CSS, Bootstrap, MSSQL\\n\\n5. Include your education and certifications: Provide details about your education, including your degree and the university you attended. Mention any relevant certifications or courses completed. For example:\\n   - Bachelor in Computer Engineering from Obafemi Awolowo University, Ile-Ife, Nigeria (top #1 in the country)\\n   - Certificate of completion in Fundamentals of Front-End Development from Dufuna CodeCamp\\n\\n6. Add language proficiency: Mention your proficiency in Yoruba (native) and English (C2 level).\\n\\n7. Provide contact information: Include your updated contact information, such as your phone number, email address, and relevant professional profiles like LinkedIn and GitHub.\n\n8. Remove irrelevant details: Review your CV and remove any irrelevant information or experiences that are not directly related to the position you are applying for.\\n\\nRemember to proofread your CV for any grammatical or spelling errors before finalizing it. Good luck with your job search!").replace('\n\n','\n'),
      dsds:('To optimize your CV, here are some suggestions:\\n\\n1. Update your professional summary: Start by summarizing your skills, experience, and expertise as a Fullstack Software Engineer. Highlight your proficiency in NodeJS, ReactJS, and ASP.NET. Emphasize your ability to build scalable web applications and mention your problem-solving, attention to detail, and collaboration skills.\\n\\n2. Prioritize relevant work experience: Arrange your work experience section in reverse chronological order, starting with your most recent position. Provide concise and impactful bullet points that highlight your achievements and responsibilities in each role. Use action verbs and quantify your achievements when possible. For example:\\n   - Implemented a smooth onboarding API for a telemedicine application using the Keycloak IAM system, resulting in improved user experience.\\n   - Increased conversation rate by 10% by developing a fully functional frontend for a healthcare system, paying attention to supplied designs.\\n\\n3. Highlight collaboration and code quality: Emphasize your ability to collaborate with team members and ensure clean code and high-quality deliverables. Mention your experience with code reviews and tools like SonarQube. For example:\\n   - Collaborated with team members to ensure clean code and high-quality code using SonarQube and detailed code reviews.\\n\\n4. Showcase your technical skills: Create a separate section to highlight your technical skills. List the programming languages, frameworks, tools, and databases that you are proficient in. For example:\\n   - Technologies: C#, JavaScript, NodeJS, ExpressJS, TypeScript, ReactJS, ASP.NET\\n   - Others: MongoDB, PostgreSQL, REST API, Docker, Keycloak IAM, SQL, Git, SonarQube, HTML, CSS, Bootstrap, MSSQL\\n\\n5. Include your education and certifications: Provide details about your education, including your degree and the university you attended. Mention any relevant certifications or courses completed. For example:\\n   - Bachelor in Computer Engineering from Obafemi Awolowo University, Ile-Ife, Nigeria (top #1 in the country)\\n   - Certificate of completion in Fundamentals of Front-End Development from Dufuna CodeCamp\\n\\n6. Add language proficiency: Mention your proficiency in Yoruba (native) and English (C2 level).\\n\\n7. Provide contact information: Include your updated contact information, such as your phone number, email address, and relevant professional profiles like LinkedIn and GitHub.\\n\\n8. Remove irrelevant details: Review your CV and remove any irrelevant information or experiences that are not directly related to the position you are applying for.\\n\\nRemember to proofread your CV for any grammatical or spelling errors before finalizing it. Good luck with your job search!')
    };
  },
  methods: {
    showDrawer(){
      this.visible = true
    },
    onClosed () {
      this.visible = false
    }


  },
}
</script>

<template>
  <section >
    <div class="main">
      <div class="chatBox">
        <a-card title="Lena Ai" style="height: 85vh;">




          <a-space direction="vertical" style="height: 65vh;overflow-y: scroll;padding: 3% 5%">
            <a-card class="chatElement" style="background-color: #EAF4FF;border: none" size="small">
              <p>
                <a-avatar shape="square" style="background-color:#1236B3">
                  Ai
                </a-avatar>
              </p>





              <p >
                Welcome to Cv optimization. HOw can i help you today?
              </p>


            </a-card>
            <a-card style="background:#FFF5EB;border: none" class="chatElement">
              <p>
                <a-avatar shape="square" style="background-color:#DB7900">
                  You
                </a-avatar>
              </p>




              <p>
                Analyze my current Cv and give recommendations of areas of improvement
              </p>


            </a-card>
            <a-card class="chatElement" style="background-color: #EAF4FF;border: none" size="small">
              <p>
                <a-avatar shape="square" style="background-color:#1236B3">
                  Ai
                </a-avatar>
              </p>
              <p>{{response}}</p>







            </a-card>
            <a-card class="chatElement" style="background-color: #EAF4FF;border: none" size="small">
              <p>
                <a-avatar shape="square" style="background-color:#1236B3">
                  Ai
                </a-avatar>
              </p>





              <p>What else can i help you with</p>


            </a-card>


          </a-space>
          <div class="inputs">
            <a-space style="margin-bottom: 1%;font-weight: lighter;font-family: Poppinslight">

              <a-tag color="#0062D9">
                Quick prompts >
              </a-tag>

              <a-button size="small"> Current Cv Recommendations</a-button>
              <a-button size="small" @click="showDrawer">Optimise Cv for a Job on the Job board</a-button>


            </a-space>
            <a-row :gutter="8">
              <a-col span="22">
                <a-input size="large"  placeholder="Enter a prompt here"  />
              </a-col>
              <a-col span="2">
                <div class="form__submit">
                  <a-button type="primary" size="large">

                  </a-button>

                </div>

              </a-col>
            </a-row>

          </div>
        </a-card>



      </div>
    </div>




  </section>

</template>

<style scoped>
.main{
  background-color: #F3F3F3;
  height: 90%;
  margin: 1% 0 1% 0;
  border-radius: 8px;
}
.chatBox{
  padding: 3%;

  position: relative;
  height: 100%;
}
.chatElement{
  border-radius: 6px;
}
.inputs{
  width: 94%;
  position: absolute;
  bottom: 3%;

}
.form__submit {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.display-linebreak {
  white-space: pre-line;
}
</style>