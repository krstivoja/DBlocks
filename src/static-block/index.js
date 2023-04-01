import { registerBlockType } from '@wordpress/blocks';
import { TextControl, PanelBody, SelectControl } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import './style.scss';
import './editor.scss';
import metadata from './block.json';

function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps();
    return (
        <>
            <InspectorControls>
                <PanelBody title="Block Settings">
                    <TextControl
                        label="Message"
                        value={ attributes.message }
                        onChange={ ( val ) => setAttributes( { message: val } ) }
                    />
                </PanelBody>
                <PanelBody title="Positioning Settings">
                    <SelectControl
                        label="Positioning"
                        value={ attributes.positioning }
                        options={[
                            {
                                label: 'Static',
                                value: 'static'
                            },
                            {
                                label: 'Relative',
                                value: 'relative'
                            },
                            {
                                label: 'Absolute',
                                value: 'absolute'
                            },
                            {
                                label: 'Sticky',
                                value: 'sticky'
                            },
                            {
                                label: 'Fixed',
                                value: 'fixed'
                            }
                        ]}
                        onChange={ ( val ) => setAttributes( { positioning: val } ) }
                    />
                    { attributes.positioning !== 'static' &&
                        <>
                            <TextControl
                                label="Top"
                                value={ attributes.top }
                                onChange={ ( val ) => setAttributes( { top: val } ) }
                            />
                            <TextControl
                                label="Bottom"
                                value={ attributes.bottom }
                                onChange={ ( val ) => setAttributes( { bottom: val } ) }
                            />
                            <TextControl
                                label="Left"
                                value={ attributes.left }
                                onChange={ ( val ) => setAttributes( { left: val } ) }
                            />
                            <TextControl
                                label="Right"
                                value={ attributes.right }
                                onChange={ ( val ) => setAttributes( { right: val } ) }
                            />
                        </>
                    }

                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <TextControl
                    value={ attributes.message }
                    onChange={ ( val ) => setAttributes( { message: val } ) }
                />
            </div>
        </>
    );
}

function save( { attributes } ) {
    const blockProps = useBlockProps.save();
    const { positioning, top, bottom, left, right } = attributes;

    const style = {
        position: positioning,
        top: top || undefined,
        bottom: bottom || undefined,
        left: left || undefined,
        right: right || undefined,
    };

    return <div { ...blockProps } style={ style }>{ attributes.message }</div>;
}

registerBlockType( metadata.name, {
    example: {
		attributes: {
			message: {
				type: 'string',
				default: 'D Blocks',
			},
			positioning: {
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
		},
		
    },
    edit: Edit,
    save,
} );
