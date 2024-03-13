(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/require_all.ts
  function require_all() {
    ModAPI.require("player");
    ModAPI.require("network");
    ModAPI.require("settings");
  }

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

  // src/HUD.ts
  function inithud() {
    ModAPI.addEventListener("drawhud", function() {
      ModAPI.settings.hud24h = false;
      ModAPI.settings.hudCoords = false;
      ModAPI.settings.hudFps = false;
      ModAPI.settings.hudPlayer = false;
      ModAPI.settings.hudStats = false;
      ModAPI.settings.hudWorld = false;
      ModAPI.settings.reload();
      let sr = ModAPI.ScaledResolution;
      let gsm = ModAPI.GlStateManager;
      gsm.pushMatrix();
      gsm.translate({ x: 4, y: 4, z: 0 });
      gsm.scale({ x: 1.5, y: 1.5, z: 1 });
      gsm.translate({ x: -4, y: -4, z: 0 });
      ModAPI.drawStringWithShadow({ msg: clientName, x: 4, y: 4, color: -1 });
      gsm.popMatrix();
    });
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
  require_all();
  logToConsole("Init...");
  logToChat("Init...");
  inithud();
  logToChat("Loading modules...");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JlcXVpcmVfYWxsLnRzIiwgIi4uL3NyYy91dGlsL2NsaWVudE5hbWUudHMiLCAiLi4vc3JjL3V0aWwvY29uc29sZUxvZ2dlci50cyIsICIuLi9zcmMvdXRpbC9jaGF0TG9nZ2VyLnRzIiwgIi4uL3NyYy9IVUQudHMiLCAiLi4vc3JjL2Fzc2V0cy50cyIsICIuLi9zcmMvY2hlYXRzL2ZsaWdodC50cyIsICIuLi9zcmMvY2hlYXRzL3N0ZXAudHMiLCAiLi4vc3JjL2NoZWF0cy9hdXRvZmlzaC50cyIsICIuLi9zcmMvY2hlYXRzL3NlcnZlcmNyYXNoZXIudHMiLCAiLi4vc3JjL2NoZWF0cy9yZ2JjbG91ZHMudHMiLCAiLi4vc3JjL3V0aWwvYWN0dWFsTW9kdWxlcy50cyIsICIuLi9zcmMvZ3VpLnRzIiwgIi4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZV9hbGwoKXtcbiAgTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gIE1vZEFQSS5yZXF1aXJlKFwibmV0d29ya1wiKTtcbiAgTW9kQVBJLnJlcXVpcmUoXCJzZXR0aW5nc1wiKTtcbn1cbiIsICIvLyBnbG9iYWwgdmFyaWFibGUgZm9yIHRoZSBjbGllbnQncyBuYW1lXG5cbmV4cG9ydCB2YXIgY2xpZW50TmFtZSA9IFwiYnVybW9kXCI7IiwgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi9jbGllbnROYW1lLnRzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1RvQ29uc29sZShtc2cpIHtcbiAgY29uc29sZS5sb2coYFske2NsaWVudE5hbWV9XSAke21zZ31gKTtcbn0iLCAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWUudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9DaGF0KG1zZykge1xuICAvL0B0cy1pZ25vcmVcbiAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogYFx1MDBBNzVbJHtjbGllbnROYW1lfV1cdTAwQTdyICR7bXNnfWB9KTtcbn0iLCAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL3V0aWwvY2xpZW50TmFtZS50c1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRodWQoKXtcbiAgTW9kQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmF3aHVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIE1vZEFQSS5zZXR0aW5ncy5odWQyNGggPSBmYWxzZVxuICAgIE1vZEFQSS5zZXR0aW5ncy5odWRDb29yZHMgPSBmYWxzZVxuICAgIE1vZEFQSS5zZXR0aW5ncy5odWRGcHMgPSBmYWxzZVxuICAgIE1vZEFQSS5zZXR0aW5ncy5odWRQbGF5ZXIgPSBmYWxzZVxuICAgIE1vZEFQSS5zZXR0aW5ncy5odWRTdGF0cyA9IGZhbHNlXG4gICAgTW9kQVBJLnNldHRpbmdzLmh1ZFdvcmxkID0gZmFsc2VcbiAgICBNb2RBUEkuc2V0dGluZ3MucmVsb2FkKCk7XG4gICAgbGV0IHNyID0gTW9kQVBJLlNjYWxlZFJlc29sdXRpb25cbiAgICAvL0B0cy1pZ25vcmVcbiAgICBsZXQgZ3NtID0gTW9kQVBJLkdsU3RhdGVNYW5hZ2VyXG4gICAgZ3NtLnB1c2hNYXRyaXgoKTtcbiAgICBnc20udHJhbnNsYXRlICh7eDogNCwgeTogNCwgejogMH0pO1xuICAgIGdzbS5zY2FsZSh7eDogMS41LCB5OiAxLjUsIHo6IDF9KTtcbiAgICBnc20udHJhbnNsYXRlKHt4OiAtNCwgeTogLTQsIHo6IDB9KTsgXG4gICAgTW9kQVBJLmRyYXdTdHJpbmdXaXRoU2hhZG93KHttc2c6IGNsaWVudE5hbWUsIHg6IDQseTogNCxjb2xvcjogLTF9KTtcbiAgICBnc20ucG9wTWF0cml4KCk7XG4gIH0pO1xufVxuIiwgImV4cG9ydCB2YXIgY3Vyc29yID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJ3QUFBQWxDQVlBQUFCUmVJbnhBQUFBQVhOU1IwSUFyczRjNlFBQUNGRkpSRUZVV0VldFYxdHZYTlVaWGZ2Y3J6TVRPMDVJSzRXcUNvS0NDZ2pVcXBYYUNsU2t3bS9vUCtsTGVlR2xEKzFEMjFRdFVrdFZxUmVtZ0NoQ0lFZ2lBdzFHUUpxUWdHTVNReEk3ZG1LUDUzNXUrNXg5cWI0OVRrVUlTaFRLa1k1bVBITzgxMTdyVzkvNjlyREhIcnhIU3luaGVoNDZlenJvekhYZ2VlNVFhLzBLcjV0bnZJVmk2ZkRoeFF4ZjBjVUlVQ3NGeTdZUnBRblNWZ3JYZGZ0U2lYL21kZlA3NTE1NTh4UUEvUlhoZ2YzNGdidTFGQkplNEdQZkhRdll2MzhCZ2UrUEdpR09sR1g1VXRuVTUrcWFEVHpwakZPL04vbmxzMHNWWTE5K0F3YXdMQ3ZzbWV2Z29ZZS9qZnNmdUJlaDcvUHQzdUR5NnVyRmpTdGJPNU9haXpPU3FlT1JYWi84NDcrT2IvNC9iSTJrazBtR0F3ZjI0U2VQUDRKSEh2MCtTYXFYbDFmeC9va3o3UExscThpTDRnME44VmNvNjlYdWtlTnJYd0hnRkFjTzdNZmpqeitLSHozeVBkaTJqZlBuTCtEMDZSVnNiZTAwZVY0Y3I0VjhVV3YxSnBmTk9sUWtlNXdYQ3d1TFRiY0xlVHNiTUpKbVdXRnE5NE1mZmhjUGYrZCtjaW1HZ3pGR296RTRiOFEwTHo3dDl5ZG5COFBSSjlNczM1QkNYQmF4OXg5Z3N0SHRMcFczQmZqWWczZnJQSyt3ZCs4Y0hucjRmdHp6clVQd0F4ZSs1eU5KWXNSUm9MYTIrOVhLeXFxOGNIR2o3Zy9HRzd4dWxoeUwvV1h2WFhkOGNQaHc5N1phWnRjMEhQUHplL0RBZy9maTBGM2ZNR0R0VGdzTEMvTm90Vk5zYkZ6VksyZFgyWVdMYTdLM1BkZ3BxMmJKOXF5bmxlMmVpWFF3aXUrOHN6NXpabDR1THY1Y0F1eW1MV1FBZVZXajAybmpubnNQNGVEQnI4RnhITFE3YmNNNmJjVWdVdzBHSS9PYVpVV1c1Zm5xWkRSOWF6Q2FmbHBYellibld1dGV1M1ZweU8zdGJyZDcwNW9hd0pvM2FMVVNmUFBRbmNZOEJOaHFwWmliYXlOS1FqQll4a2dVRGswdG1sNi9QL3I0NHd2Ym01dGJWNHE4T0c4Qjc3VkRaK2tQTHkydTNLcWVCckNwR3lScGpJTUh2NDU5Ky9mQ2NWeXpnWFk3UlJBRmlLUFFLSkNtQ1pUVTZ2TG1sangxOGtPNXRyYVpaWGwybGdISEFqOTRGVk54S2w5WWFPNjc3ejc5NUpOUGtyUTN5R3NBaFJDSW90Q3cyelBmZ1dPN2FMY1RwR21NSVBDUnRoSlR6ejJkamxuajZ0WU9QbG8raC9YMXF5ank0Z0tBdDdYRGptVUZQeFU0L2xpellMUTJISTRYRnhmRjV4bWJ4aWRBUC9BeE4wODFTK0hZTnRJa25nSDZIdUkwTnZLMjJ5MGphNVpsdUhKbEcrUGhWT2RGTmFwNHZaYVg1Y2VUYVhhT0FXdVdiNStzTnJPUHVrczN0b3dCbkUwTEYybXJoVEFNWWRrV2tpUkVHc2Z3UFE5eEVoblgwZ2FvUnhzaFVCWWNUVk1Ub0p4TXByemZHeGJEeVhRYldwL1V6SG1oNFRqYVBYSmtEQTFtV083bXJ3RlVVc0Z4SGNScEFqOElZRmtXa2poQ0VvZndmY2YwSTdHak9udWVCNlVVNnJvQmhYNVpjZVRUWEE5R1k0d21lYTZFK3NEUzFqOGFPMy9kMDNJYzJ4Ry9qRmJXN1hacmcvdFpRQnBQZmhEQ1lqQWdyWVFBUFNSSmhGWnJ4cENVa0ZLQjh4cDEwNEFNUisrcmlxTW9TOEhyNWdLditMSHhaTG9rb0FzWDlrYUsrdXp2WHY3MzhET0FFbzduSWs1MkFTMExLWUdra1FHTTR3aWRUc3UwaXVzNjRFMWplcEp6VHE0Rlk1WlJSU3NwaTdLYTdQU0g2enM3bzAyaFpHblo5aHUrYlQvL3B4ZGZXLzlDd0lBWUd0TkVTSkxBMUN5SllsUERWanVoU1FKZTF4aVBwNmc0aHdWbVpLWjBZaFowbmhWaXE3Y2oranNqVVV0WmE4YWVieXp4bTc4OWQvVE1UNTk0SXQyVlZNSnhYU1FrS1puR3NoRkZQc0xBTXlFUVJ5UnBpaVNOekFhVTB1QTFoNUFTRm1Od2JNZmMxSFJWVlJuMjAya09YamNRU3IxZUNmNU1QaW5PaFc0dy96bkFGR0VVZ2xrV0hNZUdZMXV3bUdVK296YUpvZ0JCNkpuTkVUQzFEMTFDS2xCcmtZbVUxaURYQ3pHN3k1S3Y5SWVqRTBWUkRUelhTMjRBaktJSXpHWmdqRUVwUUd0dDJNWnhpQ2dJRUFRZXdwaVNwNFVvREEzYnNxcFFGS1Z4TGlsQ3NqdU9wYlhTYWpBWVRhOXU5WVpGd1d2UDgrenJYSm9rQ2FJNE5nd1ZaanVsQmNQQVIwd1NoN09ibnR1M01JOG9qcUExNkVRd2s3Q3A0VHVlZVo3TXBiVFN2ZDVRYjEzdHFaS1gyblc4YTIyeFc4TWtRV2dBWjcxSzhpaXR6QUpKRkNBTUFvUmhZR281UHorUE9BNk1Bc1J1bWhXR29XVXgySXlzQkVpbE1CeE5zZE1mbXJZaDl0ZExhZ0FqdzVBdVdveEFJd0loUU1Nd05DazB0M2ZPaFBvTXNFS2VsNllmNmNoSjlXd2FZYjdMaWhMalNZYTZGcWJtWDFoRDAvbTdnUFJQeE5BWXh2Y01Rd3I2RG8ydTBJZlNJR09nSU1DNmhwSVNkVjJiUUZCSzZhcVd2Q2lyVWdnaGJOdG1Od0xHRWNDdUI2UThKYlA0bm11U2h2cU9Oa0Iva3dJRXhDdHVKS1dhenh3cjZMMFNTbTAwVXExcXBTZk1objlMaHNUVXRpMWpBdW8xUm1wclFNdlpZTmZRSmx0RkkwemtrU0xtVTlNZVNtaUx2ZTBFd2N1ZTY2NUwzYlJ1V3NQZEZXY2pqYkZkSTBqd3F0WjVObFZWeGJWV1VwdG9JMVUweUhCME1MZTB4YlNXT2xjYXo3cGg5TnVmL2VKWEh4NSs2cW40bG9BRVEwNGwvOVBtcFZTeXJqblBzMnpFZVZWS29RUmhXR1JQTTRWTTJsRzQwbUNhYW8wWFlGbC9YankxY3ZINkxEWFJsc0kwUGdVeERiTGRXdjZ2SmtKb3BXUXVwTHdrR3ZtT2FKcUxFbXppYUczQmdpZTF0aWpMWFRDaEdWUFFsdEJhcjJnL2Z2L291Ky8ydnhnd2lRMFExWUJlNmFhcDBGUWNUVTEzTTFSS3ZxTzE5YlNVelduZnhZUVdLaDFoY2s0cXpXd3IxblpabXZNTTgxa2wwb1A1dGVQR2pWbWFSRE5tOVBpc2JycXVhODNMMG1wNFJZRTgxbElkZzdKK0xmWGd2Y1hsM3UwZGhNMEFWc29jQTJsUzBQd3piVUVHWUl5U1EwcEpQeVY0VDlSMVh6UmlReXVjdG16N3RhYnVyWDRwd0d2eTBSQzlWamNpYU5QVXNLMWFhWDFTYVhWVUN2R09yUFVsTUM5am50Yy9jdUpFUWNQaWRuNndHa212SGVWTWxOR0kyTDFNL3psMnBiUitTd3IxZCs1WXI3eDE0dXlWV3gxMmIvYjlkWUNmZjVBWXVvNVZDK2pqVXFvWGhXQkh0cHJsODh2TE1BZWlMM1A5RjJUZVFTeExUVldIQUFBQUFFbEZUa1N1UW1DQ1wiOyIsICJleHBvcnQgdmFyIHNldHRpbmdzID0gW1xuICB7XG4gICAgbmFtZTogXCJNb2RlXCIsXG4gICAgdHlwZTogXCJMaXN0XCIsXG4gICAgbW9kZXM6IFtcIkFiaWxpdGllc1wiLCBcIlBhY2tldFwiXSxcbiAgICBjdXJyZW50OiAwLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KSB7XG4gIHBhcmVudC5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKCFNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZykge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhcmVudC5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcyAhPSBudWxsKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZyA9IHRydWU7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwYXJlbnQub25EaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzICE9IG51bGwpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nID0gZmFsc2U7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuICBwYXJlbnQuc2V0dGluZ3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJIZWlnaHRcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDYsXG4gICAgICBzdGVwOiAwLjUsXG4gICAgICBjdXJyZW50OiAxLjVcbiAgICB9XG4gIF1cblxuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCAhPSBwYXJlbnQuc2V0dGluZ3NbMF0uY3VycmVudCkge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50O1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50O1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDAuNjAwMDAwMDIzODQxODU3OTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxufVxuXG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KSB7XG4gIHZhciBjYXRjaGZpc2ggPSBmYWxzZTtcbiAgdmFyIGNhdGNoYWdhaW4gPSBmYWxzZTtcbiAgcGFyZW50Lm9uVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHBhcmVudC5nZXRFbmFibGVkKCkpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaWYgKGNhdGNoYWdhaW4gJiYgTW9kQVBJLnBsYXllci5maXNoRW50aXR5ID09IG51bGwpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5yaWdodENsaWNrTW91c2UoKTtcbiAgICAgICAgY2F0Y2hhZ2FpbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoTW9kQVBJLnBsYXllci5maXNoRW50aXR5ICE9IG51bGwpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGlmIChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkudGlja3NFeGlzdGVkIDwgMTAwICYmIGNhdGNoZmlzaCA9PSBmYWxzZSkge1xuICAgICAgICAgIGNhdGNoZmlzaCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS5pc0luV2F0ZXIoKSAmJiBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkudGlja3NFeGlzdGVkID4gMTAwICYmIChNYXRoLmNlaWwoTW9kQVBJLnBsYXllci5maXNoRW50aXR5LnkpIC0gTW9kQVBJLnBsYXllci5maXNoRW50aXR5LnkpID49IC4zKSB7XG4gICAgICAgICAgaWYgKGNhdGNoZmlzaCkge1xuICAgICAgICAgICAgY2F0Y2hmaXNoID0gZmFsc2U7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIE1vZEFQSS5yaWdodENsaWNrTW91c2UoKTtcbiAgICAgICAgICAgIGNhdGNoYWdhaW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Lm9uRW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgY2F0Y2hmaXNoID0gdHJ1ZTtcbiAgfVxuXG59XG5cbiIsICJleHBvcnQgZnVuY3Rpb24gaW5pdChwYXJlbnQpIHtcblxuICBwYXJlbnQuY3JzaEludGVyID0gbnVsbDtcbiAgXG4gIHBhcmVudC5zZXR0aW5ncyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlBQU1wiLFxuICAgICAgdHlwZTogXCJTbGlkZXJcIixcbiAgICAgIG1pbjogMjAsXG4gICAgICBtYXg6IDIwMDAwLFxuICAgICAgc3RlcDogMTAsXG4gICAgICBjdXJyZW50OiA1MDAwXG4gICAgfVxuICBdXG4gIFxuICBmdW5jdGlvbiBjcmFzaCgpIHtcbiAgICBpZihNb2RBUEkucGxheWVyICE9IG51bGwpe1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnQuc2V0dGluZ3NbMF0uY3VycmVudDsgaSsrKSB7XG4gICAgICAgIE1vZEFQSS5wbGF5ZXIuc3dpbmdJdGVtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Lm9uRW5hYmxlID0gZnVuY3Rpb24oKXtcbiAgICBwYXJlbnQuY3JzaEludGVyID0gc2V0SW50ZXJ2YWwoY3Jhc2gsIDEwMDApO1xuICB9XG4gIFxuICBwYXJlbnQub25EaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYocGFyZW50LmNyc2hJbnRlciAhPSBudWxsKXtcbiAgICAgIGNsZWFySW50ZXJ2YWwocGFyZW50LmNyc2hJbnRlcik7XG4gICAgfVxuICB9XG59IiwgImV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCl7XG4gICAgXG4gICAgZnVuY3Rpb24gaHNsMnJnYihoLCBzLCBsKXtcbiAgICAgIHMgLz0gMTAwO1xuICAgICAgbCAvPSAxMDA7XG4gICAgICBjb25zdCBrID0gbiA9PiAobiArIGggLyAzMCkgJSAxMjtcbiAgICAgIGNvbnN0IGEgPSBzICogTWF0aC5taW4obCwgMSAtIGwpO1xuICAgICAgY29uc3QgZiA9IG4gPT5cbiAgICAgICAgbCAtIGEgKiBNYXRoLm1heCgtMSwgTWF0aC5taW4oayhuKSAtIDMsIE1hdGgubWluKDkgLSBrKG4pLCAxKSkpO1xuICAgICAgcmV0dXJuIFsyNTUgKiBmKDApLCAyNTUgKiBmKDgpLCAyNTUgKiBmKDQpXTtcbiAgICB9O1xuICBcbiAgICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbiAoKXtcbiAgICAgIFxuICAgICAgaWYocGFyZW50LmdldEVuYWJsZWQoKSl7XG4gICAgICAgIHZhciByZ2IgPSBoc2wycmdiKERhdGUubm93KCkvMTAgJSAzNjAsMTAwLDUwKTtcbiAgICAgICAgdmFyIHJlZCA9IHJnYlswXTtcbiAgICAgICAgdmFyIGdyZWVuID0gcmdiWzFdO1xuICAgICAgICB2YXIgYmx1ZSA9IHJnYlsyXTtcbiAgICAgICAgdmFyIGFscGhhID0gMjU1O1xuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kdGhlV29ybGQuJGNsb3VkQ29sb3VyID0gQmlnSW50KChyZWQgPDwgMjQpICsgKGdyZWVuIDw8IDE2KSArIChibHVlIDw8IDgpICsgKGFscGhhKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJlbnQub25EaXNhYmxlID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmKE1vZEFQSS5tY2luc3RhbmNlLiR0aGVXb3JsZCAhPSBudWxsKXtcbiAgICAgICAgdmFyIHJnYiA9IGhzbDJyZ2IoMCwwLDEwMCk7XG4gICAgICAgIHZhciByZWQgPSByZ2JbMF07XG4gICAgICAgIHZhciBncmVlbiA9IHJnYlsxXTtcbiAgICAgICAgdmFyIGJsdWUgPSByZ2JbMl07XG4gICAgICAgIHZhciBhbHBoYSA9IDI1NTtcbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJHRoZVdvcmxkLiRjbG91ZENvbG91ciA9IEJpZ0ludCgocmVkIDw8IDI0KSArIChncmVlbiA8PCAxNikgKyAoYmx1ZSA8PCA4KSArIChhbHBoYSkpXG4gICAgICB9XG4gICAgfVxuICB9IiwgImltcG9ydCAqIGFzIGZsaWdodE1PRCBmcm9tIFwiLi4vY2hlYXRzL2ZsaWdodC50c1wiO1xuaW1wb3J0ICogYXMgZnVsbGJyaWdodE1PRCBmcm9tIFwiLi4vY2hlYXRzL2F1dG9maXNoLnRzXCI7XG5pbXBvcnQgKiBhcyBzdGVwTU9EIGZyb20gXCIuLi9jaGVhdHMvc3RlcC50c1wiO1xuaW1wb3J0ICogYXMgYXV0b2Zpc2hNT0QgZnJvbSBcIi4uL2NoZWF0cy9hdXRvZmlzaC50c1wiO1xuaW1wb3J0ICogYXMgc2VydmVyY3Jhc2hlck1PRCBmcm9tIFwiLi4vY2hlYXRzL3NlcnZlcmNyYXNoZXIudHNcIjtcbmltcG9ydCAqIGFzIHJnYmNsb3Vkc01PRCBmcm9tIFwiLi4vY2hlYXRzL3JnYmNsb3Vkcy50c1wiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4uL2d1aVwiO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShtb2QpIHtcbiAgLy8gbW9kdWxlIGZ1bmN0aW9uc1xuXG4gIHRoaXMuZW5hYmxlZERPTk9UVVNFID0gZmFsc2U7XG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkgeyB9O1xuICB0aGlzLm9uRW5hYmxlID0gZnVuY3Rpb24oKSB7IH07XG4gIHRoaXMub25EaXNhYmxlID0gZnVuY3Rpb24oKSB7IH07XG4gIHRoaXMuZW5hYmxlID0gZnVuY3Rpb24oKSB7IHRoaXMuZW5hYmxlZERPTk9UVVNFID0gdHJ1ZTsgdGhpcy5vbkVuYWJsZSgpOyB1aS5yZWZyZXNoTW9kdWxlcygpIH07XG4gIHRoaXMuZGlzYWJsZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmVuYWJsZWRET05PVFVTRSA9IGZhbHNlOyB0aGlzLm9uRGlzYWJsZSgpOyB1aS5yZWZyZXNoTW9kdWxlcygpIH07XG4gIHRoaXMub25LZXkgPSBmdW5jdGlvbihlKXt9O1xuICB0aGlzLm9uTUNLZXkgPSBmdW5jdGlvbihlKXt9O1xuICB0aGlzLmdldEVuYWJsZWQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZW5hYmxlZERPTk9UVVNFOyB9O1xuICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmVuYWJsZWRET05PVFVTRSA9ICF0aGlzLmVuYWJsZWRET05PVFVTRTsgaWYgKHRoaXMuZW5hYmxlZERPTk9UVVNFKSB7IHRoaXMub25FbmFibGUoKSB9IGVsc2UgeyB0aGlzLm9uRGlzYWJsZSgpOyB9IH07XG4gIC8vbWMgZnVuY3Rpb25zXG4gIHRoaXMub25VcGRhdGUgPSBmdW5jdGlvbigpIHsgfTtcblxuICB0aGlzLmFsZXJ0ID0gZnVuY3Rpb24oKSB7IGFsZXJ0KCkgfTtcblxuICB0aGlzLnNldHRpbmdzID0gW11cblxuICBtb2QuaW5pdCh0aGlzKTtcbn1cblxuZXhwb3J0IHZhciBjYXRlZ29yaWVzID0ge1xuICBtb3ZlbWVudDogXCJNb3ZlbWVudFwiLFxuICBwbGF5ZXI6IFwiUGxheWVyXCIsXG4gIHJlbmRlcjogXCJSZW5kZXJcIixcbiAgZnVuOiBcIkZ1blwiXG59XG5cbmV4cG9ydCB2YXIgbW9kdWxlcyA9IHtcbiAgZmxpZ2h0OiB7XG4gICAgbmFtZTogXCJGbGlnaHRcIixcbiAgICBmdW5jdGlvbjogbmV3IHRlbXBsYXRlKGZsaWdodE1PRCksXG4gICAgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGxvd3MgeW91IHRvIGZseVwiLFxuICB9LFxuICBzdGVwOiB7XG4gICAgbmFtZTogXCJTdGVwXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShzdGVwTU9EKSxcbiAgICBjYXRlZ29yeTogXCJNb3ZlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbG93cyB5b3UgdG8gc3RlcFwiLFxuICB9LFxuICBhdXRvZmlzaDoge1xuICAgIG5hbWU6IFwiQXV0b0Zpc2hcIixcbiAgICBmdW5jdGlvbjogbmV3IHRlbXBsYXRlKGF1dG9maXNoTU9EKSxcbiAgICBjYXRlZ29yeTogXCJQbGF5ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBdXRvbWF0aWNhbGx5IGNhc3RzIGFuZCByZWVscyByb2RcIixcbiAgfSxcblxuICBzZXJ2ZXJjcmFzaGVyOiB7XG4gICAgbmFtZTogXCJTZXJ2ZXIgQ3Jhc2hlclwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoc2VydmVyY3Jhc2hlck1PRCksXG4gICAgY2F0ZWdvcnk6IFwiRXhwbG9pdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNlbmRzIGp1c3QgYSBmZXcgc3dpbmcgcGFja2V0cyA7KVwiLFxuICB9LFxuXG4gIHJnYmNsb3Vkczoge1xuICAgIG5hbWU6IFwiUkdCIENsb3Vkc1wiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUocmdiY2xvdWRzTU9EKSxcbiAgICBjYXRlZ29yeTogXCJSZW5kZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDbG91ZHMgZ28gd2VlZWVcIixcbiAgfVxufSIsICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vdXRpbC9jbGllbnROYW1lXCI7XG5pbXBvcnQgeyBtb2R1bGVzLCBjYXRlZ29yaWVzIH0gZnJvbSBcIi4vdXRpbC9hY3R1YWxNb2R1bGVzXCI7XG5cblxuLy8gZGVsZXRlIHRoZSB1aVxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpICE9IG51bGwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpLnJlbW92ZSgpO1xuICB9XG59XG5cbnZhciBjb250YWluZXI7XG5cblxuLy8gY2hlY2sgaWYgb3BlblxuZXhwb3J0IGZ1bmN0aW9uIGlzT3BlbigpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIikgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5cbi8vIG9wZW4gYSBzZXR0aW5nIG1lbnVcbmV4cG9ydCBmdW5jdGlvbiBzZXR0aW5nKG1vZHVsZSkge1xuICAvKnZhciBsc3QgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJNb2RlXCIsXG4gICAgICB0eXBlOiBcIkxpc3RcIixcbiAgICAgIG1vZGVzOiBbXCJBYmlsaXRpZXNcIiwgXCJQYWNrZXRcIl0sXG4gICAgICBjdXJyZW50OiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNwZWVkXCIsXG4gICAgICB0eXBlOiBcIlNsaWRlclwiLFxuICAgICAgbWluOiAxLFxuICAgICAgbWF4OiA0LFxuICAgICAgY3VycmVudDogMVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUZXN0XCIsXG4gICAgICB0eXBlOiBcIkJvb2xlYW5cIixcbiAgICAgIHRvZ2dsZWQ6IHRydWVcbiAgICB9LFxuICBdKi9cbiAgdmFyIGxzdCA9IG1vZHVsZS5mdW5jdGlvbi5zZXR0aW5ncztcbiAgY29uc29sZS5sb2cobHN0KTtcbiAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzLmNsYXNzTmFtZSA9IFwic2V0dGluZ1wiO1xuICBzLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBzLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICBzLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcbiAgcy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgcy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgcy5zdHlsZS5wYWRkaW5nID0gXCIxNXB4XCI7XG4gIHMuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG4gIHMuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcbiAgcy5zdHlsZS5hbmltYXRpb24gPSBcInJnYiA0cyBsaW5lYXIgaW5maW5pdGVcIjtcbiAgcy5zdHlsZS53aWR0aCA9IFwiMTUlXCI7XG4gIHMuc3R5bGUuaGVpZ2h0ID0gXCI1MCVcIjtcbiAgcy5zdHlsZS50b3AgPSBcIjEwMHB4XCJcbiAgcy5zdHlsZS5sZWZ0ID0gXCIxMDBweFwiXG5cbiAgcy5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcbiAgcy5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG5cbiAgcy5zdHlsZS5yZXNpemUgPSBcImJvdGhcIjtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IG1vZHVsZS5uYW1lO1xuICB0aXRsZS5zdHlsZS5mb250U2l6ZSA9IFwiMjJweFwiO1xuICBzLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICB2YXIgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG9zZS5pbm5lclRleHQgPSBcIlhcIjtcbiAgY2xvc2Uuc3R5bGUuZm9udFNpemUgPSBcIjI4cHhcIjtcbiAgY2xvc2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGNsb3NlLnN0eWxlLnJpZ2h0ID0gXCIxNXB4XCI7XG4gIGNsb3NlLnN0eWxlLnRvcCA9IFwiMTBweFwiO1xuICBjbG9zZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgY2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHMucmVtb3ZlKCk7XG4gIH07XG4gIHMuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcblxuICBmb3IgKGxldCBpIGluIGxzdCkge1xuICAgIGlmIChsc3QuaGFzT3duUHJvcGVydHkoaSkpIHtcblxuICAgICAgdmFyIGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJnLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTAwLDEwMCwxMDAsMC41KVwiO1xuICAgICAgYmcuc3R5bGUubWFyZ2luID0gXCI1cHhcIjtcbiAgICAgIGJnLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgICAgYmcuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgICBzLmFwcGVuZENoaWxkKGJnKTtcbiAgICAgIGlmIChsc3RbaV0udHlwZSA9PSBcIkxpc3RcIikge1xuICAgICAgICB2YXIgc2VsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlbERlc2Muc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgc2VsRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS5jdXJyZW50fWA7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHNlbERlc2MpO1xuICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbHN0W2ldLmN1cnJlbnQgPSBwYXJzZUludChzZWwudmFsdWUpO1xuICAgICAgICAgIHNlbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogaW4gbHN0W2ldLm1vZGVzKSB7XG4gICAgICAgICAgaWYgKGxzdFtpXS5tb2Rlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHQuaW5uZXJUZXh0ID0gbHN0W2ldLm1vZGVzW2pdO1xuICAgICAgICAgICAgb3B0LnZhbHVlID0gaiArIFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJnLmFwcGVuZENoaWxkKHNlbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobHN0W2ldLnR5cGUgPT0gXCJTbGlkZXJcIikge1xuICAgICAgICB2YXIgc2xpZGVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2xpZGVEZXNjLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgICAgIHNsaWRlRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS5jdXJyZW50fWA7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHNsaWRlRGVzYyk7XG4gICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgc2xpZGUudHlwZSA9IFwicmFuZ2VcIjtcbiAgICAgICAgc2xpZGUuc3RlcCA9IGxzdFtpXS5zdGVwO1xuICAgICAgICBzbGlkZS5taW4gPSBsc3RbaV0ubWluO1xuICAgICAgICBzbGlkZS5tYXggPSBsc3RbaV0ubWF4O1xuICAgICAgICBzbGlkZS52YWx1ZSA9IGxzdFtpXS5jdXJyZW50O1xuICAgICAgICBzbGlkZS5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxzdFtpXS5jdXJyZW50ID0gcGFyc2VGbG9hdChzbGlkZS52YWx1ZSk7XG4gICAgICAgICAgc2xpZGVEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgfVxuICAgICAgICBiZy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICB9IGVsc2UgaWYgKGxzdFtpXS50eXBlID09IFwiQm9vbGVhblwiKSB7XG4gICAgICAgIHZhciBib29sRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJvb2xEZXNjLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgICAgIGJvb2xEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLnRvZ2dsZWR9YDtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoYm9vbERlc2MpO1xuICAgICAgICB2YXIgYm9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgYm9vbC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBib29sLmNoZWNrZWQgPSBsc3RbaV0udG9nZ2xlZDtcbiAgICAgICAgYm9vbC5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxzdFtpXS50b2dnbGVkID0gYm9vbC5jaGVja2VkO1xuICAgICAgICAgIGJvb2xEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLnRvZ2dsZWR9YDtcbiAgICAgICAgfVxuICAgICAgICBiZy5hcHBlbmRDaGlsZChib29sKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vL2NyZWF0ZSB0aGUgZ3VpXG5leHBvcnQgZnVuY3Rpb24gb3BlbigpIHtcbiAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG4gIHZhciBjbiA9IGNsaWVudE5hbWU7XG5cbiAgY29uc3QgdWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHVpLmlkID0gXCJ1aVwiO1xuICB1aS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgdWkuc3R5bGUud2lkdGggPSBcIjY2JVwiO1xuICB1aS5zdHlsZS5oZWlnaHQgPSBcIjY2JVwiO1xuICB1aS5zdHlsZS50b3AgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAqIDAuMTY1ICsgXCJweFwiO1xuICB1aS5zdHlsZS5sZWZ0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAqIDAuMTY1ICsgXCJweFwiO1xuICB1aS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgdWkuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICB1aS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLDAuNzUpXCI7XG4gIHVpLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICB1aS5zdHlsZS5wYWRkaW5nID0gXCIxNXB4XCI7XG4gIHVpLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCA0MHB4IHJnYmEoMCwgMTk1LCAyNTUsMC41KVwiO1xuICB1aS5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcbiAgdWkuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcbiAgdWkuc3R5bGUuYW5pbWF0aW9uID0gXCJyZ2IgNHMgbGluZWFyIGluZmluaXRlXCI7XG5cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVpKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IGNuO1xuICB0aXRsZS5zdHlsZS5mb250U2l6ZSA9IFwiMjRweFwiO1xuICB0aXRsZS5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xuICB1aS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgdmFyIHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc2VhcmNoLnN0eWxlLndpZHRoID0gXCIzMyVcIjtcbiAgc2VhcmNoLnR5cGUgPSBcInRleHRcIjtcbiAgc2VhcmNoLnN0eWxlLmJvcmRlciA9IFwic29saWQgMnB4IHJnYmEoMjAwLDIwMCwyMDAsMC41KVwiO1xuICBzZWFyY2guc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5jb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG4gIHNlYXJjaC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgc2VhcmNoLnN0eWxlLnBhZGRpbmcgPSBcIjhweFwiO1xuICBzZWFyY2guc3R5bGUubWFyZ2luTGVmdCA9IFwiMjBweFwiO1xuICBzZWFyY2guc3R5bGUuZm9udFNpemUgPSBcIjIycHhcIjtcbiAgc2VhcmNoLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoNTAsNTAsNTAsLjI0KVwiO1xuICBzZWFyY2gucGxhY2Vob2xkZXIgPSBcIlx1RDgzRFx1REQwRVx1RkUwRSBTZWFyY2hcIlxuICBzZWFyY2guc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICB0aXRsZS5hcHBlbmRDaGlsZChzZWFyY2gpO1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UuaW5uZXJUZXh0ID0gXCJYXCI7XG4gIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gXCIyOHB4XCI7XG4gIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjbG9zZS5zdHlsZS5yaWdodCA9IFwiMTVweFwiO1xuICBjbG9zZS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgY2xvc2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBkZXN0cm95KCk7XG4gIH07XG4gIHVpLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuXG5cbiAgdmFyIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhci5zdHlsZS5vdmVyZmxvd1ggPSBcInNjcm9sbFwiO1xuICB1aS5hcHBlbmRDaGlsZChiYXIpO1xuXG4gIGZvciAobGV0IGkgaW4gY2F0ZWdvcmllcykge1xuICAgIGlmIChjYXRlZ29yaWVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBjYXRlZ29yaWVzW2ldO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMDAsMTAwLDEwMCwwLjUpXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgY2F0ZWdvcnkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9O1xuXG4gICAgICBiYXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjZW50ZXJcIik7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gIHVpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cblxuICByZWZyZXNoTW9kdWxlcygpO1xufVxuXG5cbi8vIFJlbG9hZCBtb2R1bGUgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hNb2R1bGVzKCkge1xuICBpZiAoaXNPcGVuKCkpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpIGluIG1vZHVsZXMpIHtcbiAgICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhciBtb2RsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1vZGx0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1vZGx0aXRsZS5pbm5lclRleHQgPSBgJHttb2R1bGVzW2ldLm5hbWV9YDtcbiAgICAgICAgbW9kbHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gICAgICAgIG1vZGx0aXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIG1vZGwuYXBwZW5kQ2hpbGQobW9kbHRpdGxlKTtcblxuICAgICAgICBtb2RsLnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICBtb2RsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXG4gICAgICAgIG1vZGwuc3R5bGUud2lkdGggPSBcIjI1JVwiO1xuICAgICAgICBtb2RsLnN0eWxlLmhlaWdodCA9IFwiMjUlXCI7XG4gICAgICAgIG1vZGwuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgICAgbW9kbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgICAgaWYgKG1vZHVsZXNbaV0uZnVuY3Rpb24uZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgICAgbW9kbC5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMTVweCByZ2JhKDAsIDI1NSwgMCwxKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kbC5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIG1vZHVsZXNbaV0uZnVuY3Rpb24udG9nZ2xlKCk7XG4gICAgICAgICAgcmVmcmVzaE1vZHVsZXMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBtb2RsLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgbmV3IHNldHRpbmcobW9kdWxlc1tpXSk7XG4gICAgICAgICAgY29uc29sZS5sb2cobW9kdWxlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgcmVxdWlyZV9hbGwgfSBmcm9tIFwiLi9yZXF1aXJlX2FsbC50c1wiO1xucmVxdWlyZV9hbGwoKVxuaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL3V0aWwvY2xpZW50TmFtZS50c1wiO1xuaW1wb3J0IHsgbG9nVG9Db25zb2xlIH0gZnJvbSBcIi4vdXRpbC9jb25zb2xlTG9nZ2VyXCI7XG5pbXBvcnQgeyBsb2dUb0NoYXQgfSBmcm9tIFwiLi91dGlsL2NoYXRMb2dnZXJcIjtcbmltcG9ydCB7IGluaXRodWQgfSBmcm9tIFwiLi9IVUQudHNcIjtcbmltcG9ydCAqIGFzIGFzc2V0cyBmcm9tIFwiLi9hc3NldHNcIjtcbmltcG9ydCAqIGFzIHVpIGZyb20gXCIuL2d1aS50c1wiO1xuXG5sb2dUb0NvbnNvbGUoXCJJbml0Li4uXCIpO1xubG9nVG9DaGF0KFwiSW5pdC4uLlwiKTtcbmluaXRodWQoKVxubG9nVG9DaGF0KFwiTG9hZGluZyBtb2R1bGVzLi4uXCIpO1xuXG5pbXBvcnQgeyBtb2R1bGVzIH0gZnJvbSBcIi4vdXRpbC9hY3R1YWxNb2R1bGVzXCI7XG5cblxuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICBpZiAoXG4gICAgZS5sb2NhdGlvbiA9PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQgJiZcbiAgICBlLmtleSA9PSBcIlNoaWZ0XCIgJiZcbiAgICAhdWkuaXNPcGVuKClcbiAgKSB7XG4gICAgdWkub3BlbigpO1xuICB9XG4gIGZvciAobGV0IGtleSBpbiBtb2R1bGVzKSB7XG4gICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbW9kdWxlc1trZXldLmZ1bmN0aW9uLm9uS2V5KGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwia2V5XCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5ID09IDU0KSB7XG4gICAgdWkuZGVzdHJveTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vbk1DS2V5KGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xufWApO1xuXG5zdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5iYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMDAsMTAwLDAuNSk7XG5maWx0ZXI6IGJsdXIoNHB4KTtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzIHJnYiB7XG4gIDAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAwLDAuNzUpOyB9XG4gIDE2JSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMjU1LCAwLDAuNzUpOyB9XG4gIDMzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDI1NSwgMCwwLjc1KTsgfVxuICA1MCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDI1NSwwLjc1KTsgfVxuICA2NiUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAyNTUsMC43NSk7IH1cbiAgODMlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAyNTUsMC43NSk7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxufWApO1xuXG5mdW5jdGlvbiBjdXN0b21VSSgpIHtcbiAgLy9AdHMtaWdub3JlXG4gIGlmIChNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbiAhPSBudWxsKSB7XG4gICAgaWYgKFxuICAgICAgTW9kQVBJLmN1cnJlbnRTY3JlZW4oKS5zdGFydHNXaXRoKFwibmV0Lm1pbmVjcmFmdC5jbGllbnQuZ3VpLkd1aU1haW5NZW51XCIpXG4gICAgKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBzaW5nbGVQbGF5ZXIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMF07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBtdWx0aVBsYXllciA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVsxXTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIG1vZHMgPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMl07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBmb3JrT25HaXRIdWIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbM107XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBvcHRpb25zID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzRdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgZWRpdFByb2ZpbGUgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNV07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBsYXVuZ3VhZ2UgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNl07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBjdXJyZW50U2NyZWVuID0gTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW47XG5cbiAgICAgIHZhciBidXR0b25EaXN0YW5jZSA9IDQyO1xuICAgICAgdmFyIGJ1dHRvbkRpc3RhbmNlUmVsID0gMjI7XG4gICAgICB2YXIgYnV0dG9uU3BhY2luZyA9IDI7XG4gICAgICB2YXIgYnV0dG9uV2lkdGggPSAxMDA7XG4gICAgICB2YXIgZW5jID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgICAvL29wdGlvbnNcbiAgICAgIG9wdGlvbnMuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIG9wdGlvbnMuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vbW9kc1xuICAgICAgbW9kcy4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoIC8gMjtcbiAgICAgIG1vZHMuJHhQb3NpdGlvbjAgPSBvcHRpb25zLiR4UG9zaXRpb24wIC0gYnV0dG9uV2lkdGggLyAyIC0gYnV0dG9uU3BhY2luZztcbiAgICAgIG1vZHMuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vU2luZ2xlUGxheWVyXG4gICAgICBzaW5nbGVQbGF5ZXIuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIHNpbmdsZVBsYXllci4keVBvc2l0aW9uID0gb3B0aW9ucy4keVBvc2l0aW9uIC0gYnV0dG9uRGlzdGFuY2VSZWw7XG4gICAgICAvL011bHRpUGxheWVyXG4gICAgICBtdWx0aVBsYXllci4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoICsgbGF1bmd1YWdlLiR3aWR0aDEzICsgYnV0dG9uU3BhY2luZztcbiAgICAgIG11bHRpUGxheWVyLiR4UG9zaXRpb24wID1cbiAgICAgICAgc2luZ2xlUGxheWVyLiR4UG9zaXRpb24wICsgYnV0dG9uV2lkdGggKyBidXR0b25TcGFjaW5nO1xuICAgICAgbXVsdGlQbGF5ZXIuJHlQb3NpdGlvbiA9IG9wdGlvbnMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgLy9FZGl0IHByb2ZpbGVcbiAgICAgIGVkaXRQcm9maWxlLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBlZGl0UHJvZmlsZS4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9MYW5nXG4gICAgICBsYXVuZ3VhZ2UuJHhQb3NpdGlvbjAgPVxuICAgICAgICBlZGl0UHJvZmlsZS4keFBvc2l0aW9uMCArIGVkaXRQcm9maWxlLiR3aWR0aDEzICsgYnV0dG9uU3BhY2luZztcbiAgICAgIGxhdW5ndWFnZS4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9Gb3JrXG4gICAgICBmb3JrT25HaXRIdWIuJHdpZHRoMTMgPSBidXR0b25XaWR0aCAvIDI7XG4gICAgICBmb3JrT25HaXRIdWIuJHlQb3NpdGlvbiA9IG1vZHMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgZm9ya09uR2l0SHViLiR4UG9zaXRpb24wID0gbW9kcy4keFBvc2l0aW9uMDtcbiAgICAgIGZvcmtPbkdpdEh1Yi4kZGlzcGxheVN0cmluZy4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIkZvcmtcIik7XG5cbiAgICAgIGN1cnJlbnRTY3JlZW4uJG9wZW5HTFdhcm5pbmcxLiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiXCIpO1xuICAgICAgLy9jdXJyZW50U2NyZWVuLiRzcGxhc2hUZXh0LiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiSnVzdGluIGlzIHRoZSBzcGVkIHZlcnNpb24gb2YgRGFuaWVsXCIpXG5cbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpID09IG51bGwpIHtcbiAgICAgICAgdmFyIHNlcnZlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZXJ2ZXJzLmlkID0gXCJzZXJ2ZXJwaW5nbGlzdFwiO1xuXG4gICAgICAgIHZhciBwaW5ncyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFlb24gTmV0d29ya1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9hZW9uLW5ldHdvcmsubmV0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFyY2ggTUNcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vbWMuYXJjaC5sb2xcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiSGVsbGl1bSBOZXR3b3JrXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL2hlbGx0ZWNoLmNjXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNsZXZlciBUZWFjaGluZ1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9jbGV2ZXItdGVhY2hpbmcuY29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlp5dGhcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vbWMuenl0aC5tZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgc2VydmVycy5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstYWxsXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUudG9wID0gXCIxMCVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5sZWZ0ID0gXCIyLjUlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUud2lkdGggPSBcIjE1JVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmhlaWdodCA9IFwiODAlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuXG4gICAgICAgIHBpbmdzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGNvbnN0IGN1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3VyLnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICAgIHNlcnZlcnMuYXBwZW5kQ2hpbGQoY3VyKTtcblxuICAgICAgICAgIGNvbnN0IGN1cmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXJoMi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICAgIGN1cmgyLmlubmVyVGV4dCA9IGUubmFtZTtcbiAgICAgICAgICBjdXIuYXBwZW5kQ2hpbGQoY3VyaDIpO1xuXG4gICAgICAgICAgY29uc3QgY3Vyc2VydmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXJzZXJ2ZXIuaW5uZXJUZXh0ID0gZS5hZGRyZXNzO1xuICAgICAgICAgIGN1ci5hcHBlbmRDaGlsZChjdXJzZXJ2ZXIpO1xuXG4gICAgICAgICAgY29uc3QgcGxheWVyaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcGxheWVyaW5mby5pbm5lclRleHQgPSBcIm5vdCBjb25uZWN0ZWRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gICAgICAgICAgY3VyLmFwcGVuZENoaWxkKHBsYXllcmluZm8pO1xuXG4gICAgICAgICAgY29uc3QgdGVzdHdlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoZS5hZGRyZXNzKTtcbiAgICAgICAgICBjb25zdCB0aW1lcGluZyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICB0ZXN0d2Vic29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlc3R3ZWJzb2NrZXQuc2VuZChcIkFjY2VwdDogTU9URFwiKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGVzdHdlYnNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGUuZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGF0ID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdFtcInR5cGVcIl0udG9Mb3dlckNhc2UoKSA9PT0gXCJtb3RkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyaW5mby5pbm5lclRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgIGRhdFtcImRhdGFcIl1bXCJvbmxpbmVcIl0gKyBcIi9cIiArIGRhdFtcImRhdGFcIl1bXCJtYXhcIl07XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUuY29sb3IgPSBcImxpbWVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5zdHlsZS5mbG9hdCA9IFwicmlnaHRcIjtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5pbm5lclRleHQgKz0gRGF0ZS5ub3coKSAtIHRpbWVwaW5nICsgXCJtc1wiO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJpbmZvLmFwcGVuZENoaWxkKHBpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlcnZlcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSAhPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjdXN0dWkgPSBzZXRJbnRlcnZhbChjdXN0b21VSSwgNTApO1xuXG4vL0N1c3RvbSBDdXJzb3JcbmRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0uc3R5bGUuY3Vyc29yID1cbiAgJ3VybChcIicgKyBhc3NldHMuY3Vyc29yICsgJ1wiKSwgYXV0byc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICd1cmwoXCInICsgYXNzZXRzLmN1cnNvciArICdcIiksIGF1dG8nO1xuXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuICBjbGVhckludGVydmFsKGN1c3R1aSk7XG4gIHVpLmRlc3Ryb3koKTtcbiAgZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXS5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikgIT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikucmVtb3ZlKCk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQU8sV0FBUyxjQUFhO0FBQzNCLFdBQU8sUUFBUSxRQUFRO0FBQ3ZCLFdBQU8sUUFBUSxTQUFTO0FBQ3hCLFdBQU8sUUFBUSxVQUFVO0FBQUEsRUFDM0I7OztBQ0ZPLE1BQUksYUFBYTs7O0FDQWpCLFdBQVMsYUFBYSxLQUFLO0FBQ2hDLFlBQVEsSUFBSSxJQUFJLFVBQVUsS0FBSyxHQUFHLEVBQUU7QUFBQSxFQUN0Qzs7O0FDRk8sV0FBUyxVQUFVLEtBQUs7QUFFN0IsV0FBTyxjQUFjLEVBQUMsS0FBSyxTQUFNLFVBQVUsVUFBTyxHQUFHLEdBQUUsQ0FBQztBQUFBLEVBQzFEOzs7QUNKTyxXQUFTLFVBQVM7QUFDdkIsV0FBTyxpQkFBaUIsV0FBVyxXQUFXO0FBQzVDLGFBQU8sU0FBUyxTQUFTO0FBQ3pCLGFBQU8sU0FBUyxZQUFZO0FBQzVCLGFBQU8sU0FBUyxTQUFTO0FBQ3pCLGFBQU8sU0FBUyxZQUFZO0FBQzVCLGFBQU8sU0FBUyxXQUFXO0FBQzNCLGFBQU8sU0FBUyxXQUFXO0FBQzNCLGFBQU8sU0FBUyxPQUFPO0FBQ3ZCLFVBQUksS0FBSyxPQUFPO0FBRWhCLFVBQUksTUFBTSxPQUFPO0FBQ2pCLFVBQUksV0FBVztBQUNmLFVBQUksVUFBVyxFQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFDLENBQUM7QUFDakMsVUFBSSxNQUFNLEVBQUMs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QUFXO0FBQzFDLGlDQUFXLFlBQVksSUFBSTtBQUUzQiw4QkFBUSxJQUFJLEdBQUc7QUFBQSxvQkFDakI7QUFBQSxrQkFDRixTQUFTLEtBQUs7QUFDWiw0QkFBUSxJQUFJLEdBQUc7QUFBQSxrQkFDakI7QUFBQSxnQkFDRjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRixDQUFDO0FBQ0QsbUJBQVMsS0FBSyxZQUFZLE9BQU87QUFBQSxRQUNuQztBQUFBLE1BQ0YsT0FBTztBQUNMLFlBQUksU0FBUyxlQUFlLGdCQUFnQixLQUFLLE1BQU07QUFDckQsbUJBQVMsZUFBZSxnQkFBZ0IsRUFBRSxPQUFPO0FBQUEsUUFDbkQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLFNBQVMsWUFBWSxVQUFVLEVBQUU7QUFHckMsV0FBUyxLQUFLLHFCQUFxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sU0FDcEQsVUFBaUIsU0FBUztBQUM1QixXQUFTLEtBQUssTUFBTSxTQUFTLFVBQWlCLFNBQVM7IiwKICAibmFtZXMiOiBbImluaXQiLCAiaW5pdCIsICJpbml0IiwgImluaXQiLCAiZSJdCn0K
