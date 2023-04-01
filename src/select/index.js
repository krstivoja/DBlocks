import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import './style.scss';
import './editor.scss';
import metadata from './block.json';

function Edit( props ) {
	const { attributes, setAttributes, isSelected } = props;
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<h1>Marko Test Static</h1>
			{
				isSelected && (
					<p>Obo je selektovano </p>
				)
			}
		</div>
	);
}

function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return <div { ...blockProps }><h1>Marko Test Static</h1></div>;
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: save,
} );
