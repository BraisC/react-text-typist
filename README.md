<p align="center">
<img src="https://github.com/BraisC/react-text-typist/blob/master/banner-gif.gif?raw=true" /> <h1 align="center">React-Text-Typist</h1>
</p>

[![npm](https://img.shields.io/npm/v/react-text-typist?logo=npm&style=flat-square)](https://www.npmjs.com/package/react-text-typist)
[![npm size](https://img.shields.io/bundlephobia/min/react-text-typist?label=size&logo=npm&style=flat-square)](https://www.npmjs.com/package/react-text-typist)
[![npm type definitions](https://img.shields.io/npm/types/react-text-typist?logo=npm&style=flat-square)](https://www.npmjs.com/package/react-text-typist)
[![npm downloads](https://img.shields.io/npm/dw/react-text-typing?logo=npm&style=flat-square)](https://www.npmjs.com/package/react-text-typist)
![github last commit](https://img.shields.io/github/last-commit/BraisC/react-text-typist?logo=github&style=flat-square)
![github contributors](https://img.shields.io/github/contributors/braisc/react-text-typist?logo=github&style=flat-square)
![](https://img.shields.io/badge/PRs-Welcome-brightgreen?logo=github&style=flat-square&logoColor=adbfb)
[![dependency](https://img.shields.io/npm/dependency-version/react-text-typist/peer/react?style=flat-square)](https://reactjs.org/)
[![](https://img.shields.io/badge/Made%20for-React-61bdfb?logo=react&style=flat-square&logoColor=adbfb)](https://reactjs.org/)

A simple React component to create typing animations with multiple sentences.

I you need a typing effect on your app this package may be what you need :)

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
|   cursorSmooth   |    boolean    |       false        |          Cursor smooth animation           |    no    |
|    showCursor    |    boolean    |        true        |            Hide or show cursor             |    no    |
|    typingSpeed   |    number     |      80 (ms)       |  Typing speed (ms between each character)  |    no    |
|  deletingSpeed   |    number     |      30 (ms)       | Deleting speed (ms between each character) |    no    |
|    pauseTime     |    number     |      1000(ms)      |          Pause between sentences           |    no    |
|    startDelay    |    number     |       0(ms)        |         Delay before start typing          |    no    |
|   cursorDelay    |    number     | same as startDelay | Delay before showing cursor for first time |    no    |
|       loop       |    boolean    |        true        |      Choose if you want infinite loop      |    no    |
|      style       | CSSProperties |         {}         |    Inline CSS to apply to the component    |    no    |
|    defaultText   |    string     |         ''         |  Default text to render, useful with SSR   |    no    |
|   onTypeFinish   |    Function   |                    |        Callback when finished typing       |    no    |

## Customization

You can apply your own class to the text and the cursor using the 'className' prop. Also you can select the cursor in CSS via the 'typist-cursor' class or you can apply your own class just to the cursor using the 'cursorClassName' prop.

```jsx
export default App() => {
    return (
      <Typist className={'myTypist'} cursorClassName={'myCursor'} sentences={['First Sentence', 'Second Sentence', 'Third Sentence']} loop={false} />
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
