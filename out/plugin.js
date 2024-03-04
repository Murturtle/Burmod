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
  var cursor = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAlCAYAAABReInxAAAAAXNSR0IArs4c6QAACFFJREFUWEetV1tvXNUZXfvcrzMTO05IK4WqCoKCCgjUqpXaClSkwm/oP+lLeeGlD+1D21QtUktVqRemgChCIEgiAw1GQJqQgGMSQxI7dmKP535u+5x9qb49TkUIShTKkY5mPHO8117rW9/69rDHHrxHSynheh46ezrozHXgee5Qa/0Kr5tnvIVi6fDhxQxf0cUIUCsFy7YRpQnSVgrXdftSiX/mdfP751558xQA/RXhgf34gbu1FBJe4GPfHQvYv38Bge+PGiGOlGX5UtnU5+qaDTzpjFO/N/nls0sVY19+AwawLCvsmevgoYe/jfsfuBeh7/Pt3uDy6urFjStbO5OaizOSqeORXZ/847+Ob/4/bI2kk0mGAwf24SePP4JHHv0+SaqXl1fx/okz7PLlq8iL4g0N8Vco69XukeNrXwHgFAcO7Mfjjz+KHz3yPdi2jfPnL+D06RVsbe00eV4cr4V8UWv1JpfNOlQke5wXCwuLTbcLeTsbMJJmWWFq94MffhcPf+d+cimGgzFGozE4b8Q0Lz7t9ydnB8PRJ9Ms35BCXBax9x9gstHtLpW3BfjYg3frPK+wd+8cHnr4ftzzrUPwAxe+5yNJYsRRoLa2+9XKyqq8cHGj7g/GG7xulhyL/WXvXXd8cPhw97ZaZtc0HPPze/DAg/fi0F3fMGDtTgsLC/NotVNsbFzVK2dX2YWLa7K3Pdgpq2bJ9qynle2eiXQwiu+8sz5zZl4uLv5cAuymLWQAeVWj02njnnsP4eDBr8FxHLQ7bcM6bcUgUw0GI/OaZUWW5fnqZDR9azCaflpXzYbnWuteu3VpyO3tbrd705oawJo3aLUSfPPQncY8BNhqpZibayNKQjBYxkgUDk0tml6/P/r44wvbm5tbV4q8OG8B77VDZ+kPLy2u3KqeBrCpGyRpjIMHv459+/fCcVyzgXY7RRAFiKPQKJCmCZTU6vLmljx18kO5traZZXl2lgHHAj94FVNxKl9YaO677z795JNPkrQ3yGsAhRCIotCw2zPfgWO7aLcTpGmMIPCRthJTzz2djlnj6tYOPlo+h/X1qyjy4gKAt7XDjmUFPxU4/lizYLQ2HI4XFxfF5xmbxidAP/AxN081S+HYNtIkngH6HuI0NvK22y0ja5ZluHJlG+PhVOdFNap4vZaX5ceTaXaOAWuWb5+sNrOPuks3towBnE0LF2mrhTAMYdkWkiREGsfwPQ9xEhnX0gaoRxshUBYcTVMToJxMprzfGxbDyXQbWp/UzHmh4TjaPXJkDA1mWO7mrwFUUsFxHcRpAj8IYFkWkjhCEofwfcf0I7GjOnueB6UU6roBhX5ZceTTXA9GY4wmea6E+sDS1j8aO3/d03Ic2xG/jFbW7XZrg/tZQBpPfhDCYjAgrYQAPSRJhFZrxpCUkFKB8xp104AMR++riqMoS8Hr5gKv+LHxZLokoAsX9kaK+uzvXv738DOAEo7nIk52AS0LKYGkkQGM4widTsu0ius64E1jepJzTq4FY5ZRRSspi7Ka7PSH6zs7o02hZGnZ9hu+bT//pxdfW/9CwIAYGtNESJLA1CyJYlPDVjuhSQJe1xiPp6g4hwVmZKZ0YhZ0nhViq7cj+jsjUUtZa8aebyzxm789d/TMT594It2VVMJxXSQkKZnGshFFPsLAMyEQRyRpiiSNzAaU0uA1h5ASFmNwbMfc1HRVVRn202kOXjcQSr1eCf5MPinOhW4w/znAFGEUglkWHMeGY1uwmGU+ozaJogBB6JnNETC1D11CKlBrkYmU1iDXCzG7y5Kv9IejE0VRDTzXS24AjKIIzGZgjEEpQGtt2MZxiCgIEAQewpiSp4UoDA3bsqpQFKVxLilCsjuOpbXSajAYTa9u9YZFwWvP8+zrXJokCaI4NgwVZjulBcPAR0wSh7Obntu3MI8ojqA16EQwk7Cp4TueeZ7MpbTSvd5Qb13tqZKX2nW8a22xW8MkQWgAZ71K8iitzAJJFCAMAoRhYGo5Pz+POA6MAsRumhWGoWUx2IysBEilMBxNsdMfmrYh9tdLagAjw5AuWoxAIwIhQMMwNCk0t3fOhPoMsEKel6Yf6chJ9WwaYb7LihLjSYa6FqbmX1hD0/m7gPRPxNAYxvcMQwr6Do2u0IfSIGOgIMC6hpISdV2bQFBK6aqWvCirUgghbNtmNwLGEcCuB6Q8JbP4nmuShvqONkB/kwIExCtuJKWazxwr6L0SSm00Uq1qpSfMhn9LhsTUti1jAuo1RmprQMvZYNfQJltFI0zkkSLmU9MeSmiLve0Ewcue665L3bRuWsPdFWcjjbFdI0jwqtZ5NlVVxbVWUptoI1U0yHB0MLe0xbSWOlcaz7ph9Nuf/eJXHx5+6qn4loAEQ04l/9PmpVSyrjnPs2zEeVVKoQRhWGRPM4VM2lG40mCaao0XYFl/Xjy1cvH6LDXRlsI0PgUxDbLdWv6vJkJopWQupLwkGvmOaJqLEmziaG3Bgie1tijLXTChGVPQltBar2g/fv/ou+/2vxgwiQ0Q1YBe6aap0FQcTU13M1RKvqO19bSUzWnfxYQWKh1hck4qzWwr1nZZmvMM81kl0oP5tePGjVmaRDNm9Pisbrqua83L0mp4RYE81lIdg7J+LfXgvcXl3u0dhM0AVsocA2lS0PwzbUEGYIySQ0pJPyV4T9R1XzRiQyuctmz7taburX4pwGvy0RC9VjciaNPUsK1aaX1SaXVUCvGOrPUlMC9jntc/cuJEQcPidn6wGkmvHeVMlNGI2L1M/zl2pbR+Swr1d+5Yr7x14uyVWx12b/b9dYCff5AYuo5VC+jjUqoXhWBHtprl88vLMAeiL3P9F2TeQSxLTVWHAAAAAElFTkSuQmCC";

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWwvY2xpZW50TmFtZS50cyIsICIuLi9zcmMvdXRpbC9jb25zb2xlTG9nZ2VyLnRzIiwgIi4uL3NyYy91dGlsL2NoYXRMb2dnZXIudHMiLCAiLi4vc3JjL2Fzc2V0cy50cyIsICIuLi9zcmMvY2hlYXRzL2ZsaWdodC50cyIsICIuLi9zcmMvY2hlYXRzL3N0ZXAudHMiLCAiLi4vc3JjL2NoZWF0cy9hdXRvZmlzaC50cyIsICIuLi9zcmMvdXRpbC9hY3R1YWxNb2R1bGVzLnRzIiwgIi4uL3NyYy9ndWkudHMiLCAiLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGdsb2JhbCB2YXJpYWJsZSBmb3IgdGhlIGNsaWVudCdzIG5hbWVcblxuZXhwb3J0IHZhciBjbGllbnROYW1lID0gXCJidXJtb2RcIjsiLCAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9Db25zb2xlKG1zZykge1xuICBjb25zb2xlLmxvZyhgWyR7Y2xpZW50TmFtZX1dICR7bXNnfWApO1xufSIsICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vY2xpZW50TmFtZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dUb0NoYXQobXNnKSB7XG4gIC8vQHRzLWlnbm9yZVxuICBNb2RBUEkuZGlzcGxheVRvQ2hhdCh7bXNnOiBgXHUwMEE3NVske2NsaWVudE5hbWV9XVx1MDBBN3IgJHttc2d9YH0pO1xufSIsICJleHBvcnQgdmFyIGN1cnNvciA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCd0FBQUFsQ0FZQUFBQlJlSW54QUFBQUFYTlNSMElBcnM0YzZRQUFDRkZKUkVGVVdFZXRWMXR2WE5VWlhmdmNyek1UTzA1SUs0V3FDb0tDQ2dqVXFwWGFDbFNrd20vb1ArbExlZUdsRCsxRDIxUXRVa3RWcVJlbWdDaENJRWdpQXcxR1FKcVFnR01TUXhJN2RtS1A1MzV1KzV4OXFiNDlUa1VJU2hUS2tZNW1QSE84MTE3clc5LzY5ckRISHJ4SFN5bmhlaDQ2ZXpyb3pIWGdlZTVRYS8wS3I1dG52SVZpNmZEaHhReGYwY1VJVUNzRnk3WVJwUW5TVmdyWGRmdFNpWC9tZGZQNzUxNTU4eFFBL1JYaGdmMzRnYnUxRkJKZTRHUGZIUXZZdjM4QmdlK1BHaUdPbEdYNVV0blU1K3FhRFR6cGpGTy9OL25sczBzVlkxOStBd2F3TEN2c21ldmdvWWUvamZzZnVCZWg3L1B0M3VEeTZ1ckZqU3RiTzVPYWl6T1NxZU9SWFovODQ3K09iLzQvYkkya2swbUdBd2YyNFNlUFA0SkhIdjArU2FxWGwxZngvb2t6N1BMbHE4aUw0ZzBOOFZjbzY5WHVrZU5yWHdIZ0ZBY083TWZqanorS0h6M3lQZGkyamZQbkwrRDA2UlZzYmUwMGVWNGNyNFY4VVd2MUpwZk5PbFFrZTV3WEN3dUxUYmNMZVRzYk1KSm1XV0ZxOTRNZmZoY1BmK2QrY2ltR2d6RkdvekU0YjhRMEx6N3Q5eWRuQjhQUko5TXMzNUJDWEJheDl4OWdzdEh0THBXM0JmallnM2ZyUEsrd2QrOGNIbnI0ZnR6enJVUHdBeGUrNXlOSllzUlJvTGEyKzlYS3lxcThjSEdqN2cvR0c3eHVsaHlML1dYdlhYZDhjUGh3OTdaYVp0YzBIUFB6ZS9EQWcvZmkwRjNmTUdEdFRnc0xDL05vdFZOc2JGelZLMmRYMllXTGE3SzNQZGdwcTJiSjlxeW5sZTJlaVhRd2l1KzhzejV6Wmw0dUx2NWNBdXltTFdRQWVWV2owMm5qbm5zUDRlREJyOEZ4SExRN2JjTTZiY1VnVXcwR0kvT2FaVVdXNWZucVpEUjlhekNhZmxwWHpZYm5XdXRldTNWcHlPM3RicmQ3MDVvYXdKbzNhTFVTZlBQUW5jWThCTmhxcFppYmF5TktRakJZeGtnVURrMHRtbDYvUC9yNDR3dmJtNXRiVjRxOE9HOEI3N1ZEWitrUEx5MnUzS3FlQnJDcEd5UnBqSU1IdjQ1OSsvZkNjVnl6Z1hZN1JSQUZpS1BRS0pDbUNaVFU2dkxtbGp4MThrTzV0cmFaWlhsMmxnSEhBajk0RlZOeEtsOVlhTzY3N3o3OTVKTlBrclEzeUdzQWhSQ0lvdEN3MnpQZmdXTzdhTGNUcEdtTUlQQ1J0aEpUenoyZGpsbmo2dFlPUGxvK2gvWDFxeWp5NGdLQXQ3WERqbVVGUHhVNC9saXpZTFEySEk0WEZ4ZkY1eG1ieGlkQVAvQXhOMDgxUytIWU50SWtuZ0g2SHVJME52SzIyeTBqYTVabHVISmxHK1BoVk9kRk5hcDR2WmFYNWNlVGFYYU9BV3VXYjUrc05yT1B1a3MzdG93Qm5FMExGMm1yaFRBTVlka1draVJFR3Nmd1BROXhFaG5YMGdhb1J4c2hVQlljVFZNVG9KeE1wcnpmR3hiRHlYUWJXcC9VekhtaDRUamFQWEprREExbVdPN21yd0ZVVXNGeEhjUnBBajhJWUZrV2tqaENFb2Z3ZmNmMEk3R2pPbnVlQjZVVTZyb0JoWDVaY2VUVFhBOUdZNHdtZWE2RStzRFMxajhhTzMvZDAzSWMyeEcvakZiVzdYWnJnL3RaUUJwUGZoRENZakFncllRQVBTUkpoRlpyeHBDVWtGS0I4eHAxMDRBTVIrK3JpcU1vUzhIcjVnS3YrTEh4Wkxva29Bc1g5a2FLK3V6dlh2NzM4RE9BRW83bklrNTJBUzBMS1lHa2tRR000d2lkVHN1MGl1czY0RTFqZXBKelRxNEZZNVpSUlNzcGk3S2E3UFNINnpzN28wMmhaR25aOWh1K2JULy9weGRmVy85Q3dJQVlHdE5FU0pMQTFDeUpZbFBEVmp1aFNRSmUxeGlQcDZnNGh3Vm1aS1owWWhaMG5oVmlxN2NqK2pzalVVdFphOGFlYnl6eG03ODlkL1RNVDU5NEl0MlZWTUp4WFNRa0tabkdzaEZGUHNMQU15RVFSeVJwaWlTTnpBYVUwdUExaDVBU0ZtTndiTWZjMUhSVlZSbjIwMmtPWGpjUVNyMWVDZjVNUGluT2hXNHcvem5BRkdFVWdsa1dITWVHWTF1d21HVStvemFKb2dCQjZKbk5FVEMxRDExQ0tsQnJrWW1VMWlEWEN6Rzd5NUt2OUllakUwVlJEVHpYUzI0QWpLSUl6R1pnakVFcFFHdHQyTVp4aUNnSUVBUWV3cGlTcDRVb0RBM2JzcXBRRktWeExpbENzanVPcGJYU2FqQVlUYTl1OVlaRndXdlA4K3pyWEpva0NhSTROZ3dWWmp1bEJjUEFSMHdTaDdPYm50dTNNSThvanFBMTZFUXdrN0NwNFR1ZWVaN01wYlRTdmQ1UWIxM3RxWktYMm5XOGEyMnhXOE1rUVdnQVo3MUs4aWl0ekFKSkZDQU1Bb1JoWUdvNVB6K1BPQTZNQXNSdW1oV0dvV1V4Mkl5c0JFaWxNQnhOc2RNZm1yWWg5dGRMYWdBanc1QXVXb3hBSXdJaFFNTXdOQ2swdDNmT2hQb01zRUtlbDZZZjZjaEo5V3dhWWI3TGloTGpTWWE2RnFibVgxaEQwL203Z1BSUHhOQVl4dmNNUXdyNkRvMnUwSWZTSUdPZ0lNQzZocElTZFYyYlFGQks2YXFXdkNpclVnZ2hiTnRtTndMR0VjQ3VCNlE4SmJQNG5tdVNodnFPTmtCL2t3SUV4Q3R1SktXYXp4d3I2TDBTU20wMFVxMXFwU2ZNaG45TGhzVFV0aTFqQXVvMVJtcHJRTXZaWU5mUUpsdEZJMHpra1NMbVU5TWVTbWlMdmUwRXdjdWU2NjVMM2JSdVdzUGRGV2NqamJGZEkwandxdFo1TmxWVnhiVldVcHRvSTFVMHlIQjBNTGUweGJTV09sY2F6N3BoOU51Zi9lSlhIeDUrNnFuNGxvQUVRMDRsLzlQbXBWU3lyam5QczJ6RWVWVktvUVJoV0dSUE00Vk0ybEc0MG1DYWFvMFhZRmwvWGp5MWN2SDZMRFhSbHNJMFBnVXhEYkxkV3Y2dkprSm9wV1F1cEx3a0d2bU9hSnFMRW16aWFHM0JnaWUxdGlqTFhUQ2hHVlBRbHRCYXIyZy9mdi9vdSsvMnZ4Z3dpUTBRMVlCZTZhYXAwRlFjVFUxM00xUkt2cU8xOWJTVXpXbmZ4WVFXS2gxaGNrNHF6V3dyMW5aWm12TU04MWtsMG9QNXRlUEdqVm1hUkRObTlQaXNicnF1YTgzTDBtcDRSWUU4MWxJZGc3SitMZlhndmNYbDN1MGRoTTBBVnNvY0EybFMwUHd6YlVFR1lJeVNRMHBKUHlWNFQ5UjFYelJpUXl1Y3Rtejd0YWJ1clg0cHdHdnkwUkM5VmpjaWFOUFVzSzFhYVgxU2FYVlVDdkdPclBVbE1DOWpudGMvY3VKRVFjUGlkbjZ3R2ttdkhlVk1sTkdJMkwxTS96bDJwYlIrU3dyMWQrNVlyN3gxNHV5Vld4MTJiL2I5ZFlDZmY1QVl1bzVWQytqalVxb1hoV0JIdHBybDg4dkxNQWVpTDNQOUYyVGVRU3hMVFZXSEFBQUFBRWxGVGtTdVFtQ0NcIjsiLCAiZXhwb3J0IHZhciBzZXR0aW5ncyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIk1vZGVcIixcbiAgICAgIHR5cGU6IFwiTGlzdFwiLFxuICAgICAgbW9kZXM6IFtcIkFiaWxpdGllc1wiLCBcIlBhY2tldFwiXSxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgfSxcbiAgXTtcbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuICAgIHBhcmVudC5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwYXJlbnQuZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgaWYgKCFNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZykge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZyA9IHRydWU7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIFxuICAgIHBhcmVudC5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzICE9IG51bGwpIHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZyA9IHRydWU7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIFxuICAgIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGlmIChNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcyAhPSBudWxsKSB7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICIsICJleHBvcnQgZnVuY3Rpb24gaW5pdChwYXJlbnQpIHtcbiAgICBwYXJlbnQuc2V0dGluZ3MgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiSGVpZ2h0XCIsXG4gICAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICAgIG1pbjogMSxcbiAgICAgICAgbWF4OiA2LFxuICAgICAgICBzdGVwOiAwLjUsXG4gICAgICAgIGN1cnJlbnQ6IDEuNVxuICAgICAgfVxuICAgIF1cbiAgXG4gICAgcGFyZW50Lm9uVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIGlmIChNb2RBUEkucGxheWVyLnN0ZXBIZWlnaHQgIT0gcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQ7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcGFyZW50Lm9uRW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGlmIChNb2RBUEkucGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50O1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHBhcmVudC5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaWYgKE1vZEFQSS5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gMC42MDAwMDAwMjM4NDE4NTc5O1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICB9XG4gIFxuICAiLCAiZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KSB7XG4gICAgdmFyIGNhdGNoZmlzaCA9IGZhbHNlO1xuICAgIHZhciBjYXRjaGFnYWluID0gZmFsc2U7XG4gICAgcGFyZW50Lm9uVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWYgKGNhdGNoYWdhaW4gJiYgTW9kQVBJLnBsYXllci5maXNoRW50aXR5ID09IG51bGwpIHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBNb2RBUEkucmlnaHRDbGlja01vdXNlKCk7XG4gICAgICAgICAgY2F0Y2hhZ2FpbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5maXNoRW50aXR5ICE9IG51bGwpIHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5maXNoRW50aXR5LnRpY2tzRXhpc3RlZCA8IDEwMCAmJiBjYXRjaGZpc2ggPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNhdGNoZmlzaCA9IHRydWU7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBpZiAoTW9kQVBJLnBsYXllci5maXNoRW50aXR5LmlzSW5XYXRlcigpICYmIE1vZEFQSS5wbGF5ZXIuZmlzaEVudGl0eS50aWNrc0V4aXN0ZWQgPiAxMDAgJiYgKE1hdGguY2VpbChNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgLSBNb2RBUEkucGxheWVyLmZpc2hFbnRpdHkueSkgPj0gLjMpIHtcbiAgICAgICAgICAgIGlmIChjYXRjaGZpc2gpIHtcbiAgICAgICAgICAgICAgY2F0Y2hmaXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBNb2RBUEkucmlnaHRDbGlja01vdXNlKCk7XG4gICAgICAgICAgICAgIGNhdGNoYWdhaW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHBhcmVudC5vbkVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2F0Y2hmaXNoID0gdHJ1ZTtcbiAgICB9XG4gIFxuICB9XG4gIFxuICAiLCAiaW1wb3J0ICogYXMgZmxpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvZmxpZ2h0XCI7XG4vL2ltcG9ydCAqIGFzIGZ1bGxicmlnaHRNT0QgZnJvbSBcIi4uL2NoZWF0cy9hdXRvZmlzaFwiO1xuaW1wb3J0ICogYXMgc3RlcE1PRCBmcm9tIFwiLi4vY2hlYXRzL3N0ZXBcIjtcbmltcG9ydCAqIGFzIGF1dG9maXNoTU9EIGZyb20gXCIuLi9jaGVhdHMvYXV0b2Zpc2hcIjtcbmltcG9ydCAqIGFzIHVpIGZyb20gXCIuLi9ndWlcIjtcblxuZnVuY3Rpb24gdGVtcGxhdGUobW9kKSB7XG4gIC8vIG1vZHVsZSBmdW5jdGlvbnNcblxuICB0aGlzLmVuYWJsZWRET05PVFVTRSA9IGZhbHNlO1xuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5vbkVuYWJsZSA9IGZ1bmN0aW9uKCkgeyB9O1xuICB0aGlzLm9uRGlzYWJsZSA9IGZ1bmN0aW9uKCkgeyB9O1xuICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmVuYWJsZWRET05PVFVTRSA9IHRydWU7IHRoaXMub25FbmFibGUoKTsgdWkucmVmcmVzaE1vZHVsZXMoKSB9O1xuICB0aGlzLmRpc2FibGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSBmYWxzZTsgdGhpcy5vbkRpc2FibGUoKTsgdWkucmVmcmVzaE1vZHVsZXMoKSB9O1xuICB0aGlzLm9uS2V5ID0gZnVuY3Rpb24oZSl7fTtcbiAgdGhpcy5vbk1DS2V5ID0gZnVuY3Rpb24oZSl7fTtcbiAgdGhpcy5nZXRFbmFibGVkID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmVuYWJsZWRET05PVFVTRTsgfTtcbiAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSAhdGhpcy5lbmFibGVkRE9OT1RVU0U7IGlmICh0aGlzLmVuYWJsZWRET05PVFVTRSkgeyB0aGlzLm9uRW5hYmxlKCkgfSBlbHNlIHsgdGhpcy5vbkRpc2FibGUoKTsgfSB9O1xuICAvL21jIGZ1bmN0aW9uc1xuICB0aGlzLm9uVXBkYXRlID0gZnVuY3Rpb24oKSB7IH07XG5cbiAgdGhpcy5hbGVydCA9IGZ1bmN0aW9uKCkgeyBhbGVydCgpIH07XG5cbiAgdGhpcy5zZXR0aW5ncyA9IFtdXG5cbiAgbW9kLmluaXQodGhpcyk7XG59XG5cbmV4cG9ydCB2YXIgY2F0ZWdvcmllcyA9IHtcbiAgbW92ZW1lbnQ6IFwiTW92ZW1lbnRcIixcbiAgcGxheWVyOiBcIlBsYXllclwiLFxuICByZW5kZXI6IFwiUmVuZGVyXCIsXG4gIGZ1bjogXCJGdW5cIlxufVxuXG5leHBvcnQgdmFyIG1vZHVsZXMgPSB7XG4gIGZsaWdodDoge1xuICAgIG5hbWU6IFwiRmxpZ2h0XCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShmbGlnaHRNT0QpLFxuICAgIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWxsb3dzIHlvdSB0byBmbHlcIixcbiAgfSxcbiAgc3RlcDoge1xuICAgIG5hbWU6IFwiU3RlcFwiLFxuICAgIGZ1bmN0aW9uOiBuZXcgdGVtcGxhdGUoc3RlcE1PRCksXG4gICAgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGxvd3MgeW91IHRvIHN0ZXBcIixcbiAgfSxcbiAgYXV0b2Zpc2g6IHtcbiAgICBuYW1lOiBcIkF1dG9GaXNoXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShhdXRvZmlzaE1PRCksXG4gICAgY2F0ZWdvcnk6IFwiUGxheWVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXV0b21hdGljYWxseSBjYXN0cyBhbmQgcmVlbHMgcm9kXCIsXG4gIH1cbn0iLCAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL3V0aWwvY2xpZW50TmFtZVwiO1xuaW1wb3J0IHsgbW9kdWxlcywgY2F0ZWdvcmllcyB9IGZyb20gXCIuL3V0aWwvYWN0dWFsTW9kdWxlc1wiO1xuXG5cbi8vIGRlbGV0ZSB0aGUgdWlcbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95KCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKSAhPSBudWxsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKS5yZW1vdmUoKTtcbiAgfVxufVxuXG52YXIgY29udGFpbmVyO1xuXG5cbi8vIGNoZWNrIGlmIG9wZW5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW4oKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuXG4vLyBvcGVuIGEgc2V0dGluZyBtZW51XG5leHBvcnQgZnVuY3Rpb24gc2V0dGluZyhtb2R1bGUpIHtcbiAgLyp2YXIgbHN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTW9kZVwiLFxuICAgICAgdHlwZTogXCJMaXN0XCIsXG4gICAgICBtb2RlczogW1wiQWJpbGl0aWVzXCIsIFwiUGFja2V0XCJdLFxuICAgICAgY3VycmVudDogMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTcGVlZFwiLFxuICAgICAgdHlwZTogXCJTbGlkZXJcIixcbiAgICAgIG1pbjogMSxcbiAgICAgIG1heDogNCxcbiAgICAgIGN1cnJlbnQ6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVGVzdFwiLFxuICAgICAgdHlwZTogXCJCb29sZWFuXCIsXG4gICAgICB0b2dnbGVkOiB0cnVlXG4gICAgfSxcbiAgXSovXG4gIHZhciBsc3QgPSBtb2R1bGUuZnVuY3Rpb24uc2V0dGluZ3M7XG4gIGNvbnNvbGUubG9nKGxzdCk7XG4gIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcy5jbGFzc05hbWUgPSBcInNldHRpbmdcIjtcbiAgcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgcy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgcy5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gIHMuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gIHMuc3R5bGUucGFkZGluZyA9IFwiMTVweFwiO1xuICBzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICBzLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gIHMuc3R5bGUuYW5pbWF0aW9uID0gXCJyZ2IgNHMgbGluZWFyIGluZmluaXRlXCI7XG4gIHMuc3R5bGUud2lkdGggPSBcIjE1JVwiO1xuICBzLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XG4gIHMuc3R5bGUudG9wID0gXCIxMDBweFwiXG4gIHMuc3R5bGUubGVmdCA9IFwiMTAwcHhcIlxuXG4gIHMuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XG4gIHMuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuXG4gIHMuc3R5bGUucmVzaXplID0gXCJib3RoXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBtb2R1bGUubmFtZTtcbiAgdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjIycHhcIjtcbiAgcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgdmFyIGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UuaW5uZXJUZXh0ID0gXCJYXCI7XG4gIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gXCIyOHB4XCI7XG4gIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjbG9zZS5zdHlsZS5yaWdodCA9IFwiMTVweFwiO1xuICBjbG9zZS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgY2xvc2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBzLnJlbW92ZSgpO1xuICB9O1xuICBzLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7XG5cbiAgZm9yIChsZXQgaSBpbiBsc3QpIHtcbiAgICBpZiAobHN0Lmhhc093blByb3BlcnR5KGkpKSB7XG5cbiAgICAgIHZhciBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgIGJnLnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gICAgICBiZy5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgIGJnLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgICAgcy5hcHBlbmRDaGlsZChiZyk7XG4gICAgICBpZiAobHN0W2ldLnR5cGUgPT0gXCJMaXN0XCIpIHtcbiAgICAgICAgdmFyIHNlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWxEZXNjLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgICAgIHNlbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChzZWxEZXNjKTtcbiAgICAgICAgdmFyIHNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbC5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxzdFtpXS5jdXJyZW50ID0gcGFyc2VJbnQoc2VsLnZhbHVlKTtcbiAgICAgICAgICBzZWxEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqIGluIGxzdFtpXS5tb2Rlcykge1xuICAgICAgICAgIGlmIChsc3RbaV0ubW9kZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0LmlubmVyVGV4dCA9IGxzdFtpXS5tb2Rlc1tqXTtcbiAgICAgICAgICAgIG9wdC52YWx1ZSA9IGogKyBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiZy5hcHBlbmRDaGlsZChzZWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxzdFtpXS50eXBlID09IFwiU2xpZGVyXCIpIHtcbiAgICAgICAgdmFyIHNsaWRlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNsaWRlRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBzbGlkZURlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChzbGlkZURlc2MpO1xuICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHNsaWRlLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgICAgIHNsaWRlLnN0ZXAgPSBsc3RbaV0uc3RlcDtcbiAgICAgICAgc2xpZGUubWluID0gbHN0W2ldLm1pbjtcbiAgICAgICAgc2xpZGUubWF4ID0gbHN0W2ldLm1heDtcbiAgICAgICAgc2xpZGUudmFsdWUgPSBsc3RbaV0uY3VycmVudDtcbiAgICAgICAgc2xpZGUub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0uY3VycmVudCA9IHBhcnNlRmxvYXQoc2xpZGUudmFsdWUpO1xuICAgICAgICAgIHNsaWRlRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS5jdXJyZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgfSBlbHNlIGlmIChsc3RbaV0udHlwZSA9PSBcIkJvb2xlYW5cIikge1xuICAgICAgICB2YXIgYm9vbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib29sRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBib29sRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS50b2dnbGVkfWA7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGJvb2xEZXNjKTtcbiAgICAgICAgdmFyIGJvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGJvb2wudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgYm9vbC5jaGVja2VkID0gbHN0W2ldLnRvZ2dsZWQ7XG4gICAgICAgIGJvb2wub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0udG9nZ2xlZCA9IGJvb2wuY2hlY2tlZDtcbiAgICAgICAgICBib29sRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS50b2dnbGVkfWA7XG4gICAgICAgIH1cbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoYm9vbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy9jcmVhdGUgdGhlIGd1aVxuZXhwb3J0IGZ1bmN0aW9uIG9wZW4oKSB7XG4gIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICB2YXIgY24gPSBjbGllbnROYW1lO1xuXG4gIGNvbnN0IHVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB1aS5pZCA9IFwidWlcIjtcbiAgdWkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIHVpLnN0eWxlLndpZHRoID0gXCI2NiVcIjtcbiAgdWkuc3R5bGUuaGVpZ2h0ID0gXCI2NiVcIjtcbiAgdWkuc3R5bGUudG9wID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKiAwLjE2NSArIFwicHhcIjtcbiAgdWkuc3R5bGUubGVmdCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKiAwLjE2NSArIFwicHhcIjtcbiAgdWkuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIHVpLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcbiAgdWkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjc1KVwiO1xuICB1aS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgdWkuc3R5bGUucGFkZGluZyA9IFwiMTVweFwiO1xuICB1aS5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggNDBweCByZ2JhKDAsIDE5NSwgMjU1LDAuNSlcIjtcbiAgdWkuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG4gIHVpLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gIHVpLnN0eWxlLmFuaW1hdGlvbiA9IFwicmdiIDRzIGxpbmVhciBpbmZpbml0ZVwiO1xuXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBjbjtcbiAgdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjI0cHhcIjtcbiAgdGl0bGUuc3R5bGUubWFyZ2luID0gXCI1cHhcIjtcbiAgdWkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIHZhciBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNlYXJjaC5zdHlsZS53aWR0aCA9IFwiMzMlXCI7XG4gIHNlYXJjaC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaC5zdHlsZS5ib3JkZXIgPSBcInNvbGlkIDJweCByZ2JhKDIwMCwyMDAsMjAwLDAuNSlcIjtcbiAgc2VhcmNoLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICBzZWFyY2guc3R5bGUuY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuICBzZWFyY2guc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gIHNlYXJjaC5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgc2VhcmNoLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjIwcHhcIjtcbiAgc2VhcmNoLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gIHNlYXJjaC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDUwLDUwLDUwLC4yNClcIjtcbiAgc2VhcmNoLnBsYWNlaG9sZGVyID0gXCJcdUQ4M0RcdUREMEVcdUZFMEUgU2VhcmNoXCJcbiAgc2VhcmNoLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcblxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3NlLmlubmVyVGV4dCA9IFwiWFwiO1xuICBjbG9zZS5zdHlsZS5mb250U2l6ZSA9IFwiMjhweFwiO1xuICBjbG9zZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgY2xvc2Uuc3R5bGUucmlnaHQgPSBcIjE1cHhcIjtcbiAgY2xvc2Uuc3R5bGUudG9wID0gXCIxMHB4XCI7XG4gIGNsb3NlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICBjbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgZGVzdHJveSgpO1xuICB9O1xuICB1aS5hcHBlbmRDaGlsZChjbG9zZSk7XG5cblxuXG4gIHZhciBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXIuc3R5bGUub3ZlcmZsb3dYID0gXCJzY3JvbGxcIjtcbiAgdWkuYXBwZW5kQ2hpbGQoYmFyKTtcblxuICBmb3IgKGxldCBpIGluIGNhdGVnb3JpZXMpIHtcbiAgICBpZiAoY2F0ZWdvcmllcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2F0ZWdvcnkuaW5uZXJUZXh0ID0gY2F0ZWdvcmllc1tpXTtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUubWFyZ2luID0gXCI1cHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTAwLDEwMCwxMDAsMC41KVwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICAgIGNhdGVnb3J5Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgfTtcblxuICAgICAgYmFyLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICB9XG4gIH1cblxuICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2VudGVyXCIpO1xuICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICB1aS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5cbiAgcmVmcmVzaE1vZHVsZXMoKTtcbn1cblxuXG4vLyBSZWxvYWQgbW9kdWxlIGxpc3RcbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoTW9kdWxlcygpIHtcbiAgaWYgKGlzT3BlbigpKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSBpbiBtb2R1bGVzKSB7XG4gICAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB2YXIgbW9kbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBtb2RsdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtb2RsdGl0bGUuaW5uZXJUZXh0ID0gYCR7bW9kdWxlc1tpXS5uYW1lfWA7XG4gICAgICAgIG1vZGx0aXRsZS5zdHlsZS5mb250U2l6ZSA9IFwiMjJweFwiO1xuICAgICAgICBtb2RsdGl0bGUuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICBtb2RsLmFwcGVuZENoaWxkKG1vZGx0aXRsZSk7XG5cbiAgICAgICAgbW9kbC5zdHlsZS50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblxuICAgICAgICBtb2RsLnN0eWxlLndpZHRoID0gXCIyNSVcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5oZWlnaHQgPSBcIjI1JVwiO1xuICAgICAgICBtb2RsLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgICAgICBtb2RsLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICAgICAgICBtb2RsLnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICBtb2RsLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgICAgIG1vZGwuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMDAsMTAwLDEwMCwwLjUpXCI7XG4gICAgICAgIGlmIChtb2R1bGVzW2ldLmZ1bmN0aW9uLmdldEVuYWJsZWQoKSkge1xuICAgICAgICAgIG1vZGwuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDE1cHggcmdiYSgwLCAyNTUsIDAsMSlcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZGwub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBtb2R1bGVzW2ldLmZ1bmN0aW9uLnRvZ2dsZSgpO1xuICAgICAgICAgIHJlZnJlc2hNb2R1bGVzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kbC5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIG5ldyBzZXR0aW5nKG1vZHVsZXNbaV0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1vZHVsZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi91dGlsL2NsaWVudE5hbWVcIjtcbmltcG9ydCB7IGxvZ1RvQ29uc29sZSB9IGZyb20gXCIuL3V0aWwvY29uc29sZUxvZ2dlclwiO1xuaW1wb3J0IHsgbG9nVG9DaGF0IH0gZnJvbSBcIi4vdXRpbC9jaGF0TG9nZ2VyXCI7XG5pbXBvcnQgKiBhcyBhc3NldHMgZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi9ndWlcIjtcblxubG9nVG9Db25zb2xlKFwiSW5pdC4uLlwiKTtcbmxvZ1RvQ2hhdChcIkluaXQuLi5cIik7XG5cbmxvZ1RvQ2hhdChcIkxvYWRpbmcgbW9kdWxlcy4uLlwiKTtcblxuaW1wb3J0IHsgbW9kdWxlcyB9IGZyb20gXCIuL3V0aWwvYWN0dWFsTW9kdWxlc1wiO1xuXG5Nb2RBUEkucmVxdWlyZShcInBsYXllclwiKTtcblxuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICBpZiAoXG4gICAgZS5sb2NhdGlvbiA9PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQgJiZcbiAgICBlLmtleSA9PSBcIlNoaWZ0XCIgJiZcbiAgICAhdWkuaXNPcGVuKClcbiAgKSB7XG4gICAgdWkub3BlbigpO1xuICB9XG4gIGZvciAobGV0IGtleSBpbiBtb2R1bGVzKSB7XG4gICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbW9kdWxlc1trZXldLmZ1bmN0aW9uLm9uS2V5KGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwia2V5XCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5ID09IDU0KSB7XG4gICAgdWkuZGVzdHJveTtcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vbk1DS2V5KGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBrZXkgaW4gbW9kdWxlcykge1xuICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG1vZHVsZXNba2V5XS5mdW5jdGlvbi5vblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xufWApO1xuXG5zdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5iYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMDAsMTAwLDAuNSk7XG5maWx0ZXI6IGJsdXIoNHB4KTtcbn1gKTtcblxuc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzIHJnYiB7XG4gIDAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAwLDAuNzUpOyB9XG4gIDE2JSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMjU1LCAwLDAuNzUpOyB9XG4gIDMzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDI1NSwgMCwwLjc1KTsgfVxuICA1MCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDI1NSwwLjc1KTsgfVxuICA2NiUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAyNTUsMC43NSk7IH1cbiAgODMlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAyNTUsMC43NSk7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxufWApO1xuXG5mdW5jdGlvbiBjdXN0b21VSSgpIHtcbiAgLy9AdHMtaWdub3JlXG4gIGlmIChNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbiAhPSBudWxsKSB7XG4gICAgaWYgKFxuICAgICAgTW9kQVBJLmN1cnJlbnRTY3JlZW4oKS5zdGFydHNXaXRoKFwibmV0Lm1pbmVjcmFmdC5jbGllbnQuZ3VpLkd1aU1haW5NZW51XCIpXG4gICAgKSB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBzaW5nbGVQbGF5ZXIgPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMF07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBtdWx0aVBsYXllciA9IE1vZEFQSS5tY2luc3RhbmNlLiRjdXJyZW50U2NyZWVuLiRidXR0b25MaXN0LiRhcnJheTEuZGF0YVsxXTtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdmFyIG1vZHMgPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbMl07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBmb3JrT25HaXRIdWIgPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbM107XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBvcHRpb25zID0gTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW4uJGJ1dHRvbkxpc3QuJGFycmF5MS5kYXRhWzRdO1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB2YXIgZWRpdFByb2ZpbGUgPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNV07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBsYXVuZ3VhZ2UgPSBNb2RBUEkubWNpbnN0YW5jZS4kY3VycmVudFNjcmVlbi4kYnV0dG9uTGlzdC4kYXJyYXkxLmRhdGFbNl07XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHZhciBjdXJyZW50U2NyZWVuID0gTW9kQVBJLm1jaW5zdGFuY2UuJGN1cnJlbnRTY3JlZW47XG5cbiAgICAgIHZhciBidXR0b25EaXN0YW5jZSA9IDQyO1xuICAgICAgdmFyIGJ1dHRvbkRpc3RhbmNlUmVsID0gMjI7XG4gICAgICB2YXIgYnV0dG9uU3BhY2luZyA9IDI7XG4gICAgICB2YXIgYnV0dG9uV2lkdGggPSAxMDA7XG4gICAgICB2YXIgZW5jID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgICAvL29wdGlvbnNcbiAgICAgIG9wdGlvbnMuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIG9wdGlvbnMuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vbW9kc1xuICAgICAgbW9kcy4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoIC8gMjtcbiAgICAgIG1vZHMuJHhQb3NpdGlvbjAgPSBvcHRpb25zLiR4UG9zaXRpb24wIC0gYnV0dG9uV2lkdGggLyAyIC0gYnV0dG9uU3BhY2luZztcbiAgICAgIG1vZHMuJHlQb3NpdGlvbiA9IGN1cnJlbnRTY3JlZW4uJGhlaWdodDcgLSBidXR0b25EaXN0YW5jZTtcbiAgICAgIC8vU2luZ2xlUGxheWVyXG4gICAgICBzaW5nbGVQbGF5ZXIuJHdpZHRoMTMgPSBidXR0b25XaWR0aDtcbiAgICAgIHNpbmdsZVBsYXllci4keVBvc2l0aW9uID0gb3B0aW9ucy4keVBvc2l0aW9uIC0gYnV0dG9uRGlzdGFuY2VSZWw7XG4gICAgICAvL011bHRpUGxheWVyXG4gICAgICBtdWx0aVBsYXllci4kd2lkdGgxMyA9IGJ1dHRvbldpZHRoICsgbGF1bmd1YWdlLiR3aWR0aDEzICsgYnV0dG9uU3BhY2luZztcbiAgICAgIG11bHRpUGxheWVyLiR4UG9zaXRpb24wID1cbiAgICAgICAgc2luZ2xlUGxheWVyLiR4UG9zaXRpb24wICsgYnV0dG9uV2lkdGggKyBidXR0b25TcGFjaW5nO1xuICAgICAgbXVsdGlQbGF5ZXIuJHlQb3NpdGlvbiA9IG9wdGlvbnMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgLy9FZGl0IHByb2ZpbGVcbiAgICAgIGVkaXRQcm9maWxlLiR3aWR0aDEzID0gYnV0dG9uV2lkdGg7XG4gICAgICBlZGl0UHJvZmlsZS4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9MYW5nXG4gICAgICBsYXVuZ3VhZ2UuJHhQb3NpdGlvbjAgPVxuICAgICAgICBlZGl0UHJvZmlsZS4keFBvc2l0aW9uMCArIGVkaXRQcm9maWxlLiR3aWR0aDEzICsgYnV0dG9uU3BhY2luZztcbiAgICAgIGxhdW5ndWFnZS4keVBvc2l0aW9uID0gY3VycmVudFNjcmVlbi4kaGVpZ2h0NyAtIGJ1dHRvbkRpc3RhbmNlO1xuICAgICAgLy9Gb3JrXG4gICAgICBmb3JrT25HaXRIdWIuJHdpZHRoMTMgPSBidXR0b25XaWR0aCAvIDI7XG4gICAgICBmb3JrT25HaXRIdWIuJHlQb3NpdGlvbiA9IG1vZHMuJHlQb3NpdGlvbiAtIGJ1dHRvbkRpc3RhbmNlUmVsO1xuICAgICAgZm9ya09uR2l0SHViLiR4UG9zaXRpb24wID0gbW9kcy4keFBvc2l0aW9uMDtcbiAgICAgIGZvcmtPbkdpdEh1Yi4kZGlzcGxheVN0cmluZy4kY2hhcmFjdGVycy5kYXRhID0gZW5jLmVuY29kZShcIkZvcmtcIik7XG5cbiAgICAgIGN1cnJlbnRTY3JlZW4uJG9wZW5HTFdhcm5pbmcxLiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiXCIpO1xuICAgICAgLy9jdXJyZW50U2NyZWVuLiRzcGxhc2hUZXh0LiRjaGFyYWN0ZXJzLmRhdGEgPSBlbmMuZW5jb2RlKFwiSnVzdGluIGlzIHRoZSBzcGVkIHZlcnNpb24gb2YgRGFuaWVsXCIpXG5cbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlcnBpbmdsaXN0XCIpID09IG51bGwpIHtcbiAgICAgICAgdmFyIHNlcnZlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZXJ2ZXJzLmlkID0gXCJzZXJ2ZXJwaW5nbGlzdFwiO1xuXG4gICAgICAgIHZhciBwaW5ncyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFlb24gTmV0d29ya1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9hZW9uLW5ldHdvcmsubmV0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFyY2ggTUNcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vbWMuYXJjaC5sb2xcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiSGVsbGl1bSBOZXR3b3JrXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcIndzczovL2hlbGx0ZWNoLmNjXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNsZXZlciBUZWFjaGluZ1wiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJ3c3M6Ly9jbGV2ZXItdGVhY2hpbmcuY29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlp5dGhcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwid3NzOi8vbWMuenl0aC5tZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgc2VydmVycy5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstYWxsXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUudG9wID0gXCIxMCVcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5sZWZ0ID0gXCIyLjUlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUud2lkdGggPSBcIjE1JVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmhlaWdodCA9IFwiODAlXCI7XG4gICAgICAgIHNlcnZlcnMuc3R5bGUuY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIjtcbiAgICAgICAgc2VydmVycy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICAgICAgICBzZXJ2ZXJzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuXG4gICAgICAgIHBpbmdzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGNvbnN0IGN1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY3VyLnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICAgIHNlcnZlcnMuYXBwZW5kQ2hpbGQoY3VyKTtcblxuICAgICAgICAgIGNvbnN0IGN1cmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXJoMi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICAgIGN1cmgyLmlubmVyVGV4dCA9IGUubmFtZTtcbiAgICAgICAgICBjdXIuYXBwZW5kQ2hpbGQoY3VyaDIpO1xuXG4gICAgICAgICAgY29uc3QgY3Vyc2VydmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjdXJzZXJ2ZXIuaW5uZXJUZXh0ID0gZS5hZGRyZXNzO1xuICAgICAgICAgIGN1ci5hcHBlbmRDaGlsZChjdXJzZXJ2ZXIpO1xuXG4gICAgICAgICAgY29uc3QgcGxheWVyaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcGxheWVyaW5mby5pbm5lclRleHQgPSBcIm5vdCBjb25uZWN0ZWRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgICBwbGF5ZXJpbmZvLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XG4gICAgICAgICAgcGxheWVyaW5mby5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gICAgICAgICAgY3VyLmFwcGVuZENoaWxkKHBsYXllcmluZm8pO1xuXG4gICAgICAgICAgY29uc3QgdGVzdHdlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoZS5hZGRyZXNzKTtcbiAgICAgICAgICBjb25zdCB0aW1lcGluZyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICB0ZXN0d2Vic29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlc3R3ZWJzb2NrZXQuc2VuZChcIkFjY2VwdDogTU9URFwiKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGVzdHdlYnNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGUuZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGF0ID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdFtcInR5cGVcIl0udG9Mb3dlckNhc2UoKSA9PT0gXCJtb3RkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyaW5mby5pbm5lclRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgIGRhdFtcImRhdGFcIl1bXCJvbmxpbmVcIl0gKyBcIi9cIiArIGRhdFtcImRhdGFcIl1bXCJtYXhcIl07XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcmluZm8uc3R5bGUuY29sb3IgPSBcImxpbWVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgICAgICBwaW5nLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIHBpbmcuc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICAgICAgICAgIHBpbmcuaW5uZXJUZXh0ICs9IChEYXRlLm5vdygpIC0gdGltZXBpbmcpICsgXCJtc1wiO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJpbmZvLmFwcGVuZENoaWxkKHBpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlcnZlcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSAhPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVycGluZ2xpc3RcIikucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjdXN0dWkgPSBzZXRJbnRlcnZhbChjdXN0b21VSSwgNTApO1xuXG5cbi8vQ3VzdG9tIEN1cnNvclxuZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXS5zdHlsZS5jdXJzb3IgPVxuICAndXJsKFwiJyArIGFzc2V0cy5jdXJzb3IgKyAnXCIpLCBhdXRvJztcbmRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3VybChcIicgKyBhc3NldHMuY3Vyc29yICsgJ1wiKSwgYXV0byc7XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIGNsZWFySW50ZXJ2YWwoY3VzdHVpKTtcbiAgdWkuZGVzdHJveSgpO1xuICBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdLnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKSAhPSBudWxsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXJwaW5nbGlzdFwiKS5yZW1vdmUoKTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFFTyxNQUFJLGFBQWE7OztBQ0FqQixXQUFTLGFBQWEsS0FBSztBQUNoQyxZQUFRLElBQUksSUFBSSxVQUFVLEtBQUssR0FBRyxFQUFFO0FBQUEsRUFDdEM7OztBQ0ZPLFdBQVMs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
