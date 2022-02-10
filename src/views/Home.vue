<template>
  <div id="viewHome">
        
    <ComponentAbout />
    <ComponentHome />
    <ComponentStart />
    <ComponentStartMobile />

    <!-- start menu -->
    <div id="startNav">
      <b id="startNavLinkStart" class="startNavLink" v-on:click="showStartComponent()">Rooms</b>
      <b id="startNavLinkAbout" class="startNavLink" v-on:click="showAboutComponent()">About</b>
    </div>
  
  </div>  
</template>

<script>
// @ is an alias to /src
import ComponentHome from '@/components/ComponentHome.vue'
import ComponentAbout from '@/components/ComponentAbout.vue'
import ComponentStart from '@/components/ComponentStart.vue'
import ComponentStartMobile from '@/components/ComponentStartMobile.vue'

export default {
  name: 'Home',
  components: {
    ComponentHome,
    ComponentAbout,
    ComponentStart,
    ComponentStartMobile
  },

  setup() {
    function showAboutComponent()
    {
      let componentAbout = document.getElementById("componentAbout")
      let componentStart = document.getElementById("componentStart")

      componentStart.style.display = "none"
      if(componentAbout.style.display == "block") { componentAbout.style.display = "none" }
      else if(componentAbout.style.display == "none") { componentAbout.style.display = "block" }
    }
    
    function showStartComponent()
    {
      let componentAbout = document.getElementById("componentAbout")
      let componentStart = document.getElementById("componentStart")

      componentAbout.style.display = "none"      
      if(componentStart.style.display == "block") { componentStart.style.display = "none" }
      else if(componentStart.style.display == "none") { componentStart.style.display = "block" }
    }
    
    return {
      //functions
      showAboutComponent,
      showStartComponent
    }
  }
}
</script>

<style scoped>
  /* ids */
  /* #startNav { display: inline-flex; width: 100vw; overflow-x: auto; scrollbar-width: thin; scrollbar-color: gray white; color: white; background-color: lightgray; } */
  #startNav { display: inline-flex; position: absolute; width: 100vw; bottom: 0px; z-index: 1; color: white; background-color: black; }
  #viewHome { overflow: hidden; }
  /* #fullscreenButtonOverlay { display: block; position: absolute; height: 40px; width: 40px; right: calc(21vw + 4px); bottom: 8px; z-index: 1; background-color: blue; } */

  /* classes */
  /* .startNavLink {background-color: lightgreen; min-width: 160px; display: inline-block; padding: 14.5px; text-align: center; user-select: none; border: 1px solid black; } */
  .startNavLink {background-color: transparent; min-width: 160px; display: inline-block; padding: 3px; padding-top: 20px; padding-bottom: 20px; text-align: center; user-select: none; opacity: 70%; }

  /* mobile */
  @media screen and (max-width: 1300px) and (orientation: portrait) 
  {
    #startNav { display: none; bottom: initial; background-color: transparent; }
    #componentHome { display: none; }
  }

  @media screen and (max-width: 1300px) and (orientation: landscape)
  {
    #startNav, #componentAbout, #componentStart { display: none; }
  }
</style>
