<template>
    <div id="ComponentStartMobile" v-if="vuexAllRooms">
        <p id="rotateMobileScreenInfoText">rotate mobile screen to show video</p>

        <!-- active rooms -->
        <div id="activeRooms" v-if="vuexAllRooms.length > 0">
            <h1 id="activeRoomsTitle">Active Rooms</h1>
            <div class="room" v-for="room in vuexAllRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/relax/' + room.room" v-if="currentRoute.substr(1) == room.room && room.room != 'temp'"><div class="roomLink" style="color: #1c1b1b; background-color: white;">({{room.clients.length}}) {{room.room}}</div></router-link>
                <router-link v-bind:to="'/relax/' + room.room" v-if="currentRoute.substr(1) != room.room && room.room != 'temp'"><div class="roomLink">({{room.clients.length}}) {{room.room}}</div></router-link>
            </div>
        </div>

        <!-- default rooms -->
        <div id="defaultRooms">
            <h1 id="defaultRoomsTitle">Default rooms</h1>
            <div class="room" v-for="room in vuexDefaultRooms" v-bind:key="room.key"><router-link v-bind:to="'/relax/' + room"><div class="roomLink">{{room}}</div></router-link></div>
        </div>

    </div>
</template>

<script>
import {onUpdated, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router' //instead of this.$route

export default {
    setup() {
        //vuex
        const store = useStore()
        const vuexAllRooms = computed(() => { return store.getters['allRooms']})
        const vuexDefaultRooms = computed(() => { return store.getters['defaultRooms']})

        //route
        const currentRoute = computed(() => { return useRouter().currentRoute.value.fullPath})

        onUpdated(() => {
            // console.log("onUpdated ComponentStartMobile")
            const vuexAllRooms = computed(() => { return store.getters['allRooms']})
        })

        return {
            //variables
            vuexAllRooms,
            currentRoute,
            vuexDefaultRooms,
        }
    }
}
</script>

<style scoped>
    /* elements */
    a { color: white; text-decoration: none; }

    /* ids */
    #ComponentStartMobile 
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
    #activeRooms, #defaultRooms { display: inline-flex; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; }
    #defaultRooms { padding-bottom: 10px; }
    #defaultRoomsTitle, #activeRoomsTitle { width: auto; margin: 0px; padding: 0px; opacity: 0.8; font-size: 14px; }
    #activeRooms { padding-bottom: 6px; }

    /* classes */
    .roomLink 
    { 
        margin: 0px; 
        padding: 10px; 
        font-size: 14px; 
        font-weight: bold; 
        user-select: none; 
        text-decoration: none; 
        color: white; 
        background-color: black; 
        height: auto; 
        width: 70vw; 
        margin: 9px;
        margin-right: 20px; 
        margin-left: 20px;
        border: 1px solid white;
        background-color: #1c1b1b; 
    }

    .roomLink:active, .roomLink:hover { color: #1c1b1b; background-color: white; }

    /* mobile */
    @media screen and (max-width: 1300px) and (orientation: portrait) 
    {
        #ComponentStartMobile { display: block; height: 100vh; width: 100vw; left: 0px; background-color: #1c1b1b;  z-index: 3; padding-bottom: 20px; }
        #rotateMobileScreenInfoText { font-size: 14px; font-weight: bold; opacity: 0.8; color: white; }
    }
</style>