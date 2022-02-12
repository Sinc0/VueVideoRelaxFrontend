<template>
  <div id="componentAbout">
    <h3 id="title">About Project</h3>
    <p id="text">This is a student project made to learn about socket.io and server sync.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #componentAbout 
  { 
    display: none; 
    position: absolute; 
    z-index: 4; 
    height: auto; 
    width: auto; 
    margin: 0;
    padding: 20px;
    position: absolute;
    top: 40%;
    left: 41.5%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 90%;
    color: white;
    background-color: #1c1b1b;
    border: 2px solid white;  
  }

  #title { margin: 0px; padding: 0px; text-align: center; }
  #text { margin: 0px; padding: 0px; padding-top: 7px; font-size: 17px;}
</style>