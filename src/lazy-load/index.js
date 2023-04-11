import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { Component } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

const LazyLoadImageToggle = createHigherOrderComponent((BlockEdit) => {
    return class extends Component {
        constructor() {
            super(...arguments);
        }

        render() {
            const { attributes, setAttributes } = this.props;

            return (
                <>
                    <BlockEdit {...this.props} />
                    <InspectorControls>
                        <PanelBody title={__('Loading Settings')}>
                            <ToggleControl
                                label={__('Enable Lazy Load')}
                                checked={attributes.lazyLoad}
                                onChange={(value) => setAttributes({ lazyLoad: value })}
                            />
                        </PanelBody>
                    </InspectorControls>
                </>
            );
        }
    };
}, 'LazyLoadImageToggle');

addFilter('editor.BlockEdit', 'my-plugin/lazy-load-image-toggle', LazyLoadImageToggle);

addFilter('blocks.registerBlockType', 'my-plugin/add-lazy-load-option', (settings) => {
    if (settings.name === 'core/image') {
        settings.attributes = Object.assign(settings.attributes, {
            lazyLoad: {
                type: 'boolean',
                default: false,
            },
        });

        const { save } = settings;
        settings.save = (props) => {
            const { attributes } = props;

            if (attributes.lazyLoad) {
                return (
                    <figure className={`wp-block-image size-${attributes.sizeSlug}`}>
                        <img
                            decoding="async"
                            src={attributes.url}
                            alt={attributes.alt}
                            className={`wp-image-${attributes.id}`}
                            srcset={attributes.srcset}
                            sizes={attributes.sizes}
                            loading="lazy"
                            width={attributes.width}
                            height={attributes.height}
                        />
                    </figure>
                );
            }

            return save(props);
        };
    }

    return settings;
});
