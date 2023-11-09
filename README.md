# region-generator

根据不同编程语言，快速生成对应的region makers并自动折叠。

选中文本后，按下快捷键`ctrl+shift+/`，自动在文本前后插入对应的region makers，自动折叠，自动移动光标位置到region后，方便你添加描述。

## 目前支持的语法

任何支持下列语法的编程语言都可以正常使用插件，不用一定是下面提到的编程语言。如果你实在需要支持其他语法，可以在【链接待补充】中提出你的需求。

- `html`、`vue`的`template`等

  ```
  <!-- #region -->
  
  <!-- #endregion -->
  ```

- `less`、`sass`、`styl`、`css`、`vue`的`style`等

  ```
  /* #region */
  
  /* #endregion */
  ```

- `ts`、`js`、`vue`的`scirpt`等

  ```
  // #region 
  
  // #endregion
  ```

## 示例

以`vue`为例

```vue
<template>
  <div class="box">
    <!-- #region -->
    <span class="count">{{ a }}</span>
    <!-- #endregion -->
  </div>
</template>

<script setup lang="ts">
// #region
const a = 123
// #endregion
</script>

<style scoped>
.box {
  /* #region */
  .count {
    color: red;
  }
  /* #endregion */
}
</style>
```

## 提示

- 插件会在起始光标前一行和结束光标后一行插入对应的region。也就是说你不用完美选中一段文本，插件也能生效。

- 如果没有选中文本，插件会在光标前后一行插入对应的region。

## 扩展设置

在插件右键菜单的`扩展键盘快捷方式`中可以自定义快捷键



