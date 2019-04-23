import { combineReducers } from 'redux';
import DashboardReducer from 'containers/Dashboard/dashboardReducer';
import WidgetsListReducers from 'containers/Dashboard/WidgetsList/widgetsListReducer';

export default combineReducers({
    dashboard: combineReducers({
        settings: DashboardReducer,
        currentWidgets: WidgetsListReducers
    })
});
