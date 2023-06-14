/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path');

module.exports = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        JWT_SECRET: process.env.JWT_SECRET,
      },
      
  webpack: (config) => {
    config.module.rules.push({
      test: /canvas[\\/]build[\\/]Release[\\/].*\.node$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/chunks/[name].[hash].[ext]',
          outputPath: 'static/chunks',
          esModule: false,
        },
      },
    });

    config.resolve.alias['canvas'] = path.join(__dirname, 'node_modules/canvas');

    return config;
  },
};

  