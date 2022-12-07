function debounce(fn, wait) {
  let timer;
  return function() {
    if(timer) {
      clearTimeout(timer);
    }
    let that = this;
    timer = setTimeout(() => fn.call(that, ...arguments), wait);
  }
}

const cc = function() {
    console.log(...arguments)
}
const a = debounce(cc, 1000);

a(12, 12)
