# Typescrit playground

Porject used while learning typescript.

It contains the general setup for a nodejs project with all the configurations needed to run the app, run the tests and do debugging in VSCode.

The project is configured as a monorepo with the use of npm workpaces for managing the local packages.  
Useful commands while using npm workspaces:

```
# Ensure that you are in the root of the workspace
cd /typescript-playground

# All the install commands should be executed in the root with the `-w` flag
npm i --save-dev @types/mocha -w @tsplayground/my-advanced-lib


# Run all the tests
npm run test

# Run tests only for one package
npm run test -w @tsplayground/my-advanced-lib
```

The node_modules foler should exist only in the workspace root.
