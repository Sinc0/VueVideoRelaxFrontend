<template>
  <div id="viewHome">
    <!-- components -->
    <ComponentAbout />
    <ComponentHome />
    <componentNavbarRooms />
    <componentNavbarRoomsMobile />
    <ComponentInstall />

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
import ComponentNavbarRooms from '@/components/ComponentNavbarRooms.vue'
import ComponentNavbarRoomsMobile from '@/components/ComponentNavbarRoomsMobile.vue'
import ComponentInstall from '@/components/ComponentInstall.vue'


export default {
  name: 'Home',
  components: {
    ComponentHome,
    ComponentAbout,
    ComponentNavbarRooms,
    ComponentNavbarRoomsMobile,
    ComponentInstall,
},

  setup() {
    function showAboutComponent()
    {
      //elements
      let componentAbout = document.getElementById("componentAbout")
      let componentNavbarRooms = document.getElementById("componentNavbarRooms")

      //reset elements
      componentNavbarRooms.style.display = "none"
      if(componentAbout.style.display == "block") { componentAbout.style.display = "none" }
      else if(componentAbout.style.display == "none") { componentAbout.style.display = "block" }
    }
    

    function showStartComponent()
    {
      //elements
      let componentAbout = document.getElementById("componentAbout")
      let componentNavbarRooms = document.getElementById("componentNavbarRooms")

      //reset elements
      componentAbout.style.display = "none"      
      if(componentNavbarRooms.style.display == "block") { componentNavbarRooms.style.display = "none" }
      else if(componentNavbarRooms.style.display == "none") { componentNavbarRooms.style.display = "block" }
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


  /*** classes ***/
  .startNavLink { background-color: transparent; min-width: 90px; display: inline-block; padding: 20px; text-align: center; user-select: none; opacity: 0.8; }
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
    #componentNavbarRooms { display: none; } 
  }
</style>
