exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: [/node_modules\/p5/, /node_modules\\p5/],
            use: loaders.null()
          }
        ]
      }
    });
  }
};
