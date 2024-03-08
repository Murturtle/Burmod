var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
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
var exports_flight = {};
__export(exports_flight, {
  settings: () => {
    {
      return settings;
    }
  },
  init: () => {
    {
      return init;
    }
  }
});
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
var settings = [
  {
    name: "Mode",
    type: "List",
    modes: ["Abilities", "Packet"],
    current: 0
  }
];

// src/cheats/step.ts
var exports_step = {};
__export(exports_step, {
  init: () => {
    {
      return init2;
    }
  }
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
var exports_autofish = {};
__export(exports_autofish, {
  init: () => {
    {
      return init3;
    }
  }
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
var exports_servercrasher = {};
__export(exports_servercrasher, {
  init: () => {
    {
      return init4;
    }
  }
});
function init4(parent) {
  parent.crshInter = null;
  parent.settings = [
    {
      name: "PPS",
      type: "Slider",
      min: 20,
      max: 20000,
      step: 10,
      current: 5000
    }
  ];
  function crash() {
    if (ModAPI.player != null) {
      for (let i = 0;i < parent.settings[0].current; i++) {
        ModAPI.player.swingItem();
      }
    } else {
      parent.disable();
    }
  }
  parent.onEnable = function() {
    parent.crshInter = setInterval(crash, 1000);
  };
  parent.onDisable = function() {
    if (parent.crshInter != null) {
      clearInterval(parent.crshInter);
    }
  };
}

// src/cheats/rgbclouds.ts
var exports_rgbclouds = {};
__export(exports_rgbclouds, {
  init: () => {
    {
      return init5;
    }
  }
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
  parent.update = function() {
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
      ModAPI.mcinstance.$theWorld.$cloudColour = hsl2rgb(360, 100, 100);
    }
  };
}

// src/util/actualModules.ts
var template = function(mod) {
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
};
var categories = {
  movement: "Movement",
  player: "Player",
  render: "Render",
  fun: "Fun"
};
var modules = {
  flight: {
    name: "Flight",
    function: new template(exports_flight),
    category: "Movement",
    description: "Allows you to fly"
  },
  step: {
    name: "Step",
    function: new template(exports_step),
    category: "Movement",
    description: "Allows you to step"
  },
  autofish: {
    name: "AutoFish",
    function: new template(exports_autofish),
    category: "Player",
    description: "Automatically casts and reels rod"
  },
  servercrasher: {
    name: "Server Crasher",
    function: new template(exports_servercrasher),
    category: "Exploit",
    description: "Sends just a few swing packets ;)"
  },
  rgbclouds: {
    name: "RGB Clouds",
    function: new template(exports_rgbclouds),
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
  search.placeholder = "\uD83D\uDD0E\uFE0E Search";
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
var container;

// src/Main.ts
var customUI = function() {
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
      var enc = new TextEncoder;
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
};
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
var custui = setInterval(customUI, 50);
document.body.getElementsByTagName("canvas")[0].style.cursor = 'url("' + cursor + '"), auto';
document.body.style.cursor = 'url("' + cursor + '"), auto';

//# debugId=7FA7289F6D9AC2C764756e2164756e21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWwvY2xpZW50TmFtZS50cyIsICJzcmMvdXRpbC9jb25zb2xlTG9nZ2VyLnRzIiwgInNyYy91dGlsL2NoYXRMb2dnZXIudHMiLCAic3JjL2Fzc2V0cy50cyIsICJzcmMvY2hlYXRzL2ZsaWdodC50cyIsICJzcmMvY2hlYXRzL3N0ZXAudHMiLCAic3JjL2NoZWF0cy9hdXRvZmlzaC50cyIsICJzcmMvY2hlYXRzL3NlcnZlcmNyYXNoZXIudHMiLCAic3JjL2NoZWF0cy9yZ2JjbG91ZHMudHMiLCAic3JjL3V0aWwvYWN0dWFsTW9kdWxlcy50cyIsICJzcmMvZ3VpLnRzIiwgInNyYy9NYWluLnRzIiwgInNyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIi8vIGdsb2JhbCB2YXJpYWJsZSBmb3IgdGhlIGNsaWVudCdzIG5hbWVcblxuZXhwb3J0IHZhciBjbGllbnROYW1lID0gXCJidXJtb2RcIjsiLAogICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vY2xpZW50TmFtZS50c1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dUb0NvbnNvbGUobXNnKSB7XG4gIGNvbnNvbGUubG9nKGBbJHtjbGllbnROYW1lfV0gJHttc2d9YCk7XG59IiwKICAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWUudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9DaGF0KG1zZykge1xuICAvL0B0cy1pZ25vcmVcbiAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogYMKnNVske2NsaWVudE5hbWV9XcKnciAke21zZ31gfSk7XG59IiwKICAiZXhwb3J0IHZhciBjdXJzb3IgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBbENBWUFBQUJSZUlueEFBQUFBWE5TUjBJQXJzNGM2UUFBQ0ZGSlJFRlVXRWV0VjF0dlhOVVpYZnZjcnpNVE8wNUlLNFdxQ29LQ0NnalVxcFhhQ2xTa3dtL29QK2xMZWVHbEQrMUQyMVF0VWt0VnFSZW1nQ2hDSUVnaUF3MUdRSnFRZ0dNU1F4STdkbUtQNTM1dSs1eDlxYjQ5VGtVSVNoVEtrWTVtUEhPODExN3JXOS82OXJESEhyeEhTeW5oZWg0NmV6cm96SFhnZWU1UWEvMEtyNXRudklWaTZmRGh4UXhmMGNVSVVDc0Z5N1lScFFuU1ZnclhkZnRTaVgvbWRmUDc1MTU1OHhRQS9SWGhnZjM0Z2J1MUZCSmU0R1BmSFF2WXYzOEJnZStQR2lHT2xHWDVVdG5VNStxYURUenBqRk8vTi9ubHMwc1ZZMTkrQXdhd0xDdnNtZXZnb1llL2pmc2Z1QmVoNy9QdDN1RHk2dXJGalN0Yk81T2Fpek9TcWVPUlhaLzg0NytPYi80L2JJMmtrMG1HQXdmMjRTZVBQNEpISHYwK1NhcVhsMWZ4L29rejdQTGxxOGlMNGcwTjhWY282OVh1a2VOclh3SGdGQWNPN01mamp6K0tIejN5UGRpMmpmUG5MK0QwNlJWc2JlMDBlVjRjcjRWOFVXdjFKcGZOT2xRa2U1d1hDd3VMVGJjTGVUc2JNSkptV1dGcTk0TWZmaGNQZitkK2NpbUdnekZHb3pFNGI4UTBMejd0OXlkbkI4UFJKOU1zMzVCQ1hCYXg5eDlnc3RIdExwVzNCZmpZZzNmclBLK3dkKzhjSG5yNGZ0enpyVVB3QXhlKzV5TkpZc1JSb0xhMis5WEt5cXE4Y0hHajdnL0dHN3h1bGh5TC9XWHZYWGQ4Y1Bodzk3WmFadGMwSFBQemUvREFnL2ZpMEYzZk1HRHRUZ3NMQy9Ob3RWTnNiRnpWSzJkWDJZV0xhN0szUGRncHEyYko5cXlubGUyZWlYUXdpdSs4c3o1elpsNHVMdjVjQXV5bUxXUUFlVldqMDJuam5uc1A0ZURCcjhGeEhMUTdiY002YmNVZ1V3MEdJL09hWlVXVzVmbnFaRFI5YXpDYWZscFh6WWJuV3V0ZXUzVnB5TzN0YnJkNzA1b2F3Sm8zYUxVU2ZQUFFuY1k4Qk5ocXBaaWJheU5LUWpCWXhrZ1VEazB0bWw2L1AvcjQ0d3ZibTV0YlY0cThPRzhCNzdWRFora1BMeTJ1M0txZUJyQ3BHeVJwaklNSHY0NTkrL2ZDY1Z5emdYWTdSUkFGaUtQUUtKQ21DWlRVNnZMbWxqeDE4a081dHJhWlpYbDJsZ0hIQWo5NEZWTnhLbDlZYU82Nzd6Nzk1Sk5Qa3JRM3lHc0FoUkNJb3RDdzJ6UGZnV083YUxjVHBHbU1JUENSdGhKVHp6MmRqbG5qNnRZT1BsbytoL1gxcXlqeTRnS0F0N1hEam1VRlB4VTQvbGl6WUxRMkhJNFhGeGZGNXhtYnhpZEFQL0F4TjA4MVMrSFlOdElrbmdINkh1STBOdksyMnkwamE1Wmx1SEpsRytQaFZPZEZOYXA0dlphWDVjZVRhWGFPQVd1V2I1K3NOck9QdWtzM3Rvd0JuRTBMRjJtcmhUQU1ZZGtXa2lSRUdzZndQUTl4RWhuWDBnYW9SeHNoVUJZY1RWTVRvSnhNcHJ6Zkd4YkR5WFFiV3AvVXpIbWg0VGphUFhKa0RBMW1XTzdtcndGVVVzRnhIY1JwQWo4SVlGa1dramhDRW9md2ZjZjBJN0dqT251ZUI2VVU2cm9CaFg1WmNlVFRYQTlHWTR3bWVhNkUrc0RTMWo4YU8zL2QwM0ljMnhHL2pGYlc3WFpyZy90WlFCcFBmaERDWWpBZ3JZUUFQU1JKaEZacnhwQ1VrRktCOHhwMTA0QU1SKytyaXFNb1M4SHI1Z0t2K0xIeFpMb2tvQXNYOWthSyt1enZYdjczOERPQUVvN25JazUyQVMwTEtZR2trUUdNNHdpZFRzdTBpdXM2NEUxamVwSnpUcTRGWTVaUlJTc3BpN0thN1BTSDZ6czdvMDJoWkduWjlodStiVC8vcHhkZlcvOUN3SUFZR3RORVNKTEExQ3lKWWxQRFZqdWhTUUplMXhpUHA2ZzRod1ZtWktaMFloWjBuaFZpcTdjaitqc2pVVXRaYThhZWJ5enhtNzg5ZC9UTVQ1OTRJdDJWVk1KeFhTUWtLWm5Hc2hGRlBzTEFNeUVRUnlScGlpU056QWFVMHVBMWg1QVNGbU53Yk1mYzFIUlZWUm4yMDJrT1hqY1FTcjFlQ2Y1TVBpbk9oVzR3L3puQUZHRVVnbGtXSE1lR1kxdXdtR1Urb3phSm9nQkI2Sm5ORVRDMUQxMUNLbEJya1ltVTFpRFhDekc3eTVLdjlJZWpFMFZSRFR6WFMyNEFqS0lJekdaZ2pFRXBRR3R0Mk1aeGlDZ0lFQVFld3BpU3A0VW9EQTNic3FwUUZLVnhMaWxDc2p1T3BiWFNhakFZVGE5dTlZWkZ3V3ZQOCt6clhKb2tDYUk0Tmd3VlpqdWxCY1BBUjB3U2g3T2JudHUzTUk4b2pxQTE2RVF3azdDcDRUdWVlWjdNcGJUU3ZkNVFiMTN0cVpLWDJuVzhhMjJ4VzhNa1FXZ0FaNzFLOGlpdHpBSkpGQ0FNQW9SaFlHbzVQeitQT0E2TUFzUnVtaFdHb1dVeDJJeXNCRWlsTUJ4TnNkTWZtclloOXRkTGFnQWp3NUF1V294QUl3SWhRTU13TkNrMHQzZk9oUG9Nc0VLZWw2WWY2Y2hKOVd3YVliN0xpaExqU1lhNkZxYm1YMWhEMC9tN2dQUlB4TkFZeHZjTVF3cjZEbzJ1MElmU0lHT2dJTUM2aHBJU2RWMmJRRkJLNmFxV3ZDaXJVZ2doYk50bU53TEdFY0N1QjZROEpiUDRubXVTaHZxT05rQi9rd0lFeEN0dUpLV2F6eHdyNkwwU1NtMDBVcTFxcFNmTWhuOUxoc1RVdGkxakF1bzFSbXByUU12WllOZlFKbHRGSTB6a2tTTG1VOU1lU21pTHZlMEV3Y3VlNjY1TDNiUnVXc1BkRldjampiRmRJMGp3cXRaNU5sVlZ4YlZXVXB0b0kxVTB5SEIwTUxlMHhiU1dPbGNhejdwaDlOdWYvZUpYSHg1KzZxbjRsb0FFUTA0bC85UG1wVlN5cmpuUHMyekVlVlZLb1FSaFdHUlBNNFZNMmxHNDBtQ2FhbzBYWUZsL1hqeTFjdkg2TERYUmxzSTBQZ1V4RGJMZFd2NnZKa0pvcFdRdXBMd2tHdm1PYUpxTEVtemlhRzNCZ2llMXRpakxYVENoR1ZQUWx0QmFyMmcvZnYvb3UrLzJ2eGd3aVEwUTFZQmU2YWFwMEZRY1RVMTNNMVJLdnFPMTliU1V6V25meFlRV0toMWhjazRxeld3cjFuWlptdk1NODFrbDBvUDV0ZVBHalZtYVJETm05UGlzYnJxdWE4M0wwbXA0UllFODFsSWRnN0orTGZYZ3ZjWGwzdTBkaE0wQVZzb2NBMmxTMFB3emJVRUdZSXlTUTBwSlB5VjRUOVIxWHpSaVF5dWN0bXo3dGFidXJYNHB3R3Z5MFJDOVZqY2lhTlBVc0sxYWFYMVNhWFZVQ3ZHT3JQVWxNQzlqbnRjL2N1SkVRY1BpZG42d0drbXZIZVZNbE5HSTJMMU0vemwycGJSK1N3cjFkKzVZcjd4MTR1eVZXeDEyYi9iOWRZQ2ZmNUFZdW81VkMrampVcW9YaFdCSHRwcmw4OHZMTUFlaUwzUDlGMlRlUVN4TFRWV0hBQUFBQUVsRlRrU3VRbUNDXCI7IiwKICAiZXhwb3J0IHZhciBzZXR0aW5ncyA9IFtcbiAge1xuICAgIG5hbWU6IFwiTW9kZVwiLFxuICAgIHR5cGU6IFwiTGlzdFwiLFxuICAgIG1vZGVzOiBbXCJBYmlsaXRpZXNcIiwgXCJQYWNrZXRcIl0sXG4gICAgY3VycmVudDogMCxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBhcmVudC5nZXRFbmFibGVkKCkpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGlmICghTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcpIHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZyA9IHRydWU7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgaWYgKE1vZEFQSS5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSB0cnVlO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGFyZW50Lm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcyAhPSBudWxsKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZyA9IGZhbHNlO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsCiAgImV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuICBwYXJlbnQuc2V0dGluZ3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJIZWlnaHRcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDYsXG4gICAgICBzdGVwOiAwLjUsXG4gICAgICBjdXJyZW50OiAxLjVcbiAgICB9XG4gIF1cblxuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCAhPSBwYXJlbnQuc2V0dGluZ3NbMF0uY3VycmVudCkge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50O1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50O1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDAuNjAwMDAwMDIzODQxODU3OTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxufVxuXG4iLAogICJleHBvcnQgZnVuY3Rpb24gaW5pdChwYXJlbnQpIHtcbiAgdmFyIGNhdGNoZmlzaCA9IGZhbHNlO1xuICB2YXIgY2F0Y2hhZ2FpbiA9IGZhbHNlO1xuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoY2F0Y2hhZ2FpbiAmJiBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkgPT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnJpZ2h0Q2xpY2tNb3VzZSgpO1xuICAgICAgICBjYXRjaGFnYWluID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPCAxMDAgJiYgY2F0Y2hmaXNoID09IGZhbHNlKSB7XG4gICAgICAgICAgY2F0Y2hmaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5maXNoRW50aXR5LmlzSW5XYXRlcigpICYmIE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPiAxMDAgJiYgKE1hdGguY2VpbChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgLSBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgPj0gLjMpIHtcbiAgICAgICAgICBpZiAoY2F0Y2hmaXNoKSB7XG4gICAgICAgICAgICBjYXRjaGZpc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgTW9kQVBJLnJpZ2h0Q2xpY2tNb3VzZSgpO1xuICAgICAgICAgICAgY2F0Y2hhZ2FpbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICBjYXRjaGZpc2ggPSB0cnVlO1xuICB9XG5cbn1cblxuIiwKICAiZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KSB7XG5cbiAgcGFyZW50LmNyc2hJbnRlciA9IG51bGw7XG4gIFxuICBwYXJlbnQuc2V0dGluZ3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJQUFNcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDIwLFxuICAgICAgbWF4OiAyMDAwMCxcbiAgICAgIHN0ZXA6IDEwLFxuICAgICAgY3VycmVudDogNTAwMFxuICAgIH1cbiAgXVxuICBcbiAgZnVuY3Rpb24gY3Jhc2goKSB7XG4gICAgaWYoTW9kQVBJLnBsYXllciAhPSBudWxsKXtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQ7IGkrKykge1xuICAgICAgICBNb2RBUEkucGxheWVyLnN3aW5nSXRlbSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudC5vbkVuYWJsZSA9IGZ1bmN0aW9uKCl7XG4gICAgcGFyZW50LmNyc2hJbnRlciA9IHNldEludGVydmFsKGNyYXNoLCAxMDAwKTtcbiAgfVxuICBcbiAgcGFyZW50Lm9uRGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHBhcmVudC5jcnNoSW50ZXIgIT0gbnVsbCl7XG4gICAgICBjbGVhckludGVydmFsKHBhcmVudC5jcnNoSW50ZXIpO1xuICAgIH1cbiAgfVxufSIsCiAgImV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCl7XG4gICAgZnVuY3Rpb24gaHNsMnJnYihoLCBzLCBsKSB7XG4gICAgICBzIC89IDEwMDtcbiAgICAgIGwgLz0gMTAwO1xuICAgICAgY29uc3QgayA9IG4gPT4gKG4gKyBoIC8gMzApICUgMTI7XG4gICAgICBjb25zdCBhID0gcyAqIE1hdGgubWluKGwsIDEgLSBsKTtcbiAgICAgIGNvbnN0IGYgPSBuID0+XG4gICAgICAgIGwgLSBhICogTWF0aC5tYXgoLTEsIE1hdGgubWluKGsobikgLSAzLCBNYXRoLm1pbig5IC0gayhuKSwgMSkpKTtcbiAgICAgIHJldHVybiBbMjU1ICogZigwKSwgMjU1ICogZig4KSwgMjU1ICogZig0KV07XG4gICAgfTtcbiAgICBcbiAgICBwYXJlbnQudXBkYXRlID0gZnVuY3Rpb24gKCl7XG4gICAgICBpZihwYXJlbnQuZ2V0RW5hYmxlZCgpKXtcbiAgICAgICAgdmFyIHJnYiA9IGhzbDJyZ2IoRGF0ZS5ub3coKS8xMCAlIDM2MCwxMDAsNTApO1xuICAgICAgICB2YXIgcmVkID0gcmdiWzBdXG4gICAgICAgIHZhciBncmVlbiA9IHJnYlsxXVxuICAgICAgICB2YXIgYmx1ZSA9IHJnYlsyXVxuICAgICAgICB2YXIgYWxwaGEgPSAyNTU7XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiR0aGVXb3JsZC4kY2xvdWRDb2xvdXIgPSBCaWdJbnQoKHJlZCA8PCAyNCkgKyAoZ3JlZW4gPDwgMTYpICsgKGJsdWUgPDwgOCkgKyAoYWxwaGEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpe1xuICAgICAgaWYoTW9kQVBJLm1jaW5zdGFuY2UuJHRoZVdvcmxkICE9IG51bGwpe1xuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kdGhlV29ybGQuJGNsb3VkQ29sb3VyID0gaHNsMnJnYigzNjAsMTAwLDEwMCk7XG4gICAgICB9XG4gICAgfVxuICB9IiwKICAiaW1wb3J0ICogYXMgZmxpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvZmxpZ2h0LnRzXCI7XG5pbXBvcnQgKiBhcyBmdWxsYnJpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvYXV0b2Zpc2gudHNcIjtcbmltcG9ydCAqIGFzIHN0ZXBNT0QgZnJvbSBcIi4uL2NoZWF0cy9zdGVwLnRzXCI7XG5pbXBvcnQgKiBhcyBhdXRvZmlzaE1PRCBmcm9tIFwiLi4vY2hlYXRzL2F1dG9maXNoLnRzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJjcmFzaGVyTU9EIGZyb20gXCIuLi9jaGVhdHMvc2VydmVyY3Jhc2hlci50c1wiO1xuaW1wb3J0ICogYXMgcmdiY2xvdWRzTU9EIGZyb20gXCIuLi9jaGVhdHMvcmdiY2xvdWRzLnRzXCI7XG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi4vZ3VpXCI7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKG1vZCkge1xuICAvLyBtb2R1bGUgZnVuY3Rpb25zXG5cbiAgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSBmYWxzZTtcbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7IH07XG4gIHRoaXMub25FbmFibGUgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSB0cnVlOyB0aGlzLm9uRW5hYmxlKCk7IHVpLnJlZnJlc2hNb2R1bGVzKCkgfTtcbiAgdGhpcy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7IHRoaXMuZW5hYmxlZERPTk9UVVNFID0gZmFsc2U7IHRoaXMub25EaXNhYmxlKCk7IHVpLnJlZnJlc2hNb2R1bGVzKCkgfTtcbiAgdGhpcy5vbktleSA9IGZ1bmN0aW9uKGUpe307XG4gIHRoaXMub25NQ0tleSA9IGZ1bmN0aW9uKGUpe307XG4gIHRoaXMuZ2V0RW5hYmxlZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5lbmFibGVkRE9OT1RVU0U7IH07XG4gIHRoaXMudG9nZ2xlID0gZnVuY3Rpb24oKSB7IHRoaXMuZW5hYmxlZERPTk9UVVNFID0gIXRoaXMuZW5hYmxlZERPTk9UVVNFOyBpZiAodGhpcy5lbmFibGVkRE9OT1RVU0UpIHsgdGhpcy5vbkVuYWJsZSgpIH0gZWxzZSB7IHRoaXMub25EaXNhYmxlKCk7IH0gfTtcbiAgLy9tYyBmdW5jdGlvbnNcbiAgdGhpcy5vblVwZGF0ZSA9IGZ1bmN0aW9uKCkgeyB9O1xuXG4gIHRoaXMuYWxlcnQgPSBmdW5jdGlvbigpIHsgYWxlcnQoKSB9O1xuXG4gIHRoaXMuc2V0dGluZ3MgPSBbXVxuXG4gIG1vZC5pbml0KHRoaXMpO1xufVxuXG5leHBvcnQgdmFyIGNhdGVnb3JpZXMgPSB7XG4gIG1vdmVtZW50OiBcIk1vdmVtZW50XCIsXG4gIHBsYXllcjogXCJQbGF5ZXJcIixcbiAgcmVuZGVyOiBcIlJlbmRlclwiLFxuICBmdW46IFwiRnVuXCJcbn1cblxuZXhwb3J0IHZhciBtb2R1bGVzID0ge1xuICBmbGlnaHQ6IHtcbiAgICBuYW1lOiBcIkZsaWdodFwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoZmxpZ2h0TU9EKSxcbiAgICBjYXRlZ29yeTogXCJNb3ZlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbG93cyB5b3UgdG8gZmx5XCIsXG4gIH0sXG4gIHN0ZXA6IHtcbiAgICBuYW1lOiBcIlN0ZXBcIixcbiAgICBmdW5jdGlvbjogbmV3IHRlbXBsYXRlKHN0ZXBNT0QpLFxuICAgIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3dzIHlvdSB0byBzdGVwXCIsXG4gIH0sXG4gIGF1dG9maXNoOiB7XG4gICAgbmFtZTogXCJBdXRvRmlzaFwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoYXV0b2Zpc2hNT0QpLFxuICAgIGNhdGVnb3J5OiBcIlBsYXllclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1dG9tYXRpY2FsbHkgY2FzdHMgYW5kIHJlZWxzIHJvZFwiLFxuICB9LFxuXG4gIHNlcnZlcmNyYXNoZXI6IHtcbiAgICBuYW1lOiBcIlNlcnZlciBDcmFzaGVyXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShzZXJ2ZXJjcmFzaGVyTU9EKSxcbiAgICBjYXRlZ29yeTogXCJFeHBsb2l0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VuZHMganVzdCBhIGZldyBzd2luZyBwYWNrZXRzIDspXCIsXG4gIH0sXG5cbiAgcmdiY2xvdWRzOiB7XG4gICAgbmFtZTogXCJSR0IgQ2xvdWRzXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShyZ2JjbG91ZHNNT0QpLFxuICAgIGNhdGVnb3J5OiBcIlJlbmRlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsb3VkcyBnbyB3ZWVlZVwiLFxuICB9XG59IiwKICAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL3V0aWwvY2xpZW50TmFtZVwiO1xuaW1wb3J0IHsgbW9kdWxlcywgY2F0ZWdvcmllcyB9IGZyb20gXCIuL3V0aWwvYWN0dWFsTW9kdWxlc1wiO1xuXG5cbi8vIGRlbGV0ZSB0aGUgdWlcbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95KCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKSAhPSBudWxsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKS5yZW1vdmUoKTtcbiAgfVxufVxuXG52YXIgY29udGFpbmVyO1xuXG5cbi8vIGNoZWNrIGlmIG9wZW5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW4oKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuXG4vLyBvcGVuIGEgc2V0dGluZyBtZW51XG5leHBvcnQgZnVuY3Rpb24gc2V0dGluZyhtb2R1bGUpIHtcbiAgLyp2YXIgbHN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTW9kZVwiLFxuICAgICAgdHlwZTogXCJMaXN0XCIsXG4gICAgICBtb2RlczogW1wiQWJpbGl0aWVzXCIsIFwiUGFja2V0XCJdLFxuICAgICAgY3VycmVudDogMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTcGVlZFwiLFxuICAgICAgdHlwZTogXCJTbGlkZXJcIixcbiAgICAgIG1pbjogMSxcbiAgICAgIG1heDogNCxcbiAgICAgIGN1cnJlbnQ6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVGVzdFwiLFxuICAgICAgdHlwZTogXCJCb29sZWFuXCIsXG4gICAgICB0b2dnbGVkOiB0cnVlXG4gICAgfSxcbiAgXSovXG4gIHZhciBsc3QgPSBtb2R1bGUuZnVuY3Rpb24uc2V0dGluZ3M7XG4gIGNvbnNvbGUubG9nKGxzdCk7XG4gIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcy5jbGFzc05hbWUgPSBcInNldHRpbmdcIjtcbiAgcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgcy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgcy5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gIHMuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gIHMuc3R5bGUucGFkZGluZyA9IFwiMTVweFwiO1xuICBzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICBzLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gIHMuc3R5bGUuYW5pbWF0aW9uID0gXCJyZ2IgNHMgbGluZWFyIGluZmluaXRlXCI7XG4gIHMuc3R5bGUud2lkdGggPSBcIjE1JVwiO1xuICBzLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XG4gIHMuc3R5bGUudG9wID0gXCIxMDBweFwiXG4gIHMuc3R5bGUubGVmdCA9IFwiMTAwcHhcIlxuXG4gIHMuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XG4gIHMuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuXG4gIHMuc3R5bGUucmVzaXplID0gXCJib3RoXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBtb2R1bGUubmFtZTtcbiAgdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjIycHhcIjtcbiAgcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgdmFyIGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UuaW5uZXJUZXh0ID0gXCJYXCI7XG4gIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gXCIyOHB4XCI7XG4gIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjbG9zZS5zdHlsZS5yaWdodCA9IFwiMTVweFwiO1xuICBjbG9zZS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgY2xvc2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBzLnJlbW92ZSgpO1xuICB9O1xuICBzLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7XG5cbiAgZm9yIChsZXQgaSBpbiBsc3QpIHtcbiAgICBpZiAobHN0Lmhhc093blByb3BlcnR5KGkpKSB7XG5cbiAgICAgIHZhciBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgIGJnLnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gICAgICBiZy5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgIGJnLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgICAgcy5hcHBlbmRDaGlsZChiZyk7XG4gICAgICBpZiAobHN0W2ldLnR5cGUgPT0gXCJMaXN0XCIpIHtcbiAgICAgICAgdmFyIHNlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWxEZXNjLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgICAgIHNlbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChzZWxEZXNjKTtcbiAgICAgICAgdmFyIHNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbC5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxzdFtpXS5jdXJyZW50ID0gcGFyc2VJbnQoc2VsLnZhbHVlKTtcbiAgICAgICAgICBzZWxEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqIGluIGxzdFtpXS5tb2Rlcykge1xuICAgICAgICAgIGlmIChsc3RbaV0ubW9kZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0LmlubmVyVGV4dCA9IGxzdFtpXS5tb2Rlc1tqXTtcbiAgICAgICAgICAgIG9wdC52YWx1ZSA9IGogKyBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiZy5hcHBlbmRDaGlsZChzZWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxzdFtpXS50eXBlID09IFwiU2xpZGVyXCIpIHtcbiAgICAgICAgdmFyIHNsaWRlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNsaWRlRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBzbGlkZURlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChzbGlkZURlc2MpO1xuICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHNsaWRlLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgICAgIHNsaWRlLnN0ZXAgPSBsc3RbaV0uc3RlcDtcbiAgICAgICAgc2xpZGUubWluID0gbHN0W2ldLm1pbjtcbiAgICAgICAgc2xpZGUubWF4ID0gbHN0W2ldLm1heDtcbiAgICAgICAgc2xpZGUudmFsdWUgPSBsc3RbaV0uY3VycmVudDtcbiAgICAgICAgc2xpZGUub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0uY3VycmVudCA9IHBhcnNlRmxvYXQoc2xpZGUudmFsdWUpO1xuICAgICAgICAgIHNsaWRlRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS5jdXJyZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgfSBlbHNlIGlmIChsc3RbaV0udHlwZSA9PSBcIkJvb2xlYW5cIikge1xuICAgICAgICB2YXIgYm9vbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib29sRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBib29sRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS50b2dnbGVkfWA7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGJvb2xEZXNjKTtcbiAgICAgICAgdmFyIGJvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGJvb2wudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgYm9vbC5jaGVja2VkID0gbHN0W2ldLnRvZ2dsZWQ7XG4gICAgICAgIGJvb2wub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0udG9nZ2xlZCA9IGJvb2wuY2hlY2tlZDtcbiAgICAgICAgICBib29sRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS50b2dnbGVkfWA7XG4gICAgICAgIH1cbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoYm9vbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy9jcmVhdGUgdGhlIGd1aVxuZXhwb3J0IGZ1bmN0aW9uIG9wZW4oKSB7XG4gIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICB2YXIgY24gPSBjbGllbnROYW1lO1xuXG4gIGNvbnN0IHVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB1aS5pZCA9IFwidWlcIjtcbiAgdWkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIHVpLnN0eWxlLndpZHRoID0gXCI2NiVcIjtcbiAgdWkuc3R5bGUuaGVpZ2h0ID0gXCI2NiVcIjtcbiAgdWkuc3R5bGUudG9wID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKiAwLjE2NSArIFwicHhcIjtcbiAgdWkuc3R5bGUubGVmdCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKiAwLjE2NSArIFwicHhcIjtcbiAgdWkuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIHVpLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcbiAgdWkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjc1KVwiO1xuICB1aS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgdWkuc3R5bGUucGFkZGluZyA9IFwiMTVweFwiO1xuICB1aS5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggNDBweCByZ2JhKDAsIDE5NSwgMjU1LDAuNSlcIjtcbiAgdWkuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG4gIHVpLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gIHVpLnN0eWxlLmFuaW1hdGlvbiA9IFwicmdiIDRzIGxpbmVhciBpbmZpbml0ZVwiO1xuXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBjbjtcbiAgdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjI0cHhcIjtcbiAgdGl0bGUuc3R5bGUubWFyZ2luID0gXCI1cHhcIjtcbiAgdWkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIHZhciBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNlYXJjaC5zdHlsZS53aWR0aCA9IFwiMzMlXCI7XG4gIHNlYXJjaC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaC5zdHlsZS5ib3JkZXIgPSBcInNvbGlkIDJweCByZ2JhKDIwMCwyMDAsMjAwLDAuNSlcIjtcbiAgc2VhcmNoLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICBzZWFyY2guc3R5bGUuY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuICBzZWFyY2guc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gIHNlYXJjaC5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgc2VhcmNoLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjIwcHhcIjtcbiAgc2VhcmNoLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gIHNlYXJjaC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDUwLDUwLDUwLC4yNClcIjtcbiAgc2VhcmNoLnBsYWNlaG9sZGVyID0gXCLwn5SO77iOIFNlYXJjaFwiXG4gIHNlYXJjaC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHNlYXJjaCk7XG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG9zZS5pbm5lclRleHQgPSBcIlhcIjtcbiAgY2xvc2Uuc3R5bGUuZm9udFNpemUgPSBcIjI4cHhcIjtcbiAgY2xvc2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGNsb3NlLnN0eWxlLnJpZ2h0ID0gXCIxNXB4XCI7XG4gIGNsb3NlLnN0eWxlLnRvcCA9IFwiMTBweFwiO1xuICBjbG9zZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgY2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRlc3Ryb3koKTtcbiAgfTtcbiAgdWkuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG5cblxuICB2YXIgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFyLnN0eWxlLm92ZXJmbG93WCA9IFwic2Nyb2xsXCI7XG4gIHVpLmFwcGVuZENoaWxkKGJhcik7XG5cbiAgZm9yIChsZXQgaSBpbiBjYXRlZ29yaWVzKSB7XG4gICAgaWYgKGNhdGVnb3JpZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGNhdGVnb3JpZXNbaV07XG4gICAgICBjYXRlZ29yeS5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICBjYXRlZ29yeS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIH07XG5cbiAgICAgIGJhci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNlbnRlclwiKTtcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgdWkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXG4gIHJlZnJlc2hNb2R1bGVzKCk7XG59XG5cblxuLy8gUmVsb2FkIG1vZHVsZSBsaXN0XG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaE1vZHVsZXMoKSB7XG4gIGlmIChpc09wZW4oKSkge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgaW4gbW9kdWxlcykge1xuICAgICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdmFyIG1vZGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbW9kbHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbW9kbHRpdGxlLmlubmVyVGV4dCA9IGAke21vZHVsZXNbaV0ubmFtZX1gO1xuICAgICAgICBtb2RsdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjIycHhcIjtcbiAgICAgICAgbW9kbHRpdGxlLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgbW9kbC5hcHBlbmRDaGlsZChtb2RsdGl0bGUpO1xuXG4gICAgICAgIG1vZGwuc3R5bGUudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cbiAgICAgICAgbW9kbC5zdHlsZS53aWR0aCA9IFwiMjUlXCI7XG4gICAgICAgIG1vZGwuc3R5bGUuaGVpZ2h0ID0gXCIyNSVcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBtb2RsLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTAwLDEwMCwxMDAsMC41KVwiO1xuICAgICAgICBpZiAobW9kdWxlc1tpXS5mdW5jdGlvbi5nZXRFbmFibGVkKCkpIHtcbiAgICAgICAgICBtb2RsLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAxNXB4IHJnYmEoMCwgMjU1LCAwLDEpXCI7XG4gICAgICAgIH1cblxuICAgICAgICBtb2RsLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgbW9kdWxlc1tpXS5mdW5jdGlvbi50b2dnbGUoKTtcbiAgICAgICAgICByZWZyZXNoTW9kdWxlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGwub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBuZXcgc2V0dGluZyhtb2R1bGVzW2ldKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsCiAgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi91dGlsL2NsaWVudE5hbWUudHNcIjtcbmltcG9ydCB7IGxvZ1RvQ29uc29sZSB9IGZyb20gXCIuL3V0aWwvY29uc29sZUxvZ2dlclwiO1xuaW1wb3J0IHsgbG9nVG9DaGF0IH0gZnJvbSBcIi4vdXRpbC9jaGF0TG9nZ2VyXCI7XG5pbXBvcnQgKiBhcyBhc3NldHMgZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi9ndWkudHNcIjtcblxubG9nVG9Db25zb2xlKFwiSW5pdC4uLlwiKTtcbmxvZ1RvQ2hhdChcIkluaXQuLi5cIik7XG5cbmxvZ1RvQ2hhdChcIkxvYWRpbmcgbW9kdWxlcy4uLlwiKTtcblxuaW1wb3J0IHsgbW9kdWxlcyB9IGZyb20gXCIuL3V0aWwvYWN0dWFsTW9kdWxlc1wiO1xuXG5Nb2RBUEkucmVxdWlyZShcInBsYXllclwiKTtcblxuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICBpZiAoXG4gICAgZS5sb2NhdGlvbiA9PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQgJiZcbiAgICBlLmtleSA9PSBcIlNoaWZ0XCIgJiZcbiAgICAhdWkuaXNPcGVuKClcbiAgKSB7XG4gICAgdWkub3BlbigpO1xuICB9XG4gIGZvciAobGV0IGtleSBpbiBtb2R1bGVzKSB7XG4gICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbW9kdWxlc1trZXldLmZ1bmN0aW9uLm9uS2V5KGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwia2V5XCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5ID09IDU0KSB7XG4gICAgdWkuZGVzdHJveTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vbk1DS2V5KGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xufWApO1xuXG5zdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5iYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMDAsMTAwLDAuNSk7XG5maWx0ZXI6IGJsdXIoNHB4KTtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzIHJnYiB7XG4gIDAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAwLDAuNzUpOyB9XG4gIDE2JSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMjU1LCAwLDAuNzUpOyB9XG4gIDMzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDI1NSwgMCwwLjc1KTsgfVxuICA1MCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDI1NSwwLjc1KTsgfVxuICA2NiUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAyNTUsMC43NSk7IH1cbiAgODMlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAyNTUsMC43NSk7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxufWApO1xuXG5mdW5jdGlvbiBjdXN0b21VSSgpIHtcbiAgLy9AdHMtaWdub3JlXG4gIGlmIChNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbiAhPSBudWxsKSB7XG4gICAgaWYgKFxuICAgICAgTW9kQVBJLmN1cnJlbnRTY3JlZW4oKS5zdGFydHNXaXRoKFwibmV0Lm1pbmVjcmFmdC5jbGllbnQuZ3VpLkd1aU1haW5NZW51XCIpXG4gICAgKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBzaW5nbGVQbGF5ZXIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMF07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBtdWx0aVBsYXllciA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVsxXTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIG1vZHMgPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMl07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBmb3JrT25HaXRIdWIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbM107XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBvcHRpb25zID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzRdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgZWRpdFByb2ZpbGUgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNV07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBsYXVuZ3VhZ2UgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNl07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBjdXJyZW50U2NyZWVuID0gTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW47XG5cbiAgICAgIHZhciBidXR0b25EaXN0YW5jZSA9IDQyO1xuICAgICAgdmFyIGJ1dHRvbkRpc3RhbmNlUmVsID0gMjI7XG4gICAgICB2YXIgYnV0dG9uU3BhY2luZyA9IDI7XG4gICAgICB2YXIgYnV0dG9uV2lkdGggPSAxMDA7XG4gICAgICB2YXIgZW5jID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgICAvL29wdGlvbnNcbiAgICAgIG9wdGlvbnMuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIG9wdGlvbnMuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vbW9kc1xuICAgICAgbW9kcy4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoIC8gMjtcbiAgICAgIG1vZHMuJHhQb3NpdGlvbjAgPSBvcHRpb25zLiR4UG9zaXRpb24wIC0gYnV0dG9uV2lkdGggLyAyIC0gYnV0dG9uU3BhY2luZztcbiAgICAgIG1vZHMuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vU2luZ2xlUGxheWVyXG4gICAgICBzaW5nbGVQbGF5ZXIuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIHNpbmdsZVBsYXllci4keVBvc2l0aW9uID0gb3B0aW9ucy4keVBvc2l0aW9uIC0gYnV0dG9uRGlzdGFuY2VSZWw7XG4gICAgICAvL011bHRpUGxheWVyXG4gICAgICBtdWx0aVBsYXllci4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoICsgbGF1bmd1YWdlLiR3aWR0aDEzICsgYnV0dG9uU3BhY2luZztcbiAgICAgIG11bHRpUGxheWVyLiR4UG9zaXRpb24wID1cbiAgICAgICAgc2luZ2xlUGxheWVyLiR4UG9zaXRpb24wICsgYnV0dG9uV2lkdGggKyBidXR0b25TcGFjaW5nO1xuICAgICAgbXVsdGlQbGF5ZXIuJHlQb3NpdGlvbiA9IG9wdGlvbnMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgLy9FZGl0IHByb2ZpbGVcbiAgICAgIGVkaXRQcm9maWxlLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBlZGl0UHJvZmlsZS4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9MYW5nXG4gICAgICBsYXVuZ3VhZ2UuJHhQb3NpdGlvbjAgPVxuICAgICAgICBlZGl0UHJvZmlsZS4keFBvc2l0aW9uMCArIGVkaXRQcm9maWxlLiR3aWR0aDEzICsgYnV0dG9uU3BhY2luZztcbiAgICAgIGxhdW5ndWFnZS4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9Gb3JrXG4gICAgICBmb3JrT25HaXRIdWIuJHdpZHRoMTMgPSBidXR0b25XaWR0aCAvIDI7XG4gICAgICBmb3JrT25HaXRIdWIuJHlQb3NpdGlvbiA9IG1vZHMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgZm9ya09uR2l0SHViLiR4UG9zaXRpb24wID0gbW9kcy4keFBvc2l0aW9uMDtcbiAgICAgIGZvcmtPbkdpdEh1Yi4kZGlzcGxheVN0cmluZy4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIkZvcmtcIik7XG5cbiAgICAgIGN1cnJlbnRTY3JlZW4uJG9wZW5HTFdhcm5pbmcxLiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiXCIpO1xuICAgICAgLy9jdXJyZW50U2NyZWVuLiRzcGxhc2hUZXh0LiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiSnVzdGluIGlzIHRoZSBzcGVkIHZlcnNpb24gb2YgRGFuaWVsXCIpXG5cbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpID09IG51bGwpIHtcbiAgICAgICAgdmFyIHNlcnZlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZXJ2ZXJzLmlkID0gXCJzZXJ2ZXJwaW5nbGlzdFwiO1xuXG4gICAgICAgIHZhciBwaW5ncyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFlb24gTmV0d29ya1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9hZW9uLW5ldHdvcmsubmV0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFyY2ggTUNcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vbWMuYXJjaC5sb2xcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiSGVsbGl1bSBOZXR3b3JrXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL2hlbGx0ZWNoLmNjXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNsZXZlciBUZWFjaGluZ1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9jbGV2ZXItdGVhY2hpbmcuY29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlp5dGhcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vbWMuenl0aC5tZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgc2VydmVycy5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstYWxsXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUudG9wID0gXCIxMCVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5sZWZ0ID0gXCIyLjUlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUud2lkdGggPSBcIjE1JVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmhlaWdodCA9IFwiODAlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuXG4gICAgICAgIHBpbmdzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGNvbnN0IGN1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3VyLnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICAgIHNlcnZlcnMuYXBwZW5kQ2hpbGQoY3VyKTtcblxuICAgICAgICAgIGNvbnN0IGN1cmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXJoMi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICAgIGN1cmgyLmlubmVyVGV4dCA9IGUubmFtZTtcbiAgICAgICAgICBjdXIuYXBwZW5kQ2hpbGQoY3VyaDIpO1xuXG4gICAgICAgICAgY29uc3QgY3Vyc2VydmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXJzZXJ2ZXIuaW5uZXJUZXh0ID0gZS5hZGRyZXNzO1xuICAgICAgICAgIGN1ci5hcHBlbmRDaGlsZChjdXJzZXJ2ZXIpO1xuXG4gICAgICAgICAgY29uc3QgcGxheWVyaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcGxheWVyaW5mby5pbm5lclRleHQgPSBcIm5vdCBjb25uZWN0ZWRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gICAgICAgICAgY3VyLmFwcGVuZENoaWxkKHBsYXllcmluZm8pO1xuXG4gICAgICAgICAgY29uc3QgdGVzdHdlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoZS5hZGRyZXNzKTtcbiAgICAgICAgICBjb25zdCB0aW1lcGluZyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICB0ZXN0d2Vic29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlc3R3ZWJzb2NrZXQuc2VuZChcIkFjY2VwdDogTU9URFwiKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGVzdHdlYnNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGUuZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGF0ID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdFtcInR5cGVcIl0udG9Mb3dlckNhc2UoKSA9PT0gXCJtb3RkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyaW5mby5pbm5lclRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgIGRhdFtcImRhdGFcIl1bXCJvbmxpbmVcIl0gKyBcIi9cIiArIGRhdFtcImRhdGFcIl1bXCJtYXhcIl07XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUuY29sb3IgPSBcImxpbWVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5zdHlsZS5mbG9hdCA9IFwicmlnaHRcIjtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5pbm5lclRleHQgKz0gRGF0ZS5ub3coKSAtIHRpbWVwaW5nICsgXCJtc1wiO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJpbmZvLmFwcGVuZENoaWxkKHBpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlcnZlcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSAhPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjdXN0dWkgPSBzZXRJbnRlcnZhbChjdXN0b21VSSwgNTApO1xuXG4vL0N1c3RvbSBDdXJzb3JcbmRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0uc3R5bGUuY3Vyc29yID1cbiAgJ3VybChcIicgKyBhc3NldHMuY3Vyc29yICsgJ1wiKSwgYXV0byc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICd1cmwoXCInICsgYXNzZXRzLmN1cnNvciArICdcIiksIGF1dG8nO1xuXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuICBjbGVhckludGVydmFsKGN1c3R1aSk7XG4gIHVpLmRlc3Ryb3koKTtcbiAgZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXS5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikgIT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikucmVtb3ZlKCk7XG4gIH1cbn1cbiIsCiAgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi91dGlsL2NsaWVudE5hbWUudHNcIjtcbmltcG9ydCB7IGxvZ1RvQ29uc29sZSB9IGZyb20gXCIuL3V0aWwvY29uc29sZUxvZ2dlclwiO1xuaW1wb3J0IHsgbG9nVG9DaGF0IH0gZnJvbSBcIi4vdXRpbC9jaGF0TG9nZ2VyXCI7XG5pbXBvcnQgKiBhcyBhc3NldHMgZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi9ndWkudHNcIjtcblxubG9nVG9Db25zb2xlKFwiSW5pdC4uLlwiKTtcbmxvZ1RvQ2hhdChcIkluaXQuLi5cIik7XG5cbmxvZ1RvQ2hhdChcIkxvYWRpbmcgbW9kdWxlcy4uLlwiKTtcblxuaW1wb3J0IHsgbW9kdWxlcyB9IGZyb20gXCIuL3V0aWwvYWN0dWFsTW9kdWxlc1wiO1xuXG5Nb2RBUEkucmVxdWlyZShcInBsYXllclwiKTtcblxuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICBpZiAoXG4gICAgZS5sb2NhdGlvbiA9PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQgJiZcbiAgICBlLmtleSA9PSBcIlNoaWZ0XCIgJiZcbiAgICAhdWkuaXNPcGVuKClcbiAgKSB7XG4gICAgdWkub3BlbigpO1xuICB9XG4gIGZvciAobGV0IGtleSBpbiBtb2R1bGVzKSB7XG4gICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbW9kdWxlc1trZXldLmZ1bmN0aW9uLm9uS2V5KGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwia2V5XCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5ID09IDU0KSB7XG4gICAgdWkuZGVzdHJveTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vbk1DS2V5KGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xufWApO1xuXG5zdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5iYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMDAsMTAwLDAuNSk7XG5maWx0ZXI6IGJsdXIoNHB4KTtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzIHJnYiB7XG4gIDAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAwLDAuNzUpOyB9XG4gIDE2JSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMjU1LCAwLDAuNzUpOyB9XG4gIDMzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDI1NSwgMCwwLjc1KTsgfVxuICA1MCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDI1NSwwLjc1KTsgfVxuICA2NiUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAyNTUsMC43NSk7IH1cbiAgODMlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAyNTUsMC43NSk7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxufWApO1xuXG5mdW5jdGlvbiBjdXN0b21VSSgpIHtcbiAgLy9AdHMtaWdub3JlXG4gIGlmIChNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbiAhPSBudWxsKSB7XG4gICAgaWYgKFxuICAgICAgTW9kQVBJLmN1cnJlbnRTY3JlZW4oKS5zdGFydHNXaXRoKFwibmV0Lm1pbmVjcmFmdC5jbGllbnQuZ3VpLkd1aU1haW5NZW51XCIpXG4gICAgKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBzaW5nbGVQbGF5ZXIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMF07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBtdWx0aVBsYXllciA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVsxXTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIG1vZHMgPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMl07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBmb3JrT25HaXRIdWIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbM107XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBvcHRpb25zID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzRdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgZWRpdFByb2ZpbGUgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNV07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBsYXVuZ3VhZ2UgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNl07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBjdXJyZW50U2NyZWVuID0gTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW47XG5cbiAgICAgIHZhciBidXR0b25EaXN0YW5jZSA9IDQyO1xuICAgICAgdmFyIGJ1dHRvbkRpc3RhbmNlUmVsID0gMjI7XG4gICAgICB2YXIgYnV0dG9uU3BhY2luZyA9IDI7XG4gICAgICB2YXIgYnV0dG9uV2lkdGggPSAxMDA7XG4gICAgICB2YXIgZW5jID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgICAvL29wdGlvbnNcbiAgICAgIG9wdGlvbnMuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIG9wdGlvbnMuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vbW9kc1xuICAgICAgbW9kcy4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoIC8gMjtcbiAgICAgIG1vZHMuJHhQb3NpdGlvbjAgPSBvcHRpb25zLiR4UG9zaXRpb24wIC0gYnV0dG9uV2lkdGggLyAyIC0gYnV0dG9uU3BhY2luZztcbiAgICAgIG1vZHMuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vU2luZ2xlUGxheWVyXG4gICAgICBzaW5nbGVQbGF5ZXIuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIHNpbmdsZVBsYXllci4keVBvc2l0aW9uID0gb3B0aW9ucy4keVBvc2l0aW9uIC0gYnV0dG9uRGlzdGFuY2VSZWw7XG4gICAgICAvL011bHRpUGxheWVyXG4gICAgICBtdWx0aVBsYXllci4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoICsgbGF1bmd1YWdlLiR3aWR0aDEzICsgYnV0dG9uU3BhY2luZztcbiAgICAgIG11bHRpUGxheWVyLiR4UG9zaXRpb24wID1cbiAgICAgICAgc2luZ2xlUGxheWVyLiR4UG9zaXRpb24wICsgYnV0dG9uV2lkdGggKyBidXR0b25TcGFjaW5nO1xuICAgICAgbXVsdGlQbGF5ZXIuJHlQb3NpdGlvbiA9IG9wdGlvbnMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgLy9FZGl0IHByb2ZpbGVcbiAgICAgIGVkaXRQcm9maWxlLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBlZGl0UHJvZmlsZS4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9MYW5nXG4gICAgICBsYXVuZ3VhZ2UuJHhQb3NpdGlvbjAgPVxuICAgICAgICBlZGl0UHJvZmlsZS4keFBvc2l0aW9uMCArIGVkaXRQcm9maWxlLiR3aWR0aDEzICsgYnV0dG9uU3BhY2luZztcbiAgICAgIGxhdW5ndWFnZS4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9Gb3JrXG4gICAgICBmb3JrT25HaXRIdWIuJHdpZHRoMTMgPSBidXR0b25XaWR0aCAvIDI7XG4gICAgICBmb3JrT25HaXRIdWIuJHlQb3NpdGlvbiA9IG1vZHMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgZm9ya09uR2l0SHViLiR4UG9zaXRpb24wID0gbW9kcy4keFBvc2l0aW9uMDtcbiAgICAgIGZvcmtPbkdpdEh1Yi4kZGlzcGxheVN0cmluZy4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIkZvcmtcIik7XG5cbiAgICAgIGN1cnJlbnRTY3JlZW4uJG9wZW5HTFdhcm5pbmcxLiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiXCIpO1xuICAgICAgLy9jdXJyZW50U2NyZWVuLiRzcGxhc2hUZXh0LiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiSnVzdGluIGlzIHRoZSBzcGVkIHZlcnNpb24gb2YgRGFuaWVsXCIpXG5cbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpID09IG51bGwpIHtcbiAgICAgICAgdmFyIHNlcnZlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZXJ2ZXJzLmlkID0gXCJzZXJ2ZXJwaW5nbGlzdFwiO1xuXG4gICAgICAgIHZhciBwaW5ncyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFlb24gTmV0d29ya1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9hZW9uLW5ldHdvcmsubmV0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFyY2ggTUNcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vbWMuYXJjaC5sb2xcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiSGVsbGl1bSBOZXR3b3JrXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL2hlbGx0ZWNoLmNjXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNsZXZlciBUZWFjaGluZ1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9jbGV2ZXItdGVhY2hpbmcuY29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlp5dGhcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vbWMuenl0aC5tZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgc2VydmVycy5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstYWxsXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUudG9wID0gXCIxMCVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5sZWZ0ID0gXCIyLjUlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUud2lkdGggPSBcIjE1JVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmhlaWdodCA9IFwiODAlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuXG4gICAgICAgIHBpbmdzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGNvbnN0IGN1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3VyLnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICAgIHNlcnZlcnMuYXBwZW5kQ2hpbGQoY3VyKTtcblxuICAgICAgICAgIGNvbnN0IGN1cmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXJoMi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICAgIGN1cmgyLmlubmVyVGV4dCA9IGUubmFtZTtcbiAgICAgICAgICBjdXIuYXBwZW5kQ2hpbGQoY3VyaDIpO1xuXG4gICAgICAgICAgY29uc3QgY3Vyc2VydmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXJzZXJ2ZXIuaW5uZXJUZXh0ID0gZS5hZGRyZXNzO1xuICAgICAgICAgIGN1ci5hcHBlbmRDaGlsZChjdXJzZXJ2ZXIpO1xuXG4gICAgICAgICAgY29uc3QgcGxheWVyaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcGxheWVyaW5mby5pbm5lclRleHQgPSBcIm5vdCBjb25uZWN0ZWRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gICAgICAgICAgY3VyLmFwcGVuZENoaWxkKHBsYXllcmluZm8pO1xuXG4gICAgICAgICAgY29uc3QgdGVzdHdlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoZS5hZGRyZXNzKTtcbiAgICAgICAgICBjb25zdCB0aW1lcGluZyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICB0ZXN0d2Vic29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlc3R3ZWJzb2NrZXQuc2VuZChcIkFjY2VwdDogTU9URFwiKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGVzdHdlYnNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGUuZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGF0ID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdFtcInR5cGVcIl0udG9Mb3dlckNhc2UoKSA9PT0gXCJtb3RkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyaW5mby5pbm5lclRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgIGRhdFtcImRhdGFcIl1bXCJvbmxpbmVcIl0gKyBcIi9cIiArIGRhdFtcImRhdGFcIl1bXCJtYXhcIl07XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUuY29sb3IgPSBcImxpbWVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5zdHlsZS5mbG9hdCA9IFwicmlnaHRcIjtcbiAgICAgICAgICAgICAgICAgICAgcGluZy5pbm5lclRleHQgKz0gRGF0ZS5ub3coKSAtIHRpbWVwaW5nICsgXCJtc1wiO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJpbmZvLmFwcGVuZENoaWxkKHBpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlcnZlcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSAhPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjdXN0dWkgPSBzZXRJbnRlcnZhbChjdXN0b21VSSwgNTApO1xuXG4vL0N1c3RvbSBDdXJzb3JcbmRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0uc3R5bGUuY3Vyc29yID1cbiAgJ3VybChcIicgKyBhc3NldHMuY3Vyc29yICsgJ1wiKSwgYXV0byc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICd1cmwoXCInICsgYXNzZXRzLmN1cnNvciArICdcIiksIGF1dG8nO1xuXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuICBjbGVhckludGVydmFsKGN1c3R1aSk7XG4gIHVpLmRlc3Ryb3koKTtcbiAgZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXS5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikgIT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikucmVtb3ZlKCk7XG4gIH1cbn1cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7OztBQUVPLElBQUksYUFBYTs7O0FDQWpCLFNBQVMsWUFBWSxDQUFDLEtBQUs7QUFDaEMsVUFBUSxJQUFJLElBQUksZUFBZSxLQUFLO0FBQUE7OztBQ0QvQixTQUFTLFNBQVMsQ0FBQyxLQUFLO0FBRTdCLFNBQU8sY0FBYyxFQUFDLEtBQUssU0FBSyxvQkFBaUIsTUFBSyxDQUFDO0FBQUE7OztBQ0psRCxJQUFJLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTYixTQUFTLElBQUksQ0FBQyxRQUFRO0FBQzNCLFNBQU8sbUJBQW9CLEdBQUc7QUFDNUIsUUFBSSxPQUFPLFdBQVcsR0FBRztBQUVyQixXQUFLLE9B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QUFDMUMsZ0JBQU0sTUFBTSxXQUFXO0FBQ3ZCLGdCQUFNLFlBQVksRUFBRTtBQUNwQixjQUFJLFlBQVksS0FBSztBQUVyQixnQkFBTSxZQUFZLFNBQVMsY0FBYyxLQUFLO0FBQzlDLG9CQUFVLFlBQVksRUFBRTtBQUN4QixjQUFJLFlBQVksU0FBUztBQUV6QixnQkFBTSxhQUFhLFNBQVMsY0FBYyxLQUFLO0FBQy9DLHFCQUFXLFlBQVk7QUFDdkIscUJBQVcsTUFBTSxRQUFRO0FBQ3pCLHFCQUFXLE1BQU0sYUFBYTtBQUM5QixxQkFBVyxNQUFNLFdBQVc7QUFDNUIscUJBQVcsTUFBTSxRQUFRO0FBRXpCLGNBQUksWUFBWSxVQUFVO0FBRTFCLGdCQUFNLGdCQUFnQixJQUFJLFVBQVUsRUFBRSxPQUFPO0FBQzdDLGdCQUFNLFdBQVcsS0FBSyxJQUFJO0FBRTFCLHdCQUFjLFNBQVMsTUFBTTtBQUMzQiwwQkFBYyxLQUFLLGNBQWM7QUFBQTtBQUduQyx3QkFBYyxZQUFZLENBQUMsT0FBTTtBQUMvQixnQkFBSSxHQUFFLE1BQU07QUFDVix5QkFBVyxHQUFFLFNBQVMsVUFBVTtBQUM5QixvQkFBSTtBQUNGLHNCQUFJLE1BQU0sS0FBSyxNQUFNLEdBQUUsSUFBSTtBQUMzQixzQkFBSSxJQUFJLFFBQVEsWUFBWSxNQUFNLFFBQVE7QUFDeEMsK0JBQVcsWUFDVCxJQUFJLFFBQVEsWUFBWSxNQUFNLElBQUksUUFBUTtBQUM1QywrQkFBVyxNQUFNLFFBQVE7QUFFekIsMEJBQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUN6Qyx5QkFBSyxNQUFNLFVBQVU7QUFDckIseUJBQUssTUFBTSxRQUFRO0FBQ25CLHlCQUFLLGFBQWEsS0FBSyxJQUFJLElBQUksV0FBVztBQUMxQywrQkFBVyxZQUFZLElBQUk7QUFFM0IsNEJBQVEsSUFBSSxHQUFHO0FBQUEsa0JBQ2pCO0FBQUEseUJBQ08sS0FBUDtBQUNBLDBCQUFRLElBQUksR0FBRztBQUFBO0FBQUEsY0FFbkI7QUFBQSxZQUNGO0FBQUE7QUFBQSxTQUVIO0FBQ0QsaUJBQVMsS0FBSyxZQUFZLE9BQU87QUFBQSxNQUNuQztBQUFBLElBQ0YsT0FBTztBQUNMLFVBQUksU0FBUyxlQUFlLGdCQUFnQixLQUFLLE1BQU07QUFDckQsaUJBQVMsZUFBZSxnQkFBZ0IsRUFBRSxPQUFPO0FBQUEsTUFDbkQ7QUFBQTtBQUFBLEVBRUo7QUFBQTsiLAogICJkZWJ1Z0lkIjogIjdGQTcyODlGNkQ5QUMyQzc2NDc1NmUyMTY0NzU2ZTIxIiwKICAibmFtZXMiOiBbXQp9
