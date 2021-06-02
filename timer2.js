const alertTerminal = function(){
  console.log("\x07");
}

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if(key === '\u0003') {
    console.log(`Thanks for using me, ciao!`)
    process.exit();
  } else if (key === 'b') {
    alertTerminal();
  } else if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds`)
    setTimeout(() => {alertTerminal()}, key * 1000);
  }
})
