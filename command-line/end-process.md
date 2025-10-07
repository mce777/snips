### Terminating Processes
`sudo lsof -iTCP:8080 -sTCP:LISTEN`
- this will give you the PID

`kill 12017(whatever the PID is)`

If that doesn't work, use `kill -9 12017`

The kill -9 command sends the SIGKILL signal to a process, forcing the operating system's kernel to immediately terminate it without giving the process a chance to clean up or save its state. Unlike the default SIGTERM signal (or kill without an argument), which can be ignored by a process, SIGKILL is a non-catchable and non-ignorable signal, ensuring the process is killed immediately. 
