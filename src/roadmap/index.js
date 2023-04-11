import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SelectControl } from '@wordpress/components';

import './style.scss';
import './editor.scss';
import metadata from './block.json';

function Edit({ attributes, setAttributes }) {
	const [posts, setPosts] = useState([]);
	const [postType, setPostType] = useState('posts');

	useEffect(() => {
		fetch(`/wp-json/wp/v2/${postType}`)
			.then((response) => response.json())
			.then((results) => setPosts(results));
	}, [postType]);

	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<InspectorControls>
				<SelectControl
					label="Select post type"
					value={postType}
					options={[
						{ label: 'Posts', value: 'posts' },
						{ label: 'Pages', value: 'pages' },
						// Add other post types here
					]}
					onChange={(value) => setPostType(value)}
				/>
			</InspectorControls>
			<ul className="term1">
				{posts.map((post) => (
					<li key={post.id}>{post.title.rendered}</li>
				))}
			</ul>
		</div>
	);
}

function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return <div {...blockProps}>{attributes.message}</div>;
}

registerBlockType(metadata.name, {
	example: {
		attributes: {
			message: 'Dblocks',
		},
	},
	attributes: {
		postType: {
			type: 'string',
			default: 'post',
		},
	},
	edit: Edit,
	save: save,
});
