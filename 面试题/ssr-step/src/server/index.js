import express from 'express';

/**
 * 构建在 虚拟 dom之上的 服务端渲染
 * { name： ''， age: '' }
 * { tag: '', attribute: , children: [], class: '' }
 */
const app = new express();
app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app">hello server</div>
</body>
</html>
  `)
})
app.listen(3000, () => {
  console.log('server is running 3000');
})