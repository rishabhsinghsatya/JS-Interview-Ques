const income = {
  skills: 108,
  monthly() {
    return this.skills * 108;
  },
  yearly: () => 888 * this.skills,
};

console.log(income.monthly());
console.log(income.yearly());

// Regular Functions: Have their own this context which refers to the object that calls the method.
// Arrow Functions: Do not have their own this context; this is inherited from the surrounding lexical scope.
