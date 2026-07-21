import { useEffect, useState } from 'react';
import { socket } from '@/shared/api/socket';

export const useSessions = () => {
    console.log('useSessions called');
    console.log('connected:', socket.connected);
    console.log('active:', socket.active);
    console.log('id:', socket.id);
    const [sessions, setSessions] = useState(0);

    useEffect(() => {
        const handleSessions = (count: number) => {
            console.log("handleSessions count", count);
            setSessions(count);
        };

        socket.on('activeSessions', handleSessions);

        if (socket.connected) {
            socket.emit('requestActiveSessions');
        } else {
            // Если еще нет — дождемся подключения
            socket.once('connect', () => {
                socket.emit('requestActiveSessions');
            });
        }

        return () => {
            socket.off('activeSessions', handleSessions);
        };
    }, []);

    return sessions;
};