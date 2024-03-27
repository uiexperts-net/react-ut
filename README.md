# Install JEST

npm install --save-dev jest

npm install jest --global
************************************************

# Execute JEST

jest <file name>

************************************************
# JEST Initialization

npm init jest@latest


The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … no


Modified <root>/package.json

Configuration file created at <root>/jest.config.ts


The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … no

📝  Configuration file created at /Users/vijayan/Repo/Imp Docs/zhapix/UI Training/ReactJS UI Testing/ReactJS - Unit Testing/ReactJS-UT_Demo-Practice/jest.config.js



************************************************

# Configure Babel

npm install --save-dev babel-jest @babel/core @babel/preset-env

Create babel.config.js

babel configuration to be set with current node as target

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};


# Typescript
npm install typescript
npm install --save-dev ts-jest
npm install --save-dev @types/jest

Add to jest.config.ts
preset: "ts-jest"

 npm i @babel/preset-typescript --save-dev
 
Add '@babel/preset-typescript', to babel config preset

# Install JSDOM
npm install jest-environment-jsdom --save-dev


# MSW
npm install msw@latest --save-dev

# Setup Tests
setupFilesAfterEnv: ['./setupTests.js']





# Code Coverage

jest --coverage=true


# Snapshot Testing
 npm install react-test-renderer

# React Support
npm install react react-dom
npm install --save-dev @types/react @types/react-dom @babel/preset-react 

# React Testing Library
npm install --save-dev @testing-library/react
npm install @testing-library/user-event --save-dev
 npm install @testing-library/jest-dom --save-dev


 Redux
 npm install react-redux
 # Npm
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit

# Webpack Setup
npm install webpack webpack-cli webpack-dev-server ts-loader css-loader style-loader html-webpack-plugin --save-dev


# NextJS+Redux+JEST
npx create-next-app@latest --example with-jest with-redux with-next-redux-jest-app


# Resolve Test Environment between JSDOM and Node
/**
 * @jest-environment node
 */