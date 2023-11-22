<template>
    <div id="componentNavbarRoomsMobile" v-if="vuexActiveRooms">
        <p id="rotateMobileScreenInfoText">rotate mobile to show video</p>

        <!-- active rooms -->
        <div id="activeRooms" v-if="vuexActiveRooms.length > 0">

            <h1 id="activeRoomsTitle">Active</h1>
            <div class="room" v-for="room in vuexActiveRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/' + room.room" v-if="currentRoute.substr(1) == room.room && room.room != 'temp'">
                    <div id="currentRoom" class="roomLink">{{room.room}} · {{room.clients.length}}</div>
                </router-link>
                
                <router-link v-bind:to="'/' + room.room" v-if="currentRoute.substr(1) != room.room && room.room != 'temp'">
                    <div class="roomLink">{{room.room}} · {{room.clients.length}}</div>
                </router-link>
            </div>
        </div>

        <!-- default rooms -->
        <div id="defaultRooms">
            <h1 id="defaultRoomsTitle">Default</h1>

            <div class="room" v-for="room in vuexDefaultRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/' + room"><div class="roomLink">{{room}}</div></router-link>
            </div>
        </div>

    </div>
</template>


<script>
import {onUpdated, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router' //instead of this.$route

export default {
    setup() {
        //variables
        const store = useStore() //vuex storage
        const vuexActiveRooms = computed(() => { return store.getters['activeRooms']}) //active rooms
        const vuexDefaultRooms = computed(() => { return store.getters['defaultRooms']}) //default rooms
        const currentRoute = computed(() => { return useRouter().currentRoute.value.fullPath}) //url


        //lifecycle hooks
        onUpdated(() => { const vuexActiveRooms = computed(() => { return store.getters['activeRooms'] })})


        return {
            //variables
            vuexActiveRooms,
            currentRoute,
            vuexDefaultRooms,
        }
    }
}
</script>


<style scoped>
 /*** elements ***/
 a { color: white; text-decoration: none; }


 /*** ids ***/
 #componentNavbarRoomsMobile 
 { 
    display: none; 
    position: absolute; 
    height: calc(90vh + 23px); 
    width: auto; 
    top: 0px; 
    padding-bottom: 100px; 
    z-index: 1;
    text-align: center; 
    overflow-x: hidden; 
    overflow-y: scroll; 
    scrollbar-width: none; 
    scrollbar-color: black transparent; 
    color: white; 
    background-color: #1c1b1b; 
    border-right: 1px solid black; 
 }
 #activeRooms { display: inline-flex; width: 78%; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; } 
 #defaultRooms 
 { 
    display: inline-flex;
    width: 78%;
    flex-direction: column;
    margin-bottom: 30px;
    padding-bottom: 10px; 
    overflow: hidden; 
    scrollbar-width: thin; 
    border: 0px solid white; 
}
 #activeRoomsTitle { width: auto; margin: 6px 0px 0px 0px; padding: 0px; opacity: 0.8; font-size: 20px; text-align: left; }
 #defaultRoomsTitle { width: auto; margin: 22px 0px 0px 0px; padding: 0px; opacity: 0.8; font-size: 20px; text-align: left; } 
 #activeRooms { padding-bottom: 6px; }
 #currentRoom { color: #1c1b1b; background-color: white; }


 /*** classes ***/
 .roomLink 
 { 
    width: 70vw; 
    height: auto; 
    margin: 4px 0px 4px 0px; 
    padding: 13px; 
    font-size: 18px; 
    font-weight: bold; 
    user-select: none; 
    text-decoration: none;
    text-transform: capitalize; 
    opacity: 0.9; 
    color: #ffffffb3; 
    background-color: black; 
    border: 1px solid #ffffff1a;
    background-color: #1c1b1b; 
 }
 .roomLink:active { color: #1c1b1b; background-color: white; } 


 /*** mobile ***/
 @media screen and (max-width: 1300px) and (orientation: portrait) 
 {
    #componentNavbarRoomsMobile 
    { 
        display: block; 
        height: 100vh; 
        width: 100vw; 
        left: 0px; 
        background-color: black; 
        z-index: 3; 
        padding-bottom: 20px; 
    }
    #rotateMobileScreenInfoText { font-size: 14px; font-weight: bold; opacity: 0.8; color: red; }
 }
</style>