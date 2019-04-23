const initialState = {
    config: {},
    widgetOptions: ['lineChart', 'areaChart', 'barChart', 'pieChart']
};

function DashboardReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default DashboardReducer;
