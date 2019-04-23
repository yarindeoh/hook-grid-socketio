import * as React from 'react';
import { FunctionComponent } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineType
} from 'recharts';

export type Margin = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};

export interface IAreaChart {
    data: {
        values: [];
    };
    dataKey: string;
    xdataKey: string;
    margin?: Margin;
    type?: LineType;
}

const SimpleAreaChart: FunctionComponent<IAreaChart> = props => {
    return (
        <div className="widget">
            {props.data && (
                <ResponsiveContainer>
                    <AreaChart
                        data={props.data && props.data.values}
                        margin={props.margin}
                    >
                        <CartesianGrid />
                        <XAxis dataKey={props.xdataKey} />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type={props.type}
                            dataKey={props.dataKey}
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

SimpleAreaChart.defaultProps = {
    margin: { top: 10, right: 30, left: 0, bottom: 0 },
    type: 'monotone'
};

export default React.memo(SimpleAreaChart);
