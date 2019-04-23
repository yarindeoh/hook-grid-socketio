import * as React from 'react';
import { FunctionComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineType
} from 'recharts';

import { Margin } from './AreaChart';

export interface ILineChart {
    data: {
        values: [];
    };
    margin?: Margin;
    type?: LineType;
    height?: string;
    width?: string;
}

const LineCharts: FunctionComponent<ILineChart> = props => {
    return (
        <ResponsiveContainer>
            <LineChart data={props.data.values} margin={props.margin}>
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                    yAxisId="left"
                    type={props.type}
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line
                    yAxisId="right"
                    type={props.type}
                    dataKey="uv"
                    stroke="#82ca9d"
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

LineCharts.defaultProps = {
    margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
    },
    type: 'monotone'
};

export default React.memo(LineCharts);
