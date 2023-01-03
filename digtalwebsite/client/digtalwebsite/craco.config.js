const path = require("path");
const BundleAnalyzerPlugin =
   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
   webpack: {
      alias: {
         "@components": path.resolve(__dirname, "src/components/"),
         "@assets": path.resolve(__dirname, "src/assets/"),
         "@hooks": path.resolve(__dirname, "src/hooks/"),
         "@i18n": path.resolve(__dirname, "src/i18n/"),
         "@layouts": path.resolve(__dirname, "src/layouts/"),
         "@pages": path.resolve(__dirname, "src/pages/"),
         "@utils": path.resolve(__dirname, "src/utils/")
      },
      plugins: [new BundleAnalyzerPlugin({ analyzerMode: "server" })]
   }
};
