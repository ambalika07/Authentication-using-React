import React from 'react';
import GoogleAuth from './GoogleAuth'

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello, please Sign-In with google:</h1>
                <GoogleAuth/>

        </div>
        );
    }

}

export default App;