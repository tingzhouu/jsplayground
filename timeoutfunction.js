async function main() {
  await (new Promise(resolve => {
    setTimeout(() => {
      console.log('done');
      resolve();
    }, 3000);
  }));
}

main();