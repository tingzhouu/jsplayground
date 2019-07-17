# Javascript Playground

Template for local javascript playground in Visual Studio Code.

### Prerequisites

1. Visual Studio Code

2. [Code Runner Extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

### Installing

1. Install node_modules

```
npm i
```

2. Add the below settings to `settings.json` file for Code Runner.

```
"code-runner.defaultLanguage": "javascript",
"code-runner.executorMap": {
  "javascript": "$workspaceRoot/node_modules/.bin/babel-node $fullFileName"
}
```

Open `test.js` in root directory and run code snippet! Use `cmd shift p` to toggle header menu in below screenshot.
<img src="https://drive.google.com/uc?export=view&id=1UoLU1MSyKroWS8jWHolyA7Y4_DPNEoCN">