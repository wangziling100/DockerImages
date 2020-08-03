const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.js'],
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
    return config
  },
};
