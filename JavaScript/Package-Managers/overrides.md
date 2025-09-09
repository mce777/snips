## Overriding Packages 
To ensure proper functionality, you may need to occasionally override packages.

Sometimes this may be necessary for **security reasons**, e.g. one of your dependencies has been compromised.
- check what the current released version is on npm
- find out what the last safe version was, OR which version was first affected
- There are minor differences in the various package managers (see below)
  - In this case `2.1.0` is the version we want to avoid
  - This will also work on sub dependencies!

#### Yarn
```
{
  "name": "your-project",
  "version": "1.0.0",
  "dependencies": {
    "some-package": "1.2.3",
    "another-package": "4.5.6"
  },
  "resolutions": {
    "package-to-override": "<2.1.0",
  }
}
```

#### NPM
```
{
  "name": "your-project",
  "version": "1.0.0",
  "dependencies": {
    "some-package": "1.2.3"
  },
  "overrides": {
    "package-to-override": "<2.1.0",
  }
}
```

#### PNPM
```
{
  "name": "your-project",
  "version": "1.0.0",
  "dependencies": {
    "some-package": "1.2.3"
  },
  "pnpm": {
    "overrides": {
      "package-to-override": "<2.1.0",
    }
  }
}
```
