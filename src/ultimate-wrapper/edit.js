import './style.scss';
import * as Icons from './icons';
import { 
    PanelBody, 
    SelectControl, 
    TextControl, 
    __experimentalToggleGroupControl, 
    __experimentalToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon,
    __experimentalBoxControl,
	Path, SVG
} from '@wordpress/components';
import { useBlockProps, InnerBlocks, InspectorControls,  } from '@wordpress/block-editor';

export default function edit( props ) {
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps();
    
    function setValues( newTop, newRight, newBottom, newLeft ) {
        setAttributes( {
            top: newTop,
            right: newRight,
            bottom: newBottom,
            left: newLeft,
        } );
    }

    return (
        <attributes.wrapper { ...blockProps }>
            <InspectorControls>

                <PanelBody title="Display">		
                    <__experimentalToggleGroupControl label="display" value={attributes.display} onChange={(newDisplay) => setAttributes({ display: newDisplay })} isBlock>
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
                                <__experimentalToggleGroupControlOptionIcon value="flex-row" label="Row" icon={Icons.flexDirection1}/>
                                <__experimentalToggleGroupControlOptionIcon value="flex-col" label="Column" icon={Icons.flexDirection2}/>
                                <__experimentalToggleGroupControlOptionIcon value="flex-row-reverse" label="Row Reverse" icon={Icons.flexDirection3}/>
                                <__experimentalToggleGroupControlOptionIcon value="flex-col-reverse" label="Column Reverse" icon={Icons.flexDirection4}/>
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
                                <__experimentalToggleGroupControlOptionIcon value="flex-wrap" label="No Wrap" icon={Icons.flexWrap1}/>
                                <__experimentalToggleGroupControlOptionIcon value="flex-nowrap" label="Wrap" icon={Icons.flexWrap2}/>
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
                                <__experimentalToggleGroupControlOptionIcon value="content-center" label="Center"  icon={Icons.alignContent1}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-start" label="Flex Start"  icon={Icons.alignContent2}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-end" label="Flex End"  icon={Icons.alignContent3}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-around" label="Space Around"  icon={Icons.alignContent4}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-between" label="Space Between"  icon={Icons.alignContent5}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-stretch" label="Stretch"  icon={Icons.alignContent6}/>
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
                                <__experimentalToggleGroupControlOptionIcon value="justify-center" label="Center" icon={Icons.flexJustifyContent1}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-start" label="Flex Start" icon={Icons.flexJustifyContent2}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-end" label="Flex End" icon={Icons.flexJustifyContent3}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-between" label="Space Between" icon={Icons.flexJustifyContent4}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-around" label="Space Around" icon={Icons.flexJustifyContent5}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-evenly" label="Space Evenly" icon={Icons.flexJustifyContent6}/>
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
                                <__experimentalToggleGroupControlOptionIcon value="items-center" label="Center" icon={Icons.flexAlignItems1}/>
                                <__experimentalToggleGroupControlOptionIcon value="items-start" label="Flex Start" icon={Icons.flexAlignItems2}/>
                                <__experimentalToggleGroupControlOptionIcon value="items-end" label="Flex End" icon={Icons.flexAlignItems3}/>
                                <__experimentalToggleGroupControlOptionIcon value="items-stretch" label="Stretch" icon={Icons.flexAlignItems4}/>
                                <__experimentalToggleGroupControlOptionIcon value="items-baseline" label="Baseline" icon={Icons.flexAlignItems5}/>
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
                                <__experimentalToggleGroupControlOptionIcon value="content-center" label="Center"  icon={Icons.alignContent1}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-between" label="Space Between"  icon={Icons.alignContent5}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-around" label="Space Around"  icon={Icons.alignContent4}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-evenly" label="Space Evenly"  icon={Icons.alignContent4}/>
                                <__experimentalToggleGroupControlOptionIcon value="content-stretch" label="Stretch"  icon={Icons.alignContent6}/>
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
                                <__experimentalToggleGroupControlOptionIcon value="justify-center" label="Center" icon={Icons.flexJustifyContent1}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-start" label="Start" icon={Icons.flexJustifyContent2}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-end" label="End" icon={Icons.flexJustifyContent3}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-between" label="Space Between" icon={Icons.flexJustifyContent4}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-around" label="Space Around" icon={Icons.flexJustifyContent5}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-evenly" label="Space Evenly" icon={Icons.flexJustifyContent6}/>
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
                                <__experimentalToggleGroupControlOptionIcon value="items-center" label="Center" icon={Icons.flexAlignItems1}/>
                                <__experimentalToggleGroupControlOptionIcon value="items-start" label="Start" icon={Icons.flexAlignItems2}/>
                                <__experimentalToggleGroupControlOptionIcon value="items-end" label="End" icon={Icons.flexAlignItems3}/>
                                <__experimentalToggleGroupControlOptionIcon value="items-stretch" label="Stretch" icon={Icons.flexAlignItems4}/>
                                <__experimentalToggleGroupControlOptionIcon value="items-baseline" label="Baseline" icon={Icons.flexAlignItems5}/>
                        </div>
                        </__experimentalToggleGroupControl>

                        <__experimentalToggleGroupControl 
                        label="Justify Items" 
                        isDeselectable
                        value={attributes.justifyItems} 
                        onChange={(newJustifyItems) => setAttributes({ justifyItems: newJustifyItems })}
                        >
                            <div style={{
                                    border: "1px solid rgb(148, 148, 148)",
                                    padding: "2px",
                                    width: "100%",
                                    borderRadius: "2px",
                                    display: "flex",
                            }}>	
                                <__experimentalToggleGroupControlOptionIcon value="justify-items-center" label="Center" icon={Icons.gridJustifyItems1}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-items-start" label="Start" icon={Icons.gridJustifyItems2}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-items-end" label="End" icon={Icons.gridJustifyItems3}/>
                                <__experimentalToggleGroupControlOptionIcon value="justify-items-stretch" label="Stretch" icon={Icons.gridJustifyItems4}/>
                            </div>
                        </__experimentalToggleGroupControl>	

                        <TextControl
                            help="repeat(2, minmax(0, 1fr)) to have 2 items per row"
                            label="grid-template-columns"
                            onChange={function noRefCheck(){}}
                            value=""
                        />

                    </div>
                    )}
                </PanelBody>

                <PanelBody title="Position" initialOpen={false}>						
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
                            
                                <__experimentalBoxControl
                                        label={'Location'}
                                        values={ { top: attributes.top, right: attributes.right, bottom: attributes.bottom, left: attributes.left } }
                                        onChange={ ( newValues ) => setValues( newValues.top, newValues.right, newValues.bottom, newValues.left ) }
                                />	                            
                            			
                        )}
                                        
                </PanelBody>
                
                <PanelBody title="HTML Tag" initialOpen={false}>
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

            </InspectorControls>
            <InnerBlocks />				
        </attributes.wrapper>
    );
}