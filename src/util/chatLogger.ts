import { clientName } from "./clientName.ts"

export function logToChat(msg) {
  //@ts-ignore
  ModAPI.displayToChat({msg: `§5[${clientName}]§r ${msg}`});
}