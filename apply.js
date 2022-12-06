// function fn(params) {}

// fn.apply(this, [1, 2, 3, 4]);

Function.prototype.myApply = function () {
  const fn = this;
  const args = [...arguments];
  if (typeof fn !== 'function') {
    throw new Error('非方法');
  }
  const context = args.slice(0, 1)[0];
  const symbol = Symbol();
  context[symbol] = fn;
  context[symbol](args.slice(1));
  delete context[symbol];
}

const fn = function() {
 console.log(this.a);
}

fn.myApply({a: 12}, []);
