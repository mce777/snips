const sampleArray = [
    {
      a: 96,
      b: 25
    },
    {
        a: 91,
        b: 5
    },
    {
        a: 20,
        b: 15
    },
    {
        a: 50,
        b: 35
    },
    {
        a: 900,
        b: 45
    },
    {
        a: 887,
        b: 2
    },
  ];

  // return the object with the highest a: value
  const result = sampleArray.reduce(
       (prev, curr, currentIndex) => {
        const comparison = prev.a < curr.a ? curr.a : prev.a
        const indexFinder = prev.a < curr.a ? currentIndex : prev.index
        return {a: comparison, index: indexFinder }
    }, {a:0, b:0})

  console.log('the result :::: ', result.index);
