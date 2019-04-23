import * as React from 'react';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'react-grid-layout';

import DynamicWrapper from 'components/Charts/Chart/DynamicWrapper';
import BarChart from 'components/Charts/BarChart';
import LineCharts from 'components/Charts/LineChart';
import AreaChart from 'components/Charts/AreaChart';
import PieChartPaddingAngle from 'components/Charts/PieChartPaddingAngle';
import PieChartTwoLevel from 'components/Charts/PieChartTwoLevel';
import Widget from 'containers/Dashboard/Widget';
import {
    barChartData,
    pieAngleData,
    pieTwoLevel,
    lineData
} from 'services/mockData';
import { Grid } from 'components/Grid';

const WidgetsList: FunctionComponent = () => {
    const dashboardLayout: Array<Layout> = [
        { i: 'barChart', x: 0, y: 0, w: 2, h: 2 },
        { i: 'lineChart', x: 0, y: 2, w: 2, h: 2 },
        { i: 'areaChart', x: 2, y: 0, w: 2, h: 2 },
        { i: 'pieChart1', x: 4, y: 0, w: 1, h: 2 },
        { i: 'pieChart2', x: 2, y: 2, w: 2, h: 3 }
    ];
    const { areaChart } = useSelector(state => ({
        areaChart: state.dashboard.currentWidgets.areaChart
    }));
    return (
        <Grid
            layout={dashboardLayout}
            layoutCol="lg"
            className="dashboard-container"
        >
            <DynamicWrapper className="box" key="barChart">
                <Widget widgetId="barChart" widgetTitle="Bar Chart">
                    <BarChart
                        data={barChartData}
                        xdataKey="name"
                        firstBarDataKey="uv"
                        secondBarDataKey="pv"
                    />
                </Widget>
            </DynamicWrapper>
            <DynamicWrapper className="box" key="lineChart">
                <Widget widgetId="lineChart" widgetTitle="Line Chart">
                    <LineCharts data={lineData} />
                </Widget>
            </DynamicWrapper>
            <DynamicWrapper className="box" key="areaChart">
                <Widget widgetId="areaChart" widgetTitle="Area Chart">
                    <AreaChart data={areaChart} xdataKey="name" dataKey="uv" />
                </Widget>
            </DynamicWrapper>
            <DynamicWrapper className="box" key="pieChart1">
                <Widget widgetId="pieChart1" widgetTitle="Pie Chart 1">
                    <PieChartPaddingAngle data={pieAngleData} />
                </Widget>
            </DynamicWrapper>
            <DynamicWrapper className="box" key="pieChart2">
                <Widget widgetId="pieChart2" widgetTitle="Pie Chart 2">
                    <PieChartTwoLevel data={pieTwoLevel} />
                </Widget>
            </DynamicWrapper>
        </Grid>
    );
};

export default WidgetsList;
