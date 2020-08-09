// Import dependencies
import React from "react";
interface HelloWorldProps {
  userName: string;
  lang: string;
}
// Create main App component
const App = (props: HelloWorldProps) => (
  <div>
    <h1>Hello, electron!</h1>

    <p>
      Let's start building your awesome desktop app with electron and React!
    </p>
    <p>
      Hi {props.userName} from React! Welcome to {props.lang}!
    </p>
  </div>
);

// Export the App component
export default App;
