/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let Currentcount = init;
    return {
        increment: () => {
           Currentcount = ++Currentcount;
          return Currentcount;
        },
        decrement: () => {
           Currentcount = --Currentcount
          return Currentcount;
        },
        reset: () => {
            Currentcount = init
           return Currentcount
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */