module.exports = {
  compress: true,
  webpack(config, { webpack }) {
    config.module.rules.push({
      // 웹팩설정에 로더 추가함
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
