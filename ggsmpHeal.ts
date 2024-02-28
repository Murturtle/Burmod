ModAPI.require("player");setInterval(function(){if(ModAPI.player.getHealth()<ModAPI.player.getMaxHealth())ModAPI.player.sendChatMessage({message:"/heal"})},500)
