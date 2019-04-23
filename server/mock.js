module.exports = {
    areaData: {
        mock1: {
            values: [
                {
                    name: 'Page A',
                    uv: 3500,
                    pv: 2400,
                    amt: 2400
                },
                {
                    name: 'Page B',
                    uv: 3000,
                    pv: 1398,
                    amt: 2210
                },
                {
                    name: 'Page C',
                    uv: 2000,
                    pv: 9800,
                    amt: 2290
                },
                {
                    name: 'Page D',
                    uv: 2780,
                    pv: 3908,
                    amt: 2000
                },
                {
                    name: 'Page E',
                    uv: 1890,
                    pv: 4800,
                    amt: 2181
                },
                {
                    name: 'Page F',
                    uv: 2390,
                    pv: 3800,
                    amt: 2500
                },
                {
                    name: 'Page G',
                    uv: 3490,
                    pv: 4300,
                    amt: 2100
                }
            ]
        },
        mock2: function() {
            const result = { values: [] };
            let names = [
                'Page A',
                'Page B',
                'Page C',
                'Page D',
                'Page E',
                'Page F',
                'Page G'
            ];
            names.map(item => {
                result.values.push({
                    name: item,
                    uv: Math.random() * 10000,
                    pv: Math.random() * 10000,
                    amt: Math.random() * 10000
                });
            });
            return result;
        }
    }
};
