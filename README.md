### Summary
- Name: Video Relax Frontend
- Description: Watch videos and relax
- LoC: ~3600
- [Logo](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/public/img/icons/android-chrome-192x192.png)
- Features:
- \--- Watch Videos Together
- \--- Chat
- \--- Video Player Controls (Play, Restart, Jump, Mute, Sync, Previous, Next, Load, Random, Resync) 
- \--- Join Default Rooms
- \--- Create Custom Room
- \--- Fullscreen
- \--- Keybinds

### Technologies
- [Vue](https://vuejs.org)
- [Socket.io](https://socket.io)

### Code
- [File - Main](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue)
- [File - Vuex](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/store/index.js)
- [File - Router](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/router/index.js)
###
- [UI Element - Settings](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L8-L112)
- [UI Element - Video Player Controls](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L178-L219)
- [UI Element - Video Player](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L146-L163)
- [UI Element - Video Info](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L167-L175)
- [UI Element - Chat](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L277-L293)
###
- [General - onMounted](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L362-L411)
- [General - onUpdated](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L414-L439)
- [General - Chat Send Message](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L681-L699)
- [General - Chat Format Message](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L2199-L2251)
- [General - Keybinds Enable](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L2072-L2141)
- [General - Keybinds Disable](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L2144-L2148)
###
- [Room - Join](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L787-L827)
- [Room - Create](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L702-L784)
###
- [Socket - On Update Info](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L2366-L2520)
- [Socket - On Video Command](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L2522-L2745)
###
- [Video - Fullscreen](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1587-L1616)
- [Video - Quality Changed](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L501-L525)
- [Video - State Changed](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L529-L570)
- [Video - Current Time Info](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L574-L667)
- [Video - Load Start](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L872-L910)
- [Video - Load Custom](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L913-L974)
- [Video - Volume Changed](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1517-L1524)
- [Video - Play](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L980-L1005)
- [Video - Pause](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1009-L1034)
- [Video - Sync](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1038-L1084)
- [Video - Mute](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1088-L1108)
- [Video - Unmute](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1112-L1132)
- [Video - Restart](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1135-L1161)
- [Video - Load URL](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1165-L1245)
- [Video - Next](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1249-L1278)
- [Video - Previous](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1282-L1311)
- [Video - Resync 1](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1316-L1449)
- [Video - Resync 2](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1553-L1568)
- [Video - Jump](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1453-L1513)
- [Video - Random](https://github.com/Sinc0/VueVideoRelaxFrontend/blob/master/src/components/ComponentHome.vue#L1527-L1549)