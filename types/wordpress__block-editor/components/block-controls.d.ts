import { Toolbar, Slot } from '@wordpress/components';
import { FC, ReactNode } from 'react';

declare namespace BlockControls {
    interface Props extends Pick<Toolbar.Props, 'controls'> {
        children: ReactNode;
        group?: string;
    }
}
declare const BlockControls: {
    (props: BlockControls.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, 'name'>>;
};

export default BlockControls;
