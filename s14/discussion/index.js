let myName = "AlEx";

function printName(name) {
  for (let i = 0; i < name.length; i++) {
    if (
      name[i].toLowerCase() === "a" ||
      name[i].toLowerCase() === "e" ||
      name[i].toLowerCase() === "i" ||
      name[i].toLowerCase() === "o" ||
      name[i].toLowerCase() === "u"
    ) {
      name[i] = 3;
    }

    console.log(name[i]);
  }
}
