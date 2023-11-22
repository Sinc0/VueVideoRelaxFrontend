<template>
    <div id="componentNavbarRooms" v-if="vuexActiveRooms">
        <!-- active rooms -->
        <div id="activeRooms" v-if="vuexActiveRooms.length > 0">
            <h1 id="activeRoomsTitle">Active</h1> <!-- title -->
            
            <div class="room" v-for="room in vuexActiveRooms" v-bind:key="room.key"> <!-- filter rooms-->
                <div v-if="currentRoute.substr(1) == room.room && room.room != 'temp' && room.room !='null' && room.room !=null && room.room !=''">
                    <router-link id="currentRoom" class="roomLink" v-bind:to="'/' + room.room">{{room.room}} · {{room.clients.length}}</router-link>
                </div>
                <div v-else-if="currentRoute.substr(1) != room.room && room.room != 'temp' && room.room !='null' && room.room !=null && room.room !=''">
                    <router-link class="roomLink" v-bind:to="'/' + room.room">{{room.room}} · {{room.clients.length}}</router-link>
                </div>
            </div>
        </div>

        <!-- default rooms -->
        <div id="defaultRooms">
            <h1 id="defaultRoomsTitle">Default</h1> <!-- title-->
            
            <div class="room" v-for="room in vuexDefaultRooms" v-bind:key="room.key"> <!-- filter rooms -->
                <router-link class="roomLink" v-bind:to="'/' + room">{{room}}</router-link>
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
            currentRoute,
            vuexActiveRooms,
            vuexDefaultRooms,
        }
    }
}
</script>


<style scoped>
 /*** scrollbar ***/
 #componentNavbarRooms::-webkit-scrollbar { width: 10px; }
 #componentNavbarRooms::-webkit-scrollbar-track { background: #1c1b1b; }
 #componentNavbarRooms::-webkit-scrollbar-thumb { background: #ffffff1e; }
 #componentNavbarRooms::-webkit-scrollbar-thumb:hover { background: #ffffffaf; }
  
 /*** elements ***/
 a { text-decoration: none; color: white; }


 /*** ids ***/
 #componentNavbarRooms 
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
    color: white; 
    opacity: 0.9;
    border-right: 1px solid black; 
    background-color: #1c1b1bda;
 }
 #activeRooms { display: flex; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; } 
 #defaultRooms { display: flex; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; }
 #activeRoomsTitle { width: auto; margin: 18px 0px 0px 20px; padding: 0px; opacity: 0.7; font-size: 16px; text-align: left; }
 #defaultRoomsTitle { width: auto; margin: 30px 0px 0px 20px; padding: 0px; opacity: 0.7; font-size: 16px; text-align: left; }
 #currentRoom { color: #1c1b1b; background-color: white }

 /*** classes ***/
 .roomLink 
 { 
    display: block;
    height: auto; 
    width: 170px; 
    margin: 4px 20px 0px 20px;
    padding: 10px; 
    font-size: 16px; 
    font-weight: bold; 
    user-select: none; 
    text-decoration: none;
    text-align: center;
    text-transform: capitalize;
    opacity: 0.9;
    color: #ffffffb3; 
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #1c1b1b; 
 }
 .roomLink:active { color: #1c1b1b; background-color: white; } 
 .roomLink:hover { color: #1c1b1b; background-color: white; }
 /* .roomLinkIcon { 
    height: 142px; 
    width: 170px; 
    margin: auto; 
    background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F643%2F326%2Foriginal%2Fvector-group-people-icon.jpg&f=1&nofb=1'); 
    background-size: cover; 
    background-position-y: center; 
    background-color: 
    white; 
 } */
 /* .room { height: auto; width: 170px; margin: 10px; margin-right: 20px; margin-left: 20px; background-color: red; } */
</style>