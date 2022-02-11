<template>
  <div id="componentCredits">
    <h3 id="title">Thanks to following for making this app possible</h3>
    <ul id="list">
        <li>Socket.io</li>
        <li>Node Js</li>
        <li>Vue Js</li>
        <li>Youtube embed</li>
        <li>Stackoverflow</li>
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
    height: 60vh; 
    width: auto; 
    margin: 0;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 41.5%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 90%;
    color: white;
    background-color: #1c1b1b;
    border: 2px solid black; 
  }

  #title { margin: 0px; padding: 0px; text-align: center; }
  #list { margin: 0px; margin-left: 20px; padding: 0px; padding-top: 7px; }
</style>