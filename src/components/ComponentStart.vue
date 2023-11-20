<template>
    <div id="componentStart" v-if="vuexAllRooms">
        <!-- active rooms -->
        <div id="activeRooms" v-if="vuexAllRooms.length > 0">
            <!-- title -->
            <h1 id="activeRoomsTitle">Active</h1>
            
            <!-- room -->
            <div class="room" v-for="room in vuexAllRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/' + room.room" v-if="currentRoute.substr(1) == room.room && room.room != 'temp' && room.room !='null' && room.room !=''">
                    <div class="roomLink" style="color: #1c1b1b; background-color: white;">{{room.room}} · {{room.clients.length}}</div>
                </router-link>

                <router-link v-bind:to="'/' + room.room" v-if="currentRoute.substr(1) != room.room && room.room != 'temp' && room.room !='null' && room.room !=''">
                    <div class="roomLink">{{room.room}} · {{room.clients.length}}</div>
                </router-link>
            </div>
        </div>

        <!-- default rooms -->
        <div id="defaultRooms">
            <!-- title-->
            <h1 id="defaultRoomsTitle">Default</h1>

            <!-- room -->
            <div class="room" v-for="room in vuexDefaultRooms" v-bind:key="room.key">
                <router-link v-bind:to="'/' + room">
                    <div class="roomLink">{{room}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
//imports
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
        
        
        //lifecycle hooks
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
 /*** scrollbar ***/
 #componentStart::-webkit-scrollbar { width: 10px; }
 #componentStart::-webkit-scrollbar-track { background: #1c1b1b; }
 #componentStart::-webkit-scrollbar-thumb { background: #ffffff1e; }
 #componentStart::-webkit-scrollbar-thumb:hover { background: #ffffffaf; }
  
 /*** elements ***/
 a { text-decoration: none; color: white; }


 /*** ids ***/
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
    color: white; 
    opacity: 0.9;
    border-right: 1px solid black; 
    background-color: #1c1b1bda;
 }
 #activeRooms { display: flex; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; } 
 #defaultRooms { display: flex; flex-direction: column; overflow: hidden; scrollbar-width: thin; border: 0px solid white; }
 #activeRoomsTitle { width: auto; margin: 18px 0px 0px 20px; padding: 0px; opacity: 0.7; font-size: 16px; text-align: left; }
 #defaultRoomsTitle { width: auto; margin: 30px 0px 0px 20px; padding: 0px; opacity: 0.7; font-size: 16px; text-align: left; } 


 /*** classes ***/
 .roomLink 
 { 
    height: auto; 
    width: 170px; 
    margin: 4px 20px 0px 20px;
    padding: 10px; 
    font-size: 16px; 
    font-weight: bold; 
    user-select: none; 
    text-decoration: none;
    text-align: center;
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