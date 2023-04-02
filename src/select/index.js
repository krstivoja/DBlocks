import icon from './icon';
import * as Icons from './icons';
import save from './save';
import edit from './edit';
import { registerBlockType } from '@wordpress/blocks';
import { 
    PanelBody, 
    SelectControl, 
    TextControl, 
    __experimentalToggleGroupControl, 
    __experimentalToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon,
	Path, SVG
} from '@wordpress/components';
import { useBlockProps, InnerBlocks, InspectorControls,  } from '@wordpress/block-editor';

registerBlockType( 'dblocks/wrapper', {
    title: 'Ultimate Wrapper',
    icon,
    category: 'common',
    supports: {
		align: [ "wide", "full" ],
		anchor: true,
        html: true,
		color: {
			"gradients": true,
			"link": true,
			"__experimentalDefaultControls": {
				"background": true,
				"text": true
			}
		},
		spacing: {
			"margin": [ "top", "bottom" ],
			"padding": true,
			"blockGap": true,
			"__experimentalDefaultControls": {
				"padding": true,
				"blockGap": true
			}
		},
		dimensions: {
			"minHeight": true
		},
		__experimentalBorder: {
			"color": true,
			"radius": true,
			"style": true,
			"width": true,
			"__experimentalDefaultControls": {
				"color": true,
				"radius": true,
				"style": true,
				"width": true
			}
		},
		
    },
    attributes: {
        title: {
            type: 'string',
            default: 'My Block Title'
        },
        wrapper: {
            type: 'string',
            default: 'div',
        },
        position: {
            type: 'string',
            default: 'static',
        },
		top: {
			type: 'string',
			default: '',
		},
		bottom: {
			type: 'string',
			default: '',
		},
		left: {
			type: 'string',
			default: '',
		},
		right: {
			type: 'string',
			default: '',
		},
		display: {
			type: 'string',
			default: 'block',
		},
    },

	edit
	
	save
	
} );
