---
title: "vue element-ui 中 el-table 配置化的良好实现（render实现）"
date: "2022-02-26"
---

在业务中实现 **render** 中需要注意的就是，尽量将函数抽离，尽量让父组件传参像传 ui 组件的参数那样，尽量少加新的属性

```vue
<script>
export const isFunction = (val) => typeof val === "function";
export default {
  name: "CodeTemplateElTableItem",
  render() {
    const { col } = this.$attrs;
    const attrs = {
      prop: col.key,
      label: col.label,
      align: "center",
    };
    if (col.textRender && isFunction(col.textRender)) {
      return (
        <el-table-column
          {...{ attrs }}
          scopedSlots={{
            default(props) {
              return close.textRender(props, col);
            },
          }}
        />
      );
    }
    return <el-table-column {...{ attrs }} />;
  },
};
</script>
```
