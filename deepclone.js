function deepclone(object) {
  const isObject = (obj) =>
    (typeof obj === 'object' || typeof object === 'function') && obj != null;
    if(!isObject(object)) {
        throw new Error('非对象')
    }
    const newObject = Array.isArray(object) ? [...object] : {...object}
    for(var i in newObject) {
        newObject[i] = isObject(newObject[i]) ? deepclone(newObject[i]) : newObject[i]
    }
    return newObject
}
