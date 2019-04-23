import * as React from 'react';
import { FunctionComponent } from 'react';
import { Resizable, ResizableBox } from 'react-resizable';

import GridWrapper from 'containers/Dashboard';
import 'resources/scss/style.scss';

export const App: FunctionComponent = () => {
    return (
        <div>
            <GridWrapper />
        </div>
    );
};
