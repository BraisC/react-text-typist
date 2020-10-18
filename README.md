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

|  Property   |   Type   | Default  | Required |
| :---------: | :------: | :------: | :------: |
|  sentences  | string[] |          |   yes    |
|  className  |  string  |          |    no    |
| showCursor  | boolean  |   true   |    no    |
| writeSpeed  |  number  | 50 (ms)  |    no    |
| deleteSpeed |  number  |  0 (ms)  |    no    |
|  pauseTime  |  number  | 2000(ms) |    no    |
|    loop     | boolean  |   true   |    no    |
