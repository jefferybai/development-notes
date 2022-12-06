// new Promise((reslove, reject) => res(1)).then(() => {});

const PENDDING = 'pendding';
const RESOLVE = 'resolve';
const REJECT = 'reject';

function MyPromise(fn) {

  this.resolveCallbacks = [];
  this.rejectCallbacks = [];
  this.value;
  this.rejectValue;
  this.status = PENDDING;

  const resolve = (res) => {
    if(this.status === PENDDING) {
      this.status = RESOLVE;
      this.value = res;
      this.resolveCallbacks.forEach((resFn) => resFn(this.value));
    } 
  }

  const reject = (error) => {
    if(this.status === PENDDING) {
      this.status = REJECT;
      this.rejectValue = error;
      this.rejectCallbacks.forEach((resFn) => resFn(this.rejectValue));
    }
  }

  fn(resolve, reject)
}

MyPromise.prototype.then = function (onFullFn, onRejectFn) {
  if(this.status === RESOLVE) {
    onFullFn(this.value);
  } else if(this.status === REJECT) {
    onRejectFn(this.value);
  }
  if(this.status === PENDDING) {
    this.resolveCallbacks.push(onFullFn);
    this.rejectCallbacks.push(onRejectFn);
  }
  return this;
};

new MyPromise((res, rej) => setTimeout(() => res(3333), 1000)).then((res) => console.log(res));
