import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
    const { attributes } = props;
    
    const blockProps = useBlockProps.save({
        className: `custom-class ${attributes.position} ${attributes.display}`,
        style: {
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
}