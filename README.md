# rpgmz-typescript

d.ts files for MZ

## Usage

```
npm i katai5plate/rpgmz-typescript
```

```js
// Apply d.ts files to JS and prevent error when read as plugin.
try {
  require("rpgmz-typescript/types");
} catch (e) {}

(() => {
  // Referencing Window_StatusBase with VSCode makes the IntelliSense work.
  class Window_CustomBase extends Window_StatusBase {
    constructor(...args) {
      super(...args);
    }
  }
  window.Window_CustomBase = Window_CustomBase;
})();
```
