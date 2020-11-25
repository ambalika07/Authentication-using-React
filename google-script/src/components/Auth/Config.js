module.exports = {
    appId: 'XXX (ENTER HERE)', //enter app Id from the app created using google api 
    redirectUri: 'http://localhost:3000', // enter the redirect URI 
    scopes: [
      'user.read' // enter the required scopes from goodle api
    ]
  };
  
  // Note: Google auth script is in index.html file