# region-generator

[中文](https://github.com/Orange-001/region-generator/blob/master/README.zh.md)

Generate corresponding region makers quickly and automatically fold them based on different programming languages.

After selecting text, press the shortcut `ctrl+shift+/` to automatically insert the corresponding region makers before and after the text, automatically fold them, and move the cursor position to after the region, making it convenient for you to add descriptions.

## Example

Using `vue` as an example:

![img](https://i.postimg.cc/25g1pMFM/region-generator.gif)

## Currently supported syntax

The plugin can be used with any programming language that supports the following syntax, not necessarily the ones mentioned below.

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

## Tips

- The plugin will insert the corresponding region before the line preceding the starting cursor and after the line following the ending cursor. This means that you don't have to select a block of text perfectly for the plugin to work.

- If no text is selected, the plugin will insert the corresponding region before and after the current line.

## Extension Settings

You can customize the shortcut keys in the "Extension Keyboard Shortcuts" section of the plugin's right-click menu.
