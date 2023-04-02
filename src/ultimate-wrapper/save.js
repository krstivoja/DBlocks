import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
    const { attributes } = props;
    
    const blockProps = useBlockProps.save({
        className: `custom-class ${attributes.position} ${attributes.display} ${attributes.flexDirection} ${attributes.flexWrap} ${attributes.alignContent} ${attributes.justifyContent}  ${attributes.alignItems}`,
        style: {
            ...(attributes.top && { top: attributes.top }),
            ...(attributes.bottom && { bottom: attributes.bottom }),
            ...(attributes.left && { left: attributes.left }),
            ...(attributes.right && { right: attributes.right }),
        }
    });

    return (
        <attributes.wrapper { ...blockProps }>
            <InnerBlocks.Content />
        </attributes.wrapper>
    );
}