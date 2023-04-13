import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '710a95a3-0b4d-4d60-8c24-be15c91b1248', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
    )
}

export default ChatsPage