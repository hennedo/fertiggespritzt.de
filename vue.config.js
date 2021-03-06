// vue.config.js
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        devServer: {
            proxy: {
                "/api": {
                    "target": "https://rki-vaccination-data.vercel.app/",
                    "secure": false,
                    "changeOrigin": true
                },
            }
        }
    }
};

