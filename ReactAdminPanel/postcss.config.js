module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true
      },
      autoprefixer: { grid: true }
    }),
    // Add other plugins if needed
  ]
}
