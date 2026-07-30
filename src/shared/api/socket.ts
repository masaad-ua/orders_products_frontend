import { io } from 'socket.io-client';
import {API_URL} from "@/shared/config/env.ts";

export const socket = io(API_URL, {
    autoConnect: true,
});