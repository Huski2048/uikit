#  Husky UIkit

Husky UIkit is a set of React components and hooks used to build pages on Husky apps. It also contains a theme file for dark and light mode.

## Install

`npm install @huskifinance/huski-frontend-uikit`

## Setup

### Theme

Before using Huski UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@huskifinance/huski-frontend-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@huskifinance/huski-frontend-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
