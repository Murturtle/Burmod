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

  // src/HUD.ts
  ModAPI.require("settings");
  ModAPI.settings.hud24h = false;
  ModAPI.settings.hudCoords = false;
  ModAPI.settings.hudFps = false;
  ModAPI.settings.hudPlayer = false;
  ModAPI.settings.hudStats = false;
  ModAPI.settings.hudWorld = false;
  ModAPI.settings.reload();
  function inithud() {
    ModAPI.addEventListener("drawhud", function() {
      let sr = ModAPI.ScaledResolution;
      let gsm = ModAPI.GlStateManager;
      gsm.pushMatrix();
      gsm.translate(4, 4, 0);
      gsm.scale(1.5, 1.5, 1);
      gsm.translate(-4, -4, 0);
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
  logToConsole("Init...");
  logToChat("Init...");
  ModAPI.require("player");
  ModAPI.require("network");
  ModAPI.require("settings");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWwvY2xpZW50TmFtZS50cyIsICIuLi9zcmMvdXRpbC9jb25zb2xlTG9nZ2VyLnRzIiwgIi4uL3NyYy91dGlsL2NoYXRMb2dnZXIudHMiLCAiLi4vc3JjL0hVRC50cyIsICIuLi9zcmMvYXNzZXRzLnRzIiwgIi4uL3NyYy9jaGVhdHMvZmxpZ2h0LnRzIiwgIi4uL3NyYy9jaGVhdHMvc3RlcC50cyIsICIuLi9zcmMvY2hlYXRzL2F1dG9maXNoLnRzIiwgIi4uL3NyYy9jaGVhdHMvc2VydmVyY3Jhc2hlci50cyIsICIuLi9zcmMvY2hlYXRzL3JnYmNsb3Vkcy50cyIsICIuLi9zcmMvdXRpbC9hY3R1YWxNb2R1bGVzLnRzIiwgIi4uL3NyYy9ndWkudHMiLCAiLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGdsb2JhbCB2YXJpYWJsZSBmb3IgdGhlIGNsaWVudCdzIG5hbWVcblxuZXhwb3J0IHZhciBjbGllbnROYW1lID0gXCJidXJtb2RcIjsiLCAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWUudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9Db25zb2xlKG1zZykge1xuICBjb25zb2xlLmxvZyhgWyR7Y2xpZW50TmFtZX1dICR7bXNnfWApO1xufSIsICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vY2xpZW50TmFtZS50c1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dUb0NoYXQobXNnKSB7XG4gIC8vQHRzLWlnbm9yZVxuICBNb2RBUEkuZGlzcGxheVRvQ2hhdCh7bXNnOiBgXHUwMEE3NVske2NsaWVudE5hbWV9XVx1MDBBN3IgJHttc2d9YH0pO1xufSIsICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vdXRpbC9jbGllbnROYW1lLnRzXCI7XG5Nb2RBUEkucmVxdWlyZShcInNldHRpbmdzXCIpO1xuTW9kQVBJLnNldHRpbmdzLmh1ZDI0aCA9IGZhbHNlXG5Nb2RBUEkuc2V0dGluZ3MuaHVkQ29vcmRzID0gZmFsc2Vcbk1vZEFQSS5zZXR0aW5ncy5odWRGcHMgPSBmYWxzZVxuTW9kQVBJLnNldHRpbmdzLmh1ZFBsYXllciA9IGZhbHNlXG5Nb2RBUEkuc2V0dGluZ3MuaHVkU3RhdHMgPSBmYWxzZVxuTW9kQVBJLnNldHRpbmdzLmh1ZFdvcmxkID0gZmFsc2Vcbk1vZEFQSS5zZXR0aW5ncy5yZWxvYWQoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0aHVkKCl7XG4gIE1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwiZHJhd2h1ZFwiLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgc3IgPSBNb2RBUEkuU2NhbGVkUmVzb2x1dGlvblxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGxldCBnc20gPSBNb2RBUEkuR2xTdGF0ZU1hbmFnZXJcbiAgICBnc20ucHVzaE1hdHJpeCgpO1xuICAgIGdzbS50cmFuc2xhdGUgKDQsIDQsIDApO1xuICAgIGdzbS5zY2FsZSgxLjUsIDEuNSwgMSk7XG4gICAgZ3NtLnRyYW5zbGF0ZSgtNCwgLTQsIDApOyBcbiAgICBNb2RBUEkuZHJhd1N0cmluZ1dpdGhTaGFkb3coe21zZzogY2xpZW50TmFtZSwgeDogNCx5OiA0LGNvbG9yOiAtMX0pO1xuICAgIGdzbS5wb3BNYXRyaXgoKTtcbiAgfSk7XG59XG4iLCAiZXhwb3J0IHZhciBjdXJzb3IgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBbENBWUFBQUJSZUlueEFBQUFBWE5TUjBJQXJzNGM2UUFBQ0ZGSlJFRlVXRWV0VjF0dlhOVVpYZnZjcnpNVE8wNUlLNFdxQ29LQ0NnalVxcFhhQ2xTa3dtL29QK2xMZWVHbEQrMUQyMVF0VWt0VnFSZW1nQ2hDSUVnaUF3MUdRSnFRZ0dNU1F4STdkbUtQNTM1dSs1eDlxYjQ5VGtVSVNoVEtrWTVtUEhPODExN3JXOS82OXJESEhyeEhTeW5oZWg0NmV6cm96SFhnZWU1UWEvMEtyNXRudklWaTZmRGh4UXhmMGNVSVVDc0Z5N1lScFFuU1ZnclhkZnRTaVgvbWRmUDc1MTU1OHhRQS9SWGhnZjM0Z2J1MUZCSmU0R1BmSFF2WXYzOEJnZStQR2lHT2xHWDVVdG5VNStxYURUenBqRk8vTi9ubHMwc1ZZMTkrQXdhd0xDdnNtZXZnb1llL2pmc2Z1QmVoNy9QdDN1RHk2dXJGalN0Yk81T2Fpek9TcWVPUlhaLzg0NytPYi80L2JJMmtrMG1HQXdmMjRTZVBQNEpISHYwK1NhcVhsMWZ4L29rejdQTGxxOGlMNGcwTjhWY282OVh1a2VOclh3SGdGQWNPN01mamp6K0tIejN5UGRpMmpmUG5MK0QwNlJWc2JlMDBlVjRjcjRWOFVXdjFKcGZOT2xRa2U1d1hDd3VMVGJjTGVUc2JNSkptV1dGcTk0TWZmaGNQZitkK2NpbUdnekZHb3pFNGI4UTBMejd0OXlkbkI4UFJKOU1zMzVCQ1hCYXg5eDlnc3RIdExwVzNCZmpZZzNmclBLK3dkKzhjSG5yNGZ0enpyVVB3QXhlKzV5TkpZc1JSb0xhMis5WEt5cXE4Y0hHajdnL0dHN3h1bGh5TC9XWHZYWGQ4Y1Bodzk3WmFadGMwSFBQemUvREFnL2ZpMEYzZk1HRHRUZ3NMQy9Ob3RWTnNiRnpWSzJkWDJZV0xhN0szUGRncHEyYko5cXlubGUyZWlYUXdpdSs4c3o1elpsNHVMdjVjQXV5bUxXUUFlVldqMDJuam5uc1A0ZURCcjhGeEhMUTdiY002YmNVZ1V3MEdJL09hWlVXVzVmbnFaRFI5YXpDYWZscFh6WWJuV3V0ZXUzVnB5TzN0YnJkNzA1b2F3Sm8zYUxVU2ZQUFFuY1k4Qk5ocXBaaWJheU5LUWpCWXhrZ1VEazB0bWw2L1AvcjQ0d3ZibTV0YlY0cThPRzhCNzdWRFora1BMeTJ1M0txZUJyQ3BHeVJwaklNSHY0NTkrL2ZDY1Z5emdYWTdSUkFGaUtQUUtKQ21DWlRVNnZMbWxqeDE4a081dHJhWlpYbDJsZ0hIQWo5NEZWTnhLbDlZYU82Nzd6Nzk1Sk5Qa3JRM3lHc0FoUkNJb3RDdzJ6UGZnV083YUxjVHBHbU1JUENSdGhKVHp6MmRqbG5qNnRZT1BsbytoL1gxcXlqeTRnS0F0N1hEam1VRlB4VTQvbGl6WUxRMkhJNFhGeGZGNXhtYnhpZEFQL0F4TjA4MVMrSFlOdElrbmdINkh1STBOdksyMnkwamE1Wmx1SEpsRytQaFZPZEZOYXA0dlphWDVjZVRhWGFPQVd1V2I1K3NOck9QdWtzM3Rvd0JuRTBMRjJtcmhUQU1ZZGtXa2lSRUdzZndQUTl4RWhuWDBnYW9SeHNoVUJZY1RWTVRvSnhNcHJ6Zkd4YkR5WFFiV3AvVXpIbWg0VGphUFhKa0RBMW1XTzdtcndGVVVzRnhIY1JwQWo4SVlGa1dramhDRW9md2ZjZjBJN0dqT251ZUI2VVU2cm9CaFg1WmNlVFRYQTlHWTR3bWVhNkUrc0RTMWo4YU8zL2QwM0ljMnhHL2pGYlc3WFpyZy90WlFCcFBmaERDWWpBZ3JZUUFQU1JKaEZacnhwQ1VrRktCOHhwMTA0QU1SKytyaXFNb1M4SHI1Z0t2K0xIeFpMb2tvQXNYOWthSyt1enZYdjczOERPQUVvN25JazUyQVMwTEtZR2trUUdNNHdpZFRzdTBpdXM2NEUxamVwSnpUcTRGWTVaUlJTc3BpN0thN1BTSDZ6czdvMDJoWkduWjlodStiVC8vcHhkZlcvOUN3SUFZR3RORVNKTEExQ3lKWWxQRFZqdWhTUUplMXhpUHA2ZzRod1ZtWktaMFloWjBuaFZpcTdjaitqc2pVVXRaYThhZWJ5enhtNzg5ZC9UTVQ1OTRJdDJWVk1KeFhTUWtLWm5Hc2hGRlBzTEFNeUVRUnlScGlpU056QWFVMHVBMWg1QVNGbU53Yk1mYzFIUlZWUm4yMDJrT1hqY1FTcjFlQ2Y1TVBpbk9oVzR3L3puQUZHRVVnbGtXSE1lR1kxdXdtR1Urb3phSm9nQkI2Sm5ORVRDMUQxMUNLbEJya1ltVTFpRFhDekc3eTVLdjlJZWpFMFZSRFR6WFMyNEFqS0lJekdaZ2pFRXBRR3R0Mk1aeGlDZ0lFQVFld3BpU3A0VW9EQTNic3FwUUZLVnhMaWxDc2p1T3BiWFNhakFZVGE5dTlZWkZ3V3ZQOCt6clhKb2tDYUk0Tmd3VlpqdWxCY1BBUjB3U2g3T2JudHUzTUk4b2pxQTE2RVF3azdDcDRUdWVlWjdNcGJUU3ZkNVFiMTN0cVpLWDJuVzhhMjJ4VzhNa1FXZ0FaNzFLOGlpdHpBSkpGQ0FNQW9SaFlHbzVQeitQT0E2TUFzUnVtaFdHb1dVeDJJeXNCRWlsTUJ4TnNkTWZtclloOXRkTGFnQWp3NUF1V294QUl3SWhRTU13TkNrMHQzZk9oUG9Nc0VLZWw2WWY2Y2hKOVd3YVliN0xpaExqU1lhNkZxYm1YMWhEMC9tN2dQUlB4TkFZeHZjTVF3cjZEbzJ1MElmU0lHT2dJTUM2aHBJU2RWMmJRRkJLNmFxV3ZDaXJVZ2doYk50bU53TEdFY0N1QjZROEpiUDRubXVTaHZxT05rQi9rd0lFeEN0dUpLV2F6eHdyNkwwU1NtMDBVcTFxcFNmTWhuOUxoc1RVdGkxakF1bzFSbXByUU12WllOZlFKbHRGSTB6a2tTTG1VOU1lU21pTHZlMEV3Y3VlNjY1TDNiUnVXc1BkRldjampiRmRJMGp3cXRaNU5sVlZ4YlZXVXB0b0kxVTB5SEIwTUxlMHhiU1dPbGNhejdwaDlOdWYvZUpYSHg1KzZxbjRsb0FFUTA0bC85UG1wVlN5cmpuUHMyekVlVlZLb1FSaFdHUlBNNFZNMmxHNDBtQ2FhbzBYWUZsL1hqeTFjdkg2TERYUmxzSTBQZ1V4RGJMZFd2NnZKa0pvcFdRdXBMd2tHdm1PYUpxTEVtemlhRzNCZ2llMXRpakxYVENoR1ZQUWx0QmFyMmcvZnYvb3UrLzJ2eGd3aVEwUTFZQmU2YWFwMEZRY1RVMTNNMVJLdnFPMTliU1V6V25meFlRV0toMWhjazRxeld3cjFuWlptdk1NODFrbDBvUDV0ZVBHalZtYVJETm05UGlzYnJxdWE4M0wwbXA0UllFODFsSWRnN0orTGZYZ3ZjWGwzdTBkaE0wQVZzb2NBMmxTMFB3emJVRUdZSXlTUTBwSlB5VjRUOVIxWHpSaVF5dWN0bXo3dGFidXJYNHB3R3Z5MFJDOVZqY2lhTlBVc0sxYWFYMVNhWFZVQ3ZHT3JQVWxNQzlqbnRjL2N1SkVRY1BpZG42d0drbXZIZVZNbE5HSTJMMU0vemwycGJSK1N3cjFkKzVZcjd4MTR1eVZXeDEyYi9iOWRZQ2ZmNUFZdW81VkMrampVcW9YaFdCSHRwcmw4OHZMTUFlaUwzUDlGMlRlUVN4TFRWV0hBQUFBQUVsRlRrU3VRbUNDXCI7IiwgImV4cG9ydCB2YXIgc2V0dGluZ3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIk1vZGVcIixcbiAgICB0eXBlOiBcIkxpc3RcIixcbiAgICBtb2RlczogW1wiQWJpbGl0aWVzXCIsIFwiUGFja2V0XCJdLFxuICAgIGN1cnJlbnQ6IDAsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChwYXJlbnQpIHtcbiAgcGFyZW50Lm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwYXJlbnQuZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIU1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nKSB7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSB0cnVlO1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGFyZW50Lm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzICE9IG51bGwpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nID0gdHJ1ZTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgaWYgKE1vZEFQSS5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KSB7XG4gIHBhcmVudC5zZXR0aW5ncyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkhlaWdodFwiLFxuICAgICAgdHlwZTogXCJTbGlkZXJcIixcbiAgICAgIG1pbjogMSxcbiAgICAgIG1heDogNixcbiAgICAgIHN0ZXA6IDAuNSxcbiAgICAgIGN1cnJlbnQ6IDEuNVxuICAgIH1cbiAgXVxuXG4gIHBhcmVudC5vblVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChwYXJlbnQuZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ICE9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50KSB7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQ7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcmVudC5vbkVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQ7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Lm9uRGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gMC42MDAwMDAwMjM4NDE4NTc5O1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxuXG59XG5cbiIsICJleHBvcnQgZnVuY3Rpb24gaW5pdChwYXJlbnQpIHtcbiAgdmFyIGNhdGNoZmlzaCA9IGZhbHNlO1xuICB2YXIgY2F0Y2hhZ2FpbiA9IGZhbHNlO1xuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoY2F0Y2hhZ2FpbiAmJiBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkgPT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnJpZ2h0Q2xpY2tNb3VzZSgpO1xuICAgICAgICBjYXRjaGFnYWluID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPCAxMDAgJiYgY2F0Y2hmaXNoID09IGZhbHNlKSB7XG4gICAgICAgICAgY2F0Y2hmaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5maXNoRW50aXR5LmlzSW5XYXRlcigpICYmIE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPiAxMDAgJiYgKE1hdGguY2VpbChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgLSBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgPj0gLjMpIHtcbiAgICAgICAgICBpZiAoY2F0Y2hmaXNoKSB7XG4gICAgICAgICAgICBjYXRjaGZpc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgTW9kQVBJLnJpZ2h0Q2xpY2tNb3VzZSgpO1xuICAgICAgICAgICAgY2F0Y2hhZ2FpbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICBjYXRjaGZpc2ggPSB0cnVlO1xuICB9XG5cbn1cblxuIiwgImV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuXG4gIHBhcmVudC5jcnNoSW50ZXIgPSBudWxsO1xuICBcbiAgcGFyZW50LnNldHRpbmdzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUFBTXCIsXG4gICAgICB0eXBlOiBcIlNsaWRlclwiLFxuICAgICAgbWluOiAyMCxcbiAgICAgIG1heDogMjAwMDAsXG4gICAgICBzdGVwOiAxMCxcbiAgICAgIGN1cnJlbnQ6IDUwMDBcbiAgICB9XG4gIF1cbiAgXG4gIGZ1bmN0aW9uIGNyYXNoKCkge1xuICAgIGlmKE1vZEFQSS5wbGF5ZXIgIT0gbnVsbCl7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50OyBpKyspIHtcbiAgICAgICAgTW9kQVBJLnBsYXllci5zd2luZ0l0ZW0oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpe1xuICAgIHBhcmVudC5jcnNoSW50ZXIgPSBzZXRJbnRlcnZhbChjcmFzaCwgMTAwMCk7XG4gIH1cbiAgXG4gIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZihwYXJlbnQuY3JzaEludGVyICE9IG51bGwpe1xuICAgICAgY2xlYXJJbnRlcnZhbChwYXJlbnQuY3JzaEludGVyKTtcbiAgICB9XG4gIH1cbn0iLCAiZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KXtcbiAgICBcbiAgICBmdW5jdGlvbiBoc2wycmdiKGgsIHMsIGwpe1xuICAgICAgcyAvPSAxMDA7XG4gICAgICBsIC89IDEwMDtcbiAgICAgIGNvbnN0IGsgPSBuID0+IChuICsgaCAvIDMwKSAlIDEyO1xuICAgICAgY29uc3QgYSA9IHMgKiBNYXRoLm1pbihsLCAxIC0gbCk7XG4gICAgICBjb25zdCBmID0gbiA9PlxuICAgICAgICBsIC0gYSAqIE1hdGgubWF4KC0xLCBNYXRoLm1pbihrKG4pIC0gMywgTWF0aC5taW4oOSAtIGsobiksIDEpKSk7XG4gICAgICByZXR1cm4gWzI1NSAqIGYoMCksIDI1NSAqIGYoOCksIDI1NSAqIGYoNCldO1xuICAgIH07XG4gIFxuICAgIHBhcmVudC5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpe1xuICAgICAgXG4gICAgICBpZihwYXJlbnQuZ2V0RW5hYmxlZCgpKXtcbiAgICAgICAgdmFyIHJnYiA9IGhzbDJyZ2IoRGF0ZS5ub3coKS8xMCAlIDM2MCwxMDAsNTApO1xuICAgICAgICB2YXIgcmVkID0gcmdiWzBdO1xuICAgICAgICB2YXIgZ3JlZW4gPSByZ2JbMV07XG4gICAgICAgIHZhciBibHVlID0gcmdiWzJdO1xuICAgICAgICB2YXIgYWxwaGEgPSAyNTU7XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiR0aGVXb3JsZC4kY2xvdWRDb2xvdXIgPSBCaWdJbnQoKHJlZCA8PCAyNCkgKyAoZ3JlZW4gPDwgMTYpICsgKGJsdWUgPDwgOCkgKyAoYWxwaGEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpe1xuICAgICAgaWYoTW9kQVBJLm1jaW5zdGFuY2UuJHRoZVdvcmxkICE9IG51bGwpe1xuICAgICAgICB2YXIgcmdiID0gaHNsMnJnYigwLDAsMTAwKTtcbiAgICAgICAgdmFyIHJlZCA9IHJnYlswXTtcbiAgICAgICAgdmFyIGdyZWVuID0gcmdiWzFdO1xuICAgICAgICB2YXIgYmx1ZSA9IHJnYlsyXTtcbiAgICAgICAgdmFyIGFscGhhID0gMjU1O1xuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kdGhlV29ybGQuJGNsb3VkQ29sb3VyID0gQmlnSW50KChyZWQgPDwgMjQpICsgKGdyZWVuIDw8IDE2KSArIChibHVlIDw8IDgpICsgKGFscGhhKSlcbiAgICAgIH1cbiAgICB9XG4gIH0iLCAiaW1wb3J0ICogYXMgZmxpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvZmxpZ2h0LnRzXCI7XG5pbXBvcnQgKiBhcyBmdWxsYnJpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvYXV0b2Zpc2gudHNcIjtcbmltcG9ydCAqIGFzIHN0ZXBNT0QgZnJvbSBcIi4uL2NoZWF0cy9zdGVwLnRzXCI7XG5pbXBvcnQgKiBhcyBhdXRvZmlzaE1PRCBmcm9tIFwiLi4vY2hlYXRzL2F1dG9maXNoLnRzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJjcmFzaGVyTU9EIGZyb20gXCIuLi9jaGVhdHMvc2VydmVyY3Jhc2hlci50c1wiO1xuaW1wb3J0ICogYXMgcmdiY2xvdWRzTU9EIGZyb20gXCIuLi9jaGVhdHMvcmdiY2xvdWRzLnRzXCI7XG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi4vZ3VpXCI7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKG1vZCkge1xuICAvLyBtb2R1bGUgZnVuY3Rpb25zXG5cbiAgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSBmYWxzZTtcbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7IH07XG4gIHRoaXMub25FbmFibGUgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSB0cnVlOyB0aGlzLm9uRW5hYmxlKCk7IHVpLnJlZnJlc2hNb2R1bGVzKCkgfTtcbiAgdGhpcy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7IHRoaXMuZW5hYmxlZERPTk9UVVNFID0gZmFsc2U7IHRoaXMub25EaXNhYmxlKCk7IHVpLnJlZnJlc2hNb2R1bGVzKCkgfTtcbiAgdGhpcy5vbktleSA9IGZ1bmN0aW9uKGUpe307XG4gIHRoaXMub25NQ0tleSA9IGZ1bmN0aW9uKGUpe307XG4gIHRoaXMuZ2V0RW5hYmxlZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5lbmFibGVkRE9OT1RVU0U7IH07XG4gIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oKSB7IHRoaXMuZW5hYmxlZERPTk9UVVNFID0gIXRoaXMuZW5hYmxlZERPTk9UVVNFOyBpZiAodGhpcy5lbmFibGVkRE9OT1RVU0UpIHsgdGhpcy5vbkVuYWJsZSgpIH0gZWxzZSB7IHRoaXMub25EaXNhYmxlKCk7IH0gfTtcbiAgLy9tYyBmdW5jdGlvbnNcbiAgdGhpcy5vblVwZGF0ZSA9IGZ1bmN0aW9uKCkgeyB9O1xuXG4gIHRoaXMuYWxlcnQgPSBmdW5jdGlvbigpIHsgYWxlcnQoKSB9O1xuXG4gIHRoaXMuc2V0dGluZ3MgPSBbXVxuXG4gIG1vZC5pbml0KHRoaXMpO1xufVxuXG5leHBvcnQgdmFyIGNhdGVnb3JpZXMgPSB7XG4gIG1vdmVtZW50OiBcIk1vdmVtZW50XCIsXG4gIHBsYXllcjogXCJQbGF5ZXJcIixcbiAgcmVuZGVyOiBcIlJlbmRlclwiLFxuICBmdW46IFwiRnVuXCJcbn1cblxuZXhwb3J0IHZhciBtb2R1bGVzID0ge1xuICBmbGlnaHQ6IHtcbiAgICBuYW1lOiBcIkZsaWdodFwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoZmxpZ2h0TU9EKSxcbiAgICBjYXRlZ29yeTogXCJNb3ZlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbG93cyB5b3UgdG8gZmx5XCIsXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICBuYW1lOiBcIlN0ZXBcIixcbiAgICBmdW5jdGlvbjogbmV3IHRlbXBsYXRlKHN0ZXBNT0QpLFxuICAgIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3dzIHlvdSB0byBzdGVwXCIsXG4gIH0sXG4gIGF1dG9maXNoOiB7XG4gICAgbmFtZTogXCJBdXRvRmlzaFwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoYXV0b2Zpc2hNT0QpLFxuICAgIGNhdGVnb3J5OiBcIlBsYXllclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1dG9tYXRpY2FsbHkgY2FzdHMgYW5kIHJlZWxzIHJvZFwiLFxuICB9LFxuXG4gIHNlcnZlcmNyYXNoZXI6IHtcbiAgICBuYW1lOiBcIlNlcnZlciBDcmFzaGVyXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShzZXJ2ZXJjcmFzaGVyTU9EKSxcbiAgICBjYXRlZ29yeTogXCJFeHBsb2l0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VuZHMganVzdCBhIGZldyBzd2luZyBwYWNrZXRzIDspXCIsXG4gIH0sXG5cbiAgcmdiY2xvdWRzOiB7XG4gICAgbmFtZTogXCJSR0IgQ2xvdWRzXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShyZ2JjbG91ZHNNT0QpLFxuICAgIGNhdGVnb3J5OiBcIlJlbmRlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsb3VkcyBnbyB3ZWVlZVwiLFxuICB9XG59IiwgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi91dGlsL2NsaWVudE5hbWVcIjtcbmltcG9ydCB7IG1vZHVsZXMsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi91dGlsL2FjdHVhbE1vZHVsZXNcIjtcblxuXG4vLyBkZWxldGUgdGhlIHVpXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIikgIT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIikucmVtb3ZlKCk7XG4gIH1cbn1cblxudmFyIGNvbnRhaW5lcjtcblxuXG4vLyBjaGVjayBpZiBvcGVuXG5leHBvcnQgZnVuY3Rpb24gaXNPcGVuKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cblxuLy8gb3BlbiBhIHNldHRpbmcgbWVudVxuZXhwb3J0IGZ1bmN0aW9uIHNldHRpbmcobW9kdWxlKSB7XG4gIC8qdmFyIGxzdCA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIk1vZGVcIixcbiAgICAgIHR5cGU6IFwiTGlzdFwiLFxuICAgICAgbW9kZXM6IFtcIkFiaWxpdGllc1wiLCBcIlBhY2tldFwiXSxcbiAgICAgIGN1cnJlbnQ6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3BlZWRcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDQsXG4gICAgICBjdXJyZW50OiAxXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlRlc3RcIixcbiAgICAgIHR5cGU6IFwiQm9vbGVhblwiLFxuICAgICAgdG9nZ2xlZDogdHJ1ZVxuICAgIH0sXG4gIF0qL1xuICB2YXIgbHN0ID0gbW9kdWxlLmZ1bmN0aW9uLnNldHRpbmdzO1xuICBjb25zb2xlLmxvZyhsc3QpO1xuICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHMuY2xhc3NOYW1lID0gXCJzZXR0aW5nXCI7XG4gIHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIHMuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIHMuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICBzLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICBzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICBzLnN0eWxlLnBhZGRpbmcgPSBcIjE1cHhcIjtcbiAgcy5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcbiAgcy5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICBzLnN0eWxlLmFuaW1hdGlvbiA9IFwicmdiIDRzIGxpbmVhciBpbmZpbml0ZVwiO1xuICBzLnN0eWxlLndpZHRoID0gXCIxNSVcIjtcbiAgcy5zdHlsZS5oZWlnaHQgPSBcIjUwJVwiO1xuICBzLnN0eWxlLnRvcCA9IFwiMTAwcHhcIlxuICBzLnN0eWxlLmxlZnQgPSBcIjEwMHB4XCJcblxuICBzLnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xuICBzLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcblxuICBzLnN0eWxlLnJlc2l6ZSA9IFwiYm90aFwiO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gbW9kdWxlLm5hbWU7XG4gIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gIHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIHZhciBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3NlLmlubmVyVGV4dCA9IFwiWFwiO1xuICBjbG9zZS5zdHlsZS5mb250U2l6ZSA9IFwiMjhweFwiO1xuICBjbG9zZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgY2xvc2Uuc3R5bGUucmlnaHQgPSBcIjE1cHhcIjtcbiAgY2xvc2Uuc3R5bGUudG9wID0gXCIxMHB4XCI7XG4gIGNsb3NlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICBjbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcy5yZW1vdmUoKTtcbiAgfTtcbiAgcy5hcHBlbmRDaGlsZChjbG9zZSk7XG5cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuXG4gIGZvciAobGV0IGkgaW4gbHN0KSB7XG4gICAgaWYgKGxzdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXG4gICAgICB2YXIgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMDAsMTAwLDEwMCwwLjUpXCI7XG4gICAgICBiZy5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xuICAgICAgYmcuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICBiZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgIHMuYXBwZW5kQ2hpbGQoYmcpO1xuICAgICAgaWYgKGxzdFtpXS50eXBlID09IFwiTGlzdFwiKSB7XG4gICAgICAgIHZhciBzZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VsRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBzZWxEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2VsRGVzYyk7XG4gICAgICAgIHZhciBzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBzZWwub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0uY3VycmVudCA9IHBhcnNlSW50KHNlbC52YWx1ZSk7XG4gICAgICAgICAgc2VsRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS5jdXJyZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiBpbiBsc3RbaV0ubW9kZXMpIHtcbiAgICAgICAgICBpZiAobHN0W2ldLm1vZGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBsc3RbaV0ubW9kZXNbal07XG4gICAgICAgICAgICBvcHQudmFsdWUgPSBqICsgXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2VsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsc3RbaV0udHlwZSA9PSBcIlNsaWRlclwiKSB7XG4gICAgICAgIHZhciBzbGlkZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbGlkZURlc2Muc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgc2xpZGVEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2xpZGVEZXNjKTtcbiAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBzbGlkZS50eXBlID0gXCJyYW5nZVwiO1xuICAgICAgICBzbGlkZS5zdGVwID0gbHN0W2ldLnN0ZXA7XG4gICAgICAgIHNsaWRlLm1pbiA9IGxzdFtpXS5taW47XG4gICAgICAgIHNsaWRlLm1heCA9IGxzdFtpXS5tYXg7XG4gICAgICAgIHNsaWRlLnZhbHVlID0gbHN0W2ldLmN1cnJlbnQ7XG4gICAgICAgIHNsaWRlLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbHN0W2ldLmN1cnJlbnQgPSBwYXJzZUZsb2F0KHNsaWRlLnZhbHVlKTtcbiAgICAgICAgICBzbGlkZURlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICB9XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgIH0gZWxzZSBpZiAobHN0W2ldLnR5cGUgPT0gXCJCb29sZWFuXCIpIHtcbiAgICAgICAgdmFyIGJvb2xEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9vbERlc2Muc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgYm9vbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0udG9nZ2xlZH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChib29sRGVzYyk7XG4gICAgICAgIHZhciBib29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBib29sLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGJvb2wuY2hlY2tlZCA9IGxzdFtpXS50b2dnbGVkO1xuICAgICAgICBib29sLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbHN0W2ldLnRvZ2dsZWQgPSBib29sLmNoZWNrZWQ7XG4gICAgICAgICAgYm9vbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0udG9nZ2xlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGJvb2wpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vY3JlYXRlIHRoZSBndWlcbmV4cG9ydCBmdW5jdGlvbiBvcGVuKCkge1xuICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcbiAgdmFyIGNuID0gY2xpZW50TmFtZTtcblxuICBjb25zdCB1aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdWkuaWQgPSBcInVpXCI7XG4gIHVpLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICB1aS5zdHlsZS53aWR0aCA9IFwiNjYlXCI7XG4gIHVpLnN0eWxlLmhlaWdodCA9IFwiNjYlXCI7XG4gIHVpLnN0eWxlLnRvcCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0ICogMC4xNjUgKyBcInB4XCI7XG4gIHVpLnN0eWxlLmxlZnQgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoICogMC4xNjUgKyBcInB4XCI7XG4gIHVpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICB1aS5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHVpLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsMC43NSlcIjtcbiAgdWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gIHVpLnN0eWxlLnBhZGRpbmcgPSBcIjE1cHhcIjtcbiAgdWkuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDQwcHggcmdiYSgwLCAxOTUsIDI1NSwwLjUpXCI7XG4gIHVpLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICB1aS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICB1aS5zdHlsZS5hbmltYXRpb24gPSBcInJnYiA0cyBsaW5lYXIgaW5maW5pdGVcIjtcblxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWkpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gY247XG4gIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyNHB4XCI7XG4gIHRpdGxlLnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gIHVpLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICB2YXIgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2guc3R5bGUud2lkdGggPSBcIjMzJVwiO1xuICBzZWFyY2gudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2guc3R5bGUuYm9yZGVyID0gXCJzb2xpZCAycHggcmdiYSgyMDAsMjAwLDIwMCwwLjUpXCI7XG4gIHNlYXJjaC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgc2VhcmNoLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbiAgc2VhcmNoLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICBzZWFyY2guc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyMHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5mb250U2l6ZSA9IFwiMjJweFwiO1xuICBzZWFyY2guc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSg1MCw1MCw1MCwuMjQpXCI7XG4gIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwiXHVEODNEXHVERDBFXHVGRTBFIFNlYXJjaFwiXG4gIHNlYXJjaC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHNlYXJjaCk7XG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG9zZS5pbm5lclRleHQgPSBcIlhcIjtcbiAgY2xvc2Uuc3R5bGUuZm9udFNpemUgPSBcIjI4cHhcIjtcbiAgY2xvc2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGNsb3NlLnN0eWxlLnJpZ2h0ID0gXCIxNXB4XCI7XG4gIGNsb3NlLnN0eWxlLnRvcCA9IFwiMTBweFwiO1xuICBjbG9zZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgY2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRlc3Ryb3koKTtcbiAgfTtcbiAgdWkuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG5cblxuICB2YXIgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFyLnN0eWxlLm92ZXJmbG93WCA9IFwic2Nyb2xsXCI7XG4gIHVpLmFwcGVuZENoaWxkKGJhcik7XG5cbiAgZm9yIChsZXQgaSBpbiBjYXRlZ29yaWVzKSB7XG4gICAgaWYgKGNhdGVnb3JpZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGNhdGVnb3JpZXNbaV07XG4gICAgICBjYXRlZ29yeS5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICBjYXRlZ29yeS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIH07XG5cbiAgICAgIGJhci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNlbnRlclwiKTtcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgdWkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXG4gIHJlZnJlc2hNb2R1bGVzKCk7XG59XG5cblxuLy8gUmVsb2FkIG1vZHVsZSBsaXN0XG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaE1vZHVsZXMoKSB7XG4gIGlmIChpc09wZW4oKSkge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgaW4gbW9kdWxlcykge1xuICAgICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdmFyIG1vZGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbW9kbHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbW9kbHRpdGxlLmlubmVyVGV4dCA9IGAke21vZHVsZXNbaV0ubmFtZX1gO1xuICAgICAgICBtb2RsdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjIycHhcIjtcbiAgICAgICAgbW9kbHRpdGxlLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgbW9kbC5hcHBlbmRDaGlsZChtb2RsdGl0bGUpO1xuXG4gICAgICAgIG1vZGwuc3R5bGUudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cbiAgICAgICAgbW9kbC5zdHlsZS53aWR0aCA9IFwiMjUlXCI7XG4gICAgICAgIG1vZGwuc3R5bGUuaGVpZ2h0ID0gXCIyNSVcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBtb2RsLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTAwLDEwMCwxMDAsMC41KVwiO1xuICAgICAgICBpZiAobW9kdWxlc1tpXS5mdW5jdGlvbi5nZXRFbmFibGVkKCkpIHtcbiAgICAgICAgICBtb2RsLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAxNXB4IHJnYmEoMCwgMjU1LCAwLDEpXCI7XG4gICAgICAgIH1cblxuICAgICAgICBtb2RsLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgbW9kdWxlc1tpXS5mdW5jdGlvbi50b2dnbGUoKTtcbiAgICAgICAgICByZWZyZXNoTW9kdWxlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGwub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBuZXcgc2V0dGluZyhtb2R1bGVzW2ldKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vdXRpbC9jbGllbnROYW1lLnRzXCI7XG5pbXBvcnQgeyBsb2dUb0NvbnNvbGUgfSBmcm9tIFwiLi91dGlsL2NvbnNvbGVMb2dnZXJcIjtcbmltcG9ydCB7IGxvZ1RvQ2hhdCB9IGZyb20gXCIuL3V0aWwvY2hhdExvZ2dlclwiO1xuaW1wb3J0IHsgaW5pdGh1ZCB9IGZyb20gXCIuL0hVRC50c1wiO1xuaW1wb3J0ICogYXMgYXNzZXRzIGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4vZ3VpLnRzXCI7XG5cbmxvZ1RvQ29uc29sZShcIkluaXQuLi5cIik7XG5sb2dUb0NoYXQoXCJJbml0Li4uXCIpO1xuTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG5Nb2RBUEkucmVxdWlyZShcIm5ldHdvcmtcIik7XG5Nb2RBUEkucmVxdWlyZShcInNldHRpbmdzXCIpO1xuaW5pdGh1ZCgpXG5sb2dUb0NoYXQoXCJMb2FkaW5nIG1vZHVsZXMuLi5cIik7XG5cbmltcG9ydCB7IG1vZHVsZXMgfSBmcm9tIFwiLi91dGlsL2FjdHVhbE1vZHVsZXNcIjtcblxuXG5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gIGlmIChcbiAgICBlLmxvY2F0aW9uID09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCAmJlxuICAgIGUua2V5ID09IFwiU2hpZnRcIiAmJlxuICAgICF1aS5pc09wZW4oKVxuICApIHtcbiAgICB1aS5vcGVuKCk7XG4gIH1cbiAgZm9yIChsZXQga2V5IGluIG1vZHVsZXMpIHtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBtb2R1bGVzW2tleV0uZnVuY3Rpb24ub25LZXkoZSk7XG4gICAgfVxuICB9XG59KTtcblxuTW9kQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgZnVuY3Rpb24oZSkge1xuICBpZiAoZS5rZXkgPT0gNTQpIHtcbiAgICB1aS5kZXN0cm95O1xuICB9XG4gIGZvciAobGV0IGtleSBpbiBtb2R1bGVzKSB7XG4gICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbW9kdWxlc1trZXldLmZ1bmN0aW9uLm9uTUNLZXkoZSk7XG4gICAgfVxuICB9XG59KTtcblxuTW9kQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGtleSBpbiBtb2R1bGVzKSB7XG4gICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbW9kdWxlc1trZXldLmZ1bmN0aW9uLm9uVXBkYXRlKCk7XG4gICAgfVxuICB9XG59KTtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xuXG5zdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufWApO1xuXG5zdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG59YCk7XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbmJhY2tncm91bmQ6IHJnYmEoMTAwLDEwMCwxMDAsMC41KTtcbmZpbHRlcjogYmx1cig0cHgpO1xufWApO1xuXG5zdHlsZVNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgcmdiIHtcbiAgMCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDAsIDAsMC43NSk7IH1cbiAgMTYlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAyNTUsIDAsMC43NSk7IH1cbiAgMzMlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwgMjU1LCAwLDAuNzUpOyB9XG4gIDUwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDI1NSwgMjU1LDAuNzUpOyB9XG4gIDY2JSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDAsIDI1NSwwLjc1KTsgfVxuICA4MyUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDAsIDI1NSwwLjc1KTsgfVxuICAxMDAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAwLDAuNzUpOyB9XG59YCk7XG5cbmZ1bmN0aW9uIGN1c3RvbVVJKCkge1xuICAvL0B0cy1pZ25vcmVcbiAgaWYgKE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuICE9IG51bGwpIHtcbiAgICBpZiAoXG4gICAgICBNb2RBUEkuY3VycmVudFNjcmVlbigpLnN0YXJ0c1dpdGgoXCJuZXQubWluZWNyYWZ0LmNsaWVudC5ndWkuR3VpTWFpbk1lbnVcIilcbiAgICApIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIHNpbmdsZVBsYXllciA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVswXTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIG11bHRpUGxheWVyID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzFdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgbW9kcyA9IE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVsyXTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIGZvcmtPbkdpdEh1YiA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVszXTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIG9wdGlvbnMgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNF07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBlZGl0UHJvZmlsZSA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVs1XTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIGxhdW5ndWFnZSA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVs2XTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIGN1cnJlbnRTY3JlZW4gPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbjtcblxuICAgICAgdmFyIGJ1dHRvbkRpc3RhbmNlID0gNDI7XG4gICAgICB2YXIgYnV0dG9uRGlzdGFuY2VSZWwgPSAyMjtcbiAgICAgIHZhciBidXR0b25TcGFjaW5nID0gMjtcbiAgICAgIHZhciBidXR0b25XaWR0aCA9IDEwMDtcbiAgICAgIHZhciBlbmMgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICAgIC8vb3B0aW9uc1xuICAgICAgb3B0aW9ucy4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoO1xuICAgICAgb3B0aW9ucy4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9tb2RzXG4gICAgICBtb2RzLiR3aWR0aDEzID0gYnV0dG9uV2lkdGggLyAyO1xuICAgICAgbW9kcy4keFBvc2l0aW9uMCA9IG9wdGlvbnMuJHhQb3NpdGlvbjAgLSBidXR0b25XaWR0aCAvIDIgLSBidXR0b25TcGFjaW5nO1xuICAgICAgbW9kcy4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9TaW5nbGVQbGF5ZXJcbiAgICAgIHNpbmdsZVBsYXllci4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoO1xuICAgICAgc2luZ2xlUGxheWVyLiR5UG9zaXRpb24gPSBvcHRpb25zLiR5UG9zaXRpb24gLSBidXR0b25EaXN0YW5jZVJlbDtcbiAgICAgIC8vTXVsdGlQbGF5ZXJcbiAgICAgIG11bHRpUGxheWVyLiR3aWR0aDEzID0gYnV0dG9uV2lkdGggKyBsYXVuZ3VhZ2UuJHdpZHRoMTMgKyBidXR0b25TcGFjaW5nO1xuICAgICAgbXVsdGlQbGF5ZXIuJHhQb3NpdGlvbjAgPVxuICAgICAgICBzaW5nbGVQbGF5ZXIuJHhQb3NpdGlvbjAgKyBidXR0b25XaWR0aCArIGJ1dHRvblNwYWNpbmc7XG4gICAgICBtdWx0aVBsYXllci4keVBvc2l0aW9uID0gb3B0aW9ucy4keVBvc2l0aW9uIC0gYnV0dG9uRGlzdGFuY2VSZWw7XG4gICAgICAvL0VkaXQgcHJvZmlsZVxuICAgICAgZWRpdFByb2ZpbGUuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIGVkaXRQcm9maWxlLiR5UG9zaXRpb24gPSBjdXJyZW50U2NyZWVuLiRoZWlnaHQ3IC0gYnV0dG9uRGlzdGFuY2U7XG4gICAgICAvL0xhbmdcbiAgICAgIGxhdW5ndWFnZS4keFBvc2l0aW9uMCA9XG4gICAgICAgIGVkaXRQcm9maWxlLiR4UG9zaXRpb24wICsgZWRpdFByb2ZpbGUuJHdpZHRoMTMgKyBidXR0b25TcGFjaW5nO1xuICAgICAgbGF1bmd1YWdlLiR5UG9zaXRpb24gPSBjdXJyZW50U2NyZWVuLiRoZWlnaHQ3IC0gYnV0dG9uRGlzdGFuY2U7XG4gICAgICAvL0ZvcmtcbiAgICAgIGZvcmtPbkdpdEh1Yi4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoIC8gMjtcbiAgICAgIGZvcmtPbkdpdEh1Yi4keVBvc2l0aW9uID0gbW9kcy4keVBvc2l0aW9uIC0gYnV0dG9uRGlzdGFuY2VSZWw7XG4gICAgICBmb3JrT25HaXRIdWIuJHhQb3NpdGlvbjAgPSBtb2RzLiR4UG9zaXRpb24wO1xuICAgICAgZm9ya09uR2l0SHViLiRkaXNwbGF5U3RyaW5nLiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiRm9ya1wiKTtcblxuICAgICAgY3VycmVudFNjcmVlbi4kb3BlbkdMV2FybmluZzEuJGNoYXJhY3RlcnMuZGF0YSA9IGVuYy5lbmNvZGUoXCJcIik7XG4gICAgICAvL2N1cnJlbnRTY3JlZW4uJHNwbGFzaFRleHQuJGNoYXJhY3RlcnMuZGF0YSA9IGVuYy5lbmNvZGUoXCJKdXN0aW4gaXMgdGhlIHNwZWQgdmVyc2lvbiBvZiBEYW5pZWxcIilcblxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikgPT0gbnVsbCkge1xuICAgICAgICB2YXIgc2VydmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlcnZlcnMuaWQgPSBcInNlcnZlcnBpbmdsaXN0XCI7XG5cbiAgICAgICAgdmFyIHBpbmdzID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQWVvbiBOZXR3b3JrXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL2Flb24tbmV0d29yay5uZXRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQXJjaCBNQ1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9tYy5hcmNoLmxvbFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJIZWxsaXVtIE5ldHdvcmtcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vaGVsbHRlY2guY2NcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ2xldmVyIFRlYWNoaW5nXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL2NsZXZlci10ZWFjaGluZy5jb21cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiWnl0aFwiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9tYy56eXRoLm1lXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBzZXJ2ZXJzLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay1hbGxcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS50b3AgPSBcIjEwJVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmxlZnQgPSBcIjIuNSVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS53aWR0aCA9IFwiMTUlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuaGVpZ2h0ID0gXCI4MCVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5jb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG5cbiAgICAgICAgcGluZ3MuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgY29uc3QgY3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXIuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgICAgc2VydmVycy5hcHBlbmRDaGlsZChjdXIpO1xuXG4gICAgICAgICAgY29uc3QgY3VyaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGN1cmgyLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgICAgICAgY3VyaDIuaW5uZXJUZXh0ID0gZS5uYW1lO1xuICAgICAgICAgIGN1ci5hcHBlbmRDaGlsZChjdXJoMik7XG5cbiAgICAgICAgICBjb25zdCBjdXJzZXJ2ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGN1cnNlcnZlci5pbm5lclRleHQgPSBlLmFkZHJlc3M7XG4gICAgICAgICAgY3VyLmFwcGVuZENoaWxkKGN1cnNlcnZlcik7XG5cbiAgICAgICAgICBjb25zdCBwbGF5ZXJpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBwbGF5ZXJpbmZvLmlubmVyVGV4dCA9IFwibm90IGNvbm5lY3RlZFwiO1xuICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cbiAgICAgICAgICBjdXIuYXBwZW5kQ2hpbGQocGxheWVyaW5mbyk7XG5cbiAgICAgICAgICBjb25zdCB0ZXN0d2Vic29ja2V0ID0gbmV3IFdlYlNvY2tldChlLmFkZHJlc3MpO1xuICAgICAgICAgIGNvbnN0IHRpbWVwaW5nID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgIHRlc3R3ZWJzb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdGVzdHdlYnNvY2tldC5zZW5kKFwiQWNjZXB0OiBNT1REXCIpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0ZXN0d2Vic29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZS5kYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHZhciBkYXQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgICBpZiAoZGF0W1widHlwZVwiXS50b0xvd2VyQ2FzZSgpID09PSBcIm1vdGRcIikge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJpbmZvLmlubmVyVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0W1wiZGF0YVwiXVtcIm9ubGluZVwiXSArIFwiL1wiICsgZGF0W1wiZGF0YVwiXVtcIm1heFwiXTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5jb2xvciA9IFwibGltZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBwaW5nLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICBwaW5nLnN0eWxlLmZsb2F0ID0gXCJyaWdodFwiO1xuICAgICAgICAgICAgICAgICAgICBwaW5nLmlubmVyVGV4dCArPSBEYXRlLm5vdygpIC0gdGltZXBpbmcgKyBcIm1zXCI7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcmluZm8uYXBwZW5kQ2hpbGQocGluZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VydmVycyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpICE9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGN1c3R1aSA9IHNldEludGVydmFsKGN1c3RvbVVJLCA1MCk7XG5cbi8vQ3VzdG9tIEN1cnNvclxuZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXS5zdHlsZS5jdXJzb3IgPVxuICAndXJsKFwiJyArIGFzc2V0cy5jdXJzb3IgKyAnXCIpLCBhdXRvJztcbmRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3VybChcIicgKyBhc3NldHMuY3Vyc29yICsgJ1wiKSwgYXV0byc7XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIGNsZWFySW50ZXJ2YWwoY3VzdHVpKTtcbiAgdWkuZGVzdHJveSgpO1xuICBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdLnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSAhPSBudWxsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKS5yZW1vdmUoKTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFFTyxNQUFJLGFBQWE7OztBQ0FqQixXQUFTLGFBQWEsS0FBSztBQUNoQyxZQUFRLElBQUksSUFBSSxVQUFVLEtBQUssR0FBRyxFQUFFO0FBQUEsRUFDdEM7OztBQ0ZPLFdBQVMsVUFBVSxLQUFLO0FBRTdCLFdBQU8sY0FBYyxFQUFDLEtBQUssU0FBTSxVQUFVLFVBQU8sR0FBRyxHQUFFLENBQUM7QUFBQSxFQUMxRDs7O0FDSkEsU0FBTyxRQUFRLFVBQVU7QUFDekIsU0FBTyxTQUFTLFNBQVM7QUFDekIsU0FBTyxTQUFTLFlBQVk7QUFDNUIsU0FBTyxTQUFTLFNBQVM7QUFDekIsU0FBTyxTQUFTLFlBQVk7QUFDNUIsU0FBTyxTQUFTLFdBQVc7QUFDM0IsU0FBTyxTQUFTLFdBQVc7QUFDM0IsU0FBTyxTQUFTLE9BQU87QUFDaEIsV0FBUyxVQUFTO0FBQ3ZCLFdBQU8saUJBQWlCLFdBQVcsV0FBVztBQUM1QyxVQUFJLEtBQUssT0FBTztBQUVoQixVQUFJLE1BQU0sT0FBTztBQUNqQixVQUFJLFdBQVc7QUFDZixVQUFJLFVBQVcsR0FBRyxHQUFHLENBQUM7QUFDdEIsVUFBSSxNQUFNLEtBQUssS0FBSyxDQUFDO0FBQ3JCLFVBQUksVUFBVSxJQUFJLElBQUksQ0FBQztBQUN2QixhQUFPLHFCQUFxQixFQUFDLEtBQUssWUFBWSxHQUFHLEdBQUUsR0FBRyxHQUFFLE9BQU8sR0FBRSxDQUFDO0FBQ2xFLFVBQUksVUFBVTtBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIOzs7QUNyQk8sTUFBSSxTQUFTOzs7QUNBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQUksV0FBVztBQUFBLElBQ3BCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPLENBQUMsYUFBYSxRQUFRO0FBQUEsTUFDN0IsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBRU8sV0FBUyxLQUFLLFFBQVE7QUFDM0IsV0FBTyxXQUFXLFdBQVk7QUFDNUIsVUFBSSxPQUFPLFdBQVcsR0FBRztBQUVyQixZQUFJLENBQUMsT0FBTyxPQUFPLGFBQWEsVUFBVTtBQUV4QyxpQkFBTyxPQUFPLGFBQWEsV0FBVztBQUV0QyxpQkFBTyxPQUFPLE9BQU87QUFBQSxRQUN2QjtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBRUEsV0FBTyxXQUFXLFdBQVk7QUFFNUIsVUFBSSxPQUFPLFVBQVUsTUFBTTtBQUV6QixZQUFJLE9BQU8sT0FBTyxnQkFBZ0IsTUFBTTtBQUV0QyxpQkFBTyxPQUFPLGFBQWEsV0FBVztBQUV0QyxpQkFBTyxPQUFPLE9BQU87QUFBQSxRQUN2QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsV0FBTyxZQUFZLFdBQVk7QUFFN0IsVUFBSSxPQUFPLFVBQVUsTUFBTTtBQUV6QixZQUFJLE9BQU8sT0FBTyxnQkFBZ0IsTUFBTTtBQUV0QyxpQkFBTyxPQUFPLGFBQWEsV0FBVztBQUV0QyxpQkFBTyxPQUFPLE9BQU87QUFBQSxRQUN2QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjs7O0FDL0NBO0FBQUE7QUFBQSxnQkFBQUE7QUFBQTtBQUFPLFdBQVNBLE1BQUssUUFBUTtBQUMzQixXQUFPLFdBQVc7QUFBQSxNQUNoQjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBRUEsV0FBTyxXQUFXLFdBQVc7QUFDM0IsVUFBSSxPQUFPLFdBQVcsR0FBRztBQUVyQixZQUFJLE9BQU8sT0FBTyxjQUFjLE9BQU8sU0FBUyxDQUFDLEVBQUUsU0FBUztBQUUxRCxpQkFBTyxPQUFPLGFBQWEsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUU5QyxpQkFBTyxPQUFPLE9BQU87QUFBQSxRQUN2QjtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBRUEsV0FBTyxXQUFXLFdBQVc7QUFFM0IsVUFBSSxPQUFPLFVBQVUsTUFBTTtBQUV6QixlQUFPLE9BQU8sYUFBYSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBRTlDLGVBQU8sT0FBTyxPQUFPO0FBQUEsTUFDdkI7QUFBQSxJQUNGO0FBRUEsV0FBTyxZQUFZLFdBQVc7QUFFNUIsVUFBSSxPQUFPLFVBQVUsTUFBTTtBQUV6QixlQUFPLE9BQU8sYUFBYTtBQUUzQixlQUFPLE9BQU8sT0FBTztBQUFBLE1BQ3ZCO0FBQUEsSUFDRjtBQUFBLEVBRUY7OztBQzVDQTtBQUFBO0FBQUEsZ0JBQUFDO0FBQUE7QUFBTyxXQUFTQSxNQUFLLFFBQVE7QUFDM0IsUUFBSSxZQUFZO0FBQ2hCLFFBQUksYUFBYTtBQUNqQixXQUFPLFdBQVcsV0FBVztBQUMzQixVQUFJLE9BQU8sV0FBVyxHQUFHO0FBRXZCLFlBQUksY0FBYyxPQUFPLE9BQU8sY0FBYyxNQUFNO0FBRWxELGlCQUFPLGdCQUFnQjtBQUN2Qix1QkFBYTtBQUFBLFFBQ2Y7QUFFQSxZQUFJLE9BQU8sT0FBTyxjQUFjLE1BQU07QUFFcEMsY0FBSSxPQUFPLE9BQU8sV0FBVyxlQUFlLE9BQU8sYUFBYSxPQUFPO0FBQ3JFLHdCQUFZO0FBQUEsVUFDZDtBQUdBLGNBQUksT0FBTyxPQUFPLFdBQVcsVUFBVSxLQUFLLE9BQU8sT0FBTyxXQUFXLGVBQWUsT0FBUSxLQUFLLEtBQUssT0FBTyxPQUFPLFdBQVcsQ0FBQyxJQUFJLE9BQU8sT0FBTyxXQUFXLEtBQU0sS0FBSTtBQUNySyxnQkFBSSxXQUFXO0FBQ2IsMEJBQVk7QUFFWixxQkFBTyxnQkFBZ0I7QUFDdkIsMkJBQWE7QUFBQSxZQUNmO0FBQUEsVUFDRjtBQUFBLFFBRUY7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUVBLFdBQU8sV0FBVyxXQUFXO0FBQzNCLGtCQUFZO0FBQUEsSUFDZDtBQUFBLEVBRUY7OztBQ3BDQTtBQUFBO0FBQUEsZ0JBQUFDO0FBQUE7QUFBTyxXQUFTQSxNQUFLLFFBQVE7QUFFM0IsV0FBTyxZQUFZO0FBRW5CLFdBQU8sV0FBVztBQUFBLE1BQ2hCO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFFQSxhQUFTLFFBQVE7QUFDZixVQUFHLE9BQU8sVUFBVSxNQUFLO0FBQ3ZCLGlCQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sU0FBUyxDQUFDLEVBQUUsU0FBUyxLQUFLO0FBQ25ELGlCQUFPLE9BQU8sVUFBVTtBQUFBLFFBQzFCO0FBQUEsTUFDRixPQUFPO0FBQ0wsZUFBTyxRQUFRO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBRUEsV0FBTyxXQUFXLFdBQVU7QUFDMUIsYUFBTyxZQUFZLFlBQVksT0FBTyxHQUFJO0FBQUEsSUFDNUM7QUFFQSxXQUFPLFlBQVksV0FBVztBQUM1QixVQUFHLE9BQU8sYUFBYSxNQUFLO0FBQzFCLHNCQUFjLE9BQU8sU0FBUztBQUFBLE1BQ2hDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7OztBQ2xDQTtBQUFBO0FBQUEsZ0JBQUFDO0FBQUE7QUFBTyxXQUFTQSxNQUFLLFFBQU87QUFFeEIsYUFBUyxRQUFRLEdBQUcsR0FBRyxHQUFFO0FBQ3ZCLFdBQUs7QUFDTCxXQUFLO0FBQ0wsWUFBTSxJQUFJLFFBQU0sSUFBSSxJQUFJLE1BQU07QUFDOUIsWUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQy9CLFlBQU0sSUFBSSxPQUNSLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRSxhQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFBQSxJQUM1QztBQUFDO0FBRUQsV0FBTyxXQUFXLFdBQVc7QUFFM0IsVUFBRyxPQUFPLFdBQVcsR0FBRTtBQUNyQixZQUFJLE1BQU0sUUFBUSxLQUFLLElBQUksSUFBRSxLQUFLLEtBQUksS0FBSSxFQUFFO0FBQzVDLFlBQUksTUFBTSxJQUFJLENBQUM7QUFDZixZQUFJLFFBQVEsSUFBSSxDQUFDO0FBQ2pCLFlBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsWUFBSSxRQUFRO0FBQ1osZUFBTyxXQUFXLFVBQVUsZUFBZSxRQUFRLE9BQU8sT0FBTyxTQUFTLE9BQU8sUUFBUSxLQUFNLEtBQU07QUFBQSxNQUNyRztBQUFBLElBQ0o7QUFFQSxXQUFPLFlBQVksV0FBVTtBQUMzQixVQUFHLE9BQU8sV0FBVyxhQUFhLE1BQUs7QUFDckMsWUFBSSxNQUFNLFFBQVEsR0FBRSxHQUFFLEdBQUc7QUFDekIsWUFBSSxNQUFNLElBQUksQ0FBQztBQUNmLFlBQUksUUFBUSxJQUFJLENBQUM7QUFDakIsWUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixZQUFJLFFBQVE7QUFDWixlQUFPLFdBQVcsVUFBVSxlQUFlLFFBQVEsT0FBTyxPQUFPLFNBQVMsT0FBTyxRQUFRLEtBQU0sS0FBTTtBQUFBLE1BQ3ZHO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7OztBQzFCRixXQUFTLFNBQVMsS0FBSztBQUdyQixTQUFLLGtCQUFrQjtBQUN2QixTQUFLLE9BQU8sV0FBVztBQUFBLElBQUU7QUFDekIsU0FBSyxXQUFXLFdBQVc7QUFBQSxJQUFFO0FBQzdCLFNBQUssWUFBWSxXQUFXO0FBQUEsSUFBRTtBQUM5QixTQUFLLFNBQVMsV0FBVztBQUFFLFdBQUssa0JBQWtCO0FBQU0sV0FBSyxTQUFTO0FBQUcsTUFBRyxlQUFlO0FBQUEsSUFBRTtBQUM3RixTQUFLLFVBQVUsV0FBVztBQUFFLFdBQUssa0JBQWtCO0FBQU8sV0FBSyxVQUFVO0FBQUcsTUFBRyxlQUFlO0FBQUEsSUFBRTtBQUNoRyxTQUFLLFFBQVEsU0FBUyxHQUFFO0FBQUEsSUFBQztBQUN6QixTQUFLLFVBQVUsU0FBUyxHQUFFO0FBQUEsSUFBQztBQUMzQixTQUFLLGFBQWEsV0FBVztBQUFFLGFBQU8sS0FBSztBQUFBLElBQWlCO0FBQzVELFNBQUssU0FBUyxXQUFXO0FBQUUsV0FBSyxrQkFBa0IsQ0FBQyxLQUFLO0FBQWlCLFVBQUksS0FBSyxpQkFBaUI7QUFBRSxhQUFLLFNBQVM7QUFBQSxNQUFFLE9BQU87QUFBRSxhQUFLLFVBQVU7QUFBQSxNQUFHO0FBQUEsSUFBRTtBQUVsSixTQUFLLFdBQVcsV0FBVztBQUFBLElBQUU7QUFFN0IsU0FBSyxRQUFRLFdBQVc7QUFBRSxZQUFNO0FBQUEsSUFBRTtBQUVsQyxTQUFLLFdBQVcsQ0FBQztBQUVqQixRQUFJLEtBQUssSUFBSTtBQUFBLEVBQ2Y7QUFFTyxNQUFJLGFBQWE7QUFBQSxJQUN0QixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsRUFDUDtBQUVPLE1BQUksVUFBVTtBQUFBLElBQ25CLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVUsSUFBSSxTQUFTLGNBQVM7QUFBQSxNQUNoQyxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVSxJQUFJLFNBQVMsWUFBTztBQUFBLE1BQzlCLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixVQUFVLElBQUksU0FBUyxnQkFBVztBQUFBLE1BQ2xDLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFFQSxlQUFlO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixVQUFVLElBQUksU0FBUyxxQkFBZ0I7QUFBQSxNQUN2QyxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsSUFDZjtBQUFBLElBRUEsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVSxJQUFJLFNBQVMsaUJBQVk7QUFBQSxNQUNuQyxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7OztBQ2xFTyxXQUFTLFVBQVU7QUFDeEIsUUFBSSxTQUFTLGVBQWUsSUFBSSxLQUFLLE1BQU07QUFDekMsZUFBUyxlQUFlLElBQUksRUFBRSxPQUFPO0FBQUEsSUFDdkM7QUFBQSxFQUNGO0FBRUEsTUFBSTtBQUlHLFdBQVMsU0FBUztBQUN2QixRQUFJLFNBQVMsZUFBZSxJQUFJLEtBQUssTUFBTTtBQUN6QyxhQUFPO0FBQUEsSUFDVCxPQUFPO0FBQ0wsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBSU8sV0FBUyxRQUFRLFFBQVE7QUFxQjlCLFFBQUksTUFBTSxPQUFPLFNBQVM7QUFDMUIsWUFBUSxJQUFJLEdBQUc7QUFDZixRQUFJLElBQUksU0FBUyxjQUFjLEtBQUs7QUFDcEMsTUFBRSxZQUFZO0FBQ2QsTUFBRSxNQUFNLFdBQVc7QUFDbkIsTUFBRSxNQUFNLFFBQVE7QUFDaEIsTUFBRSxNQUFNLGlCQUFpQjtBQUN6QixNQUFFLE1BQU0sYUFBYTtBQUNyQixNQUFFLE1BQU0sZUFBZTtBQUN2QixNQUFFLE1BQU0sVUFBVTtBQUNsQixNQUFFLE1BQU0sYUFBYTtBQUNyQixNQUFFLE1BQU0sWUFBWTtBQUNwQixNQUFFLE1BQU0sWUFBWTtBQUNwQixNQUFFLE1BQU0sUUFBUTtBQUNoQixNQUFFLE1BQU0sU0FBUztBQUNqQixNQUFFLE1BQU0sTUFBTTtBQUNkLE1BQUUsTUFBTSxPQUFPO0FBRWYsTUFBRSxNQUFNLFNBQVM7QUFDakIsTUFBRSxNQUFNLGlCQUFpQjtBQUV6QixNQUFFLE1BQU0sU0FBUztBQUVqQixVQUFNLFFBQVEsU0FBUyxjQUFjLEtBQUs7QUFDMUMsVUFBTSxZQUFZLE9BQU87QUFDekIsVUFBTSxNQUFNLFdBQVc7QUFDdkIsTUFBRSxZQUFZLEtBQUs7QUFFbkIsUUFBSSxRQUFRLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLFVBQU0sWUFBWTtBQUNsQixVQUFNLE1BQU0sV0FBVztBQUN2QixVQUFNLE1BQU0sV0FBVztBQUN2QixVQUFNLE1BQU0sUUFBUTtBQUNwQixVQUFNLE1BQU0sTUFBTTtBQUNsQixVQUFNLE1BQU0sU0FBUztBQUNyQixVQUFNLFVBQVUsV0FBVztBQUN6QixRQUFFLE9BQU87QUFBQSxJQUNYO0FBQ0EsTUFBRSxZQUFZLEtBQUs7QUFHbkIsYUFBUyxLQUFLLFlBQVksQ0FBQztBQUUzQixhQUFTLEtBQUssS0FBSztBQUNqQixVQUFJLElBQUksZUFBZSxDQUFDLEdBQUc7QUFFekIsWUFBSSxLQUFLLFNBQVMsY0FBYyxLQUFLO0FBQ3JDLFdBQUcsTUFBTSxhQUFhO0FBQ3RCLFdBQUcsTUFBTSxTQUFTO0FBQ2xCLFdBQUcsTUFBTSxVQUFVO0FBQ25CLFdBQUcsTUFBTSxlQUFlO0FBQ3hCLFVBQUUsWUFBWSxFQUFFO0FBQ2hCLFlBQUksSUFBSSxDQUFDLEVBQUUsUUFBUSxRQUFRO0FBQ3pCLGNBQUksVUFBVSxTQUFTLGNBQWMsS0FBSztBQUMxQyxrQkFBUSxNQUFNLFdBQVc7QUFDekIsa0JBQVEsWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRSxPQUFPO0FBQ3RELGFBQUcsWUFBWSxPQUFPO0FBQ3RCLGNBQUksTUFBTSxTQUFTLGNBQWMsUUFBUTtBQUN6QyxjQUFJLFdBQVcsV0FBVztBQUN4QixnQkFBSSxDQUFDLEVBQUUsVUFBVSxTQUFTLElBQUksS0FBSztBQUNuQyxvQkFBUSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFLE9BQU87QUFBQSxVQUN4RDtBQUNBLG1CQUFTLEtBQUssSUFBSSxDQUFDLEVBQUUsT0FBTztBQUMxQixnQkFBSSxJQUFJLENBQUMsRUFBRSxNQUFNLGVBQWUsQ0FBQyxHQUFHO0FBQ2xDLGtCQUFJLE1BQU0sU0FBUyxjQUFjLFFBQVE7QUFDekMsa0JBQUksWUFBWSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUM7QUFDOUIsa0JBQUksUUFBUSxJQUFJO0FBQUEsWUFDbEI7QUFDQSxlQUFHLFlBQVksR0FBRztBQUFBLFVBQ3BCO0FBQUEsUUFDRixXQUFXLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBVTtBQUNsQyxjQUFJLFlBQVksU0FBUyxjQUFjLEtBQUs7QUFDNUMsb0JBQVUsTUFBTSxXQUFXO0FBQzNCLG9CQUFVLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTztBQUN4RCxhQUFHLFlBQVksU0FBUztBQUN4QixjQUFJLFFBQVEsU0FBUyxjQUFjLE9BQU87QUFDMUMsZ0JBQU0sT0FBTztBQUNiLGdCQUFNLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDcEIsZ0JBQU0sTUFBTSxJQUFJLENBQUMsRUFBRTtBQUNuQixnQkFBTSxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ25CLGdCQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFDckIsZ0JBQU0sV0FBVyxXQUFXO0FBQzFCLGdCQUFJLENBQUMsRUFBRSxVQUFVLFdBQVcsTUFBTSxLQUFLO0FBQ3ZDLHNCQUFVLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTztBQUFBLFVBQzFEO0FBQ0EsYUFBRyxZQUFZLEtBQUs7QUFBQSxRQUN0QixXQUFXLElBQUksQ0FBQyxFQUFFLFFBQVEsV0FBVztBQUNuQyxjQUFJLFdBQVcsU0FBUyxjQUFjLEtBQUs7QUFDM0MsbUJBQVMsTUFBTSxXQUFXO0FBQzFCLG1CQUFTLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTztBQUN2RCxhQUFHLFlBQVksUUFBUTtBQUN2QixjQUFJLE9BQU8sU0FBUyxjQUFjLE9BQU87QUFDekMsZUFBSyxPQUFPO0FBQ1osZUFBSyxVQUFVLElBQUksQ0FBQyxFQUFFO0FBQ3RCLGVBQUssV0FBVyxXQUFXO0FBQ3pCLGdCQUFJLENBQUMsRUFBRSxVQUFVLEtBQUs7QUFDdEIscUJBQVMsWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRSxPQUFPO0FBQUEsVUFDekQ7QUFDQSxhQUFHLFlBQVksSUFBSTtBQUFBLFFBQ3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBSU8sV0FBUyxPQUFPO0FBQ3JCLGFBQVMsZ0JBQWdCO0FBQ3pCLFFBQUksS0FBSztBQUVULFVBQU0sS0FBSyxTQUFTLGNBQWMsS0FBSztBQUV2QyxPQUFHLEtBQUs7QUFDUixPQUFHLE1BQU0sV0FBVztBQUNwQixPQUFHLE1BQU0sUUFBUTtBQUNqQixPQUFHLE1BQU0sU0FBUztBQUNsQixPQUFHLE1BQU0sTUFBTSxTQUFTLEtBQUssZUFBZSxRQUFRO0FBQ3BELE9BQUcsTUFBTSxPQUFPLFNBQVMsS0FBSyxjQUFjLFFBQVE7QUFDcEQsT0FBRyxNQUFNLFFBQVE7QUFDakIsT0FBRyxNQUFNLGlCQUFpQjtBQUMxQixPQUFHLE1BQU0sYUFBYTtBQUN0QixPQUFHLE1BQU0sZUFBZTtBQUN4QixPQUFHLE1BQU0sVUFBVTtBQUNuQixPQUFHLE1BQU0sWUFBWTtBQUNyQixPQUFHLE1BQU0sYUFBYTtBQUN0QixPQUFHLE1BQU0sWUFBWTtBQUNyQixPQUFHLE1BQU0sWUFBWTtBQUdyQixhQUFTLEtBQUssWUFBWSxFQUFFO0FBRTVCLFVBQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztBQUMxQyxVQUFNLFlBQVk7QUFDbEIsVUFBTSxNQUFNLFdBQVc7QUFDdkIsVUFBTSxNQUFNLFNBQVM7QUFDckIsT0FBRyxZQUFZLEtBQUs7QUFFcEIsUUFBSSxTQUFTLFNBQVMsY0FBYyxPQUFPO0FBQzNDLFdBQU8sTUFBTSxRQUFRO0FBQ3JCLFdBQU8sT0FBTztBQUNkLFdBQU8sTUFBTSxTQUFTO0FBQ3RCLFdBQU8sTUFBTSxlQUFlO0FBQzVCLFdBQU8sTUFBTSxRQUFRO0FBQ3JCLFdBQU8sTUFBTSxVQUFVO0FBQ3ZCLFdBQU8sTUFBTSxVQUFVO0FBQ3ZCLFdBQU8sTUFBTSxhQUFhO0FBQzFCLFdBQU8sTUFBTSxXQUFXO0FBQ3hCLFdBQU8sTUFBTSxhQUFhO0FBQzFCLFdBQU8sY0FBYztBQUNyQixXQUFPLE1BQU0saUJBQWlCO0FBQzlCLFVBQU0sWUFBWSxNQUFNO0FBRXhCLFVBQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztBQUMxQyxVQUFNLFlBQVk7QUFDbEIsVUFBTSxNQUFNLFdBQVc7QUFDdkIsVUFBTSxNQUFNLFdBQVc7QUFDdkIsVUFBTSxNQUFNLFFBQVE7QUFDcEIsVUFBTSxNQUFNLE1BQU07QUFDbEIsVUFBTSxNQUFNLFNBQVM7QUFDckIsVUFBTSxVQUFVLFdBQVc7QUFDekIsY0FBUTtBQUFBLElBQ1Y7QUFDQSxPQUFHLFlBQVksS0FBSztBQUlwQixRQUFJLE1BQU0sU0FBUyxjQUFjLEtBQUs7QUFDdEMsUUFBSSxNQUFNLFlBQVk7QUFDdEIsT0FBRyxZQUFZLEdBQUc7QUFFbEIsYUFBUyxLQUFLLFlBQVk7QUFDeEIsVUFBSSxXQUFXLGVBQWUsQ0FBQyxHQUFHO0FBQ2hDLGNBQU0sV0FBVyxTQUFTLGNBQWMsS0FBSztBQUM3QyxpQkFBUyxZQUFZLFdBQVcsQ0FBQztBQUNqQyxpQkFBUyxNQUFNLFdBQVc7QUFDMUIsaUJBQVMsTUFBTSxTQUFTO0FBQ3hCLGlCQUFTLE1BQU0sVUFBVTtBQUN6QixpQkFBUyxNQUFNLFVBQVU7QUFDekIsaUJBQVMsTUFBTSxTQUFTO0FBQ3hCLGlCQUFTLE1BQU0sYUFBYTtBQUM1QixpQkFBUyxNQUFNLGVBQWU7QUFDOUIsaUJBQVMsVUFBVSxXQUFXO0FBQUEsUUFFOUI7QUFFQSxZQUFJLFlBQVksUUFBUTtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUVBLGdCQUFZLFNBQVMsY0FBYyxRQUFRO0FBQzNDLGNBQVUsTUFBTSxTQUFTO0FBQ3pCLGNBQVUsTUFBTSxZQUFZO0FBQzVCLE9BQUcsWUFBWSxTQUFTO0FBR3hCLG1CQUFlO0FBQUEsRUFDakI7QUFJTyxXQUFTLGlCQUFpQjtBQUMvQixRQUFJLE9BQU8sR0FBRztBQUNaLGdCQUFVLFlBQVk7QUFDdEIsZUFBUyxLQUFLLFNBQVM7QUFDckIsWUFBSSxRQUFRLGVBQWUsQ0FBQyxHQUFHO0FBQzdCLGNBQUksT0FBTyxTQUFTLGNBQWMsS0FBSztBQUN2QyxjQUFJLFlBQVksU0FBUyxjQUFjLEtBQUs7QUFDNUMsb0JBQVUsWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLElBQUk7QUFDeEMsb0JBQVUsTUFBTSxXQUFXO0FBQzNCLG9CQUFVLE1BQU0sYUFBYTtBQUM3QixlQUFLLFlBQVksU0FBUztBQUUxQixlQUFLLE1BQU0sWUFBWTtBQUN2QixlQUFLLE1BQU0sVUFBVTtBQUVyQixlQUFLLE1BQU0sUUFBUTtBQUNuQixlQUFLLE1BQU0sU0FBUztBQUNwQixlQUFLLE1BQU0sVUFBVTtBQUNyQixlQUFLLE1BQU0sZUFBZTtBQUMxQixlQUFLLE1BQU0sU0FBUztBQUNwQixlQUFLLE1BQU0sU0FBUztBQUVwQixlQUFLLE1BQU0sYUFBYTtBQUN4QixjQUFJLFFBQVEsQ0FBQyxFQUFFLFNBQVMsV0FBVyxHQUFHO0FBQ3BDLGlCQUFLLE1BQU0sWUFBWTtBQUFBLFVBQ3pCO0FBRUEsZUFBSyxVQUFVLFNBQVMsR0FBRztBQUN6QixvQkFBUSxDQUFDLEVBQUUsU0FBUyxPQUFPO0FBQzNCLDJCQUFlO0FBQUEsVUFDakI7QUFFQSxlQUFLLGdCQUFnQixTQUFTLEdBQUc7QUFDL0IsZ0JBQUksUUFBUSxRQUFRLENBQUMsQ0FBQztBQUN0QixvQkFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDO0FBQUEsVUFDeEI7QUFFQSxvQkFBVSxZQUFZLElBQUk7QUFBQSxRQUM1QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjs7O0FDeFJBLGVBQWEsU0FBUztBQUN0QixZQUFVLFNBQVM7QUFDbkIsU0FBTyxRQUFRLFFBQVE7QUFDdkIsU0FBTyxRQUFRLFNBQVM7QUFDeEIsU0FBTyxRQUFRLFVBQVU7QUFDekIsVUFBUTtBQUNSLFlBQVUsb0JBQW9CO0FBSzlCLG1CQUFpQixXQUFXLFNBQVMsR0FBRztBQUN0QyxRQUNFLEVBQUUsWUFBWSxjQUFjLDBCQUM1QixFQUFFLE9BQU8sV0FDVCxDQUFJLE9BQU8sR0FDWDtBQUNBLE1BQUcsS0FBSztBQUFBLElBQ1Y7QUFDQSxhQUFTLE9BQU8sU0FBUztBQUN2QixVQUFJLFFBQVEsZUFBZSxHQUFHLEdBQUc7QUFDL0IsZ0JBQVEsR0FBRyxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBRUQsU0FBTyxpQkFBaUIsT0FBTyxTQUFTLEdBQUc7QUFDekMsUUFBSSxFQUFFLE9BQU8sSUFBSTtBQUNmLE1BQUc7QUFBQSxJQUNMO0FBQ0EsYUFBUyxPQUFPLFNBQVM7QUFDdkIsVUFBSSxRQUFRLGVBQWUsR0FBRyxHQUFHO0FBQy9CLGdCQUFRLEdBQUcsRUFBRSxTQUFTLFFBQVEsQ0FBQztBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUVELFNBQU8saUJBQWlCLFVBQVUsV0FBVztBQUMzQyxhQUFTLE9BQU8sU0FBUztBQUN2QixVQUFJLFFBQVEsZUFBZSxHQUFHLEdBQUc7QUFDL0IsZ0JBQVEsR0FBRyxFQUFFLFNBQVMsU0FBUztBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUVELE1BQU0sYUFBYSxTQUFTLFlBQVksQ0FBQztBQUV6QyxhQUFXLFdBQVc7QUFBQTtBQUFBO0FBQUEsRUFHcEI7QUFFRixhQUFXLFdBQVc7QUFBQTtBQUFBO0FBQUEsRUFHcEI7QUFFRixhQUFXLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlwQjtBQUVGLGFBQVcsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRcEI7QUFFRixXQUFTLFdBQVc7QUFFbEIsUUFBSSxPQUFPLFdBQVcsa0JBQWtCLE1BQU07QUFDNUMsVUFDRSxPQUFPLGNBQWMsRUFBRSxXQUFXLHNDQUFzQyxHQUN4RTtBQUVBLFlBQUksZUFDRixPQUFPLFdBQVcsZUFBZSxZQUFZLFFBQVEsS0FBSyxDQUFDO0FBRTdELFlBQUksY0FDRixPQUFPLFdBQVcsZUFBZSxZQUFZLFFBQVEsS0FBSyxDQUFDO0FBRTdELFlBQUksT0FBTyxPQUFPLFdBQVcsZUFBZSxZQUFZLFFBQVEsS0FBSyxDQUFDO0FBRXRFLFlBQUksZUFDRixPQUFPLFdBQVcsZUFBZSxZQUFZLFFBQVEsS0FBSyxDQUFDO0FBRTdELFlBQUksVUFDRixPQUFPLFdBQVcsZUFBZSxZQUFZLFFBQVEsS0FBSyxDQUFDO0FBRTdELFlBQUksY0FDRixPQUFPLFdBQVcsZUFBZSxZQUFZLFFBQVEsS0FBSyxDQUFDO0FBRTdELFlBQUksWUFDRixPQUFPLFdBQVcsZUFBZSxZQUFZLFFBQVEsS0FBSyxDQUFDO0FBRTdELFlBQUksZ0JBQWdCLE9BQU8sV0FBVztBQUV0QyxZQUFJLGlCQUFpQjtBQUNyQixZQUFJLG9CQUFvQjtBQUN4QixZQUFJLGdCQUFnQjtBQUNwQixZQUFJLGNBQWM7QUFDbEIsWUFBSSxNQUFNLElBQUksWUFBWTtBQUUxQixnQkFBUSxXQUFXO0FBQ25CLGdCQUFRLGFBQWEsY0FBYyxXQUFXO0FBRTlDLGFBQUssV0FBVyxjQUFjO0FBQzlCLGFBQUssY0FBYyxRQUFRLGNBQWMsY0FBYyxJQUFJO0FBQzNELGFBQUssYUFBYSxjQUFjLFdBQVc7QUFFM0MscUJBQWEsV0FBVztBQUN4QixxQkFBYSxhQUFhLFFBQVEsYUFBYTtBQUUvQyxvQkFBWSxXQUFXLGNBQWMsVUFBVSxXQUFXO0FBQzFELG9CQUFZLGNBQ1YsYUFBYSxjQUFjLGNBQWM7QUFDM0Msb0JBQVksYUFBYSxRQUFRLGFBQWE7QUFFOUMsb0JBQVksV0FBVztBQUN2QixvQkFBWSxhQUFhLGNBQWMsV0FBVztBQUVsRCxrQkFBVSxjQUNSLFlBQVksY0FBYyxZQUFZLFdBQVc7QUFDbkQsa0JBQVUsYUFBYSxjQUFjLFdBQVc7QUFFaEQscUJBQWEsV0FBVyxjQUFjO0FBQ3RDLHFCQUFhLGFBQWEsS0FBSyxhQUFhO0FBQzVDLHFCQUFhLGNBQWMsS0FBSztBQUNoQyxxQkFBYSxlQUFlLFlBQVksT0FBTyxJQUFJLE9BQU8sTUFBTTtBQUVoRSxzQkFBYyxnQkFBZ0IsWUFBWSxPQUFPLElBQUksT0FBTyxFQUFFO0FBRzlELFlBQUksU0FBUyxlQUFlLGdCQUFnQixLQUFLLE1BQU07QUFDckQsY0FBSSxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzFDLGtCQUFRLEtBQUs7QUFFYixjQUFJLFFBQVE7QUFBQSxZQUNWO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixTQUFTO0FBQUEsWUFDWDtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFNBQVM7QUFBQSxZQUNYO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sU0FBUztBQUFBLFlBQ1g7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixTQUFTO0FBQUEsWUFDWDtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFNBQVM7QUFBQSxZQUNYO0FBQUEsVUFDRjtBQUVBLGtCQUFRLE1BQU0sWUFBWTtBQUMxQixrQkFBUSxNQUFNLFlBQVk7QUFDMUIsa0JBQVEsTUFBTSxXQUFXO0FBQ3pCLGtCQUFRLE1BQU0sTUFBTTtBQUNwQixrQkFBUSxNQUFNLE9BQU87QUFDckIsa0JBQVEsTUFBTSxRQUFRO0FBQ3RCLGtCQUFRLE1BQU0sU0FBUztBQUN2QixrQkFBUSxNQUFNLFFBQVE7QUFDdEIsa0JBQVEsTUFBTSxrQkFBa0I7QUFDaEMsa0JBQVEsTUFBTSxlQUFlO0FBQzdCLGtCQUFRLE1BQU0sYUFBYTtBQUUzQixnQkFBTSxRQUFRLFNBQVMsR0FBRztBQUN4QixrQkFBTSxNQUFNLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLGdCQUFJLE1BQU0sU0FBUztBQUNuQixvQkFBUSxZQUFZLEdBQUc7QUFFdkIsa0JBQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztBQUMxQyxrQkFBTSxNQUFNLFdBQVc7QUFDdkIsa0JBQU0sWUFBWSxFQUFFO0FBQ3BCLGdCQUFJLFlBQVksS0FBSztBQUVyQixrQkFBTSxZQUFZLFNBQVMsY0FBYyxLQUFLO0FBQzlDLHNCQUFVLFlBQVksRUFBRTtBQUN4QixnQkFBSSxZQUFZLFNBQVM7QUFFekIsa0JBQU0sYUFBYSxTQUFTLGNBQWMsS0FBSztBQUMvQyx1QkFBVyxZQUFZO0FBQ3ZCLHVCQUFXLE1BQU0sUUFBUTtBQUN6Qix1QkFBVyxNQUFNLGFBQWE7QUFDOUIsdUJBQVcsTUFBTSxXQUFXO0FBQzVCLHVCQUFXLE1BQU0sUUFBUTtBQUV6QixnQkFBSSxZQUFZLFVBQVU7QUFFMUIsa0JBQU0sZ0JBQWdCLElBQUksVUFBVSxFQUFFLE9BQU87QUFDN0Msa0JBQU0sV0FBVyxLQUFLLElBQUk7QUFFMUIsMEJBQWMsU0FBUyxNQUFNO0FBQzNCLDRCQUFjLEtBQUssY0FBYztBQUFBLFlBQ25DO0FBRUEsMEJBQWMsWUFBWSxDQUFDQyxPQUFNO0FBQy9CLGtCQUFJQSxHQUFFLE1BQU07QUFDVixvQkFBSSxPQUFPQSxHQUFFLFNBQVMsVUFBVTtBQUM5QixzQkFBSTtBQUNGLHdCQUFJLE1BQU0sS0FBSyxNQUFNQSxHQUFFLElBQUk7QUFDM0Isd0JBQUksSUFBSSxNQUFNLEVBQUUsWUFBWSxNQUFNLFFBQVE7QUFDeEMsaUNBQVcsWUFDVCxJQUFJLE1BQU0sRUFBRSxRQUFRLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRSxLQUFLO0FBQ2pELGlDQUFXLE1BQU0sUUFBUTtBQUV6Qiw0QkFBTSxPQUFPLFNBQVMsY0FBYyxLQUFLO0FBQ3pDLDJCQUFLLE1BQU0sVUFBVTtBQUNyQiwyQkFBSyxNQUFNLFFBQVE7QUFDbkIsMkJBQUssYUFBYSxLQUFLLElBQUksSUFBSSxXQUFXO0FBQzFDLGlDQUFXLFlBQVksSUFBSTtBQUUzQiw4QkFBUSxJQUFJLEdBQUc7QUFBQSxvQkFDakI7QUFBQSxrQkFDRixTQUFTLEtBQUs7QUFDWiw0QkFBUSxJQUFJLEdBQUc7QUFBQSxrQkFDakI7QUFBQSxnQkFDRjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRixDQUFDO0FBQ0QsbUJBQVMsS0FBSyxZQUFZLE9BQU87QUFBQSxRQUNuQztBQUFBLE1BQ0YsT0FBTztBQUNMLFlBQUksU0FBUyxlQUFlLGdCQUFnQixLQUFLLE1BQU07QUFDckQsbUJBQVMsZUFBZSxnQkFBZ0IsRUFBRSxPQUFPO0FBQUEsUUFDbkQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLFNBQVMsWUFBWSxVQUFVLEVBQUU7QUFHckMsV0FBUyxLQUFLLHFCQUFxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sU0FDcEQsVUFBaUIsU0FBUztBQUM1QixXQUFTLEtBQUssTUFBTSxTQUFTLFVBQWlCLFNBQVM7IiwKICAibmFtZXMiOiBbImluaXQiLCAiaW5pdCIsICJpbml0IiwgImluaXQiLCAiZSJdCn0K
