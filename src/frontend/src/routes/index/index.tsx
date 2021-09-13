import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router';
import { useCallback, useEffect, useState } from 'preact/hooks';
import Messages from '../../components/messages/messages';
import Register from '../../components/register/register';
import { arraybuffer2base64, createDevice, getVapidData } from '../../services/apiservice';
import style from "./style.css";


const Index: FunctionalComponent = () => {
    const [isSubscribed, setSubscribed] = useState(false);

    useEffect(() => {
        setSubscribed(!!localStorage.userData);
        // todo ask the server if we are subscribed
    }, []);

    return (
        <div>
            <div class={style.content}>
                <div class={style.headeritem}>                        
                    <Register />
                </div>
                <div class={style.main}>
                    <Messages/>
                </div>
            </div>
        </div>
    );
};

export default Index;
