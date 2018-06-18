function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice(0, arr2.length);
  for(let i = 0; i< arr1.length; i++) {
    newArr.splice(n+i, 0, arr1[i]);
  }

  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
