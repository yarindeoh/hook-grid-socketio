import * as React from 'react';
import { FunctionComponent } from 'react';

import WidgetsList from 'containers/Dashboard/WidgetsList/WidgetsList';

const Dashboard: FunctionComponent = () => {
    //Will control on global time filtering
    return (
        <div>
            <WidgetsList />
        </div>
    );
};

export default Dashboard;
