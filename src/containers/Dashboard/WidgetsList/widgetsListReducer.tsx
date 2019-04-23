import { AREA_CHART_DATA, BAR_CHART_DATA } from './widgetsListConstants';
const initialState = {
    count: 0
};

function WidgetsListReducer(state = initialState, action) {
    switch (action.type) {
        case AREA_CHART_DATA:
        case BAR_CHART_DATA:
            return {
                ...state,
                count: state.count + 1,
                [action.payload.chartName]: action.payload.data
            };

        default:
            return state;
    }
}

export default WidgetsListReducer;
