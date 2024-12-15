/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let Currentcount = init;
    return {
        increment: () => {
          return ++Currentcount;
        },
        decrement: () => {
          return --Currentcount;
        },
        reset: () => {
            return Currentcount = init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */