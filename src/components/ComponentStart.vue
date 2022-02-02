<template>
    <div id="componentStart" v-if="vuexAllRooms">
        <!-- <h1 style="color: white;">vuexAllRooms {{vuexAllRooms}}</h1> -->
        <!-- <div id="allRoomsStart" style="color: white;" v-for="room in vuexAllRooms" v-bind:key="room.key">room: {{room}}</div> -->
        <!-- <br />
        {{vuexAllRooms}}
        <br /> -->
        <!-- <b>rooms</b> -->
        <!-- <router-link to="/general"><div class="roomLink" v-if="!JSON.stringify(vuexAllRooms).toString().includes('general')">general (0)</div></router-link>
        <router-link to="'/gaming"><div class="roomLink" v-if="!JSON.stringify(vuexAllRooms).toString().includes('gaming')">gaming (0)</div></router-link>
        <router-link to="/food"><div class="roomLink" v-if="!JSON.stringify(vuexAllRooms).toString().includes('food')">food (0)</div></router-link> -->
        
        <!-- current room -->
        <!-- <h1 id="currentRoomsTitle" v-if="vuexAllRooms.length > 0">Current Room</h1>
        <div id="currentRoom" v-if="vuexAllRooms.length > 0">
            <div class="room" v-for="room in vuexAllRooms" v-bind:key="room.key" style="border: 6px solid red;"> -->
                <!-- current room -->
                <!-- <router-link v-bind:to="'/' + room.room" v-if="currentRoute.substr(1) == room.room">
                    <div class="roomLinkIcon"></div>
                    <div class="roomLink" style="background-color: red;">({{room.clients.length}}) {{room.room}}</div>
                </router-link> -->

                <!-- <router-link v-bind:to="'/' + room.room"><div class="roomLink">({{room.clients.length}}) {{room.room}}</div><div class="roomLinkIcon"></div></router-link> -->
            <!-- </div>
        </div> -->
        
        <!-- active rooms -->
        <!-- <h1 id="activeRoomsTitle" v-if="vuexAllRooms.length > 0">Active Rooms</h1>
        <div id="activeRooms" v-if="vuexAllRooms.length > 0">
            <div class="room" v-for="room in vuexAllRooms" v-bind:key="room.key"> -->
                <!-- current room -->
                <!-- <router-link v-bind:to="'/' + room.room">
                    <div class="roomLinkIcon"></div>
                    <div class="roomLink" style="background-color: red;">({{room.clients.length}}) {{room.room}}</div>
                </router-link> -->

                <!-- other rooms -->
                <!-- <router-link v-bind:to="'/' + room.room" v-else-if="currentRoute.substr(1) != room.room">
                    <div class="roomLinkIcon"></div>
                    <div class="roomLink">({{room.clients.length}}) {{room.room}}</div>
                </router-link> -->
                <!-- <router-link v-bind:to="'/' + room.room"><div class="roomLink">({{room.clients.length}}) {{room.room}}</div><div class="roomLinkIcon"></div></router-link> -->
            <!-- </div>
        </div> -->

        <!-- default rooms -->
        <h1 id="defaultRoomsTitle"></h1>
        <div id="defaultRooms">
            <div class="room" v-for="room in defaultRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/' + room">
                    <div class="roomLinkIcon"></div>
                    <div class="roomLink">{{room}}</div>
                </router-link>
            </div>
        </div>

        <!-- <router-link to="/general"><div class="roomLink">general</div></router-link>
        <router-link to="/gaming"><div class="roomLink">gaming</div></router-link>
        <router-link to="/food"><div class="roomLink">food</div></router-link> -->

        <!-- <h1>rooms</h1>
        <div id="allRoomsStart" v-for="room in vuexAllRooms" v-bind:key="room.key">
            <router-link v-bind:to="'/' + room.room" v-if="currentRoute.substr(1) == room.room"><div class="roomLink" style="background-color: red;"> ({{room.clients.length}}) {{room.room}}</div></router-link>
            <router-link v-bind:to="'/' + room.room" v-if="currentRoute.substr(1) != room.room"><div class="roomLink">({{room.clients.length}}) {{room.room}}</div></router-link>
        </div> -->

        <!-- {{currentRoute}} -->
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

        // store.dispatch('actionSetAllRooms', allRooms)
        // console.log("vuexAllRooms")
        // let temp1 = JSON.stringify(vuexAllRooms.value)
        // temp1 = JSON.parse(temp1)
        // // console.log(temp1)
        // if(temp1.length > 0)
        // {
        //     console.log("total active rooms: " + temp1.length)
        // }
        // for(let r in allRooms)
        // {
        //         console.log(allRooms[r].room)
        //         // count = allRooms[r].clients.length.toString()

        // }

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
    a { text-decoration: none; }

    /* ids */
    #componentStart { display: block; position: absolute; height: calc(90vh + 23px); width: auto; top: 0px; padding-bottom: 10px; z-index: 2; text-align: center; overflow-x: hidden; overflow-y: scroll; scrollbar-width: none; scrollbar-color: black transparent; color: white; background-color: #1c1b1bcc; border-right: 1px solid black; }
    #activeRooms, #defaultRooms, #currentRoom { display: inline-flex; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; }
    /* #defaultRooms { width: auto; } */
    /* #activeRooms { width: 60vw; } */
    /* #defaultRoomsTitle, #activeRoomsTitle { width: 60vw; margin: auto; margin-top: 0px; margin-bottom: 0px; padding: 4px; border: 2px solid white; background-color: red; } */
    #defaultRoomsTitle, #activeRoomsTitle, #currentRoomsTitle { width: auto; margin: 0px; margin-top: 10px; padding: 0px; font-size: 14px; }
    /* #activeRoomsTitle, #defaultRoomsTitle { margin-top: 4vh; } */

    /* classes */
    .roomLink { margin: 0px; padding: 7px; font-size: 14px; font-weight: bold; text-decoration: none; color: white; background-color: black; }
    .roomLink:active { background-color: blue; }
    .roomLinkIcon { height: 142px; width: 170px; margin: auto; background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F643%2F326%2Foriginal%2Fvector-group-people-icon.jpg&f=1&nofb=1'); background-size: cover; background-position-y: center; background-color: white; }
    .room { height: 170px; width: 170px; margin: 10px; margin-right: 20px; margin-left: 20px; background-color: red; }
</style>