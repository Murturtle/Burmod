import { clientName } from "./util/clientName";
import { modules, categories } from "./util/actualModules";


// delete the ui
export function destroy() {
  if (document.getElementById("ui") != null) {
    document.getElementById("ui").remove();
  }
}

var container;


// check if open
export function isOpen() {
  if (document.getElementById("ui") == null) {
    return false;
  } else {
    return true;
  }
}


// open a setting menu
export function setting(module) {
  /*var lst = [
    {
      name: "Mode",
      type: "List",
      modes: ["Abilities", "Packet"],
      current: 0
    },
    {
      name: "Speed",
      type: "Slider",
      min: 1,
      max: 4,
      current: 1
    },
    {
      name: "Test",
      type: "Boolean",
      toggled: true
    },
  ]*/
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
  s.style.top = "100px"
  s.style.left = "100px"

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
        }
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
        }
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
        }
        bg.appendChild(bool);
      }
    }
  }
}


//create the gui
export function open() {
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
  search.style.color = "rgba(255,255,255,1)"
  search.style.display = "inline-block";
  search.style.padding = "8px";
  search.style.marginLeft = "20px";
  search.style.fontSize = "22px";
  search.style.background = "rgba(50,50,50,.24)";
  search.placeholder = "🔎︎ Search"
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


// Reload module list
export function refreshModules() {
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
        }

        container.appendChild(modl);
      }
    }
  }
}
