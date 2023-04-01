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
            default: 'div',
        },
        position: {
            type: 'string',
            default: 'statis',
        },
    },
    edit: function( props ) {
        const { attributes, setAttributes } = props;
        const blockProps = useBlockProps();
				
        return (
			<div { ...blockProps }>
				<InspectorControls>
					<PanelBody title="HTML Tag">						
							<SelectControl 
								id="my-block-wrapper"
								value={ attributes.wrapper }
								onChange={ ( newWrapper ) => setAttributes( { wrapper: newWrapper } ) }
								options={ [
									{ label: 'div', value: 'div' },
									{ label: 'section', value: 'section' },
									{ label: 'article', value: 'article' },
									{ label: 'span', value: 'span' },
									{ label: 'main', value: 'main' },
									{ label: 'aside', value: 'aside' },
									{ label: 'nav', value: 'nav' },
									{ label: 'header', value: 'header' },
									{ label: 'footer', value: 'footer' }
								] }
							/>
						
					</PanelBody>
					<PanelBody title="Position">						
							<SelectControl 
								id="my-block-display"
								value={ attributes.position }
								onChange={ ( newPosition ) => setAttributes( { position: newPosition } ) }
								options={ [
									{ label: 'static', value: 'static' },
									{ label: 'relative', value: 'relative' },
									{ label: 'absolute', value: 'absolute' },
									{ label: 'fixed', value: 'fixed' },
									{ label: 'sticky', value: 'sticky' },
									{ label: 'unset', value: 'unset' }
								] }
							/>
						
					</PanelBody>
					<PanelBody title="Display">
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
