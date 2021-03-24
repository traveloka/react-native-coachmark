# React Native Coachmark

![NPM Version](https://badge.fury.io/js/react-native-coachmark.svg) [![CircleCI](https://circleci.com/gh/traveloka/react-native-coachmark/tree/master.svg?style=shield&circle-token=ab2fa2d1fdea74636ee3132e16c82003cdc95383)](https://circleci.com/gh/traveloka/react-native-coachmark) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

![preview](docs/demo.gif)

## Installation

yarn

```
yarn add react-native-coachmark
```

npm

```
npm i react-native-coachmark --save
```

## Getting Started

### Basic Usage

```javascript
import React from 'react';
import { Coachmark } from 'react-native-coachmark';

export default function AwesomeScreen() {
  return (
    <Page>
      <Header>
        <Coachmark autoShow message="Click here to save your page!">
          <ButtonBookmark>
        </Coachmark>
      </Header>
    </Page>
  );
}
```

## Example

[![preview](https://i.ibb.co/n3VpkY4/Screen-Shot-2018-12-04-at-13-53-26.png)](https://snack.expo.io/@jekiwijaya/react-native-coachmark)

[View on Expo!](https://snack.expo.io/@jekiwijaya/react-native-coachmark)

## Documentation

### - Coachmark

#### Importing

```javascript
var Coachmark = require('react-native-coachmark').Coachmark; // ES5

import { Coachmark } from 'react-native-coachmark'; // ES6
```

#### Props

| Property         | Type     | Default Value | Description                                    |
| ---------------- | -------- | ------------- | ---------------------------------------------- |
| message          | string   | none          | required                                       |
| autoShow         | boolean  | none          | to show the coachmark when mounting            |
| showArrow        | boolean  | true          | to show the arrow in the coachmark             |
| coachmarkContent | function | null          | to show a custom content for coachmark         |
| onShow           | function | none          | will be called when coachmark is showing       |
| onHide           | function | none          | will be called when coachmark is hidden        |
| isAnchorReady    | boolean  | true          | a value to force coachmark not being shown yet |

#### Methods

| Methods                      | Description                               |
| ---------------------------- | ----------------------------------------- |
| `show() => Promise`          | a function to trigger show the coachmark  |
| `coachmarkContent() => null` | a function to render content in coachmark |

### Roadmap

- [ ] Auto load and save in AsyncStorage
- [x] Show coachmark only when in view port
- [ ] Custom render arrow and content

## Contributing

We'd to have your helping hand on this package! Feel free to PR's, add issues or give feedback!

## Credits

Written by [Jacky Wijaya](https://www.linkedin.com/in/jacky-wijaya-125b90b6/) (jekiwijaya) at Traveloka.
