function сalc(key, a, b) {
  switch (key) {
    case 'sum':
      return a + b;

    case 'multi':
      return a * b;

    default:
      return 'unknown operation'
  }

}

console.log(сalc('sum', 2, 55))
console.log(сalc('multi', 2, 54))
