import { clientName } from "./util/clientName.ts";
import { require_all } from "./require_all.ts";
export function inithud(){
  ModAPI.addEventListener("update", function(){
    if(typeof ModAPI.settings !== 'undefined'){
      ModAPI.settings.hud24h = false
      ModAPI.settings.hudCoords = false
      ModAPI.settings.hudFps = false
      ModAPI.settings.hudPlayer = false
      ModAPI.settings.hudStats = false
      ModAPI.settings.hudWorld = false
      ModAPI.settings.reload();
    }
  })
  ModAPI.addEventListener("drawhud", function() {
    let sr = ModAPI.ScaledResolution
    //@ts-ignore
    let gsm = ModAPI.GlStateManager
    gsm.pushMatrix();
    gsm.translate ({x: 4, y: 4, z: 0});
    gsm.scale({x: 1.5, y: 1.5, z: 1});
    gsm.translate({x: -4, y: -4, z: 0}); 
    ModAPI.drawStringWithShadow({msg: clientName, x: 4,y: 4,color: -1});
    gsm.popMatrix();
  });
}
