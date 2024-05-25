function getSummary(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const fName = "SATYA";
const age = 25;
getSummary`${fName} age is ${age}`;

getSummary(`${fName} age is ${age}`);
