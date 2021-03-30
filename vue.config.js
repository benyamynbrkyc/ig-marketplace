const fs = require('fs');

module.exports = {
  devServer: {
    port: 3001,
    //  public: 'imaclocalhost.local:3001',  That solved it
    // https: {
    //   key: fs.readFileSync('./ssl/server.key'),
    //   cert: fs.readFileSync('./ssl/server.crt')
    // }
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== 'production' ? true : false,
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
};
