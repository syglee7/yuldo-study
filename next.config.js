module.exports = {
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    config.module.rules.push({
      // 웹팩설정에 로더 추가함
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return {
      ...config,
      mode: prod ? "production" : "development",
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };
  },
};
