new Promise((res, reject) => res(1)).then(() => {});

function myPromise(fn) {
  const PENDDING = 'pendding';
  const RESOLVE = 'resolve';
  const REJECT = 'reject';
  let resolveCallbacks = [];
  let rejectCallbacks = [];
  this.then = (onFullFn, onRejectFn) => {
    resolveCallbacks.push(onFullFn);
    rejectCallbacks.push(onRejectFn);
  };

  function reslove() {
  }

  function reject() {}

  fn(reslove, reject)
}
