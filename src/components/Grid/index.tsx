import * as React from 'react';
import { FunctionComponent } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

export type Cols = {
    xlg: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;
};

interface IGridProps {
    layout: Array<Layout>;
    layoutCol: string;
    children: any;
    layouts?: { [layoutCol: string]: [Layout] };
    className?: string;
    containerPadding?: [number, number];
    onLayoutChange?: () => void;
    cols?: Cols;
}

export const Grid: FunctionComponent<IGridProps> = props => {
    const {
        children,
        layout,
        layoutCol,
        className,
        containerPadding,
        cols
    } = props;
    return (
        <ResponsiveGridLayout
            className={`layout ${className}`}
            layouts={{ [layoutCol]: layout }}
            cols={cols}
            containerPadding={containerPadding}
            breakpoints={{
                xlg: 1560,
                lg: 1600,
                md: 996,
                sm: 768,
                xs: 480,
                xxs: 0
            }}
        >
            {children}
        </ResponsiveGridLayout>
    );
};

Grid.defaultProps = {
    containerPadding: [20, 20],
    cols: { xlg: 6, lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }
};
