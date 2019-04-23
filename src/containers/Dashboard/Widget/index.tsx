import * as React from 'react';
import { FunctionComponent } from 'react';

import Settings from './Settings/Settings';

interface IWidget {
    children: React.ReactNode;
    widgetId: string;
    widgetTitle?: string;
    height?: string;
    width?: string;
}

const Widget: FunctionComponent<IWidget> = props => {
    return (
        <div className="widget">
            <Settings
                widgetId={props.widgetId}
                widgetTitle={props.widgetTitle}
            />
            {props.children}
        </div>
    );
};

export default React.memo(Widget);
