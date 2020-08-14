const translate = require('@vitalets/google-translate-api');
const fs = require('fs');
const readline = require('readline');
// const System = require('system')

// var fr = fs.createWriteStream("./localString_en.js");  
// const r1 = readline.createInterface({
//   input: fs.createReadStream("./localString_cn.js"),
//   output: fr
// });



// var i = 1
// r1.on('line', async (line) => { //事件监听
  
//   r1.pause()
//   const res =  await translate(line, {to: 'en', tld: 'cn'})
//   fr.write(res.text);
//   // fr.Write(System.Environment.NewLine)
//    fr.write("\r\n");
//    r1.resume()
//    console.log('Line from file:' + i + ":" + line);  
//     //   console.log(res.text);
//       // //=> I speak English
//       // console.log(res.from.language.iso);
//       //=> nl
// 　　i+=1;
// })

async function processLineByLine() {
  var fr = fs.createWriteStream("./localString_en.js");  
  const r1 = readline.createInterface({
    input: fs.createReadStream("./localString_cn.js"),
    output: fr
  });
  
  // 注意：我们使用 crlfDelay 选项将 input.txt 中的所有 CR LF 实例（'\r\n'）识别为单个换行符。
  var i = 1
  for await (const line of r1) {
    // input.txt 中的每一行在这里将会被连续地用作 `line`。    
    const res =  await translate(line, {to: 'en', tld: 'cn'})
    fr.write(res.text);
    // fr.Write(System.Environment.NewLine)
     fr.write("\r\n");
     
     console.log('Line from file:' + i + ":" + line);  
  　　i+=1;
  }
}

processLineByLine();