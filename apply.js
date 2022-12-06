function fn(params) {}

fn.apply(this, [1, 2, 3, 4]);

Function.prototype.myApply = function () {
  const fn = this;
  if (typeof fn !== 'function') {
    throw new Error('非方法');
  }
  const context = arguments.slice(0, 1);
  const symbol = new symbol();
  context[symbol] = fn;
  context[symbol](arguments.slice(1));
  delete context[symbol];
};
