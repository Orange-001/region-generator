# region-generator

[中文](https://github.com/Orange-001/region-generator/blob/master/README.zh.md)

Generate corresponding region makers quickly and automatically fold them based on different programming languages.

After selecting the text, pressing the shortcut `Ctrl+Shift+/` (Mac: `Cmd+Shift+/`) automatically inserts the corresponding region markers before and after the text, folds the region, and moves the cursor position to after the region. This makes it convenient for you to add descriptions.

## Example

Using `vue` as an example:

![region-generator.gif](https://s2.loli.net/2023/11/13/EKz2OgvP8sCBrh4.gif)

## Currently supported syntax

The extension can be used with any programming language that supports the following syntax, not necessarily the ones mentioned below. If you want the extension to support other programming languages, you can open an issue on [Orange-001/region-generator (github.com)](https://github.com/Orange-001/region-generator).

- `html`, `vue`'s `template`, etc.

  ```
  <!-- #region -->
  
  <!-- #endregion -->
  ```

- `less`, `sass`, `styl`, `css`, `vue`'s `style`, etc.

  ```
  /* #region */
  
  /* #endregion */
  ```

- `ts`, `js`, `vue`'s `script`, etc.

  ```
  // #region 
  
  // #endregion
  ```

## Extension Settings

* `region-generator.autoFold.enabled`: Whether to automatically fold regions.

## Extension Keyboard Shortcuts

- `Ctrl+Shift+/` (Mac: `Cmd+Shift+/`): Insert corresponding regions before and after the selected text. You can customize the shortcut key in the extension keyboard shortcuts in the right-click menu.

## Tips

- The extension will insert the corresponding region before the line preceding the starting cursor and after the line following the ending cursor. This means that you don't have to select a block of text perfectly for the extension to work.

- If no text is selected, the extension will insert the corresponding region before and after the current line.
