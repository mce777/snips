## Finding My IP Using the macOS Terminal
Command prompts can also be used to your IP address on a Mac device. To use command prompts, start the macOS Terminal app and enter one of the following commands:

`ipconfig getifaddr en0` - This will return the IP address of your **wireless** connection.

`ipconfig getifaddr en1` - The system will return the IP address for a wired **Ethernet** connection.

`curl ifconfig.me` - This command returns the public IP address of the Mac Terminal.
