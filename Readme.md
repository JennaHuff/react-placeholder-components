# react-placeholder-components

A collection of React components that generate placeholder content for your web applications.

## Installation

```bash
npm install react-placeholder-components --save
```

## Usage/Examples

```jsx
import { Lorem, Address, Name } from "react-placeholder-components";

function App() {
    <>
        <Lorem words={8} />
        // <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>
        <Lorem chars={20} tag="p" />
        // <p>Lorem ipsum dolor si</p>
        <Address />
        // <>1 rue de la Paix, 75008 Paris</>
        <Address country="US" tag="a" />
        // <a>123 Main St, Springfield, IL 62701</a>
        <Name tag="div" />
        // <div>Arthur Louis</div>
        <Name country="US" tag="p" />
        // <p>John Doe</p>
    </>;
}
```

## Countries

Country props accept the following countries:

| Country Code | Country Name   |
| ------------ | -------------- |
| FR           | France         |
| US           | United States  |
| UK           | United Kingdom |
| DE           | Germany        |
| NL           | Netherlands    |
| IT           | Italy          |

## Types

Typescript types are included in the package for now.
