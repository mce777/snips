// example working config
module.exports = {
    roots: ['src', 'test'],
    moduleFileExtensions: ['js', 'vue', 'ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
      '.*\\.vue$': 'vue-jest',
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
        'jest-transform-stub',
      '\\.(gql|graphql)$': 'jest-transform-graphql',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(vue-simplemde|date-fns)|(vuetify)/)',
    ],
}

// these packages were added to your package.json (here in var so IDE doesn't throw a fit)
const packageJSON = {
    "devDependencies": {
        "@babel/core": "^7.16.7",
        "@babel/preset-env": "^7.16.7",

        "babel-core": "^7.0.0-bridge.0",
        "babel-jest": "^23.6.0",

        "ts-jest": "^26.5.6",
        "vue-jest": "^4.0.1",
    },
    // this was especially key to getting things working
    "babel": {
        "presets": [
            "@babel/preset-env"
        ]
    }
}

// Aron made the good point that this is why frameworks are nice, because they
// give you a testing setup out-of-the-box, and you don't have to spend time getting a basic setup going