import{D as p}from"./dropdown.esm-67ca2bc6.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./api.esm-e57be548.js";import"./componentbase.esm-f35515f0.js";import"./hooks.esm-2e882e60.js";import"./index.esm-7d9aec4e.js";import"./iconbase.esm-64142d35.js";import"./index.esm-8d6e6251.js";import"./overlayservice.esm-f3934ea7.js";import"./tooltip.esm-969ffd2f.js";import"./portal.esm-d730a851.js";import"./index-d3ea75b5.js";import"./csstransition.esm-2b0eb2be.js";import"./inheritsLoose-9eefaa95.js";import"./index.esm-57909d8b.js";import"./virtualscroller.esm-2354ac79.js";import"./index.esm-26cfcfc5.js";import"./ripple.esm-42b8b102.js";const D={title:"Form/Dropdown",component:p,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:'DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and "self". The "self" value is used to render a component where it is located.',options:["null","HTMLElement","self"]},ariaLabel:{control:"text",description:"Used to define a string that labels the component.",options:null},ariaLabelledBy:{control:"text",description:"Establishes relationships between the component and label(s) where its value should be one or more element IDs.",options:null},autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},className:{control:"text",description:"Style class of the component.",options:null},clearIcon:{control:"select",description:"Icon of the dropdown.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},dataKey:{control:"text",description:"A property to uniquely match the value in options for better performance.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the component should be disabled.",options:null},dropdownIcon:{control:"select",description:"Icon of the dropdown.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},editable:{control:"boolean",description:"When present, custom value instead of predefined options can be entered using the editable input field.",options:null},emptyFilterMessage:{control:"text",description:"Template to display when filtering does not return any results.",options:null},emptyMessage:{control:"text",description:"Text to display when there are no options available.",options:null},filter:{control:"boolean",description:"When specified, displays an input field to filter the items on keyup.",options:null},filterBy:{control:"text",description:"When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.",options:null},filterClearIcon:{control:"select",description:"Icon of the filter to clear.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},filterIcon:{control:"select",description:"Icon of the filter to search.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},filterInputAutoFocus:{control:"boolean",description:"When the panel is opened, it specifies that the filter input should focus automatically.",options:null},filterLocale:{control:"text",description:"Locale to use in filtering. The default locale is the host environment's current locale.",options:null},filterMatchMode:{control:"select",description:"Defines how the items are filtered.",options:["endsWith","startsWith","contains","equals","notEquals"]},filterPlaceholder:{control:"text",description:"Placeholder text to show when filter input is empty.",options:null},filterTemplate:{control:"text",description:"The template of filter element.",options:null},focusInputRef:{control:"object",description:"Reference of the focusable input element.",options:null},id:{control:"text",description:"Unique identifier of the element.",options:null},inputId:{control:"text",description:"Identifier of the focusable input.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},itemTemplate:{control:"text",description:"The template of items.",options:null},maxLength:{control:"number",description:"Maximum number of characters to be typed on an editable input.",options:null},name:{control:"text",description:"Name of the input element.",options:null},optionDisabled:{control:"select",description:"Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.",options:["string","Function"]},optionGroupChildren:{control:"text",description:"Property name or getter function that refers to the children options of option group.",options:null},optionGroupLabel:{control:"text",description:"Property name or getter function to use as the label of an option group.",options:null},optionGroupTemplate:{control:"text",description:"Template of an option group item.",options:null},optionLabel:{control:"text",description:"Name of the label field of an option when arbitrary objects are used as options instead of SelectItems.",options:null},options:{control:"object",description:"An array of selectitems to display as the available options.",options:null},optionValue:{control:"text",description:"Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.",options:null},panelClassName:{control:"text",description:"Style class of the overlay panel element.",options:null},panelFooterTemplate:{control:"text",description:"Template of the panel footer.",options:null},panelStyle:{control:"object",description:"Inline style of the overlay panel element.",options:null},placeholder:{control:"text",description:"Default text to display when no option is selected.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},required:{control:"boolean",description:"When present, it specifies that an input field must be filled out before submitting the form.",options:null},resetFilterOnHide:{control:"boolean",description:"Clears the filter value when hiding the dropdown.",options:null},scrollHeight:{control:"text",description:"Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.",options:null},showClear:{control:"boolean",description:"When enabled, a clear icon is displayed to clear the value.",options:null},showFilterClear:{control:"boolean",description:"When enabled, a clear icon is displayed to clear the filtered value.",options:null},showOnFocus:{control:"boolean",description:"When enabled, overlay panel will be visible with input focus.",options:null},style:{control:"object",description:"Inline style of the element.",options:null},tabIndex:{control:"number",description:"Index of the element in tabbing order.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"Value of the component.",options:null},valueTemplate:{control:"text",description:"The template of selected item.",options:null},virtualScrollerOptions:{control:"object",description:"Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.",options:null}}},i={args:{placeholder:"Dropdown",unstyled:!1,options:[{label:"PrimeReact Rocks!",value:"1"},{label:"StoryBook Rocks!",value:"2"}],optionLabel:"label",optionValue:"value"}};var e,o,t;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    "placeholder": "Dropdown",
    "unstyled": false,
    "options": [{
      "label": "PrimeReact Rocks!",
      "value": "1"
    }, {
      "label": "StoryBook Rocks!",
      "value": "2"
    }],
    "optionLabel": "label",
    "optionValue": "value"
  }
}`,...(t=(o=i.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const j=["Default"];export{i as Default,j as __namedExportsOrder,D as default};