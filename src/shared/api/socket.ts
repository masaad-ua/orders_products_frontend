import { io } from 'socket.io-client';
import {SOCKET_URL} from "@/shared/config/env.ts";

export const socket = io(SOCKET_URL, {
    autoConnect: true,
});