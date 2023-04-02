export default function grid( props ) {

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
            <__experimentalToggleGroupControlOptionIcon value="center" label="Center"  icon={Icons.flexAlignContent1}/>
            <__experimentalToggleGroupControlOptionIcon value="flex-start" label="Flex Start"  icon={Icons.flexAlignContent2}/>
            <__experimentalToggleGroupControlOptionIcon value="flex-end" label="Flex End"  icon={Icons.flexAlignContent3}/>
            <__experimentalToggleGroupControlOptionIcon value="space-around" label="Space Around"  icon={Icons.flexAlignContent4}/>
            <__experimentalToggleGroupControlOptionIcon value="space-between" label="Space Between"  icon={Icons.flexAlignContent5}/>
            <__experimentalToggleGroupControlOptionIcon value="stretch" label="Stretch"  icon={Icons.flexAlignContent6}/>
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
            <__experimentalToggleGroupControlOptionIcon value="center" label="Center" icon={Icons.flexJustifyContent1}/>
            <__experimentalToggleGroupControlOptionIcon value="flex-start" label="Flex Start" icon={Icons.flexJustifyContent2}/>
            <__experimentalToggleGroupControlOptionIcon value="flex-end" label="Flex End" icon={Icons.flexJustifyContent3}/>
            <__experimentalToggleGroupControlOptionIcon value="space-between" label="Space Between" icon={Icons.flexJustifyContent4}/>
            <__experimentalToggleGroupControlOptionIcon value="space-around" label="Space Around" icon={Icons.flexJustifyContent5}/>
            <__experimentalToggleGroupControlOptionIcon value="space-evenly" label="Space Evenly" icon={Icons.flexJustifyContent6}/>
        </div>
    </__experimentalToggleGroupControl>	
</div>

}