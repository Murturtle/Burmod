import { clientName } from "./util/clientName.ts";
import { logToConsole } from "./util/consoleLogger";
import { logToChat } from "./util/chatLogger";
import * as assets from "./assets";
import * as ui from "./gui.ts";

logToConsole("Init...");
logToChat("Init...");

logToChat("Loading modules...");

import { modules } from "./util/actualModules";

ModAPI.require("player");

addEventListener("keydown", function(e) {
  if (
    e.location == KeyboardEvent.DOM_KEY_LOCATION_RIGHT &&
    e.key == "Shift" &&
    !ui.isOpen()
  ) {
    ui.open();
  }
  for (let key in modules) {
    if (modules.hasOwnProperty(key)) {
      modules[key].function.onKey(e);
    }
  }
});

ModAPI.addEventListener("key", function(e) {
  if (e.key == 54) {
    ui.destroy;
  }
  for (let key in modules) {
    if (modules.hasOwnProperty(key)) {
      modules[key].function.onMCKey(e);
    }
  }
});

ModAPI.addEventListener("update", function() {
  for (let key in modules) {
    if (modules.hasOwnProperty(key)) {
      modules[key].function.onUpdate();
    }
  }
});

const styleSheet = document.styleSheets[0];

styleSheet.insertRule(`
::-webkit-scrollbar {
  width: 10px;
}`);

styleSheet.insertRule(`
::-webkit-scrollbar-track {
  background: rgba(0,0,0,0);
}`);

styleSheet.insertRule(`
::-webkit-scrollbar-thumb {
background: rgba(100,100,100,0.5);
filter: blur(4px);
}`);

styleSheet.insertRule(`@keyframes rgb {
  0% { box-shadow: 0px 0px 40px rgba(255, 0, 0,0.75); }
  16% { box-shadow: 0px 0px 40px rgba(255, 255, 0,0.75); }
  33% { box-shadow: 0px 0px 40px rgba(0, 255, 0,0.75); }
  50% { box-shadow: 0px 0px 40px rgba(0, 255, 255,0.75); }
  66% { box-shadow: 0px 0px 40px rgba(0, 0, 255,0.75); }
  83% { box-shadow: 0px 0px 40px rgba(255, 0, 255,0.75); }
  100% { box-shadow: 0px 0px 40px rgba(255, 0, 0,0.75); }
}`);

function customUI() {
  //@ts-ignore
  if (ModAPI.mcinstance.$currentScreen != null) {
    if (
      ModAPI.currentScreen().startsWith("net.minecraft.client.gui.GuiMainMenu")
    ) {
      //@ts-ignore
      var singlePlayer =
        ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[0];
      //@ts-ignore
      var multiPlayer =
        ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[1];
      //@ts-ignore
      var mods = ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[2];
      //@ts-ignore
      var forkOnGitHub =
        ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[3];
      //@ts-ignore
      var options =
        ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[4];
      //@ts-ignore
      var editProfile =
        ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[5];
      //@ts-ignore
      var launguage =
        ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[6];
      //@ts-ignore
      var currentScreen = ModAPI.mcinstance.$currentScreen;

      var buttonDistance = 42;
      var buttonDistanceRel = 22;
      var buttonSpacing = 2;
      var buttonWidth = 100;
      var enc = new TextEncoder();
      //options
      options.$width13 = buttonWidth;
      options.$yPosition = currentScreen.$height7 - buttonDistance;
      //mods
      mods.$width13 = buttonWidth / 2;
      mods.$xPosition0 = options.$xPosition0 - buttonWidth / 2 - buttonSpacing;
      mods.$yPosition = currentScreen.$height7 - buttonDistance;
      //SinglePlayer
      singlePlayer.$width13 = buttonWidth;
      singlePlayer.$yPosition = options.$yPosition - buttonDistanceRel;
      //MultiPlayer
      multiPlayer.$width13 = buttonWidth + launguage.$width13 + buttonSpacing;
      multiPlayer.$xPosition0 =
        singlePlayer.$xPosition0 + buttonWidth + buttonSpacing;
      multiPlayer.$yPosition = options.$yPosition - buttonDistanceRel;
      //Edit profile
      editProfile.$width13 = buttonWidth;
      editProfile.$yPosition = currentScreen.$height7 - buttonDistance;
      //Lang
      launguage.$xPosition0 =
        editProfile.$xPosition0 + editProfile.$width13 + buttonSpacing;
      launguage.$yPosition = currentScreen.$height7 - buttonDistance;
      //Fork
      forkOnGitHub.$width13 = buttonWidth / 2;
      forkOnGitHub.$yPosition = mods.$yPosition - buttonDistanceRel;
      forkOnGitHub.$xPosition0 = mods.$xPosition0;
      forkOnGitHub.$displayString.$characters.data = enc.encode("Fork");

      currentScreen.$openGLWarning1.$characters.data = enc.encode("");
      //currentScreen.$splashText.$characters.data = enc.encode("Justin is the sped version of Daniel")

      if (document.getElementById("serverpinglist") == null) {
        var servers = document.createElement("div");
        servers.id = "serverpinglist";

        var pings = [
          {
            name: "Aeon Network",
            address: "wss://aeon-network.net",
          },
          {
            name: "Arch MC",
            address: "wss://mc.arch.lol",
          },
          {
            name: "Hellium Network",
            address: "wss://helltech.cc",
          },
          {
            name: "Clever Teaching",
            address: "wss://clever-teaching.com",
          },
          {
            name: "Zyth",
            address: "wss://mc.zyth.me",
          },
        ];

        servers.style.overflowY = "scroll";
        servers.style.wordBreak = "break-all";
        servers.style.position = "fixed";
        servers.style.top = "10%";
        servers.style.left = "2.5%";
        servers.style.width = "15%";
        servers.style.height = "80%";
        servers.style.color = "rgba(255,255,255,1)";
        servers.style.backgroundColor = "rgba(0,0,0,0.5)";
        servers.style.borderRadius = "15px";
        servers.style.fontFamily = "monospace";

        pings.forEach(function(e) {
          const cur = document.createElement("div");
          cur.style.margin = "10px";
          servers.appendChild(cur);

          const curh2 = document.createElement("div");
          curh2.style.fontSize = "20px";
          curh2.innerText = e.name;
          cur.appendChild(curh2);

          const curserver = document.createElement("div");
          curserver.innerText = e.address;
          cur.appendChild(curserver);

          const playerinfo = document.createElement("div");
          playerinfo.innerText = "not connected";
          playerinfo.style.color = "red";
          playerinfo.style.fontWeight = "bold";
          playerinfo.style.fontSize = "16px";
          playerinfo.style.width = "100%";

          cur.appendChild(playerinfo);

          const testwebsocket = new WebSocket(e.address);
          const timeping = Date.now();

          testwebsocket.onopen = () => {
            testwebsocket.send("Accept: MOTD");
          };

          testwebsocket.onmessage = (e) => {
            if (e.data) {
              if (typeof e.data === "string") {
                try {
                  var dat = JSON.parse(e.data);
                  if (dat["type"].toLowerCase() === "motd") {
                    playerinfo.innerText =
                      dat["data"]["online"] + "/" + dat["data"]["max"];
                    playerinfo.style.color = "lime";

                    const ping = document.createElement("div");
                    ping.style.display = "inline-block";
                    ping.style.float = "right";
                    ping.innerText += Date.now() - timeping + "ms";
                    playerinfo.appendChild(ping);

                    console.log(dat);
                  }
                } catch (err) {
                  console.log(err);
                }
              }
            }
          };
        });
        document.body.appendChild(servers);
      }
    } else {
      if (document.getElementById("serverpinglist") != null) {
        document.getElementById("serverpinglist").remove();
      }
    }
  }
}

var custui = setInterval(customUI, 50);

//Custom Cursor
document.body.getElementsByTagName("canvas")[0].style.cursor =
  'url("' + assets.cursor + '"), auto';
document.body.style.cursor = 'url("' + assets.cursor + '"), auto';

function destroy() {
  clearInterval(custui);
  ui.destroy();
  document.body.getElementsByTagName("canvas")[0].style.cursor = "auto";
  document.body.style.cursor = "auto";
  if (document.getElementById("serverpinglist") != null) {
    document.getElementById("serverpinglist").remove();
  }
}
