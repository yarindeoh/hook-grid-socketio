import * as React from 'react';
import { FunctionComponent } from 'react';

interface IWrapper {
    children: any;
    className: string;
    key: string;
    style?: {
        width: string;
        height: string;
    };
}

const DynamicWrapper: FunctionComponent<IWrapper> = props => {
    let newChildren = React.Children.map(props.children, function(child) {
        return React.cloneElement(child, {
            width: props.style.width,
            height: props.style.height
        });
    });
    return (
        <div {...props}>
            {!props.style.width.includes('%') && (
                <div
                    style={{
                        height: `${props.style.height}`,
                        width: `${props.style.width}`
                    }}
                >
                    {newChildren}
                </div>
            )}
        </div>
    );
};

export default DynamicWrapper;
