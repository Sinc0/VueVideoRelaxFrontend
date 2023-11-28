<template>
  <div id="ComponentInstall">
    <div id="installPWA">
            <!-- debugging -->
            <!-- <div v-if="windowNavigator"> -->
                <!-- <div>User Agent:{{windowNavigator.userAgent}}</div> -->
                <!-- <div>Vendor: {{windowNavigator.vendor}}</div> -->
                <!-- <div>Platform: {{windowNavigator.platform}}</div> -->
                <!-- <div>App: {{appTitle}}</div> -->
            <!-- </div> -->

            <!-- detect user device -->
            <!-- <div id="detectDevice">
              <span id="deviceDesktop">
                  <a class="deviceInfoText" href="/temp/temp_installer_windows.msi" v-if="windowNavigator.platform.toLowerCase().includes('win')">Desktop · Windows · {{windowNavigator.platform}}</a>
                  <a class="deviceInfoText" href="/temp/temp_installer_mac.dmg" v-else-if="windowNavigator.platform.toLowerCase().includes('apple')">Desktop · macOS  · {{windowNavigator.platform}}</a>
                  <a class="deviceInfoText" href="/temp/temp_installer_mac.dmg" v-else-if="windowNavigator.platform.toLowerCase().includes('mac')">Desktop · macOS · {{windowNavigator.platform}}</a>
                  <a class="deviceInfoText" href="/temp/temp_installer_linux.deb" v-else-if="windowNavigator.platform.toLowerCase().includes('linux')">Desktop · Linux · {{windowNavigator.platform}}</a>
                  <span class="deviceInfoText" v-else>Desktop · {{windowNavigator.platform}} · Undetected</span>
              </span>

              <span id="deviceMobile">
                <a class="deviceInfoText" href="/temp/temp_installer_android.apk" v-if="windowNavigator.platform.toLowerCase().includes('android')">Mobile · Android · {{windowNavigator.platform}}</a>
                <a class="deviceInfoText" href="/temp/temp_installer_android.apk" v-else-if="windowNavigator.platform.toLowerCase().includes('linux')">Mobile · Android · {{windowNavigator.platform}}</a>
                <span class="deviceInfoText" v-else-if="windowNavigator.platform.toLowerCase().includes('apple')">Mobile · iOS · {{windowNavigator.platform}}</span>
                <span class="deviceInfoText" v-else-if="windowNavigator.platform.toLowerCase().includes('iphone')">Mobile · iOS · {{windowNavigator.platform}}</span>
                <span class="deviceInfoText" v-else-if="windowNavigator.platform.toLowerCase().includes('ipad')">Mobile · iOS · {{windowNavigator.platform}}</span>
                <span class="deviceInfoText" v-else>Mobile · Undetected · {{windowNavigator.platform}}</span>
              </span>
            </div> -->

            <!-- Apple -->
            <div id="browserInstallInstructions" class="browserInstallPWA">
              <div id="appleDevices">
                  <div id="safariMobile" class="mobile">
                    <img class="browser-logo-img" src="/logos/safari_logo.png"/>
                    <b class="browserName">Safari</b>
                    <div class="installStep">Step 1: Wait 30 Seconds</div>
                    <div class="installStep">Step 2: Press Menu Button</div>
                    <div class="installStep">Step 3: Press Add to Home Screen </div>
                    <div class="installStep">Step 4: Press Add</div>
                  </div>
              </div>

              <!-- PWAs -->
              <div id="undetectedDevices">
                <p><b>Select Browser</b></p>

                <!-- Chrome -->
                <img class="browser-logo-img" src="/logos/chrome-logo.svg" v-on:click="displayInstallInstructions('chrome')"/>
                <div id="chromeInstallInstructions" class="installInstructions">
                    <b class="browserName">Chrome</b>
                    <div id="chromeDesktop" class="desktop">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Press Menu</div>
                      <div class="installStep">Step 3: Press Install {{appTitle}}...</div>
                      <div class="installStep">Step 4: Press Install</div>
                    </div>
                    <div id="chromeMobile" class="mobile">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Press Menu</div>
                      <div class="installStep">Step 3: Press Install app</div>
                      <div class="installStep">Step 4: Press Install</div>
                    </div>
                </div>
  
                <!-- Edge -->
                <img class="browser-logo-img" src="/logos/edge_logo.png" v-on:click="displayInstallInstructions('edge')"/>
                <div id="edgeInstallInstructions" class="installInstructions">
                    <b class="browserName">Edge</b>
                    <div id="edgeDesktop" class="desktop">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Press Menu Button</div>
                      <div class="installStep">Step 3: Press Apps</div>
                      <div class="installStep">Step 4: Press Install this site as an app</div>
                      <div class="installStep">Step 5: Press Install</div>
                      <div class="installStep">Step 6: Press Create Desktop shortcut</div>
                      <div class="installStep">Step 7: Press Allow</div>
                    </div>
                    <div id="edgeMobile" class="mobile">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Press Menu Button</div>
                      <div class="installStep">Step 3: Expand Menu by Swiping Up</div>
                      <div class="installStep">Step 4: Press Add to phone</div>
                      <div class="installStep">Step 5: Press Install</div>
                      <div class="installStep">Step 6: Press ADD</div>
                    </div>
                </div>
  
                <!-- Brave -->
                <img class="browser-logo-img" src="/logos/brave_logo.png" v-on:click="displayInstallInstructions('brave')"/>
                <div id="braveInstallInstructions" class="installInstructions">
                    <b class="browserName">Brave</b>
                    <div id="braveDesktop" class="desktop">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Press Menu Button</div>
                      <div class="installStep">Step 3: Press Install {{appTitle}}...</div>
                      <div class="installStep">Step 4: Press Install</div>
                    </div>
                    <div id="braveMobile" class="mobile">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Press Menu Button</div>
                      <div class="installStep">Step 3: Press Install app</div>
                      <div class="installStep">Step 4: Press Install</div>
                      <div class="installStep">Step 5: Press ADD</div>
                    </div>
                </div>
  
                <!-- Vivaldi -->
                <img class="browser-logo-img" src="/logos/vivaldi_logo.png" v-on:click="displayInstallInstructions('vivaldi')"/>
                <div id="vivaldiInstallInstructions" class="installInstructions">
                    <b class="browserName">Vivaldi</b>
                    <div id="vivaldiDesktop" class="desktop">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Right Click on Tab</div>
                      <div class="installStep">Step 3: Press Install {{appTitle}}...</div>
                      <div class="installStep">Step 4: Press Install</div>
                    </div>
                    <div id="vivaldiMobile" class="mobile">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Press Menu</div>
                      <div class="installStep">Step 3: Press Install app</div>
                      <div class="installStep">Step 4: Press Install</div>
                      <div class="installStep">Step 5: Press ADD</div>
                    </div>
                </div>

                <!-- Firefox -->
                <img class="browser-logo-img" src="/logos/firefox_logo.png" v-on:click="displayInstallInstructions('firefox')"/>
                <div id="firefoxInstallInstructions" class="installInstructions">
                    <b class="browserName">Firefox</b>
                    <div id="firefoxDesktop" class="desktop">
                        <span>Not supported</span>
                    </div>
                    <div id="firefoxMobile" class="mobile">
                        <div class="installStep">Step 1: Wait 30 Seconds</div>
                        <div class="installStep">Step 2: Press Menu</div>
                        <div class="installStep">Step 3: Press Install</div>
                        <div class="installStep">Step 4: Press ADD</div>
                    </div>
                </div>

                <!-- Safari -->
                <img class="browser-logo-img" src="/logos/safari_logo.png" v-on:click="displayInstallInstructions('safari')"/>
                <div id="safariInstallInstructions" class="installInstructions">
                    <b class="browserName">Safari</b>
                    <div id="safariDesktop" class="desktop">
                      <span>Not supported</span>
                    </div>
                    <div id="safariMobile" class="mobile">
                      <div class="installStep">Step 1: Wait 30 Seconds</div>
                      <div class="installStep">Step 2: Press Share Button</div>
                      <div class="installStep">Step 3: Press Add to Home Screen </div>
                      <div class="installStep">Step 4: Press Add</div>
                    </div>
                </div>

                <!-- cancel -->
                <a id="cancel" href="/">Cancel</a>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import {ref, reactive, computed, onUpdated, onMounted} from 'vue'

export default {
    setup(){
        //variables
        var windowNavigator = window.navigator
        var appTitle = document.title
        // var deferredPrompt = null


        //event listeners
        // window.addEventListener('beforeinstallprompt', function (e) { //automatic install pwa prompt
        //     console.log("beforeinstallprompt event added")
        //     deferredPrompt = e; 
        //     showAddToHomeScreen(); 
        // }); 


        //functions
        function displayInstallInstructions(browserName)
        {   
            //elements
            let browser = document.getElementById(browserName + "InstallInstructions")

            //update elements
            if(browser.style.display == "none" || browser.style.display == "") { browser.style.display = "block" }
            else if(browser.style.display == "block") { browser.style.display = "none" }
        }


        // function showAddToHomeScreen() 
        // { 
        //     console.log("showAddToHomeScreen")
        //     // var installApp = document.querySelector("installApp"); 
        //     var installApp = document.getElementById("installPWALogos"); 
            
        //     installApp.style.display = "block"; 
        //     installApp.addEventListener("click", addToHomeScreen); 
        // } 


        // function addToHomeScreen() { 
        //     console.log("addToHomeScreen")
        //     // var installApp = document.querySelector("installApp"); 
        //     // hide our user interface that shows our A2HS button 
        //     // installApp.style.display = 'none'; 

        //     // if(deferredPrompt.prompt() != null) 
        //     // {
        //         // Show the prompt 
        //         deferredPrompt.prompt()
                
        //         // Wait for the user to respond to the prompt 
        //         deferredPrompt.userChoice.then(
        //             function(choiceResult){ 
        //                 if (choiceResult.outcome === 'accepted') { console.log('User accepted install prompt'); } 
        //                 else { console.log('User dismissed install prompt'); }

        //                 deferredPrompt = null;
        //             }
        //         ); 
        //     // }
        //     // else if(deferredPrompt.prompt() == null) { console.log("app is already installed")}
        // }


        return {
            //variables
            windowNavigator,
            appTitle,

            //functions
            displayInstallInstructions
        }
    }
}
</script>

<style scoped>
/*** scrollbar ***/
#ComponentInstall::-webkit-scrollbar { height: 0px; width: 0px; }
#installPWA::-webkit-scrollbar { height: 0px; width: 0px; }


/*** ids ***/
#ComponentInstall { display: none;}
#installPWA 
{ 
  position: fixed; 
  display: block;
  top: 0px;
  height: 100vh; 
  width: 100vw;
  margin: 0px;
  padding: 0px;
  z-index: 10; 
  overflow-y: scroll; 
  text-align: left; 
  color: white;
  background-color: #101010;
}
#installProblems 
{ 
    display: none; 
    position: fixed; 
    width: 100%; 
    bottom: 0px; 
    margin: 0px; 
    padding: 0px 0px 10px 0px; 
    font-weight: bold; 
    text-align: center; user-select: none;
}
#installPWALogos { display: none; padding: 10px 0px 0px 0px; text-align: center; }
#browserInstallInstructions { display: block; }
#installLoadingText { position: absolute; width: 100%; top: 43vh; text-align: center; font-weight: bold; }
#deviceDesktop { display: block; text-align: center; }
#deviceMobile { display: none; text-align: center; }
#appleDevices { display: none; margin: 0px; }
#detectDevice { display: block; margin: 20px 0px 0px 0px; }
#undetectedDevices { display: block; }
#cancel { display: block; margin-top: 20px; font-weight: bold; text-decoration: none; color: white; }


/*** classes ***/
.logo { margin: 0px 0px 20px 0px; }  
.browserInstallPWA { margin: 0px 0px 20px 0px; text-align: center; }
.desktop { display: block; }
.mobile { display: none; }
.installInstructions {
    display: none;
    width: fit-content;
    margin: auto;
    text-align: left;
    user-select: none;
}
.browser-logo-img { display: block; height: 90px; margin: auto; margin-top: 20px; margin-bottom: 4px; user-select: none; }
.deviceInfoText { text-decoration: none; color: white; font-weight: bold; }
.browserName { display: block; padding: 0px; text-align: center; margin: 8px 0px 0px 0px; }
.installStep { margin-top: 3px; }


/*** mobile ***/
@media screen and (max-width: 1000px) {
  #installPWALogos { padding: 10px 0px 0px 0px; text-align: center; }
  #deviceDesktop { display: none; }
  #deviceMobile { display: block; }

  .desktop { display: none; }
  .mobile { display: block; }
  .browserInstallPWA { margin: 0px 0px 20px 0px; }
}
</style>