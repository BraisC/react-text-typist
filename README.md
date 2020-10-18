# React Text Typist

A simple React component to create typing animations with multiple sentences.

## Install

```shell
npm install react-text-typist --save
```

## Demos

- <a href="https://react-text-typist.braiscao.dev" target="_blank">Demo Website</a>

## Basic Usage

```jsx
import React from 'react';
import Typist from 'react-text-typist';

export default App() => {
    return (
      <Typist sentences={['First Sentence', 'Second Sentence', 'Third Sentence']} loop={false} />
    );
}
```

## Props

Typist accepts some props to customize the component behaviour:

|     Property     |     Type      |      Default       | Required |
| :--------------: | :-----------: | :----------------: | :------: |
|    sentences     |   string[]    |                    |   yes    |
|    className     |    string     |                    |    no    |
| cursorClassName  |    string     |                    |    no    |
| cursorBlinkSpeed |    string     |      700 (ms)      |    no    |
|   cursorColor    |    string     |                    |    no    |
|    showCursor    |    boolean    |        true        |    no    |
|    writeSpeed    |    number     |      80 (ms)       |    no    |
|   deleteSpeed    |    number     |      30 (ms)       |    no    |
|    pauseTime     |    number     |      2000(ms)      |    no    |
|    startDelay    |    number     |       0(ms)        |    no    |
|   cursorDelay    |    number     | same as startDelay |    no    |
|       loop       |    boolean    |        true        |    no    |
|       loop       | CSSProperties |         {}         |    no    |

## Customization

You can apply your own class to the text using the 'className' prop. Also you can select the cursor in CSS via the 'typist-cursor' class or you can apply your own class using the 'cursorClassName' prop.

The component is also compatible with libraries like 'styled-components':

```jsx
import React from 'react';
import Typist from 'react-text-typist';
import styled, { createGlobalStyle } from 'styled-components';

const StyledTypist = styled(Typist)`
  font-size: 4rem;
  color: blue;
`;

export default App() => {
    return (
      <StyledTypist sentences={['First Sentence', 'Second Sentence', 'Third Sentence']} loop={false} />
    );
}
```
