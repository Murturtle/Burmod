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
var cursor = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAlCAYAAABReInxAAAAAXNSR0IArs4c6QAACFFJREFUWEetV1tvXNUZXfvcrzMTO05IK4WqCoKCCgjUqpXaClSkwm/oP+lLeeGlD+1D21QtUktVqRemgChCIEgiAw1GQJqQgGMSQxI7dmKP535u+5x9qb49TkUIShTKkY5mPHO8117rW9/69rDHHrxHSynheh46ezrozHXgee5Qa/0Kr5tnvIVi6fDhxQxf0cUIUCsFy7YRpQnSVgrXdftSiX/mdfP751558xQA/RXhgf34gbu1FBJe4GPfHQvYv38Bge+PGiGOlGX5UtnU5+qaDTzpjFO/N/nls0sVY19+AwawLCvsmevgoYe/jfsfuBeh7/Pt3uDy6urFjStbO5OaizOSqeORXZ/847+Ob/4/bI2kk0mGAwf24SePP4JHHv0+SaqXl1fx/okz7PLlq8iL4g0N8Vco69XukeNrXwHgFAcO7Mfjjz+KHz3yPdi2jfPnL+D06RVsbe00eV4cr4V8UWv1JpfNOlQke5wXCwuLTbcLeTsbMJJmWWFq94MffhcPf+d+cimGgzFGozE4b8Q0Lz7t9ydnB8PRJ9Ms35BCXBax9x9gstHtLpW3BfjYg3frPK+wd+8cHnr4ftzzrUPwAxe+5yNJYsRRoLa2+9XKyqq8cHGj7g/GG7xulhyL/WXvXXd8cPhw97ZaZtc0HPPze/DAg/fi0F3fMGDtTgsLC/NotVNsbFzVK2dX2YWLa7K3Pdgpq2bJ9qynle2eiXQwiu+8sz5zZl4uLv5cAuymLWQAeVWj02njnnsP4eDBr8FxHLQ7bcM6bcUgUw0GI/OaZUWW5fnqZDR9azCaflpXzYbnWuteu3VpyO3tbrd705oawJo3aLUSfPPQncY8BNhqpZibayNKQjBYxkgUDk0tml6/P/r44wvbm5tbV4q8OG8B77VDZ+kPLy2u3KqeBrCpGyRpjIMHv459+/fCcVyzgXY7RRAFiKPQKJCmCZTU6vLmljx18kO5traZZXl2lgHHAj94FVNxKl9YaO677z795JNPkrQ3yGsAhRCIotCw2zPfgWO7aLcTpGmMIPCRthJTzz2djlnj6tYOPlo+h/X1qyjy4gKAt7XDjmUFPxU4/lizYLQ2HI4XFxfF5xmbxidAP/AxN081S+HYNtIkngH6HuI0NvK22y0ja5ZluHJlG+PhVOdFNap4vZaX5ceTaXaOAWuWb5+sNrOPuks3towBnE0LF2mrhTAMYdkWkiREGsfwPQ9xEhnX0gaoRxshUBYcTVMToJxMprzfGxbDyXQbWp/UzHmh4TjaPXJkDA1mWO7mrwFUUsFxHcRpAj8IYFkWkjhCEofwfcf0I7GjOnueB6UU6roBhX5ZceTTXA9GY4wmea6E+sDS1j8aO3/d03Ic2xG/jFbW7XZrg/tZQBpPfhDCYjAgrYQAPSRJhFZrxpCUkFKB8xp104AMR++riqMoS8Hr5gKv+LHxZLokoAsX9kaK+uzvXv738DOAEo7nIk52AS0LKYGkkQGM4widTsu0ius64E1jepJzTq4FY5ZRRSspi7Ka7PSH6zs7o02hZGnZ9hu+bT//pxdfW/9CwIAYGtNESJLA1CyJYlPDVjuhSQJe1xiPp6g4hwVmZKZ0YhZ0nhViq7cj+jsjUUtZa8aebyzxm789d/TMT594It2VVMJxXSQkKZnGshFFPsLAMyEQRyRpiiSNzAaU0uA1h5ASFmNwbMfc1HRVVRn202kOXjcQSr1eCf5MPinOhW4w/znAFGEUglkWHMeGY1uwmGU+ozaJogBB6JnNETC1D11CKlBrkYmU1iDXCzG7y5Kv9IejE0VRDTzXS24AjKIIzGZgjEEpQGtt2MZxiCgIEAQewpiSp4UoDA3bsqpQFKVxLilCsjuOpbXSajAYTa9u9YZFwWvP8+zrXJokCaI4NgwVZjulBcPAR0wSh7Obntu3MI8ojqA16EQwk7Cp4TueeZ7MpbTSvd5Qb13tqZKX2nW8a22xW8MkQWgAZ71K8iitzAJJFCAMAoRhYGo5Pz+POA6MAsRumhWGoWUx2IysBEilMBxNsdMfmrYh9tdLagAjw5AuWoxAIwIhQMMwNCk0t3fOhPoMsEKel6Yf6chJ9WwaYb7LihLjSYa6FqbmX1hD0/m7gPRPxNAYxvcMQwr6Do2u0IfSIGOgIMC6hpISdV2bQFBK6aqWvCirUgghbNtmNwLGEcCuB6Q8JbP4nmuShvqONkB/kwIExCtuJKWazxwr6L0SSm00Uq1qpSfMhn9LhsTUti1jAuo1RmprQMvZYNfQJltFI0zkkSLmU9MeSmiLve0Ewcue665L3bRuWsPdFWcjjbFdI0jwqtZ5NlVVxbVWUptoI1U0yHB0MLe0xbSWOlcaz7ph9Nuf/eJXHx5+6qn4loAEQ04l/9PmpVSyrjnPs2zEeVVKoQRhWGRPM4VM2lG40mCaao0XYFl/Xjy1cvH6LDXRlsI0PgUxDbLdWv6vJkJopWQupLwkGvmOaJqLEmziaG3Bgie1tijLXTChGVPQltBar2g/fv/ou+/2vxgwiQ0Q1YBe6aap0FQcTU13M1RKvqO19bSUzWnfxYQWKh1hck4qzWwr1nZZmvMM81kl0oP5tePGjVmaRDNm9Pisbrqua83L0mp4RYE81lIdg7J+LfXgvcXl3u0dhM0AVsocA2lS0PwzbUEGYIySQ0pJPyV4T9R1XzRiQyuctmz7taburX4pwGvy0RC9VjciaNPUsK1aaX1SaXVUCvGOrPUlMC9jntc/cuJEQcPidn6wGkmvHeVMlNGI2L1M/zl2pbR+Swr1d+5Yr7x14uyVWx12b/b9dYCff5AYuo5VC+jjUqoXhWBHtprl88vLMAeiL3P9F2TeQSxLTVWHAAAAAElFTkSuQmCC";

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

//# debugId=0925EB6C4A26201564756e2164756e21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWwvY2xpZW50TmFtZS50cyIsICJzcmMvdXRpbC9jb25zb2xlTG9nZ2VyLnRzIiwgInNyYy91dGlsL2NoYXRMb2dnZXIudHMiLCAic3JjL2Fzc2V0cy50cyIsICJzcmMvY2hlYXRzL2ZsaWdodC50cyIsICJzcmMvY2hlYXRzL3N0ZXAudHMiLCAic3JjL2NoZWF0cy9hdXRvZmlzaC50cyIsICJzcmMvY2hlYXRzL3NlcnZlcmNyYXNoZXIudHMiLCAic3JjL3V0aWwvYWN0dWFsTW9kdWxlcy50cyIsICJzcmMvZ3VpLnRzIiwgInNyYy9NYWluLnRzIiwgInNyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIi8vIGdsb2JhbCB2YXJpYWJsZSBmb3IgdGhlIGNsaWVudCdzIG5hbWVcblxuZXhwb3J0IHZhciBjbGllbnROYW1lID0gXCJidXJtb2RcIjsiLAogICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vY2xpZW50TmFtZS50c1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dUb0NvbnNvbGUobXNnKSB7XG4gIGNvbnNvbGUubG9nKGBbJHtjbGllbnROYW1lfV0gJHttc2d9YCk7XG59IiwKICAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWUudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9DaGF0KG1zZykge1xuICAvL0B0cy1pZ25vcmVcbiAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogYMKnNVske2NsaWVudE5hbWV9XcKnciAke21zZ31gfSk7XG59IiwKICAiZXhwb3J0IHZhciBjdXJzb3IgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBbENBWUFBQUJSZUlueEFBQUFBWE5TUjBJQXJzNGM2UUFBQ0ZGSlJFRlVXRWV0VjF0dlhOVVpYZnZjcnpNVE8wNUlLNFdxQ29LQ0NnalVxcFhhQ2xTa3dtL29QK2xMZWVHbEQrMUQyMVF0VWt0VnFSZW1nQ2hDSUVnaUF3MUdRSnFRZ0dNU1F4STdkbUtQNTM1dSs1eDlxYjQ5VGtVSVNoVEtrWTVtUEhPODExN3JXOS82OXJESEhyeEhTeW5oZWg0NmV6cm96SFhnZWU1UWEvMEtyNXRudklWaTZmRGh4UXhmMGNVSVVDc0Z5N1lScFFuU1ZnclhkZnRTaVgvbWRmUDc1MTU1OHhRQS9SWGhnZjM0Z2J1MUZCSmU0R1BmSFF2WXYzOEJnZStQR2lHT2xHWDVVdG5VNStxYURUenBqRk8vTi9ubHMwc1ZZMTkrQXdhd0xDdnNtZXZnb1llL2pmc2Z1QmVoNy9QdDN1RHk2dXJGalN0Yk81T2Fpek9TcWVPUlhaLzg0NytPYi80L2JJMmtrMG1HQXdmMjRTZVBQNEpISHYwK1NhcVhsMWZ4L29rejdQTGxxOGlMNGcwTjhWY282OVh1a2VOclh3SGdGQWNPN01mamp6K0tIejN5UGRpMmpmUG5MK0QwNlJWc2JlMDBlVjRjcjRWOFVXdjFKcGZOT2xRa2U1d1hDd3VMVGJjTGVUc2JNSkptV1dGcTk0TWZmaGNQZitkK2NpbUdnekZHb3pFNGI4UTBMejd0OXlkbkI4UFJKOU1zMzVCQ1hCYXg5eDlnc3RIdExwVzNCZmpZZzNmclBLK3dkKzhjSG5yNGZ0enpyVVB3QXhlKzV5TkpZc1JSb0xhMis5WEt5cXE4Y0hHajdnL0dHN3h1bGh5TC9XWHZYWGQ4Y1Bodzk3WmFadGMwSFBQemUvREFnL2ZpMEYzZk1HRHRUZ3NMQy9Ob3RWTnNiRnpWSzJkWDJZV0xhN0szUGRncHEyYko5cXlubGUyZWlYUXdpdSs4c3o1elpsNHVMdjVjQXV5bUxXUUFlVldqMDJuam5uc1A0ZURCcjhGeEhMUTdiY002YmNVZ1V3MEdJL09hWlVXVzVmbnFaRFI5YXpDYWZscFh6WWJuV3V0ZXUzVnB5TzN0YnJkNzA1b2F3Sm8zYUxVU2ZQUFFuY1k4Qk5ocXBaaWJheU5LUWpCWXhrZ1VEazB0bWw2L1AvcjQ0d3ZibTV0YlY0cThPRzhCNzdWRFora1BMeTJ1M0txZUJyQ3BHeVJwaklNSHY0NTkrL2ZDY1Z5emdYWTdSUkFGaUtQUUtKQ21DWlRVNnZMbWxqeDE4a081dHJhWlpYbDJsZ0hIQWo5NEZWTnhLbDlZYU82Nzd6Nzk1Sk5Qa3JRM3lHc0FoUkNJb3RDdzJ6UGZnV083YUxjVHBHbU1JUENSdGhKVHp6MmRqbG5qNnRZT1BsbytoL1gxcXlqeTRnS0F0N1hEam1VRlB4VTQvbGl6WUxRMkhJNFhGeGZGNXhtYnhpZEFQL0F4TjA4MVMrSFlOdElrbmdINkh1STBOdksyMnkwamE1Wmx1SEpsRytQaFZPZEZOYXA0dlphWDVjZVRhWGFPQVd1V2I1K3NOck9QdWtzM3Rvd0JuRTBMRjJtcmhUQU1ZZGtXa2lSRUdzZndQUTl4RWhuWDBnYW9SeHNoVUJZY1RWTVRvSnhNcHJ6Zkd4YkR5WFFiV3AvVXpIbWg0VGphUFhKa0RBMW1XTzdtcndGVVVzRnhIY1JwQWo4SVlGa1dramhDRW9md2ZjZjBJN0dqT251ZUI2VVU2cm9CaFg1WmNlVFRYQTlHWTR3bWVhNkUrc0RTMWo4YU8zL2QwM0ljMnhHL2pGYlc3WFpyZy90WlFCcFBmaERDWWpBZ3JZUUFQU1JKaEZacnhwQ1VrRktCOHhwMTA0QU1SKytyaXFNb1M4SHI1Z0t2K0xIeFpMb2tvQXNYOWthSyt1enZYdjczOERPQUVvN25JazUyQVMwTEtZR2trUUdNNHdpZFRzdTBpdXM2NEUxamVwSnpUcTRGWTVaUlJTc3BpN0thN1BTSDZ6czdvMDJoWkduWjlodStiVC8vcHhkZlcvOUN3SUFZR3RORVNKTEExQ3lKWWxQRFZqdWhTUUplMXhpUHA2ZzRod1ZtWktaMFloWjBuaFZpcTdjaitqc2pVVXRaYThhZWJ5enhtNzg5ZC9UTVQ1OTRJdDJWVk1KeFhTUWtLWm5Hc2hGRlBzTEFNeUVRUnlScGlpU056QWFVMHVBMWg1QVNGbU53Yk1mYzFIUlZWUm4yMDJrT1hqY1FTcjFlQ2Y1TVBpbk9oVzR3L3puQUZHRVVnbGtXSE1lR1kxdXdtR1Urb3phSm9nQkI2Sm5ORVRDMUQxMUNLbEJya1ltVTFpRFhDekc3eTVLdjlJZWpFMFZSRFR6WFMyNEFqS0lJekdaZ2pFRXBRR3R0Mk1aeGlDZ0lFQVFld3BpU3A0VW9EQTNic3FwUUZLVnhMaWxDc2p1T3BiWFNhakFZVGE5dTlZWkZ3V3ZQOCt6clhKb2tDYUk0Tmd3VlpqdWxCY1BBUjB3U2g3T2JudHUzTUk4b2pxQTE2RVF3azdDcDRUdWVlWjdNcGJUU3ZkNVFiMTN0cVpLWDJuVzhhMjJ4VzhNa1FXZ0FaNzFLOGlpdHpBSkpGQ0FNQW9SaFlHbzVQeitQT0E2TUFzUnVtaFdHb1dVeDJJeXNCRWlsTUJ4TnNkTWZtclloOXRkTGFnQWp3NUF1V294QUl3SWhRTU13TkNrMHQzZk9oUG9Nc0VLZWw2WWY2Y2hKOVd3YVliN0xpaExqU1lhNkZxYm1YMWhEMC9tN2dQUlB4TkFZeHZjTVF3cjZEbzJ1MElmU0lHT2dJTUM2aHBJU2RWMmJRRkJLNmFxV3ZDaXJVZ2doYk50bU53TEdFY0N1QjZROEpiUDRubXVTaHZxT05rQi9rd0lFeEN0dUpLV2F6eHdyNkwwU1NtMDBVcTFxcFNmTWhuOUxoc1RVdGkxakF1bzFSbXByUU12WllOZlFKbHRGSTB6a2tTTG1VOU1lU21pTHZlMEV3Y3VlNjY1TDNiUnVXc1BkRldjampiRmRJMGp3cXRaNU5sVlZ4YlZXVXB0b0kxVTB5SEIwTUxlMHhiU1dPbGNhejdwaDlOdWYvZUpYSHg1KzZxbjRsb0FFUTA0bC85UG1wVlN5cmpuUHMyekVlVlZLb1FSaFdHUlBNNFZNMmxHNDBtQ2FhbzBYWUZsL1hqeTFjdkg2TERYUmxzSTBQZ1V4RGJMZFd2NnZKa0pvcFdRdXBMd2tHdm1PYUpxTEVtemlhRzNCZ2llMXRpakxYVENoR1ZQUWx0QmFyMmcvZnYvb3UrLzJ2eGd3aVEwUTFZQmU2YWFwMEZRY1RVMTNNMVJLdnFPMTliU1V6V25meFlRV0toMWhjazRxeld3cjFuWlptdk1NODFrbDBvUDV0ZVBHalZtYVJETm05UGlzYnJxdWE4M0wwbXA0UllFODFsSWRnN0orTGZYZ3ZjWGwzdTBkaE0wQVZzb2NBMmxTMFB3emJVRUdZSXlTUTBwSlB5VjRUOVIxWHpSaVF5dWN0bXo3dGFidXJYNHB3R3Z5MFJDOVZqY2lhTlBVc0sxYWFYMVNhWFZVQ3ZHT3JQVWxNQzlqbnRjL2N1SkVRY1BpZG42d0drbXZIZVZNbE5HSTJMMU0vemwycGJSK1N3cjFkKzVZcjd4MTR1eVZXeDEyYi9iOWRZQ2ZmNUFZdW81VkMrampVcW9YaFdCSHRwcmw4OHZMTUFlaUwzUDlGMlRlUVN4TFRWV0hBQUFBQUVsRlRrU3VRbUNDXCI7IiwKICAiZXhwb3J0IHZhciBzZXR0aW5ncyA9IFtcbiAge1xuICAgIG5hbWU6IFwiTW9kZVwiLFxuICAgIHR5cGU6IFwiTGlzdFwiLFxuICAgIG1vZGVzOiBbXCJBYmlsaXRpZXNcIiwgXCJQYWNrZXRcIl0sXG4gICAgY3VycmVudDogMCxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBhcmVudC5nZXRFbmFibGVkKCkpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGlmICghTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcpIHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZyA9IHRydWU7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgaWYgKE1vZEFQSS5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSB0cnVlO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGFyZW50Lm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcyAhPSBudWxsKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZyA9IGZhbHNlO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsCiAgImV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuICBwYXJlbnQuc2V0dGluZ3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJIZWlnaHRcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDYsXG4gICAgICBzdGVwOiAwLjUsXG4gICAgICBjdXJyZW50OiAxLjVcbiAgICB9XG4gIF1cblxuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCAhPSBwYXJlbnQuc2V0dGluZ3NbMF0uY3VycmVudCkge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50O1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50O1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAoTW9kQVBJLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDAuNjAwMDAwMDIzODQxODU3OTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxufVxuXG4iLAogICJleHBvcnQgZnVuY3Rpb24gaW5pdChwYXJlbnQpIHtcbiAgdmFyIGNhdGNoZmlzaCA9IGZhbHNlO1xuICB2YXIgY2F0Y2hhZ2FpbiA9IGZhbHNlO1xuICBwYXJlbnQub25VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAoY2F0Y2hhZ2FpbiAmJiBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkgPT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnJpZ2h0Q2xpY2tNb3VzZSgpO1xuICAgICAgICBjYXRjaGFnYWluID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPCAxMDAgJiYgY2F0Y2hmaXNoID09IGZhbHNlKSB7XG4gICAgICAgICAgY2F0Y2hmaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5maXNoRW50aXR5LmlzSW5XYXRlcigpICYmIE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPiAxMDAgJiYgKE1hdGguY2VpbChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgLSBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgPj0gLjMpIHtcbiAgICAgICAgICBpZiAoY2F0Y2hmaXNoKSB7XG4gICAgICAgICAgICBjYXRjaGZpc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgTW9kQVBJLnJpZ2h0Q2xpY2tNb3VzZSgpO1xuICAgICAgICAgICAgY2F0Y2hhZ2FpbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICBjYXRjaGZpc2ggPSB0cnVlO1xuICB9XG5cbn1cblxuIiwKICAiZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KSB7XG5cbiAgcGFyZW50LmNyc2hJbnRlciA9IG51bGw7XG4gIFxuICBwYXJlbnQuc2V0dGluZ3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJQUFNcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDIwLFxuICAgICAgbWF4OiAyMDAwMCxcbiAgICAgIHN0ZXA6IDEwLFxuICAgICAgY3VycmVudDogNTAwMFxuICAgIH1cbiAgXVxuICBcbiAgZnVuY3Rpb24gY3Jhc2goKSB7XG4gICAgaWYoTW9kQVBJLnBsYXllciAhPSBudWxsKXtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQ7IGkrKykge1xuICAgICAgICBNb2RBUEkucGxheWVyLnN3aW5nSXRlbSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudC5vbkVuYWJsZSA9IGZ1bmN0aW9uKCl7XG4gICAgcGFyZW50LmNyc2hJbnRlciA9IHNldEludGVydmFsKGNyYXNoLCAxMDAwKTtcbiAgfVxuICBcbiAgcGFyZW50Lm9uRGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHBhcmVudC5jcnNoSW50ZXIgIT0gbnVsbCl7XG4gICAgICBjbGVhckludGVydmFsKHBhcmVudC5jcnNoSW50ZXIpO1xuICAgIH1cbiAgfVxufSIsCiAgImltcG9ydCAqIGFzIGZsaWdodE1PRCBmcm9tIFwiLi4vY2hlYXRzL2ZsaWdodC50c1wiO1xuaW1wb3J0ICogYXMgZnVsbGJyaWdodE1PRCBmcm9tIFwiLi4vY2hlYXRzL2F1dG9maXNoLnRzXCI7XG5pbXBvcnQgKiBhcyBzdGVwTU9EIGZyb20gXCIuLi9jaGVhdHMvc3RlcC50c1wiO1xuaW1wb3J0ICogYXMgYXV0b2Zpc2hNT0QgZnJvbSBcIi4uL2NoZWF0cy9hdXRvZmlzaC50c1wiO1xuaW1wb3J0ICogYXMgc2VydmVyY3Jhc2hlck1PRCBmcm9tIFwiLi4vY2hlYXRzL3NlcnZlcmNyYXNoZXIudHNcIjtcbmltcG9ydCAqIGFzIHVpIGZyb20gXCIuLi9ndWlcIjtcblxuZnVuY3Rpb24gdGVtcGxhdGUobW9kKSB7XG4gIC8vIG1vZHVsZSBmdW5jdGlvbnNcblxuICB0aGlzLmVuYWJsZWRET05PVFVTRSA9IGZhbHNlO1xuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5vbkVuYWJsZSA9IGZ1bmN0aW9uKCkgeyB9O1xuICB0aGlzLm9uRGlzYWJsZSA9IGZ1bmN0aW9uKCkgeyB9O1xuICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmVuYWJsZWRET05PVFVTRSA9IHRydWU7IHRoaXMub25FbmFibGUoKTsgdWkucmVmcmVzaE1vZHVsZXMoKSB9O1xuICB0aGlzLmRpc2FibGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSBmYWxzZTsgdGhpcy5vbkRpc2FibGUoKTsgdWkucmVmcmVzaE1vZHVsZXMoKSB9O1xuICB0aGlzLm9uS2V5ID0gZnVuY3Rpb24oZSl7fTtcbiAgdGhpcy5vbk1DS2V5ID0gZnVuY3Rpb24oZSl7fTtcbiAgdGhpcy5nZXRFbmFibGVkID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmVuYWJsZWRET05PVFVTRTsgfTtcbiAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSAhdGhpcy5lbmFibGVkRE9OT1RVU0U7IGlmICh0aGlzLmVuYWJsZWRET05PVFVTRSkgeyB0aGlzLm9uRW5hYmxlKCkgfSBlbHNlIHsgdGhpcy5vbkRpc2FibGUoKTsgfSB9O1xuICAvL21jIGZ1bmN0aW9uc1xuICB0aGlzLm9uVXBkYXRlID0gZnVuY3Rpb24oKSB7IH07XG5cbiAgdGhpcy5hbGVydCA9IGZ1bmN0aW9uKCkgeyBhbGVydCgpIH07XG5cbiAgdGhpcy5zZXR0aW5ncyA9IFtdXG5cbiAgbW9kLmluaXQodGhpcyk7XG59XG5cbmV4cG9ydCB2YXIgY2F0ZWdvcmllcyA9IHtcbiAgbW92ZW1lbnQ6IFwiTW92ZW1lbnRcIixcbiAgcGxheWVyOiBcIlBsYXllclwiLFxuICByZW5kZXI6IFwiUmVuZGVyXCIsXG4gIGZ1bjogXCJGdW5cIlxufVxuXG5leHBvcnQgdmFyIG1vZHVsZXMgPSB7XG4gIGZsaWdodDoge1xuICAgIG5hbWU6IFwiRmxpZ2h0XCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShmbGlnaHRNT0QpLFxuICAgIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3dzIHlvdSB0byBmbHlcIixcbiAgfSxcbiAgc3RlcDoge1xuICAgIG5hbWU6IFwiU3RlcFwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoc3RlcE1PRCksXG4gICAgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGxvd3MgeW91IHRvIHN0ZXBcIixcbiAgfSxcbiAgYXV0b2Zpc2g6IHtcbiAgICBuYW1lOiBcIkF1dG9GaXNoXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShhdXRvZmlzaE1PRCksXG4gICAgY2F0ZWdvcnk6IFwiUGxheWVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXV0b21hdGljYWxseSBjYXN0cyBhbmQgcmVlbHMgcm9kXCIsXG4gIH0sXG5cbiAgc2VydmVyY3Jhc2hlcjoge1xuICAgIG5hbWU6IFwiU2VydmVyIENyYXNoZXJcIixcbiAgICBmdW5jdGlvbjogbmV3IHRlbXBsYXRlKHNlcnZlcmNyYXNoZXJNT0QpLFxuICAgIGNhdGVnb3J5OiBcIkV4cGxvaXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZW5kcyBqdXN0IGEgZmV3IHN3aW5nIHBhY2tldHMgOylcIixcbiAgfVxufSIsCiAgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi91dGlsL2NsaWVudE5hbWVcIjtcbmltcG9ydCB7IG1vZHVsZXMsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi91dGlsL2FjdHVhbE1vZHVsZXNcIjtcblxuXG4vLyBkZWxldGUgdGhlIHVpXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIikgIT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIikucmVtb3ZlKCk7XG4gIH1cbn1cblxudmFyIGNvbnRhaW5lcjtcblxuXG4vLyBjaGVjayBpZiBvcGVuXG5leHBvcnQgZnVuY3Rpb24gaXNPcGVuKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cblxuLy8gb3BlbiBhIHNldHRpbmcgbWVudVxuZXhwb3J0IGZ1bmN0aW9uIHNldHRpbmcobW9kdWxlKSB7XG4gIC8qdmFyIGxzdCA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIk1vZGVcIixcbiAgICAgIHR5cGU6IFwiTGlzdFwiLFxuICAgICAgbW9kZXM6IFtcIkFiaWxpdGllc1wiLCBcIlBhY2tldFwiXSxcbiAgICAgIGN1cnJlbnQ6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3BlZWRcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDQsXG4gICAgICBjdXJyZW50OiAxXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlRlc3RcIixcbiAgICAgIHR5cGU6IFwiQm9vbGVhblwiLFxuICAgICAgdG9nZ2xlZDogdHJ1ZVxuICAgIH0sXG4gIF0qL1xuICB2YXIgbHN0ID0gbW9kdWxlLmZ1bmN0aW9uLnNldHRpbmdzO1xuICBjb25zb2xlLmxvZyhsc3QpO1xuICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHMuY2xhc3NOYW1lID0gXCJzZXR0aW5nXCI7XG4gIHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIHMuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIHMuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICBzLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICBzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICBzLnN0eWxlLnBhZGRpbmcgPSBcIjE1cHhcIjtcbiAgcy5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcbiAgcy5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICBzLnN0eWxlLmFuaW1hdGlvbiA9IFwicmdiIDRzIGxpbmVhciBpbmZpbml0ZVwiO1xuICBzLnN0eWxlLndpZHRoID0gXCIxNSVcIjtcbiAgcy5zdHlsZS5oZWlnaHQgPSBcIjUwJVwiO1xuICBzLnN0eWxlLnRvcCA9IFwiMTAwcHhcIlxuICBzLnN0eWxlLmxlZnQgPSBcIjEwMHB4XCJcblxuICBzLnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xuICBzLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcblxuICBzLnN0eWxlLnJlc2l6ZSA9IFwiYm90aFwiO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gbW9kdWxlLm5hbWU7XG4gIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gIHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIHZhciBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3NlLmlubmVyVGV4dCA9IFwiWFwiO1xuICBjbG9zZS5zdHlsZS5mb250U2l6ZSA9IFwiMjhweFwiO1xuICBjbG9zZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgY2xvc2Uuc3R5bGUucmlnaHQgPSBcIjE1cHhcIjtcbiAgY2xvc2Uuc3R5bGUudG9wID0gXCIxMHB4XCI7XG4gIGNsb3NlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICBjbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcy5yZW1vdmUoKTtcbiAgfTtcbiAgcy5hcHBlbmRDaGlsZChjbG9zZSk7XG5cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuXG4gIGZvciAobGV0IGkgaW4gbHN0KSB7XG4gICAgaWYgKGxzdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXG4gICAgICB2YXIgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMDAsMTAwLDEwMCwwLjUpXCI7XG4gICAgICBiZy5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xuICAgICAgYmcuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICBiZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgIHMuYXBwZW5kQ2hpbGQoYmcpO1xuICAgICAgaWYgKGxzdFtpXS50eXBlID09IFwiTGlzdFwiKSB7XG4gICAgICAgIHZhciBzZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VsRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBzZWxEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2VsRGVzYyk7XG4gICAgICAgIHZhciBzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBzZWwub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0uY3VycmVudCA9IHBhcnNlSW50KHNlbC52YWx1ZSk7XG4gICAgICAgICAgc2VsRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS5jdXJyZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiBpbiBsc3RbaV0ubW9kZXMpIHtcbiAgICAgICAgICBpZiAobHN0W2ldLm1vZGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBsc3RbaV0ubW9kZXNbal07XG4gICAgICAgICAgICBvcHQudmFsdWUgPSBqICsgXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2VsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsc3RbaV0udHlwZSA9PSBcIlNsaWRlclwiKSB7XG4gICAgICAgIHZhciBzbGlkZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbGlkZURlc2Muc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgc2xpZGVEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2xpZGVEZXNjKTtcbiAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBzbGlkZS50eXBlID0gXCJyYW5nZVwiO1xuICAgICAgICBzbGlkZS5zdGVwID0gbHN0W2ldLnN0ZXA7XG4gICAgICAgIHNsaWRlLm1pbiA9IGxzdFtpXS5taW47XG4gICAgICAgIHNsaWRlLm1heCA9IGxzdFtpXS5tYXg7XG4gICAgICAgIHNsaWRlLnZhbHVlID0gbHN0W2ldLmN1cnJlbnQ7XG4gICAgICAgIHNsaWRlLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbHN0W2ldLmN1cnJlbnQgPSBwYXJzZUZsb2F0KHNsaWRlLnZhbHVlKTtcbiAgICAgICAgICBzbGlkZURlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICB9XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgIH0gZWxzZSBpZiAobHN0W2ldLnR5cGUgPT0gXCJCb29sZWFuXCIpIHtcbiAgICAgICAgdmFyIGJvb2xEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9vbERlc2Muc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgYm9vbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0udG9nZ2xlZH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChib29sRGVzYyk7XG4gICAgICAgIHZhciBib29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBib29sLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGJvb2wuY2hlY2tlZCA9IGxzdFtpXS50b2dnbGVkO1xuICAgICAgICBib29sLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbHN0W2ldLnRvZ2dsZWQgPSBib29sLmNoZWNrZWQ7XG4gICAgICAgICAgYm9vbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0udG9nZ2xlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGJvb2wpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vY3JlYXRlIHRoZSBndWlcbmV4cG9ydCBmdW5jdGlvbiBvcGVuKCkge1xuICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcbiAgdmFyIGNuID0gY2xpZW50TmFtZTtcblxuICBjb25zdCB1aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdWkuaWQgPSBcInVpXCI7XG4gIHVpLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICB1aS5zdHlsZS53aWR0aCA9IFwiNjYlXCI7XG4gIHVpLnN0eWxlLmhlaWdodCA9IFwiNjYlXCI7XG4gIHVpLnN0eWxlLnRvcCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0ICogMC4xNjUgKyBcInB4XCI7XG4gIHVpLnN0eWxlLmxlZnQgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoICogMC4xNjUgKyBcInB4XCI7XG4gIHVpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICB1aS5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHVpLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsMC43NSlcIjtcbiAgdWkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gIHVpLnN0eWxlLnBhZGRpbmcgPSBcIjE1cHhcIjtcbiAgdWkuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDQwcHggcmdiYSgwLCAxOTUsIDI1NSwwLjUpXCI7XG4gIHVpLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICB1aS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICB1aS5zdHlsZS5hbmltYXRpb24gPSBcInJnYiA0cyBsaW5lYXIgaW5maW5pdGVcIjtcblxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWkpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gY247XG4gIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyNHB4XCI7XG4gIHRpdGxlLnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gIHVpLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICB2YXIgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2guc3R5bGUud2lkdGggPSBcIjMzJVwiO1xuICBzZWFyY2gudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2guc3R5bGUuYm9yZGVyID0gXCJzb2xpZCAycHggcmdiYSgyMDAsMjAwLDIwMCwwLjUpXCI7XG4gIHNlYXJjaC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgc2VhcmNoLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbiAgc2VhcmNoLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICBzZWFyY2guc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyMHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5mb250U2l6ZSA9IFwiMjJweFwiO1xuICBzZWFyY2guc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSg1MCw1MCw1MCwuMjQpXCI7XG4gIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwi8J+Uju+4jiBTZWFyY2hcIlxuICBzZWFyY2guc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICB0aXRsZS5hcHBlbmRDaGlsZChzZWFyY2gpO1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UuaW5uZXJUZXh0ID0gXCJYXCI7XG4gIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gXCIyOHB4XCI7XG4gIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjbG9zZS5zdHlsZS5yaWdodCA9IFwiMTVweFwiO1xuICBjbG9zZS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgY2xvc2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBkZXN0cm95KCk7XG4gIH07XG4gIHVpLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuXG5cbiAgdmFyIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhci5zdHlsZS5vdmVyZmxvd1ggPSBcInNjcm9sbFwiO1xuICB1aS5hcHBlbmRDaGlsZChiYXIpO1xuXG4gIGZvciAobGV0IGkgaW4gY2F0ZWdvcmllcykge1xuICAgIGlmIChjYXRlZ29yaWVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBjYXRlZ29yaWVzW2ldO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMDAsMTAwLDEwMCwwLjUpXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgY2F0ZWdvcnkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9O1xuXG4gICAgICBiYXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjZW50ZXJcIik7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gIHVpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cblxuICByZWZyZXNoTW9kdWxlcygpO1xufVxuXG5cbi8vIFJlbG9hZCBtb2R1bGUgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hNb2R1bGVzKCkge1xuICBpZiAoaXNPcGVuKCkpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpIGluIG1vZHVsZXMpIHtcbiAgICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhciBtb2RsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1vZGx0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1vZGx0aXRsZS5pbm5lclRleHQgPSBgJHttb2R1bGVzW2ldLm5hbWV9YDtcbiAgICAgICAgbW9kbHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gICAgICAgIG1vZGx0aXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIG1vZGwuYXBwZW5kQ2hpbGQobW9kbHRpdGxlKTtcblxuICAgICAgICBtb2RsLnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICBtb2RsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXG4gICAgICAgIG1vZGwuc3R5bGUud2lkdGggPSBcIjI1JVwiO1xuICAgICAgICBtb2RsLnN0eWxlLmhlaWdodCA9IFwiMjUlXCI7XG4gICAgICAgIG1vZGwuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgICAgbW9kbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgICAgaWYgKG1vZHVsZXNbaV0uZnVuY3Rpb24uZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgICAgbW9kbC5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMTVweCByZ2JhKDAsIDI1NSwgMCwxKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kbC5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIG1vZHVsZXNbaV0uZnVuY3Rpb24udG9nZ2xlKCk7XG4gICAgICAgICAgcmVmcmVzaE1vZHVsZXMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBtb2RsLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgbmV3IHNldHRpbmcobW9kdWxlc1tpXSk7XG4gICAgICAgICAgY29uc29sZS5sb2cobW9kdWxlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLAogICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vdXRpbC9jbGllbnROYW1lLnRzXCI7XG5pbXBvcnQgeyBsb2dUb0NvbnNvbGUgfSBmcm9tIFwiLi91dGlsL2NvbnNvbGVMb2dnZXJcIjtcbmltcG9ydCB7IGxvZ1RvQ2hhdCB9IGZyb20gXCIuL3V0aWwvY2hhdExvZ2dlclwiO1xuaW1wb3J0ICogYXMgYXNzZXRzIGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4vZ3VpLnRzXCI7XG5cbmxvZ1RvQ29uc29sZShcIkluaXQuLi5cIik7XG5sb2dUb0NoYXQoXCJJbml0Li4uXCIpO1xuXG5sb2dUb0NoYXQoXCJMb2FkaW5nIG1vZHVsZXMuLi5cIik7XG5cbmltcG9ydCB7IG1vZHVsZXMgfSBmcm9tIFwiLi91dGlsL2FjdHVhbE1vZHVsZXNcIjtcblxuTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG5cbmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKFxuICAgIGUubG9jYXRpb24gPT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUICYmXG4gICAgZS5rZXkgPT0gXCJTaGlmdFwiICYmXG4gICAgIXVpLmlzT3BlbigpXG4gICkge1xuICAgIHVpLm9wZW4oKTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vbktleShlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmtleSA9PSA1NCkge1xuICAgIHVpLmRlc3Ryb3k7XG4gIH1cbiAgZm9yIChsZXQga2V5IGluIG1vZHVsZXMpIHtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBtb2R1bGVzW2tleV0uZnVuY3Rpb24ub25NQ0tleShlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQga2V5IGluIG1vZHVsZXMpIHtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBtb2R1bGVzW2tleV0uZnVuY3Rpb24ub25VcGRhdGUoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMF07XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59YCk7XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuYmFja2dyb3VuZDogcmdiYSgxMDAsMTAwLDEwMCwwLjUpO1xuZmlsdGVyOiBibHVyKDRweCk7XG59YCk7XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyByZ2Ige1xuICAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxuICAxNiUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDI1NSwgMCwwLjc1KTsgfVxuICAzMyUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDAsMC43NSk7IH1cbiAgNTAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwgMjU1LCAyNTUsMC43NSk7IH1cbiAgNjYlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMjU1LDAuNzUpOyB9XG4gIDgzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMjU1LDAuNzUpOyB9XG4gIDEwMCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDAsIDAsMC43NSk7IH1cbn1gKTtcblxuZnVuY3Rpb24gY3VzdG9tVUkoKSB7XG4gIC8vQHRzLWlnbm9yZVxuICBpZiAoTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4gIT0gbnVsbCkge1xuICAgIGlmIChcbiAgICAgIE1vZEFQSS5jdXJyZW50U2NyZWVuKCkuc3RhcnRzV2l0aChcIm5ldC5taW5lY3JhZnQuY2xpZW50Lmd1aS5HdWlNYWluTWVudVwiKVxuICAgICkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgc2luZ2xlUGxheWVyID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzBdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgbXVsdGlQbGF5ZXIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMV07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBtb2RzID0gTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzJdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgZm9ya09uR2l0SHViID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzNdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgb3B0aW9ucyA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVs0XTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIGVkaXRQcm9maWxlID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzVdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgbGF1bmd1YWdlID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzZdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgY3VycmVudFNjcmVlbiA9IE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuO1xuXG4gICAgICB2YXIgYnV0dG9uRGlzdGFuY2UgPSA0MjtcbiAgICAgIHZhciBidXR0b25EaXN0YW5jZVJlbCA9IDIyO1xuICAgICAgdmFyIGJ1dHRvblNwYWNpbmcgPSAyO1xuICAgICAgdmFyIGJ1dHRvbldpZHRoID0gMTAwO1xuICAgICAgdmFyIGVuYyA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgLy9vcHRpb25zXG4gICAgICBvcHRpb25zLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBvcHRpb25zLiR5UG9zaXRpb24gPSBjdXJyZW50U2NyZWVuLiRoZWlnaHQ3IC0gYnV0dG9uRGlzdGFuY2U7XG4gICAgICAvL21vZHNcbiAgICAgIG1vZHMuJHdpZHRoMTMgPSBidXR0b25XaWR0aCAvIDI7XG4gICAgICBtb2RzLiR4UG9zaXRpb24wID0gb3B0aW9ucy4keFBvc2l0aW9uMCAtIGJ1dHRvbldpZHRoIC8gMiAtIGJ1dHRvblNwYWNpbmc7XG4gICAgICBtb2RzLiR5UG9zaXRpb24gPSBjdXJyZW50U2NyZWVuLiRoZWlnaHQ3IC0gYnV0dG9uRGlzdGFuY2U7XG4gICAgICAvL1NpbmdsZVBsYXllclxuICAgICAgc2luZ2xlUGxheWVyLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBzaW5nbGVQbGF5ZXIuJHlQb3NpdGlvbiA9IG9wdGlvbnMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgLy9NdWx0aVBsYXllclxuICAgICAgbXVsdGlQbGF5ZXIuJHdpZHRoMTMgPSBidXR0b25XaWR0aCArIGxhdW5ndWFnZS4kd2lkdGgxMyArIGJ1dHRvblNwYWNpbmc7XG4gICAgICBtdWx0aVBsYXllci4keFBvc2l0aW9uMCA9XG4gICAgICAgIHNpbmdsZVBsYXllci4keFBvc2l0aW9uMCArIGJ1dHRvbldpZHRoICsgYnV0dG9uU3BhY2luZztcbiAgICAgIG11bHRpUGxheWVyLiR5UG9zaXRpb24gPSBvcHRpb25zLiR5UG9zaXRpb24gLSBidXR0b25EaXN0YW5jZVJlbDtcbiAgICAgIC8vRWRpdCBwcm9maWxlXG4gICAgICBlZGl0UHJvZmlsZS4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoO1xuICAgICAgZWRpdFByb2ZpbGUuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vTGFuZ1xuICAgICAgbGF1bmd1YWdlLiR4UG9zaXRpb24wID1cbiAgICAgICAgZWRpdFByb2ZpbGUuJHhQb3NpdGlvbjAgKyBlZGl0UHJvZmlsZS4kd2lkdGgxMyArIGJ1dHRvblNwYWNpbmc7XG4gICAgICBsYXVuZ3VhZ2UuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vRm9ya1xuICAgICAgZm9ya09uR2l0SHViLiR3aWR0aDEzID0gYnV0dG9uV2lkdGggLyAyO1xuICAgICAgZm9ya09uR2l0SHViLiR5UG9zaXRpb24gPSBtb2RzLiR5UG9zaXRpb24gLSBidXR0b25EaXN0YW5jZVJlbDtcbiAgICAgIGZvcmtPbkdpdEh1Yi4keFBvc2l0aW9uMCA9IG1vZHMuJHhQb3NpdGlvbjA7XG4gICAgICBmb3JrT25HaXRIdWIuJGRpc3BsYXlTdHJpbmcuJGNoYXJhY3RlcnMuZGF0YSA9IGVuYy5lbmNvZGUoXCJGb3JrXCIpO1xuXG4gICAgICBjdXJyZW50U2NyZWVuLiRvcGVuR0xXYXJuaW5nMS4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIlwiKTtcbiAgICAgIC8vY3VycmVudFNjcmVlbi4kc3BsYXNoVGV4dC4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIkp1c3RpbiBpcyB0aGUgc3BlZCB2ZXJzaW9uIG9mIERhbmllbFwiKVxuXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHZhciBzZXJ2ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VydmVycy5pZCA9IFwic2VydmVycGluZ2xpc3RcIjtcblxuICAgICAgICB2YXIgcGluZ3MgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJBZW9uIE5ldHdvcmtcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vYWVvbi1uZXR3b3JrLm5ldFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJBcmNoIE1DXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL21jLmFyY2gubG9sXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkhlbGxpdW0gTmV0d29ya1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9oZWxsdGVjaC5jY1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJDbGV2ZXIgVGVhY2hpbmdcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vY2xldmVyLXRlYWNoaW5nLmNvbVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJaeXRoXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL21jLnp5dGgubWVcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHNlcnZlcnMuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLWFsbFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLnRvcCA9IFwiMTAlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUubGVmdCA9IFwiMi41JVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLndpZHRoID0gXCIxNSVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5oZWlnaHQgPSBcIjgwJVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcblxuICAgICAgICBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBjb25zdCBjdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGN1ci5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgICBzZXJ2ZXJzLmFwcGVuZENoaWxkKGN1cik7XG5cbiAgICAgICAgICBjb25zdCBjdXJoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3VyaDIuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgICBjdXJoMi5pbm5lclRleHQgPSBlLm5hbWU7XG4gICAgICAgICAgY3VyLmFwcGVuZENoaWxkKGN1cmgyKTtcblxuICAgICAgICAgIGNvbnN0IGN1cnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3Vyc2VydmVyLmlubmVyVGV4dCA9IGUuYWRkcmVzcztcbiAgICAgICAgICBjdXIuYXBwZW5kQ2hpbGQoY3Vyc2VydmVyKTtcblxuICAgICAgICAgIGNvbnN0IHBsYXllcmluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHBsYXllcmluZm8uaW5uZXJUZXh0ID0gXCJub3QgY29ubmVjdGVkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xuICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuICAgICAgICAgIGN1ci5hcHBlbmRDaGlsZChwbGF5ZXJpbmZvKTtcblxuICAgICAgICAgIGNvbnN0IHRlc3R3ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGUuYWRkcmVzcyk7XG4gICAgICAgICAgY29uc3QgdGltZXBpbmcgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgdGVzdHdlYnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0ZXN0d2Vic29ja2V0LnNlbmQoXCJBY2NlcHQ6IE1PVERcIik7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRlc3R3ZWJzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlLmRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGRhdCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRbXCJ0eXBlXCJdLnRvTG93ZXJDYXNlKCkgPT09IFwibW90ZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcmluZm8uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRbXCJkYXRhXCJdW1wib25saW5lXCJdICsgXCIvXCIgKyBkYXRbXCJkYXRhXCJdW1wibWF4XCJdO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmNvbG9yID0gXCJsaW1lXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuaW5uZXJUZXh0ICs9IERhdGUubm93KCkgLSB0aW1lcGluZyArIFwibXNcIjtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyaW5mby5hcHBlbmRDaGlsZChwaW5nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZXJ2ZXJzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikgIT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3VzdHVpID0gc2V0SW50ZXJ2YWwoY3VzdG9tVUksIDUwKTtcblxuLy9DdXN0b20gQ3Vyc29yXG5kb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdLnN0eWxlLmN1cnNvciA9XG4gICd1cmwoXCInICsgYXNzZXRzLmN1cnNvciArICdcIiksIGF1dG8nO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAndXJsKFwiJyArIGFzc2V0cy5jdXJzb3IgKyAnXCIpLCBhdXRvJztcblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgY2xlYXJJbnRlcnZhbChjdXN0dWkpO1xuICB1aS5kZXN0cm95KCk7XG4gIGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0uc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpICE9IG51bGwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpLnJlbW92ZSgpO1xuICB9XG59XG4iLAogICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vdXRpbC9jbGllbnROYW1lLnRzXCI7XG5pbXBvcnQgeyBsb2dUb0NvbnNvbGUgfSBmcm9tIFwiLi91dGlsL2NvbnNvbGVMb2dnZXJcIjtcbmltcG9ydCB7IGxvZ1RvQ2hhdCB9IGZyb20gXCIuL3V0aWwvY2hhdExvZ2dlclwiO1xuaW1wb3J0ICogYXMgYXNzZXRzIGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4vZ3VpLnRzXCI7XG5cbmxvZ1RvQ29uc29sZShcIkluaXQuLi5cIik7XG5sb2dUb0NoYXQoXCJJbml0Li4uXCIpO1xuXG5sb2dUb0NoYXQoXCJMb2FkaW5nIG1vZHVsZXMuLi5cIik7XG5cbmltcG9ydCB7IG1vZHVsZXMgfSBmcm9tIFwiLi91dGlsL2FjdHVhbE1vZHVsZXNcIjtcblxuTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG5cbmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKFxuICAgIGUubG9jYXRpb24gPT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUICYmXG4gICAgZS5rZXkgPT0gXCJTaGlmdFwiICYmXG4gICAgIXVpLmlzT3BlbigpXG4gICkge1xuICAgIHVpLm9wZW4oKTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vbktleShlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmtleSA9PSA1NCkge1xuICAgIHVpLmRlc3Ryb3k7XG4gIH1cbiAgZm9yIChsZXQga2V5IGluIG1vZHVsZXMpIHtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBtb2R1bGVzW2tleV0uZnVuY3Rpb24ub25NQ0tleShlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQga2V5IGluIG1vZHVsZXMpIHtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBtb2R1bGVzW2tleV0uZnVuY3Rpb24ub25VcGRhdGUoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMF07XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59YCk7XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuYmFja2dyb3VuZDogcmdiYSgxMDAsMTAwLDEwMCwwLjUpO1xuZmlsdGVyOiBibHVyKDRweCk7XG59YCk7XG5cbnN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyByZ2Ige1xuICAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxuICAxNiUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDI1NSwgMCwwLjc1KTsgfVxuICAzMyUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDAsMC43NSk7IH1cbiAgNTAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwgMjU1LCAyNTUsMC43NSk7IH1cbiAgNjYlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMjU1LDAuNzUpOyB9XG4gIDgzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMjU1LDAuNzUpOyB9XG4gIDEwMCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDAsIDAsMC43NSk7IH1cbn1gKTtcblxuZnVuY3Rpb24gY3VzdG9tVUkoKSB7XG4gIC8vQHRzLWlnbm9yZVxuICBpZiAoTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4gIT0gbnVsbCkge1xuICAgIGlmIChcbiAgICAgIE1vZEFQSS5jdXJyZW50U2NyZWVuKCkuc3RhcnRzV2l0aChcIm5ldC5taW5lY3JhZnQuY2xpZW50Lmd1aS5HdWlNYWluTWVudVwiKVxuICAgICkge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgc2luZ2xlUGxheWVyID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzBdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgbXVsdGlQbGF5ZXIgPVxuICAgICAgICBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMV07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBtb2RzID0gTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzJdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgZm9ya09uR2l0SHViID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzNdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgb3B0aW9ucyA9XG4gICAgICAgIE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVs0XTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIGVkaXRQcm9maWxlID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzVdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgbGF1bmd1YWdlID1cbiAgICAgICAgTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzZdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgY3VycmVudFNjcmVlbiA9IE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuO1xuXG4gICAgICB2YXIgYnV0dG9uRGlzdGFuY2UgPSA0MjtcbiAgICAgIHZhciBidXR0b25EaXN0YW5jZVJlbCA9IDIyO1xuICAgICAgdmFyIGJ1dHRvblNwYWNpbmcgPSAyO1xuICAgICAgdmFyIGJ1dHRvbldpZHRoID0gMTAwO1xuICAgICAgdmFyIGVuYyA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgLy9vcHRpb25zXG4gICAgICBvcHRpb25zLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBvcHRpb25zLiR5UG9zaXRpb24gPSBjdXJyZW50U2NyZWVuLiRoZWlnaHQ3IC0gYnV0dG9uRGlzdGFuY2U7XG4gICAgICAvL21vZHNcbiAgICAgIG1vZHMuJHdpZHRoMTMgPSBidXR0b25XaWR0aCAvIDI7XG4gICAgICBtb2RzLiR4UG9zaXRpb24wID0gb3B0aW9ucy4keFBvc2l0aW9uMCAtIGJ1dHRvbldpZHRoIC8gMiAtIGJ1dHRvblNwYWNpbmc7XG4gICAgICBtb2RzLiR5UG9zaXRpb24gPSBjdXJyZW50U2NyZWVuLiRoZWlnaHQ3IC0gYnV0dG9uRGlzdGFuY2U7XG4gICAgICAvL1NpbmdsZVBsYXllclxuICAgICAgc2luZ2xlUGxheWVyLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBzaW5nbGVQbGF5ZXIuJHlQb3NpdGlvbiA9IG9wdGlvbnMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgLy9NdWx0aVBsYXllclxuICAgICAgbXVsdGlQbGF5ZXIuJHdpZHRoMTMgPSBidXR0b25XaWR0aCArIGxhdW5ndWFnZS4kd2lkdGgxMyArIGJ1dHRvblNwYWNpbmc7XG4gICAgICBtdWx0aVBsYXllci4keFBvc2l0aW9uMCA9XG4gICAgICAgIHNpbmdsZVBsYXllci4keFBvc2l0aW9uMCArIGJ1dHRvbldpZHRoICsgYnV0dG9uU3BhY2luZztcbiAgICAgIG11bHRpUGxheWVyLiR5UG9zaXRpb24gPSBvcHRpb25zLiR5UG9zaXRpb24gLSBidXR0b25EaXN0YW5jZVJlbDtcbiAgICAgIC8vRWRpdCBwcm9maWxlXG4gICAgICBlZGl0UHJvZmlsZS4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoO1xuICAgICAgZWRpdFByb2ZpbGUuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vTGFuZ1xuICAgICAgbGF1bmd1YWdlLiR4UG9zaXRpb24wID1cbiAgICAgICAgZWRpdFByb2ZpbGUuJHhQb3NpdGlvbjAgKyBlZGl0UHJvZmlsZS4kd2lkdGgxMyArIGJ1dHRvblNwYWNpbmc7XG4gICAgICBsYXVuZ3VhZ2UuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vRm9ya1xuICAgICAgZm9ya09uR2l0SHViLiR3aWR0aDEzID0gYnV0dG9uV2lkdGggLyAyO1xuICAgICAgZm9ya09uR2l0SHViLiR5UG9zaXRpb24gPSBtb2RzLiR5UG9zaXRpb24gLSBidXR0b25EaXN0YW5jZVJlbDtcbiAgICAgIGZvcmtPbkdpdEh1Yi4keFBvc2l0aW9uMCA9IG1vZHMuJHhQb3NpdGlvbjA7XG4gICAgICBmb3JrT25HaXRIdWIuJGRpc3BsYXlTdHJpbmcuJGNoYXJhY3RlcnMuZGF0YSA9IGVuYy5lbmNvZGUoXCJGb3JrXCIpO1xuXG4gICAgICBjdXJyZW50U2NyZWVuLiRvcGVuR0xXYXJuaW5nMS4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIlwiKTtcbiAgICAgIC8vY3VycmVudFNjcmVlbi4kc3BsYXNoVGV4dC4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIkp1c3RpbiBpcyB0aGUgc3BlZCB2ZXJzaW9uIG9mIERhbmllbFwiKVxuXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHZhciBzZXJ2ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VydmVycy5pZCA9IFwic2VydmVycGluZ2xpc3RcIjtcblxuICAgICAgICB2YXIgcGluZ3MgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJBZW9uIE5ldHdvcmtcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vYWVvbi1uZXR3b3JrLm5ldFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJBcmNoIE1DXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL21jLmFyY2gubG9sXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkhlbGxpdW0gTmV0d29ya1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9oZWxsdGVjaC5jY1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJDbGV2ZXIgVGVhY2hpbmdcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vY2xldmVyLXRlYWNoaW5nLmNvbVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJaeXRoXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL21jLnp5dGgubWVcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHNlcnZlcnMuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLWFsbFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLnRvcCA9IFwiMTAlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUubGVmdCA9IFwiMi41JVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLndpZHRoID0gXCIxNSVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5oZWlnaHQgPSBcIjgwJVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcblxuICAgICAgICBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBjb25zdCBjdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGN1ci5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgICBzZXJ2ZXJzLmFwcGVuZENoaWxkKGN1cik7XG5cbiAgICAgICAgICBjb25zdCBjdXJoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3VyaDIuc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgICAgICBjdXJoMi5pbm5lclRleHQgPSBlLm5hbWU7XG4gICAgICAgICAgY3VyLmFwcGVuZENoaWxkKGN1cmgyKTtcblxuICAgICAgICAgIGNvbnN0IGN1cnNlcnZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3Vyc2VydmVyLmlubmVyVGV4dCA9IGUuYWRkcmVzcztcbiAgICAgICAgICBjdXIuYXBwZW5kQ2hpbGQoY3Vyc2VydmVyKTtcblxuICAgICAgICAgIGNvbnN0IHBsYXllcmluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHBsYXllcmluZm8uaW5uZXJUZXh0ID0gXCJub3QgY29ubmVjdGVkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xuICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblxuICAgICAgICAgIGN1ci5hcHBlbmRDaGlsZChwbGF5ZXJpbmZvKTtcblxuICAgICAgICAgIGNvbnN0IHRlc3R3ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGUuYWRkcmVzcyk7XG4gICAgICAgICAgY29uc3QgdGltZXBpbmcgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgdGVzdHdlYnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0ZXN0d2Vic29ja2V0LnNlbmQoXCJBY2NlcHQ6IE1PVERcIik7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRlc3R3ZWJzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlLmRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGRhdCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRbXCJ0eXBlXCJdLnRvTG93ZXJDYXNlKCkgPT09IFwibW90ZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcmluZm8uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRbXCJkYXRhXCJdW1wib25saW5lXCJdICsgXCIvXCIgKyBkYXRbXCJkYXRhXCJdW1wibWF4XCJdO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmNvbG9yID0gXCJsaW1lXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuaW5uZXJUZXh0ICs9IERhdGUubm93KCkgLSB0aW1lcGluZyArIFwibXNcIjtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyaW5mby5hcHBlbmRDaGlsZChwaW5nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZXJ2ZXJzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikgIT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3VzdHVpID0gc2V0SW50ZXJ2YWwoY3VzdG9tVUksIDUwKTtcblxuLy9DdXN0b20gQ3Vyc29yXG5kb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdLnN0eWxlLmN1cnNvciA9XG4gICd1cmwoXCInICsgYXNzZXRzLmN1cnNvciArICdcIiksIGF1dG8nO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAndXJsKFwiJyArIGFzc2V0cy5jdXJzb3IgKyAnXCIpLCBhdXRvJztcblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgY2xlYXJJbnRlcnZhbChjdXN0dWkpO1xuICB1aS5kZXN0cm95KCk7XG4gIGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF0uc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpICE9IG51bGwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpLnJlbW92ZSgpO1xuICB9XG59XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7QUFFTyxJQUFJLGFBQWE7OztBQ0FqQixTQUFTLFlBQVksQ0FBQyxLQUFLO0FBQ2hDLFVBQVEsSUFBSSxJQUFJLGVBQWUsS0FBSztBQUFBOzs7QUNEL0IsU0FBUyxTQUFTLENBQUMsS0FBSztBQUU3QixTQUFPLGNBQWMsRUFBQyxLQUFLLFNBQUssb0JBQWlCLE1BQUssQ0FBQztBQUFBOzs7QUNKbEQsSUFBSSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDU2IsU0FBUyxJQUFJLENBQUMsUUFBUTtBQUMzQixTQUFPLG1CQUFvQixHQUFHO0FBQzVCLFFBQUksT0FBTyxXQUFXLEdBQUc7QUFFckIsV0FBSyxPQUFPLE9BQU8sYUFBYSxVQUFVO0FBRXhDLGVBQU8sT0FBTyxhQUFhLFdBQVc7QUFFdEMsZUFBTyxPQUFPLE9BQU87QUFBQSxNQUN2QjtBQUFBLElBQ0o7QUFBQTtBQUdGLFNBQU8sbUJBQW9CLEdBQUc7QUFFNUIsUUFBSSxPQUFPLFVBQVUsTUFBTTtBQUV6QixVQUFJLE9BQU8sT0FBTyxnQkFBZ0IsTUFBTTtBQUV0QyxlQUFPLE9BQU8sYUFBYSxXQUFXO0FBRXRDLGVBQU8sT0FBTyxPQUFPO0FBQUEsTUFDdkI7QUFB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
