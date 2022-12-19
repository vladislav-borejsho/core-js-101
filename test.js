function generateOdds(len) {
  let arr = [];
  let i = 1;
  do {
    i = i + 2;
    arr.push(i);
  }
  while (arr.length === len);
  console.log(arr);
}
generateOdds(5)
