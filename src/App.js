import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const projectID = 'b6edc622-7513-45cf-8084-42a45b1a10f0';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

    return( 
        <ChatEngine
             height="100vh"
             projectID={projectID}
             userName={localStorage.getItem('username')}
             userSecret={localStorage.getItem('password')}
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
             onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;