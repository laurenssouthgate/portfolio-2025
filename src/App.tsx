import { useState } from 'react';
import { ContentContext } from './context/ContentContext';
import { Content } from './model/Content';
import type { ContentType } from './model/Content';
import { Navigation } from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Socials from './components/socials/Socials';
import Logo from './components/logo/Logo';
import {defaultNotification, NotificationContext, type NotificationData} from "./context/NotificationContext.tsx";
import Notification from "./components/notification/Notification.tsx";
import ChatBot from './components/chat-bot/ChatBot.tsx';

function App() {
    const [content, setContent] = useState<ContentType>(Content.Home);
    const [notificationData, setNotificationData] = useState<NotificationData>(defaultNotification)

    const contextValues = {
        content,
        setContent
    }

    const clearNotification = () => {
        setNotificationData(defaultNotification)
    }

    return (
        <NotificationContext.Provider value={{ data: notificationData, setData: setNotificationData }} >
            <ContentContext.Provider value={ contextValues }>
                <Logo />
                <Navigation />
                {
                    content === Content.Home && <Home />
                }
                {
                    content === Content.About && <About />
                }
                {
                    content === Content.Projects && <Projects />
                }
                {
                    content === Content.Contact && <Contact />
                }
                <Socials />
                <ChatBot />
                <Notification data={ notificationData } onClear={ clearNotification } />
            </ContentContext.Provider>
        </NotificationContext.Provider>
    )
}

export default App
