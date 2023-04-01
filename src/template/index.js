import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

import './style.scss';
import './editor.scss';
import metadata from './block.json';

function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<TextControl
				value={ attributes.message }
				onChange={ ( val ) => setAttributes( { message: val } ) }
			/>
		</div>
	);
}

function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return <div { ...blockProps }>{ attributes.message }</div>;
}

registerBlockType( metadata.name, {
	example: {
		attributes: {
			message: 'Dblocks',
		},
	},
	edit: Edit,
	save: save,
} );
