# React Text Typist

![npm](https://img.shields.io/npm/v/react-text-typist?logo=npm&style=flat-square)
![npm size](https://img.shields.io/bundlephobia/min/react-text-typist?label=size&logo=npm&style=flat-square)
![npm downloads](https://img.shields.io/npm/dw/react-text-typist?logo=npm&style=flat-square)


A simple React component to create typing animations with multiple sentences.

## Install

```shell
npm install react-text-typist --save
```

## Demos

### <a href="https://react-text-typist.braiscao.dev" target="_blank">Demo Website</a>

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

|     Property     |     Type      |      Default       |                Description                 | Required |
| :--------------: | :-----------: | :----------------: | :----------------------------------------: | :------: |
|    sentences     |   string[]    |                    |         Array of sentences to type         |   yes    |
|    className     |    string     |                    |      Classname to customize component      |    no    |
| cursorClassName  |    string     |                    |       Classname to customize cursor        |    no    |
| cursorBlinkSpeed |    string     |      700 (ms)      |     Duration of cursor blink animation     |    no    |
|   cursorColor    |    string     |                    |              Color of cursor               |    no    |
|    showCursor    |    boolean    |        true        |            Hide or show cursor             |    no    |
|    writeSpeed    |    number     |      80 (ms)       |  Typing speed (ms between each character)  |    no    |
|   deleteSpeed    |    number     |      30 (ms)       |               Deleting speed               |    no    |
|    pauseTime     |    number     |      1000(ms)      |          Pause between sentences           |    no    |
|    startDelay    |    number     |       0(ms)        |         Delay before start typing          |    no    |
|   cursorDelay    |    number     | same as startDelay | Delay before showing cursor for first time |    no    |
|       loop       |    boolean    |        true        |      Choose if you want infinite loop      |    no    |
|      style       | CSSProperties |         {}         |    Inline CSS to apply to the component    |    no    |

## Customization

You can apply your own class to the text and the cursor using the 'className' prop. Also you can select the cursor in CSS via the 'typist-cursor' class or you can apply your own class just to the cursor using the 'cursorClassName' prop.

```jsx
export default App() => {
    return (
      <StyledTypist className={'myTypist'} cursorClassName={'myCursor'} sentences={['First Sentence', 'Second Sentence', 'Third Sentence']} loop={false} />
    );
}
```

```css
/* Default cursor class */
.typist-cursor {
  font-size: 16px;
  color: red;
}
/* This will apply to text and cursor */
.myTypist {
  font-size: 16px;
  color: red;
}

/* This will apply only to cursor */
.myCursor {
  font-size: 16px;
  color: red;
}
```

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
