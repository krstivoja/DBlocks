import * as Icons from './icons';
import save from './save';
import edit from './edit';
import { registerBlockType } from '@wordpress/blocks';

import './style.scss'; // Import the style.scss file here
import './editor.scss'; // Import the style.scss file here

registerBlockType( 'dblocks/wrapper', {
    title: 'Wrapper',
    icon: Icons.ultimateWrapper,
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
	editorStyle: "./index.css",
	style: "./style-index.css",
    attributes: {
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

	edit,	
	save
	
} );
