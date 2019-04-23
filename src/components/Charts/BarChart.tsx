import * as React from 'react';
import { FunctionComponent } from 'react';
import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    CartesianGrid
} from 'recharts';

export interface IChartProps {
    data: Array<object>;
    xdataKey: string;
    firstBarDataKey: string;
    secondBarDataKey: string;
}

const BarCharts: FunctionComponent<IChartProps> = props => {
    return (
        <ResponsiveContainer>
            <BarChart data={props.data}>
                <CartesianGrid />
                <XAxis dataKey={props.xdataKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={props.firstBarDataKey} fill="#8884d8" />
                <Bar dataKey={props.secondBarDataKey} fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default React.memo(BarCharts);
