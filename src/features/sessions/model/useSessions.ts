import { useEffect, useState } from 'react';
import { socket } from '@/shared/api/socket';

export const useSessions = () => {
    const [sessions, setSessions] = useState(0);

    useEffect(() => {
        const handleSessions = (count: number) => {
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