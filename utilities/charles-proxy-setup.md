## Setting up Charles Proxy for debugging
1. *Help Menu > SSL Proxying > Install Charles Root Certificate*
2. enable the certificate in your system settings (keychain)
3. make sure the website you're proxing has *SSL Proxying* enabled
4. find the file you want to debug, and copy the contents to a LOCAL file
(easiest way to do this is right-click and "save response")
5. right-click on the file, and "map local" and connect to your local file.
6. do a console.log, alert, or similar to test the connection
7. start debugging
