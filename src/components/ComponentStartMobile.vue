<template>
    <div id="ComponentStartMobile" v-if="vuexAllRooms">

        <p><b>rotate mobile screen to show video</b></p>

        <br />

        <!-- current room -->
        <h1 id="currentRoomsTitle" v-if="vuexAllRooms.length > 0">Current Room</h1>
        <div id="currentRoom" v-if="vuexAllRooms.length > 0">
            <div class="room" v-for="room in vuexAllRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/' + room.room" v-if="currentRoute.substr(1) == room.room">
                    <div class="roomLink">({{room.clients.length}}) {{room.room}}</div>
                </router-link>
            </div>
        </div>

        <!-- default rooms -->
        <h1 id="defaultRoomsTitle">Default rooms</h1>
        <div id="defaultRooms">
            <div class="room" v-for="room in defaultRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/' + room" v-if="currentRoute.substr(1) != room"><div class="roomLink" v-if="currentRoute.substr(1) != room">{{room}}</div></router-link>
            </div>
        </div>
        
        <!-- active rooms -->
        <h1 id="activeRoomsTitle" v-if="vuexAllRooms.length > 0">Active Rooms</h1>
        <div id="activeRooms" v-if="vuexAllRooms.length > 0">
            <div class="room" v-for="room in vuexAllRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/' + room.room" v-if="room.room != 'temp'"><div class="roomLink" v-if="room.room != 'temp'">{{room.room}}</div></router-link>
            </div>
        </div>

    </div>
</template>

<script>
import {onMounted, onUpdated, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router' //instead of this.$route

export default {
    setup() {
        //vuex
        const store = useStore()
        const vuexAllRooms = computed(() => { return store.getters['allRooms']})

        //route
        const currentRoute = computed(() => { return useRouter().currentRoute.value.fullPath})
        
        var defaultRooms = ['general', 'gaming', 'food']
        // var defaultBackgroundImages = []

        onUpdated(() => {
            console.log("onUpdated ComponentStart")
            const vuexAllRooms = computed(() => { return store.getters['allRooms']})
            // // x = vuexAllRooms
            // let temp1 = JSON.stringify(vuexAllRooms.value)
            // temp1 = JSON.parse(temp1)
            // // console.log(temp1)
        })

        return {
            //variables
            vuexAllRooms,
            currentRoute,
            defaultRooms,
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
    #activeRooms, #defaultRooms, #currentRoom { display: inline-flex; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; }
    #defaultRoomsTitle, #activeRoomsTitle, #currentRoomsTitle { width: auto; margin: 0px; margin-top: 10px; padding: 0px; font-size: 14px; }

    /* classes */
    .roomLink 
    { 
        margin: 0px; 
        padding: 7px; 
        font-size: 14px; 
        font-weight: bold; 
        user-select: none; 
        text-decoration: none; 
        color: white; 
        background-color: black; 
        height: auto; 
        width: 170px; 
        margin: 10px;
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
    }
</style>