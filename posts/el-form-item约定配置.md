---
title: "el-form-item 约定配置"
date: "2022-03-20"
---

```typescript
const config = [
  {
    label: string
    key: string // 唯一键
    children: any[]
    render: () => VNode // 动态渲染，返回虚拟节点（h函数）
    ...
  }
]
```
