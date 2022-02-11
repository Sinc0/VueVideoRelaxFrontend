<template>
  <div id="componentHome">
    <div id="modal" style="display: none;">

      <div id="modalSidebar">
        <div id="modalCloseBar" v-on:click="closeModal()">Close</div>
        <div id="modalSidebarKeybinds" v-on:click="showModalCategory('Keybinds')">Keybinds</div>
        <div id="modalSidebarSettings" v-on:click="showModalCategory('Settings')">Settings</div>
        <div id="modalSidebarCreateRoom" v-on:click="showModalCategory('Create Room')">Create Room</div>
        <div id="modalSidebarAddUsername" v-on:click="showModalCategory('Add Username')">Change Username</div>
        <div id="modalSidebarVideoQuality" v-on:click="showModalCategory('Video Quality')">Change Video Quality</div>
      </div>
      <div id="modalContent">
        <div id="modalContentKeybinds">
          <table id="modalContentKeybindsTable">
            <!-- <th>header</th> -->
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Play/Pause</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">Space</td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Mute/Unmute</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">M</td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Next Video</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">></td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Previous Video</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">Shift</td>
              <td class="modalContentKeybindsCharacter">+</td>
              <td class="modalContentKeybindsCharacter">></td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Fullscreen</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">F</td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Show Sidebar</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">R</td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Volume Up</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">Arrow Up</td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Volume Down</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">Arrow Down</td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Show This Menu</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">ESC</td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Play/Pause</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">Left Mouseclick</td>
            </tr>
            <tr class="modalContentKeybindsTableRow">
              <td class="modalContentKeybindsDescription">Hide Video Info/Controls</td>
              <td class="modalContentKeybindsEqual"> = </td>
              <td class="modalContentKeybindsCharacter">Right Mouseclick</td>
            </tr>
          </table>
        </div>
        <div id="modalContentSettings">
          <p>settings #1</p>
          <p>settings #2</p>
          <p>settings #3</p>
        </div>
        <div id="modalContentAddUsername">
          <div id="addUsername">
              <div id="errorMessageAddUsername" class="errorMessage"></div>
              <input id="inputAddUser" maxlength="10"/>
              <button id="buttonAddUserTest" class="buttonCreate" v-on:click="addUser()">Confirm</button>
              <div id="addUsernameCurrentUsername"></div>
          </div>
        </div>
          <div id="modalContentCreateRoom">
            <div id="createRoom">
                <div id="errorMessageCreateRoom" class="errorMessage"></div>
                <input id="inputCreateRoom" maxlength="20" />
                <button id="buttonCreateRoomTest" class="buttonCreate" v-on:click="createRoom()">Confirm</button>
            </div>
          </div>
        <div id="modalContentVideoQuality">
          <div id="changeVideoQuality">
            <p id="changeVideoQualityLoadingText"><b>Loading...</b></p>
            <div id="changeVideoQualitySteps">
              <p class="changeVideoQualityStepsText"><b>How to change Video Quality</b></p>
              <p class="changeVideoQualityStepsText">Step 1: play video</p>
              <p class="changeVideoQualityStepsText">Step 2: click on gear wheel</p>
              <p  class="changeVideoQualityStepsText">Step 3: click on Quality</p>
              <p  class="changeVideoQualityStepsText">Step 4: select quality of choice</p>
              <p  class="changeVideoQualityStepsText">Step 5: wait for video to load</p>
              <p class="changeVideoQualityStepsText">Step 6: press reload button</p>
            </div>
          </div>
        </div>
      </div>
        <!-- <p>test</p>
        <input id="modalInputAddUser" />
        <button id="modalButtonAddUserTest" class="modalButtonCreate">Add</button> -->
    </div>

    <!-- top bar -->
    <div id="menu" style="display: none;">
        <!-- <div id="mobileMenuCurrentRoom">
            mobileMenuCurrentRoom
        </div> -->

        <div id="infoTitle" v-on:click="toggleMenuInfo()"><b>Info</b></div>
          <div id="info">
        </div>

        <!-- <b>All Namespaces</b>
        <div id="namespacesList">
        </div>

        <br /> -->
    
        <!-- <b id="allClientsTitle">All Clients</b>
        <div id="clientsList">
        </div>
    
        <br /> -->
    
        <div id="allUsersTitle" v-on:click="toggleMenuUsers()">All Users</div>
        <div id="usersList">
        </div>
    
        <div id="allRoomsTitle">All Rooms</div>  <!-- v-on:click="toggleMenuRooms()" -->
        <div id="allRoomsList">
        </div>
        
        <!-- <div id="createRoomTitle" v-on:click="toggleMenuCreateRoom()">Create Room</div>
        <div id="createRoom">
            <div id="errorMessageCreateRoom" class="errorMessage"></div>
            <input id="inputCreateRoom" maxlength="40" />
            <button id="buttonCreateRoomTest" class="buttonCreate" v-on:click="createRoom()">Create</button>
        </div> -->
                
        <!-- <div id="addUsernameTitle" v-on:click="toggleMenuAddUsername()">Add Username</div>
        <div id="addUsername">
            <div id="errorMessageAddUsername" class="errorMessage"></div>
            <input id="inputAddUser"  maxlength="40"/>
            <button id="buttonAddUserTest" class="buttonCreate">Add</button>
        </div> -->

        <!-- <b>Leave Room</b>
        <br />
        <input id="inputLeaveRoom"/>
        <button id="buttonLeaveRoomTest">Leave</button> -->
        
        <!-- <b>Your Rooms</b>
        <div id="yourRoomsList">
        </div> -->
    
        <!-- <b>Join Test Room</b>
        <br />
        <button id="buttonJoinRoomTest">Join</button> -->
    </div>

    <!-- current route bar -->
    <div id="currentRouteBar">{{currentRoute}}</div>
    
    <!-- video area -->
    <div id="videoArea">
      <div id="initializeNewCustomRoom">
        <div id="initializeNewCustomRoomSteps">
          <p class="initializeNewCustomRoomText" id="initializeNewCustomRoomTitle">waiting for room to be initialized...</p>
          <p class="initializeNewCustomRoomText">Step 1: paste video or playlist id of choice</p>
          <p class="initializeNewCustomRoomText">Step 2: press on load button</p>
          <p class="initializeNewCustomRoomText">Example playlist url: PLy1UbTtb_A9L4gkexK3sHwYo3pfVAOSQI</p>
          <p class="initializeNewCustomRoomText">Example video url: KW1LHK4dVfM</p>
        </div>

        <div id="initializeNewCustomRoom-load-video-elems">
            <input id="initializeNewCustomRoom-load-video-input" placeholder="video or playlist id" maxlength="100" />
            <div id="initializeNewCustomRoom-load-video" v-on:click="initializeNewCustomRoomVideo()">Load</div>
        </div>
      </div>

      <!-- loading overlay -->
      <div id="videoLoadingOverlay">
        <!-- <div id="loadingScreenGif" style="display: block; height: 49vh; width: 49vw; position: fixed; left: 14vw ; top: 8vh; z-index: 2; background-image: url('/ls2.gif'); "></div> -->
        <div id="loadingScreenGif">
          <div id="loadingScreenImage"></div>
          <h1 id="loadingScreenText">Loading...</h1>
        </div>
      </div>
      
      <!-- player -->
      <div id="player">
        <!-- <iframe 
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/qxGmGGmvFD8"
          title="YouTube video player"
          frameborder="0"
          allow=""
          rel="0"
          modestbranding="1"
          controls="0"
          autoplay="0"
          allowfullscreen>
        </iframe> -->

        <!-- <div id="youtubeButtonTest" style="height: 100px; width: 100px; display: block; position: absolute; left: 340px; top: 280px; background-color: red"  v-on:click="videoPlayerEvents('play')"></div> -->
        <!-- <div style="display: block; position: absolute; left: 340px; top: 280px; height: 100px; width: 100px;">
          <svg style="height: 100%; width: 100%;">
            <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
          </svg>
        </div> -->

        <!-- overlay -->
        <!-- @mouseup.right="videoPlayButtonOverlay()" -->
        <div id="videoPlayButtonOverlay" @contextmenu.prevent @mousedown.right="toggleVideoInfoAndControls()" v-on:click="videoPlayButtonOverlay()">
          <div id="videoPlayPauseOverlay">
            <p id="videoPlayPauseOverlayText"></p>
            <!-- <svg id="videoPlayButtonSvg" height="20%" width="20%" version="1.1" viewBox="0 0 68 48"> -->
              <!-- <path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path> -->
              <!-- <path d="M 45,24 27,14 27,34" fill="#fff"></path> -->
            <!-- </svg> -->
          </div>
          <div id="videoPlayPauseOverlayMobile">
          </div>
        </div>

        <!-- iframe -->
        <div id="iframeContainer">
        </div> 
      </div>


        <!-- video info -->
        <div id="videoInfo">
          <div id="roomInfo">
              <div id="videoCurrentRoom"></div>
              <!-- <div id="videoCurrentRoomTotalUsers"></div> -->
          </div>
          <div id="videoTitle"></div>
          <div id="videoChannel"></div>
          <div id="videoCurrentPlaylistIndex"></div>
          <div id="current-time-video"></div>
          <div id="videoQuality"></div>
          <div id="videoVolume"></div>
        </div>
                  
        <!-- player controls -->
        <div id="videoPlayerControlButtons">
          <!-- non interactive -->
          <!-- <div id="current-time-video" class="videoPlayerControlButton">0/0s</div> -->

          <!-- player controls row -->
          <div class="videoPlayerControlRow">
            <div id="" class="videoPlayerControlButton" v-on:click="showModalCategory('Settings')">Settings</div>
            <div id="" class="videoPlayerControlButton" v-on:click="showModalCategory('Keybinds')">Keybinds</div>
            <div id="" class="videoPlayerControlButton" v-on:click="showModalCategory('Video Quality')">Video Quality</div>
            <div id="" class="videoPlayerControlButton" v-on:click="showModalCategory('Add Username')">Username</div>
          </div>

          <!-- player controls row -->
          <div class="videoPlayerControlRow">
            <div id="play-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('play')">Play</div>
            <div id="pause-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('pause')">Pause</div>
            <div id="restart-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('restart')">Restart</div>
            <div id="jump-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('jump')">Jump</div>
            <div><input id="jump-video-input" type="number" placeholder="Jump Nr" max="1000"/></div>
          </div>
          
          <!-- player controls row -->
          <div id="playlistControls" class="videoPlayerControlRow"><!-- playlist controls -->
            <div id="fullscreen-video" class="videoPlayerControlButton" v-on:click="requestFullScreen()">Fullscreen</div>
                      <div id="mute-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('mute')">Mute</div>
                      <div id="unmute-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('unMute')">Unmute</div>
            <div id="sync-video-elems">
              <div id="sync-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('sync')">Sync</div>
              <input id="sync-video-input" type="number" placeholder="Sync Secs" max="1000000"/>
            </div>
          </div>

          <!-- player controls row -->
          <div class="videoPlayerControlRow">
            <div id="previous-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('previous')">Previous</div>
            <div id="next-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('next')">Next</div>
            <div id="load-video-elems">
              <div id="load-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('load')">Load</div>
              <input id="load-video-input" placeholder="Load Id" maxlength="100" />
            </div>
          </div>

          <!-- <div class="videoPlayerControlRow"><div id="resync2-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('resync2')">resync</div></div>   -->

          <!-- localStorage variable = yt-player-quality {"data":"{\"quality\":144,\"previousQuality\":144}","expiration":1673896845001,"creation":1642792845001} -->
          <!-- <div id="videoQualityControls" class="videoPlayerControlRow"></div>           -->
          
          <!-- might use later -->
          <!-- <button id="restart-video" class="videoPlayerControlButton" v-on:click="iframeLoader()">Restart</button> -->
          <!-- <button id="stop-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('stop')">Stop</button> -->
          <!-- <button id="buttonTestStartTimer" class="videoPlayerControlButton" v-on:click="testStartTimer()">Start Timer</button> -->
          <!-- <button id="buttonTestPauseTimer" class="videoPlayerControlButton" v-on:click="testPauseTimer()">Paus Timer</button> -->
          <!-- <button id="restart-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('reset')">Reset</button> -->   
          <!-- user only controls 1 -->
          <!-- <div style="display: inline-flex;">
                  <div id="mute-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('mute')">Mute</div>
                  <div id="unmute-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('unMute')">Unmute</div>
                  <div id="fullscreen-video" class="videoPlayerControlButton" v-on:click="requestFullScreen()">Fullscreen</div>
                </div> -->
      </div>

      <div id="videoPlayerControlButtonsMobile">
          <div class="videoPlayerControlRow">
            <div id="settings-video-mobile" class="videoPlayerControlButton" v-on:click="showModalCategory('Settings')">Settings</div>
            <div id="" class="videoPlayerControlButton playlistButton" v-on:click="toggleVideoInfoAndControls()">Video Info</div>
            <div id="play-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('play')">Play</div>
            <div id="pause-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('pause')">Pause</div>
            <div id="restart-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('restart')">Restart</div>
            <div id="mute-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('mute')">Mute</div>
            <div id="unmute-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('unMute')">Unmute</div>
            <div id="volume-up-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="volumeUp()">Volume +</div>
            <div id="volume-down-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="volumeDown()">Volume -</div>
            <div id="previous-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('previous')">Previous</div>
            <div id="next-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('next')">Next</div>
            <div id="jump-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('jump')">Jump</div>
            <div><input id="jump-video-input-mobile" type="number" placeholder="video nr" max="1000"/></div>
            <div id="sync-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('sync')">Sync</div>
            <div><input id="sync-video-input-mobile" type="number" placeholder="sync sec" max="1000000"/></div>
            <div id="load-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('load')">Load</div>
            <div><input id="load-video-input-mobile" placeholder="video/pl id" maxlength="100" /></div>
            <!-- <div id="videoQualityControls" class="videoPlayerControlRow"></div> -->
          </div>
      </div>
      
    </div>
    <!-- chat -->
    <div id="flex">
      <!-- <div id="toggleMenu" onclick="toggleMenu()">
          <b id="toggleMenuText">❮</b> 
      </div> -->

      <!-- <div id="currentRoomInfo" v-on:click="toggleMenu()"> -->
      <div id="currentRoomInfo">
          <b id="inputCurrentRoom"></b>
      </div>

      <div id="mobileMenuAllRooms">
          mobileMenuAllRooms
      </div>
      
      <div id="mobileCurrentRoomInfo" v-on:click="toggleMobileMenu()">
          <span id="mobileMenuHide">▲</span>
          <span id="mobileMenuShow" >▼</span>
          <b id="mobileInputCurrentRoom"></b>
      </div>

      <div id="chat" style="border: 0;">
          <!-- <b>Current Room</b> -->
          <ul id="messages">
          </ul>
      </div>

      <div id="chatBox">
          <form id="form" action="" @submit.prevent="formOnSubmit()">
            <input id="inputChatMessage" autocomplete="off" maxlength="1000" />
            <button id="buttonSend">Send</button>
          </form>
      </div>
    </div>

  </div>
</template>

<script>
import { io } from "socket.io-client";
import {onMounted, onUpdated, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router' //instead of this.$route

export default {
  setup() {
    //vuex
    const store = useStore()
    const vuexAllRooms = computed(() => { return store.getters['allRooms']})

    //route
    const router = useRouter()
    const currentRoute = computed(() => { return useRouter().currentRoute.value.fullPath})

    //lifecycle hooks
    onMounted(() => {
      console.log("onMounted ComponentHome")

      //debugging
      // console.log("onMounted playingVideoId: " + playingVideoId)
      // console.log("onMounted videoPlaylistId: " + videoPlaylistId)
      // console.log(currentRoute)

      setTimeout(() => {
        //variables
        let roomExists = false
        let allActiveRooms = null
        let selectedRoomFromUrl = null
        
        //get room name from url
        selectedRoomFromUrl = currentRoute._value.substr(1)
        
        //get all active rooms
        allActiveRooms = JSON.stringify(vuexAllRooms.value)
        allActiveRooms = JSON.parse(allActiveRooms)

        //debugging
        // console.log("allActiveRooms")

        //join room specified
        if(selectedRoomFromUrl != "")
        {
          //check active rooms
          if(roomExists == false)
          {
            for(let r in allActiveRooms)
            {
              // console.log("active room " + allActiveRooms[r].room)
              if(selectedRoomFromUrl == allActiveRooms[r].room)
              {
                // console.log("match: " + selectedRoomFromUrl + " - " + allActiveRooms[r].room)
                roomExists = true
              }
            }
          }
          
          //check default rooms
          if(roomExists == false)
          {
            for(let r in defaultRooms)
            {
              // console.log("default room " + defaultRooms[r])
              if(selectedRoomFromUrl == defaultRooms[r])
              {
                // console.log("match: " + selectedRoomFromUrl + " - " + defaultRooms[r])
                roomExists = true
              }
            }
          }

          if(selectedRoomFromUrl == "temp") //join default room
          {
            pushUrl("general")
          }
          else if(roomExists == true) //join specified room
          {
            joinRoom(selectedRoomFromUrl)
          }
          else //join default room
          {
            pushUrl("general")
          }
        }
        else //join default room
        {
          pushUrl("general")
        }

        //handle components
        let componentStart = document.getElementById("componentStart")
        let componentAbout = document.getElementById("componentAbout")
        let componentCredits = document.getElementById("componentCredits")
        componentStart.style.display = "none"
        componentAbout.style.display = "none"
        componentCredits.style.display = "none"

      }, initializeVideoTime)
    })

    onUpdated(() => {
      console.log("onUpdated ComponentHome")

      //join room from url route
      let selectedRoomFromUrl = currentRoute._value.substr(1)
      console.log("selectedRoomFromUrl: " + selectedRoomFromUrl)
      joinRoom(selectedRoomFromUrl)
    })

    var socket = io("http://localhost:3000");
    var form = document.getElementById('form');  
    var input = document.getElementById('input');
    var buttonTest = document.getElementById('buttonTest');
    var url = document.location.pathname //window.location.href
    var playingVideosLastWholeSecond = null
    var playingVideoTotalDuration = null
    var playingVideoId = null
    var videoPlaying = false
    var videoMuted = false
    var fullScreenActive = false
    var playlistCurrentVideoIndex = 0
    var videoPlaylist = false
    // var randomVideos = ["2QGjt4TYxIQ"]
    // var randomPlaylists = ["PLP99IekYjHIgZS_1q2N3wc91ZR79rB1p0"]

    var playingVideoRoom = null
    var playingVideoStatus = null
    var playingVideoTitle = null
    var videoPlaylistId = null
    var roomDefaultPlaylist = null
    var playlistArray = null
    var playlistLength = null
    var loadingScreenTime = 7000
    var initializeVideoTime = 2000
    var resync1Time = 3000
    var resyncMargin = 1000
    var addToVideoOnJoinTime = 6
    var totalLoadTime = initializeVideoTime + resync1Time + resyncMargin

    var syncMaster = null
    var yourSocketId = null

    var currentRoom = null

    var loadCustomVideoLoadingScreenTime = 2000

    var youtubeEmbedVideoParameters = "?enablejsapi=1&autoplay=0&controls=1&modestbranding=1&rel=1&mute=1&amp;"
    var youtubeEmbedPlaylistParameters = "&enablejsapi=1&autoplay=0&controls=1&modestbranding=1&rel=1&mute=1&amp;"
    var videoChannelValue = null
    var videoQualityValue = null
    var videoAvailableQualities = null
    
    var playingVideoVolume = null
    var defaultRooms = ['general', 'gaming', 'food']
    var totalRoomsCount = 0
    var totalUsersCount = 0
    var totalUsersCurrentRoomCount = 0
    var defaultPlaylists = null

    var forbiddenCharactersString = "\nspace ! @ % < > | , . ; : [ ]"
    var yourUsername = null
    var waitingForRoomToBeInitialized = null

    var initializeNewCustomRoomVideoEnableKeybindsTime = 4000
    var resync2Time = 6000

    // function pvideo1()
    // {
    //   // $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    //   // document.getElementById("videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + playVideo + '","args":""}', '*');
    //   // document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    // }

    // function pvideo2()
    // {
    //   $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    // }

    // function pvideo3(){
    //   $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    // }

    //event listen to player
    window.onmessage = function(e){
      //debugging
      // console.log(e.data)

      if(typeof e.data != "object")
      {
        let data = JSON.parse(e.data);
        let info = data.info;

        // let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
        
        //remove play button overlay
        // videoPlayButtonOverlay.style.display = "none"
        if(e.data.toString().includes("volume"))
        {
          let data = JSON.parse(e.data)
          let volume = data.info.volume

          //set local variable
          playingVideoVolume = volume + "%"
          
          //set video info
          let videoVolume = document.getElementById("videoVolume")
          videoVolume.innerText = "volume: " + playingVideoVolume
        }
        if(e.data.toString().includes("playbackQuality"))
        {
          let data = JSON.parse(e.data)
          let oldVideoQuality = videoQualityValue
          let newVideoQuality = data.info.playbackQuality
          
          if(oldVideoQuality == "unknown")(oldVideoQuality = null)
          if(newVideoQuality == "unknown")(newVideoQuality = null)
          
          if(newVideoQuality == "tiny")(newVideoQuality = "144p")
          else if(newVideoQuality == "small")(newVideoQuality = "240p")
          else if(newVideoQuality == "medium")(newVideoQuality = "360p")
          else if(newVideoQuality == "large")(newVideoQuality = "480p")

          if(oldVideoQuality != null && newVideoQuality != null && oldVideoQuality != newVideoQuality)
          {          
            console.log("newVideoQuality: " + newVideoQuality)
            console.log("oldVideoQuality: " + videoQualityValue)
            
            let inputChatMessage = document.getElementById("inputChatMessage")
            inputChatMessage.focus()
            inputChatMessage.blur()

            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + parseInt(playingVideosLastWholeSecond + 1) + ', true]}', '*');
          }
        }
        if(e.data.toString().includes("playerState"))
        {
          //variables
          let currentState = data.info.playerState        
          // let playlistId = info.playlistId
          // let playlistIndex = info.playlistIndex
      
          //video info
          playingVideoId = info.videoData.video_id
          playingVideoTotalDuration = data.info.duration
          playingVideoTitle = data.info.videoData.title
          // console.log("playingVideoId: " + playingVideoId)
          // console.log("playingVideoTitle: " + playingVideoTitle)

          videoChannelValue = info.videoData.author
          videoQualityValue = info.videoData.video_quality
          videoAvailableQualities = info.availableQualityLevels
          // let videoPlaybackQuality = info.videoData.playbackQuality
          // let videoUrl = info.videoData.videoUrl
          // let videoPlaybackRate = info.videoData.playbackRate
          // console.log("videoChannel: " + videoChannelValue)
          // console.log("videoQuality: " + videoQualityValue)
          // console.log("videoPlaybackQuality: " + videoPlaybackQuality)
          // console.log("videoAvailableQualities: " + videoAvailableQualities)
          // console.log("videoUrl: " + videoUrl)
          // console.log("videoPlaybackRate: " + videoPlaybackRate)
          // {"event":"infoDelivery","info":{"playbackQuality":"hd1080"},"channel":"widget"}
          
          //set video info
          let videoInfo = document.getElementById("videoInfo")
          let videoTitle = document.getElementById("videoTitle")
          let videoQuality = document.getElementById("videoQuality")
          let videoChannel = document.getElementById("videoChannel")
          let videoCurrentRoom = document.getElementById("videoCurrentRoom")
          let totalUsersCurrentRoomCount = document.getElementById("totalUsersCurrentRoomCount")
          let videoPlayPauseOverlayText = document.getElementById("videoPlayPauseOverlayText")

          videoTitle.innerText = "video: " + playingVideoTitle
          videoChannel.innerText = "channel: " + videoChannelValue
          videoCurrentRoom.innerText = "current room: " + inputCurrentRoom.innerText
          videoPlayPauseOverlayText.innerText = playingVideoTitle

          if(videoQualityValue == "tiny")(videoQualityValue = "144p")
          else if(videoQualityValue == "small")(videoQualityValue = "240p")
          else if(videoQualityValue == "medium")(videoQualityValue = "360p")
          else if(videoQualityValue == "large")(videoQualityValue = "480p")

          if(videoQualityValue != null)
          {
            videoQuality.innerText = "quality: " + videoQualityValue
          }

          //playlist info
          if(info.playlist != null)
          {
            // console.log("playlistInfo")

            playlistArray = info.playlist
            playlistLength = info.playlist.length
            playlistCurrentVideoIndex = info.playlistIndex

            let videoCurrentPlaylistIndex = document.getElementById("videoCurrentPlaylistIndex")
            videoCurrentPlaylistIndex.innerText = "playlist video: " + (playlistCurrentVideoIndex + 1) + " of " + playlistLength
            
            // console.log("playlistArray: " + playlistArray)
            // console.log("playlistLength: " + playlistLength)
            // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
          }
          else if(info.playlist == null)
          {
            videoCurrentPlaylistIndex.innerText = ""
          }

          // console.log("currentState: " + currentState)

          if(currentState == 1)
          {
            currentState = "video playing"
            // if(socket.id == clientId)
            //   {
              //     console.log(socket)
            //     // videoPlayerEvents("play")             
            //   }

            // console.log(info.videoData.video_id)
            // console.log(playingVideoId)
            
            // setTimeout(() => { 
            //   let d = document.getElementById("videoPlayPauseOverlay")
            //   d.style.display = "none"
            //   let s = document.getElementById("videoPlayButtonSvg")
            //   s.style.display = "none"}, 100)
            //   let t = document.getElementById("videoInfo")
            //   t.style.display = "none"
            //   t.innerText = playingVideoTitle

              //undisplay pause overlay
              undisplayPauseOverlay()
          }
          else if(currentState == 2)
          {
            currentState = "video paused"
            // videoPlayerEvents("pause")

            //display pause overlay
            displayPauseOverlay()
          }
          else if(currentState == 3)
          {
            currentState = "video buffering"
          }
        }
        else if(e.data.toString().includes("currentTime"))
        {
          let currentTime = parseInt(data.info.currentTime)
          let totalDuration = parseInt(playingVideoTotalDuration)
          let currentPercentage = (currentTime / totalDuration).toFixed(3)
          let currentPercentageText = currentPercentage.substring(2, 4) + "%"
      
          // if(data.currentTime){
          //     console.log("The current time is "+ data.currentTime);
          // }
          // if(data.playerState){
          //     console.log("The player state is "+ data.playerState);
          // }

          // if((currentTime + 5) == playingVideosLastWholeSecond)
          // {
          //   // videoPlayerEvents("back5", playingVideosLastWholeSecond - 5)
          // }
          // if((currentTime - 5) == playingVideosLastWholeSecond)
          // {
          //   // videoPlayerEvents("forward5", playingVideosLastWholeSecond + 5)
          // }

          //update video current time
          if(currentTime != playingVideosLastWholeSecond)
          {
            //variables
            let currentTimeDisplay = document.getElementById("current-time-video")
            let currentTimeText = "duration: " + currentTime + "/" + totalDuration + "s"
            let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "video current time" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
            
            //debugging
            // console.log("currentTime: " + currentTimeText)

            //update visuals
            currentTimeDisplay.innerText = currentTimeText
            
            //update globals
            playingVideosLastWholeSecond = currentTime
            // console.log("playingVideosLastWholeSecond: " + playingVideosLastWholeSecond + "/" + totalDuration)
            // console.log("playingVideoId: " + playingVideoId)
            
            //send to server app
            // console.log("syncMaster: " + syncMaster)
            // console.log("yourSocketId: " + yourSocketId)
            if(yourSocketId == syncMaster)
            {
              console.log("you are sync master")
              // console.log("currentTime: " + currentTime)
              // console.log("totalDuration: " + totalDuration)
              // console.log("videoPlaylist: " + videoPlaylist)

              msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "video current time" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "," + "\"syncMaster\"" + ":" + "\"" + syncMaster + "\"" + "}")
              socket.emit('video command', msgObjVideoCommand);

              if(currentTime == (totalDuration - 3))
              {
                console.log("video reached end")
                // console.log("currentTime: " + currentTime)
                // console.log("totalDuration: " + totalDuration)
                // console.log("videoPlaylist: " + videoPlaylist)

                let roomIsDefault = false
                
                //check room is default
                for(let r in defaultRooms)
                {
                  if(defaultRooms[r] == currentRoom)
                  {
                    roomIsDefault = true
                  }
                }

                //check playlist reached end
                if(roomIsDefault == true && (playlistCurrentVideoIndex + 1) == playlistLength)
                {
                  console.log("playlist reached end")
                  console.log("loading new playlist")
                  
                  //load new playlist
                  setTimeout(() => {
                    videoPlayerEvents("random")
                    // setTimeout(() => {videoPlayerEvents("play")}, 2000)
                  }, 4000)
                }
              }
            }

            // videoCurrentPlaylistIndex.innerText = "playlist video: " + (playlistCurrentVideoIndex + 1) + " of " + playlistLength
          }
        }
      }
    }

    //event listen to keyboard
    window.addEventListener('keyup', enableKeybinds)
      
    //event listen to fullscreen
    document.addEventListener('fullscreenchange', onExitFullScreen);
    document.addEventListener('webkitfullscreenchange', onExitFullScreen);
    document.addEventListener('mozfullscreenchange', onExitFullScreen);
    document.addEventListener('MSFullscreenChange', onExitFullScreen);
    
    //functions
    function formOnSubmit() {
      // e.preventDefault();
      
      if (inputChatMessage.value) {
          let msgObj = JSON.parse("{" + "\"content\"" + ":" + "\"" + inputChatMessage.value + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          socket.emit('chat message', msgObj);
          inputChatMessage.value = '';
      }
    }

    function createRoom() {
      let createRoomInfo = []
      let newRoom = inputCreateRoom.value

      console.log(newRoom)

      //push new room name and old room name to array
      createRoomInfo.push(inputCreateRoom.value)
      createRoomInfo.push(inputCurrentRoom.innerText)
      
      //check for forbidden characters
      let characterCheck = forbiddenCharacterCheck(inputCreateRoom.value)
      if(characterCheck == true)
      {
          // alert("room name cannot be empty/contain space or following characters !@<<|,%")
          let errorMessageCreateRoom = document.getElementById("errorMessageCreateRoom")
          errorMessageCreateRoom.style.display = "block"
          errorMessageCreateRoom.innerText = "room name cannot be empty or contain " + forbiddenCharactersString
          return
      }
      
      //check if room already exists
      let roomLink = document.getElementsByClassName("roomLink")
      // console.log(roomLink)
      // console.log(vuexAllRooms)
      for(let rm in roomLink)
      {
          let roomThatExists = roomLink[rm].innerText
          // console.log(roomThatExists)
          
          if(newRoom == roomThatExists)
          {
              // alert("room " + newRoom + " already exists")
              errorMessageCreateRoom.style.display = "block"
              errorMessageCreateRoom.innerText = "room " + "'" + newRoom + "'" + " already exists"
              inputCreateRoom.value = ""
              return
          }
      }

      //clear messages
      messages.innerHTML = ""

      //create room
      socket.emit('create room', createRoomInfo);
      
      //clear create room input box
      inputCreateRoom.value = ""

      //reset player cancel current time sync
      let vp = document.getElementById("videoPlayer")
      if(vp != null)
      {
        vp.remove()
      }

      //set local variable
      playingVideoId = "null"
      videoPlaylistId = "newCustomRoom"

      //join room
      pushUrl(newRoom)
      
      let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")
      videoPlayPauseOverlay.style.display = "none"
      let modal = document.getElementById("modal")
      modal.style.display = "none"
    }
    
    function joinRoom(roomName)
    {
        // console.log(roomName)
        // console.log(socket.id)

        displayLoadingOverlay()
        undisplayVideoInfoAndControls()

        let componentStart = document.getElementById("componentStart")
        componentStart.style.display = "none"

        let newRoom = roomName
        let oldRoom = inputCurrentRoom.innerText
        let createRoomInfo = []

        createRoomInfo.push(newRoom)
        createRoomInfo.push(oldRoom)

        // if(newRoom == socket.id)
        // {
        //     console.log("you cannot join your own room")
        //     return
        // }
        
        if(newRoom == oldRoom)
        {
            // console.log("you are already in room " + "'" + newRoom + "'")
            // alert("you are already in room " + newRoom)
            window.location.reload()
            return
        }

        //clear messages
        messages.innerHTML = ""
        
        //send to server app
        socket.emit('join room', createRoomInfo);

        //reset player cancel current time sync
        let vp = document.getElementById("videoPlayer")
        if(vp != null)
        {
          vp.remove()
        }

        //load video
        setTimeout(() => {initializeVideo()}, initializeVideoTime)

        let videoArea = document.getElementById("videoArea")
        videoArea.style.display = "block"

        let flex = document.getElementById("flex")
        flex.style.display = "inline-flex"
    }

    function addUser(socketId)
    {
        socketId = yourSocketId

        let characterCheck = forbiddenCharacterCheck(inputAddUser.value)

        if(characterCheck == true)
        {
            // alert("username cannot be empty/contain space or following characters !@<<|,%")
            // let errorMessageAddUsername = document.getElementById("errorMessageAddUsername")
            // errorMessageAddUsername.style.display = "block"
            // errorMessageAddUsername.innerText = "username cannot be empty or contain " + forbiddenCharactersString
            return
        }

        // if(inputAddUser.value == "")
        // {
        //     alert("username cannot be empty or contain !@<<|,%")
        //     return
        // }

        let username = inputAddUser.value
        let user = JSON.parse("{" + "\"socketId\"" + ":" + "\"" + socketId + "\"" + "," + "\"username\"" + ":" + "\"" + username + "\"" + "}")
        // console.log(user)
        
        socket.emit('add user', user);
        
        inputAddUser.value = ""
        
        yourUsername = user.username
    }

    function leaveRoom(roomName)
    {
        //clear messages
        messages.innerHTML = ""

        socket.emit('leave room', roomName);
        
        //handle video area
        let videoArea = document.getElementById("videoArea")
        videoArea.style.display = "none"
        let iframeContainer = document.getElementById("iframeContainer")
        iframeContainer.innerHTML = ""
        let flex = document.getElementById("flex")
        flex.style.display = "none"
    }

    function forbiddenCharacterCheck(string)
    {
        if(string == "") return true
        if(string.includes(" ")) return true
        if(string.includes("!")) return true
        if(string.includes("@")) return true
        if(string.includes("<")) return true
        if(string.includes(">")) return true
        if(string.includes("|")) return true
        if(string.includes(",")) return true
        if(string.includes("%")) return true
        if(string.includes(".")) return true
        if(string.includes(";")) return true
        if(string.includes(":")) return true
        if(string.includes("[")) return true
        if(string.includes("]")) return true
    }

    function currentTimeStamp()
    {
        let currentDate = new Date();
        let currentHours = currentDate.getHours()
        let currentMinutes = currentDate.getMinutes()
        let currentSeconds = currentDate.getSeconds()

        if (currentHours < 10)
            currentHours + "0" + currentHours.toString()
        if (currentMinutes < 10)
            currentMinutes = "0" + currentMinutes.toString()
        if (currentSeconds < 10)
            currentSeconds = "0" + currentSeconds.toString()

        let time = + currentHours + ":" + currentMinutes + ":" + currentSeconds;
        return time
    }

    function toggleMenu()
    {
        console.log("toggleMenu")

        let menu = document.getElementById("menu")
        let chat = document.getElementById("chat")

        if(menu.style.display == "block")
        {
            menu.style.display = "none"
            chat.style.width = "100%"
        }
        else if(menu.style.display == "none")
        {
            menu.style.display = "block"    
            chat.style.width = "calc(80% - 3px)"
        }
    }

    function toggleMobileMenu()
    {
        console.log("toggleMobileMenu")

        let menuInfo = document.getElementById("info")
        let createRoom = document.getElementById("createRoom")
        let addUsername = document.getElementById("addUsername")
        let errorMessageCreateRoom = document.getElementById("errorMessageCreateRoom")
        let errorMessageAddUsername = document.getElementById("errorMessageAddUsername")
        let inputCreateRoom = document.getElementById("inputCreateRoom")
        let inputAddUser = document.getElementById("inputAddUser") 
        
        menuInfo.style.display = "none"
        createRoom.style.display = "none"
        addUsername.style.display = "none"
        errorMessageCreateRoom.style.display = "none"
        errorMessageAddUsername.style.display = "none"
        inputCreateRoom.value = ""
        inputAddUser.value = ""

        if(menu.style.display == "block")
        {
            menu.style.display = "none"
            chat.style.height = "82%"
        }
        else if(menu.style.display == "none")
        {
            menu.style.display = "block"    
            chat.style.height = "66%"
        }
    }

    function toggleMenuInfo()
    {
        let menuInfo = document.getElementById("info")

        if(menuInfo.style.display == "block")
        {
            menuInfo.style.display = "none"
        }
        else
        {
            menuInfo.style.display = "block"
        }
    }

    function toggleMenuUsers()
    {
        let menuUsers = document.getElementById("usersList")

        if(menuUsers.style.display == "block")
        {
            menuUsers.style.display = "none"
        }
        else
        {
            menuUsers.style.display = "block"
        }
    }

    function toggleMenuRooms()
    {
        let menuRooms = document.getElementById("allRoomsList")

        if(menuRooms.style.display == "block")
        {
            menuRooms.style.display = "none"
        }
        else
        {
            menuRooms.style.display = "block"
        }
    }

    function toggleMenuCreateRoom()
    {
        let createRoom = document.getElementById("createRoom")
        
        if(createRoom.style.display == "block")
        {
            createRoom.style.display = "none"
        }
        else
        {
            createRoom.style.display = "block"
        }
    }

    function toggleMenuAddUsername()
    {
        let addUsername = document.getElementById("addUsername")
        
        if(addUsername.style.display == "block")
        {
            addUsername.style.display = "none"
        }
        else
        {
            addUsername.style.display = "block"
        }
    }

    function loadVideoStart(videoId, playlistId)
    {
      //elements
      // let vp = document.getElementById("videoPlayer")
      let iframeContainer = document.getElementById("iframeContainer")
      let iframeEle = document.createElement("iframe")

      //iframe variables
      iframeEle.id = "videoPlayer"
      iframeEle.height = "100%"
      iframeEle.width = "100%"
      iframeEle.title = "YouTube video player"
      
      //load playlist
      if(videoPlaylist == "true")
      {
        // console.log("loadVideoStart playlist: " + playlistId + " video index " + playlistCurrentVideoIndex)
        
        //undisplay loading screen
        setTimeout(() => {undisplayLoadingOverlay()}, loadingScreenTime)
        
        loadPlaylist(playlistId)
      }
      //load video
      else if(videoPlaylist == "false")
      {
        // console.log("loadVideoStart video: " + videoId)

        //undisplay loading screen
        setTimeout(() => {undisplayLoadingOverlay()}, loadingScreenTime)
        
        //set local variable
        videoPlaylist = false

        iframeEle.src = "https://www.youtube-nocookie.com/embed/" + videoId + youtubeEmbedVideoParameters
        
        iframeContainer.innerHTML = ""
        iframeContainer.append(iframeEle)
        
        //remove border
        let vp = document.getElementById("videoPlayer")
        vp.style.border = "0px"
      }

      //append iframe
      // if(vp == null)
      // {
      //   iframeContainer.append(iframeEle)
      //   // document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      //   // document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + 123 + ', true]}', '*');
      //   // document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*')
      //   // console.log(iframeEle)
      // }
    }

    function loadVideoCustom(loadThisId)
    {
      //variables
      let container = document.getElementById("iframeContainer")
      let iframeEle = document.createElement("iframe")
      let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
      
      //iframe variables
      iframeEle.id = "videoPlayer"
      iframeEle.height = "100%"
      iframeEle.width = "100%"
      iframeEle.title = "YouTube video player"

      undisplayVideoInfoAndControls()
      resetVideoInfo()
      displayLoadingOverlay()
      displayPauseOverlay()
      //display overlay
      videoPlayButtonOverlay.style.display = "block"

      //load video    
      if(loadThisId.playingVideoId != "null")
      {
        let videoId = loadThisId.playingVideoId
        console.log("loadVideoCustom video: " + videoId)

        //set local variable
        videoPlaylistId = null
        playlistCurrentVideoIndex = 0
        videoPlaylist = false
        
        //check if player is muted
        if(videoMuted == false)
        {
          iframeEle.src = "https://www.youtube-nocookie.com/embed/" + videoId + youtubeEmbedVideoParameters
        }
        else if(videoMuted == true)
        {
          iframeEle.src = "https://www.youtube-nocookie.com/embed/" + videoId + youtubeEmbedVideoParameters
        }
        
        //append iframe
        container.innerHTML = ""
        container.append(iframeEle)

        //remove border
        let vp = document.getElementById("videoPlayer")
        vp.style.border = "0px"

        //undisplay loading screen
        setTimeout(() => {
          undisplayLoadingOverlay()}, loadCustomVideoLoadingScreenTime)
      }
      //load playlist
      else if(loadThisId.videoPlaylistId != "null")
      {
        let playlistId = loadThisId.videoPlaylistId
        console.log("loadVideoCustom playlist: " + playlistId)

        //undisplay loading screen
        setTimeout(() => {undisplayLoadingOverlay()}, loadCustomVideoLoadingScreenTime)

        loadPlaylist(playlistId)
      }
    }

    function videoPlayerEvents(event, param1, param2, param3)
    {
      if(event == "play")
      {
        //set local variable
        videoPlaying = true

        //variables
        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "▶ played video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "play video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
        
        //video command
        socket.emit('video command', msgObjVideoCommand);

        //chat message
        socket.emit('chat message', msgObjChat);
      }
      else if(event == "pause")
      {
        //set local variable
        videoPlaying = false

        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "◾ paused video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "pause video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")

        //video command
        socket.emit('video command', msgObjVideoCommand);

        //chat message
        socket.emit('chat message', msgObjChat);          
      }
      // else if(event == "stop")
      // {
      //   document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      // }
      else if(event == "sync")
      {
        //variables
        let syncTime = document.getElementById("sync-video-input").value
        if(syncTime == "")
        {
          let syncTimeMobile = document.getElementById("sync-video-input-mobile").value
          syncTime = syncTimeMobile
        }
        // let syncTimeInMinutes = parseInt(syncTime / 60)
        // let syncTimeInSeconds = syncTime % 60
        let syncMessage = "synced video to " + syncTime + " secs"
        
        // if(syncTimeInMinutes == 0 && syncTimeInSeconds < 10)
        // {
        //   syncMessage = "synced video to " + syncTimeInMinutes.toString() + ".0" + syncTimeInSeconds.toString() + " minutes"
        // }
        // else if(syncTimeInMinutes > 0 && syncTimeInSeconds < 10)
        // {
        //   syncMessage = "synced video to " + syncTimeInMinutes.toString() + ".0" + syncTimeInSeconds.toString() + " minutes"
        // }
        // else
        // {
        //   syncMessage = "synced video to " + syncTimeInMinutes.toString() + "." + syncTimeInSeconds.toString() + " minutes"
        // }
        // console.log(syncMessage)

        if(syncTime != "" && syncTime < parseInt(playingVideoTotalDuration))
        {
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + syncMessage + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "sync video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "," + "\"syncTime\"" + ":" + "\"" + syncTime + "\"" + "}")

          //chat message
          socket.emit('chat message', msgObjChat);
          
          //video command
          socket.emit('video command', msgObjVideoCommand);

          //set local variable
          videoPlaying = true
        }
      }
      else if(event == "mute")
      {
        document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'mute' + '","args":""}', '*');
        
        let btnMute = document.getElementById("mute-video")
        let btnUnmute = document.getElementById("unmute-video")
        btnMute.style.display = "none"
        btnUnmute.style.display = "block"
        
        let btnMuteMobile = document.getElementById("mute-video-mobile")
        let btnUnmuteMobile = document.getElementById("unmute-video-mobile")
        btnMuteMobile.style.display = "none"
        btnUnmuteMobile.style.display = "block"

        //set local variable
        videoMuted = true
      }
      else if(event == "unMute")
      {
        document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'unMute' + '","args":""}', '*');
        
        let btnMute = document.getElementById("mute-video")
        let btnUnmute = document.getElementById("unmute-video")
        btnMute.style.display = "block"
        btnUnmute.style.display = "none"
        
        let btnMuteMobile = document.getElementById("mute-video-mobile")
        let btnUnmuteMobile = document.getElementById("unmute-video-mobile")
        btnMuteMobile.style.display = "block"
        btnUnmuteMobile.style.display = "none"

        //set local variable
        videoMuted = false
      }
      else if(event == "restart")
      {
        //set local variable
        videoPlaying = true

        //variables
        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "▶ restarted video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "restart video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
        
        //video command
        socket.emit('video command', msgObjVideoCommand);

        //chat message
        socket.emit('chat message', msgObjChat);
      }
      else if(event == "load")
      {
        let loadVideoInput = document.getElementById("load-video-input").value
          let loadVideoInputMobile = document.getElementById("load-video-input-mobile").value

        let initializeNewCustomRoomVideoInput = document.getElementById("initializeNewCustomRoom-load-video-input").value
        let initializeNewCustomRoom = document.getElementById("initializeNewCustomRoom")

        let loadThisId = loadVideoInput
        let msgObjChat = "" //JSON.parse("{" + "\"content\"" + ":" + "\"" + "loaded video " + loadThisId + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = ""
        
        if(initializeNewCustomRoomVideoInput != "")
        { 
          loadThisId = initializeNewCustomRoomVideoInput
          initializeNewCustomRoom.style.display = "none"
          initializeNewCustomRoomVideoInput = ""
        }
        else if(loadVideoInputMobile != "") { loadThisId = loadVideoInputMobile }
        else if(loadThisId != "") { loadThisId = loadVideoInput }
        else { loadThisId = param1 }
        
        console.log("loadThisId: " + loadThisId)

        //check if playlist
        if(loadThisId.substring(0, 2).toUpperCase() == "PL")
        {
          msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "loaded playlist " + loadThisId + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "load video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + null + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + 0 + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + true + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + loadThisId + "\"" + "}")
        }
        else if(loadThisId.substring(0, 2).toUpperCase() != "PL")
        {
          msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "loaded video " + loadThisId + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "load video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + loadThisId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + null + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + false + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + null + "\"" + "}")
        }

        if(loadThisId != "")
        {
          //chat message
          socket.emit('chat message', msgObjChat);
          
          //video command
          socket.emit('video command', msgObjVideoCommand);
        }
      }
      // else if(event == "reset")
      // {
      //   document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[0, true]}', '*');
      // }
      // else if(event == "forward5")
      // {
      //   //variables
      //   let syncTime = param1
      //   let syncTimeInMinutes = parseInt(syncTime / 60)
      //   let syncTimeInSeconds = syncTime % 60
      //   let syncMessage

      //   // let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + syncMessage + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
      //   let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "forward5" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"syncTime\"" + ":" + "\"" + syncTime + "\"" + "}")
  
      //   //chat message
      //   // socket.emit('chat message', msgObjChat);
        
      //   //video command
      //   socket.emit('video command', msgObjVideoCommand);
      // }
      // else if(event == "back5")
      // {
      //   //variables
      //   let syncTime = param1
      //   let syncTimeInMinutes = parseInt(syncTime / 60)
      //   let syncTimeInSeconds = syncTime % 60
      //   let syncMessage

      //   if(playingVideosLastWholeSecond != 0)
      //   {
      //     // let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + syncMessage + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
      //     let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "back5" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"syncTime\"" + ":" + "\"" + syncTime + "\"" + "}")
    
      //     //chat message
      //     // socket.emit('chat message', msgObjChat);
          
      //     //video command
      //     socket.emit('video command', msgObjVideoCommand);
      //   }
      // }
      // else if(event == "join")
      // {
      //   console.log("join")
        
      //   if(param2 == "false") //check if video is playing
      //     {
      //       //sync to lastWholeSecond
      //       document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + param1 + ', true]}', '*');
            
      //       //add event listener for getCurrentTime
      //       document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*')

      //       //pause video
      //       document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

      //       //set local variable
      //       videoPlaying = false
      //     }
      //     else if(param2 == "true") //check if video is not playing
      //     {
      //       //sync to lastWholeSecond
      //       document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + param1 + ', true]}', '*');

      //       //play video
      //       document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      //       displayPauseButton()

      //       //add event listener for getCurrentTime
      //       document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*')

      //       //set local variable
      //       videoPlaying = true
      //     }

      //     // //mute player
      //     // document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'mute' + '","args":""}', '*');
      //     // let btnMute = document.getElementById("mute-video")
      //     // let btnUnmute = document.getElementById("unmute-video")
      //     // btnMute.style.display = "none"
      //     // btnUnmute.style.display = "block"

      //     // //set local variables
      //     // videoMuted = true
      // }
      else if(event == "next")
      {
        //debugging
        // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
        // console.log("playlistLength: " + playlistLength)

        //set local variable
        if(playlistCurrentVideoIndex < (playlistLength - 1))
        {
          playlistCurrentVideoIndex++

          //variables
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "next video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "next video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
          
          //video command
          socket.emit('video command', msgObjVideoCommand);

          //chat message
          socket.emit('chat message', msgObjChat);
        }
      }
      else if(event == "previous")
      { 
          //debugging
          // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
          // console.log("playlistLength: " + playlistLength)

          if(playlistCurrentVideoIndex > 0)
          {
            //set local variable
            playlistCurrentVideoIndex--

            //variables
            let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "previous video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
            let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "previous video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
            
            //video command
            socket.emit('video command', msgObjVideoCommand);

            //chat message
            socket.emit('chat message', msgObjChat);
          }
      }
      else if(event == "resync1")
      {
        console.log("resync1: " + playingVideosLastWholeSecond + "s")
        // console.log("videoPlaylist: " + videoPlaylist)
        // console.log("playingVideoStatus: " + playingVideoStatus)
        // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
        // console.log("playingVideosLastWholeSecond: " + playingVideosLastWholeSecond)
        
        playingVideosLastWholeSecond = parseInt(playingVideosLastWholeSecond)
        // playingVideosLastWholeSecond
        // playingVideoId
        // playingVideoRoom
        // playingVideoStatus

        let loadingScreenText = document.getElementById("loadingScreenText")
        loadingScreenText.innerText = "Syncing..."
        
        if(playingVideosLastWholeSecond == 0 && playingVideoStatus == false)
        {
          displayPauseOverlay()
        }
        else if(videoPlaylist == true)
        {
          if(playingVideoStatus == "false")
          {
            videoPlaying = false//set local variable

            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideoAt' + '","args":[' + playlistCurrentVideoIndex + ']}', '*');
            
            setTimeout(() => {
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + playingVideosLastWholeSecond + ', true]}', '*'); //sync to lastWholeSecond
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');//pause video
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*')//add event listener for getCurrentTime
            }, resyncMargin)
                      
            displayPlayButton()

            //display pause overlay
            displayPauseOverlay()
          }
          else if(playingVideoStatus == "true")
          {
            videoPlaying = true//set local variable

            //add seconds to account for load time
            playingVideosLastWholeSecond = parseInt(playingVideosLastWholeSecond) + addToVideoOnJoinTime
                      
            displayPauseButton()

            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideoAt' + '","args":[' + playlistCurrentVideoIndex + ']}', '*');
            
            setTimeout(() => {
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + playingVideosLastWholeSecond + ', true]}', '*'); //sync to lastWholeSecond
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*')//add event listener for getCurrentTime
            }, resyncMargin)
          }
        }
        else if(videoPlaylist == false)
        {
          if(playingVideoStatus == "false")
          {
            videoPlaying = false//set local variable
          
            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); //play video

            setTimeout(() => {
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + playingVideosLastWholeSecond + ', true]}', '*'); //sync to lastWholeSecond
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*')//add event listener for getCurrentTime
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');//pause video
            }, resyncMargin)
            
            displayPlayButton()

            //display pause overlay
            displayPauseOverlay()
          }
          else if(playingVideoStatus == "true")
          {
            videoPlaying = true//set local variable

            //add seconds to account for load time
            playingVideosLastWholeSecond = parseInt(playingVideosLastWholeSecond) + addToVideoOnJoinTime
            
            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); //play video

            setTimeout(() => {
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + playingVideosLastWholeSecond + ', true]}', '*');//sync to lastWholeSecond
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*') //add event listener for getCurrentTime
  
              displayPauseButton()    

            }, resyncMargin)

          }
        }
      }
      else if(event == "jump")
      {
        //variables
        let jumpVideoInput = document.getElementById("jump-video-input").value
        if(jumpVideoInput == "")
        {
          let jumpVideoInputMobile = document.getElementById("jump-video-input-mobile").value
          jumpVideoInput = jumpVideoInputMobile
        }
        let jumpIndex = jumpVideoInput - 1
        let videoNr = jumpIndex + 1
        let currentVideo = (playlistCurrentVideoIndex + 1)


        if(videoNr != currentVideo && videoNr >= 1 && videoNr <= playlistLength)
        {
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "jumped to video " + videoNr + "/" + playlistLength + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "jump video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + jumpIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + true + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "," + "\"jumpIndex\"" + ":" + "\"" + jumpIndex + "\"" + "}")

          //chat message
          socket.emit('chat message', msgObjChat);
          
          //video command
          socket.emit('video command', msgObjVideoCommand);
        }
      }
      else if(event == "volume")
      {
        document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'setVolume' + '","args":[' + param1 + ']}', '*');
      }
      else if(event == "random")
      {
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "random playlist " + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "random playlist" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + null + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + 0 + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + true + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + null + "\"" + "}")

          //chat message
          socket.emit('chat message', msgObjChat);
          
          //video command
          socket.emit('video command', msgObjVideoCommand);
      }
      else if(event == "resync2")
      {
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "resync2 video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + null + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + 0 + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + true + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + null + "\"" + "}")
          
          //video command
          socket.emit('video command', msgObjVideoCommand);
      }
    }

    function videoPlayButtonOverlay()
    {
        let modal = document.getElementById("modal")
        let componentAbout = document.getElementById("componentAbout")
        let componentCredits = document.getElementById("componentCredits")

        //hide or show modal/components
        if(modal.style.display == "block" || componentAbout.style.display == "block" || componentCredits.style.display == "block") 
        { 
          modal.style.display = "none" 
          componentAbout.style.display = "none"  
          componentCredits.style.display = "none"   
        } 
        //play or pause video
        else if(videoPlaying == false) { videoPlayerEvents("play") }
        else if(videoPlaying == true){ videoPlayerEvents("pause") }
    }

    function requestFullScreen()
    {
      // var element = document.body; // Make the body go full screen.
      // var element = document.getElementById("fullscreen")
      var element = document.getElementById("player")
      var videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
      
      var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
      
      if (requestMethod) { // Native full screen.
          requestMethod.call(element);

          var videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
          videoPlayButtonOverlay.style.height = "100vh"
          videoPlayButtonOverlay.style.width = "100vw"
          videoPlayButtonOverlay.style.left = "0"
          videoPlayButtonOverlay.style.top = "0"
    
          //set local variable
          fullScreenActive = true
      } 
      // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      //     var wscript = new ActiveXObject("WScript.Shell");
      //     if (wscript !== null) {
      //         wscript.SendKeys("{F11}");
      //     }
      // }
      
      
    }

    function requestCloseFullScreen()
    {      
      if(document.exitFullscreen) 
      {
        document.exitFullscreen();
      } 
      else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } 
      else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }

    function onExitFullScreen()
    {
      let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")

      if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) 
      {
          //reset videoPlayButtonOverlay
          videoPlayButtonOverlay.style = "display: block; position: absolute; left: 0px; top: 0px; height: calc(100vh + 13px); width: calc(83vw - 1px); border: 0; background-color: transparent;" /* background-color: #ff000030; */
          
          //set local variable
          fullScreenActive = false
          
          //readd escape keybind
          setTimeout(() => {
            window.addEventListener('keyup', (event) => {
              // console.log(event)
              
              if(event.code === "Escape")
              {
                let componentStart = document.getElementById("componentStart")
                let inputChatMessage = document.getElementById("inputChatMessage")
                let modal = document.getElementById("modal")
            
                //deselect input
                inputChatMessage.focus()
                inputChatMessage.blur()

                //hide or show sidebar
                if(componentStart.style.display == "block") { componentStart.style.display = "none" }
                //hide or show modal
                else if(modal.style.display == "none") { modal.style.display = "block" }
                else if(modal.style.display == "block") { modal.style.display = "none"}
              }
            })

          }, 100)
      }
    }

    function loadPlaylist(playlistId)
    {
        //set local variables
        videoPlaylist = true
        videoPlaylistId = playlistId

        //elements
        let iframeContainer = document.getElementById("iframeContainer")
        let iframeEle = document.createElement("iframe")
        let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
        
        //iframe variables
        iframeEle.id = "videoPlayer"
        iframeEle.height = "100%"
        iframeEle.width = "100%"
        iframeEle.title = "YouTube video player"

        //check if player is muted
        if(videoMuted == false)
        {
          iframeEle.src = "https://www.youtube-nocookie.com/embed/videoseries?list=" + playlistId + youtubeEmbedPlaylistParameters
        }
        else if(videoMuted == true)
        {
          iframeEle.src = "https://www.youtube-nocookie.com/embed/videoseries?list=" + playlistId + youtubeEmbedPlaylistParameters
        }

        //check if new custom room
        if(playlistId == "newCustomRoom")
        {
          iframeEle.src = ""
          waitingForRoomToBeInitialized = true
          disableKeybinds()
        }

        //append iframe
        iframeContainer.innerHTML = ""
        iframeContainer.append(iframeEle)

        //remove border
        let vp = document.getElementById("videoPlayer")
        vp.style.border = "0px"
        
        //display overlay
        // videoPlayButtonOverlay.style.display = "block"

        //display playlist controls
        // let playlistControls = document.getElementById("playlistControls")  
        // playlistControls.style.display = "inline-flex"
        
        //mute player
        // videoPlayerEvents("mute")
    }

    function displayPlayButton()
    {
      let btnPlay = document.getElementById("play-video")
      let btnPause = document.getElementById("pause-video")
      btnPlay.style.display = "block"
      btnPause.style.display = "none"
      
      let btnPlayMobile = document.getElementById("play-video-mobile")
      let btnPauseMobile = document.getElementById("pause-video-mobile")
      btnPlayMobile.style.display = "block"
      btnPauseMobile.style.display = "none"
    }

    function displayPauseButton()
    {
      let btnPlay = document.getElementById("play-video")
      let btnPause = document.getElementById("pause-video")
      btnPlay.style.display = "none"
      btnPause.style.display = "block"
            
      let btnPlayMobile = document.getElementById("play-video-mobile")
      let btnPauseMobile = document.getElementById("pause-video-mobile")
      btnPlayMobile.style.display = "none"
      btnPauseMobile.style.display = "block"
    }

    function initializeVideo()
    {        
        if(videoPlaylistId == "null" || videoPlaylistId == null)
        {
          console.log("initializeVideo video: " + playingVideoId)

          loadVideoStart(playingVideoId, videoPlaylistId)
  
          //sync video
          setTimeout(() => {videoPlayerEvents("resync1")}, resync1Time)
          setTimeout(() => {videoPlayerEvents("resync2")}, resync2Time)
  
          //undisplay playlist controls
          let playlistControls = document.getElementById("playlistControls")
          playlistControls.style.display = "none"
        }
        else if(videoPlaylistId != "null" || videoPlaylistId != null)
        {
          console.log("initializeVideo playlist: " + videoPlaylistId)

          loadVideoStart(playingVideoId, videoPlaylistId)
  
          //sync video
          setTimeout(() => {videoPlayerEvents("resync1")}, resync1Time)
          setTimeout(() => {videoPlayerEvents("resync2")}, resync2Time)
          
          //display playlist controls
          let playlistControls = document.getElementById("playlistControls")
          playlistControls.style.display = "inline-flex"
        }
    }

    function displayPauseOverlay()
    {
        let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")
        videoPlayPauseOverlay.style.display = "block"

        // let videoPlayButtonSvg = document.getElementById("videoPlayButtonSvg")
        // videoPlayButtonSvg.style.display = "block"

        let videoPlayPauseOverlayMobile = document.getElementById("videoPlayPauseOverlayMobile")
        videoPlayPauseOverlayMobile.style.display = "block"

        let player = document.getElementById("player")
        player.style.transform = "scale(1.6)"
    }

    function undisplayPauseOverlay()
    {
      let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")
      videoPlayPauseOverlay.style.display = "none"

      // let videoPlayButtonSvg = document.getElementById("videoPlayButtonSvg")
      // videoPlayButtonSvg.style.display = "none"

      setTimeout(() => {
        let player = document.getElementById("player")
        player.style.transform = "scale(1)"
        
        let videoPlayPauseOverlayMobile = document.getElementById("videoPlayPauseOverlayMobile")
        videoPlayPauseOverlayMobile.style.display = "none"
      }, 100)
    }

    function displayLoadingOverlay()
    {   
        let loadingScreenText = document.getElementById("loadingScreenText")
        loadingScreenText.innerText = "Loading..."
        
        let videoLoadingOverlay = document.getElementById("videoLoadingOverlay")
        videoLoadingOverlay.style.display = "block"

        let videoInfo = document.getElementById("videoInfo")
        videoInfo.style.display = "none"

        let componentStart = document.getElementById("componentStart")
        componentStart.scrollTop = 0

        let videoPlayPauseOverlayText = document.getElementById("videoPlayPauseOverlayText")
        videoPlayPauseOverlayText.innerText = "Press to Play"
    }

    function undisplayLoadingOverlay()
    {
        let videoLoadingOverlay = document.getElementById("videoLoadingOverlay")
        videoLoadingOverlay.style.display = "none"
        // videoLoadingOverlay.style.zIndex = "1"
        // videoLoadingOverlay.style.backgroundColor = "transparent"

        // let loadingScreenText = document.getElementById("loadingScreenText")
        // loadingScreenText.style.marginRight = "14vw"

        let loadingScreenImage = document.getElementById("loadingScreenImage")
        loadingScreenImage.style.display = "none"

        let loadingScreenGif = document.getElementById("loadingScreenGif")
        loadingScreenGif.style.backgroundColor = "transparent"

        let vp = document.getElementById("videoPlayer")
        vp.style.border = "0px"

        let videoPlayPauseOverlayText = document.getElementById("videoPlayPauseOverlayText")
        videoPlayPauseOverlayText.style.display = "block"

        displayVideoInfoAndControls()

        //check if new custom room
        if(videoPlaylistId == "newCustomRoom")
        {
          let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")
          videoPlayPauseOverlay.style.display = "none"
          resetVideoInfo()
          undisplayVideoInfoAndControls()
          displayInitializeNewCustomRoom()
        }
    }

    function pushUrl(room)
    {
      console.log("pushUrl: " + room)
      router.push({ path: '/' + room} )
    }

    function resetCurrentTimeVideo()
    {
        let currentTimeVideo = document.getElementById("current-time-video")
        currentTimeVideo.innerText = ""
    }

    function displayVideoInfoAndControls()
    {
      let videoPlayerControlButtons = document.getElementById("videoPlayerControlButtons")
      videoPlayerControlButtons.style.display = "inline-flex"
      
      let videoInfo = document.getElementById("videoInfo")
      videoInfo.style.display = "block"

      let videoPlayerControlButtonsMobile = document.getElementById("videoPlayerControlButtonsMobile")
      videoPlayerControlButtonsMobile.style.display = "block"
    }

    function undisplayVideoInfoAndControls()
    {
      let videoPlayerControlButtons = document.getElementById("videoPlayerControlButtons")
      videoPlayerControlButtons.style.display = "none"
      
      let videoInfo = document.getElementById("videoInfo")
      videoInfo.style.display = "none"

      let videoPlayerControlButtonsMobile = document.getElementById("videoPlayerControlButtonsMobile")
      videoPlayerControlButtonsMobile.style.display = "none"
    }

    function showStartComponent()
    {
      let componentAbout = document.getElementById("componentAbout")
      let componentStart = document.getElementById("componentStart")
      let componentCredits = document.getElementById("componentCredits")

      componentAbout.style.display = "none"  
      componentCredits.style.display = "none"   
      if(componentStart.style.display == "block") { componentStart.style.display = "none" }
      else if(componentStart.style.display == "none") { componentStart.style.display = "block" }
    }

    function resetVideoInfo()
    {
      let videoCurrentRoom = document.getElementById("videoCurrentRoom")
      let videoTitle = document.getElementById("videoTitle")
      let videoCurrentPlaylistIndex = document.getElementById("videoCurrentPlaylistIndex")
      let videoChannel = document.getElementById("videoChannel")
      let videoCurrentTime = document.getElementById("current-time-video")
      let videoVolume = document.getElementById("videoVolume")
      let videoQuality = document.getElementById("videoQuality")

      videoCurrentRoom.innerText = ""
      videoTitle.innerText = ""
      videoCurrentPlaylistIndex.innerText = ""
      videoChannel.innerText = ""
      videoCurrentTime.innerText = ""
      videoVolume.innerText = ""
      videoQuality.innerText = ""
    }

    function toggleVideoInfoAndControls()
    {
      let videoPlayerControlButtons = document.getElementById("videoPlayerControlButtons")
      let videoInfo = document.getElementById("videoInfo")
      let videoPlayerControlButtonsMobile = document.getElementById("videoPlayerControlButtonsMobile")

      if(videoInfo.style.display == "block")
      {
        videoInfo.style.display = "none"
        videoPlayerControlButtons.style.display = "none"
      }
      else if(videoInfo.style.display == "none")
      {
        videoInfo.style.display = "block"
        videoPlayerControlButtons.style.display = "inline-flex"
        videoPlayerControlButtonsMobile.style.display = "block"
      }
    }

    function showModalCategory(category)
    {
      let modal = document.getElementById("modal")
      modal.style.display = "block"

      let modalContentKeybinds = document.getElementById("modalContentKeybinds")
      let modalContentSettings = document.getElementById("modalContentSettings")
      let modalContentVideoQuality = document.getElementById("modalContentVideoQuality")
      let modalContentAddUsername = document.getElementById("modalContentAddUsername")
      let modalContentCreateRoom = document.getElementById("modalContentCreateRoom")

      let modalSidebarKeybinds = document.getElementById("modalSidebarKeybinds")
      let modalSidebarSettings = document.getElementById("modalSidebarSettings")
      let modalSidebarVideoQuality = document.getElementById("modalSidebarVideoQuality")
      let modalSidebarAddUsername = document.getElementById("modalSidebarAddUsername")
      let modalSidebarCreateRoom = document.getElementById("modalSidebarCreateRoom")

      //set selected sidebar category background color
      modalSidebarCreateRoom.style.backgroundColor = "white"
      modalSidebarAddUsername.style.backgroundColor = "white"
      modalSidebarSettings.style.backgroundColor = "white"
      modalSidebarKeybinds.style.backgroundColor = "white"
      modalSidebarVideoQuality.style.backgroundColor = "white"

      //set selected sidebar category text color
      modalSidebarCreateRoom.style.color = "#1c1b1b"
      modalSidebarAddUsername.style.color = "#1c1b1b"
      modalSidebarSettings.style.color = "#1c1b1b"
      modalSidebarKeybinds.style.color = "#1c1b1b"
      modalSidebarVideoQuality.style.color = "#1c1b1b"

      //display selected category content 
      modalContentCreateRoom.style.display = "none"
      modalContentAddUsername.style.display = "none"
      modalContentSettings.style.display = "none"
      modalContentKeybinds.style.display = "none"
      modalContentVideoQuality.style.display = "none"

      if(category == "Keybinds")
      {
        modalSidebarKeybinds.style.backgroundColor = "#1c1b1b"
        modalSidebarKeybinds.style.color = "white"
        modalContentKeybinds.style.display = "block"
      }
      else if(category == "Settings")
      {
        modalSidebarSettings.style.backgroundColor = "#1c1b1b"
        modalSidebarSettings.style.color = "white"
        modalContentSettings.style.display = "block"
      }
      else if(category == "Video Quality")
      {
        modalSidebarVideoQuality.style.backgroundColor = "#1c1b1b"
        modalSidebarVideoQuality.style.color = "white"
        modalContentVideoQuality.style.display = "block"
        
        if(modalContentVideoQuality != null)
        {
          modalContentVideoQuality.style.height = "90%"
          modalContentVideoQuality.style.width = "100%"
        }

        function appendVideoiframe()
        {
          let iframe = document.createElement("iframe")
          iframe.id = "videoPlayerChangeQuality"
          iframe.height = "60%"
          iframe.width = "90%"
          iframe.title = "YouTube video player to change quality"
          iframe.src ="https://www.youtube-nocookie.com/embed/" + playingVideoId + youtubeEmbedVideoParameters
          iframe.style.display = "none"
          iframe.backgroundColor = "red"
  
          let button = document.createElement("button")
          button.onclick = function(){window.location.reload()}
          button.innerText = "Reload"
          button.style.height = "40px"
          button.style.width = "40%"
          button.style.marginTop = "30px"
          button.style.marginBottom = "30px"
          button.style.borderRadius = "0%"
        
          let videoPlayerChangeQuality = document.getElementById("videoPlayerChangeQuality")
  
          if(videoPlayerChangeQuality != null)
          {
            console.log("videoPlayerChangeQuality: " + videoPlayerChangeQuality)
            console.log("videoPlayerChangeQuality src: " + videoPlayerChangeQuality.src + " / " + "playingVideoId: " + playingVideoId)
          }
  
          if(videoPlayerChangeQuality == null)
          {
            let changeVideoQuality = document.getElementById("changeVideoQuality")
            changeVideoQuality.append(iframe)
  
            setTimeout(() => {
              let videoPlayerChangeQuality = document.getElementById("videoPlayerChangeQuality")
              videoPlayerChangeQuality.style.border = "0px"
              videoPlayerChangeQuality.style.display = ""
  
              changeVideoQuality.append(button)
              
              let changeVideoQualityLoadingText = document.getElementById("changeVideoQualityLoadingText")
              changeVideoQualityLoadingText.innerText = ""
  
              let changeVideoQualitySteps = document.getElementById("changeVideoQualitySteps")
              changeVideoQualitySteps.style.display = "block"
  
            }, 1000)
          }
        }

        appendVideoiframe()
      }
      else if(category == "Add Username")
      {
        modalSidebarAddUsername.style.backgroundColor = "#1c1b1b"
        modalSidebarAddUsername.style.color = "white"
        modalContentAddUsername.style.display = "block"

        let errorMessageAddUsername = document.getElementById("errorMessageAddUsername")
        errorMessageAddUsername.innerText = "username cannot be empty or contain " + forbiddenCharactersString
      }
      else if(category == "Create Room")
      {
        modalSidebarCreateRoom.style.backgroundColor = "#1c1b1b"
        modalSidebarCreateRoom.style.color = "white"
        modalContentCreateRoom.style.display = "block"
        
        let errorMessageCreateRoom = document.getElementById("errorMessageCreateRoom")
        errorMessageCreateRoom.innerText = "room name cannot be empty or contain " + forbiddenCharactersString
      }
    }

    function displayInitializeNewCustomRoom()
    {
      let initializeNewCustomRoom = document.getElementById("initializeNewCustomRoom")
      initializeNewCustomRoom.style.display = "block"
      
      let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
      videoPlayButtonOverlay.style.display = "none"
    }

    function enableKeybinds(event)
    {
        // console.log(event)
        if(event.code === "Escape")
        {
          let componentStart = document.getElementById("componentStart")
          let inputChatMessage = document.getElementById("inputChatMessage")
          let modal = document.getElementById("modal")
          let componentAbout = document.getElementById("componentAbout")
          let componentCredits = document.getElementById("componentCredits")
          
          //deselect input
          inputChatMessage.focus()
          inputChatMessage.blur()

          //hide or show components
          if(componentStart.style.display == "block" || componentAbout.style.display == "block" || componentCredits.style.display == "block") 
          { 
            componentStart.style.display = "none"
            componentAbout.style.display = "none" 
            componentCredits.style.display = "none"
          }
          //hide or show modal
          else if(modal.style.display == "none") { modal.style.display = "block" }
          else if(modal.style.display == "block") { modal.style.display = "none"}
        }
        else if(document.activeElement.id != "inputChatMessage" && document.activeElement.id != "inputCreateRoom" && document.activeElement.id != "inputAddUser" && document.activeElement.id != "initializeNewCustomRoom-load-video-input")
        {
          if(event.code === "Space")
          {
            if(videoPlaying == false){videoPlayerEvents("play")}
            else if(videoPlaying == true){videoPlayerEvents("pause")}
          }
          else if(event.code === "KeyM")
          {
            if(videoMuted == true){videoPlayerEvents("unMute")}
            else if(videoMuted == false){videoPlayerEvents("mute")}
          }
          else if(event.code == "KeyF")
          {
            console.log("fullScreenActive = " + fullScreenActive)
            if(fullScreenActive == false){requestFullScreen()}
            else if(fullScreenActive == true){requestCloseFullScreen()}
          }
          else if(event.shiftKey == true && event.code == "IntlBackslash")
          {
            videoPlayerEvents("previous")
          }
          else if(event.code == "IntlBackslash")
          {
            videoPlayerEvents("next")
          }
          else if(event.code == "ArrowDown")
          {
            volumeDown()
          }
          else if(event.code == "ArrowUp")
          {
            volumeUp()
          }
          else if(event.code == "KeyR")
          {
            showStartComponent()
          }
          // else if(event.code === "KeyP")
          // {
          //   if(videoPlaying == false){videoPlayerEvents("play")}
          //   else if(videoPlaying == true){videoPlayerEvents("pause")}
          // }
          // else if(event.code === "KeyS")
          // {
          //   videoPlayerEvents("sync")
          // }
          // else if(event.code === "KeyL")
          // {
          //   videoPlayerEvents("load")
          // }
          // else if(event.code == "ArrowRight")
          // {
          //   videoPlayerEvents("forward5", playingVideosLastWholeSecond + 5)
          // }
          // else if(event.code == "ArrowLeft")
          // {
          //   videoPlayerEvents("back5", playingVideosLastWholeSecond - 5)
          // }
          // else if(event.code == "KeyJ")
          // {
          //   videoPlayerEvents("jump")
          // }
        }

    }
    function disableKeybinds()
    {
      console.log("disableKeybinds")
      // keybindsEventListener.removeEventListener()
      window.removeEventListener('keyup', enableKeybinds)
    }

    function initializeNewCustomRoomVideo()
    {
      videoPlayerEvents('load')
      setTimeout(() => {window.addEventListener('keyup', enableKeybinds)}, initializeNewCustomRoomVideoEnableKeybindsTime)
      
    }

    function volumeUp()
    {
      if(playingVideoVolume != 100)
      {
        console.log("volume up")
        let newVolume = null
        newVolume = parseInt(playingVideoVolume) + 10
        videoPlayerEvents("volume", newVolume)
      }
    }

    function volumeDown()
    {
      if(playingVideoVolume != 0)
      {
        console.log("volume down")
        let newVolume = null
        newVolume = parseInt(playingVideoVolume) - 10
        videoPlayerEvents("volume", newVolume)
      }
    }
    
    function closeModal()
    {
      let d = document.getElementById("modal")
      d.style.display = "none"
    }

    //socket stream
    socket.on('chat message', function(msg) {
        //debugging
        // console.log(msg)

        //variables
        let item = document.createElement('li');
        let time = currentTimeStamp()
        let msgs = document.getElementById("messages").childElementCount

        //set message background color
        if(msgs % 2 == 0)
        {
          item.style.padding = "10px"
          item.style.backgroundColor = "white"
          item.style.overflowWrap = "break-word"
        }
        else
        {
          item.style.padding = "10px"
          item.style.backgroundColor = "#efefef"
          item.style.overflowWrap = "break-word"
        }

        //set anon name if no custom username
        if(msg.userName == "anon")
        {
            msg.userName = "anon" + msg.userId.substring(0, 4).toUpperCase()
        }

        item.textContent = time + " " + msg.userName + ": " + msg.content;
        messages.appendChild(item);
        // console.log(chat)
        // console.log(chat.scrollHeight)
        chat.scrollTo(0, chat.scrollHeight);
    });

    socket.on('info', function(allRooms, allClients, all_namespaces, clientInfo, videosCurrentlyPlaying, defaultPlaylistsFromServer) {
        //debugging
        // console.log(socket)
        // console.log(allClients)
        // console.log(all_namespaces)
        // console.log("socket id: " + socket.id)
        // console.log("your id: " + socket.id)
        // console.log("socket nsp: " + socket.nsp)
        // console.log("allRooms")
        // console.log(allRooms)
        // console.log("videosCurrentlyPlaying")
        // console.log(videosCurrentlyPlaying)
        // console.log("clientInfo")
        // console.log(clientInfo)
        // console.log("allClients")
        // console.log(allClients)

        // if(inputCurrentRoom.innerText == "temp")
        // {
        //   return
        // }
        
        //set default playlists
        defaultPlaylists = JSON.parse(defaultPlaylistsFromServer)

        //set yourSocketId
        yourSocketId = socket.id

        let addUsernameCurrentUsername = document.getElementById("addUsernameCurrentUsername")
        if(yourUsername != null)
        {
          addUsernameCurrentUsername.innerText = "current username: " + yourUsername
        }
        else if(yourUsername == null)
         {
           addUsernameCurrentUsername.innerText = "current username: " + yourSocketId.substr(0, 4)
         }
        
        //add functions
        // buttonAddUserTest.onclick = function(){addUser(socket.id)}

        //vuex
        store.dispatch('actionSetAllRooms', allRooms)

        //clear lists
        let allRoomsList = document.getElementById("allRoomsList")
        let info = document.getElementById("info")
        let usersList = document.getElementById("usersList")
        let allUsersTitle = document.getElementById("allUsersTitle")

        if(allRoomsList != null){allRoomsList.innerHTML = ""}
        if(info != null){info.innerHTML = ""}
        if(usersList != null){usersList.innerHTML = ""}
        if(allUsersTitle != null){allUsersTitle.innerText = "All Users " + "(" + clientInfo.length + ")"}
        
        // clientsList.innerHTML = ""
        // namespacesList.innerHTML = ""
        // yourRoomsList.innerHTML = ""
        
        // mobileMenuAllRooms.innerHTML = ""

        //set titles
        // allClientsTitle.innerText = "All Clients " + "(" + clientInfo.length + ")"
        
        if(allRoomsList != null && info != null && usersList != null && allUsersTitle != null)
        {
          //sort client info
          for(let c in clientInfo)
          {
              let clientId = clientInfo[c].id
              let clientNamespace = clientInfo[c].namespace
              let clientRoom = clientInfo[c].room
              let clientName = clientInfo[c].name
              let button = document.createElement('button')
              let br = document.createElement('br')
              
              // button.className = "buttonClient"
              // button.innerText = clientNamespace + " - " + clientId + " - " + clientRoom + " - " + clientName
              // clientsList.append(button)
              // clientsList.append(br)
              
              if(socket.id == clientId)
              {
                  if(clientName == "")
                  {
                      info.append("your name: " + "anon" + clientId.substring(0, 4).toUpperCase())
                  }
                  else if(clientName != "")
                  {
                      info.append("your name: " + clientName)
                  }
                  info.append(br)
              }
          }

        //sort user info
        for(let c in clientInfo)
        {
            let clientId = clientInfo[c].id
            let clientNamespace = clientInfo[c].namespace
            let clientRoom = clientInfo[c].room
            let clientName = clientInfo[c].name            
            // let button = document.createElement('button')
            let button = document.createElement('text')
            let br = document.createElement('br')
            
            button.className = "buttonUser"

            if(clientName == "")
            {
                button.innerText = "anon" + clientId.substring(0, 4).toUpperCase()
            }
            else if(clientName != "")
            {
                button.innerText = clientName
            }
            usersList.append(button)
            usersList.append(br)
        }

        //sort namespaces
        // for(n in all_namespaces)
        // {
        //     let name = all_namespaces[n].namespace
        //     let button = document.createElement('button')
        //     let br = document.createElement('br')

        //     button.className = "buttonNamespace"
        //     button.innerText = name
        //     namespacesList.append(button)
        //     namespacesList.append(br)
        // }

        //display chat or not
        for(let n in clientInfo)
        {
            let name = clientInfo[n].id
            let room = clientInfo[n].room
            
            if(name == socket.id)
            {
                inputCurrentRoom.innerText = room
                mobileInputCurrentRoom.innerText = room
                currentRoom = inputCurrentRoom.innerText
                
                if(currentRoom == "")
                {
                    chat.style.display = "none"
                    chatBox.style.display = "none"
                    inputCurrentRoom.innerText = "no room selected"
                    mobileInputCurrentRoom.innerText = "no room selected"
                    currentRoom = inputCurrentRoom.innerText
                }
                else if(currentRoom != "")
                {
                    chat.style.display = "block"
                    chatBox.style.display = "block"
                    currentRoom = inputCurrentRoom.innerText
                }

                console.log("currentRoom: " + currentRoom)

                // for(r in rooms)
                // {
                //     var button = document.createElement('button')
                //     var br = document.createElement('br')
                //     button.innerText = rooms[r]
                //     yourRoomsList.append(button)
                //     yourRoomsList.append(br)
                // }
            }

        }

        //sort default rooms
        // let defaultRooms = ['general', 'gaming', 'food']
        for(let c = 0; c < 3; c++)
        {
            let div = document.createElement('div')
            let divStart = document.createElement('div')
            let button0 = document.createElement('text')
            let button1 = document.createElement('text')
            let button2 = document.createElement('button')
            let divMobile = document.createElement('div')
            let buttonMobile0 = document.createElement('text')
            let buttonMobile1 = document.createElement('text')
            let buttonMobile2 = document.createElement('button')
            // let br = document.createElement('br')
            let count = "0"
            
            // console.log(roomName)
            // console.log(roomClients)

            button2.style.border = "0px solid black"
            buttonMobile2.style.border = "0px solid black"

            for(let r in allRooms)
            {
                if(allRooms[r].room == defaultRooms[c])
                {
                    // console.log(allRooms[r].room)
                    count = allRooms[r].clients.length.toString()
                }
            }

            // button0.innerText = " (" + count + ") "
            // button1.innerText =  " " + defaultRooms[c] + " "
            // button1.className = "room"
            // button2.className = "buttonJoin"
            // button2.innerText = "join"
            // button2.style.backgroundColor = "lightgreen"
            // button2.onclick = function(){joinRoom(defaultRooms[c])}
            if(defaultRooms[c] == inputCurrentRoom.innerText)
            {
                //desktop menu
                // button0.innerText = " - (" + count + ") "
                // button1.innerText =  " - " + defaultRooms[c] + " "
                // button1.className = "room"
                // button1.onclick = function(){leaveRoom(defaultRooms[c])}
                button2.className = "buttonLeave"
                button2.innerText = "leave" + " - (" + count + ") " +  " - " + defaultRooms[c] + " " 
                button2.style.backgroundColor = "red"
                div.id = "room-menu-" + defaultRooms[c]
                div.style.backgroundColor = "red"
                div.style.minWidth = "200px"
                div.style.display = "inline-block"
                div.style.padding = "14.5px"
                div.style.textAlign = "center"
                div.onclick = function(){leaveRoom(defaultRooms[c])}
                
                //mobile menu
                // buttonMobile0.innerText = " - (" + count + ") "
                // buttonMobile1.innerText =  " - " + defaultRooms[c] + " "
                // buttonMobile1.className = "room"
                // buttonMobile1.onclick = function(){leaveRoom(defaultRooms[c])}
                buttonMobile2.className = "buttonLeave"
                buttonMobile2.innerText = "leave" + " - " + defaultRooms[c] + " - " + "(" + count + ") "
                buttonMobile2.style.backgroundColor = "red"
                divMobile.id = "room-menu-mobile-" + defaultRooms[c]
                divMobile.style.backgroundColor = "red"
                div.style.minWidth = "200px"
                div.style.display = "inline-block"
                div.style.padding = "14.5px"
                div.style.textAlign = "center"
                divMobile.onclick = function(){leaveRoom(defaultRooms[c])}
            }
            else if(defaultRooms[c] != inputCurrentRoom.innerText)
            {
                //desktop menu
                // button0.innerText = " - (" + count + ") "
                // button1.innerText =  " - " + defaultRooms[c] + " "
                // button1.className = "room"
                // button1.onclick = function(){joinRoom(defaultRooms[c])}
                button2.className = "buttonJoin"
                button2.innerText = "join" + " - (" + count + ") " + " - " + defaultRooms[c] + " "
                button2.style.backgroundColor = "lightgreen"
                div.id = "room-menu-" + defaultRooms[c]
                div.style.backgroundColor = "lightgreen"
                div.style.minWidth = "200px"
                div.style.display = "inline-block"
                div.style.padding = "14.5px"
                div.style.textAlign = "center"
                // div.onclick = function(){joinRoom(defaultRooms[c])}
                div.onclick = function(){pushUrl(defaultRooms[c])}

                //mobile menu
                // buttonMobile0.innerText = " - (" + count + ") "
                // buttonMobile1.innerText =  " - " + defaultRooms[c] + " "
                // buttonMobile1.className = "room"
                // buttonMobile1.onclick = function(){joinRoom(defaultRooms[c])}
                buttonMobile2.className = "buttonLeave"
                buttonMobile2.innerText = "join" + " - " + defaultRooms[c] + " - " + "(" + count + ")"
                buttonMobile2.style.backgroundColor = "lightgreen"
                divMobile.id = "room-menu-mobile-" + defaultRooms[c]
                divMobile.style.backgroundColor = "lightgreen"
                div.style.minWidth = "200px"
                div.style.display = "inline-block"
                div.style.padding = "14.5px"
                div.style.textAlign = "center"
                // divMobile.onclick = function(){joinRoom(defaultRooms[c])}
            }

            
            //desktop menu
            div.style.border = "1px solid black"
            div.append(button2)
            // div.append(button0)
            // div.append(button1)
            allRoomsList.append(div)
            
            //mobile menu
            // divMobile.style.border = "1px solid black"
            divMobile.append(buttonMobile2)
            // divMobile.append(buttonMobile0)
            // divMobile.append(buttonMobile1)
            mobileMenuAllRooms.append(divMobile)


        }        
        // console.log("allRooms")
        // console.log(allRooms)
        
        //sort user rooms
        for(let r in allRooms)
        {
          let roomIsDefault = false
          let roomName = allRooms[r].room
          let roomClients = allRooms[r].clients

          let div = document.createElement('div')
          let button0 = document.createElement('text')
          let button1 = document.createElement('text')
          let button2 = document.createElement('button')

          let divMobile = document.createElement('div')
          let buttonMobile0 = document.createElement('text')
          let buttonMobile1 = document.createElement('text')
          let buttonMobile2 = document.createElement('button')

          // let br = document.createElement('br')
          let count = roomClients.length

          button2.style.border = "0px solid black"
          buttonMobile2.style.border = "0px solid black"

          //check if room is default room
          for(let dr in defaultRooms)
          {
              // console.log(defaultRooms[dr])
              if(allRooms[r].room == defaultRooms[dr])
              {
                  roomIsDefault = true
              }
          }

          if(roomIsDefault == false)
          {
              // console.log(roomName)
              // console.log(roomClients)
              
              //desktop menu
              // button0.innerText = " - (" + count + ") "
              // button1.innerText = " - " + roomName + " "
              // button1.className = "room"

              //mobile menu
              // buttonMobile0.innerText = " - (" + count + ") "
              // buttonMobile1.innerText = " - " + roomName + " "
              // buttonMobile1.className = "room"

              if(roomName == inputCurrentRoom.innerText)
              {
                  //desktop menu
                  // button0.innerText = " - (" + count + ") "
                  // button1.innerText = " - " + roomName + " "
                  // button1.className = "room"
                  button2.className = "buttonLeave"
                  button2.innerText = "leave" + " - (" + count + ") " + " - " + roomName + " "
                  button2.style.backgroundColor = "red"
                  // button2.onclick = function(){leaveRoom(roomName)}
                  div.id = "room-menu-" + roomName
                  div.style.backgroundColor = "red"
                  div.style.minWidth = "200px"
                  div.style.display = "inline-block"
                  div.style.padding = "14.5px"
                  div.style.textAlign = "center"
                  div.onclick = function(){leaveRoom(roomName)}

                  //mobile menu
                  // buttonMobile0.innerText = " - (" + count + ") "
                  // buttonMobile1.innerText = " - " + roomName + " "
                  // buttonMobile1.className = "room"
                  buttonMobile2.className = "buttonLeave"
                  buttonMobile2.innerText = "leave" + " - " + roomName + " - " + "(" + count + ")"
                  buttonMobile2.style.backgroundColor = "red"
                  // buttonMobile2.onclick = function(){leaveRoom(roomName)}
                  divMobile.id = "room-menu-mobile-" + roomName
                  divMobile.style.backgroundColor = "red"
                  div.style.minWidth = "200px"
                  div.style.display = "inline-block"
                  div.style.padding = "14.5px"
                  div.style.textAlign = "center"
                  divMobile.onclick = function(){leaveRoom(roomName)}
              }
              else if(roomName != inputCurrentRoom.innerText)
              {
                  //desktop menu
                  // button0.innerText = " - (" + count + ") "
                  // button1.innerText = " - " + roomName + " "
                  // button1.className = "room"
                  button2.className = "buttonJoin"
                  button2.innerText = "join" + " - (" + count + ") " + " - " + roomName + " "
                  button2.style.backgroundColor = "lightgreen"
                  // button2.onclick = function(){joinRoom(roomName)}
                  div.id = "room-menu-" + roomName
                  div.style.backgroundColor = "lightgreen"
                  div.style.minWidth = "200px"
                  div.style.display = "inline-block"
                  div.style.padding = "14.5px"
                  div.style.textAlign = "center"
                  // div.onclick = function(){joinRoom(roomName)}
                  div.onclick = function(){pushUrl(defaultRooms[c])}
                  
                  //mobile menu
                  // buttonMobile0.innerText = " - (" + count + ") "
                  // buttonMobile1.innerText = " - " + roomName + " "
                  // buttonMobile1.className = "room"
                  buttonMobile2.className = "buttonJoin"
                  buttonMobile2.innerText = "join" + " - " + roomName + " - " + "(" + count + ")"
                  buttonMobile2.style.backgroundColor = "lightgreen"
                  // buttonMobile2.onclick = function(){joinRoom(roomName)}
                  divMobile.id = "room-menu-mobile-" + roomName
                  divMobile.style.backgroundColor = "lightgreen"
                  div.style.minWidth = "200px"
                  div.style.display = "inline-block"
                  div.style.padding = "14.5px"
                  div.style.textAlign = "center"
                  // divMobile.onclick = function(){joinRoom(roomName)}
              }
              
              //desktop menu
              div.style.border = "1px solid black"
              div.append(button2)
              // div.append(button0)
              // div.append(button1)
              allRoomsList.append(div)
              
              //mobileMenu
              // divMobile.style.border = "0px solid black"
              divMobile.append(buttonMobile2)
              // divMobile.append(buttonMobile0)
              // divMobile.append(buttonMobile1)
              mobileMenuAllRooms.append(divMobile)
          }

        }

        // info.append("total clients: ")
        // var br = document.createElement('br')
        // info.append(br)
        // info.append("your socket namespace: " + socket.nsp)
        // var br = document.createElement('br')
        // info.append(br)
        // info.append("your socket id: " + socket.id)

        //scroll current mobile room button into view
        if(inputCurrentRoom.innerText != "")
        {
            try {
                let roomButton = document.getElementById("room-menu-mobile-" + inputCurrentRoom.innerText)
                let roomButtonPos = roomButton.getBoundingClientRect()
                roomButtonPos.x -= 310
                mobileMenuAllRooms.scrollTo(roomButtonPos)
                
            } catch (error) {
                // console.log(error)
            }
        }

          //set video/playlist variables
          if(videosCurrentlyPlaying.length != 0 && currentRoom != "temp") //active room exist
          {
            console.log("active room exist")
            
            //debugging
            // console.log("videosCurrentlyPlaying")
            // console.log(videosCurrentlyPlaying)
            // console.log("allRooms")
            // console.log(allRooms)
            
            //find current room
            for(let x in videosCurrentlyPlaying)
            {
              if(inputCurrentRoom.innerText == videosCurrentlyPlaying[x].room)
              {
                console.log("current room is: " + inputCurrentRoom.innerText)

                //set video variables
                playingVideosLastWholeSecond = videosCurrentlyPlaying[x].lastWholeSecond
                playingVideoId = videosCurrentlyPlaying[x].videoId
                playingVideoRoom = videosCurrentlyPlaying[x].room
                playingVideoStatus = videosCurrentlyPlaying[x].videoPlaying
      
                //set playlist variables
                videoPlaylistId = videosCurrentlyPlaying[x].videoPlaylistId
                videoPlaylist = videosCurrentlyPlaying[x].videoPlaylist
                playlistCurrentVideoIndex = videosCurrentlyPlaying[x].playlistCurrentVideoIndex

                //set default playlist
                if(videoPlaylistId == "undefined" || videoPlaylistId == null)
                { 
                  let randomNumber = Math.floor(Math.random() * 3);
                  
                  for(let pl in defaultPlaylists)
                  {
                    if(defaultPlaylists[pl].category == inputCurrentRoom.innerText)
                    {
                      console.log("set default playlist")

                      videoPlaylistId = defaultPlaylists[pl].urls[randomNumber]

                      break
                    }
                  }
                }

                break
      
                //debugging
                // console.log("videoPlaying: " + videoPlaying)
                // console.log("videoPlaylistId: " + videoPlaylistId)
                // console.log("videoPlaylist: " + videoPlaylist)
                // console.log("playingVideosLastWholeSecond: " + playingVideosLastWholeSecond)
                // console.log("playingVideoId: " + playingVideoId)
                // console.log("playingVideoRoom: " + playingVideoRoom)
                // console.log("playingVideoStatus: " + playingVideoStatus)
                // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
              }
              else if(inputCurrentRoom.innerText != videosCurrentlyPlaying[x].room)
              {
                // console.log("current room is not: " + videosCurrentlyPlaying[x].room)
                
                //set video variables
                playingVideosLastWholeSecond = 0
                playingVideoId = null
                playingVideoRoom = inputCurrentRoom.innerText
                playingVideoStatus = "true"
                    
                //set playlist variables
                videoPlaylist = "true"
                playlistCurrentVideoIndex = 0

                //set default playlist
                let randomNumber = Math.floor(Math.random() * 3);
                for(let pl in defaultPlaylists)
                {
                  if(defaultPlaylists[pl].category == inputCurrentRoom.innerText)
                  {
                    console.log("set default playlist")

                    videoPlaylistId = defaultPlaylists[pl].urls[randomNumber]

                    break
                  }
                }    
                
                //debugging
                // console.log("videoPlaying: " + videoPlaying)
                // console.log("videoPlaylistId: " + videoPlaylistId)
                // console.log("videoPlaylist: " + videoPlaylist)
                // console.log("playingVideosLastWholeSecond: " + playingVideosLastWholeSecond)
                // console.log("playingVideoId: " + playingVideoId)
                // console.log("playingVideoRoom: " + playingVideoRoom)
                // console.log("playingVideoStatus: " + playingVideoStatus)
                // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
              }
            }
          }
          else if(videosCurrentlyPlaying.length == 0  && currentRoom != "temp")  //no active room exist
          {
            console.log("no active room exist")
            
            //set video variables
            playingVideosLastWholeSecond = 0
            playingVideoId = null
            playingVideoRoom = inputCurrentRoom.innerText
            playingVideoStatus = "true"
                
            //set playlist variables
            videoPlaylist = "true"
            playlistCurrentVideoIndex = 0

            //set default playlist
            let randomNumber = Math.floor(Math.random() * 3);
            for(let pl in defaultPlaylists)
            {
              if(defaultPlaylists[pl].category == inputCurrentRoom.innerText)
              {
                console.log("set default playlist")

                videoPlaylistId = defaultPlaylists[pl].urls[randomNumber]

                break
              }
            }          
            
            //debugging
            console.log("playingVideosLastWholeSecond: " + playingVideosLastWholeSecond)
            // console.log("playingVideoId: " + playingVideoId)
            // console.log("playingVideoRoom: " + playingVideoRoom)
            // console.log("playingVideoStatus: " + playingVideoStatus)
            // console.log("videoPlaylistId: " + videoPlaylistId)
          }

          //set sync master
          for(let r in allRooms)
          {
            if(allRooms[r].room == "temp"){}
            else if(allRooms[r].room == inputCurrentRoom.innerText)
            {
              // console.log("syncMaster for room " + videosCurrentlyPlaying[x].room + " is " + allRooms[r].clients[0])
              // console.log("yourSocketId: " + socket.id)
                syncMaster = allRooms[r].clients[0]
                let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "set sync master" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "," + "\"syncMaster\"" + ":" + "\"" + syncMaster + "\"" + "}")
                socket.emit('video command', msgObjVideoCommand);
                break
            }
          }
        }
        
        //set total rooms count
        let temp = JSON.stringify(vuexAllRooms.value)
        temp = JSON.parse(temp)
        if(temp.length > 0) { totalRoomsCount = temp.length }
        // console.log("total rooms: " + totalRoomsCount)

        //set total users all rooms count
        if(allClients.length > 0) { totalUsersCount = allClients.length }
        // console.log("total users all rooms: " + totalUsersCount)

        //set total users current room count
        for(let r in allRooms)
        {
          let count = allRooms[r].clients.length

          if(inputCurrentRoom.innerText == allRooms[r].room)
          {
            totalUsersCurrentRoomCount = count
            // console.log("total users current room: " + totalUsersCurrentRoomCount)
          }
        }

        // console.log(inputCurrentRoom)
    });

    socket.on('leave room', function(msg) {
        //debugging
        // console.log("msg")
        
        //variables
        let item = document.createElement('li');
        let time = currentTimeStamp()
        let msgs = document.getElementById("messages").childElementCount

        //set message background color
        if(msgs % 2 == 0)
        {
          item.style.padding = "10px"
          item.style.backgroundColor = "white"
        }
        else
        {
          item.style.padding = "10px"
          item.style.backgroundColor = "#efefef"
        }

        //set anon name if no custom username
        if(msg.userName == "anon")
        {
            msg.userName = "anon" + msg.userId.substring(0, 4).toUpperCase()
        }
        
        item.textContent = time + " " + msg;
        messages.appendChild(item);

        // console.log(chat)
        // console.log(chat.scrollHeight)

        chat.scrollTo(0, chat.scrollHeight);
    });

    socket.on('join room', function(msg) {
        //debugging
        // console.log(msg)

        //variables
        let item = document.createElement('li');
        let time = currentTimeStamp()
        let msgs = document.getElementById("messages").childElementCount

        //set message background color
        if(msgs % 2 == 0)
        {
          item.style.padding = "10px"
          item.style.backgroundColor = "white"
        }
        else
        {
          item.style.padding = "10px"
          item.style.backgroundColor = "#efefef"
        }

        //set anon name if no custom username
        if(msg.userName == "anon")
        {
            msg.userName = "anon" + msg.userId.substring(0, 4).toUpperCase()
        }

        item.textContent = time  + " " + msg;
        messages.appendChild(item);

        // console.log(chat)
        // console.log(chat.scrollHeight)

        chat.scrollTo(0, chat.scrollHeight);
    });

    socket.on('create room', function(msg) {
        //debugging
        // console.log(msg)

        //variables
        let item = document.createElement('li');
        let time = currentTimeStamp()
        let msgs = document.getElementById("messages").childElementCount

        //set message background color
        if(msgs % 2 == 0)
        {
          item.style.padding = "10px"
          item.style.backgroundColor = "white"
        }
        else
        {
          item.style.padding = "10px"
          item.style.backgroundColor = "#efefef"
        }

        //set anon name if no custom username
        if(msg.userName == "anon")
        {
            msg.userName = "anon" + msg.userId.substring(0, 4).toUpperCase()
        }

        item.textContent = time + " " + msg;
        messages.appendChild(item);

        // console.log(chat)
        // console.log(chat.scrollHeight)

        chat.scrollTo(0, chat.scrollHeight);
    });

    socket.on('video command', function(msg) {
        //debugging
        // console.log(msg)

        if(msg.content == "play video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*'); //add event listener for getCurrentTime
          displayPauseButton()
        }
        else if(msg.content == "pause video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
          displayPlayButton()
        }
        else if(msg.content == "sync video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.syncTime + ', true]}', '*');
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*') //add event listener for getCurrentTime
          displayPauseButton()
        }
        else if(msg.content == "load video")
        {
          console.log("load video")
          // console.log(msg)

          loadVideoCustom(msg)

          //reset play button
          displayPlayButton()

          //mute video
          // let btnMute = document.getElementById("mute-video")
          // let btnUnmute = document.getElementById("unmute-video")
          // btnMute.style.display = "none"
          // btnUnmute.style.display = "block"

          //reset current time
          let currentTimeDisplay = document.getElementById("current-time-video")
          currentTimeDisplay.innerText = ""
          
          //set local variable
          videoPlaying = false
          // videoMuted = true
        }
        // else if(msg.content == "forward5")
        // {
        //   document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        //   document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.syncTime + ', true]}', '*');
        //   playingVideosLastWholeSecond + 5
        // }
        // else if(msg.content == "back5")
        // {
        //   document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        //   // document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.syncTime + ', true]}', '*');
        //   // playingVideosLastWholeSecond - 5
        // }
        else if(msg.content == "next video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'nextVideo' + '","args":""}', '*');
          // displayPauseButton()
          resetCurrentTimeVideo()
          // undisplayPauseOverlay()

          //set local variable
          videoPlaying = true
        }
        else if(msg.content == "previous video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'previousVideo' + '","args":""}', '*');
          // displayPauseButton()
          resetCurrentTimeVideo()
          // undisplayPauseOverlay()

          //set local variable
          videoPlaying = true
        }
        else if(msg.content == "jump video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideoAt' + '","args":[' + msg.jumpIndex + ']}', '*');
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
          displayPlayButton()
          resetCurrentTimeVideo()
          
          //set local variable
          videoPlaying = false
          playingVideosLastWholeSecond = 0
        }
        else if(msg.content == "restart video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[0, true]}', '*');
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');

          //set local variable
          videoPlaying = true
          playingVideosLastWholeSecond = 0
        }
        else if(msg.content == "random playlist")
        {
          loadVideoCustom(msg)

          if(yourSocketId == syncMaster)
          {
            setTimeout(() => {videoPlayerEvents("play")}, 3000)
          }
        }
        else if(msg.content == "resync2 video")
        {
          // console.log("resync2")
          // console.log(msg)
          msg.playingVideosLastWholeSecond = parseInt(msg.playingVideosLastWholeSecond)

          if(msg.userId == yourSocketId && playingVideosLastWholeSecond != msg.playingVideosLastWholeSecond)
          {
            if(msg.videoPlaying == "true")
            {
              console.log("resync2 to: " + msg.playingVideosLastWholeSecond)
              msg.playingVideosLastWholeSecond++
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.playingVideosLastWholeSecond + ', true]}', '*');
              // document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            }
            else if(msg.videoPlaying == "false")
            {

              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.playingVideosLastWholeSecond + ', true]}', '*');
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            }
          }
          else if(msg.userId == yourSocketId && playingVideosLastWholeSecond == msg.playingVideosLastWholeSecond)
          {
            console.log("resync2 not needed")
          }
        }
    });

    return {
      //functions
      joinRoom,
      addUser,
      leaveRoom,
      forbiddenCharacterCheck,
      currentTimeStamp,
      toggleMenu,
      toggleMobileMenu,
      toggleMenuInfo,
      toggleMenuUsers,
      toggleMenuRooms,
      toggleMenuCreateRoom,
      toggleMenuAddUsername,
      formOnSubmit,
      createRoom,
      videoPlayerEvents,
      loadVideoStart,
      loadVideoCustom,
      videoPlayButtonOverlay,
      requestFullScreen,
      currentRoute,
      displayVideoInfoAndControls,
      undisplayVideoInfoAndControls,
      showStartComponent,
      toggleVideoInfoAndControls,
      showModalCategory,
      displayInitializeNewCustomRoom,
      initializeNewCustomRoomVideo,
      volumeUp,
      volumeDown,
      closeModal,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* elements */
  /* body { margin: 0; padding-bottom: 0; overflow: hidden; font-family: Arial, Helvetica, sans-serif; background-color: black; } */
  button { border-radius: 0%; outline: none; color: black; }
  input[type="number"], input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: textfield; -moz-appearance: textfield; appearance: textfield; }

  /* ids */
  #componentHome { display: block; font-family: Arial, Helvetica, sans-serif; overflow: hidden; background-color: black; }
  #chat { height: calc(87% - 16px); width: 100%; right: 0; overflow-y: scroll; position: absolute; bottom: calc(100px - 6px); border-left: 1px solid black; }
  /* #form { height: 6%; border: 1px solid black; background: lightgray; margin-right: 1px; padding: 10px; padding-bottom: 10px; position: fixed; bottom: 0; right: 0; display: flex; box-sizing: border-box; backdrop-filter: blur(10px); } */
  #inputChatMessage { display: inline-block; width: calc(100% - 20px); margin: 0px; margin-top: 8px; padding: 10px; font-size: 14px; border: 0px; }
  /* #inputChatMessage:focus { outline: none; } */
  /* #form > button { background: #333; border: 1px solid #333; outline: none; color: #fff; } */
  #menu { height: 94%; width: auto;  margin: 0px; border-right: 1px solid black; }
  #menu::-webkit-scrollbar { width: 0px; }
  /* #menu::-webkit-scrollbar-track { background: #f1f1f1; } */
  /* #menu::-webkit-scrollbar-thumb { background: #888; } */
  /* #menu::-webkit-scrollbar-thumb:hover { background: #555 } */
  /* #menu { scrollbar-width: thin; scrollbar-color: black white; } */
  #chat { scrollbar-width: thin; scrollbar-color: gray lightgray; }
  #chatBox { width: 100%; margin: 0px; padding: 0px; bottom: 0px; position: absolute; text-align: center; background-color: #1c1b1b; }
  #currentRoomInfo, #mobileCurrentRoomInfo { display: block; width: 100%; padding: 1.4vh; text-align: center; user-select: none; z-index: 1; color: white; background-color: #1c1b1b; }
  #mobileCurrentRoomInfo { display: none; }
  #messages { list-style-type: none; margin: 0; padding: 0; font-size: 14px; }
  /* #messages > li { padding: 20px; } */
  /* #messagesEven { background: white; }
  #messagesOdd { background: #efefef; } */
  #buttonLeaveRoomTest { margin-left: -4px; }
  /* #inputCreateRoom { width: 100% } */
  #toggleMenu { margin: 0px; padding: 16px; padding-left: 20px; padding-right: 20px; user-select: none; text-align: left; width: 100%; color: white; background-color: red; }
  /* #flex { display: inline-flex; position: absolute; height: 94vh; width: 30vw; flex-wrap: wrap; align-content: flex-start; top: 0; right: 0; background-color: white; } */
  #flex { display: inline-flex; position: absolute; height: 100vh; width: calc(19vw - 1px); flex-wrap: wrap; align-content: flex-start; bottom: 0; right: 0; z-index: 2; overflow-y: hidden; filter: brightness(0.98); border-left: 1px solid black; background-color: white; }
  /* #flex > div { display: block; width: 100%; border: 1px solid black } */
  #buttonSend { display: inline-block; margin: 0px; margin-bottom: 10px; padding: 10px; width: 100%; border: 0px; color: #1c1b1b; font-weight: bold; font-family: Arial; font-size: 14px; border-top: 1px solid #1c1b1b; background-color: rgb(239, 239, 239); }
  #info, #usersList, #createRoom, #addUsername, #allRoomsList { display: block; }
  #allRoomsList { display: inline-flex; width: 70vw; overflow-x: scroll; scrollbar-width: thin; scrollbar-color: gray white; color: white }

  #infoTitle, #allUsersTitle, #allRoomsTitle, #createRoomTitle, #addUsernameTitle { display: none; margin: 0px; padding: 7px; font-weight: bold; user-select: none; border: 1px solid black; background-color: white; }
  #allRoomsTitle { display: none; }

  #mobileMenuCurrentRoom, #mobileMenuAllRooms { display: none; }
  #mobileMenuHide, #mobileMenuShow { display: none; }
  #allUsersTitle { display: none; }
  /* #inputCreateRoom, #inputAddUser, #buttonCreateRoomTest { width: calc(100% - 8px); font-weight: normal; } */
  #createRoom, #addUsername, #allRoomsList, #info { padding: 0px; background-color: transparent; }

  #pause-video, #unmute-video { display: none; }
  #iframeContainer { width: 100%; height: 100%; }
  #sync-video-input, #load-video-input, #jump-video-input { width: 100px; padding: 10px; height: 17px; color: white; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: #1c1b1b; }
  #sync-video, #load-video, #jump-video { display: inline-block; padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1); }
  #player { display: block; position: absolute; height: calc(100vh + 60px); width: 81vw; margin: auto; margin: 0px; margin-top: -61px; margin-left: 0px; padding: 0px; overflow: none; background-color: black; border: 0px solid white; }
  #videoPlayButtonOverlay { display: block; position: absolute; left: 0px; top: 0px; height: calc(100vh + 100px); width: 84vw; border: 0; background-color: transparent; } /* #ff000030 */
  #videoPlayerControlButtons { display: none; position: absolute; width: auto; margin: 0; padding: 0px; bottom: 12vh; left: 41.5%; z-index: 3; opacity: 70%; transform: translate(-50%); -ms-transform: translate(-50%); flex-direction: column; color: white; border: 1px solid rgba(255, 255, 255, 0.7); background-color: transparent; }
  /* #current-time-video { margin: 0px; padding: 0px; font-weight: bold; margin-top: 10px; margin-bottom: 10px; color: white; border: 0px; background-color: transparent; } */
  #playlistControls { display: none; }
  #restart-video { display: block; }
  #videoPlayButtonSvg { position: absolute; margin-top: 0px; margin-left: 0px; top: 46%; left: 50%; height: 20vh; width: 40vh; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }
  /* #videoTitle { font-size: 14px; font-weight: bold; text-align: center; color: white; width: 90%; margin: auto; margin-top: 3vh; margin-bottom: 0px; } */
  #videoPlayPauseOverlay { display: none; height: 100%; width: 100%; background-color: transparent; }
  #videoLoadingOverlay { display: block; position: fixed; height: 100vh; width: 100vw; left: 0px; top: 0px; z-index: 4; background-color: black; }
  #loadingScreenGif { display: block;  top: 49%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); color: white; position: absolute; width: auto; text-align: center; background-color: transparent; }
  
  #form { width: 94%; margin: auto; margin-top: 2px; }
  /* #sync-video-input { width: 99px; } */
  #jump-video-input { height: 17px; }
  #videoInfo { display: none; position: absolute; top: 4vh; right: 0; width: auto; margin-right: 22vw; z-index: 2; opacity: 90%; text-align: left; font-size: 14px; font-weight: normal; text-shadow: black 1px 1px; color: white; background-color: transparent; }
  #videoChannel, #videoTitle, #videoQuality, #videoCurrentPlaylistIndex, #current-time-video, #videoCurrentRoom, #videoVolume, #videoCurrentRoomTotalUsers { margin: 6px; text-align: right; }
  #videoArea { display: block; }
  #loadingScreenText { color: white; animation-name: fadeLoadingScreenText; animation-duration: 1.8s; animation-iteration-count: infinite; }
  #loadingScreenImage { display: none; position: absolute; height: 40vh; width: 40vh; top: 0px; left: 0px; margin-top: calc(-16vh + 1px); margin-left: 140px; transform: rotate(-45deg) translate(-50%, -50%); z-index: -1; background-size: cover; border-radius: 7%; border: 3px solid white; background-color: black; }
  #currentRouteBar { display: none; color: white; background-color: red; position: absolute; bottom: 0px; width: 73vw; padding: 10px; z-index: 1 }
  #videoCurrentRoom { display: none; }

  #modal { position: absolute; display: block; height: 70vh; width: 60vw; margin: 0; margin-left: -8vw; padding: 0px; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 4; opacity: 90%; background-color: white; }
  #modalSidebar { display: inline-block; height: 100%; width: 30%; vertical-align: top; font-weight: bold; text-align: left; user-select: none; color: #1c1b1b; }
  #modalSidebar > div { padding: 10px; border-bottom: 3px solid #1c1b1b; }
  /* #modalSidebar > div:hover { color: white; background-color: black; } */
  #modalContent { display: inline-block; height: 100%; width: 70%; overflow: auto; text-align: center; color: white; background-color: #1c1b1b; }
  #modalContent > div { height: auto; width: calc(100% - 2px); margin: auto; padding: 0px; padding-top: 10px; padding-bottom: 10px; }
  #modalContentKeybindsTable { display: block; width: max-content; margin: auto; margin-top: 10px; padding: 20px; padding-top: 0px; padding-bottom: 0px; border-spacing: 10px 17px; user-select: none; }
  #modalContentSettings, #modalContentVideoQuality, #modalContentAddUsername, #modalContentCreateRoom { display: none; }
  #changeVideoQuality { user-select: none; height: 100%; width: 100%; }
  #changeVideoQualitySteps { display: none; text-align: left; margin-bottom: 30px; margin-left: 34%; }
  #modalSidebarKeybinds { color: white; background-color: #1c1b1b; }
  #modalSidebarSettings, #modalSidebarVideoQuality, #modalSidebarAddUsername, #modalSidebarCreateRoom { background-color: white; }

  #initializeNewCustomRoom { display: none; position: absolute; color: white; border: 1px solid white; z-index: 1; padding: 20px; transform: translate(-50%, -50%); left: 41.5%; top: 46% }
  #initializeNewCustomRoom-load-video-elems { height: auto; width: 100%; background-color: black; }
  #initializeNewCustomRoom-load-video-input { height: auto; width: calc(90% - 4px); margin-top: 10px; padding: 10px; color: black; background-color: white; }
  #initializeNewCustomRoom-load-video { height: auto; width: 90%; padding: 10px; text-align: center; color: black; background-color: lightgray; }
  #initializeNewCustomRoomSteps { margin: 0px; margin-bottom: 10px; }
  #initializeNewCustomRoomTitle { margin: 0px; margin-bottom: 10px; text-align: center; }
  #addUsername, #createRoom { width: 70%; margin: auto; }
  #addUsernameCurrentUsername { margin: 20px; }
  #buttonAddUserTest, #inputAddUser, #buttonCreateRoomTest, #inputCreateRoom { height: 40px; font-size: 16px; }
  #inputCreateRoom, #inputAddUser { width: calc(100% - 24px); padding-left: 10px; padding-right: 10px; }

  #modalCloseBar { display: block; padding: 4px; text-align: left; background-color: red; }
  #videoPlayPauseOverlayText 
  { position: absolute;
    width: 40vw;
    top: 43%;
    padding: 23px;
    padding-left: 20vw;
    padding-right: 20vw;
    font-weight: bold;
    font-size: 19px;
    text-align: center;
    opacity: 100%;
    color: white;
    background-color: black;
    text-shadow: 2px 1px black;
    font-style: oblique;
  }
  #videoPlayPauseOverlayMobile { display: none; opacity: 0%; }
  
  /* classes */
  .buttonJoin, .buttonLeave { padding: 3px; overflow-wrap: break-word; font-weight: normal; font-size: 17px; }
  .buttonClient, .buttonUser, .buttonNamespace { width: 100%; }
  .buttonCreate, #buttonCreateRoomTest { width: calc(100%); border-color: lightgray; }
  .buttonUser {}
  .buttonNamespace {}
  .errorMessage { display: block; margin: 20px; width: auto; background-color: transparent; }
  .videoPlayerControlButton { display: block; max-height: 17px; min-width: 100px; padding: 10px; user-select: none; text-align: center; font-size: 14px; background-color: #1c1b1b; border: 1px solid rgba(255, 255, 255, 0.1); }
  .videoPlayerControlRow { display: inline-flex; margin: auto; }  
  /* .modalContentKeybindsTableRow { margin: 0px; margin-left: 10px; margin-right: 10px; padding: 10px; text-align: center; border: 1px solid black; background-color: red; } */
  .modalContentKeybindsDescription { width: auto; padding-left: 10px; padding-right: 10px; background-color: red; color: black; }
  .modalContentKeybindsEqual { width: 13%; background-color: #1c1b1b }
  .modalContentKeybindsCharacter { width: auto; padding: 10px; border: 1px solid white; background-color: #1c1b1b; }
  .modalContentKeybindsTableRow { border: 1px solid red; }
  .changeVideoQualityStepsText { margin: 0px; padding: 0px; }
  .initializeNewCustomRoomText { margin: 0px; padding: 0px; }

  /* animations */
  @keyframes fadeLoadingScreenText { from {opacity: 100%; } to {opacity: 0%; } }  

  /*** mobile ***/
  /* @media screen and (min-device-width : 176px) and  (max-device-width : 360px) {
    body {background: green; } 
  } */

  @media screen and (max-width: 1300px) and (orientation: portrait) {
    #videoArea, #flex { display: none; }
  }

  @media screen and (max-width: 1300px) and (orientation: landscape) 
  {
    /* ids */
    #player { height: 90vh; width: 100vw; margin: 0px; margin-top: 0px; padding: 0px; padding-bottom: 10vh; }
    #videoPlayPauseOverlay, #videoPlayButtonOverlay { height: 100vh; width: 100vw; }
    #flex, #videoPlayerControlButtons { z-index: -1; }
    #videoPlayerControlButtonsMobile { position: absolute; display: block; left: 0px; width: 100vw; bottom: -3px; overflow-x: scroll; overflow-y: hidden; scrollbar-width: thin; scrollbar-color: gray lightgray; opacity: 70%; z-index: 3; color: white; border: 0px solid black; }
    #loadingScreenImage { display: none; }
    #videoInfo { top: 1vh; right: 1vw; margin: 0px; z-index: 1; }
    #sync-video-input-mobile, #jump-video-input-mobile, #load-video-input-mobile { padding: 10px; max-height: 14px; max-width: 100px; border: 3px solid transparent; color: white; background-color: #1c1b1b; }
    #unmute-video-mobile, #pause-video-mobile { display: none; }
    #modal { display: block; top: 0px; left: 0px; margin: 0px; padding: 0px; height: 100vh; width: 100vw; transform: translate(0%, 0%); }
    #changeVideoQualitySteps { width: 40%;  margin: auto; padding-bottom: 7vh; }
    #modalSidebarKeybinds { display: none; }
    #loadingScreenText { margin-right: 0px; }
    #initializeNewCustomRoom { top: 50%; left: 50%; }
    #videoPlayPauseOverlayMobile { display: block; position: absolute; left: 0px; top: 0px; height: 100vh; width: 100vw; z-index: 2; opacity: 100%; border: 0; background-color: black; }
    #videoPlayPauseOverlayText { width: calc(60vw - 12px); top: 36vh; z-index: 3; background-color: transparent; padding-left: 20vw; padding-right: 20vw; font-size: 14px; }
    
    /* classes */
    .videoPlayerControlButton { min-width: 110px; border: 0px; border-right: 2px solid rgba(255, 255, 255, 0.1); }
    .videoPlayerControlButton:active { color: black; background-color: white; }

} 
</style>
