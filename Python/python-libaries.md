### installing external libraries

#### setup
```
cd path/to/my_python_project
```
```
python -m venv .venv
```
- The `-m` flag stands for "module." It tells the Python interpreter to run the specified library module as a script.
- `venv` is the name of Python's built-in module for creating virtual environments (available in Python 3.3+). This ensures you're using the standard, supported tool for environment management.
- `.venv` This is the directory name where the virtual environment will be created
  - The leading dot (.) is a common convention to make the directory hidden on Linux/macOS, keeping your project folder tidy.

#### activate it
`source .venv/bin/activate`

#### install it
`pip install numpy`

#### use it
```
import numpy as np

# You use the 'np' alias to call the 'array' function
my_array = np.array(python_list)
```
Note: you need to run the python file from within the venv environment

#### deactivate
type `deactivate` in command line to return to normal environment

