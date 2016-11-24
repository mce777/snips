##Setting up EditorConfig
Webstorm has built-in support for it, so the setup is simple and painless.

Setup consists of creating a `.editorconig`file in your project's root diretory.

That's it. Configurable properties here: http://editorconfig.org/#file-format-details

**example file**

<pre>
# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = tab

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

[*.md]
indent_style = space
trim_trailing_whitespace = false
</pre>
