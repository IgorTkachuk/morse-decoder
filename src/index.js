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
  "-----": "0",
  " ": " "
};

function decode(expr) {
  const binSymbs = [];
  for (let i = 0; i < expr.length - 9; i = i + 10) {
    binSymbs.push(expr.substring(i, i + 10));
  }

  const morseSymbs = binSymbs.map(sym => {
    if (sym[0] === "*") return " ";

    let buffer = "";
    for (let i = 0; i < sym.length - 1; i = i + 2) {
      if (sym.substring(i, i + 2) === "10") {
        buffer += ".";
      } else if (sym.substring(i, i + 2) === "11") {
        buffer += "-";
      }
    }
    return buffer;
  });

  let result = morseSymbs.reduce((buffer, sym) => {
    return (buffer += MORSE_TABLE[sym]);
  }, "");

  return result;
}

module.exports = {
  decode
};
