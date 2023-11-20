<template>
  <div id="viewHome">
    <!-- components -->
    <ComponentAbout />
    <ComponentHome />
    <ComponentStart />
    <ComponentStartMobile />

    <!-- start menu -->
    <div id="startNav">
      <b id="startNavLinkStart" class="startNavLink" v-on:click="showStartComponent()">Rooms</b>
      <b id="startNavLinkAbout" class="startNavLink" v-on:click="showAboutComponent()">About</b>
      <!-- <div id="totalRooms" class="startNavStat"></div> -->
      <!-- <div id="totalUsers" class="startNavStat"></div> -->
      <!-- <div id="totalUsersCurrentRoom" class="startNavStat"></div> -->
    </div>
  
  </div>  
</template>


<script>
//imports
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
    ComponentStartMobile,
  },

  setup() {
    function showAboutComponent()
    {
      //elements
      let componentAbout = document.getElementById("componentAbout")
      let componentStart = document.getElementById("componentStart")

      //reset elements
      componentStart.style.display = "none"
      if(componentAbout.style.display == "block") { componentAbout.style.display = "none" }
      else if(componentAbout.style.display == "none") { componentAbout.style.display = "block" }
    }
    

    function showStartComponent()
    {
      //elements
      let componentAbout = document.getElementById("componentAbout")
      let componentStart = document.getElementById("componentStart")

      //reset elements
      componentAbout.style.display = "none"      
      if(componentStart.style.display == "block") { componentStart.style.display = "none" }
      else if(componentStart.style.display == "none") { componentStart.style.display = "block" }
    }
    

    return {
      //functions
      showAboutComponent,
      showStartComponent,
    }
  }
}
</script>


<style scoped>
  /*** ids ***/
  #startNav { display: inline-flex; position: absolute; width: 100vw; bottom: 0px; z-index: 1; color: white; background-color: black; }
  #viewHome { overflow: hidden; }
  /* #startNav { display: inline-flex; width: 100vw; overflow-x: auto; scrollbar-width: thin; scrollbar-color: gray white; color: white; background-color: lightgray; } */
  /* #fullscreenButtonOverlay { display: block; position: absolute; height: 40px; width: 40px; right: calc(21vw + 4px); bottom: 8px; z-index: 1; background-color: blue; } */


  /*** classes ***/
  .startNavLink { background-color: transparent; min-width: 90px; display: inline-block; padding: 20px; text-align: center; user-select: none; opacity: 0.8; }
  /* .startNavLink {background-color: lightgreen; min-width: 160px; display: inline-block; padding: 14.5px; text-align: center; user-select: none; border: 1px solid black; } */
  /* .startNavStat { font-weight: bold; padding: 20px; opacity: 0.8; } */
  
  
  /*** mobile portrait ***/
  @media screen and (max-width: 1300px) and (orientation: portrait) 
  {
    #startNav { display: none; bottom: initial; background-color: transparent; }
    #componentHome { display: none; }
  }


  /*** mobile landscape ***/
  @media screen and (max-width: 1300px) and (orientation: landscape)
  {
    #startNav { display: none; } 
    #componentAbout { display: none; } 
    #componentStart { display: none; } 
  }
</style>
