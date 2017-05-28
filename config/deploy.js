module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'gavant-application',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
