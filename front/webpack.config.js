module.exports = {
  // ... other webpack config
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    // ... other resolve config
  },
  // ... rest of the config
};
