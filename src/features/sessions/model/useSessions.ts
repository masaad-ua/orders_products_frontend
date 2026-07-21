import { useEffect, useState } from 'react';
import { socket } from '@/shared/api/socket';

export const useSessions = () => {
    const [sessions, setSessions] = useState(0);

    useEffect(() => {
        const handleSessions = (count: number) => {
            setSessions(count);
        };

        socket.on('sessions-count', handleSessions);

        return () => {
            socket.off('sessions-count', handleSessions);
        };
    }, []);

    return sessions;
};