<template>
  <div id="componentHome">
    <!-- settings modal -->
    <div id="modal" style="display: none;">
      <div id="modalSidebar">
        <div id="modalCloseBar" v-on:click="closeModal()">Close</div>
        <div id="modalSidebarKeybinds" v-on:click="showModalCategory('Keybinds')">Keybinds</div>
        <div id="modalSidebarSettings" v-on:click="showModalCategory('Settings')">Settings</div>
        <div id="modalSidebarCreateRoom" v-on:click="showModalCategory('Create Room')">Create Room</div>
        <div id="modalSidebarAddUsername" v-on:click="showModalCategory('Add Username')">Change Username</div>
        <div id="modalSidebarVideoQuality" v-on:click="showModalCategory('Video Quality')">Change Video Quality</div>
      </div>


      <!-- video controls modal-->
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


        <!-- empty modal -->
        <div id="modalContentSettings"></div>


        <!-- add username modal -->
        <div id="modalContentAddUsername">
          <div id="addUsername">
              <div id="errorMessageAddUsername" class="errorMessage"></div>
              <input id="inputAddUser" maxlength="10"/>
              <button id="buttonAddUser" class="buttonCreate" v-on:click="addUser()">Confirm</button>
              <div id="addUsernameCurrentUsername"></div>
          </div>
        </div>


        <!-- create room modal -->
        <div id="modalContentCreateRoom">
          <div id="createRoom">
              <div id="errorMessageCreateRoom" class="errorMessage"></div>
              <input id="inputCreateRoom" maxlength="20" />
              <button id="buttonCreateRoom" class="buttonCreate" v-on:click="createRoom()">Confirm</button>
          </div>
        </div>


        <!-- change video quality modal -->
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
    </div>

    
    <!-- current url path -->
    <div id="currentRouteBar">{{currentRoute}}</div>
    

    <!-- initialize custom room -->
    <div id="videoArea">
      <div id="initializeNewCustomRoom">
        <div id="initializeNewCustomRoomSteps">
          <p class="initializeNewCustomRoomText" id="initializeNewCustomRoomTitle">waiting for room to be initialized...</p>
          <p class="initializeNewCustomRoomText">Step 1: paste video or playlist id of choice</p>
          <p class="initializeNewCustomRoomText">Step 2: press on load button</p>
          <p class="initializeNewCustomRoomText">Example playlist url: PLy1UbTtb_A9L4gkexK3sHwYo3pfVAOSQI</p>
          <p class="initializeNewCustomRoomText">Example video url: KW1LHK4dVfM</p>
        </div>


        <!-- initialize room url input -->
        <div id="initializeNewCustomRoom-load-video-elems">
            <input id="initializeNewCustomRoom-load-video-input" placeholder="video or playlist id" maxlength="100" />
            <div id="initializeNewCustomRoom-load-video" v-on:click="initializeNewCustomRoomVideo()">Load</div>
        </div>
      </div>


      <!-- loading overlay -->
      <div id="videoLoadingOverlay">
        <div id="loadingScreenGif">
          <div id="loadingScreenImage"></div>
          <h1 id="loadingScreenText">Loading...</h1>
        </div>
      </div>
      

      <!-- player -->
      <div id="player">
        <!-- player overlays -->
        <div id="videoPlayButtonOverlay" @contextmenu.prevent @mousedown.right="toggleVideoInfoAndControls()" v-on:click="videoPlayButtonOverlay()">
          <div id="videoPlayPauseOverlay">
            <p id="videoPlayPauseOverlayText"></p>
          </div>
          <div id="videoPlayPauseOverlayMobile"></div>
        </div>
        <div id="videoPlayInitialStartOverlayMobile" v-on:click="initialStartMobile()">
          <div id="videoPlayInitialStartOverlayMobileLoadingScreenGif"><h1 id="videoPlayInitialStartOverlayMobileLoadingScreenText">Press to Play</h1></div>
        </div>

        <!-- iframe -->
        <div id="iframeContainer"></div> 
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
                  

      <!-- video player controls -->
      <div id="videoPlayerControlButtons">


        <!-- video player controls row 1-->
        <div class="videoPlayerControlRow">
          <div id="play-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('play')">Play</div>
          <div id="pause-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('pause')">Pause</div>
          <div id="restart-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('restart')">Restart</div>
          <div id="jump-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('jump')">Jump</div>
          <div><input id="jump-video-input" type="number" placeholder="Jump Nr" max="1000"/></div>
        </div>


        <!-- video player controls row 2 -->
        <div id="playlistControls" class="videoPlayerControlRow"><!-- playlist controls -->
          <div id="fullscreen-video" class="videoPlayerControlButton" v-on:click="requestFullScreen()">Fullscreen</div>
          <div id="mute-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('mute')">Mute</div>
          <div id="unmute-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('unMute')">Unmute</div>
          <div id="sync-video-elems">
            <div id="sync-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('sync')">Sync</div>
            <input id="sync-video-input" type="number" placeholder="Sync Secs" max="1000000"/>
          </div>
        </div>


        <!-- video player controls row 3 -->
        <div class="videoPlayerControlRow">
          <div id="previous-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('previous')">Previous</div>
          <div id="next-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('next')">Next</div>
          <div id="load-video-elems">
            <div id="load-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('load')">Load</div>
            <input id="load-video-input" placeholder="Load Id" maxlength="100" />
          </div>
        </div>


        <!-- video player controls row 4 -->
        <div class="videoPlayerControlRow">
          <div id="" class="videoPlayerControlButton" v-on:click="showModalCategory('Settings')">Settings</div>
          <div id="" class="videoPlayerControlButton" v-on:click="showModalCategory('Keybinds')">Keybinds</div>
          <!-- <div id="" class="videoPlayerControlButton" v-on:click="showModalCategory('Video Quality')">Video Quality</div> -->
          <!-- <div id="" class="videoPlayerControlButton" v-on:click="showModalCategory('Add Username')">Username</div> -->
          <div id="random-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('jump', 'random')">Random</div>
          <div id="resync2-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('resync2')">Resync</div>
        </div>
      </div>


      <!-- mobile player controls -->
      <div id="videoPlayerControlButtonsMobile">
        <div class="videoPlayerControlRow">
            <!-- fullscreen-->
            <div id="fullscreen-video" class="videoPlayerControlButton" v-on:click="requestFullScreen()">Fullscreen</div>
            
            <!-- settings -->
            <!-- <div id="settings-video-mobile" class="videoPlayerControlButton" v-on:click="showModalCategory('Settings')">Settings</div> -->
            
            <!-- video info -->
            <div id="" class="videoPlayerControlButton playlistButton" v-on:click="toggleVideoInfoAndControls()">Video Info</div>
            
            <!-- play/pause/restart -->
            <div id="play-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('play')">Play</div>
            <div id="pause-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('pause')">Pause</div>
            <div id="restart-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('restart')">Restart</div>

            <!-- mute/unmute -->
            <div id="mute-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('mute')">Mute</div>
            <div id="unmute-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('unMute')">Unmute</div>

            <!-- volume up/down -->
            <!-- <div id="volume-up-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="volumeUp()">Volume +</div> -->
            <!-- <div id="volume-down-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="volumeDown()">Volume -</div> -->

            <!-- previous/next -->
            <div id="previous-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('previous')">Previous</div>
            <div id="next-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('next')">Next</div>
          
            <!-- random -->
            <div id="random-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('jump', 'random')">Random</div>

            <!-- resync -->
            <div id="resync2-video" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('resync2')">Resync</div>

            <!-- jump-->
            <div id="jump-video-mobile" class="videoPlayerControlButton playlistButton" v-on:click="videoPlayerEvents('jump')">Jump</div>
            <div><input id="jump-video-input-mobile" type="number" placeholder="Jump Nr" max="1000"/></div>

            <!-- sync -->
            <div id="sync-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('sync')">Sync</div>
            <div><input id="sync-video-input-mobile" type="number" placeholder="Sync Secs" max="1000000"/></div>

            <!-- load-->
            <div id="load-video-mobile" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('load')">Load</div>
            <div><input id="load-video-input-mobile" placeholder="Load Id" maxlength="100" /></div>
        </div>
      </div>
    </div>
    

    <!-- chat -->
    <div id="flex">
        <!-- chat room title -->
        <div id="currentRoomInfo"><b id="inputCurrentRoom"></b></div>

        <!-- chat messages -->
        <div id="chat" style="border: 0;">
            <!-- <b>Current Room</b> -->
            <ul id="messages">
            </ul>
        </div>

        <!-- chat textbox -->
        <div id="chatBox">
            <form id="form" action="" @submit.prevent="sendChatMessage()">
              <input id="inputChatMessage" autocomplete="off" maxlength="1000" />
              <button id="buttonSend">Send</button>
            </form>
        </div>
    </div>


  </div>
</template>


<script>
//imports
import { io } from "socket.io-client"
import {onMounted, onUpdated, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router' //instead of this.$route


export default {
  setup() {
    //vue related
    const store = useStore()
    const router = useRouter()
    const vuexAllRooms = computed(function() { return store.getters['allRooms']})
    const currentRoute = computed(function() { return useRouter().currentRoute.value.fullPath})


    //lifecycle hooks
    onMounted(function() {
        //debugging
        // console.log("onMounted ComponentHome")
        // console.log("onMounted playingVideoId: " + playingVideoId)
        // console.log("onMounted videoPlaylistId: " + videoPlaylistId)
        // console.log(currentRoute)

        setTimeout(function() {
          //variables
          let roomExists = false
          let allActiveRooms = null
          let urlRoom = null
          let selectedRoomFromUrl = currentRoute._value
          // let selectedRoomFromUrl = null
          // selectedRoomFromUrl = currentRoute._value.substr(1)
          // console.log("selectedRoomFromUrl 1: " + selectedRoomFromUrl)

          //get room name from url
          urlRoom = selectedRoomFromUrl.split("/")[2]
          console.log("urlRoom: " + urlRoom)
          
          //get all active rooms
          allActiveRooms = JSON.stringify(vuexAllRooms.value)
          allActiveRooms = JSON.parse(allActiveRooms)

          //join room specified
          if(urlRoom != "" || urlRoom != null || urlRoom != "undefined")
          {
            //check active rooms
            if(roomExists == false) 
            {
              for(let r in allActiveRooms)
              {
                if(urlRoom == allActiveRooms[r].room) { roomExists = true }
              }
            }
            
            //check default rooms
            if(roomExists == false)
            {
              for(let r in defaultRooms)
              {
                if(urlRoom == defaultRooms[r]) { roomExists = true }
              }
            }

            //check room to join
            if(urlRoom == "temp" || urlRoom == "test" || urlRoom == "relax" || urlRoom == "undefined" || urlRoom == "null") //join default room
            {
              pushUrl("general")
            }

            else if(roomExists == true) //join specified room
            {
              joinRoom(urlRoom)
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

          //set components
          let componentStart = document.getElementById("componentStart")
          let componentAbout = document.getElementById("componentAbout")
          let componentCredits = document.getElementById("componentCredits")

          //undisplay components
          componentStart.style.display = "none"
          componentAbout.style.display = "none"
          componentCredits.style.display = "none"

        }, initializeVideoTime)
    })

    onUpdated(function() {
        //debugging
        // console.log("onUpdated ComponentHome")

        //variables
        let selectedRoomFromUrl = currentRoute._value
        let urlRoom = selectedRoomFromUrl.split("/")[2]
        // let selectedRoomFromUrl = currentRoute._value.substr(1)

        //join room from url
        joinRoom(urlRoom)
        // joinRoom(selectedRoomFromUrl)
    })


    //elements
    var form = document.getElementById('form')
    var input = document.getElementById('input')

    //variables
    var socket = io("http://localhost:3000")
    var syncMaster = null
    var yourSocketId = null
    var currentRoom = null
    var yourUsername = null
    var playingVideosLastWholeSecond = null
    var playingVideoTotalDuration = null
    var playingVideoId = null
    var playingVideoRoom = null
    var playingVideoStatus = null
    var playingVideoTitle = null
    var playingVideoVolume = null
    var videoPlaying = false
    var videoMuted = false
    var videoPlaylist = false
    var videoChannelValue = null
    var videoQualityValue = null
    var videoAvailableQualities = null
    var videoPlaylistId = null
    var fullScreenActive = false
    var playlistCurrentVideoIndex = 0
    var playlistArray = null
    var playlistLength = null
    var defaultPlaylists = null
    var totalLoadTime = initializeVideoTime + resync1Time + resyncMargin
    var loadingScreenTime = 7000
    var addToVideoOnJoinTime = 6
    var initializeVideoTime = 2000
    var loadCustomVideoLoadingScreenTime = 2000
    var initializeNewCustomRoomVideoEnableKeybindsTime = 4000
    var resync1Time = 3000
    var resync2Time = 6000
    var resyncMargin = 1000
    var readdEscapeKeybindTimer = 300
    var resetVideoPlayerScaleTimer = 300
    var appendVideoiframeTimer = 1000
    var randomPlaylistTimer = 4000
    var initialStartMobileTimer = 3000
    var youtubeEmbedVideoParameters = "?enablejsapi=1&autoplay=0&controls=1&modestbranding=1&rel=1&mute=1&amp;"
    var youtubeEmbedPlaylistParameters = "&enablejsapi=1&autoplay=0&controls=1&modestbranding=1&rel=1&mute=1&amp;"
    var defaultRooms = []
    var waitingForRoomToBeInitialized = null
    var totalRoomsCount = 0
    var totalUsersCount = 0
    var totalUsersCurrentRoomCount = 0
    var forbiddenCharactersString = "\nspace ! @ % < > | , . ; : [ ]"


    //video player event listener
    window.onmessage = function(e){
      //debugging
      // console.log(e.data)

      //check data type
      if(typeof e.data != "object")
      {
        //variables
        let data = JSON.parse(e.data)
        let info = data.info

        //check video volume
        if(e.data.toString().includes("volume"))
        {
          //set data
          // let data = JSON.parse(e.data)

          //set volume
          let volume = data.info.volume

          //set local variable
          playingVideoVolume = volume + "%"
          
          //set video info
          let videoVolume = document.getElementById("videoVolume")
          videoVolume.innerText = "volume: " + playingVideoVolume
        }

        //check video playback quality
        if(e.data.toString().includes("playbackQuality"))
        {
          //set data
          // let data = JSON.parse(e.data)

          //set video quality
          let oldVideoQuality = videoQualityValue
          let newVideoQuality = data.info.playbackQuality
          if(oldVideoQuality == "unknown")(oldVideoQuality = null)
          if(newVideoQuality == "unknown")(newVideoQuality = null)
          if(newVideoQuality == "tiny")(newVideoQuality = "144p")
          else if(newVideoQuality == "small")(newVideoQuality = "240p")
          else if(newVideoQuality == "medium")(newVideoQuality = "360p")
          else if(newVideoQuality == "large")(newVideoQuality = "480p")
          
          //check video quality
          if(oldVideoQuality != null && newVideoQuality != null && oldVideoQuality != newVideoQuality)
          {          
            //debugging
            // console.log("newVideoQuality: " + newVideoQuality)
            // console.log("oldVideoQuality: " + videoQualityValue)
            
            //remove element highlight
            let inputChatMessage = document.getElementById("inputChatMessage")
            inputChatMessage.focus()
            inputChatMessage.blur()

            //sync video
            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + parseInt(playingVideosLastWholeSecond + 1) + ', true]}', '*')
          }
        }

        //check video info
        if(e.data.toString().includes("playerState"))
        {
          //variables
          let currentState = data.info.playerState        
          // let playlistId = info.playlistId
          // let playlistIndex = info.playlistIndex
      
          //set local variables
          playingVideoId = info.videoData.video_id
          playingVideoTotalDuration = data.info.duration
          playingVideoTitle = data.info.videoData.title
          videoChannelValue = info.videoData.author
          videoQualityValue = info.videoData.video_quality
          videoAvailableQualities = info.availableQualityLevels
          // let videoPlaybackQuality = info.videoData.playbackQuality
          // let videoUrl = info.videoData.videoUrl
          // let videoPlaybackRate = info.videoData.playbackRate

          //debugging
          // console.log("playingVideoId: " + playingVideoId)
          // console.log("playingVideoTitle: " + playingVideoTitle)
          // console.log("videoChannel: " + videoChannelValue)
          // console.log("videoQuality: " + videoQualityValue)
          // console.log("videoPlaybackQuality: " + videoPlaybackQuality)
          // console.log("videoAvailableQualities: " + videoAvailableQualities)
          // console.log("videoUrl: " + videoUrl)
          // console.log("videoPlaybackRate: " + videoPlaybackRate)
          
          //elements
          let videoInfo = document.getElementById("videoInfo")
          let videoTitle = document.getElementById("videoTitle")
          let videoQuality = document.getElementById("videoQuality")
          let videoChannel = document.getElementById("videoChannel")
          let videoCurrentRoom = document.getElementById("videoCurrentRoom")
          let totalUsersCurrentRoomCount = document.getElementById("totalUsersCurrentRoomCount")
          let videoPlayPauseOverlayText = document.getElementById("videoPlayPauseOverlayText")

          //update video info elements
          videoTitle.innerText = "video: " + playingVideoTitle
          videoChannel.innerText = "channel: " + videoChannelValue
          videoCurrentRoom.innerText = "current room: " + currentRoom
          videoPlayPauseOverlayText.innerText = playingVideoTitle

          //check video quality
          if(videoQualityValue == "tiny")(videoQualityValue = "144p")
          else if(videoQualityValue == "small")(videoQualityValue = "240p")
          else if(videoQualityValue == "medium")(videoQualityValue = "360p")
          else if(videoQualityValue == "large")(videoQualityValue = "480p")
          if(videoQualityValue != null) { videoQuality.innerText = "quality: " + videoQualityValue }

          //check playlist info
          if(info.playlist != null)
          {
            //set local variables
            playlistArray = info.playlist
            playlistLength = info.playlist.length
            playlistCurrentVideoIndex = info.playlistIndex

            //update playlist info elements
            let videoCurrentPlaylistIndex = document.getElementById("videoCurrentPlaylistIndex")
            videoCurrentPlaylistIndex.innerText = "playlist video: " + (playlistCurrentVideoIndex + 1) + " of " + playlistLength
            
            //debugging
            // console.log("playlistInfo")
            // console.log("playlistArray: " + playlistArray)
            // console.log("playlistLength: " + playlistLength)
            // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
          }
          else if(info.playlist == null)
          {
            //update playlist info elements
            videoCurrentPlaylistIndex.innerText = ""
          }
          
          //check video state
          if(currentState == 1) { currentState = "video playing"; undisplayPauseOverlay() }
          else if(currentState == 2) { currentState = "video paused"; displayPauseOverlay() }
          else if(currentState == 3) { currentState = "video buffering" }
        }
        else if(e.data.toString().includes("currentTime"))
        {
          //variables
          let currentTime = parseInt(data.info.currentTime)
          let totalDuration = parseInt(playingVideoTotalDuration)
          let currentPercentage = (currentTime / totalDuration).toFixed(3)
          let currentPercentageText = currentPercentage.substring(2, 4) + "%"
      
          //update video current time
          if(currentTime != playingVideosLastWholeSecond)
          {
            //variables
            let currentTimeDisplay = document.getElementById("current-time-video")
            let currentTimeText = "duration: " + currentTime + "/" + totalDuration + "s"
            let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "video current time" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
            
            //update visuals
            currentTimeDisplay.innerText = currentTimeText

            //update globals
            playingVideosLastWholeSecond = currentTime
            
            //debugging
            // console.log("currentTime: " + currentTimeText)
            // console.log("playingVideosLastWholeSecond: " + playingVideosLastWholeSecond + "/" + totalDuration)
            // console.log("playingVideoId: " + playingVideoId)
            
            //check if sync master
            if(yourSocketId == syncMaster)
            {
              //log
              console.log("you are sync master")

              //send command to video player
              msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "video current time" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "," + "\"syncMaster\"" + ":" + "\"" + syncMaster + "\"" + "}")
              
              //send socket message
              socket.emit('video command', msgObjVideoCommand)

              //check if video reached end
              if(currentTime == (totalDuration - 3))
              {
                //log
                console.log("video reached end")

                //set room status
                let roomIsDefault = false
                
                //check if room is default
                for(let r in defaultRooms)
                {
                  if(defaultRooms[r] == currentRoom) { roomIsDefault = true }
                }

                //check if playlist reached end
                if(roomIsDefault == true && (playlistCurrentVideoIndex + 1) != playlistLength) //video reached end
                {
                  //log
                  console.log("video reached end")

                  //variables
                  let randomVideoNumber = generateRandomNumber(playlistLength)

                  //random next video jump number
                  if(randomVideoNumber == playlistCurrentVideoIndex || randomVideoNumber == playlistLength) 
                  { randomVideoNumber = generateRandomNumber(playlistLength) }
                  
                  //log
                  console.log("random new video from playlist: " + randomVideoNumber)
                  
                  //jump to new video
                  setTimeout(function() { videoPlayerEvents("jump", randomVideoNumber) }, 3000)
                }
                else if(roomIsDefault == true && (playlistCurrentVideoIndex + 1) == playlistLength) //playlist reached end
                {
                  //log
                  console.log("playlist reached end")
                  console.log("loading new playlist")
                  
                  //load new playlist
                  setTimeout(function() { videoPlayerEvents("random") }, 4000)
                }
              }
            }
          }
        }
      }
    }

    //keyboard event listener 
    window.addEventListener('keyup', enableKeybinds)
      
    //fullscreen event listener
    document.addEventListener('fullscreenchange', onExitFullScreen)
    document.addEventListener('webkitfullscreenchange', onExitFullScreen)
    document.addEventListener('mozfullscreenchange', onExitFullScreen)
    document.addEventListener('MSFullscreenChange', onExitFullScreen)
    

    //functions
    function sendChatMessage() 
    {
      //null check
      if(inputChatMessage.value) 
      {
          //create socket message
          let msgObj = JSON.parse("{" + "\"content\"" + ":" + "\"" + inputChatMessage.value + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          
          //send socket message
          socket.emit('chat message', msgObj)
          
          //reset textbox
          inputChatMessage.value = ''
      }
    }


    function createRoom() {
      //variables
      let createRoomInfo = []
      let newRoom = inputCreateRoom.value

      //debugging
      // console.log(newRoom)

      //push new room name and old room name to array
      createRoomInfo.push(inputCreateRoom.value)
      createRoomInfo.push(currentRoom)
      
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
      
      //set room link
      let roomLink = document.getElementsByClassName("roomLink")

      //check if room already exists
      if(newRoom == "temp" || newRoom == "test" || newRoom == "relax" || newRoom == "undefined" || newRoom == "null")
      {
        //set error message
        errorMessageCreateRoom.style.display = "block"
        errorMessageCreateRoom.innerText = "room " + "'" + newRoom + "'" + " already exists"
        
        //reset create room textbox
        inputCreateRoom.value = ""

        //return value
        return
      }

      //check if room already exists again
      for(let rm in roomLink)
      {
          let roomThatExists = roomLink[rm].innerText
          
          if(newRoom == roomThatExists)
          {
              //set error message
              errorMessageCreateRoom.style.display = "block"
              errorMessageCreateRoom.innerText = "room " + "'" + newRoom + "'" + " already exists"
              
              //reset create room textbox
              inputCreateRoom.value = ""

              //return value
              return
          }
      }

      //clear messages
      messages.innerHTML = ""

      //create room
      socket.emit('create room', createRoomInfo)
      
      //clear create room input box
      inputCreateRoom.value = ""

      //reset player to cancel current time sync
      let vp = document.getElementById("videoPlayer")
      if(vp != null) { vp.remove() }

      //set local variable
      playingVideoId = "null"
      videoPlaylistId = "newCustomRoom"

      //join room
      pushUrl(newRoom)
      
      //set elements
      let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")
      let modal = document.getElementById("modal")
      
      //undisplay elements
      videoPlayPauseOverlay.style.display = "none"
      modal.style.display = "none"
    }
    

    function joinRoom(roomName)
    {
      //debugging
      // console.log(roomName)
      // console.log(socket.id)

      //elements
      let componentStart = document.getElementById("componentStart")
      let videoArea = document.getElementById("videoArea")
      let flex = document.getElementById("flex")

      //update elements
      displayLoadingOverlay()
      undisplayVideoInfoAndControls()
      componentStart.style.display = "none"

      //variables
      let newRoom = roomName
      let oldRoom = currentRoom
      let createRoomInfo = []
    
      //push new and old room to array
      createRoomInfo.push(newRoom)
      createRoomInfo.push(oldRoom)
      
      //check if already in room
      if(newRoom == oldRoom)
      {
          //reload browser url
          window.location.reload()
          
          //return value
          return
      }

      //reset messages
      messages.innerHTML = ""
      
      //send socket message
      socket.emit('join room', createRoomInfo)

      //reset video player (reason: cancel current time sync)
      let vp = document.getElementById("videoPlayer")
      if(vp != null) { vp.remove() }

      //load video
      setTimeout(function() {initializeVideo()}, initializeVideoTime)

      //update elements
      videoArea.style.display = "block"
      flex.style.display = "inline-flex"
    }


    function addUser(socketId)
    {
      //set socket id
      socketId = yourSocketId

      //check forbidden chars
      let characterCheck = forbiddenCharacterCheck(inputAddUser.value)
      if(characterCheck == true) { return }

      //set username
      let username = inputAddUser.value

      //set user obj
      let user = JSON.parse("{" + "\"socketId\"" + ":" + "\"" + socketId + "\"" + "," + "\"username\"" + ":" + "\"" + username + "\"" + "}")

      //send socket message
      socket.emit('add user', user)
      
      //reset add username textbox
      inputAddUser.value = ""
      
      //set username
      yourUsername = user.username
    }


    // function leaveRoom(roomName)
    // {
    //     //clear messages
    //     messages.innerHTML = ""

    //     //send socket message
    //     socket.emit('leave room', roomName)
        
    //     //elements
    //     let videoArea = document.getElementById("videoArea")
    //     let iframeContainer = document.getElementById("iframeContainer")
    //     let flex = document.getElementById("flex")
        
    //     //update elements
    //     iframeContainer.innerHTML = ""
    //     videoArea.style.display = "none"
    //     flex.style.display = "none"
    // }


    function forbiddenCharacterCheck(string)
    {
        //check if string contains forbidden character
        if(string == "") { return true }
        else if(string.includes(" ")) { return true }
        else if(string.includes("!")) { return true }
        else if(string.includes("@")) { return true }
        else if(string.includes("<")) { return true }
        else if(string.includes(">")) { return true }
        else if(string.includes("|")) { return true }
        else if(string.includes(",")) { return true }
        else if(string.includes("%")) { return true }
        else if(string.includes(".")) { return true }
        else if(string.includes(";")) { return true }
        else if(string.includes(":")) { return true }
        else if(string.includes("[")) { return true }
        else if(string.includes("]")) { return true }
    }


    function currentTimeStamp()
    {
      //variables
      let currentDate = new Date()
      let currentHours = currentDate.getHours()
      let currentMinutes = currentDate.getMinutes()
      let currentSeconds = currentDate.getSeconds()

      //set correct time format
      if (currentHours < 10) { currentHours + "0" + currentHours.toString() }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes.toString() }
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds.toString() }
          
      //set time
      let time = + currentHours + ":" + currentMinutes + ":" + currentSeconds
      
      //return value
      return time
    }


    function loadVideoStart(videoId, playlistId)
    {
      //elements
      let iframeContainer = document.getElementById("iframeContainer")
      let iframeEle = document.createElement("iframe")

      //iframe variables
      iframeEle.id = "videoPlayer"
      iframeEle.height = "100%"
      iframeEle.width = "100%"
      iframeEle.title = "YouTube video player"
      iframeEle.allow = "autoplay; fullscreen"
      
      //load playlist
      if(videoPlaylist == "true") 
      {
        setTimeout(function() {undisplayLoadingOverlay()}, loadingScreenTime)
        loadPlaylist(playlistId)
      }

      //load video
      else if(videoPlaylist == "false") 
      {
        setTimeout(function() {undisplayLoadingOverlay()}, loadingScreenTime)
        
        //set local variable
        videoPlaylist = false
      
        //set iframe variables
        iframeEle.src = "https://www.youtube-nocookie.com/embed/" + videoId + youtubeEmbedVideoParameters
        iframeContainer.innerHTML = ""
        iframeContainer.append(iframeEle)
        
        //update elements
        let vp = document.getElementById("videoPlayer")
        vp.style.border = "0px"
      }
    }


    function loadVideoCustom(loadThisId)
    {
      //variables
      let container = document.getElementById("iframeContainer")
      let iframeEle = document.createElement("iframe")
      let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
      let videoPlayPauseOverlayText = document.getElementById("videoPlayPauseOverlayText")
      
      //set iframe variables
      iframeEle.id = "videoPlayer"
      iframeEle.height = "100%"
      iframeEle.width = "100%"
      iframeEle.title = "YouTube video player"
      iframeEle.allow = "autoplay; fullscreen"

      //update elements
      undisplayVideoInfoAndControls()
      resetVideoInfo()
      // displayLoadingOverlay()
      displayPauseOverlay()
      videoPlayButtonOverlay.style.display = "block" //display overlay
      videoPlayPauseOverlayText.innerText = "Press to Play"

      //load video    
      if(loadThisId.playingVideoId != "null")
      {
        //variables
        let videoId = loadThisId.playingVideoId

        //debugging
        // console.log("loadVideoCustom video: " + videoId)

        //set local variable
        videoPlaylistId = null
        playlistCurrentVideoIndex = 0
        videoPlaylist = false
        
        //set iframe src
        iframeEle.src = "https://www.youtube-nocookie.com/embed/" + videoId + youtubeEmbedVideoParameters
        
        //append iframe
        container.innerHTML = ""
        container.append(iframeEle)

        //set elements
        let vp = document.getElementById("videoPlayer")

        //update elements
        vp.style.border = "0px"
        setTimeout(function() {undisplayLoadingOverlay()}, loadCustomVideoLoadingScreenTime)
      }
      
      //load playlist
      else if(loadThisId.videoPlaylistId != "null")
      {
        //debugging
        // console.log("loadVideoCustom playlist: " + playlistId)

        //variables
        let playlistId = loadThisId.videoPlaylistId
        
        //update elements
        setTimeout(function() {undisplayLoadingOverlay()}, loadCustomVideoLoadingScreenTime)
        loadPlaylist(playlistId)
      }
    }


    function videoPlayerEvents(event, param1, param2, param3)
    {
      if(event == "play")
      {
        //set playing status
        videoPlaying = true

        //set socket messages
        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "played video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "play video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
        
        //send socket messages
        socket.emit('video command', msgObjVideoCommand)
        socket.emit('chat message', msgObjChat)
      }

      else if(event == "pause")
      {
        //set playing status
        videoPlaying = false

        //set socket messages
        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "paused video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "pause video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")

        //send socket messages
        socket.emit('video command', msgObjVideoCommand)
        socket.emit('chat message', msgObjChat)       
      }

      else if(event == "sync")
      {
        //elements
        let syncTime = document.getElementById("sync-video-input")

        //check sync time
        if(syncTime.value == "") 
        { 
          let syncTimeMobile = document.getElementById("sync-video-input-mobile")
          syncTime.value = syncTimeMobile.value
          syncTimeMobile.value = "" 
        }
        
        //set sync message
        let syncMessage = "synced video to " + syncTime.value + " secs"
        
        if(syncTime.value != "" && syncTime.value < parseInt(playingVideoTotalDuration) && syncTime.value > -1)
        {
          //set socket messages
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + syncMessage + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "sync video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "," + "\"syncTime\"" + ":" + "\"" + syncTime.value + "\"" + "}")

          //send socket messages
          socket.emit('chat message', msgObjChat)
          socket.emit('video command', msgObjVideoCommand)

          //set playing status
          videoPlaying = true

          //reset sync time
          syncTime.value = ""
        }
      }

      else if(event == "mute")
      {
        //elements
        let btnMute = document.getElementById("mute-video")
        let btnUnmute = document.getElementById("unmute-video")
        let btnMuteMobile = document.getElementById("mute-video-mobile")
        let btnUnmuteMobile = document.getElementById("unmute-video-mobile")

        //mute video player
        document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'mute' + '","args":""}', '*')
        
        //update elements
        btnMute.style.display = "none"
        btnUnmute.style.display = "block"
        btnMuteMobile.style.display = "none"
        btnUnmuteMobile.style.display = "block"

        //set muted status
        videoMuted = true
      }

      else if(event == "unMute")
      {
        //elements
        let btnMute = document.getElementById("mute-video")
        let btnUnmute = document.getElementById("unmute-video")
        let btnMuteMobile = document.getElementById("mute-video-mobile")
        let btnUnmuteMobile = document.getElementById("unmute-video-mobile")

        //unmute video player
        document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'unMute' + '","args":""}', '*')
        
        //update elements
        btnUnmute.style.display = "none"
        btnMute.style.display = "block"
        btnMuteMobile.style.display = "block"
        btnUnmuteMobile.style.display = "none"

        //set muted status
        videoMuted = false
      }

      else if(event == "restart")
      {
        //set playing status
        videoPlaying = true

        //create socket messages
        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "restarted video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "restart video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
        
        //send socket messages
        socket.emit('video command', msgObjVideoCommand)
        socket.emit('chat message', msgObjChat)
      }

      else if(event == "load")
      {
        //elements
        let loadVideoInput = document.getElementById("load-video-input")
        let loadVideoInputMobile = document.getElementById("load-video-input-mobile")
        let initializeNewCustomRoomVideoInput = document.getElementById("initializeNewCustomRoom-load-video-input")
        let initializeNewCustomRoom = document.getElementById("initializeNewCustomRoom")

        //variables
        let loadThisId = loadVideoInput.value
        let msgObjChat = ""
        let msgObjVideoCommand = ""
        
        //check if new custom room
        if(initializeNewCustomRoomVideoInput.value != "") 
        { loadThisId = initializeNewCustomRoomVideoInput.value; initializeNewCustomRoom.style.display = "none" }
        
        else if(loadVideoInputMobile.value != "") { loadThisId = loadVideoInputMobile.value }
        
        else if(loadThisId != "") { loadThisId = loadVideoInput.value }
        
        else { loadThisId = param1 }

        //reset variables
        initializeNewCustomRoomVideoInput.value = ""
        loadVideoInput.value = ""
        loadVideoInputMobile.value = ""

        //url is playlist
        if(loadThisId.substring(0, 2).toUpperCase() == "PL")
        {
          //set socket messages
          msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "loaded playlist " + loadThisId + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "load video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + null + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + 0 + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + true + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + loadThisId + "\"" + "}")
        }

        //url is video
        else if(loadThisId.substring(0, 2).toUpperCase() != "PL")
        {
          //set socket messages
          msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "loaded video " + loadThisId + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "load video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + loadThisId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + null + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + false + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + null + "\"" + "}")
        }

        //null check
        if(loadThisId != "")
        {
          //send socket messages
          socket.emit('chat message', msgObjChat)
          socket.emit('video command', msgObjVideoCommand)
        }
      }

      else if(event == "next")
      {
        //debugging
        // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
        // console.log("playlistLength: " + playlistLength)

        //check if next video exists
        if(playlistCurrentVideoIndex < (playlistLength - 1))
        {
          //increment playing video number
          playlistCurrentVideoIndex++

          //set socket messages
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "next video " + parseInt(playlistCurrentVideoIndex + 1) + "/" + playlistLength + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "next video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
          
          //send socket messages
          socket.emit('video command', msgObjVideoCommand)
          socket.emit('chat message', msgObjChat)
        }
      }

      else if(event == "previous")
      { 
          //debugging
          // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
          // console.log("playlistLength: " + playlistLength)

          //check if previous video exists
          if(playlistCurrentVideoIndex > 0)
          {
            //decrement playing video number
            playlistCurrentVideoIndex--

            //set socket messages
            let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "previous video " + parseInt(playlistCurrentVideoIndex + 1) + "/" + playlistLength + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
            let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "previous video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "}")
            
            //send socket messages
            socket.emit('video command', msgObjVideoCommand)
            socket.emit('chat message', msgObjChat)
          }
      }

      else if(event == "resync1")
      {
        //log
        console.log("resync1 to: " + playingVideosLastWholeSecond + "s")

        //debugging
        // console.log("videoPlaylist: " + videoPlaylist)
        // console.log("playingVideoStatus: " + playingVideoStatus)
        // console.log("playlistCurrentVideoIndex: " + playlistCurrentVideoIndex)
        // console.log("playingVideosLastWholeSecond: " + playingVideosLastWholeSecond)
        
        //elements
        let loadingScreenText = document.getElementById("loadingScreenText")

        //set video current seconds
        playingVideosLastWholeSecond = parseInt(playingVideosLastWholeSecond)

        //update elements
        loadingScreenText.innerText = "Syncing..."
        
        //video is paused
        if(playingVideosLastWholeSecond == 0 && playingVideoStatus == false)
        {
          displayPlayButton()
          displayPauseOverlay()
        }

        //video is part of playlist
        else if(videoPlaylist == true)
        {
          //video is paused
          if(playingVideoStatus == "false")
          {
            //set playing status
            videoPlaying = false

            //jump to correct video in playlist
            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideoAt' + '","args":[' + playlistCurrentVideoIndex + ']}', '*')
            
            //sync video to correct time
            setTimeout(function() {
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + playingVideosLastWholeSecond + ', true]}', '*') //sync to lastWholeSecond
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*') //pause video
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*')//add event listener for getCurrentTime
            }, resyncMargin)
                      
            //update elements
            displayPlayButton()
            displayPauseOverlay()
          }

          //video is playing
          else if(playingVideoStatus == "true")
          {
            //set playing status
            videoPlaying = true

            //set correct video time (reason: to account for load time)
            playingVideosLastWholeSecond = parseInt(playingVideosLastWholeSecond) + addToVideoOnJoinTime
                      
            //update elements
            displayPauseButton()

            //jump to correct video in playlist
            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideoAt' + '","args":[' + playlistCurrentVideoIndex + ']}', '*')
            
            //sync video to correct time
            setTimeout(function() {
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + playingVideosLastWholeSecond + ', true]}', '*') //sync to lastWholeSecond
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*')//add event listener for getCurrentTime
            }, resyncMargin)
          }
        }

        //video is standalone
        else if(videoPlaylist == false)
        {
          //video is paused
          if(playingVideoStatus == "false")
          {
            //set playing status
            videoPlaying = false
          
            //start video
            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*') //play video

            //sync video to correct time
            setTimeout(function() {
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + playingVideosLastWholeSecond + ', true]}', '*') //sync to lastWholeSecond
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*') //add event listener for getCurrentTime
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*') //pause video
            }, resyncMargin)
            
            //update elements
            displayPlayButton()
            displayPauseOverlay()
          }

          //video is playing
          else if(playingVideoStatus == "true")
          {
            //set playing status
            videoPlaying = true

            //set correct video time (reason: to account for load time)
            playingVideosLastWholeSecond = parseInt(playingVideosLastWholeSecond) + addToVideoOnJoinTime
            
            //start video
            document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*') //play video

            //sync video to correct time
            setTimeout(function() {
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + playingVideosLastWholeSecond + ', true]}', '*') //sync to lastWholeSecond
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*') //add event listener for getCurrentTime

              //update elements
              displayPauseButton()    

            }, resyncMargin)
          }
        }
      }

      else if(event == "jump")
      {
        //elements
        let jumpVideoInput = document.getElementById("jump-video-input")
        
        //null check
        if(jumpVideoInput.value == "")
        {
          let jumpVideoInputMobile = document.getElementById("jump-video-input-mobile")
          jumpVideoInput.value = jumpVideoInputMobile.value
          jumpVideoInputMobile.value = ""
        }

        //variables
        let randomNextVideoNr = param1
        let jumpIndex = jumpVideoInput.value - 1
        let videoNr = jumpIndex + 1
        let currentVideo = (playlistCurrentVideoIndex + 1)

        //random video number if needed
        if(randomNextVideoNr != null && randomNextVideoNr != "undefined")
        {
          //set jumpIndex
          jumpIndex = randomNextVideoNr
          
          //random button pressed
          if(randomNextVideoNr == "random") { jumpIndex = generateRandomNumber(playlistLength) }

          //double check random number is not current video number
          if(jumpIndex == currentVideo) { jumpIndex = generateRandomNumber(playlistLength) }

          //set videoNr
          videoNr = jumpIndex + 1
        }
        
        //check jump number is valid
        if(videoNr != currentVideo && videoNr >= 1 && videoNr <= playlistLength)
        {
          //set socket messages
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "jumped to video " + videoNr + "/" + playlistLength + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "jump video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + jumpIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + true + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "," + "\"jumpIndex\"" + ":" + "\"" + jumpIndex + "\"" + "}")

          //send socket messages
          socket.emit('chat message', msgObjChat)
          socket.emit('video command', msgObjVideoCommand)

          //reset jump number
          jumpVideoInput.value = ""
        }

      }

      else if(event == "volume")
      {
        //change video player volume
        document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'setVolume' + '","args":[' + param1 + ']}', '*')
      }

      else if(event == "random")
      {
          //set socket messages
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "random playlist " + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "random playlist" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + null + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + 0 + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + true + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + null + "\"" + "}")

          //send socket messages
          socket.emit('chat message', msgObjChat)
          socket.emit('video command', msgObjVideoCommand)
      }

      else if(event == "resync2")
      {
        //set socket message
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "resync2 video" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + 0 + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + null + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + false + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + 0 + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + true + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + null + "\"" + "}")
        
        //send socket message
        socket.emit('video command', msgObjVideoCommand)
      }
    }


    function videoPlayButtonOverlay()
    {
      //elements
      let modal = document.getElementById("modal")
      let componentAbout = document.getElementById("componentAbout")
      let componentCredits = document.getElementById("componentCredits")

      //update elements
      if(modal.style.display == "block" || componentAbout.style.display == "block" || componentCredits.style.display == "block") 
      { 
        modal.style.display = "none" 
        componentAbout.style.display = "none"  
        componentCredits.style.display = "none"   
      }

      //play video
      else if(videoPlaying == false) { videoPlayerEvents("play") }

      //pause video
      else if(videoPlaying == true){ videoPlayerEvents("pause") }
    }


    function requestFullScreen()
    { 
      //elements
      var element = document.getElementById("player")
      var videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
      
      //variables
      var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      
      //null check
      if(requestMethod) 
      { 
        //activate browser fullscreen mode
        requestMethod.call(element)

        //elements
        var videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")

        //update elements
        videoPlayPauseOverlay.style.backgroundColor = "black"
        videoPlayPauseOverlay.style.width = "100%"
        videoPlayButtonOverlay.style.height = "100vh"
        videoPlayButtonOverlay.style.width = "100vw"
        videoPlayButtonOverlay.style.left = "0"
        videoPlayButtonOverlay.style.top = "0"
  
        //set fullscreen status
        fullScreenActive = true
      } 
    }


    function requestCloseFullScreen()
    {      
      //deactivate browser fullscreen mode
      if(document.exitFullscreen) { document.exitFullscreen() } 
      else if(document.mozCancelFullScreen) { document.mozCancelFullScreen() } 
      else if(document.webkitExitFullscreen) { document.webkitExitFullscreen() }
    }


    function onExitFullScreen()
    {
      //null check
      if(!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) 
      {
        //elements        
        let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
        let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")
        let mediaQueryMobile = window.matchMedia( "(max-width: 1300px)" )
        
        //update elements if desktop
        if(!mediaQueryMobile.matches)
        {
          videoPlayButtonOverlay.style = "display: block; position: absolute; left: 0px; top: 0px; height: calc(100vh + 100px); width: 84vw; z-index: 1; border: 0; background-color: transparent;" /* background-color: #ff000030; */
          videoPlayPauseOverlay.style.backgroundColor = "transparent"
        }

        //update elements if mobile
        else if(mediaQueryMobile.matches) //mobile
        {
          videoPlayButtonOverlay.style = "display: block; position: absolute; left: 0px; top: 0px; height: calc(100vh + 100px); width: 100vw; z-index: 1; border: 0; background-color: transparent;" /* background-color: #ff000030; */
          videoPlayPauseOverlay.style.backgroundColor = "transparent"
        }
        
        //set fullscreen status
        fullScreenActive = false
        
        //readd escape keybind
        setTimeout(function() { window.addEventListener('keyup', (event) => {
            if(event.code === "Escape")
            {
              //elements
              let componentStart = document.getElementById("componentStart")
              let inputChatMessage = document.getElementById("inputChatMessage")
              let modal = document.getElementById("modal")
          
              //deselect input
              inputChatMessage.focus()
              inputChatMessage.blur()

              //update elements
              if(componentStart.style.display == "block") { componentStart.style.display = "none" }
              else if(modal.style.display == "none") { modal.style.display = "block" }
              else if(modal.style.display == "block") { modal.style.display = "none"}
            }
          })

        }, readdEscapeKeybindTimer)
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
        
        //set iframe variables
        iframeEle.id = "videoPlayer"
        iframeEle.height = "100%"
        iframeEle.width = "100%"
        iframeEle.title = "YouTube video player"
        iframeEle.src = "https://www.youtube-nocookie.com/embed/videoseries?list=" + playlistId + youtubeEmbedPlaylistParameters
        iframeEle.allow = "autoplay; fullscreen"

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

        //update elements
        let vp = document.getElementById("videoPlayer")
        vp.style.border = "0px"
    }


    function displayPlayButton()
    {
      //elements
      let btnPlay = document.getElementById("play-video")
      let btnPause = document.getElementById("pause-video")
      let btnPlayMobile = document.getElementById("play-video-mobile")
      let btnPauseMobile = document.getElementById("pause-video-mobile")
      
      //update elements
      btnPlay.style.display = "block"
      btnPause.style.display = "none"
      btnPlayMobile.style.display = "block"
      btnPauseMobile.style.display = "none"
    }


    function displayPauseButton()
    {
      //elements
      let btnPlay = document.getElementById("play-video")
      let btnPause = document.getElementById("pause-video")
      let btnPlayMobile = document.getElementById("play-video-mobile")
      let btnPauseMobile = document.getElementById("pause-video-mobile")
      
      //update elements
      btnPlay.style.display = "none"
      btnPause.style.display = "block"
      btnPlayMobile.style.display = "none"
      btnPauseMobile.style.display = "block"
    }


    function initializeVideo()
    {        
      //null check
      if(videoPlaylistId == "null" || videoPlaylistId == null)
      {
        //debugging
        console.log("initializeVideo video: " + playingVideoId)

        //load video
        loadVideoStart(playingVideoId, videoPlaylistId)

        //sync video
        setTimeout(function() {videoPlayerEvents("resync1")}, resync1Time)
        setTimeout(function() {videoPlayerEvents("resync2")}, resync2Time)

        //update elements
        let playlistControls = document.getElementById("playlistControls")
        playlistControls.style.display = "none"
      }

      else if(videoPlaylistId != "null" || videoPlaylistId != null)
      {
        //debugging
        console.log("initializeVideo playlist: " + videoPlaylistId)

        //load playlist
        loadVideoStart(playingVideoId, videoPlaylistId)

        //sync video
        setTimeout(function() {videoPlayerEvents("resync1")}, resync1Time)
        setTimeout(function() {videoPlayerEvents("resync2")}, resync2Time)
        
        //update elements
        let playlistControls = document.getElementById("playlistControls")
        playlistControls.style.display = "inline-flex"
      }
    }


    function displayPauseOverlay()
    {
      //elements
      let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")
      let videoPlayPauseOverlayMobile = document.getElementById("videoPlayPauseOverlayMobile")
      let player = document.getElementById("player")
      let mediaQueryMobile = window.matchMedia( "(max-width: 1300px)" )
      
      //update elements
      videoPlayPauseOverlayMobile.style.display = "block"
      videoPlayPauseOverlay.style.display = "block"
      if(!mediaQueryMobile.matches) { player.style.transform = "scale(1.6)" } //desktop
    }


    function undisplayPauseOverlay()
    {
      //elements
      let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")
      let videoPlayPauseOverlayMobile = document.getElementById("videoPlayPauseOverlayMobile")
      let player = document.getElementById("player")
      let mediaQueryMobile = window.matchMedia( "(max-width: 1300px)" )
      
      //update elements
      setTimeout(function() {
        if(!mediaQueryMobile.matches) 
        { player.style.transform = "scale(1)" } //desktop
        
        videoPlayPauseOverlay.style.display = "none"
        videoPlayPauseOverlayMobile.style.display = "none"

      }, resetVideoPlayerScaleTimer)
    }


    function displayLoadingOverlay()
    {   
      //elements
      let loadingScreenText = document.getElementById("loadingScreenText")
      let videoLoadingOverlay = document.getElementById("videoLoadingOverlay")
      let videoInfo = document.getElementById("videoInfo")
      let componentStart = document.getElementById("componentStart")
      let videoPlayPauseOverlayText = document.getElementById("videoPlayPauseOverlayText")
        
      //update elements
      loadingScreenText.innerText = "Loading..."
      videoLoadingOverlay.style.display = "block"
      videoInfo.style.display = "none"
      componentStart.scrollTop = 0
      videoPlayPauseOverlayText.innerText = "Press to Play"
    }


    function undisplayLoadingOverlay()
    {
      //elements
      let videoLoadingOverlay = document.getElementById("videoLoadingOverlay")
      let loadingScreenImage = document.getElementById("loadingScreenImage")
      let loadingScreenGif = document.getElementById("loadingScreenGif")
      let vp = document.getElementById("videoPlayer")
      let videoPlayPauseOverlayText = document.getElementById("videoPlayPauseOverlayText")
      let videoPlayPauseOverlay = document.getElementById("videoPlayPauseOverlay")

      //update elements
      videoLoadingOverlay.style.display = "none"
      loadingScreenImage.style.display = "none"
      loadingScreenGif.style.backgroundColor = "transparent"
      vp.style.border = "0px"
      videoPlayPauseOverlayText.style.display = "block"
      displayVideoInfoAndControls()

      //check if video player is muted
      if(videoMuted == false) { videoPlayerEvents("unMute") }
      else if(videoMuted == true) { videoPlayerEvents("mute") }

      //check if new custom room
      if(videoPlaylistId == "newCustomRoom")
      {
        videoPlayPauseOverlay.style.display = "none"
        resetVideoInfo()
        undisplayVideoInfoAndControls()
        displayInitializeNewCustomRoom()
      }
    }


    function pushUrl(room)
    {
      //debugging
      // console.log("pushUrl: " + room)
      
      //set room url path
      router.push({ path: '/relax/' + room} )
    }


    function resetCurrentTimeVideo()
    {
      //elements
      let currentTimeVideo = document.getElementById("current-time-video")
        
      //update elements
      currentTimeVideo.innerText = ""
    }


    function displayVideoInfoAndControls()
    {
      //elements
      let videoPlayerControlButtons = document.getElementById("videoPlayerControlButtons")
      let videoInfo = document.getElementById("videoInfo")
      let videoPlayerControlButtonsMobile = document.getElementById("videoPlayerControlButtonsMobile")
      
      //update elements
      videoPlayerControlButtons.style.display = "inline-flex"
      videoInfo.style.display = "block"
      videoPlayerControlButtonsMobile.style.display = "block"
    }


    function undisplayVideoInfoAndControls()
    {
      //elements
      let videoPlayerControlButtons = document.getElementById("videoPlayerControlButtons")
      let videoInfo = document.getElementById("videoInfo")
      let videoPlayerControlButtonsMobile = document.getElementById("videoPlayerControlButtonsMobile")
      
      //update elements
      videoPlayerControlButtons.style.display = "none"
      videoInfo.style.display = "none"
      videoPlayerControlButtonsMobile.style.display = "none"
    }


    function showStartComponent()
    {
      //elements
      let componentAbout = document.getElementById("componentAbout")
      let componentStart = document.getElementById("componentStart")
      let componentCredits = document.getElementById("componentCredits")

      //update elements
      componentAbout.style.display = "none"  
      componentCredits.style.display = "none"   
      if(componentStart.style.display == "block") { componentStart.style.display = "none" }
      else if(componentStart.style.display == "none") { componentStart.style.display = "block" }
    }


    function resetVideoInfo()
    {
      //elements
      let videoCurrentRoom = document.getElementById("videoCurrentRoom")
      let videoTitle = document.getElementById("videoTitle")
      let videoCurrentPlaylistIndex = document.getElementById("videoCurrentPlaylistIndex")
      let videoChannel = document.getElementById("videoChannel")
      let videoCurrentTime = document.getElementById("current-time-video")
      let videoVolume = document.getElementById("videoVolume")
      let videoQuality = document.getElementById("videoQuality")

      //update elements
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
      //elements
      let videoPlayerControlButtons = document.getElementById("videoPlayerControlButtons")
      let videoInfo = document.getElementById("videoInfo")
      let videoPlayerControlButtonsMobile = document.getElementById("videoPlayerControlButtonsMobile")

      //update elements
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
      //elements
      let modal = document.getElementById("modal")
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
      
      //update elements
      modal.style.display = "block" //display modal

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
        // modalSidebarSettings.style.backgroundColor = "#1c1b1b"
        // modalSidebarSettings.style.color = "white"
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
          //elements
          let iframe = document.createElement("iframe")
          let button = document.createElement("button")
          let videoPlayerChangeQuality = document.getElementById("videoPlayerChangeQuality")
          
          //set iframe variables
          iframe.id = "videoPlayerChangeQuality"
          iframe.height = "60%"
          iframe.width = "90%"
          iframe.title = "YouTube video player to change quality"
          iframe.src ="https://www.youtube-nocookie.com/embed/" + playingVideoId + youtubeEmbedVideoParameters
          iframe.style.display = "none"
          iframe.backgroundColor = "red"
  
          //set button variables
          button.onclick = function(){window.location.reload()}
          button.innerText = "Reload"
          button.style.height = "40px"
          button.style.width = "40%"
          button.style.marginTop = "30px"
          button.style.marginBottom = "30px"
          button.style.borderRadius = "0%"
        
          //null check
          if(videoPlayerChangeQuality != null)
          {
            console.log("videoPlayerChangeQuality: " + videoPlayerChangeQuality)
            console.log("videoPlayerChangeQuality src: " + videoPlayerChangeQuality.src + " / " + "playingVideoId: " + playingVideoId)
          }
  
          //null check
          if(videoPlayerChangeQuality == null)
          {
            //elements
            let changeVideoQuality = document.getElementById("changeVideoQuality")
            let changeVideoQualityLoadingText = document.getElementById("changeVideoQualityLoadingText")
            let changeVideoQualitySteps = document.getElementById("changeVideoQualitySteps")
            
            //append iframe
            changeVideoQuality.append(iframe)
  
            setTimeout(function() {
              let videoPlayerChangeQuality = document.getElementById("videoPlayerChangeQuality")
              
              //update elements
              videoPlayerChangeQuality.style.border = "0px"
              videoPlayerChangeQuality.style.display = ""
              
              //append button
              changeVideoQuality.append(button)
              
              //update elements
              changeVideoQualityLoadingText.innerText = ""
              changeVideoQualitySteps.style.display = "block"
            }, appendVideoiframeTimer)
          }
        }

        appendVideoiframe()
      }

      else if(category == "Add Username")
      {
        //elements
        let errorMessageAddUsername = document.getElementById("errorMessageAddUsername")
        
        //update elements
        modalSidebarAddUsername.style.backgroundColor = "#1c1b1b"
        modalSidebarAddUsername.style.color = "white"
        modalContentAddUsername.style.display = "block"
        errorMessageAddUsername.innerText = "username cannot be empty or contain " + forbiddenCharactersString
      }

      else if(category == "Create Room")
      {
        //elements
        let errorMessageCreateRoom = document.getElementById("errorMessageCreateRoom")
        
        //update elements
        modalSidebarCreateRoom.style.backgroundColor = "#1c1b1b"
        modalSidebarCreateRoom.style.color = "white"
        modalContentCreateRoom.style.display = "block"
        errorMessageCreateRoom.innerText = "room name cannot be empty or contain " + forbiddenCharactersString
      }
    }


    function displayInitializeNewCustomRoom()
    {
      //elements
      let initializeNewCustomRoom = document.getElementById("initializeNewCustomRoom")
      let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
      
      //update elements
      initializeNewCustomRoom.style.display = "block"
      videoPlayButtonOverlay.style.display = "none"
    }


    function enableKeybinds(event)
    {
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

      else if(document.activeElement.id != "inputChatMessage" && document.activeElement.id != "inputCreateRoom" && 
      document.activeElement.id != "inputAddUser" && document.activeElement.id != "initializeNewCustomRoom-load-video-input")
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
        { videoPlayerEvents("previous") }
        
        else if(event.code == "IntlBackslash") 
        { videoPlayerEvents("next") }
        
        else if(event.code == "ArrowDown") 
        { volumeDown() }
        
        else if(event.code == "ArrowUp") 
        { volumeUp() }
        
        else if(event.code == "KeyR") 
        { showStartComponent() }
      }
    }
    

    function disableKeybinds()
    {
      //debugging
      // console.log("disableKeybinds")
      
      //remove event listener
      window.removeEventListener('keyup', enableKeybinds)
    }


    function initializeNewCustomRoomVideo()
    {
      //load video
      videoPlayerEvents('load')

      //enable keybinds
      setTimeout(function() {window.addEventListener('keyup', enableKeybinds)}, initializeNewCustomRoomVideoEnableKeybindsTime)
    }


    function volumeUp()
    {
      //null check
      if(playingVideoVolume != 100)
      {
        //variables
        let newVolume = null

        //set new volume
        newVolume = parseInt(playingVideoVolume) + 10
        videoPlayerEvents("volume", newVolume)
      }
    }


    function volumeDown()
    {
      //null check
      if(playingVideoVolume != 0)
      {
        //variables
        let newVolume = null

        //set new volume
        newVolume = parseInt(playingVideoVolume) - 10
        videoPlayerEvents("volume", newVolume)
      }
    }
    

    function closeModal()
    {
      //elements
      let modal = document.getElementById("modal")

      //update elements
      modal.style.display = "none"
    }


    function formatChatMessage(msg)
    {
      //elements
      let item = document.createElement('div')
      let span = document.createElement('span')

      //variables
      let time = currentTimeStamp()
      let msgs = document.getElementById("messages").childElementCount

      //set message background color
      if(msgs % 2 == 0)
      {
        item.style.padding = "10px"
        // item.style.backgroundColor = "white"
        item.style.backgroundColor = "#a9a9a917"
        item.style.overflowWrap = "break-word"
        item.style.color = "white"
      }
      else
      {
        item.style.padding = "10px"
        // item.style.backgroundColor = "#efefef"
        item.style.backgroundColor = "#1c1b1b"
        item.style.overflowWrap = "break-word"
        item.style.color = "white"
      }

      //set anon name if no custom username
      if(msg.userName == "anon")
      {
          // msg.userName = "anon" + msg.userId.substring(0, 4).toUpperCase()
          msg.userName = msg.userId.substring(0, 4).toUpperCase()
      }
  
      //set chat format
      // item.textContent = time + " " + msg.userName + ": " + msg.content
      // item.textContent = msg.userName + ": " + msg.content

      //set chat messages styling
      item.textContent = ": " + msg.content
      span.innerText = msg.userName
      span.style.fontWeight = "bold"
      
      //append message
      item.prepend(span)
      item.title = msg.userName + " sent " + time + " '" + msg.content + "'"
      messages.appendChild(item)
      
      //scroll chat to latest message
      chat.scrollTo(0, chat.scrollHeight)
    }


    function generateRandomNumber(maxNumber)
    {
      //variable
      let randomNumber = Math.floor(Math.random() * maxNumber)

      //debugging
      // console.log("generateRandomNumber: " + randomNumber)

      //return value
      return randomNumber
    }


    function initialStartMobile()
    {
      //elements
      let videoPlayInitialStartOverlayMobile = document.getElementById("videoPlayInitialStartOverlayMobile")
      
      //update elements
      videoPlayInitialStartOverlayMobile.style.display = "none"
      
      //play video
      document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')

      //resync video
      setTimeout(function() {videoPlayerEvents("resync2")}, initialStartMobileTimer)
    }


    //handle socket stream
    socket.on('chat message', function(msg) { formatChatMessage(msg) })

    socket.on('info', function(allRooms, allClients, all_namespaces, clientInfo, videosCurrentlyPlaying, defaultPlaylistsFromServer, defaultRoomsFromServer) {
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
        // console.log("defaultRoomsFromServer")
        // console.log(defaultRoomsFromServer)
        
        //set default playlists
        defaultPlaylists = JSON.parse(defaultPlaylistsFromServer)
        defaultRooms = defaultRoomsFromServer

        //set your socket id
        yourSocketId = socket.id

        //elements
        let addUsernameCurrentUsername = document.getElementById("addUsernameCurrentUsername")
        
        //set current username
        if(yourUsername != null) { addUsernameCurrentUsername.innerText = "current username: " + yourUsername }
        else if(yourUsername == null) { addUsernameCurrentUsername.innerText = "current username: " + yourSocketId.substr(0, 4) }

        //save to vuex storage
        store.dispatch('actionSetAllRooms', allRooms) //all active rooms
        store.dispatch('actionSetDefaultRooms', defaultRoomsFromServer)

        //set current room
        for(let n in clientInfo)
        {
          let name = clientInfo[n].id
          let room = clientInfo[n].room
          
          if(name == socket.id)
          {
            inputCurrentRoom.innerText = room
            currentRoom = inputCurrentRoom.innerText
            
            if(currentRoom == "")
            {
                chat.style.display = "none"
                chatBox.style.display = "none"
                currentRoom = inputCurrentRoom.innerText
            }
            else if(currentRoom != "")
            {
                chat.style.display = "block"
                chatBox.style.display = "block"
                currentRoom = inputCurrentRoom.innerText
            }

            // console.log("currentRoom: " + currentRoom)
          }
        }

        //active room exist
        if(videosCurrentlyPlaying.length != 0 && currentRoom != "temp") 
        {
          //debugging
          // console.log("active room exist")
          // console.log("videosCurrentlyPlaying")
          // console.log(videosCurrentlyPlaying)
          // console.log("allRooms")
          // console.log(allRooms)
          // console.log(currentRoom)
          
          //find current room
          for(let x in videosCurrentlyPlaying)
          {
            if(currentRoom == videosCurrentlyPlaying[x].room)
            {
              //debugging
              // console.log("current room is: " + currentRoom)

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
                let randomNumber = generateRandomNumber(3)
                
                for(let pl in defaultPlaylists)
                {
                  if(defaultPlaylists[pl].category == currentRoom)
                  {
                    //debugging
                    // console.log("set default playlist")

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
            else if(currentRoom != videosCurrentlyPlaying[x].room)
            {
              //debugging
              // console.log("current room is not: " + videosCurrentlyPlaying[x].room)
              
              //set video variables
              playingVideosLastWholeSecond = 0
              playingVideoId = null
              playingVideoRoom = currentRoom
              playingVideoStatus = "true"
                  
              //set playlist variables
              videoPlaylist = "true"
              playlistCurrentVideoIndex = generateRandomNumber(playlistLength)

              //set random number
              let randomNumber = generateRandomNumber(3)
              
              //set default playlist
              for(let pl in defaultPlaylists)
              {
                if(defaultPlaylists[pl].category == currentRoom)
                {
                  //debugging
                  // console.log("set default playlist")

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

        //no active room exist
        else if(videosCurrentlyPlaying.length == 0  && currentRoom != "temp")  
        {
          //debugging
          // console.log("no active room exist")
          
          //set video variables
          playingVideosLastWholeSecond = 0
          playingVideoId = null
          playingVideoRoom = currentRoom
          playingVideoStatus = "true"
              
          //set playlist variables
          videoPlaylist = "true"
          playlistCurrentVideoIndex = generateRandomNumber(playlistLength)

          //set random number
          let randomNumber = generateRandomNumber(3)

          //set default playlist
          for(let pl in defaultPlaylists)
          {
            if(defaultPlaylists[pl].category == currentRoom)
            {
              //debugging
              // console.log("set default playlist")

              videoPlaylistId = defaultPlaylists[pl].urls[randomNumber]

              break
            }
          }          
          
          //debugging
          // console.log("playingVideosLastWholeSecond: " + playingVideosLastWholeSecond)
          // console.log("playingVideoId: " + playingVideoId)
          // console.log("playingVideoRoom: " + playingVideoRoom)
          // console.log("playingVideoStatus: " + playingVideoStatus)
          // console.log("videoPlaylistId: " + videoPlaylistId)
        }

        //set sync master
        for(let r in allRooms)
        {
          if(allRooms[r].room == "temp")
          {
            //nothing
          }
          
          else if(allRooms[r].room == currentRoom)
          {
            //debugging
            // console.log("syncMaster for room " + videosCurrentlyPlaying[x].room + " is " + allRooms[r].clients[0])
            // console.log("yourSocketId: " + socket.id)
            
            //update sync master
            syncMaster = allRooms[r].clients[0]
              
            //set socket message
            let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "set sync master" + "\"" + "," + "\"room\"" + ":" + "\"" + currentRoom + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "," + "\"playingVideoId\"" + ":" + "\"" + playingVideoId + "\"" + "," + "\"videoPlaying\"" + ":" + "\"" + videoPlaying + "\"" + "," + "\"playlistCurrentVideoIndex\"" + ":" + "\"" + playlistCurrentVideoIndex + "\"" + "," + "\"videoPlaylist\"" + ":" + "\"" + videoPlaylist + "\"" + "," + "\"videoPlaylistId\"" + ":" + "\"" + videoPlaylistId + "\"" + "," + "\"syncMaster\"" + ":" + "\"" + syncMaster + "\"" + "}")
            
            //send socket message
            socket.emit('video command', msgObjVideoCommand)
              
            //return value
            break
          }
        }
        
        //set total rooms count
        let temp = JSON.stringify(vuexAllRooms.value)
        temp = JSON.parse(temp)
        if(temp.length > 0) { totalRoomsCount = temp.length }

        //debugging
        // console.log("total rooms: " + totalRoomsCount)
        // totalRooms.innerText = "total rooms: " + totalRoomsCount

        //set total users all rooms count
        if(allClients.length > 0) { totalUsersCount = allClients.length }

        //debugging
        // console.log("total users all rooms: " + totalUsersCount)
        // totalUsers.innerText = "Total Users: " + totalUsersCount

        //set total users current room count
        for(let r in allRooms)
        {
          let count = allRooms[r].clients.length

          if(currentRoom == allRooms[r].room)
          {
            totalUsersCurrentRoomCount = count

            //debugging
            // console.log("total users current room: " + totalUsersCurrentRoomCount)
            // totalUsersCurrentRoom.innerText = currentRoom + " Users: " + count
          }
        }

        //debugging
        // console.log(inputCurrentRoom)
    })

    socket.on('leave room', function(msg) { formatChatMessage(msg) })
    
    socket.on('join room', function(msg) { formatChatMessage(msg) })
    
    socket.on('create room', function(msg) { formatChatMessage(msg) })

    socket.on('video command', function(msg) {
        if(msg.content == "play video")
        {
          //send command(s) to video player
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*') //add event listener for getCurrentTime

          //show pause button
          displayPauseButton()
        }

        else if(msg.content == "pause video")
        {
          //send command(s) to video player
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')

          //show play button
          displayPlayButton()
        }

        else if(msg.content == "sync video")
        {
          //send command(s) to video player
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.syncTime + ', true]}', '*')
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*') //add event listener for getCurrentTime

          //show pause button
          displayPauseButton()
        }

        else if(msg.content == "load video")
        {
          //update elements
          loadVideoCustom(msg)
          displayPlayButton()

          //set current time
          let currentTimeDisplay = document.getElementById("current-time-video")
          currentTimeDisplay.innerText = ""

          //remove intialize modal if exists
          initializeNewCustomRoom.style.display = "none"
          
          //set playing status
          videoPlaying = false
        }

        else if(msg.content == "next video")
        {
          //go to next video
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'nextVideo' + '","args":""}', '*')
          
          //update elements
          resetCurrentTimeVideo()

          //set playing status
          videoPlaying = true
        }

        else if(msg.content == "previous video")
        {
          //go to previous video
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'previousVideo' + '","args":""}', '*')
          
          //update elements
          resetCurrentTimeVideo()

          //set playing status
          videoPlaying = true
        }

        else if(msg.content == "jump video")
        {
          //send command(s) to video player
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideoAt' + '","args":[' + msg.jumpIndex + ']}', '*')
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*') //add event listener for getCurrentTime
      
          //update elements
          displayPlayButton()
          resetCurrentTimeVideo()
          
          //set playing status
          videoPlaying = true

          //reset video time
          playingVideosLastWholeSecond = 0
        }

        else if(msg.content == "restart video")
        {
          //send command(s) to video player
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[0, true]}', '*')
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')

          //set playing status
          videoPlaying = true

          //reset video time
          playingVideosLastWholeSecond = 0
        }

        else if(msg.content == "random playlist")
        {
          //elements
          let videoPlayPauseOverlayText = document.getElementById("videoPlayPauseOverlayText")
          
          //load random video
          loadVideoCustom(msg)

          //update elements
          videoPlayPauseOverlayText.innerText = "Loading..."

          //sync if needed
          if(yourSocketId == syncMaster)
          {
            setTimeout(function() {
              videoPlayerEvents("jump", "random")
              undisplayPauseOverlay()
            }, randomPlaylistTimer)
          }
        }
        
        else if(msg.content == "resync2 video")
        {
          //debugging
          // console.log(msg)
          
          //set playing video current seconds
          msg.playingVideosLastWholeSecond = parseInt(msg.playingVideosLastWholeSecond)

          //check resync is needed or not
          if(msg.userId == yourSocketId && playingVideosLastWholeSecond != msg.playingVideosLastWholeSecond)
          {
            if(msg.videoPlaying == "true")
            {
              //log
              console.log("resync2 to: " + msg.playingVideosLastWholeSecond)
              
              //add 1s to sync time
              msg.playingVideosLastWholeSecond++

              //send command(s) to video player
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.playingVideosLastWholeSecond + ', true]}', '*')
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
            }
            else if(msg.videoPlaying == "false")
            {
              //send command(s) to video player
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.playingVideosLastWholeSecond + ', true]}', '*')
              document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
            }
          }
          else if(msg.userId == yourSocketId && playingVideosLastWholeSecond == msg.playingVideosLastWholeSecond)
          {
            //log
            console.log("resync2 not needed")
          }
        }
    })


    return {
      //functions
      joinRoom,
      addUser,
      // leaveRoom,
      forbiddenCharacterCheck,
      currentTimeStamp,
      sendChatMessage,
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
      initialStartMobile,
    }
  }
}
</script>


<style scoped>
  /*** elements ***/
  button { border-radius: 0%; outline: none; color: black; }
  input[type="number"] { -webkit-appearance: textfield; -moz-appearance: textfield; appearance: textfield; } 
  input[type=number]::-webkit-inner-spin-button { -webkit-appearance: textfield; -moz-appearance: textfield; appearance: textfield; } 
  input[type=number]::-webkit-outer-spin-button { -webkit-appearance: textfield; -moz-appearance: textfield; appearance: textfield; }


  /***  ids ***/
  #componentHome { display: block; font-family: Arial, Helvetica, sans-serif; overflow: hidden; background-color: black; }
  #chat { position: absolute; height: calc(87% - 16px); width: 100%; bottom: calc(100px - 6px);  right: 0; overflow-y: scroll; opacity: 0.7; border-left: 1px solid black; }
  #inputChatMessage { display: inline-block; width: calc(100% - 20px); margin: 0px; margin-top: 8px; padding: 10px; font-size: 14px; font-weight: normal; color: white; border: 0px; background-color: rgba(169, 169, 169, 0.09); }
  #chat { scrollbar-width: thin; scrollbar-color: #80808063 #1c1b1b; }
  #chatBox { width: 100%; margin: 0px; padding: 0px; bottom: 0px; position: absolute; text-align: center; background-color: #1c1b1b; }
  #currentRoomInfo { display: block; width: 100%; padding: 1.4vh; opacity: 0.9; text-align: center; user-select: none; z-index: 1; color: white; border-bottom: 1px solid black; background-color: #1c1b1b; }
  #messages { list-style-type: none; margin: 0; padding: 0; font-size: 14px; }
  #flex { display: inline-flex; position: absolute; height: 100vh; width: calc(19vw - 1px); flex-wrap: wrap; align-content: flex-start; bottom: 0; right: 0; z-index: 2; overflow-y: hidden; filter: brightness(0.98); border-left: 1px solid black; background-color: #1c1b1b; }
  #buttonSend { display: inline-block; width: 100%; margin: 0px; margin-bottom: 10px; padding: 11px; padding-top: 10px; font-weight: normal; font-family: Arial; font-size: 14px; border: 0px; color: rgba(169, 169, 169, 0.6); background-color: black; }
  #form { width: 93%; margin: auto; margin-top: 2px; opacity: 0.6 }
  #buttonCreateRoom { width: calc(100%); border-color: lightgray; }
  #createRoom { display: block; width: 70%; margin: auto; padding: 0px; background-color: transparent; } 
  #addUsername { display: block; width: 70%; margin: auto; padding: 0px; background-color: transparent; }
  #addUsernameCurrentUsername { margin: 20px; }
  #modal 
  { 
      position: absolute; 
      display: block; 
      height: 70vh; 
      width: 60vw; 
      margin: 0; 
      margin-left: -8vw; 
      padding: 0px; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%); 
      z-index: 4; 
      opacity: 0.9; 
      background-color: white; 
  }
  #modalSidebar 
  { 
      display: inline-block; 
      height: 100%; 
      width: 30%; 
      vertical-align: top; 
      font-weight: bold; 
      text-align: left; 
      user-select: none; 
      color: #1c1b1b; 
  }
  #modalSidebar > div { padding: 10px; border-bottom: 3px solid #1c1b1b; }
  #modalContent { display: inline-block; height: 100%; width: 70%; overflow: auto; text-align: center; color: white; background-color: #1c1b1b; }
  #modalContent > div { height: auto; width: calc(100% - 2px); margin: auto; padding: 0px; padding-top: 10px; padding-bottom: 10px; }
  #modalContentKeybindsTable 
  { 
      display: block; 
      width: max-content; 
      margin: auto; 
      margin-top: 10px; 
      padding: 20px; 
      padding-top: 0px; 
      padding-bottom: 0px; 
      border-spacing: 10px 17px; 
      user-select: none; 
  }
  #modalContentSettings { display: none; } 
  #modalContentVideoQuality { display: none; } 
  #modalContentAddUsername { display: none; } 
  #modalContentCreateRoom { display: none; }
  #changeVideoQuality { user-select: none; height: 100%; width: 100%; }
  #changeVideoQualitySteps { display: none; text-align: left; margin-bottom: 30px; margin-left: 34%; }
  #modalSidebarKeybinds { color: white; background-color: #1c1b1b; }
  #modalSidebarSettings { background-color: white; } 
  #modalSidebarVideoQuality { background-color: white; } 
  #modalSidebarAddUsername { background-color: white; } 
  #modalSidebarCreateRoom { background-color: white; }
  #buttonAddUser { height: 40px; font-size: 16px; } 
  #inputAddUser { height: 40px; font-size: 16px; } 
  #buttonCreateRoom { height: 40px; font-size: 16px; } 
  #inputCreateRoom { height: 40px; font-size: 16px; }
  #inputCreateRoom { width: calc(100% - 24px); padding-left: 10px; padding-right: 10px; } 
  #inputAddUser { width: calc(100% - 24px); padding-left: 10px; padding-right: 10px; }
  #modalCloseBar { display: block; padding: 4px; text-align: left; background-color: red; }
  #modalSidebarSettings { display: none }
  #pause-video { display: none; } 
  #unmute-video { display: none; }
  #sync-video-input { width: 100px; padding: 10px; height: 17px; color: white; font-size: 13px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.1); background-color: #1c1b1b; } 
  #load-video-input { width: 100px; padding: 10px; height: 17px; color: white; font-size: 13px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.1); background-color: #1c1b1b; } 
  #jump-video-input { width: 100px; padding: 10px; height: 17px; color: white; font-size: 13px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.1); background-color: #1c1b1b; }
  #sync-video { display: inline-block; padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1); } 
  #load-video { display: inline-block; padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1); } 
  #jump-video { display: inline-block; padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1); }
  #videoPlayerControlButtons 
  { 
      display: none; 
      position: absolute; 
      width: auto; 
      margin: 0; 
      padding: 0px; 
      bottom: 12vh; 
      left: 41.5%; 
      z-index: 3; 
      opacity: 0.7; 
      transform: translate(-50%); 
      -ms-transform: translate(-50%); 
      flex-direction: column; 
      color: white; 
      border: 1px solid rgba(255, 255, 255, 0.7); 
      background-color: transparent; 
  }
  #playlistControls { display: none; }
  #restart-video { display: block; }
  #videoArea { display: block; }
  #iframeContainer { width: 100%; height: 112%; margin-top: -3.9%; }
  #player 
  { 
      display: block; 
      position: absolute; 
      height: calc(100vh + 60px); 
      width: 81vw; 
      margin: auto; 
      margin: 0px; 
      margin-top: -61px; 
      margin-left: 0px; 
      padding: 0px; 
      overflow: none; 
      background-color: black; 
      border: 0px solid white; 
  }
  #videoPlayButtonOverlay 
  { 
      display: block; 
      position: absolute; 
      left: 0px; 
      top: 0px; 
      height: calc(100vh + 100px); 
      width: 84vw; 
      z-index: 1; 
      border: 0; 
      background-color: transparent; /* #ff000030 */
  } 
  #videoPlayButtonSvg 
  { 
      position: absolute; 
      margin-top: 0px; 
      margin-left: 0px; 
      top: 46%; 
      left: 50%; 
      height: 20vh; 
      width: 40vh; 
      -ms-transform: translate(-50%, -50%); 
      transform: translate(-50%, -50%); 
  }
  #videoPlayPauseOverlay { position: absolute; display: none; height: 100%; width: 100%; z-index: 2; background-color: transparent; }
  #videoLoadingOverlay { display: block; position: fixed; height: 100vh; width: 100vw; left: 0px; top: 0px; z-index: 4; background-color: black; }
  #loadingScreenGif 
  { 
      display: block; 
      position: absolute; 
      top: 47%; 
      left: 50%; 
      -ms-transform: 
      translate(-50%, -50%); 
      transform: translate(-50%, -50%); 
      color: white; 
      width: auto; 
      text-align: center; 
      background-color: transparent; 
  }
  #videoPlayPauseOverlayText 
  { 
      position: absolute;
      display: block;
      width: auto;
      min-width: 44vw;
      top: 41%;
      padding: 30px;
      padding-left: 20vw;
      padding-right: 20vw;
      font-weight: bold;
      font-size: 20px;
      text-align: center; 
      opacity: 1.0;
      color: white;
      font-style: oblique;
      text-shadow: 2px 1px black;
      background-color: black;
  }
  #videoPlayPauseOverlayMobile { display: none; opacity: 0.0; z-index: 1; }
  #videoPlayInitialStartOverlayMobile { display: none; }
  #videoInfo 
  { 
      display: none; 
      position: absolute; 
      top: 4vh; 
      right: 0; 
      width: auto; 
      margin-right: 22vw; 
      z-index: 2; 
      opacity: 0.9; 
      text-align: left; 
      font-size: 14px; 
      font-weight: normal; 
      text-shadow: black 1px 1px; 
      color: white; 
      background-color: transparent; 
  }
  #videoChannel { margin: 6px; text-align: right; } 
  #videoTitle { margin: 6px; text-align: right; } 
  #videoQuality { margin: 6px; text-align: right; }
  #videoCurrentPlaylistIndex { margin: 6px; text-align: right; } 
  #current-time-video { margin: 6px; text-align: right; } 
  #videoCurrentRoom { margin: 6px; text-align: right; }
  #videoVolume { margin: 6px; text-align: right; } 
  #videoCurrentRoomTotalUsers { margin: 6px; text-align: right; }
  #loadingScreenText { color: white; animation-name: fadeLoadingScreenText; animation-duration: 1.8s; animation-iteration-count: infinite; } 
  #videoPlayInitialStartOverlayMobileLoadingScreenText 
  { 
    color: white; 
    animation-name: fadeLoadingScreenText; 
    animation-duration: 1.8s; 
    animation-iteration-count: infinite; 
  }
  #loadingScreenImage 
  { 
      display: none; 
      position: absolute; 
      height: 40vh; 
      width: 40vh; 
      top: 0px; 
      left: 0px; 
      margin-top: calc(-16vh + 1px); 
      margin-left: 140px; 
      transform: rotate(-45deg) translate(-50%, -50%); 
      z-index: -1; 
      background-size: cover; 
      border-radius: 7%; 
      border: 3px solid white; 
      background-color: black; 
  }
  #currentRouteBar 
  { 
      display: none; 
      color: white; 
      background-color: red; 
      position: absolute; 
      bottom: 0px; 
      width: 73vw; 
      padding: 10px; 
      z-index: 1 
  }
  #videoCurrentRoom { display: none; }
  #initializeNewCustomRoom 
  { 
      display: none; 
      position: absolute; 
      color: white; 
      border: 1px solid white; 
      z-index: 1; 
      padding: 20px; 
      transform: translate(-50%, -50%); 
      left: 41.5%; 
      top: 46% 
  }
  #initializeNewCustomRoom-load-video-elems { height: auto; width: 100%; background-color: black; }
  #initializeNewCustomRoom-load-video-input 
  { 
      height: auto; 
      width: calc(90% - 4px); 
      margin-top: 10px; 
      padding: 10px; 
      color: black; 
      background-color: white; 
  }
  #initializeNewCustomRoom-load-video { height: auto; width: 90%; padding: 10px; text-align: center; color: black; background-color: lightgray; }
  #initializeNewCustomRoomSteps { margin: 0px; margin-bottom: 10px; }
  #initializeNewCustomRoomTitle { margin: 0px; margin-bottom: 10px; text-align: center; }
  

  /*** classes ***/
    .buttonCreate { width: calc(100%); border-color: lightgray; }
  .errorMessage { display: block; margin: 20px; width: auto; background-color: transparent; }
  .modalContentKeybindsDescription { width: auto; padding-left: 10px; padding-right: 10px; background-color: white; color: black; }
  .modalContentKeybindsEqual { width: 13%; background-color: #1c1b1b }
  .modalContentKeybindsCharacter { width: auto; padding: 10px; border: 1px solid white; background-color: #1c1b1b; }
  .modalContentKeybindsTableRow { border: 1px solid red; }
  .changeVideoQualityStepsText { margin: 0px; padding: 0px; }
  .videoPlayerControlButton 
  { 
      display: block; 
      max-height: 17px; 
      min-width: 100px; 
      padding: 10px; 
      user-select: none; 
      text-align: center; 
      font-size: 14px; 
      background-color: #1c1b1b; 
      border: 1px solid rgba(255, 255, 255, 0.1); 
  }
  .videoPlayerControlRow { display: inline-flex; margin: auto; }
  .initializeNewCustomRoomText { margin: 0px; padding: 0px; }


  /*** animations ***/
  @keyframes fadeLoadingScreenText { from {opacity: 1.0; } to {opacity: 0.0; } }  


  /*** mobile portrait ***/
  @media screen and (max-width: 1300px) and (orientation: portrait) 
  { 
    #videoArea { display: none; }  
    #flex { display: none; } 
  } 


  /*** mobile landscape ***/
  @media screen and (max-width: 1300px) and (orientation: landscape) 
  {
    /*** ids ***/
    #player { height: 90vh; width: 100vw; margin: 0px; margin-top: 0px; padding: 0px; padding-bottom: 10vh; }
    #videoPlayButtonOverlay { height: 100vh; width: 100vw; }
    #loadingScreenImage { display: none; }
    #loadingScreenText { margin-right: 0px; }
    #videoPlayPauseOverlayMobile 
    { 
        display: block; 
        position: absolute; 
        left: 0px; 
        top: 0px; 
        height: 100vh; 
        width: 100vw; 
        z-index: 1; 
        opacity: 1.0; 
        border: 0; 
        background-color: black; 
    }
    #videoPlayInitialStartOverlayMobile 
    { 
        display: block; 
        position: absolute; 
        height: 100vh; 
        width: 100vw; 
        left: 0px; 
        top: 0px; 
        z-index: 3; 
        opacity: 1.0; 
        border: 0; 
        background-color: black; 
    }
    #videoPlayPauseOverlayText 
    { 
        width: auto; 
        min-width: 60vw; 
        top: 32vh; 
        z-index: 3; 
        background-color: transparent; 
        padding-left: 20vw;
        padding-right: 20vw; 
        font-size: 20px; 
    }
    #videoPlayInitialStartOverlayMobileLoadingScreenText { display: block; }
    #videoPlayInitialStartOverlayMobileLoadingScreenGif  
    { 
        display: block; 
        top: 49%; 
        left: 50%; 
        -ms-transform: translate(-50%, -50%); 
        transform: translate(-50%, -50%); 
        color: white; 
        position: absolute;
        width: auto; 
        text-align: center; 
        background-color: transparent; 
    }
    #videoPlayPauseOverlay { display: none; }
    #flex { z-index: -1; }
    #videoPlayerControlButtons { z-index: -1; }
    #videoPlayerControlButtonsMobile 
    { 
        position: absolute; 
        display: block; 
        left: 0px; 
        width: 100vw; 
        top: 0px; 
        overflow-x: scroll; 
        overflow-y: hidden; 
        scrollbar-width: thin; 
        scrollbar-color: gray lightgray; 
        opacity: 0.7; 
        z-index: 2; 
        color: white; 
        border: 0px solid black; 
    }
    #sync-video-input-mobile { padding: 8px; max-height: 14px; max-width: 100px; text-align: center; border: 3px solid transparent; color: white; background-color: #1c1b1b; } 
    #jump-video-input-mobile { padding: 8px; max-height: 14px; max-width: 100px; text-align: center; border: 3px solid transparent; color: white; background-color: #1c1b1b; } 
    #load-video-input-mobile { padding: 8px; max-height: 14px; max-width: 100px; text-align: center; border: 3px solid transparent; color: white; background-color: #1c1b1b; }
    #unmute-video-mobile { display: none; }  
    #pause-video-mobile { display: none; }
    #iframeContainer { width: 100%; height: 110%; margin-top: 1px; }
    #videoInfo { top: 10vh; right: 2vh; margin: 0px; z-index: 0; }
    #modal { display: block; top: 0px; left: 0px; margin: 0px; padding: 0px; height: 100vh; width: 100vw; transform: translate(0%, 0%); }
    #changeVideoQualitySteps { width: 40%;  margin: auto; padding-bottom: 7vh; }
    #modalSidebarKeybinds { display: none; }
    #initializeNewCustomRoom { top: 50%; left: 50%; }
    

    /*** classes */
    .videoPlayerControlButton { min-width: 110px; border: 0px; border-right: 2px solid rgba(255, 255, 255, 0.1); background-color: #1c1b1bb7;}
    .videoPlayerControlButton:active { color: black; background-color: white; }
  }
</style>
