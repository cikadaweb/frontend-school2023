const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].js", // название выходного файла равно полю из entry
    path: path.resolve(__dirname, "dist"), // __dirname - абсолютный путь
    clean: true, // очистить папку dist
  },
  devServer: {
    port: 3000,
    watchFiles: ["./dist"],
    open: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:|jpg|jpeg|webp|png|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/images/[name][ext]",
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
      },
      {
        test: /\.(?:|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
        },
      },
      // SCSS loader
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            // Add autoprefixes to CSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      browsers: "last 10 versions",
                    },
                  ],
                ],
              },
            },
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "ie 11" }]],
          },
        },
      },
    ],
  },
  plugins: [
    // CSS plugin
    new MiniCssExtractPlugin({
      filename: "style.scss",
    }),
    // HTML plugin
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin создает index.html в директории с бандлом
      title: "main", // и автоматически добавляет в него ссылку на бандл.
      template: "./src/index.html",
    }),
  ],
};
