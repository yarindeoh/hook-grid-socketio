import * as React from 'react';
import { useEffect } from 'react';
import io from 'socket.io-client';

export const socket = io('//localhost:3000');

export const useSocket = (eventKey, socket, callback) => {
    useEffect(() => {
        if (eventKey && callback) {
            socket.on(eventKey, callback);

            return () => socket.removeListener(eventKey, callback);
        }
    }, []);

    return socket;
};
