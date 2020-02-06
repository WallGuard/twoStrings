function callEqualString(a, b) {
  if (checkBlock(a, b) !== true) {
    console.log('false');
    return false
  } else {
    console.log(main(a, b))
    return main(a, b)
  }
}

function checkBlock(a, b) {
    return !((a === '') || (b === '') || (a.length !== b.length) || (a === b))
  }

function main (a, b) {
  a = a.split('');
  b = b.split('');

  for (let i = j = 0; i < a.length;)
    if (a[i] === b[j]) {
      b[j] = b[i];
      b[i] = a[i];
      i++;
      j = i
    } else if (a[i] !== b[j] && (j < a.length - 1)) {
      j+=2;
    } else {
      return false
    }
    return a.every((elem, index) => elem === b[index])
}

callEqualString('abba', 'baab')