# Fast Food Order

In this project, you will use the useReducer hook to keep track of the state of the app. The screen shows a fast food order, with buttons to add and subtract from the quantity for each food item. It displays the cost of the total order. Here is an example:

fastFood-1.PNG     fastFood-2.PNG

Notice that if the count for the food item is 0, the button to subtract is disabled -- the user can't try to purchase a negative number of items. The screen needs a background color that is not white; the buttons are 2 different colors. The prices for each food item are listed at the top.

Do not use the useState hook here, only the useReducer hook. There are a lot of transactions to manage the state, the dispatch options -- one to add to hamburgers and another to subtract from hamburgers, for example. Remember that if you "spread" the state in the return statement, its individual variables are exposed, and if you then list one of those individual variables, its value replaces what was in the state variable. For example, if the state contains variables "qtyHat" and "qtyShirt", you can add 1 to the value of the qtyHat variable like this:

   return { ...state, qtyHat: state.qtyHat + 1 }

In each "case" in the reducer function, that will be the easiest way to change the state, by spreading it out, then overwriting a specific variable or two. Be sure to include the total value for the cost of all items in the state.

The buttons to remove 1 from the quantity need to be coded with a parameter for "disabled" if that state variable is <= 0, like this:

   disabled={state.qtyHat <= 0}

Take two screenshots as shown above, one for the launch of the app, one with some items selected. You can select the numbers and items you want to use in the second screenshot.

 

Submission: Zip together the root folder and the 2 screenshots, and submit the single zipped folder.

![p](https://github.com/bell-kevin/fastFoodOrder/blob/main/screenshots/1.PNG)

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
