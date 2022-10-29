# Style guidelines

Code guidelines to use in this project

## Interfaces vs Types

- Use **interfaces** to define *component props* or *method arguments*.
- Use **types** to define object/data shapes.

❌  **Don't**

```tsx
// Example 1:
type FooProps {
	onClick: () => void
}

const Foo = (props: FooProps) => { ... }

// Example 2:
interface Element {
	id: string;
	children: Array<Element>
}
const getEnabledElements = (elements: Element[]) => 
```

✅  **Do**

```tsx
interface FooProps {
	onClick: () => void
}

const Foo = (props: FooProps) => { ... }

// Example 2:
type Element {
	id: string;
	children: Array<Element>
}

const getEnabledElements = (elements: Array<Element>) => { ... }
```

## Conditional rendering

- Use `&&` if the left-hand side value is `boolean`
- Use `ternary operator` if the left-hand side value could resolve to a truthy value

❌  **Don't**

```tsx
const showFoo: boolean = shouldRenderFoo();
const bar: Bar[] = [];

// Example 1:
return <>{ showFoo ? <Foo /> : null }</> // `boolean` values don't need a ternary operator

// Example 2:
return <>{ bar.length && <Foo /> }</> // This will display a `zero`
```

✅  **Do**

```tsx
const showFoo: boolean = shouldRenderFoo();
const bar: Bar[] = [];

// Example 1:
// Use `&&` if the left-hand side value is `boolean` 
return <>{ showFoo && <Foo /> }</>

// Example 2:
// Use `ternary operator` if the left-hand side value is an Array
return <>{ bar.length ? <Foo /> : null }</> // This prevents a `zero | 0` from being displayed
```

## Optional functions execution

Preferred explicit **if** condition over **short circuit** expression to execute `optional` component props.

❌  **Don't**

```tsx
onClick && onClick();
```

✅  **Do**

```tsx
if(onClick) onClick();
```

## Order imports

```tsx 
// 1 Libraries
import cn from 'classnames';
import Image from 'next/image';
import { FaTwitterSquare, FaLinkedin, FaWhatsapp, FaMeetup } from 'react-icons/fa';

// 2 @ Libraries
import { FluidContainer, TopBar } from '@makinox/makinox-ui';

// 3 @ Aliases
import { FluidContainer, TopBar } from '~/components/icon';

// 4 @ Local imports
import headerimage from '../../public/assets/BAQJS.png';
```

## Preferred **early return**

**[❌](https://emojipedia.org/cross-mark/)**  **Don't** 

```jsx
const foo(callback) {
	const isValid = getValidResult();
	if(isValid) {
		callback();
	}
}
```

✅  **Do**

```jsx
const foo(callback) {
	const isValid = getValidResult();
	if(!isValid) return;
	callback();
}
```

## Enums for interrelated strings

Combine interrelated strings within a single **enum** value for easy track and reusability.

❌  **Don't**

```tsx
const foo(bar: string, callback: () => void) {
	if(bar !== "completed") return;
	callback();
}
```

✅  **Do**

```tsx
enum Status = {
	completed = "completed"
	pending = "pending"
}

const foo(bar: Status, callback: () => void) {
	if(bar !== Status.completed) return;
	callback();
}
```

## Array types

Preferred as team consensus to use **generic array types** over **short hand square brackets** syntax.

❌  **Don’t**

```tsx
type Element = {
	id: string;
	children: Element[];
}
```

✅  **Do**

```tsx
type Element = {
	id: string;
	children: Array<Element>;
}
```

## Avoid magic variables

Preferred to turn plain values into variables with a meaningful name.

❌  **Don't**

```tsx
setTimeout(() => {
	console.log("hello!")
}, 1500)
```

✅  **Do**

```tsx
const DISPLAY_HELLO_TIMEOUT = 1500;
const DEAFULT_MESSAGE = "hello!";

setTimeout(() => {
	console.log(DEAFULT_MESSAGE)
}, DISPLAY_HELLO_TIMEOUT)
```

## Remove unnecessary comments

Preferred to remove commented code blocks which are not going to be used anymore.

❌  **Don't**

```tsx
const foo() {
	// const getSomeFoo = () => {
	//   console.log('here you have some foo');
	// } 

	return true;
}
```

✅  **Do**

```tsx
const foo() {
	return true;
}
```

## Avoid object “[key]: value” duplicity

This is recommended for situations where a variable has the same name as an object key, so we can reduce verbosity in the code.

❌  **Don't**

```tsx
const study = {
	id: id, // This is the scenario we need to prevent
	age: pacient.age
}
```

✅  **Do**

```tsx
const study = {
	id,
	age: pacient.age
}
```

## Avoid `VoidFunction` type use `() ⇒ void` instead

Preferred to use the `() ⇒ void` type for noop functions instead of `VoidFunction`

❌  **Don't**

```tsx
export const foo = (callback: VoidFunction) => {}
```

✅  **Do**

```tsx
export const foo = (callback: () => void) => {}
```

## Define the styles at the top of the component definition

❌  **Don't**

```tsx
export const Navbar = ({ className, onClick }: NavbarProps) => {

  const [value, setValue] = useState<string>();

  const handleClick = () => {
    if (onClick) onClick();
    setValue('');
  };

  const classes = cn(className, 'e-flex e-items-center e-px-4'); // Middle

  return (
    <nav className={classes} onClick={handleClick}>
      {value}
    </nav>
  );
};
```

✅  **Do**

```tsx
export const Navbar = ({ className, onClick }: NavbarProps) => {
  const classes = cn(className, 'e-flex e-items-center e-px-4'); // Top

  const [value, setValue] = useState<string>();

  const handleClick = () => {
    if (onClick) onClick();
    setValue('');
  };

  return (
    <nav className={classes} onClick={handleClick}>
      {value}
    </nav>
  );
};
```

## Use always the word: “classes” to define the classes styles object

❌  **Don't**

```tsx
export const Navbar = ({ className, onClick }: NavbarProps) => {
  const navbarClassName = cn(className, 'e-flex e-items-center e-px-4');

  const [value, setValue] = useState<string>();

  const handleClick = () => {
    if (onClick) onClick();
    setValue('');
  };

  return (
    <nav className={navbarClassName} onClick={handleClick}>
      {value}
    </nav>
  );
};
```

✅  **Do**

```tsx
export const Navbar = ({ className, onClick }: NavbarProps) => {
  const classes = cn(className, 'e-flex e-items-center e-px-4');

  const [value, setValue] = useState<string>();

  const handleClick = () => {
    if (onClick) onClick();
    setValue('');
  };

  return (
    <nav className={classes} onClick={handleClick}>
      {value}
    </nav>
  );
};
```

## Define the styles using an Object that represents the anatomy of the component

In order to match the `classes` object with the component anatomy, use an object where each key matches with one component’s part.

```tsx
export const Navbar = ({ ariaLabel, className }: NavbarProps) => {
  const classes = {
    container: cn(className, 'e-flex e-items-center e-px-4'),
    header: cn('e-bg-primary-50'),
    body: cn('e-flex e-flex-col'),
    footer: cn('e-text-4xl e-text-primary-50'),
  };

  return (
    <nav aria-label={ariaLabel} className={classes.container}>
      {/* HEADER */}
      <div className={classes.header}></div>

      {/* BODY */}
      <div className={classes.body}></div>

      {/* FOOTER */}
      <div className={classes.footer}></div>
    </nav>
  );
};
```

## Define a function if you need to manage some classes dynamically

In some cases, you will need to modified dynamically some classes depending on a component state or variable. To manage this kind of scenarios, assign a function which receive any amount of params in order to modify the classes.

```tsx
export const Navbar = ({ ariaLabel, className }: NavbarProps) => {
  const classes = {
    container: cn(className, 'e-flex e-items-center e-px-4'),
    header: cn('e-bg-primary-50'),
    body: (isOpen: boolean) =>
      cn('e-flex-col', {
        'e-flex': isOpen,
        'e-hidden': !isOpen,
      }),
    footer: cn('e-text-4xl e-text-primary-50'),
  };

  return (
    <nav aria-label={ariaLabel} className={classes.container} onClick={handleClick}>
      {/* HEADER */}
      <div className={classes.header}></div>

      {/* BODY */}
      <div className={classes.body(true)}></div>

      {/* FOOTER */}
      <div className={classes.footer}></div>
    </nav>
  );
};
```