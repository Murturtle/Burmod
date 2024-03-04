import * as flightMOD from "../cheats/flight";
//import * as fullbrightMOD from "../cheats/autofish";
import * as stepMOD from "../cheats/step";
import * as autofishMOD from "../cheats/autofish";
import * as ui from "../gui";

function template(mod) {
  // module functions

  this.enabledDONOTUSE = false;
  this.init = function() { };
  this.onEnable = function() { };
  this.onDisable = function() { };
  this.enable = function() { this.enabledDONOTUSE = true; this.onEnable(); ui.refreshModules() };
  this.disable = function() { this.enabledDONOTUSE = false; this.onDisable(); ui.refreshModules() };
  this.onKey = function(e){};
  this.onMCKey = function(e){};
  this.getEnabled = function() { return this.enabledDONOTUSE; };
  this.toggle = function() { this.enabledDONOTUSE = !this.enabledDONOTUSE; if (this.enabledDONOTUSE) { this.onEnable() } else { this.onDisable(); } };
  //mc functions
  this.onUpdate = function() { };

  this.alert = function() { alert() };

  this.settings = []

  mod.init(this);
}

export var categories = {
  movement: "Movement",
  player: "Player",
  render: "Render",
  fun: "Fun"
}

export var modules = {
  flight: {
    name: "Flight",
    function: new template(flightMOD),
    category: "Movement",
    description: "Allows you to fly",
  },
  step: {
    name: "Step",
    function: new template(stepMOD),
    category: "Movement",
    description: "Allows you to step",
  },
  autofish: {
    name: "AutoFish",
    function: new template(autofishMOD),
    category: "Player",
    description: "Automatically casts and reels rod",
  }
}