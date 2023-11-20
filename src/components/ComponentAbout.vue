<template>
  <div id="componentAbout">
    <h3 id="titleAbout" class="title">About Project</h3>
    <p id="textAbout" class="text">This is a student project made to learn about socket.io and server sync.</p>

    <h3 id="titlePrivacyPolicy" class="title">Privacy Policy</h3>
    <p class="privacyPolicyItem">Collects Account Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Collects Personal Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Collects Device Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Collects Metrics Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Collects Diagnostics Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Collects Location Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Collects Financial Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Collects Messages Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Collects Media Data: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Uses Cookies: <span class="yes">Yes</span></p>
    <p class="privacyPolicyItem">Uses Local Storage: <span class="yes">Yes</span></p>
    <p class="privacyPolicyItem">Links to Other Websites: <span class="no">No</span></p>
    <p class="privacyPolicyItem">Policy Might Change: <span class="yes">Yes</span></p>

    <h3 id="titleContact" class="title">Contact</h3>
    <p id="contactEmail" class="text">sinco.developer@gmail.com</p>
  </div>

</template>


<script>
  export default { }
</script>


<style scoped>
  /*** ids ***/
  #componentAbout 
  { 
    display: none; 
    position: absolute; 
    z-index: 4; 
    height: auto; 
    width: 24vw; 
    margin: 0;
    padding: 30px;
    position: absolute;
    top: 40%;
    left: 41.5%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0.9;
    color: white;
    background-color: #1c1b1b;
    border: 2px solid white;  
  }
  #titleCredits { margin: 30px 0px 0px 0px; }
  #titlePrivacyPolicy { margin: 30px 0px 0px 0px; }
  #titleContact { margin: 30px 0px 0px 0px; }
  #listCredits { margin: 0px; margin-left: 20px; padding: 0px; }

  /*** classes ***/
  .title { margin: 0px; padding: 0px; text-align: left; }
  .text { margin: 0px; padding: 0px; font-size: 17px; color: white; text-decoration: none; }
  .privacyPolicyItem { margin: 0px; font-size: 17px; }
  .no { color: red; }
  .yes { color: lightgreen; }
</style>