# Fast Food Order

In this project, you will use the useReducer hook to keep track of the state of the app. The screen shows a fast food order, with buttons to add and subtract from the quantity for each food item. It displays the cost of the total order. Here is an example:

![fastFood-1.PNG](https://github.com/bell-kevin/fastFoodOrder/blob/main/readMeExamplePictures/fastFood-1.PNG)     ![fastFood-2.PNG](https://github.com/bell-kevin/fastFoodOrder/blob/main/readMeExamplePictures/fastFood-2.PNG)

Notice that if the count for the food item is 0, the button to subtract is disabled -- the user can't try to purchase a negative number of items. The screen needs a background color that is not white; the buttons are 2 different colors. The prices for each food item are listed at the top.

Do not use the useState hook here, only the useReducer hook. There are a lot of transactions to manage the state, the dispatch options -- one to add to hamburgers and another to subtract from hamburgers, for example. Remember that if you "spread" the state in the return statement, its individual variables are exposed, and if you then list one of those individual variables, its value replaces what was in the state variable. For example, if the state contains variables "qtyHat" and "qtyShirt", you can add 1 to the value of the qtyHat variable like this:

   return { ...state, qtyHat: state.qtyHat + 1 }

In each "case" in the reducer function, that will be the easiest way to change the state, by spreading it out, then overwriting a specific variable or two. Be sure to include the total value for the cost of all items in the state.

The buttons to remove 1 from the quantity need to be coded with a parameter for "disabled" if that state variable is <= 0, like this:

   disabled={state.qtyHat <= 0}

Take two screenshots as shown above, one for the launch of the app, one with some items selected. You can select the numbers and items you want to use in the second screenshot.

 

Submission: Zip together the root folder and the 2 screenshots, and submit the single zipped folder.

![p](https://github.com/bell-kevin/fastFoodOrder/blob/main/screenshots/1.PNG)

![p](https://github.com/bell-kevin/fastFoodOrder/blob/main/screenshots/2.PNG)

## How to:

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

https://reactnative.dev/docs/intro-react

Check out App.js here in the code files for the computer algorithm code.

## Storing Projects

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
