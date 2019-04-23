export const WIDGET_DATA = 'widgetsList/WIDGET_DATA';
export const AREA_CHART_DATA = `${WIDGET_DATA}_AREA`;
export const BAR_CHART_DATA = `${WIDGET_DATA}_BAR`;

export const areaChartDataAction = payload => ({
    type: AREA_CHART_DATA,
    payload
});
