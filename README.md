# ngx-typed2

![NPM Version](https://img.shields.io/npm/v/ngx-typed2.svg?style=flat)
![NPM Downloads](https://img.shields.io/npm/dm/ngx-typed2.svg)
![GitHub release](https://img.shields.io/github/release/shiv-source/ngx-typed2)
![License](https://img.shields.io/github/license/shiv-source/ngx-typed2)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/shiv-source/ngx-typed2)](https://github.com/shiv-source/ngx-typed2/pulls)

ngx-typed2 is an Angular library designed to seamlessly integrate Typed.js functionalities into Angular applications, compatible with both Single Page Applications (SPA) and Server-Side Rendering (SSR)

## Installation

You can install ngx-typed2 via npm:

```bash
npm install ngx-typed2
```

You can install ngx-typed2 via yarn:

```bash
yarn add ngx-typed2
```


You can install ngx-typed2 via pnpm:

```bash
pnpm add ngx-typed2
```

## Usage

### Import the Module

Import the `NgxTypedJsModule` into your Angular module:

```typescript
import { NgxTypedJsModule } from 'ngx-typed2';

@NgModule({
  imports: [
    NgxTypedJsModule
  ]
})
export class AppModule { }
```

### Use in the Component

Use the `ngx-typed2` component in your Angular templates:

```html
<ngx-typed2
  [strings]="['Hello', 'World']"
  typeSpeed="50"
  backSpeed="30"
  [loop]="false"
  [showCursor]="true"
  cursorChar="|"
  [autoInsertCss]="true"
></ngx-typed2>
```

### Available Inputs

| Input                | Type         | Default     | Description                                          |
|----------------------|--------------|-------------|------------------------------------------------------|
| strings              | string[]     | []          | Array of strings to be typed out sequentially.      |
| stringsElement       | string       | undefined   | String element to be typed out.                      |
| typeSpeed            | number       | 100         | Typing speed (in milliseconds per character).        |
| startDelay           | number       | undefined   | Delay before typing starts (in milliseconds).        |
| backSpeed            | number       | 100         | Backspacing speed (in milliseconds per character).   |
| smartBackspace       | boolean      | undefined   | Enable smart backspacing for natural typing effects. |
| shuffle              | boolean      | undefined   | Enable random string selection.                      |
| backDelay            | number       | 500         | Delay between characters during backspacing.         |
| fadeOut              | boolean      | undefined   | Enable fade-out effect.                              |
| fadeOutClass         | string       | undefined   | CSS class for fade-out effect.                       |
| fadeOutDelay         | number       | 500         | Delay before fade-out (in milliseconds).             |
| loop                 | boolean      | true        | Control looping of typing animation.                 |
| loopCount            | number       | undefined   | Specify the number of loop counts.                   |
| showCursor           | boolean      | undefined   | Toggle cursor visibility.                            |
| cursorChar           | string       | undefined   | Customize cursor appearance.                         |
| autoInsertCss        | boolean      | undefined   | Automatically insert Typed.js CSS.                   |
| attr                 | string       | undefined   | Additional attributes.                               |
| bindInputFocusEvents | boolean      | undefined   | Bind input focus events.                             |
| contentType          | string       | undefined   | Specify content type (e.g., 'html', 'text').         |
| cursorColor          | string       | undefined   | Customize cursor color.                              |
| ngClass              | string       | undefined   | Apply custom classes.                                |


### Available Outputs


| Output                  | Event Emitted Data                             | Description                                              |
|-------------------------|-------------------------------------------------|----------------------------------------------------------|
| onBeginEvent            | Typed                                           | Triggered when typing begins.                            |
| onCompleteEvent         | Typed                                           | Triggered when typing completes.                         |
| preStringTypedEvent     | { arrayPos: number, self: Typed }              | Triggered before a string is typed.                     |
| onStringTypedEvent      | { arrayPos: number, self: Typed }              | Triggered after a string is typed.                      |
| onLastStringBackspacedEvent | Typed                                       | Triggered when the last string is backspaced.           |
| onTypingPausedEvent     | { arrayPos: number, self: Typed }              | Triggered when typing is paused.                        |
| onTypingResumedEvent    | { arrayPos: number, self: Typed }              | Triggered when typing resumes after being paused.       |
| onResetEvent            | Typed                                           | Triggered when typing is reset.                         |
| onStopEvent             | { arrayPos: number, self: Typed }              | Triggered when typing is stopped.                       |
| onStartEvent            | { arrayPos: number, self: Typed }              | Triggered when typing starts for a particular string.   |
| onDestroyEvent          | Typed                                           | Triggered when the ngx-typed2 instance is destroyed.     |


### Available Methods

| Method    | Description                                       |
|-----------|---------------------------------------------------|
| start()   | Initiates the typing animation.                   |
| stop()    | Pauses the typing animation.                      |
| reset()   | Resets the typing animation to its initial state. |
| toggle()  | Toggles between starting and stopping the typing animation. |
| destroy() | Stops the typing animation and cleans up any resources used. |


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Contact

- **Author:** Shiv Kumar
- **Website:** [https://shivkumar.me](https://shivkumar.me)
- **Email:** [hello@shivkumar.me](mailto:hello@shivkumar.me)
- **Issue Tracker:** [GitHub Issues](https://github.com/shiv-source/ngx-typed2/issues)