import { clientName } from "./util/clientName.ts";
export function inithud(){
  ModAPI.addEventListener("drawhud", function() {
    ModAPI.settings.hud24h = false
    ModAPI.settings.hudCoords = false
    ModAPI.settings.hudFps = false
    ModAPI.settings.hudPlayer = false
    ModAPI.settings.hudStats = false
    ModAPI.settings.hudWorld = false
    ModAPI.settings.reload();
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
