# rpgmz-typescript

d.ts files for MZ

## Usage

```
npm i katai5plate/rpgmz-typescript
```

```js
try {
  require("rpgmz-typescript/types");
} catch (e) {}

(() => {
  class Window_CustomBase extends Window_StatusBase {
    constructor(...args) {
      super(...args);
    }
  }
  window.Window_CustomBase = Window_CustomBase;
})()
```
