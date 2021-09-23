function create() {
    const Con = arguments.slice[0, 1]
    const args = arguments.slice(1)
    const obj = {}
    obj.__proto__ = Con.prototype
    return Con.apply(obj, args)
}

