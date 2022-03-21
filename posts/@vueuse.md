---
title: "@vueuse"
date: "2022-03-21"
---

### 全屏 useFullscreen

```typescript
import { useFullscreen } from "@vueuse/core";

const domRef = ref<Nullable<HTMLElement>>(null);
const { enter, toggle, exit, isFullscreen } = useFullscreen();
const { toggle: toggleDom } = useFullscreen(domRef);
```
