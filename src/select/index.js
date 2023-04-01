import icon from './icon';
import { registerBlockType } from '@wordpress/blocks';
import { Panel, PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';

registerBlockType( 'my-plugin/my-block', {
    title: 'My Block',
    icon,
    category: 'common',
    supports: {
        html: false, // Disable default HTML support
    },
    attributes: {
        title: {
            type: 'string',
            default: 'My Block Title'
        },
        wrapper: {
            type: 'string',
            default: 'section',
        },
    },
    edit: function( props ) {
        const { attributes, setAttributes } = props;
        const blockProps = useBlockProps();
				
        return (
			<div { ...blockProps }>
				<InspectorControls>
					<PanelBody title="My Block Settings">
						<PanelRow>
							<label htmlFor="my-block-title">Block Title:</label>
							<input 
								type="text" 
								value={ attributes.title } 
								onChange={ (e) => setAttributes( { title: e.target.value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<label htmlFor="my-block-wrapper">Wrapper:</label>
							<SelectControl 
								id="my-block-wrapper"
								value={ attributes.wrapper }
								onChange={ ( newWrapper ) => setAttributes( { wrapper: newWrapper } ) }
								options={ [
									{ label: 'div', value: 'div' },
									{ label: 'section', value: 'section' },
									{ label: 'article', value: 'article' },
								] }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks />
			</div>
		);
	},
	save: function( props ) {
		const { attributes } = props;
		const blockProps = useBlockProps.save();
		return (
			<attributes.wrapper { ...blockProps }>
				<h2>{ attributes.title }</h2>
				<InnerBlocks.Content />
			</attributes.wrapper>
		);
	},
} );
