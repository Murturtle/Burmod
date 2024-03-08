import { clientName } from "./clientName.ts"

export function logToConsole(msg) {
  console.log(`[${clientName}] ${msg}`);
}