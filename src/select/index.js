import icon from './icon';
import * as Icons from './icons';
import save from './save';
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
					
					<PanelBody title="Display">		
						<__experimentalToggleGroupControl label="my label" value={attributes.display} onChange={(newDisplay) => setAttributes({ display: newDisplay })} isBlock>
							<__experimentalToggleGroupControlOption value="block" label="block"/>
							<__experimentalToggleGroupControlOption value="flex" label="flex" />
							<__experimentalToggleGroupControlOption value="grid" label="grid" />
						</__experimentalToggleGroupControl>

						{attributes.display === 'flex' && (
						<div>
							<__experimentalToggleGroupControl 
							label="Flex Direction" 
							isDeselectable
							value={attributes.flexDirection} 
							onChange={(newFlexDirection) => setAttributes({ flexDirection: newFlexDirection })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>																
									<__experimentalToggleGroupControlOptionIcon value="column" label="Column" icon={Icons.flexDirection1}/>
									<__experimentalToggleGroupControlOptionIcon value="column-reverse" label="Column Reverse" icon={Icons.flexDirection2}/>
									<__experimentalToggleGroupControlOptionIcon value="row" label="Row" icon={Icons.flexDirection3}/>
									<__experimentalToggleGroupControlOptionIcon value="row-reverse" label="Row Reverse" icon={Icons.flexDirection4}/>
								</div>
							</__experimentalToggleGroupControl>        

							<__experimentalToggleGroupControl 
							label="Flex Wrap" 
							isDeselectable
							value={attributes.flexWrap} 
							onChange={(newFlexWrap) => setAttributes({ flexWrap: newFlexWrap })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>	
									<__experimentalToggleGroupControlOptionIcon value="nowrap" label="No Wrap" icon={Icons.flexWrap1}/>
									<__experimentalToggleGroupControlOptionIcon value="wrap" label="Wrap" icon={Icons.flexWrap2}/>
								</div>
							</__experimentalToggleGroupControl>

							<__experimentalToggleGroupControl 
							label="Align Content" 
							isDeselectable
							value={attributes.alignContent} 
							onChange={(newAlignContent) => setAttributes({ alignContent: newAlignContent })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>	
									<__experimentalToggleGroupControlOptionIcon value="center" label="Center"  icon={Icons.alignContent1}/>
									<__experimentalToggleGroupControlOptionIcon value="flex-start" label="Flex Start"  icon={Icons.alignContent2}/>
									<__experimentalToggleGroupControlOptionIcon value="flex-end" label="Flex End"  icon={Icons.alignContent3}/>
									<__experimentalToggleGroupControlOptionIcon value="space-around" label="Space Around"  icon={Icons.alignContent4}/>
									<__experimentalToggleGroupControlOptionIcon value="space-between" label="Space Between"  icon={Icons.alignContent5}/>
									<__experimentalToggleGroupControlOptionIcon value="stretch" label="Stretch"  icon={Icons.alignContent6}/>
								</div>
							</__experimentalToggleGroupControl>

							<__experimentalToggleGroupControl 
							label="Justify Content" 
							isDeselectable
							value={attributes.justifyContent} 
							onChange={(newJustifyContent) => setAttributes({ justifyContent: newJustifyContent })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>	
									<__experimentalToggleGroupControlOptionIcon value="center" label="Center" icon={Icons.flexJustifyContent1}/>
									<__experimentalToggleGroupControlOptionIcon value="flex-start" label="Flex Start" icon={Icons.flexJustifyContent2}/>
									<__experimentalToggleGroupControlOptionIcon value="flex-end" label="Flex End" icon={Icons.flexJustifyContent3}/>
									<__experimentalToggleGroupControlOptionIcon value="space-between" label="Space Between" icon={Icons.flexJustifyContent4}/>
									<__experimentalToggleGroupControlOptionIcon value="space-around" label="Space Around" icon={Icons.flexJustifyContent5}/>
									<__experimentalToggleGroupControlOptionIcon value="space-evenly" label="Space Evenly" icon={Icons.flexJustifyContent6}/>
								</div>
							</__experimentalToggleGroupControl>

							<__experimentalToggleGroupControl 
							label="Align Items" 
							isDeselectable
							value={attributes.alignItems} 
							onChange={(newAlignItems) => setAttributes({ alignItems: newAlignItems })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>	
									<__experimentalToggleGroupControlOptionIcon value="center" label="Center" icon={Icons.flexAlignItems1}/>
									<__experimentalToggleGroupControlOptionIcon value="flex-start" label="Flex Start" icon={Icons.flexAlignItems2}/>
									<__experimentalToggleGroupControlOptionIcon value="flex-end" label="Flex End" icon={Icons.flexAlignItems3}/>
									<__experimentalToggleGroupControlOptionIcon value="stretch" label="Stretch" icon={Icons.flexAlignItems4}/>
									<__experimentalToggleGroupControlOptionIcon value="baseline" label="Baseline" icon={Icons.flexAlignItems5}/>
							</div>
							</__experimentalToggleGroupControl>
						</div>
						)}

						{attributes.display === 'grid' && (
						<div>
							<__experimentalToggleGroupControl 
							label="Align Content" 
							isDeselectable
							value={attributes.alignContent} 
							onChange={(newAlignContent) => setAttributes({ alignContent: newAlignContent })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>	
									<__experimentalToggleGroupControlOptionIcon value="center" label="Center"  icon={Icons.alignContent1}/>
									<__experimentalToggleGroupControlOptionIcon value="space-between" label="Space Between"  icon={Icons.alignContent5}/>
									<__experimentalToggleGroupControlOptionIcon value="space-around" label="Space Around"  icon={Icons.alignContent4}/>
									<__experimentalToggleGroupControlOptionIcon value="space-evenly" label="Space Evenly"  icon={Icons.alignContent4}/>
									<__experimentalToggleGroupControlOptionIcon value="stretch" label="Stretch"  icon={Icons.alignContent6}/>
								</div>
							</__experimentalToggleGroupControl>

							<__experimentalToggleGroupControl 
							label="Justify Content" 
							isDeselectable
							value={attributes.justifyContent} 
							onChange={(newJustifyContent) => setAttributes({ justifyContent: newJustifyContent })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>	
									<__experimentalToggleGroupControlOptionIcon value="center" label="Center" icon={Icons.flexJustifyContent1}/>
									<__experimentalToggleGroupControlOptionIcon value="start" label="Start" icon={Icons.flexJustifyContent2}/>
									<__experimentalToggleGroupControlOptionIcon value="end" label="End" icon={Icons.flexJustifyContent3}/>
									<__experimentalToggleGroupControlOptionIcon value="space-between" label="Space Between" icon={Icons.flexJustifyContent4}/>
									<__experimentalToggleGroupControlOptionIcon value="space-around" label="Space Around" icon={Icons.flexJustifyContent5}/>
									<__experimentalToggleGroupControlOptionIcon value="space-evenly" label="Space Evenly" icon={Icons.flexJustifyContent6}/>
								</div>
							</__experimentalToggleGroupControl>	

							<__experimentalToggleGroupControl 
							label="Align Items" 
							isDeselectable
							value={attributes.alignItems} 
							onChange={(newAlignItems) => setAttributes({ alignItems: newAlignItems })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>	
									<__experimentalToggleGroupControlOptionIcon value="center" label="Center" icon={Icons.flexAlignItems1}/>
									<__experimentalToggleGroupControlOptionIcon value="start" label="Start" icon={Icons.flexAlignItems2}/>
									<__experimentalToggleGroupControlOptionIcon value="end" label="End" icon={Icons.flexAlignItems3}/>
									<__experimentalToggleGroupControlOptionIcon value="stretch" label="Stretch" icon={Icons.flexAlignItems4}/>
									<__experimentalToggleGroupControlOptionIcon value="baseline" label="Baseline" icon={Icons.flexAlignItems5}/>
							</div>
							</__experimentalToggleGroupControl>

							<__experimentalToggleGroupControl 
							label="Justify Items" 
							isDeselectable
							value={attributes.justifyContent} 
							onChange={(newJustifyContent) => setAttributes({ justifyContent: newJustifyContent })}
							>
								<div style={{
										border: "1px solid rgb(148, 148, 148)",
										padding: "2px",
										width: "100%",
										borderRadius: "2px",
										display: "flex",
								}}>	
									<__experimentalToggleGroupControlOptionIcon value="center" label="Center" icon={Icons.gridJustifyItems1}/>
									<__experimentalToggleGroupControlOptionIcon value="start" label="Start" icon={Icons.gridJustifyItems2}/>
									<__experimentalToggleGroupControlOptionIcon value="end" label="End" icon={Icons.gridJustifyItems3}/>
									<__experimentalToggleGroupControlOptionIcon value="stretch" label="Stretch" icon={Icons.gridJustifyItems4}/>
								</div>
							</__experimentalToggleGroupControl>	
						</div>
						)}
					</PanelBody>

				</InspectorControls>
				<InnerBlocks />				
			</attributes.wrapper>
		);
	},
	
	save
	
} );
