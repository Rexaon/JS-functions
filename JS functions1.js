function Oppgave_1(a, b) {
  let n = 9;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "<br>";
}
document.write(string);
}
