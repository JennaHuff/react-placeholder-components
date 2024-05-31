This component library provides placeholders for Lorem Ipsum texts, names and addresses.

```jsx
<Lorem words={8} /> // <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>
<Lorem chars={20} tag="p" /> // <p>Lorem ipsum dolor si</p>

<Address /> // <>1 rue de la Paix, 75008 Paris</>
<Address country="US" tag="a" /> // <a>123 Main St, Springfield, IL 62701</a>

<Name tag="div" /> // <div>Arthur Louis</div>
<Name country="US" tag="p" /> // <p>John Doe</p>
```

## Installation

```bash
npm install react-placeholder-components --save
```

## Countries

The library provides placeholders for the following countries:

-   FR: France
-   US: United States
-   UK: United Kingdom
-   DE: Germany
-   NL: Netherlands
-   IT: Italy
