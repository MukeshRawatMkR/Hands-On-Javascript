//2. BOM and intro to window keyboard events

/*
BOM means Browser Object Model, it represents the browser's environment and provides a way to interact with the browser window.

the functionalities provided by BOM include:

1. Window management: BOM allows you to open, close, and manipulate browser windows and tabs.
2. Navigation: You can control the browser's navigation history, such as going back and forward in the user's browsing history.
3. Screen information: BOM provides information about the user's screen, such as its size and color depth.
4. Location: You can access and manipulate the URL of the current page using the location object.
5. Timers: BOM allows you to set timers and intervals using the setTimeout and setInterval functions.
and many more.
*/


/*
Functionalities of browsers are represented by the BOM, features of BOM are:
1. window object: The window object represents the browser window and provides methods to control it, such as opening and closing windows, and accessing the browser's history.

2. navigator object: The navigator object contains information about the browser and the operating system, such as the browser name, version, and platform.

3. screen object: The screen object provides information about the user's screen, such as its width, height, and color depth.

4. location object: The location object represents the current URL of the browser window and provides methods to manipulate it, such as changing the URL or reloading the page.

5. history object: The history object represents the user's browsing history and provides methods to navigate through it, such as going back and forward.

6. URL object: The URL object represents the current URL of the browser window and provides methods to manipulate it, such as changing the URL or reloading the page.

and many more.
*/


//those all features that are mentioned above are provided by runtime environment which is browser to the JavaScript code.



//Demo code:

//Window object
console.log(window.innerWidth);
console.log(window.innerHeight);
window.location.assign("https://www.leetcode.com");// to redirect
window.localStorage

//Navigator object
console.log(navigator.userAgent);
navigator.geolocation.getCurrentPosition((position) => {//it expects a callback function.
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});

//Screen object
console.log(screen.width);
console.log(screen.height);

//Location object
console.log(location.href);

//History object
console.log(history.length);

//URL object
console.log(new URL(location.href));


//If some variable or function is not available in the current scope, it'll look into the window object.