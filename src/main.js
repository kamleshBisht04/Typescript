//problem statement not typesafty

let username = "kamlesh";
username = 100;
console.log(username);
console.log(typeof username);

const getResult = (a, b) => {
  return a + b;
};

console.log(getResult(5, 6));
console.log(getResult(5, "6"));

