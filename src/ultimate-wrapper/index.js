import { registerBlockType } from '@wordpress/blocks';
import save from './save';
import edit from './edit';

import './style.scss';
import './editor.scss';
import metadata from './block.json';

registerBlockType( metadata.name, {
	attributes: {
        wrapper: {
            type: 'string',
            default: 'div',
        },
        position: {
            type: 'string',
            default: '',
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
		flexDirection: {
			type: 'string',
			default: '',
		},
		flexWrap: {
			type: 'string',
			default: '',
		},
		alignContent: {
			type: 'string',
			default: '',
		},
		justifyContent: {
			type: 'string',
			default: '',
		},
		alignItems: {
			type: 'string',
			default: '',
		},
		justifyItems: {
			type: 'string',
			default: '',
		},
    },
	
	edit: edit,
	save: save,
} );
