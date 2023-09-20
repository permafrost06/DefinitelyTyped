import { Dashicon } from '@wordpress/components';
import { ComponentType } from 'react';

declare namespace AlignmentControl {
    interface Props {
        alignmentControls?: Array<{
            align: string;
            icon: Dashicon.Icon | JSX.Element;
            title: string;
        }> | undefined;
        children?: never | undefined;
        describedBy?: string | undefined;
        isCollapsed?: boolean | undefined;
        label?: string | undefined;
        value: string | undefined;
        onChange(newValue: string | undefined): void;
    }
}

declare const AlignmentControl: ComponentType<AlignmentControl.Props>;

export default AlignmentControl;
