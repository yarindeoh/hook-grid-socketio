import { put, call, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { socket } from 'services/socket';
import { WIDGET_DATA } from './widgetsListConstants';

function createSocketChannel(socket) {
    return eventChannel(emit => {
        const messageHandler = event => {
            emit(event);
        };

        socket.on('areaChartData', messageHandler);

        const unsubscribe = () => {
            socket.off('areaChartData', messageHandler);
        };

        return unsubscribe;
    });
}

export function* handleDashboardData(payload) {
    yield put({
        //In the future will be dynamic type from server's payload
        type: `${WIDGET_DATA}_AREA`,
        payload: {
            chartName: 'areaChart',
            data: payload
        }
    });
}

export function* watchAreaChart() {
    const ioDashboardChannel = yield call(createSocketChannel, socket);
    try {
        yield takeEvery(ioDashboardChannel, handleDashboardData);
    } catch (err) {
        console.error('socket error:', err);
        ioDashboardChannel.close();
    }
}
