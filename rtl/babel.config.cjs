module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' } // <-- only Node version, no 'automatic'
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic' // <-- this is for JSX, correct place
      }
    ]
  ],
};
