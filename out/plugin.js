(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/util/clientName.ts
  var clientName = "burmod";

  // src/util/consoleLogger.ts
  function logToConsole(msg) {
    console.log(`[${clientName}] ${msg}`);
  }

  // src/util/chatLogger.ts
  function logToChat(msg) {
    ModAPI.displayToChat({ msg: `\xA75[${clientName}]\xA7r ${msg}` });
  }

  // src/assets.ts
  var cursor = "data:image/png;base64,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";

  // src/cheats/flight.ts
  var flight_exports = {};
  __export(flight_exports, {
    init: () => init,
    settings: () => settings
  });
  var settings = [
    {
      name: "Mode",
      type: "List",
      modes: ["Abilities", "Packet"],
      current: 0
    }
  ];
  function init(parent) {
    parent.onUpdate = function() {
      if (parent.getEnabled()) {
        if (!ModAPI.player.capabilities.isFlying) {
          ModAPI.player.capabilities.isFlying = true;
          ModAPI.player.reload();
        }
      }
    };
    parent.onEnable = function() {
      if (ModAPI.player != null) {
        if (ModAPI.player.capabilities != null) {
          ModAPI.player.capabilities.isFlying = true;
          ModAPI.player.reload();
        }
      }
    };
    parent.onDisable = function() {
      if (ModAPI.player != null) {
        if (ModAPI.player.capabilities != null) {
          ModAPI.player.capabilities.isFlying = false;
          ModAPI.player.reload();
        }
      }
    };
  }

  // src/cheats/step.ts
  var step_exports = {};
  __export(step_exports, {
    init: () => init2
  });
  function init2(parent) {
    parent.settings = [
      {
        name: "Height",
        type: "Slider",
        min: 1,
        max: 6,
        step: 0.5,
        current: 1.5
      }
    ];
    parent.onUpdate = function() {
      if (parent.getEnabled()) {
        if (ModAPI.player.stepHeight != parent.settings[0].current) {
          ModAPI.player.stepHeight = parent.settings[0].current;
          ModAPI.player.reload();
        }
      }
    };
    parent.onEnable = function() {
      if (ModAPI.player != null) {
        ModAPI.player.stepHeight = parent.settings[0].current;
        ModAPI.player.reload();
      }
    };
    parent.onDisable = function() {
      if (ModAPI.player != null) {
        ModAPI.player.stepHeight = 0.6000000238418579;
        ModAPI.player.reload();
      }
    };
  }

  // src/cheats/autofish.ts
  var autofish_exports = {};
  __export(autofish_exports, {
    init: () => init3
  });
  function init3(parent) {
    var catchfish = false;
    var catchagain = false;
    parent.onUpdate = function() {
      if (parent.getEnabled()) {
        if (catchagain && ModAPI.player.fishEntity == null) {
          ModAPI.rightClickMouse();
          catchagain = false;
        }
        if (ModAPI.player.fishEntity != null) {
          if (ModAPI.player.fishEntity.ticksExisted < 100 && catchfish == false) {
            catchfish = true;
          }
          if (ModAPI.player.fishEntity.isInWater() && ModAPI.player.fishEntity.ticksExisted > 100 && Math.ceil(ModAPI.player.fishEntity.y) - ModAPI.player.fishEntity.y >= 0.3) {
            if (catchfish) {
              catchfish = false;
              ModAPI.rightClickMouse();
              catchagain = true;
            }
          }
        }
      }
    };
    parent.onEnable = function() {
      catchfish = true;
    };
  }

  // src/cheats/servercrasher.ts
  var servercrasher_exports = {};
  __export(servercrasher_exports, {
    init: () => init4
  });
  function init4(parent) {
    parent.crshInter = null;
    parent.settings = [
      {
        name: "PPS",
        type: "Slider",
        min: 20,
        max: 2e4,
        step: 10,
        current: 5e3
      }
    ];
    function crash() {
      if (ModAPI.player != null) {
        for (let i = 0; i < parent.settings[0].current; i++) {
          ModAPI.player.swingItem();
        }
      } else {
        parent.disable();
      }
    }
    parent.onEnable = function() {
      parent.crshInter = setInterval(crash, 1e3);
    };
    parent.onDisable = function() {
      if (parent.crshInter != null) {
        clearInterval(parent.crshInter);
      }
    };
  }

  // src/cheats/rgbclouds.ts
  var rgbclouds_exports = {};
  __export(rgbclouds_exports, {
    init: () => init5
  });
  function init5(parent) {
    function hsl2rgb(h, s, l) {
      s /= 100;
      l /= 100;
      const k = (n) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [255 * f(0), 255 * f(8), 255 * f(4)];
    }
    ;
    parent.onUpdate = function() {
      if (parent.getEnabled()) {
        var rgb = hsl2rgb(Date.now() / 10 % 360, 100, 50);
        var red = rgb[0];
        var green = rgb[1];
        var blue = rgb[2];
        var alpha = 255;
        ModAPI.mcinstance.$theWorld.$cloudColour = BigInt((red << 24) + (green << 16) + (blue << 8) + alpha);
      }
    };
    parent.onDisable = function() {
      if (ModAPI.mcinstance.$theWorld != null) {
        var rgb = hsl2rgb(0, 0, 100);
        var red = rgb[0];
        var green = rgb[1];
        var blue = rgb[2];
        var alpha = 255;
        ModAPI.mcinstance.$theWorld.$cloudColour = BigInt((red << 24) + (green << 16) + (blue << 8) + alpha);
      }
    };
  }

  // src/util/actualModules.ts
  function template(mod) {
    this.enabledDONOTUSE = false;
    this.init = function() {
    };
    this.onEnable = function() {
    };
    this.onDisable = function() {
    };
    this.enable = function() {
      this.enabledDONOTUSE = true;
      this.onEnable();
      refreshModules();
    };
    this.disable = function() {
      this.enabledDONOTUSE = false;
      this.onDisable();
      refreshModules();
    };
    this.onKey = function(e) {
    };
    this.onMCKey = function(e) {
    };
    this.getEnabled = function() {
      return this.enabledDONOTUSE;
    };
    this.toggle = function() {
      this.enabledDONOTUSE = !this.enabledDONOTUSE;
      if (this.enabledDONOTUSE) {
        this.onEnable();
      } else {
        this.onDisable();
      }
    };
    this.onUpdate = function() {
    };
    this.alert = function() {
      alert();
    };
    this.settings = [];
    mod.init(this);
  }
  var categories = {
    movement: "Movement",
    player: "Player",
    render: "Render",
    fun: "Fun"
  };
  var modules = {
    flight: {
      name: "Flight",
      function: new template(flight_exports),
      category: "Movement",
      description: "Allows you to fly"
    },
    step: {
      name: "Step",
      function: new template(step_exports),
      category: "Movement",
      description: "Allows you to step"
    },
    autofish: {
      name: "AutoFish",
      function: new template(autofish_exports),
      category: "Player",
      description: "Automatically casts and reels rod"
    },
    servercrasher: {
      name: "Server Crasher",
      function: new template(servercrasher_exports),
      category: "Exploit",
      description: "Sends just a few swing packets ;)"
    },
    rgbclouds: {
      name: "RGB Clouds",
      function: new template(rgbclouds_exports),
      category: "Render",
      description: "Clouds go weeee"
    }
  };

  // src/gui.ts
  function destroy() {
    if (document.getElementById("ui") != null) {
      document.getElementById("ui").remove();
    }
  }
  var container;
  function isOpen() {
    if (document.getElementById("ui") == null) {
      return false;
    } else {
      return true;
    }
  }
  function setting(module) {
    var lst = module.function.settings;
    console.log(lst);
    var s = document.createElement("div");
    s.className = "setting";
    s.style.position = "absolute";
    s.style.color = "white";
    s.style.backdropFilter = "blur(8px)";
    s.style.background = "rgba(0,0,0,0.5)";
    s.style.borderRadius = "15px";
    s.style.padding = "15px";
    s.style.fontFamily = "monospace";
    s.style.overflowY = "hidden";
    s.style.animation = "rgb 4s linear infinite";
    s.style.width = "15%";
    s.style.height = "50%";
    s.style.top = "100px";
    s.style.left = "100px";
    s.style.zIndex = "1000";
    s.style.backdropFilter = "blur(8px)";
    s.style.resize = "both";
    const title = document.createElement("div");
    title.innerText = module.name;
    title.style.fontSize = "22px";
    s.appendChild(title);
    var close = document.createElement("div");
    close.innerText = "X";
    close.style.fontSize = "28px";
    close.style.position = "absolute";
    close.style.right = "15px";
    close.style.top = "10px";
    close.style.cursor = "pointer";
    close.onclick = function() {
      s.remove();
    };
    s.appendChild(close);
    document.body.appendChild(s);
    for (let i in lst) {
      if (lst.hasOwnProperty(i)) {
        var bg = document.createElement("div");
        bg.style.background = "rgba(100,100,100,0.5)";
        bg.style.margin = "5px";
        bg.style.padding = "5px";
        bg.style.borderRadius = "10px";
        s.appendChild(bg);
        if (lst[i].type == "List") {
          var selDesc = document.createElement("div");
          selDesc.style.fontSize = "20px";
          selDesc.innerText = `${lst[i].name} - ${lst[i].current}`;
          bg.appendChild(selDesc);
          var sel = document.createElement("select");
          sel.onchange = function() {
            lst[i].current = parseInt(sel.value);
            selDesc.innerText = `${lst[i].name} - ${lst[i].current}`;
          };
          for (let j in lst[i].modes) {
            if (lst[i].modes.hasOwnProperty(j)) {
              var opt = document.createElement("option");
              opt.innerText = lst[i].modes[j];
              opt.value = j + "";
            }
            bg.appendChild(sel);
          }
        } else if (lst[i].type == "Slider") {
          var slideDesc = document.createElement("div");
          slideDesc.style.fontSize = "20px";
          slideDesc.innerText = `${lst[i].name} - ${lst[i].current}`;
          bg.appendChild(slideDesc);
          var slide = document.createElement("input");
          slide.type = "range";
          slide.step = lst[i].step;
          slide.min = lst[i].min;
          slide.max = lst[i].max;
          slide.value = lst[i].current;
          slide.onchange = function() {
            lst[i].current = parseFloat(slide.value);
            slideDesc.innerText = `${lst[i].name} - ${lst[i].current}`;
          };
          bg.appendChild(slide);
        } else if (lst[i].type == "Boolean") {
          var boolDesc = document.createElement("div");
          boolDesc.style.fontSize = "20px";
          boolDesc.innerText = `${lst[i].name} - ${lst[i].toggled}`;
          bg.appendChild(boolDesc);
          var bool = document.createElement("input");
          bool.type = "checkbox";
          bool.checked = lst[i].toggled;
          bool.onchange = function() {
            lst[i].toggled = bool.checked;
            boolDesc.innerText = `${lst[i].name} - ${lst[i].toggled}`;
          };
          bg.appendChild(bool);
        }
      }
    }
  }
  function open() {
    document.exitPointerLock();
    var cn = clientName;
    const ui = document.createElement("div");
    ui.id = "ui";
    ui.style.position = "fixed";
    ui.style.width = "66%";
    ui.style.height = "66%";
    ui.style.top = document.body.clientHeight * 0.165 + "px";
    ui.style.left = document.body.clientWidth * 0.165 + "px";
    ui.style.color = "white";
    ui.style.backdropFilter = "blur(8px)";
    ui.style.background = "rgba(0,0,0,0.75)";
    ui.style.borderRadius = "15px";
    ui.style.padding = "15px";
    ui.style.boxShadow = "0px 0px 40px rgba(0, 195, 255,0.5)";
    ui.style.fontFamily = "monospace";
    ui.style.overflowY = "hidden";
    ui.style.animation = "rgb 4s linear infinite";
    document.body.appendChild(ui);
    const title = document.createElement("div");
    title.innerText = cn;
    title.style.fontSize = "24px";
    title.style.margin = "5px";
    ui.appendChild(title);
    var search = document.createElement("input");
    search.style.width = "33%";
    search.type = "text";
    search.style.border = "solid 2px rgba(200,200,200,0.5)";
    search.style.borderRadius = "10px";
    search.style.color = "rgba(255,255,255,1)";
    search.style.display = "inline-block";
    search.style.padding = "8px";
    search.style.marginLeft = "20px";
    search.style.fontSize = "22px";
    search.style.background = "rgba(50,50,50,.24)";
    search.placeholder = "\u{1F50E}\uFE0E Search";
    search.style.backdropFilter = "blur(8px)";
    title.appendChild(search);
    const close = document.createElement("div");
    close.innerText = "X";
    close.style.fontSize = "28px";
    close.style.position = "absolute";
    close.style.right = "15px";
    close.style.top = "10px";
    close.style.cursor = "pointer";
    close.onclick = function() {
      destroy();
    };
    ui.appendChild(close);
    var bar = document.createElement("div");
    bar.style.overflowX = "scroll";
    ui.appendChild(bar);
    for (let i in categories) {
      if (categories.hasOwnProperty(i)) {
        const category = document.createElement("div");
        category.innerText = categories[i];
        category.style.fontSize = "18px";
        category.style.cursor = "pointer";
        category.style.display = "inline-block";
        category.style.padding = "10px";
        category.style.margin = "5px";
        category.style.background = "rgba(100,100,100,0.5)";
        category.style.borderRadius = "5px";
        category.onclick = function() {
        };
        bar.appendChild(category);
      }
    }
    container = document.createElement("center");
    container.style.height = "100%";
    container.style.overflowY = "scroll";
    ui.appendChild(container);
    refreshModules();
  }
  function refreshModules() {
    if (isOpen()) {
      container.innerHTML = "";
      for (let i in modules) {
        if (modules.hasOwnProperty(i)) {
          var modl = document.createElement("div");
          var modltitle = document.createElement("div");
          modltitle.innerText = `${modules[i].name}`;
          modltitle.style.fontSize = "22px";
          modltitle.style.fontWeight = "bold";
          modl.appendChild(modltitle);
          modl.style.textAlign = "left";
          modl.style.display = "inline-block";
          modl.style.width = "25%";
          modl.style.height = "25%";
          modl.style.padding = "5px";
          modl.style.borderRadius = "15px";
          modl.style.margin = "10px";
          modl.style.cursor = "pointer";
          modl.style.background = "rgba(100,100,100,0.5)";
          if (modules[i].function.getEnabled()) {
            modl.style.boxShadow = "0px 0px 15px rgba(0, 255, 0,1)";
          }
          modl.onclick = function(e) {
            modules[i].function.toggle();
            refreshModules();
          };
          modl.oncontextmenu = function(e) {
            new setting(modules[i]);
            console.log(modules[i]);
          };
          container.appendChild(modl);
        }
      }
    }
  }

  // src/Main.ts
  logToConsole("Init...");
  logToChat("Init...");
  logToChat("Loading modules...");
  ModAPI.require("player");
  addEventListener("keydown", function(e) {
    if (e.location == KeyboardEvent.DOM_KEY_LOCATION_RIGHT && e.key == "Shift" && !isOpen()) {
      open();
    }
    for (let key in modules) {
      if (modules.hasOwnProperty(key)) {
        modules[key].function.onKey(e);
      }
    }
  });
  ModAPI.addEventListener("key", function(e) {
    if (e.key == 54) {
      destroy;
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
  var styleSheet = document.styleSheets[0];
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
    if (ModAPI.mcinstance.$currentScreen != null) {
      if (ModAPI.currentScreen().startsWith("net.minecraft.client.gui.GuiMainMenu")) {
        var singlePlayer = ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[0];
        var multiPlayer = ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[1];
        var mods = ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[2];
        var forkOnGitHub = ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[3];
        var options = ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[4];
        var editProfile = ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[5];
        var launguage = ModAPI.mcinstance.$currentScreen.$buttonList.$array1.data[6];
        var currentScreen = ModAPI.mcinstance.$currentScreen;
        var buttonDistance = 42;
        var buttonDistanceRel = 22;
        var buttonSpacing = 2;
        var buttonWidth = 100;
        var enc = new TextEncoder();
        options.$width13 = buttonWidth;
        options.$yPosition = currentScreen.$height7 - buttonDistance;
        mods.$width13 = buttonWidth / 2;
        mods.$xPosition0 = options.$xPosition0 - buttonWidth / 2 - buttonSpacing;
        mods.$yPosition = currentScreen.$height7 - buttonDistance;
        singlePlayer.$width13 = buttonWidth;
        singlePlayer.$yPosition = options.$yPosition - buttonDistanceRel;
        multiPlayer.$width13 = buttonWidth + launguage.$width13 + buttonSpacing;
        multiPlayer.$xPosition0 = singlePlayer.$xPosition0 + buttonWidth + buttonSpacing;
        multiPlayer.$yPosition = options.$yPosition - buttonDistanceRel;
        editProfile.$width13 = buttonWidth;
        editProfile.$yPosition = currentScreen.$height7 - buttonDistance;
        launguage.$xPosition0 = editProfile.$xPosition0 + editProfile.$width13 + buttonSpacing;
        launguage.$yPosition = currentScreen.$height7 - buttonDistance;
        forkOnGitHub.$width13 = buttonWidth / 2;
        forkOnGitHub.$yPosition = mods.$yPosition - buttonDistanceRel;
        forkOnGitHub.$xPosition0 = mods.$xPosition0;
        forkOnGitHub.$displayString.$characters.data = enc.encode("Fork");
        currentScreen.$openGLWarning1.$characters.data = enc.encode("");
        if (document.getElementById("serverpinglist") == null) {
          var servers = document.createElement("div");
          servers.id = "serverpinglist";
          var pings = [
            {
              name: "Aeon Network",
              address: "wss://aeon-network.net"
            },
            {
              name: "Arch MC",
              address: "wss://mc.arch.lol"
            },
            {
              name: "Hellium Network",
              address: "wss://helltech.cc"
            },
            {
              name: "Clever Teaching",
              address: "wss://clever-teaching.com"
            },
            {
              name: "Zyth",
              address: "wss://mc.zyth.me"
            }
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
            testwebsocket.onmessage = (e2) => {
              if (e2.data) {
                if (typeof e2.data === "string") {
                  try {
                    var dat = JSON.parse(e2.data);
                    if (dat["type"].toLowerCase() === "motd") {
                      playerinfo.innerText = dat["data"]["online"] + "/" + dat["data"]["max"];
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
  document.body.getElementsByTagName("canvas")[0].style.cursor = 'url("' + cursor + '"), auto';
  document.body.style.cursor = 'url("' + cursor + '"), auto';
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWwvY2xpZW50TmFtZS50cyIsICIuLi9zcmMvdXRpbC9jb25zb2xlTG9nZ2VyLnRzIiwgIi4uL3NyYy91dGlsL2NoYXRMb2dnZXIudHMiLCAiLi4vc3JjL2Fzc2V0cy50cyIsICIuLi9zcmMvY2hlYXRzL2ZsaWdodC50cyIsICIuLi9zcmMvY2hlYXRzL3N0ZXAudHMiLCAiLi4vc3JjL2NoZWF0cy9hdXRvZmlzaC50cyIsICIuLi9zcmMvY2hlYXRzL3NlcnZlcmNyYXNoZXIudHMiLCAiLi4vc3JjL2NoZWF0cy9yZ2JjbG91ZHMudHMiLCAiLi4vc3JjL3V0aWwvYWN0dWFsTW9kdWxlcy50cyIsICIuLi9zcmMvZ3VpLnRzIiwgIi4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBnbG9iYWwgdmFyaWFibGUgZm9yIHRoZSBjbGllbnQncyBuYW1lXG5cbmV4cG9ydCB2YXIgY2xpZW50TmFtZSA9IFwiYnVybW9kXCI7IiwgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi9jbGllbnROYW1lLnRzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1RvQ29uc29sZShtc2cpIHtcbiAgY29uc29sZS5sb2coYFske2NsaWVudE5hbWV9XSAke21zZ31gKTtcbn0iLCAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWUudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9DaGF0KG1zZykge1xuICAvL0B0cy1pZ25vcmVcbiAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogYFx1MDBBNzVbJHtjbGllbnROYW1lfV1cdTAwQTdyICR7bXNnfWB9KTtcbn0iLCAiZXhwb3J0IHZhciBjdXJzb3IgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBbENBWUFBQUJSZUlueEFBQUFBWE5TUjBJQXJzNGM2UUFBQ0ZGSlJFRlVXRWV0VjF0dlhOVVpYZnZjcnpNVE8wNUlLNFdxQ29LQ0NnalVxcFhhQ2xTa3dtL29QK2xMZWVHbEQrMUQyMVF0VWt0VnFSZW1nQ2hDSUVnaUF3MUdRSnFRZ0dNU1F4STdkbUtQNTM1dSs1eDlxYjQ5VGtVSVNoVEtrWTVtUEhPODExN3JXOS82OXJESEhyeEhTeW5oZWg0NmV6cm96SFhnZWU1UWEvMEtyNXRudklWaTZmRGh4UXhmMGNVSVVDc0Z5N1lScFFuU1ZnclhkZnRTaVgvbWRmUDc1MTU1OHhRQS9SWGhnZjM0Z2J1MUZCSmU0R1BmSFF2WXYzOEJnZStQR2lHT2xHWDVVdG5VNStxYURUenBqRk8vTi9ubHMwc1ZZMTkrQXdhd0xDdnNtZXZnb1llL2pmc2Z1QmVoNy9QdDN1RHk2dXJGalN0Yk81T2Fpek9TcWVPUlhaLzg0NytPYi80L2JJMmtrMG1HQXdmMjRTZVBQNEpISHYwK1NhcVhsMWZ4L29rejdQTGxxOGlMNGcwTjhWY282OVh1a2VOclh3SGdGQWNPN01mamp6K0tIejN5UGRpMmpmUG5MK0QwNlJWc2JlMDBlVjRjcjRWOFVXdjFKcGZOT2xRa2U1d1hDd3VMVGJjTGVUc2JNSkptV1dGcTk0TWZmaGNQZitkK2NpbUdnekZHb3pFNGI4UTBMejd0OXlkbkI4UFJKOU1zMzVCQ1hCYXg5eDlnc3RIdExwVzNCZmpZZzNmclBLK3dkKzhjSG5yNGZ0enpyVVB3QXhlKzV5TkpZc1JSb0xhMis5WEt5cXE4Y0hHajdnL0dHN3h1bGh5TC9XWHZYWGQ4Y1Bodzk3WmFadGMwSFBQemUvREFnL2ZpMEYzZk1HRHRUZ3NMQy9Ob3RWTnNiRnpWSzJkWDJZV0xhN0szUGRncHEyYko5cXlubGUyZWlYUXdpdSs4c3o1elpsNHVMdjVjQXV5bUxXUUFlVldqMDJuam5uc1A0ZURCcjhGeEhMUTdiY002YmNVZ1V3MEdJL09hWlVXVzVmbnFaRFI5YXpDYWZscFh6WWJuV3V0ZXUzVnB5TzN0YnJkNzA1b2F3Sm8zYUxVU2ZQUFFuY1k4Qk5ocXBaaWJheU5LUWpCWXhrZ1VEazB0bWw2L1AvcjQ0d3ZibTV0YlY0cThPRzhCNzdWRFora1BMeTJ1M0txZUJyQ3BHeVJwaklNSHY0NTkrL2ZDY1Z5emdYWTdSUkFGaUtQUUtKQ21DWlRVNnZMbWxqeDE4a081dHJhWlpYbDJsZ0hIQWo5NEZWTnhLbDlZYU82Nzd6Nzk1Sk5Qa3JRM3lHc0FoUkNJb3RDdzJ6UGZnV083YUxjVHBHbU1JUENSdGhKVHp6MmRqbG5qNnRZT1BsbytoL1gxcXlqeTRnS0F0N1hEam1VRlB4VTQvbGl6WUxRMkhJNFhGeGZGNXhtYnhpZEFQL0F4TjA4MVMrSFlOdElrbmdINkh1STBOdksyMnkwamE1Wmx1SEpsRytQaFZPZEZOYXA0dlphWDVjZVRhWGFPQVd1V2I1K3NOck9QdWtzM3Rvd0JuRTBMRjJtcmhUQU1ZZGtXa2lSRUdzZndQUTl4RWhuWDBnYW9SeHNoVUJZY1RWTVRvSnhNcHJ6Zkd4YkR5WFFiV3AvVXpIbWg0VGphUFhKa0RBMW1XTzdtcndGVVVzRnhIY1JwQWo4SVlGa1dramhDRW9md2ZjZjBJN0dqT251ZUI2VVU2cm9CaFg1WmNlVFRYQTlHWTR3bWVhNkUrc0RTMWo4YU8zL2QwM0ljMnhHL2pGYlc3WFpyZy90WlFCcFBmaERDWWpBZ3JZUUFQU1JKaEZacnhwQ1VrRktCOHhwMTA0QU1SKytyaXFNb1M4SHI1Z0t2K0xIeFpMb2tvQXNYOWthSyt1enZYdjczOERPQUVvN25JazUyQVMwTEtZR2trUUdNNHdpZFRzdTBpdXM2NEUxamVwSnpUcTRGWTVaUlJTc3BpN0thN1BTSDZ6czdvMDJoWkduWjlodStiVC8vcHhkZlcvOUN3SUFZR3RORVNKTEExQ3lKWWxQRFZqdWhTUUplMXhpUHA2ZzRod1ZtWktaMFloWjBuaFZpcTdjaitqc2pVVXRaYThhZWJ5enhtNzg5ZC9UTVQ1OTRJdDJWVk1KeFhTUWtLWm5Hc2hGRlBzTEFNeUVRUnlScGlpU056QWFVMHVBMWg1QVNGbU53Yk1mYzFIUlZWUm4yMDJrT1hqY1FTcjFlQ2Y1TVBpbk9oVzR3L3puQUZHRVVnbGtXSE1lR1kxdXdtR1Urb3phSm9nQkI2Sm5ORVRDMUQxMUNLbEJya1ltVTFpRFhDekc3eTVLdjlJZWpFMFZSRFR6WFMyNEFqS0lJekdaZ2pFRXBRR3R0Mk1aeGlDZ0lFQVFld3BpU3A0VW9EQTNic3FwUUZLVnhMaWxDc2p1T3BiWFNhakFZVGE5dTlZWkZ3V3ZQOCt6clhKb2tDYUk0Tmd3VlpqdWxCY1BBUjB3U2g3T2JudHUzTUk4b2pxQTE2RVF3azdDcDRUdWVlWjdNcGJUU3ZkNVFiMTN0cVpLWDJuVzhhMjJ4VzhNa1FXZ0FaNzFLOGlpdHpBSkpGQ0FNQW9SaFlHbzVQeitQT0E2TUFzUnVtaFdHb1dVeDJJeXNCRWlsTUJ4TnNkTWZtclloOXRkTGFnQWp3NUF1V294QUl3SWhRTU13TkNrMHQzZk9oUG9Nc0VLZWw2WWY2Y2hKOVd3YVliN0xpaExqU1lhNkZxYm1YMWhEMC9tN2dQUlB4TkFZeHZjTVF3cjZEbzJ1MElmU0lHT2dJTUM2aHBJU2RWMmJRRkJLNmFxV3ZDaXJVZ2doYk50bU53TEdFY0N1QjZROEpiUDRubXVTaHZxT05rQi9rd0lFeEN0dUpLV2F6eHdyNkwwU1NtMDBVcTFxcFNmTWhuOUxoc1RVdGkxakF1bzFSbXByUU12WllOZlFKbHRGSTB6a2tTTG1VOU1lU21pTHZlMEV3Y3VlNjY1TDNiUnVXc1BkRldjampiRmRJMGp3cXRaNU5sVlZ4YlZXVXB0b0kxVTB5SEIwTUxlMHhiU1dPbGNhejdwaDlOdWYvZUpYSHg1KzZxbjRsb0FFUTA0bC85UG1wVlN5cmpuUHMyekVlVlZLb1FSaFdHUlBNNFZNMmxHNDBtQ2FhbzBYWUZsL1hqeTFjdkg2TERYUmxzSTBQZ1V4RGJMZFd2NnZKa0pvcFdRdXBMd2tHdm1PYUpxTEVtemlhRzNCZ2llMXRpakxYVENoR1ZQUWx0QmFyMmcvZnYvb3UrLzJ2eGd3aVEwUTFZQmU2YWFwMEZRY1RVMTNNMVJLdnFPMTliU1V6V25meFlRV0toMWhjazRxeld3cjFuWlptdk1NODFrbDBvUDV0ZVBHalZtYVJETm05UGlzYnJxdWE4M0wwbXA0UllFODFsSWRnN0orTGZYZ3ZjWGwzdTBkaE0wQVZzb2NBMmxTMFB3emJVRUdZSXlTUTBwSlB5VjRUOVIxWHpSaVF5dWN0bXo3dGFidXJYNHB3R3Z5MFJDOVZqY2lhTlBVc0sxYWFYMVNhWFZVQ3ZHT3JQVWxNQzlqbnRjL2N1SkVRY1BpZG42d0drbXZIZVZNbE5HSTJMMU0vemwycGJSK1N3cjFkKzVZcjd4MTR1eVZXeDEyYi9iOWRZQ2ZmNUFZdW81VkMrampVcW9YaFdCSHRwcmw4OHZMTUFlaUwzUDlGMlRlUVN4TFRWV0hBQUFBQUVsRlRrU3VRbUNDXCI7IiwgImV4cG9ydCB2YXIgc2V0dGluZ3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIk1vZGVcIixcbiAgICB0eXBlOiBcIkxpc3RcIixcbiAgICBtb2RlczogW1wiQWJpbGl0aWVzXCIsIFwiUGFja2V0XCJdLFxuICAgIGN1cnJlbnQ6IDAsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChwYXJlbnQpIHtcbiAgcGFyZW50Lm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwYXJlbnQuZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIU1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nKSB7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSB0cnVlO1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGFyZW50Lm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzICE9IG51bGwpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nID0gdHJ1ZTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgaWYgKE1vZEFQSS5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KSB7XG4gIHBhcmVudC5zZXR0aW5ncyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkhlaWdodFwiLFxuICAgICAgdHlwZTogXCJTbGlkZXJcIixcbiAgICAgIG1pbjogMSxcbiAgICAgIG1heDogNixcbiAgICAgIHN0ZXA6IDAuNSxcbiAgICAgIGN1cnJlbnQ6IDEuNVxuICAgIH1cbiAgXVxuXG4gIHBhcmVudC5vblVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChwYXJlbnQuZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ICE9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50KSB7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQ7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcmVudC5vbkVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQ7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Lm9uRGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gMC42MDAwMDAwMjM4NDE4NTc5O1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxuXG59XG5cbiIsICJleHBvcnQgZnVuY3Rpb24gaW5pdChwYXJlbnQpIHtcbiAgdmFyIGNhdGNoZmlzaCA9IGZhbHNlO1xuICB2YXIgY2F0Y2hhZ2FpbiA9IGZhbHNlO1xuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoY2F0Y2hhZ2FpbiAmJiBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkgPT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnJpZ2h0Q2xpY2tNb3VzZSgpO1xuICAgICAgICBjYXRjaGFnYWluID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPCAxMDAgJiYgY2F0Y2hmaXNoID09IGZhbHNlKSB7XG4gICAgICAgICAgY2F0Y2hmaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5maXNoRW50aXR5LmlzSW5XYXRlcigpICYmIE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPiAxMDAgJiYgKE1hdGguY2VpbChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgLSBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgPj0gLjMpIHtcbiAgICAgICAgICBpZiAoY2F0Y2hmaXNoKSB7XG4gICAgICAgICAgICBjYXRjaGZpc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgTW9kQVBJLnJpZ2h0Q2xpY2tNb3VzZSgpO1xuICAgICAgICAgICAgY2F0Y2hhZ2FpbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICBjYXRjaGZpc2ggPSB0cnVlO1xuICB9XG5cbn1cblxuIiwgImV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuXG4gIHBhcmVudC5jcnNoSW50ZXIgPSBudWxsO1xuICBcbiAgcGFyZW50LnNldHRpbmdzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUFBTXCIsXG4gICAgICB0eXBlOiBcIlNsaWRlclwiLFxuICAgICAgbWluOiAyMCxcbiAgICAgIG1heDogMjAwMDAsXG4gICAgICBzdGVwOiAxMCxcbiAgICAgIGN1cnJlbnQ6IDUwMDBcbiAgICB9XG4gIF1cbiAgXG4gIGZ1bmN0aW9uIGNyYXNoKCkge1xuICAgIGlmKE1vZEFQSS5wbGF5ZXIgIT0gbnVsbCl7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50OyBpKyspIHtcbiAgICAgICAgTW9kQVBJLnBsYXllci5zd2luZ0l0ZW0oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpe1xuICAgIHBhcmVudC5jcnNoSW50ZXIgPSBzZXRJbnRlcnZhbChjcmFzaCwgMTAwMCk7XG4gIH1cbiAgXG4gIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZihwYXJlbnQuY3JzaEludGVyICE9IG51bGwpe1xuICAgICAgY2xlYXJJbnRlcnZhbChwYXJlbnQuY3JzaEludGVyKTtcbiAgICB9XG4gIH1cbn0iLCAiZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KXtcbiAgICBcbiAgICBmdW5jdGlvbiBoc2wycmdiKGgsIHMsIGwpe1xuICAgICAgcyAvPSAxMDA7XG4gICAgICBsIC89IDEwMDtcbiAgICAgIGNvbnN0IGsgPSBuID0+IChuICsgaCAvIDMwKSAlIDEyO1xuICAgICAgY29uc3QgYSA9IHMgKiBNYXRoLm1pbihsLCAxIC0gbCk7XG4gICAgICBjb25zdCBmID0gbiA9PlxuICAgICAgICBsIC0gYSAqIE1hdGgubWF4KC0xLCBNYXRoLm1pbihrKG4pIC0gMywgTWF0aC5taW4oOSAtIGsobiksIDEpKSk7XG4gICAgICByZXR1cm4gWzI1NSAqIGYoMCksIDI1NSAqIGYoOCksIDI1NSAqIGYoNCldO1xuICAgIH07XG4gIFxuICAgIHBhcmVudC5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpe1xuICAgICAgXG4gICAgICBpZihwYXJlbnQuZ2V0RW5hYmxlZCgpKXtcbiAgICAgICAgdmFyIHJnYiA9IGhzbDJyZ2IoRGF0ZS5ub3coKS8xMCAlIDM2MCwxMDAsNTApO1xuICAgICAgICB2YXIgcmVkID0gcmdiWzBdO1xuICAgICAgICB2YXIgZ3JlZW4gPSByZ2JbMV07XG4gICAgICAgIHZhciBibHVlID0gcmdiWzJdO1xuICAgICAgICB2YXIgYWxwaGEgPSAyNTU7XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiR0aGVXb3JsZC4kY2xvdWRDb2xvdXIgPSBCaWdJbnQoKHJlZCA8PCAyNCkgKyAoZ3JlZW4gPDwgMTYpICsgKGJsdWUgPDwgOCkgKyAoYWxwaGEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpe1xuICAgICAgaWYoTW9kQVBJLm1jaW5zdGFuY2UuJHRoZVdvcmxkICE9IG51bGwpe1xuICAgICAgICB2YXIgcmdiID0gaHNsMnJnYigwLDAsMTAwKTtcbiAgICAgICAgdmFyIHJlZCA9IHJnYlswXTtcbiAgICAgICAgdmFyIGdyZWVuID0gcmdiWzFdO1xuICAgICAgICB2YXIgYmx1ZSA9IHJnYlsyXTtcbiAgICAgICAgdmFyIGFscGhhID0gMjU1O1xuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kdGhlV29ybGQuJGNsb3VkQ29sb3VyID0gQmlnSW50KChyZWQgPDwgMjQpICsgKGdyZWVuIDw8IDE2KSArIChibHVlIDw8IDgpICsgKGFscGhhKSlcbiAgICAgIH1cbiAgICB9XG4gIH0iLCAiaW1wb3J0ICogYXMgZmxpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvZmxpZ2h0LnRzXCI7XG5pbXBvcnQgKiBhcyBmdWxsYnJpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvYXV0b2Zpc2gudHNcIjtcbmltcG9ydCAqIGFzIHN0ZXBNT0QgZnJvbSBcIi4uL2NoZWF0cy9zdGVwLnRzXCI7XG5pbXBvcnQgKiBhcyBhdXRvZmlzaE1PRCBmcm9tIFwiLi4vY2hlYXRzL2F1dG9maXNoLnRzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJjcmFzaGVyTU9EIGZyb20gXCIuLi9jaGVhdHMvc2VydmVyY3Jhc2hlci50c1wiO1xuaW1wb3J0ICogYXMgcmdiY2xvdWRzTU9EIGZyb20gXCIuLi9jaGVhdHMvcmdiY2xvdWRzLnRzXCI7XG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi4vZ3VpXCI7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKG1vZCkge1xuICAvLyBtb2R1bGUgZnVuY3Rpb25zXG5cbiAgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSBmYWxzZTtcbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7IH07XG4gIHRoaXMub25FbmFibGUgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSB0cnVlOyB0aGlzLm9uRW5hYmxlKCk7IHVpLnJlZnJlc2hNb2R1bGVzKCkgfTtcbiAgdGhpcy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7IHRoaXMuZW5hYmxlZERPTk9UVVNFID0gZmFsc2U7IHRoaXMub25EaXNhYmxlKCk7IHVpLnJlZnJlc2hNb2R1bGVzKCkgfTtcbiAgdGhpcy5vbktleSA9IGZ1bmN0aW9uKGUpe307XG4gIHRoaXMub25NQ0tleSA9IGZ1bmN0aW9uKGUpe307XG4gIHRoaXMuZ2V0RW5hYmxlZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5lbmFibGVkRE9OT1RVU0U7IH07XG4gIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oKSB7IHRoaXMuZW5hYmxlZERPTk9UVVNFID0gIXRoaXMuZW5hYmxlZERPTk9UVVNFOyBpZiAodGhpcy5lbmFibGVkRE9OT1RVU0UpIHsgdGhpcy5vbkVuYWJsZSgpIH0gZWxzZSB7IHRoaXMub25EaXNhYmxlKCk7IH0gfTtcbiAgLy9tYyBmdW5jdGlvbnNcbiAgdGhpcy5vblVwZGF0ZSA9IGZ1bmN0aW9uKCkgeyB9O1xuXG4gIHRoaXMuYWxlcnQgPSBmdW5jdGlvbigpIHsgYWxlcnQoKSB9O1xuXG4gIHRoaXMuc2V0dGluZ3MgPSBbXVxuXG4gIG1vZC5pbml0KHRoaXMpO1xufVxuXG5leHBvcnQgdmFyIGNhdGVnb3JpZXMgPSB7XG4gIG1vdmVtZW50OiBcIk1vdmVtZW50XCIsXG4gIHBsYXllcjogXCJQbGF5ZXJcIixcbiAgcmVuZGVyOiBcIlJlbmRlclwiLFxuICBmdW46IFwiRnVuXCJcbn1cblxuZXhwb3J0IHZhciBtb2R1bGVzID0ge1xuICBmbGlnaHQ6IHtcbiAgICBuYW1lOiBcIkZsaWdodFwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoZmxpZ2h0TU9EKSxcbiAgICBjYXRlZ29yeTogXCJNb3ZlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbG93cyB5b3UgdG8gZmx5XCIsXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICBuYW1lOiBcIlN0ZXBcIixcbiAgICBmdW5jdGlvbjogbmV3IHRlbXBsYXRlKHN0ZXBNT0QpLFxuICAgIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3dzIHlvdSB0byBzdGVwXCIsXG4gIH0sXG4gIGF1dG9maXNoOiB7XG4gICAgbmFtZTogXCJBdXRvRmlzaFwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoYXV0b2Zpc2hNT0QpLFxuICAgIGNhdGVnb3J5OiBcIlBsYXllclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1dG9tYXRpY2FsbHkgY2FzdHMgYW5kIHJlZWxzIHJvZFwiLFxuICB9LFxuXG4gIHNlcnZlcmNyYXNoZXI6IHtcbiAgICBuYW1lOiBcIlNlcnZlciBDcmFzaGVyXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShzZXJ2ZXJjcmFzaGVyTU9EKSxcbiAgICBjYXRlZ29yeTogXCJFeHBsb2l0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VuZHMganVzdCBhIGZldyBzd2luZyBwYWNrZXRzIDspXCIsXG4gIH0sXG5cbiAgcmdiY2xvdWRzOiB7XG4gICAgbmFtZTogXCJSR0IgQ2xvdWRzXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShyZ2JjbG91ZHNNT0QpLFxuICAgIGNhdGVnb3J5OiBcIlJlbmRlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsb3VkcyBnbyB3ZWVlZVwiLFxuICB9XG59IiwgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi91dGlsL2NsaWVudE5hbWVcIjtcbmltcG9ydCB7IG1vZHVsZXMsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi91dGlsL2FjdHVhbE1vZHVsZXNcIjtcblxuXG4vLyBkZWxldGUgdGhlIHVpXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIikgIT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIikucmVtb3ZlKCk7XG4gIH1cbn1cblxudmFyIGNvbnRhaW5lcjtcblxuXG4vLyBjaGVjayBpZiBvcGVuXG5leHBvcnQgZnVuY3Rpb24gaXNPcGVuKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cblxuLy8gb3BlbiBhIHNldHRpbmcgbWVudVxuZXhwb3J0IGZ1bmN0aW9uIHNldHRpbmcobW9kdWxlKSB7XG4gIC8qdmFyIGxzdCA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIk1vZGVcIixcbiAgICAgIHR5cGU6IFwiTGlzdFwiLFxuICAgICAgbW9kZXM6IFtcIkFiaWxpdGllc1wiLCBcIlBhY2tldFwiXSxcbiAgICAgIGN1cnJlbnQ6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3BlZWRcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDQsXG4gICAgICBjdXJyZW50OiAxXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlRlc3RcIixcbiAgICAgIHR5cGU6IFwiQm9vbGVhblwiLFxuICAgICAgdG9nZ2xlZDogdHJ1ZVxuICAgIH0sXG4gIF0qL1xuICB2YXIgbHN0ID0gbW9kdWxlLmZ1bmN0aW9uLnNldHRpbmdzO1xuICBjb25zb2xlLmxvZyhsc3QpO1xuICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHMuY2xhc3NOYW1lID0gXCJzZXR0aW5nXCI7XG4gIHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIHMuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIHMuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICBzLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICBzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICBzLnN0eWxlLnBhZGRpbmcgPSBcIjE1cHhcIjtcbiAgcy5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcbiAgcy5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICBzLnN0eWxlLmFuaW1hdGlvbiA9IFwicmdiIDRzIGxpbmVhciBpbmZpbml0ZVwiO1xuICBzLnN0eWxlLndpZHRoID0gXCIxNSVcIjtcbiAgcy5zdHlsZS5oZWlnaHQgPSBcIjUwJVwiO1xuICBzLnN0eWxlLnRvcCA9IFwiMTAwcHhcIlxuICBzLnN0eWxlLmxlZnQgPSBcIjEwMHB4XCJcblxuICBzLnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xuICBzLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcblxuICBzLnN0eWxlLnJlc2l6ZSA9IFwiYm90aFwiO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gbW9kdWxlLm5hbWU7XG4gIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gIHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIHZhciBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3NlLmlubmVyVGV4dCA9IFwiWFwiO1xuICBjbG9zZS5zdHlsZS5mb250U2l6ZSA9IFwiMjhweFwiO1xuICBjbG9zZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgY2xvc2Uuc3R5bGUucmlnaHQgPSBcIjE1cHhcIjtcbiAgY2xvc2Uuc3R5bGUudG9wID0gXCIxMHB4XCI7XG4gIGNsb3NlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICBjbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcy5yZW1vdmUoKTtcbiAgfTtcbiAgcy5hcHBlbmRDaGlsZChjbG9zZSk7XG5cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuXG4gIGZvciAobGV0IGkgaW4gbHN0KSB7XG4gICAgaWYgKGxzdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXG4gICAgICB2YXIgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMDAsMTAwLDEwMCwwLjUpXCI7XG4gICAgICBiZy5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xuICAgICAgYmcuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICBiZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgIHMuYXBwZW5kQ2hpbGQoYmcpO1xuICAgICAgaWYgKGxzdFtpXS50eXBlID09IFwiTGlzdFwiKSB7XG4gICAgICAgIHZhciBzZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VsRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBzZWxEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2VsRGVzYyk7XG4gICAgICAgIHZhciBzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBzZWwub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0uY3VycmVudCA9IHBhcnNlSW50KHNlbC52YWx1ZSk7XG4gICAgICAgICAgc2VsRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS5jdXJyZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiBpbiBsc3RbaV0ubW9kZXMpIHtcbiAgICAgICAgICBpZiAobHN0W2ldLm1vZGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBsc3RbaV0ubW9kZXNbal07XG4gICAgICAgICAgICBvcHQudmFsdWUgPSBqICsgXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2VsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsc3RbaV0udHlwZSA9PSBcIlNsaWRlclwiKSB7XG4gICAgICAgIHZhciBzbGlkZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbGlkZURlc2Muc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgc2xpZGVEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2xpZGVEZXNjKTtcbiAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBzbGlkZS50eXBlID0gXCJyYW5nZVwiO1xuICAgICAgICBzbGlkZS5zdGVwID0gbHN0W2ldLnN0ZXA7XG4gICAgICAgIHNsaWRlLm1pbiA9IGxzdFtpXS5taW47XG4gICAgICAgIHNsaWRlLm1heCA9IGxzdFtpXS5tYXg7XG4gICAgICAgIHNsaWRlLnZhbHVlID0gbHN0W2ldLmN1cnJlbnQ7XG4gICAgICAgIHNsaWRlLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbHN0W2ldLmN1cnJlbnQgPSBwYXJzZUZsb2F0KHNsaWRlLnZhbHVlKTtcbiAgICAgICAgICBzbGlkZURlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICB9XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgIH0gZWxzZSBpZiAobHN0W2ldLnR5cGUgPT0gXCJCb29sZWFuXCIpIHtcbiAgICAgICAgdmFyIGJvb2xEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9vbERlc2Muc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgYm9vbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0udG9nZ2xlZH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChib29sRGVzYyk7XG4gICAgICAgIHZhciBib29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBib29sLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGJvb2wuY2hlY2tlZCA9IGxzdFtpXS50b2dnbGVkO1xuICAgICAgICBib29sLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbHN0W2ldLnRvZ2dsZWQgPSBib29sLmNoZWNrZWQ7XG4gICAgICAgICAgYm9vbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0udG9nZ2xlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGJvb2wpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vY3JlYXRlIHRoZSBndWlcbmV4cG9ydCBmdW5jdGlvbiBvcGVuKCkge1xuICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcbiAgdmFyIGNuID0gY2xpZW50TmFtZTtcblxuICBjb25zdCB1aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdWkuaWQgPSBcInVpXCI7XG4gIHVpLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICB1aS5zdHlsZS53aWR0aCA9IFwiNjYlXCI7XG4gIHVpLnN0eWxlLmhlaWdodCA9IFwiNjYlXCI7XG4gIHVpLnN0eWxlLnRvcCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0ICogMC4xNjUgKyBcInB4XCI7XG4gIHVpLnN0eWxlLmxlZnQgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoICogMC4xNjUgKyBcInB4XCI7XG4gIHVpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICB1aS5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHVpLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsMC43NSlcIjtcbiAgdWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gIHVpLnN0eWxlLnBhZGRpbmcgPSBcIjE1cHhcIjtcbiAgdWkuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDQwcHggcmdiYSgwLCAxOTUsIDI1NSwwLjUpXCI7XG4gIHVpLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICB1aS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICB1aS5zdHlsZS5hbmltYXRpb24gPSBcInJnYiA0cyBsaW5lYXIgaW5maW5pdGVcIjtcblxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWkpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gY247XG4gIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyNHB4XCI7XG4gIHRpdGxlLnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gIHVpLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICB2YXIgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2guc3R5bGUud2lkdGggPSBcIjMzJVwiO1xuICBzZWFyY2gudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2guc3R5bGUuYm9yZGVyID0gXCJzb2xpZCAycHggcmdiYSgyMDAsMjAwLDIwMCwwLjUpXCI7XG4gIHNlYXJjaC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgc2VhcmNoLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbiAgc2VhcmNoLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICBzZWFyY2guc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyMHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5mb250U2l6ZSA9IFwiMjJweFwiO1xuICBzZWFyY2guc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSg1MCw1MCw1MCwuMjQpXCI7XG4gIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwiXHVEODNEXHVERDBFXHVGRTBFIFNlYXJjaFwiXG4gIHNlYXJjaC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHNlYXJjaCk7XG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG9zZS5pbm5lclRleHQgPSBcIlhcIjtcbiAgY2xvc2Uuc3R5bGUuZm9udFNpemUgPSBcIjI4cHhcIjtcbiAgY2xvc2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGNsb3NlLnN0eWxlLnJpZ2h0ID0gXCIxNXB4XCI7XG4gIGNsb3NlLnN0eWxlLnRvcCA9IFwiMTBweFwiO1xuICBjbG9zZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgY2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRlc3Ryb3koKTtcbiAgfTtcbiAgdWkuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG5cblxuICB2YXIgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFyLnN0eWxlLm92ZXJmbG93WCA9IFwic2Nyb2xsXCI7XG4gIHVpLmFwcGVuZENoaWxkKGJhcik7XG5cbiAgZm9yIChsZXQgaSBpbiBjYXRlZ29yaWVzKSB7XG4gICAgaWYgKGNhdGVnb3JpZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGNhdGVnb3JpZXNbaV07XG4gICAgICBjYXRlZ29yeS5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICBjYXRlZ29yeS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIH07XG5cbiAgICAgIGJhci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNlbnRlclwiKTtcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgdWkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXG4gIHJlZnJlc2hNb2R1bGVzKCk7XG59XG5cblxuLy8gUmVsb2FkIG1vZHVsZSBsaXN0XG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaE1vZHVsZXMoKSB7XG4gIGlmIChpc09wZW4oKSkge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgaW4gbW9kdWxlcykge1xuICAgICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdmFyIG1vZGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbW9kbHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbW9kbHRpdGxlLmlubmVyVGV4dCA9IGAke21vZHVsZXNbaV0ubmFtZX1gO1xuICAgICAgICBtb2RsdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjIycHhcIjtcbiAgICAgICAgbW9kbHRpdGxlLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgbW9kbC5hcHBlbmRDaGlsZChtb2RsdGl0bGUpO1xuXG4gICAgICAgIG1vZGwuc3R5bGUudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cbiAgICAgICAgbW9kbC5zdHlsZS53aWR0aCA9IFwiMjUlXCI7XG4gICAgICAgIG1vZGwuc3R5bGUuaGVpZ2h0ID0gXCIyNSVcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBtb2RsLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTAwLDEwMCwxMDAsMC41KVwiO1xuICAgICAgICBpZiAobW9kdWxlc1tpXS5mdW5jdGlvbi5nZXRFbmFibGVkKCkpIHtcbiAgICAgICAgICBtb2RsLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAxNXB4IHJnYmEoMCwgMjU1LCAwLDEpXCI7XG4gICAgICAgIH1cblxuICAgICAgICBtb2RsLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgbW9kdWxlc1tpXS5mdW5jdGlvbi50b2dnbGUoKTtcbiAgICAgICAgICByZWZyZXNoTW9kdWxlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGwub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBuZXcgc2V0dGluZyhtb2R1bGVzW2ldKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vdXRpbC9jbGllbnROYW1lLnRzXCI7XG5pbXBvcnQgeyBsb2dUb0NvbnNvbGUgfSBmcm9tIFwiLi91dGlsL2NvbnNvbGVMb2dnZXJcIjtcbmltcG9ydCB7IGxvZ1RvQ2hhdCB9IGZyb20gXCIuL3V0aWwvY2hhdExvZ2dlclwiO1xuaW1wb3J0ICogYXMgYXNzZXRzIGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4vZ3VpLnRzXCI7XG5cbmxvZ1RvQ29uc29sZShcIkluaXQuLi5cIik7XG5sb2dUb0NoYXQoXCJJbml0Li4uXCIpO1xuXG5sb2dUb0NoYXQoXCJMb2FkaW5nIG1vZHVsZXMuLi5cIik7XG5cbmltcG9ydCB7IG1vZHVsZXMgfSBmcm9tIFwiLi91dGlsL2FjdHVhbE1vZHVsZXNcIjtcblxuTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG5cbmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKFxuICAgIGUubG9jYXRpb24gPT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUICYmXG4gICAgZS5rZXkgPT0gXCJTaGlmdFwiICYmXG4gICAgIXVpLmlzT3BlbigpXG4gICkge1xuICAgIHVpLm9wZW4oKTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vbktleShlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmtleSA9PSA1NCkge1xuICAgIHVpLmRlc3Ryb3k7XG4gIH1cbiAgZm9yIChsZXQga2V5IGluIG1vZHVsZXMpIHtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBtb2R1bGVzW2tleV0uZnVuY3Rpb24ub25NQ0tleShlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQga2V5IGluIG1vZHVsZXMpIHtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBtb2R1bGVzW2tleV0uZnVuY3Rpb24ub25VcGRhdGUoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMF07XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59YCk7XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuYmFja2dyb3VuZDogcmdiYSgxMDAsMTAwLDEwMCwwLjUpO1xuZmlsdGVyOiBibHVyKDRweCk7XG59YCk7XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyByZ2Ige1xuICAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxuICAxNiUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDI1NSwgMCwwLjc1KTsgfVxuICAzMyUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDAsMC43NSk7IH1cbiAgNTAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwgMjU1LCAyNTUsMC43NSk7IH1cbiAgNjYlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMjU1LDAuNzUpOyB9XG4gIDgzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMjU1LDAuNzUpOyB9XG4gIDEwMCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDAsIDAsMC43NSk7IH1cbn1gKTtcblxuZnVuY3Rpb24gY3VzdG9tVUkoKSB7XG4gIC8vQHRzLWlnbm9yZVxuICBpZiAoTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4gIT0gbnVsbCkge1xuICAgIGlmIChcbiAgICAgIE1vZEFQSS5jdXJyZW50U2NyZWVuKCkuc3RhcnRzV2l0aChcIm5ldC5taW5lY3JhZnQuY2xpZW50Lmd1aS5HdWlNYWluTWVudVwiKVxuICAgICkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgc2luZ2xlUGxheWVyID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzBdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgbXVsdGlQbGF5ZXIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMV07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBtb2RzID0gTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzJdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgZm9ya09uR2l0SHViID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzNdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgb3B0aW9ucyA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVs0XTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIGVkaXRQcm9maWxlID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzVdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgbGF1bmd1YWdlID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzZdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgY3VycmVudFNjcmVlbiA9IE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuO1xuXG4gICAgICB2YXIgYnV0dG9uRGlzdGFuY2UgPSA0MjtcbiAgICAgIHZhciBidXR0b25EaXN0YW5jZVJlbCA9IDIyO1xuICAgICAgdmFyIGJ1dHRvblNwYWNpbmcgPSAyO1xuICAgICAgdmFyIGJ1dHRvbldpZHRoID0gMTAwO1xuICAgICAgdmFyIGVuYyA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgLy9vcHRpb25zXG4gICAgICBvcHRpb25zLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBvcHRpb25zLiR5UG9zaXRpb24gPSBjdXJyZW50U2NyZWVuLiRoZWlnaHQ3IC0gYnV0dG9uRGlzdGFuY2U7XG4gICAgICAvL21vZHNcbiAgICAgIG1vZHMuJHdpZHRoMTMgPSBidXR0b25XaWR0aCAvIDI7XG4gICAgICBtb2RzLiR4UG9zaXRpb24wID0gb3B0aW9ucy4keFBvc2l0aW9uMCAtIGJ1dHRvbldpZHRoIC8gMiAtIGJ1dHRvblNwYWNpbmc7XG4gICAgICBtb2RzLiR5UG9zaXRpb24gPSBjdXJyZW50U2NyZWVuLiRoZWlnaHQ3IC0gYnV0dG9uRGlzdGFuY2U7XG4gICAgICAvL1NpbmdsZVBsYXllclxuICAgICAgc2luZ2xlUGxheWVyLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBzaW5nbGVQbGF5ZXIuJHlQb3NpdGlvbiA9IG9wdGlvbnMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgLy9NdWx0aVBsYXllclxuICAgICAgbXVsdGlQbGF5ZXIuJHdpZHRoMTMgPSBidXR0b25XaWR0aCArIGxhdW5ndWFnZS4kd2lkdGgxMyArIGJ1dHRvblNwYWNpbmc7XG4gICAgICBtdWx0aVBsYXllci4keFBvc2l0aW9uMCA9XG4gICAgICAgIHNpbmdsZVBsYXllci4keFBvc2l0aW9uMCArIGJ1dHRvbldpZHRoICsgYnV0dG9uU3BhY2luZztcbiAgICAgIG11bHRpUGxheWVyLiR5UG9zaXRpb24gPSBvcHRpb25zLiR5UG9zaXRpb24gLSBidXR0b25EaXN0YW5jZVJlbDtcbiAgICAgIC8vRWRpdCBwcm9maWxlXG4gICAgICBlZGl0UHJvZmlsZS4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoO1xuICAgICAgZWRpdFByb2ZpbGUuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vTGFuZ1xuICAgICAgbGF1bmd1YWdlLiR4UG9zaXRpb24wID1cbiAgICAgICAgZWRpdFByb2ZpbGUuJHhQb3NpdGlvbjAgKyBlZGl0UHJvZmlsZS4kd2lkdGgxMyArIGJ1dHRvblNwYWNpbmc7XG4gICAgICBsYXVuZ3VhZ2UuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vRm9ya1xuICAgICAgZm9ya09uR2l0SHViLiR3aWR0aDEzID0gYnV0dG9uV2lkdGggLyAyO1xuICAgICAgZm9ya09uR2l0SHViLiR5UG9zaXRpb24gPSBtb2RzLiR5UG9zaXRpb24gLSBidXR0b25EaXN0YW5jZVJlbDtcbiAgICAgIGZvcmtPbkdpdEh1Yi4keFBvc2l0aW9uMCA9IG1vZHMuJHhQb3NpdGlvbjA7XG4gICAgICBmb3JrT25HaXRIdWIuJGRpc3BsYXlTdHJpbmcuJGNoYXJhY3RlcnMuZGF0YSA9IGVuYy5lbmNvZGUoXCJGb3JrXCIpO1xuXG4gICAgICBjdXJyZW50U2NyZWVuLiRvcGVuR0xXYXJuaW5nMS4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIlwiKTtcbiAgICAgIC8vY3VycmVudFNjcmVlbi4kc3BsYXNoVGV4dC4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIkp1c3RpbiBpcyB0aGUgc3BlZCB2ZXJzaW9uIG9mIERhbmllbFwiKVxuXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHZhciBzZXJ2ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VydmVycy5pZCA9IFwic2VydmVycGluZ2xpc3RcIjtcblxuICAgICAgICB2YXIgcGluZ3MgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJBZW9uIE5ldHdvcmtcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vYWVvbi1uZXR3b3JrLm5ldFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJBcmNoIE1DXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL21jLmFyY2gubG9sXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkhlbGxpdW0gTmV0d29ya1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9oZWxsdGVjaC5jY1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJDbGV2ZXIgVGVhY2hpbmdcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vY2xldmVyLXRlYWNoaW5nLmNvbVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJaeXRoXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL21jLnp5dGgubWVcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHNlcnZlcnMuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLWFsbFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLnRvcCA9IFwiMTAlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUubGVmdCA9IFwiMi41JVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLndpZHRoID0gXCIxNSVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5oZWlnaHQgPSBcIjgwJVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcblxuICAgICAgICBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBjb25zdCBjdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGN1ci5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgICBzZXJ2ZXJzLmFwcGVuZENoaWxkKGN1cik7XG5cbiAgICAgICAgICBjb25zdCBjdXJoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3VyaDIuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgICBjdXJoMi5pbm5lclRleHQgPSBlLm5hbWU7XG4gICAgICAgICAgY3VyLmFwcGVuZENoaWxkKGN1cmgyKTtcblxuICAgICAgICAgIGNvbnN0IGN1cnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3Vyc2VydmVyLmlubmVyVGV4dCA9IGUuYWRkcmVzcztcbiAgICAgICAgICBjdXIuYXBwZW5kQ2hpbGQoY3Vyc2VydmVyKTtcblxuICAgICAgICAgIGNvbnN0IHBsYXllcmluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHBsYXllcmluZm8uaW5uZXJUZXh0ID0gXCJub3QgY29ubmVjdGVkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xuICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuICAgICAgICAgIGN1ci5hcHBlbmRDaGlsZChwbGF5ZXJpbmZvKTtcblxuICAgICAgICAgIGNvbnN0IHRlc3R3ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGUuYWRkcmVzcyk7XG4gICAgICAgICAgY29uc3QgdGltZXBpbmcgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgdGVzdHdlYnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0ZXN0d2Vic29ja2V0LnNlbmQoXCJBY2NlcHQ6IE1PVERcIik7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRlc3R3ZWJzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlLmRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGRhdCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRbXCJ0eXBlXCJdLnRvTG93ZXJDYXNlKCkgPT09IFwibW90ZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcmluZm8uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRbXCJkYXRhXCJdW1wib25saW5lXCJdICsgXCIvXCIgKyBkYXRbXCJkYXRhXCJdW1wibWF4XCJdO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmNvbG9yID0gXCJsaW1lXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuaW5uZXJUZXh0ICs9IERhdGUubm93KCkgLSB0aW1lcGluZyArIFwibXNcIjtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyaW5mby5hcHBlbmRDaGlsZChwaW5nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZXJ2ZXJzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikgIT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3VzdHVpID0gc2V0SW50ZXJ2YWwoY3VzdG9tVUksIDUwKTtcblxuLy9DdXN0b20gQ3Vyc29yXG5kb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdLnN0eWxlLmN1cnNvciA9XG4gICd1cmwoXCInICsgYXNzZXRzLmN1cnNvciArICdcIiksIGF1dG8nO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAndXJsKFwiJyArIGFzc2V0cy5jdXJzb3IgKyAnXCIpLCBhdXRvJztcblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgY2xlYXJJbnRlcnZhbChjdXN0dWkpO1xuICB1aS5kZXN0cm95KCk7XG4gIGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0uc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpICE9IG51bGwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpLnJlbW92ZSgpO1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUVPLE1BQUksYUFBYTs7O0FDQWpCLFdBQVMsYUFBYSxLQUFLO0FBQ2hDLFlBQVEsSUFBSSxJQUFJLFVBQVUsS0FBSyxHQUFHLEVBQUU7QUFBQSxFQUN0Qzs7O0FDRk8sV0FBUyxVQUFVLEtBQUs7QUFFN0IsV0FBTyxjQUFjLEVBQUMsS0FBSyxTQUFNLFVBQVUsVUFBTyxHQUFHLEdBQUUsQ0FBQztBQUFBLEVBQzFEOzs7QUNMTyxNQUFJLFNBQVM7OztBQ0FwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBSSxXQUFXO0FBQUEsSUFDcEI7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU8sQ0FBQyxhQUFhLFFBQVE7QUFBQSxNQUM3QixTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFFTyxXQUFTLEtBQUssUUFBUTtBQUMzQixXQUFPLFdBQVcsV0FBWTtBQUM1QixVQUFJLE9BQU8sV0FBVyxHQUFHO0FBRXJCLFlBQUksQ0FBQyxPQUFPLE9BQU8sYUFBYSxVQUFVO0FBRXhDLGlCQUFPLE9BQU8sYUFBYSxXQUFXO0FBRXRDLGlCQUFPLE9BQU8sT0FBTztBQUFBLFFBQ3ZCO0FBQUEsTUFDSjtBQUFBLElBQ0Y7QUFFQSxXQUFPLFdBQVcsV0FBWTtBQUU1QixVQUFJLE9BQU8sVUFBVSxNQUFNO0FBRXpCLFlBQUksT0FBTyxPQUFPLGdCQUFnQixNQUFNO0FBRXRDLGlCQUFPLE9BQU8sYUFBYSxXQUFXO0FBRXRDLGlCQUFPLE9BQU8sT0FBTztBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxXQUFPLFlB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
