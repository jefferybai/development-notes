Function.prototype.myBind = function (context) {
  const that = this;
  if (typeof that !== 'function') {
    throw new Error('绑定的不是函数');
  }
  let args = [...arguments];
  return () => {
    const context = args.slice(0, 1)[0];
    return that.apply(context, [...arguments, ...args.slice(1)]);
  };
};
