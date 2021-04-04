import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="e61ed5f6-b15c-4464-abec-c2be2d24054c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
} 

export default App;