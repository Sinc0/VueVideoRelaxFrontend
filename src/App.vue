<template>
  <div id="app">
    <router-view />
  </div>
  
</template>


<style>
/*** elements ***/
body { margin: 0px; padding: 0px; background-color: black; overflow: hidden; }


/*** ids ***/
#app 
{ 
  margin: 0px;
  padding: 0px;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
#nav { padding: 30px; }
#nav a { font-weight: bold; color: #2c3e50; }
#nav a.router-link-exact-active { color: #42b983; }
</style>
