import { all, fork } from 'redux-saga/effects';

import { watchAreaChart } from 'containers/Dashboard/WidgetsList/widgetsListSaga';

export default function* rootSaga() {
    yield all([fork(watchAreaChart)]);
}
