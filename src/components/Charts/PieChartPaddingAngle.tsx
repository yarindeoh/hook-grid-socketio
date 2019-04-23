import * as React from 'react';
import { FunctionComponent } from 'react';
import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer,
    Legend
} from 'recharts';

export interface IPieAngle {
    data: {
        values: [];
        colors: [];
    };
}

const PieChartPaddingAngle: FunctionComponent<IPieAngle> = props => {
    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={props.data.values}
                    innerRadius="80%"
                    outerRadius="100%"
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {props.data.values.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={
                                props.data.colors[
                                    index % props.data.colors.length
                                ]
                            }
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default React.memo(PieChartPaddingAngle);
