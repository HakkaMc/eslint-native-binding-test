# eslint-native-binding-test
Repo for presenting "Resolve error: Cannot find native binding" error

I have problem to run eslint on my notebook with Windows 11 in Powershell or Git Bash. 
In WSL Ubuntu it works well.

**Notebook Specification**
- HP EliteBook 640 G11
- Windows 11 Pro, 10.0.26100
- CPU Intel Core Ultra 5 125U
- used command line: PowerShell or Git Bash
- NVM for Windows
- Node version 24.4.1

**Run this in PowerShell or Git Bash**
```
rm package-lock.json
nvm install 24
nvm use 24
npm install
npm rebuild
npx eslint .
```

**On my HP notebook I got this error**
```
C:\Users\test\Work\eslint-native-binding-test\eslint.config.mjs
   1:1   error  Resolve error: Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
    at Object.<anonymous> (C:\Users\test\Work\eslint-native-binding-test\node_modules\unrs-resolver\index.js:376:11)
    at Module._compile (node:internal/modules/cjs/loader:1692:14)
    at Object..js (node:internal/modules/cjs/loader:1824:10)
    at Module.load (node:internal/modules/cjs/loader:1427:32)
    at Module._load (node:internal/modules/cjs/loader:1250:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.require (node:internal/modules/cjs/loader:1449:12)
    at require (node:internal/modules/helpers:135:16)
    at Object.<anonymous> (C:\Users\test\Work\eslint-native-binding-test\node_modules\eslint-import-resolver-typescript\lib\index.cjs:30:31)  import/no-unresolved
```

But on my Desktop PC computer it works well!

**Desktop PC Specification**
- PC build by myself
- Windows 11 Pro, 10.0.26100
- CPU AMD Ryzen 9 7900
- used command line: PowerShell or Git Bash
- NVM for Windows
- Node version 24.4.1

So I don't know where is the problem on my notebook and how to solve it.