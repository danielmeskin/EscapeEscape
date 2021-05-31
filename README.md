# ![escapeescape](https://user-images.githubusercontent.com/33349740/116769883-7a6a0f80-aa0d-11eb-9d08-7e9221e8d743.png)
# EscapeEscape
Make sensitive websites safe to visit

## Usage

EscapeEscape is quite simple. Simply include [main.js](Javascript/main.js) on any page you need it on. 

With jsDelivr: `<script src="https://cdn.jsdelivr.net/gh/ellygaytor/escapeescape@latest/Javascript/main.js"></script>`

EscapeEscape defines the `escape()` function, which can be called using a button, to make its functionality available on mobile devices. 

You can alter the pages that EscapeEscape will open by modifying the top two lines of the file.

## Use Case

EscapeEscape allows users to quickly leave a website, disguising their previous activity. This is useful for websites that contain information of a sensitive nature, or that may put their viewer at risk. For example, a website containing information for domestic abuse victims can implement EscapeEscape, to allow visitors to quickly leave if their abuser returns. 

## Limitations

EscapeEscape is written in Javascript, and therefore a user with Javascript disabled will not be able to use it. It is possible to implement a simpler system without Javascript by which a large link will open a new tab or window (to prevent the use of the back button). 
