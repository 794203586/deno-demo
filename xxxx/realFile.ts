// const dir = Deno.dir("./xxxx");
const filePath = "./xxxx/test.txt";

const encoder = new TextEncoder(); 
const writeText = "我来了\n";
let writeData = encoder.encode(writeText)
Deno.writeFileSync(filePath, writeData, {append: true});

const txt = await Deno.readFileSync(filePath);
let text = new TextDecoder().decode(txt);

console.log("dir-",text);
