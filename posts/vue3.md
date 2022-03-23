---
title: "vue3"
date: "2022-03-21"
---

### 如何执行被生成为字符串的代码

```javascript
const code = `return function add(x) { console.log('add', arguments) }`;
console.log(new Function("Vue", code).name);
const fn = new Function("Vue", code)(1);

fn();
```
