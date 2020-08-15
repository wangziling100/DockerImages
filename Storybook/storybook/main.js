const path = require('path')
module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: ['../src/**/*.stories.@(js|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.less$/,
      loaders: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: { 
            lessOptions: {javascriptEnabled: true }
          }
        }
      ],
      include: path.resolve(__dirname, '../src/'),
    });
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          // Filter out the default .css and .module.css rules and replace them with our own.
          ...(config.module.rules = config.module.rules.map((f) => {
            if (f.oneOf === undefined) {
              return f
            }

            return {
              oneOf: f.oneOf.map((r) => {
                if (r.test === undefined) {
                  return r
                }

                if (r.test.toString() === '/\\.css$/') {
                  return {
                    test: /\.css$/,
                    exclude: [/\.module\.css$/, /@storybook/],
                    include: path.resolve(__dirname, "../"),
                    use: [
                      'style-loader',
                      {
                        loader: 'css-loader',
                        options: { importLoaders: 1, sourceMap: false },
                      },
                      'postcss-loader',
                    ],
                  }
                }
                if (r.test.toString() === '/\\.module\\.css$/') {
                  return {
                    test: /\.module\.css$/,
                    exclude: [/@storybook/],
                    include: path.resolve(__dirname, "../"),
                    use: [
                      'style-loader',
                      {
                        loader: 'css-loader',
                        options: { importLoaders: 1, sourceMap: false, modules: true },
                      },
                      'postcss-loader',
                    ],
                  }
                }
                return r
              }),
            }
          })),
        ],
      },
    }
    //return config
  },
};
