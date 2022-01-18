const sentence = "hello there from lighthouse labs";

for (const index in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[index]);
  }, index * 50);
}
setTimeout(() => {
  console.log("")
}, (sentence.length + 1) * 50);