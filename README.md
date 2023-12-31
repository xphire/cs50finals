# URL TO QRCODE 
#### Video Demo: https://youtu.be/n4aF_JSkPA4
#### Description:

This project was created using React, Material UI, and Bootstrap CSS 

Other NPM Packages used include nanoId, validator, qrCode

### Why React?
I needed to store the previously generated URL within the front end (the project has no backend components.)
Using react states fits this narrative. In conjunction with the local storage, I was able to achieve this. 

The technical implementation includes the following:
- There is a placeholder image that is shown (this is obtained from https://picsum.photos/seed/picsum/200/300, thanks to them of course)
- Beneath this placeholder image, there is an input field. This was created using the material UI TextField component. The TextField is disabled if the URL is an empty string
- Beneath the TextField component, we have the generate QR button. This was made with the material UI button component. Towards the end of the button, we have an icon. It is added to the Button component using the endIcon property.
- The aim here is to have a place to see previous URLs and view plus download the QR code generated for these URLs.
- It was made basically with the Table component and its other sub-components.
- Each row is numbered and contains two buttons.
- The view button gives a preview of the previously generated qrCode
- The download button downloads a jpg file of the encoded url

### and material UI?
I needed to explore something I had not used before. Looking at the powerful components of this library and its extensive documentation, I was able to achieve my aim.


### and nano id?
This helped me generate a unique ID for each of the URLs/QR codes generated. It also helped to ensure that you cannot convert a URL that
you already converted. Instead, you can either view or perhaps download the QR code

### and validator?
The validator package was leveraged to ensure that the URLs being entered are correct in the sense that they conform to the general forms of URL 

### and qr code?
Thanks to this package, I was able to generate the actual QR images.

............To the folders!

## The src folder.
It contains the component subfolder.

The Display History component helps in displaying the history or record of generated QR codes. This is within the limit of when the browser is active
(not to be confused with tab activity)

The Footer component displays the footer part of the page

The headers component displays the header part of the page

The Main component incorporates all other components aside from the header and the footer.

### App.css
A little bit of media queries here and some other minimalistic stylings. Thanks to Bootstrap, I need not write a lot of custom CSS




