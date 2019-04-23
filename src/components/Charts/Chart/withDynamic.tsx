import * as React from 'react';

//Future use for dynamic HOC
const withDynamic = WrappedComponent => {
    const dynamic = props => {
        return (
            <div>
                {!props.width.includes('%') && (
                    <div
                        style={{
                            height: `${props.height}`,
                            width: `${props.width}`
                        }}
                    >
                        <WrappedComponent {...props} />
                    </div>
                )}
            </div>
        );
    };

    return React.memo(dynamic);
};

export default withDynamic;
