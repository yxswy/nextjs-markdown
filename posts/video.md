---
title: "video"
date: "2022-03-21"
---

### 移动端 iOS 设置 video 的 currentTime 无效解决方法

> https://blog.csdn.net/xh17864388739/article/details/122560947

ios 直接赋值 currentTime 无效，原因就是判断资源可播放时（canplay）再设置才可以, 所以要根据不同系统判断一下

```javascript
const isAndroid = () => {
  const u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    return true;
  }
  return false;
}

const videoRef = /* video dom */;
if (isAndroid()) {
  videoRef.currentTime = /* 设置时间 */ ?? 0;
} else {
  videoRef.addEventListener("canplay", () => {
    try {
      if (videoRef.currentTime === 0) {
        videoRef.currentTime = /* 设置时间 */ ?? 0;
      }
    } catch (error) {
      console.warn("@VideoRef: set currentTime", error);
    }
  });
}
```
