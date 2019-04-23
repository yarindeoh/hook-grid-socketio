import * as React from 'react';
import { FunctionComponent } from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';

export interface IPieTwoLevels {
    data: {
        data01: [];
        data02: [];
    };
}

const PieChartTwoLevel: FunctionComponent<IPieTwoLevels> = props => {
    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={props.data.data01}
                    dataKey="value"
                    outerRadius="60%"
                    fill="#8884d8"
                />
                <Tooltip />
                <Pie
                    data={props.data.data02}
                    dataKey="value"
                    innerRadius="70%"
                    outerRadius="90%"
                    fill="#82ca9d"
                    label
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default React.memo(PieChartTwoLevel);
