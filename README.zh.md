# region-generator

[English](https://github.com/Orange-001/region-generator/blob/master/README.md)

根据不同编程语言，快速生成对应的region makers并自动折叠。

选中文本后，按下快捷键`Ctrl+Shift+/`（Mac: `Cmd+Shift+/`），自动在文本前后插入对应的region makers，自动折叠，自动移动光标位置到region后，方便你添加描述。

## 示例

以`vue`为例

![img](https://i.postimg.cc/25g1pMFM/region-generator.gif)

## 目前支持的语法

任何支持下列语法的编程语言都可以正常使用插件，不用一定是下面提到的编程语言。如果你希望插件支持其他编程语言，可以在[Orange-001/region-generator (github.com)](https://github.com/Orange-001/region-generator)提一个issue。

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

## 扩展设置

* `region-generator.autoFold.enabled`：是否自动折叠

## 扩展键盘快捷方式

- `Ctrl+Shift+/`（Mac: `Cmd+Shift+/`）：在选中的文本前后插入对应的region。可在右键菜单中的扩展键盘快捷方式中自定义快捷键

## 提示

- 插件会在起始光标前一行和结束光标后一行插入对应的region。也就是说你不用完美选中一段文本，插件也能生效。

- 如果没有选中文本，插件会在光标前后一行插入对应的region。
