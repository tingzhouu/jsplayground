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

Navigate to `test.js` and press run code snippet!
<img src="https://drive.google.com/uc?export=view&id=1tZE8lKSPfP6zSCVv0qGUplavBeCJl0U6">

## Authors

* **Ting Zhou** - [tingzhouu](https://github.com/tingzhouu)