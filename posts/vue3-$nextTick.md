---
title: "vue3 nextTick"
date: "2022-02-26"
---

> packages\runtime-core\src\scheduler.ts

```ts
export function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = Promise.resolve();
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
```

将你需要执行的代码放入到微任务当中

只有在你的宏任务代码执行结束之后才会执行的微任务
