const CracoAlias = require('craco-alias');
const sassSourcemapsPlugin = require('./cracoConfig/plugins/craco-sass-sourcemap');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: './src',
      },
    },
    { plugin: sassSourcemapsPlugin },
  ],
};
