import icon from './icon';
import { registerBlockType } from '@wordpress/blocks';
import { 
    PanelBody, 
    SelectControl, 
    TextControl, 
    __experimentalToggleGroupControl, 
    __experimentalToggleGroupControlOption  
} from '@wordpress/components';
import { useBlockProps, InnerBlocks, InspectorControls,  } from '@wordpress/block-editor';

registerBlockType( 'my-plugin/my-block', {
    title: 'My Block',
    icon,
    category: 'common',
    supports: {
		align: [ "wide", "full" ],
		anchor: true,
        html: false, // Disable default HTML support
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
    edit: function( props ) {
        const { attributes, setAttributes } = props;
        const blockProps = useBlockProps();
				
        return (
			<attributes.wrapper { ...blockProps }>
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
								id="my-block-position"
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
							{ (attributes.position !== 'static' && attributes.position !== 'unset') && (
								<div 
									style={{
										background: "#ececec",
										padding: "20px",
										marginTop: "-10px",
								  	}}
								>			
								
										<TextControl
											label="Top"
											value={ attributes.top }
											onChange={ ( newTop ) => setAttributes( { top: newTop } ) }
										/>
										<TextControl
											label="Bottom"
											value={ attributes.bottom }
											onChange={ ( newBottom ) => setAttributes( { bottom: newBottom } ) }
										/>
										<TextControl
											label="Left"
											value={ attributes.left }
											onChange={ ( newLeft ) => setAttributes( { left: newLeft } ) }
										/>
										<TextControl
											label="Right"
											value={ attributes.right }
											onChange={ ( newRight ) => setAttributes( { right: newRight } ) }
										/>
									</div>			
							)}
											
					</PanelBody>
					<PanelBody title="Dislpay">		

						<__experimentalToggleGroupControl label="my label" value={attributes.display} onChange={(newDisplay) => setAttributes({ display: newDisplay })} isBlock>
							<__experimentalToggleGroupControlOption value="block" label="block"/>
							<__experimentalToggleGroupControlOption value="flex" label="flex" />
							<__experimentalToggleGroupControlOption value="grid" label="grid" />
						</__experimentalToggleGroupControl>
				
					</PanelBody>


				</InspectorControls>
				<InnerBlocks />				
			</attributes.wrapper>
		);
	},
	
	save: function( props ) {
		const { attributes } = props;
		const blockProps = useBlockProps.save({
			className: `custom-class`,
			style: {
				position: attributes.position,
				top: attributes.top,
				bottom: attributes.bottom,
				left: attributes.left,
				right: attributes.right,
			}
		});
		return (
			<attributes.wrapper { ...blockProps }>
				<InnerBlocks.Content />
			</attributes.wrapper>
		);
	},
	
} );
