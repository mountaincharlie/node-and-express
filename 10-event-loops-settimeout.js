// Event loops - setTimeout e.g.

// even tho the setTimeout() has a time of 0, its async so it gets off-loaded (back of the line)
// off-loaded callback is not invoked until our immediate code (sync) is done

console.log('first')
setTimeout(() => {
    console.log('second')
}, 0)
console.log('third')
