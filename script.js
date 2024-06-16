function tripleTrouble(one, two, three) {
  let str = "";
  for (let index = 0; index < one.length; index++) {
    str += one[index];
    str += two[index];
    str += three[index];
  }
  return str;
}
console.log(tripleTrouble("aaa", "bbb", "ccc"));
