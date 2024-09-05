function deepCopy(obj) {
  if (!isObject(obj)) return obj;

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = copyObject(obj[k]);
  }
  // for (const k in obj) {
  //   newer[k] = copyObject(obj[k]);
  // }

  // const symbols = Object.getOwnPropertySymbols(obj);
  // console.log('🚀  symbols:', symbols);
  // for (const symKey of symbols) {
  //   newer[symKey] = obj[symKey];
  // }

  return newer;
}
