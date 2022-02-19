<template>
    <div id="componentStart" v-if="vuexAllRooms">
        <!-- active rooms -->
        <div id="activeRooms" v-if="vuexAllRooms.length > 0">
            <h1 id="activeRoomsTitle">Active Rooms</h1>
            <div class="room" v-for="room in vuexAllRooms" v-bind:key="room.key">
                <!-- active room -->
                <router-link v-bind:to="'/relax/' + room.room" v-if="currentRoute.substr(1) == room.room && room.room != 'temp'">
                    <div class="roomLink" style="color: #1c1b1b; background-color: white;">({{room.clients.length}}) {{room.room}}</div>
                </router-link>

                <router-link v-bind:to="'/relax/' + room.room" v-if="currentRoute.substr(1) != room.room && room.room != 'temp'">
                    <div class="roomLink">({{room.clients.length}}) {{room.room}}</div>
                </router-link>
            </div>
        </div>

        <!-- default rooms -->
        <div id="defaultRooms">
            <h1 id="defaultRoomsTitle">Default rooms</h1>
            <div class="room" v-for="room in vuexDefaultRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/relax/' + room">
                    <div class="roomLink">{{room}}</div>
                </router-link>
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
        //vuex
        const store = useStore()
        const vuexAllRooms = computed(() => { return store.getters['allRooms']})
        const vuexDefaultRooms = computed(() => { return store.getters['defaultRooms']})

        //route
        const currentRoute = computed(() => { return useRouter().currentRoute.value.fullPath})
        
        onUpdated(() => {
            // console.log("onUpdated ComponentStart")
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
    a { text-decoration: none; color: white; }

    /* ids */
    #componentStart 
    { 
        display: block; 
        position: absolute; 
        height: calc(90vh + 23px); 
        width: auto; top: 0px; 
        padding-bottom: 100px; 
        z-index: 1; 
        text-align: center; 
        overflow-x: hidden; 
        overflow-y: scroll; 
        scrollbar-width: none; 
        scrollbar-color: black transparent; 
        color: white; 
        border-right: 1px solid black; 
        background-color: #1c1b1bda;
    }
    #activeRooms, #defaultRooms { display: inline-flex; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; }
    #defaultRoomsTitle, #activeRoomsTitle { width: auto; margin: 0px; margin-top: 10px; padding: 0px; opacity: 0.7; font-size: 14px; }

    /* classes */
    .roomLink 
    { 
        height: auto; 
        width: 170px; 
        margin: 10px;
        margin-right: 20px; 
        margin-left: 20px;
        padding: 10px; 
        font-size: 14px; 
        font-weight: bold; 
        user-select: none; 
        text-decoration: none; 
        opacity: 1.0;
        color: white; 
        border: 1px solid white;
        background-color: #1c1b1b; 
    }

    .roomLink:active, .roomLink:hover { color: #1c1b1b; background-color: white; }
    /* .roomLinkIcon { height: 142px; width: 170px; margin: auto; background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F643%2F326%2Foriginal%2Fvector-group-people-icon.jpg&f=1&nofb=1'); background-size: cover; background-position-y: center; background-color: white; } */
    /* .room { height: auto; width: 170px; margin: 10px; margin-right: 20px; margin-left: 20px; background-color: red; } */
</style>