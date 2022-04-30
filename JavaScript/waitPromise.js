// example: within async function, call await wait(100);
function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }