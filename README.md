# React-Native-Web broken React components demo

## How to run
```$ yarn```

```$ npm run web``` to start
## Purpose of this demo
This demo project attempts to use 2 react libraries in a react-native-web application. This demo highlights the difference between expected and actual behavior.

### Library 1: [react-dropdown](https://github.com/fraserxu/react-dropdown)
React-dropdown is a drop down UI widget. [Fully working demo](http://fraserxu.me/react-dropdown/). This widget does not show up on screen.

### Library 2: [react-datetime-calendar](https://github.com/deepreact/react-datetime-calendar)
react-datetime-calendar initially errors out with ```BREAKING CHANGE: It's no longer allowed to omit the '-loader' prefix when using loaders.
You need to specify 'file-loader' instead of 'file'.``` so I modified the library to replace file with file-loader at the top of lib/DateTimePicker.js

Once it displays, this is the result:

Expected react-datetime-calendar component                                                  |  Actual react-datetime-calendar component
:------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:
![Alt text](/source/screenshots/RDCexpected.png?raw=true "Expected react-datetime-calendar")|![Alt text](/source/screenshots/RDCactual.png?raw=true "Actual react-datetime-calendar")

## Conclusion
Given the errors, I believe that we may be doing something wrong with babel/webpack. I just don't know what.

