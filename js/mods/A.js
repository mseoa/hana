// mods/A.js
import { b } from "./B.js";
import defC, { c } from "./C.js";
export const afn = () => console.log("a.afn!!"); // 이 위치 OK!
// (ModuleTable 선등록)
console.log("AAAAAAAAAA");
b();
c();
defC();
// export const afn = () => console.log('a.afn!!'); // TDZ Error (uninitialize)
