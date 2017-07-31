# React-Native-Web broken React components demo

## How to run
```$ yarn```

```$ npm run web``` to start
## Purpose of this demo
This demo project attempts to use 4 react libraries in a react-native-web application. Each library does not work as expected. This demo highlights the difference between expected and actual behavior.

### Library 1: [react-datetime](https://github.com/YouCanBookMe/react-datetime)
React-datetime is a UI widget which allows a user to pick from a calendar and set a time of day. This is the widget you will see when you run the demo, and you will notice several features are broken compared to when this widget is running without react-native-web. See [this codepen](https://codepen.io/simeg/pen/mEmQmP) for a fully working demo.

Problems:

* calendar locked in dropped state
* numbers outside of current month are not grayed
* cells do not highlight on mouseover
* time choosers are not aligned
* much of the styling is lost
 
Expected react-datetime componant:

Calendar tab                                                                       |  Time tab
:---------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:
![Alt text](/source/screenshots/expectedCal.png?raw=true "Expected calendar tab")  |  ![Alt text](/source/screenshots/expectedTime.png?raw=true "Expected time tab")

Actual react-datetime componant:

Calendar tab                                                                       |  Time tab
:---------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:
![Alt text](/source/screenshots/actualCal.png?raw=true "Actual calendar tab")      |  ![Alt text](/source/screenshots/actualTime.png?raw=true "Actual time tab")

### Library 2: [react-dropdown](https://github.com/fraserxu/react-dropdown)
React-dropdown is a drop down UI widget. [Fully working demo](http://fraserxu.me/react-dropdown/). This widget is not even showing up in the demo project.

### Library 3: [input-moment](https://github.com/wangzuo/input-moment)
[Fully working demo](http://wangzuo.github.io/input-moment/). This component is currently commented out at line 21 or file source/components/App/index.js. Remove the comment to observe the error.

### Library 4: [react-datetime-calendar](https://github.com/deepreact/react-datetime-calendar)
react-datetime-calendar errors out, but can be fixed by changing "file" to "file-loader" in node_modules, at the top of lib/DateTimePicker.js but once it displays, it has similar visual issues as react-datetime.

Expected react-datetime-calendar component                                                  |  Actual react-datetime-calendar component
:------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:
![Alt text](/source/screenshots/RDCexpected.png?raw=true "Expected react-datetime-calendar")|![Alt text](/source/screenshots/RDCactual.png?raw=true "Actual react-datetime-calendar")

## Conclusion
Given the errors, I believe that we may be doing something wrong with babel/webpack. I just don't know what.

