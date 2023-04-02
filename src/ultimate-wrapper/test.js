onChange={(newDisplay) => {
    setAttributes({ 
        display: newDisplay,
        flexDirection: newDisplay !== 'flex' ? '' : attributes.flexDirection,
        flexWrap: newDisplay !== 'flex' ? '' : attributes.flexWrap,
        alignContent: newDisplay !== 'flex' ? '' : attributes.alignContent,
        justifyContent: newDisplay !== 'flex' ? '' : attributes.justifyContent,
        alignItems: newDisplay !== 'flex' ? '' : attributes.alignItems,
        alignContent:  newDisplay !== 'grid' ? '' : attributes.alignContent,
        justifyContent:  newDisplay !== 'grid' ? '' : attributes.justifyContent,
        alignItems:  newDisplay !== 'grid' ? '' : attributes.alignItems,
        justifyItems:  newDisplay !== 'grid' ? '' : attributes.justifyItems
    })
}} 