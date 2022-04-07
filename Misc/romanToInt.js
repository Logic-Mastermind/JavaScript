function romanToInt(string) {
  const modifiers = ["I", "X", "C", "M"];
  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  
  let previous = null;
  let total = 0;
  
  for (let [i, letter] of Object.entries(string)) {
    i = Number(i);
    const val = table[letter];
    const next = string[i + 1];
    
    if (modifiers.includes(letter)) {
      if (next && !modifiers.includes(next)) {
        if (table[next] > val) {
          previous = val;
          continue;
        }
      }
    }
    
    if (previous) {
      total += val - previous;
      previous = null;
      continue;
    }
    
    if (val) total += val;
  }
  
  return total;
}