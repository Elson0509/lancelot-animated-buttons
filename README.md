# lancelot-animated-buttoms

> Animated buttoms for React.js

[![NPM](https://img.shields.io/npm/v/lancelot-animated-buttoms.svg)](https://www.npmjs.com/package/lancelot-animated-buttoms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lancelot-animated-buttoms
```

## Usage

### 1. Animated Ellipsis button

```jsx
import React from 'react'
import {LancelotEllipsisButton} from 'lancelot-animated-buttoms'

const index = (props) => {
  return (
      <LancelotEllipsisButton/>
  )
}
```
#### Result
<img src="images/01.gif" alt="Lancelot Ellipsis Button"/>

### Customization
The table below shows the properties to customize the button:

| Property      | Purpose       | Type         | Possible values |  Default     |
| ------------- |:-------------:|:------------:|:---------------:|:------------:|
| animationTime      | Duration of the rotation effect after clicking in seconds     |number     |any positive number        |.5     |
| background      | Background color of the button     |string     |colors        |White     |
| buttonSize      | Size of the button     |number     |1-10        |3     |
| checked      | Button checked or not     |boolean     |true/false        |false     |
| clicked      | To call function when clicked     |function     |function        |null     |
| crossColor      | Color of the cross     |string     |colors        |red     |
| cursor      | Type of cursor when hovering     |string     |Cursor types (help, wait, pointer, grab, etc)        |pointer     |
| disableHoverEffect      | To disable (if true) the effect when mouse is over     |boolen     |true/false        |false     |
| ellipsisColor      | Color of the ellipsis     |string     |colors        |Black     |
| hoverEffectTime      | Duration of the effect when hovering in seconds     |number     |any positive number        |.5     |
| rotationIntensity      | intensity of the rotation when clicked     |number     |1-10        |3     |

### Example of customization
```jsx
  <LancelotEllipsisButton
    animationTime={1}
    background="#78c2fa"
    buttonSize={8}
    clicked={()=>console.log("Lancelot!")}
    crossColor="#9dfa78"
    disableHoverEffect
    ellipsisColor="red"
    rotationIntensity={10}
  />
```

#### Result
<img src="images/02.gif" alt="Customized Lancelot Ellipsis Button"/>

### 2. Animated Hamburguer button

```jsx
import React from 'react'
import {LancelotHamburguerButton} from 'lancelot-animated-buttoms'

const index = (props) => {
  return (
      <LancelotHamburguerButton/>
  )
}
```
#### Result
<img src="images/03.gif" alt="Lancelot Hamburguer Button"/>

### Customization
The table below shows the properties to customize the button:

| Property      | Purpose       | Type         | Possible values |  Default     |
| ------------- |:-------------:|:------------:|:---------------:|:------------:|
| animationTime      | Duration of the rotation effect after clicking in seconds     |number     |any positive number        |.5     |
| background      | Background color of the button     |string     |colors        |White     |
| buttonSize      | Size of the button     |number     |1-10        |3     |
| checked      | Button checked or not     |boolean     |true/false        |false     |
| clicked      | To call function when clicked     |function     |function        |null     |
| crossColor      | Color of the cross     |string     |colors        |red     |
| cursor      | Type of cursor when hovering     |string     |Cursor types (help, wait, pointer, grab, etc)        |pointer     |
| disableHoverEffect      | To disable (if true) the effect when mouse is over     |boolen     |true/false        |false     |
| hamburguerColor      | Color of the hamburguer     |string     |colors        |Black     |
| hoverEffectTime      | Duration of the effect when hovering in seconds     |number     |any positive number        |.5     |
| rotationIntensity      | intensity of the rotation when clicked     |number     |1-10        |3     |

### Example of customization
```jsx
  <LancelotHamburguerButton
    animationTime={2}
    background="#ccc"
    buttonSize={8}
    clicked={()=>console.log("Lancelot!")}
    crossColor="#238a0e"
    disableHoverEffect
    hamburguerColor="purple"
    rotationIntensity={10}
  />
```

#### Result
<img src="images/04.gif" alt="Customized Lancelot Hamburguer Button"/>

## License

MIT © [Elson Ramos](https://github.com/Elson0509)
