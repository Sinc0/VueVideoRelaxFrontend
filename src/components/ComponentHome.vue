<template>
  <div id="home">
    <!-- <div id="modal">
        <p>test</p>
        <input id="modalInputAddUser" />
        <button id="modalButtonAddUserTest" class="modalButtonCreate">Add</button>
    </div> -->

    <!-- top bar -->
    <div id="menu" style="display: block;">
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
        
        <div id="createRoomTitle" v-on:click="toggleMenuCreateRoom()">Create Room</div>
        <div id="createRoom">
            <div id="errorMessageCreateRoom" class="errorMessage"></div>
            <input id="inputCreateRoom" maxlength="40" />
            <button id="buttonCreateRoomTest" class="buttonCreate" v-on:click="createRoom()">Create</button>
        </div>
                
        <div id="addUsernameTitle" v-on:click="toggleMenuAddUsername()">Add Username</div>
        <div id="addUsername">
            <div id="errorMessageAddUsername" class="errorMessage"></div>
            <input id="inputAddUser"  maxlength="40"/>
            <button id="buttonAddUserTest" class="buttonCreate">Add</button>
        </div>

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
      <div id="videoPlayButtonOverlay" v-on:click="videoPlayButtonOverlay()">
        <!-- <svg height="20%" width="20%" version="1.1" viewBox="0 0 68 48">
          <path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
          <path d="M 45,24 27,14 27,34" fill="#fff"></path>
        </svg> -->
      </div>

      <!-- iframe -->
      <div id="iframeContainer">
        
      </div> 
    </div>
    
    <!-- player controls -->
    <div id="videoPlayerControlButtons">
      <!-- server synced controls 1 -->
      <div id="play-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('play')">Play</div>
      <div id="pause-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('pause')">Pause</div>
      
      <!-- user only controls -->
      <div id="mute-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('mute')">Mute</div>
      <div id="unmute-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('unMute')">Unmute</div>
      <div id="fullscreen-video" class="videoPlayerControlButton" v-on:click="requestFullScreen()">Fullscreen</div>

      <!-- server synced controls 2 -->
      <div id="sync-video-elems">
        <input id="sync-video-input" type="number" placeholder="video sec" max="1000"/>
        <div id="sync-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('sync')">Sync</div>
      </div>
      <div id="load-video-elems">
        <input id="load-video-input" placeholder="video id" maxlength="100" />
        <div id="load-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('load')">Load</div>
      </div>

      <div id="current-time-video" class="videoPlayerControlButton">current time</div>

      <!-- might use later -->
      <!-- <button id="restart-video" class="videoPlayerControlButton" v-on:click="iframeLoader()">Restart</button> -->
      <!-- <button id="stop-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('stop')">Stop</button> -->
      <!-- <button id="buttonTestStartTimer" class="videoPlayerControlButton" v-on:click="testStartTimer()">Start Timer</button> -->
      <!-- <button id="buttonTestPauseTimer" class="videoPlayerControlButton" v-on:click="testPauseTimer()">Paus Timer</button> -->
      <!-- <button id="restart-video" class="videoPlayerControlButton" v-on:click="videoPlayerEvents('reset')">Reset</button> -->
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
import {onMounted} from 'vue'

var socket = io("http://localhost:3000");
var form = document.getElementById('form');  
var input = document.getElementById('input');
var buttonTest = document.getElementById('buttonTest');
var url = document.location.pathname //window.location.href
var playingVideosLastWholeSecond = 0
var playingVideoTotalDuration
var videoPlaying = false
var videoMuted = false
var fullScreenActive = false

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
    // console.log(e)
    
      let data = JSON.parse(e.data);
      let info = data.info;
      // let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
      
      //remove play button overlay
      // videoPlayButtonOverlay.style.display = "none"

      if(e.data.toString().includes("playerState"))
      {
        let duration
        let currentState = data.info.playerState
        playingVideoTotalDuration = data.info.duration

        if(currentState == 1)
        {
          currentState = "video playing"
          // if(socket.id == clientId)
          //   {
          //     console.log(socket)
          //     // videoPlayerEvents("play")             
          //   }
        }
        else if(currentState == 2)
        {
          currentState = "video paused"
          // videoPlayerEvents("pause")
        }
        else if(currentState == 3)
        {
          currentState = "video buffering"
        }
        
        console.log("currentState: " + currentState)
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

        if((currentTime + 5) == playingVideosLastWholeSecond)
        {
          // videoPlayerEvents("back5", playingVideosLastWholeSecond - 5)
          }
        if((currentTime - 5) == playingVideosLastWholeSecond)
        {
          // videoPlayerEvents("forward5", playingVideosLastWholeSecond + 5)
        }


        if(currentTime != playingVideosLastWholeSecond)
        {
          let d = document.getElementById("current-time-video")
          let currentTimeText = currentTime + "/" + totalDuration + " seconds "
          console.log("currentTime: " + currentTimeText)

          d.innerText = currentTimeText
          playingVideosLastWholeSecond = currentTime
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "video current time" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "}")
          socket.emit('video command', msgObjVideoCommand);
        }
      }
  }

  //event listen to keyboard
  window.addEventListener('keyup', (event) => {
    // console.log(event)

    //variables
    let inputChatMessage = document.getElementById("inputChatMessage")
    // console.log(inputChatMessage)
    
    if(inputChatMessage.value.length == 0)
    {
      if(event.code === "Space")
      {
        if(videoPlaying == false){videoPlayerEvents("play")}
        else if(videoPlaying == true){videoPlayerEvents("pause")}
      }
      else if(event.code === "KeyP")
      {
        if(videoPlaying == false){videoPlayerEvents("play")}
        else if(videoPlaying == true){videoPlayerEvents("pause")}
      }
      else if(event.code === "KeyS")
      {
        videoPlayerEvents("sync")
      }
      else if(event.code === "KeyL")
      {
        videoPlayerEvents("load")
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
      else if(event.code == "ArrowRight")
      {
        // videoPlayerEvents("forward5", playingVideosLastWholeSecond + 5)
      }
      else if(event.code == "ArrowLeft")
      {
        // videoPlayerEvents("back5", playingVideosLastWholeSecond - 5)
      }
    }
  })

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
        // alert("room name cann    ot be empty/contain space or following characters !@<<|,%")
        let errorMessageCreateRoom = document.getElementById("errorMessageCreateRoom")
        errorMessageCreateRoom.style.display = "block"
        errorMessageCreateRoom.innerText = "room name cannot be empty/contain space or following characters !@<<|,%"
        return
    }
    
    //check if room already exists
    let d = document.getElementsByClassName("room")
    console.log(d)
    for(let rm in d)
    {
        let roomThatExists = d[rm].innerText
        // console.log(roomThatExists)
        
        if(newRoom == roomThatExists)
        {
            alert("room " + newRoom + " already exists")
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

    //clear error message
    errorMessageCreateRoom.style.display = "none"
  }
  
  function joinRoom(roomName)
  {
      // console.log(roomName)
      // console.log(socket.id)
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
          alert("you are already in room " + newRoom)
          return
      }

      //clear messages
      messages.innerHTML = ""
      
      socket.emit('join room', createRoomInfo);
  }

  function addUser(socketId)
  {
      let characterCheck = forbiddenCharacterCheck(inputAddUser.value)
      if(characterCheck == true)
      {
          // alert("username cannot be empty/contain space or following characters !@<<|,%")
          let errorMessageAddUsername = document.getElementById("errorMessageAddUsername")
          errorMessageAddUsername.style.display = "block"
          errorMessageAddUsername.innerText = "username cannot be empty/contain space or following characters !@<<|,%"
          return
      }

      // if(inputAddUser.value == "")
      // {
      //     alert("username cannot be empty or contain !@<<|,%")
      //     return
      // }
      let username = inputAddUser.value
      let user = JSON.parse("{" + "\"socketId\"" + ":" + "\"" + socketId + "\"" + "," + "\"username\"" + ":" + "\"" + username + "\"" + "}")
      console.log(user)
      socket.emit('add user', user);
      inputAddUser.value = ""
      
      //clear error message
      errorMessageAddUsername.style.display = "none"
  }

  function leaveRoom(roomName)
  {
      //clear messages
      messages.innerHTML = ""

      socket.emit('leave room', roomName);
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

  function loadVideoStart()
  {
    let vp = document.getElementById("videoPlayer")
    let d = document.getElementById("iframeContainer")
    let iframeEle = document.createElement("iframe")

    // <iframe id="videoPlayer"
    // width="100%" 
    // height="100%" 
    // src="https://www.youtube-nocookie.com/embed/W_MMB86X9Yg?enablejsapi=1&autoplay=0&controls=1&modestbranding=1&rel=0&amp;start=60" 
    // title="YouTube video player" 
    // frameborder="0" 
    // allow="" 
    // allowfullscreen>
    // </iframe>
    // accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture
    // ytp-pause-overlay ytp-scroll-min
    // ytp-chrome-top ytp-show-cards-title
    // ytp-button ytp-expand
    // ytp-watermark yt-uix-sessionlink
    iframeEle.src = "https://www.youtube-nocookie.com/embed/1jcLEkjeCy4?fullscreen=0&enablejsapi=1&autoplay=0&controls=0&modestbranding=1&rel=0&amp;start=0"
    iframeEle.id = "videoPlayer"
    iframeEle.height = "100%"
    iframeEle.width = "100%"
    iframeEle.title = "YouTube video player"
    
    if(vp == null)
    {
      d.append(iframeEle)
    }
  }

  function loadVideoCustom(videoId)
  {
    let container = document.getElementById("iframeContainer")
    let iframeEle = document.createElement("iframe")
    let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")

    iframeEle.src = "https://www.youtube-nocookie.com/embed/" + videoId + "?enablejsapi=1&autoplay=0&controls=1&modestbranding=1&rel=0&amp;start=0"
    iframeEle.id = "videoPlayer"
    iframeEle.height = "100%"
    iframeEle.width = "100%"
    iframeEle.title = "YouTube video player"
    
    //load video
    container.innerHTML = ""
    container.append(iframeEle)

    videoPlayButtonOverlay.style.display = "block"
  }

  function videoPlayerEvents(event, param)
  {
    let vp = document.getElementById("videoPlayer")

    if(vp != null)
    {
      if(event == "play")
      {
        //variables
        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "▶ played video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "play video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "}")
        // let videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
        
        //chat message
        socket.emit('chat message', msgObjChat);

        //video command
        socket.emit('video command', msgObjVideoCommand);

        //set local variable
        videoPlaying = true

        //remove play button overlay
        // videoPlayButtonOverlay.style.display = "none"
      }
      else if(event == "pause")
      {
        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "◾ paused video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "pause video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"playingVideosLastWholeSecond\"" + ":" + "\"" + playingVideosLastWholeSecond + "\"" + "}")

        //chat message
        socket.emit('chat message', msgObjChat);
        
        //video command
        socket.emit('video command', msgObjVideoCommand);

        //set local variable
        videoPlaying = false
      }
      // else if(event == "stop")
      // {
      //   document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      // }
      else if(event == "sync")
      {
        //variables
        let syncTime = document.getElementById("sync-video-input").value
        let syncTimeInMinutes = parseInt(syncTime / 60)
        let syncTimeInSeconds = syncTime % 60
        let syncMessage

        if(syncTimeInMinutes == 0 && syncTimeInSeconds < 10)
        {
          syncMessage = "synced video to " + syncTimeInMinutes.toString() + ".0" + syncTimeInSeconds.toString() + " minutes"
        }
        else if(syncTimeInMinutes > 0 && syncTimeInSeconds < 10)
        {
          syncMessage = "synced video to " + syncTimeInMinutes.toString() + ".0" + syncTimeInSeconds.toString() + " minutes"
        }
        else
        {
          syncMessage = "synced video to " + syncTimeInMinutes.toString() + "." + syncTimeInSeconds.toString() + " minutes"
        }
        // console.log(syncMessage)

        if(syncTime != "")
        {
          let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + syncMessage + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "sync video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"syncTime\"" + ":" + "\"" + syncTime + "\"" + "}")
    
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

        //set local variable
        videoMuted = false
      }
      // else if(event == "restart")
      // {
      //   document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[0, true]}', '*');
      //   document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      //   let btnPlay = document.getElementById("play-video")
      //   let btnPause = document.getElementById("pause-video")
      //   btnPlay.style.display = "none"
      //   btnPause.style.display = "block"
      // }
      else if(event == "load")
      {
        let d = document.getElementById("load-video-input")
        let videoId = d.value
        let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + "loaded video " + videoId + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "load video" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"videoId\"" + ":" + "\"" + videoId + "\"" + "}")

        if(videoId != "")
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
      else if(event == "forward5")
      {
        //variables
        let syncTime = param
        let syncTimeInMinutes = parseInt(syncTime / 60)
        let syncTimeInSeconds = syncTime % 60
        let syncMessage

        // let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + syncMessage + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
        let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "forward5" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"syncTime\"" + ":" + "\"" + syncTime + "\"" + "}")
  
        //chat message
        // socket.emit('chat message', msgObjChat);
        
        //video command
        socket.emit('video command', msgObjVideoCommand);
      }
      else if(event == "back5")
      {
        //variables
        let syncTime = param
        let syncTimeInMinutes = parseInt(syncTime / 60)
        let syncTimeInSeconds = syncTime % 60
        let syncMessage

        if(playingVideosLastWholeSecond != 0)
        {
          // let msgObjChat = JSON.parse("{" + "\"content\"" + ":" + "\"" + syncMessage + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "}")
          let msgObjVideoCommand = JSON.parse("{" + "\"content\"" + ":" + "\"" + "back5" + "\"" + "," + "\"room\"" + ":" + "\"" + inputCurrentRoom.innerText + "\"" + "," + "\"userId\"" + ":" + "\"" + socket.id + "\"" + "," + "\"userName\"" + ":" + "\"" + "anon" + "\"" + "," + "\"syncTime\"" + ":" + "\"" + syncTime + "\"" + "}")
    
          //chat message
          // socket.emit('chat message', msgObjChat);
          
          //video command
          socket.emit('video command', msgObjVideoCommand);
        }
      }
    }
  }

  function videoPlayButtonOverlay()
  {
      if(videoPlaying == false){videoPlayerEvents("play")}
      else if(videoPlaying == true){videoPlayerEvents("pause")}
  }

  function requestFullScreen()
  {
    // var element = document.body; // Make the body go full screen.
    // var element = document.getElementById("fullscreen")
    var element = document.getElementById("player")
    var videoPlayButtonOverlay = document.getElementById("videoPlayButtonOverlay")
    
    // Supports most browsers and their versions.
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

    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        ///fire your event
        videoPlayButtonOverlay.style = "display: block; position: absolute; left: 9.5vw; top: 71px; height: 51vh; width: 50vw; border: none; background-color: #ff000030;"
        
        //set local variable
        fullScreenActive = false
    }

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
        item.style.padding = "20px"
        item.style.backgroundColor = "white"
        item.style.overflowWrap = "break-word"
      }
      else
      {
        item.style.padding = "20px"
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

  socket.on('info', function(allRooms, allClients, all_namespaces, clientInfo) {
      // console.log(socket)
      console.log("socket id: " + socket.id)
      console.log("socket nsp: " + socket.nsp)
      // console.log(allRooms)
      // console.log(allClients)
      // console.log(all_namespaces)
      console.log(clientInfo)
      
      //add functions
      buttonAddUserTest.onclick = function(){addUser(socket.id)}

      //clear lists
      allRoomsList.innerHTML = ""
      info.innerHTML = ""
      // clientsList.innerHTML = ""
      // namespacesList.innerHTML = ""
      // yourRoomsList.innerHTML = ""
      usersList.innerHTML = ""
      mobileMenuAllRooms.innerHTML = ""

      //set titles
      // allClientsTitle.innerText = "All Clients " + "(" + clientInfo.length + ")"
      allUsersTitle.innerText = "All Users " + "(" + clientInfo.length + ")"
      
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
              
              if(room == "")
              {
                  chat.style.display = "none"
                  chatBox.style.display = "none"
                  inputCurrentRoom.innerText = "no room selected"
                  mobileInputCurrentRoom.innerText = "no room selected"
              }
              else if(room != "")
              {
                  chat.style.display = "block"
                  chatBox.style.display = "block"
              }

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
      let defaultRooms = ['general', 'gaming', 'food']
      for(let c = 0; c < 3; c++)
      {
          let div = document.createElement('div')
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
                  console.log(allRooms[r].room)
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
              div.style.width = "200px"
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
              div.style.width = "200px"
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
              div.style.width = "200px"
              div.style.display = "inline-block"
              div.style.padding = "14.5px"
              div.style.textAlign = "center"
              div.onclick = function(){joinRoom(defaultRooms[c])}

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
              div.style.width = "200px"
              div.style.display = "inline-block"
              div.style.padding = "14.5px"
              div.style.textAlign = "center"
              divMobile.onclick = function(){joinRoom(defaultRooms[c])}
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
      console.log(allRooms)
      
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
                  button2.onclick = function(){leaveRoom(roomName)}
                  div.id = "room-menu-" + roomName
                  div.style.backgroundColor = "red"
                  div.style.width = "200px"
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
                  buttonMobile2.onclick = function(){leaveRoom(roomName)}
                  divMobile.id = "room-menu-mobile-" + roomName
                  divMobile.style.backgroundColor = "red"
                  div.style.width = "200px"
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
                  button2.onclick = function(){joinRoom(roomName)}
                  div.id = "room-menu-" + roomName
                  div.style.backgroundColor = "lightgreen"
                  div.style.width = "200px"
                  div.style.display = "inline-block"
                  div.style.padding = "14.5px"
                  div.style.textAlign = "center"
                  div.onclick = function(){joinRoom(roomName)}
                  
                  //mobile menu
                  // buttonMobile0.innerText = " - (" + count + ") "
                  // buttonMobile1.innerText = " - " + roomName + " "
                  // buttonMobile1.className = "room"
                  buttonMobile2.className = "buttonJoin"
                  buttonMobile2.innerText = "join" + " - " + roomName + " - " + "(" + count + ")"
                  buttonMobile2.style.backgroundColor = "lightgreen"
                  buttonMobile2.onclick = function(){joinRoom(roomName)}
                  divMobile.id = "room-menu-mobile-" + roomName
                  divMobile.style.backgroundColor = "lightgreen"
                  div.style.width = "200px"
                  div.style.display = "inline-block"
                  div.style.padding = "14.5px"
                  div.style.textAlign = "center"
                  divMobile.onclick = function(){joinRoom(roomName)}
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
        item.style.padding = "20px"
        item.style.backgroundColor = "white"
      }
      else
      {
        item.style.padding = "20px"
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
        item.style.padding = "20px"
        item.style.backgroundColor = "white"
      }
      else
      {
        item.style.padding = "20px"
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
        item.style.padding = "20px"
        item.style.backgroundColor = "white"
      }
      else
      {
        item.style.padding = "20px"
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
          let btnPlay = document.getElementById("play-video")
          let btnPause = document.getElementById("pause-video")
          btnPlay.style.display = "none"
          btnPause.style.display = "block"
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"listening","func":"' + 'getCurrentTime' + '","args":""}', '*');
        }
        else if(msg.content == "pause video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
          let btnPlay = document.getElementById("play-video")
          let btnPause = document.getElementById("pause-video")
          btnPlay.style.display = "block"
          btnPause.style.display = "none"
        }
        else if(msg.content == "sync video")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.syncTime + ', true]}', '*');
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
          let btnPlay = document.getElementById("play-video")
          let btnPause = document.getElementById("pause-video")
          btnPlay.style.display = "none"
          btnPause.style.display = "block"
        }
        else if(msg.content == "load video")
        {
          loadVideoCustom(msg.videoId)

          //reset play button
          let btnPlay = document.getElementById("play-video")
          let btnPause = document.getElementById("pause-video")
          btnPlay.style.display = "block"
          btnPause.style.display = "none"

          let btnMute = document.getElementById("mute-video")
          let btnUnmute = document.getElementById("unmute-video")
          btnMute.style.display = "block"
          btnUnmute.style.display = "none"
        }
        else if(msg.content == "forward5")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.syncTime + ', true]}', '*');
          playingVideosLastWholeSecond + 5
        }
        else if(msg.content == "back5")
        {
          document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
          // document.querySelector("#videoPlayer").contentWindow.postMessage('{"event":"command","func":"' + 'seekTo' + '","args":[' + msg.syncTime + ', true]}', '*');
          // playingVideosLastWholeSecond - 5
        }
    });

export default {
  setup() {
    //lifecycle hooks
    onMounted(() => {
        loadVideoStart()
    })  
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
      videoPlayerEvents,
      videoPlayButtonOverlay,
      requestFullScreen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* elements */
  /* body { margin: 0; padding-bottom: 0; overflow: hidden; font-family: Arial, Helvetica, sans-serif; background-color: black; } */
  #home { font-family: Arial, Helvetica, sans-serif; overflow: hidden; background-color: black; }
  button { border-radius: 0%; outline: none; color: black; }

  /* ids */
  #chat { height: 84%; width: 100%; right: 0; overflow-y: scroll; border-left: 1px solid black; }
  /* #form { height: 6%; border: 1px solid black; background: lightgray; margin-right: 1px; padding: 10px; padding-bottom: 10px; position: fixed; bottom: 0; right: 0; display: flex; box-sizing: border-box; backdrop-filter: blur(10px); } */
  #inputChatMessage { display: inline-block; width: 86%; margin: 0px; margin-top: 10px; padding: 10px; font-size: 16px; border: 0px; }
  /* #inputChatMessage:focus { outline: none; } */
  /* #form > button { background: #333; border: 1px solid #333; outline: none; color: #fff; } */
  #menu { height: 94%; width: auto;  margin: 0px; border-right: 1px solid black; }
  #menu::-webkit-scrollbar { width: 0px; }
  /* #menu::-webkit-scrollbar-track { background: #f1f1f1; } */
  /* #menu::-webkit-scrollbar-thumb { background: #888; } */
  /* #menu::-webkit-scrollbar-thumb:hover { background: #555 } */
  /* #menu { scrollbar-width: thin; scrollbar-color: black white; } */
  #chat { scrollbar-width: thin; scrollbar-color: gray lightgray; }
  #chatBox { width: 100%; margin: 0px; padding: 0px; text-align: center; background-color: red; border: 1px solid black; }
  #currentRoomInfo, #mobileCurrentRoomInfo { display: block; width: 100%; padding: 16px; text-align: center; user-select: none; color: white; background-color: red; }
  #mobileCurrentRoomInfo { display: none; }
  #messages { list-style-type: none; margin: 0; padding: 0; }
  /* #messages > li { padding: 20px; } */
  /* #messagesEven { background: white; }
  #messagesOdd { background: #efefef; } */
  #buttonLeaveRoomTest { margin-left: -4px; }
  #inputCreateRoom { width: 100% }
  #toggleMenu { margin: 0px; padding: 16px; padding-left: 20px; padding-right: 20px; user-select: none; text-align: left; width: 100%; color: white; background-color: red; }
  #flex { display: inline-flex; position: absolute; height: 94vh; width: 30vw; flex-wrap: wrap; align-content: flex-start; top: 0; right: 0; background-color: white; }
  /* #flex > div { display: block; width: 100%; border: 1px solid black } */
  #buttonSend { display: inline-block; margin: 0px; margin-bottom: 10px; width: 90%; height: 40px; border: 0px; }
  #info, #usersList, #createRoom, #addUsername, #allRoomsList { display: none; }
  #allRoomsList { display: block; width: 70vw; }

  #infoTitle, #allUsersTitle, #allRoomsTitle, #createRoomTitle, #addUsernameTitle { display: none; margin: 0px; padding: 7px; font-weight: bold; user-select: none; border: 1px solid black; background-color: white; }
  #allRoomsTitle { display: none; }

  #modal {  
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); background-color: red;
    border: 1px solid black; 
    }
  #mobileMenuCurrentRoom, #mobileMenuAllRooms { display: none; }
  #mobileMenuHide, #mobileMenuShow { display: none; }
  #allUsersTitle { display: none; }
  #inputCreateRoom, #inputAddUser, #buttonCreateRoomTest, #buttonAddUserTest { width: calc(100% - 8px); font-weight: normal; font-size: 17px; }
  #createRoom, #addUsername, #allRoomsList, #info { padding: 0px; background-color: gray; }

  #pause-video, #unmute-video { display: none; }
  #iframeContainer { width: 100%; height: 100%; }
  #sync-video-input, #load-video-input { width: 100px; padding: 10px; }
  #player { display: block; width: 49vw; height: 49vh; margin: auto; margin: 30px 30px 4.9px 30px; margin-left: 10vw; padding: 0px; overflow: none; background-color: black; }
  #videoPlayButtonOverlay { display: block; position: absolute; left: 9.5vw; top: 71px; height: 51vh; width: 50vw; border: none; background-color: #ff000030; }
  #videoPlayerControlButtons { display: inline-flex; position: absolute; left: 10vw; }

  /* classes */
  .buttonJoin, .buttonLeave { padding: 3px; overflow-wrap: break-word; font-weight: normal; font-size: 17px; }
  .buttonClient, .buttonUser, .buttonNamespace { width: 100%; }
  .buttonCreate, #buttonAddUserTest, #buttonCreateRoomTest { width: calc(100%); border-color: lightgray; }
  .buttonUser {}
  .buttonNamespace {}
  .errorMessage { display: none; padding: 20px; width: auto; background-color: red; border: 7px solid black; }
  .videoPlayerControlButton { display: block; max-height: 17px; min-width: 100px; padding: 10px; text-align: center; font-size: 14px; background-color: lightgray; border: 1px solid black; }

  /*** mobile ***/
  /* @media screen and (min-device-width : 176px) and  (max-device-width : 360px) {
    body {background: green; } 
  } */

  @media screen and (max-width: 1300px) {
    #home {
        background-color: transparent;
        font-size: 240%;
        overflow: scroll;
    }

    /* #flex > div { display: block; width: 100%; border: 1px solid black } */
    #flex > div { width: 100%; border: 1px solid black }

    #menu { height: auto; }

    #menu > div { padding: 20px; }

    #mobileMenuCurrentRoom, #mobileMenuAllRooms { display: block; }

    #inputChatMessage { display: inline-block; height: 71px; width: 83%; margin: 1px; margin-top: 6px; padding: 0px; padding-left: 10px; padding-right: 10px; font-size: 40px; }

    #chat { height: 66%; }
    
    #currentRoomInfo, #allRoomsTitle { display: none; }

    #mobileCurrentRoomInfo { padding: 30px; display: block; }

    #buttonSend { height: 72px; margin-left: -14px; padding: 10px; font-size: 40px; }

    .buttonLeave, .buttonJoin { min-height: 100px; min-width: 400px; padding: 10px; font-size: 40px; overflow-wrap: break-word; }

    #mobileMenuAllRooms { display: flex; margin: 0px; padding: 0px; padding-left: 20px; padding-right: 20px; overflow-x: scroll; background-color: gray; }

    #mobileMenuAllRooms > div { position: relative; display: inline-flex; margin: 30px 20px 30px 20px }

    #createRoom, #addUsername { display: block; }
    #createRoom, #addUsername > button, input { display: block; margin: 0px; padding: 0px; font-size: 40px; }

    #buttonCreateRoomTest { display: inline-block; font-size: 40px; }

    #createRoom, #addUsername { display: none; background-color: gray; }

    #inputCreateRoom, #buttonCreateRoomTest, #inputAddUser, #buttonAddUserTest { height: 60px; }

    #inputCreateRoom, #inputAddUser { padding-left: 20px; padding-right: 20px; width: calc(96% - 6px); font-size: 40px; }
    
    #buttonCreateRoomTest, #buttonAddUserTest { width: calc(100% + 2px); }

    .errorMessage { display: none; padding: 20px; width: calc(94% + 4px); background-color: red; border: 7px solid black; }

    #chatBox { position: fixed; bottom: 0px; height: 90px; padding-top: 10px; padding-bottom: 10px; }

    #allRoomsList { display: none; }
    
    #info { background-color: gray; }

    #infoTitle, #allUsersTitle, #allRoomsTitle, #createRoomTitle, #addUsernameTitle { border: 2px solid black; }

    #messages > li { padding: 40px; }

  }
</style>
