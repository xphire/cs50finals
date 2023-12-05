# URL TO QRCODE 

This project was created using React, Material UI, and Bootstrap CSS 

Other NPM Packages used include nanoId, validator, qrCode

### Why React?
I needed to store the previously generated URL within the front end (the project actually has no backend components.)
Using react states actually fits this narrative. In conjusction with the local storage, I was able to achieve this. 

### and material UI?
I needed to explore somethinh I had not used before. Looking at the powerful components in this library and its extensive documentation, I was able to achieve my aim.


### and nano id?
This helped me in generating a unique ID for each of the urls/qr code generated. It also helped to ensure that you cannot convert a url that
you already converted. Instead, you can either view or perhaps download the qrcode

### and validator?
The validator package was leveraged to ensure that the urls being entered are correct in the sense that they conform to the general forms of URL 

### and qr code?
Thanks to this package, I was able to generate the actual QR images.

............To the folders!

## The src folder.
It contains the component subfolder.

The Display History component helps in displaying the history or record of generated qr codes. This is within the limit of when the browser is active
(not to be confused with tab activity)

The Footer component displays the footer part of the page

The headers component displays the header part of the page

The Main component incorporates all other components aside the header and the footer.

### App.css
A little bit of media queries here ad some other minimalistic stylings. Thanks to bootstrap, I need not write a lot of custom CSS




