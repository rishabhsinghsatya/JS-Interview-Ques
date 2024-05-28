const lang = { name: "reactJS" };

function getLib(ver) {
  return `${this.name} version ${ver}`;
}

console.log(getLib.call(lang, 18));
console.log(getLib.bind(lang, 18));
