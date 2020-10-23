const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  const exprResult = [];
  let exprFrom = 0;
  let exprTo = 0;

  for (let i = 0; i < expr.length / 10; i++) {
    exprFrom = exprTo;
    exprTo = exprFrom + 10;

    const elemResult = [];
    let elem = expr.slice(exprFrom, exprTo);
    let elemFrom = 0;
    let elemTo = 0;

    for (let j = 0; j < elem.length / 2; j++) {
      elemFrom = elemTo;
      elemTo = elemFrom + 2;
      let el = elem.slice(elemFrom, elemTo);

      switch (el) {
        case "**":
          elemResult.push(" ");
          break;
        case "10":
          elemResult.push(".");
          break;
        case "11":
          elemResult.push("-");
          break;
        default:
          elemResult.push("");
      }
    }

    if (elemResult.join("") === "     ") exprResult.push(" ");

    for (item in MORSE_TABLE) {
      if (item === elemResult.join("")) exprResult.push(MORSE_TABLE[item]);
    }
  }

  return exprResult.join("");
}

module.exports = {
  decode
};
