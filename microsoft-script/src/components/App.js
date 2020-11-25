import React from 'react';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello, please Sign-In with microsoft:</h1>
                <mgt-msal-provider 
                    client-id="XXX (ENTER HERE)" // enter the client Id of Azure app 
                    scopes="user.read" // Add all the required scopes from the Azure graph
                    redirect-uri="http://localhost:3000" // enter redirect uri mentioned in the Azure app 
                    authority="https://login.microsoftonline.com/XXX (ENTER HERE)" // enter the tenant ID in the end 
                    >
                </mgt-msal-provider>
                <mgt-login></mgt-login>

                {/* Other Test Components:
                <mgt-tasks></mgt-tasks>
                <mgt-person person-query="me" view="twoLines"></mgt-person> 
                <mgt-people-picker></mgt-people-picker> */}
        </div>
        );
    }

}

export default App;