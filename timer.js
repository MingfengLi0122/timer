const args = process.argv.slice(2);

const alertTerminal = function(){
  console.log("\x07");
}

const soupUP = function(args) {
  let sortted = args.sort((a, b) => a - b);
  for (let ele of sortted) {
    if (ele > 0) {
      setTimeout(() => {
        alertTerminal();
      }, ele * 200);
    }
  }
};

soupUP(args);