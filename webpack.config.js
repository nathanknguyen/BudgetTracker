const config = {
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: "Budget Tracker Application",
      short_name: "Budget App",
      description: "An application that allows you to track budget items.",
      background_color: "#01579B",
      theme_color: "#FFFFFF",
      start_url: "/",
      icons: [
        {
          src: path.resolve("./public/assets/icons/icon-192x192.png"),
          sizes: [192, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
};
module.exports = config;