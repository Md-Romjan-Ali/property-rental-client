import React from 'react';

const Chart = () => {
    const monthlyData = [
        { month: "Jan", earnings: 120000 },
        { month: "Feb", earnings: 180000 },
        { month: "Mar", earnings: 150000 },
        { month: "Apr", earnings: 220000 },
        { month: "May", earnings: 280000 },
        { month: "Jun", earnings: 320000 },
        { month: "Jul", earnings: 290000 },
        { month: "Aug", earnings: 350000 },
        { month: "Sep", earnings: 400000 },
        { month: "Oct", earnings: 380000 },
        { month: "Nov", earnings: 450000 },
        { month: "Dec", earnings: 520000 },
    ];
    return (
        <div>
            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="earnings"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;