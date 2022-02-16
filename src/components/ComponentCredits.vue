<template>
  <div id="componentCredits">
    <h3 id="title">Special thanks to following</h3>
    <ul id="list">
        <li>Socket.io</li>
        <li>Youtube Embed</li>
        <li>Stackoverflow.com</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #componentCredits 
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

  #title { margin: 0px; padding: 0px; text-align: center; }
  #list { margin: 0px; margin-left: 20px; padding: 0px; padding-top: 7px; }
</style>