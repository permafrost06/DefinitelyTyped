import { Dashicon } from '@wordpress/components';
import { ComponentType } from 'react';

declare namespace AlignmentToolbar {
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

declare const AlignmentToolbar: ComponentType<AlignmentToolbar.Props>;

export default AlignmentToolbar;
