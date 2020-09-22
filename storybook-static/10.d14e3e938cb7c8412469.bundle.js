(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11],{1363:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm_extends=__webpack_require__(2),objectWithoutProperties=__webpack_require__(3),clsx_m=(__webpack_require__(8),__webpack_require__(5)),createSvgIcon=__webpack_require__(240),Cancel=Object(createSvgIcon.a)(react.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),withStyles=__webpack_require__(7),colorManipulator=__webpack_require__(30),useForkRef=__webpack_require__(16),capitalize=__webpack_require__(19),ButtonBase=__webpack_require__(632);function isDeleteKeyboardEvent(keyboardEvent){return"Backspace"===keyboardEvent.key||"Delete"===keyboardEvent.key}var Chip_Chip=react.forwardRef((function Chip(props,ref){var avatarProp=props.avatar,classes=props.classes,className=props.className,clickableProp=props.clickable,_props$color=props.color,color=void 0===_props$color?"default":_props$color,ComponentProp=props.component,deleteIconProp=props.deleteIcon,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,iconProp=props.icon,label=props.label,onClick=props.onClick,onDelete=props.onDelete,onKeyDown=props.onKeyDown,onKeyUp=props.onKeyUp,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,_props$variant=props.variant,variant=void 0===_props$variant?"default":_props$variant,other=Object(objectWithoutProperties.a)(props,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),chipRef=react.useRef(null),handleRef=Object(useForkRef.a)(chipRef,ref),handleDeleteIconClick=function handleDeleteIconClick(event){event.stopPropagation(),onDelete&&onDelete(event)},clickable=!(!1===clickableProp||!onClick)||clickableProp,small="small"===size,Component=ComponentProp||(clickable?ButtonBase.a:"div"),moreProps=Component===ButtonBase.a?{component:"div"}:{},deleteIcon=null;if(onDelete){var customClasses=Object(clsx_m.a)("default"!==color&&("default"===variant?classes["deleteIconColor".concat(Object(capitalize.a)(color))]:classes["deleteIconOutlinedColor".concat(Object(capitalize.a)(color))]),small&&classes.deleteIconSmall);deleteIcon=deleteIconProp&&react.isValidElement(deleteIconProp)?react.cloneElement(deleteIconProp,{className:Object(clsx_m.a)(deleteIconProp.props.className,classes.deleteIcon,customClasses),onClick:handleDeleteIconClick}):react.createElement(Cancel,{className:Object(clsx_m.a)(classes.deleteIcon,customClasses),onClick:handleDeleteIconClick})}var avatar=null;avatarProp&&react.isValidElement(avatarProp)&&(avatar=react.cloneElement(avatarProp,{className:Object(clsx_m.a)(classes.avatar,avatarProp.props.className,small&&classes.avatarSmall,"default"!==color&&classes["avatarColor".concat(Object(capitalize.a)(color))])}));var icon=null;return iconProp&&react.isValidElement(iconProp)&&(icon=react.cloneElement(iconProp,{className:Object(clsx_m.a)(classes.icon,iconProp.props.className,small&&classes.iconSmall,"default"!==color&&classes["iconColor".concat(Object(capitalize.a)(color))])})),react.createElement(Component,Object(esm_extends.a)({role:clickable||onDelete?"button":void 0,className:Object(clsx_m.a)(classes.root,className,"default"!==color&&[classes["color".concat(Object(capitalize.a)(color))],clickable&&classes["clickableColor".concat(Object(capitalize.a)(color))],onDelete&&classes["deletableColor".concat(Object(capitalize.a)(color))]],"default"!==variant&&[classes.outlined,{primary:classes.outlinedPrimary,secondary:classes.outlinedSecondary}[color]],disabled&&classes.disabled,small&&classes.sizeSmall,clickable&&classes.clickable,onDelete&&classes.deletable),"aria-disabled":!!disabled||void 0,tabIndex:clickable||onDelete?0:void 0,onClick:onClick,onKeyDown:function handleKeyDown(event){event.currentTarget===event.target&&isDeleteKeyboardEvent(event)&&event.preventDefault(),onKeyDown&&onKeyDown(event)},onKeyUp:function handleKeyUp(event){event.currentTarget===event.target&&(onDelete&&isDeleteKeyboardEvent(event)?onDelete(event):"Escape"===event.key&&chipRef.current&&chipRef.current.blur()),onKeyUp&&onKeyUp(event)},ref:handleRef},moreProps,other),avatar||icon,react.createElement("span",{className:Object(clsx_m.a)(classes.label,small&&classes.labelSmall)},label),deleteIcon)})),esm_Chip_Chip=Object(withStyles.a)((function styles(theme){var backgroundColor="light"===theme.palette.type?theme.palette.grey[300]:theme.palette.grey[700],deleteIconColor=Object(colorManipulator.c)(theme.palette.text.primary,.26);return{root:{fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:theme.palette.getContrastText(backgroundColor),backgroundColor:backgroundColor,borderRadius:16,whiteSpace:"nowrap",transition:theme.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===theme.palette.type?theme.palette.grey[700]:theme.palette.grey[300],fontSize:theme.typography.pxToRem(12)},"& $avatarColorPrimary":{color:theme.palette.primary.contrastText,backgroundColor:theme.palette.primary.dark},"& $avatarColorSecondary":{color:theme.palette.secondary.contrastText,backgroundColor:theme.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:theme.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:theme.palette.primary.main,color:theme.palette.primary.contrastText},colorSecondary:{backgroundColor:theme.palette.secondary.main,color:theme.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(colorManipulator.b)(backgroundColor,.08)},"&:active":{boxShadow:theme.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(colorManipulator.b)(theme.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(colorManipulator.b)(theme.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(colorManipulator.b)(backgroundColor,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(colorManipulator.b)(theme.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(colorManipulator.b)(theme.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===theme.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(colorManipulator.c)(theme.palette.text.primary,theme.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:theme.palette.primary.main,border:"1px solid ".concat(theme.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(colorManipulator.c)(theme.palette.primary.main,theme.palette.action.hoverOpacity)}},outlinedSecondary:{color:theme.palette.secondary.main,border:"1px solid ".concat(theme.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(colorManipulator.c)(theme.palette.secondary.main,theme.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===theme.palette.type?theme.palette.grey[700]:theme.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:deleteIconColor,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(colorManipulator.c)(deleteIconColor,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(colorManipulator.c)(theme.palette.primary.contrastText,.7),"&:hover, &:active":{color:theme.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(colorManipulator.c)(theme.palette.secondary.contrastText,.7),"&:hover, &:active":{color:theme.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(colorManipulator.c)(theme.palette.primary.main,.7),"&:hover, &:active":{color:theme.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(colorManipulator.c)(theme.palette.secondary.main,.7),"&:hover, &:active":{color:theme.palette.secondary.main}}}}),{name:"MuiChip"})(Chip_Chip),makeStyles=__webpack_require__(406),useStyles=Object(makeStyles.a)((function(theme){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:theme.spacing(.5),margin:0},chip:{margin:theme.spacing(.5)}}}));__webpack_exports__.default=function ChipDefault(props){var _props$shape,_props$options,_options$onDelete,_shape$deleteIcon,classes=useStyles(),shape=null!==(_props$shape=props.shape)&&void 0!==_props$shape?_props$shape:{icon:void 0},options=null!==(_props$options=props.options)&&void 0!==_props$options?_props$options:{},icon=shape.icon,deleteHandle=null!==(_options$onDelete=options.onDelete)&&void 0!==_options$onDelete?_options$onDelete:void 0,deleteIcon=null!==(_shape$deleteIcon=shape.deleteIcon)&&void 0!==_shape$deleteIcon?_shape$deleteIcon:void 0;return react_default.a.createElement(esm_Chip_Chip,{variant:shape.variant?shape.variant:"default",icon:icon,label:props.text,deleteIcon:deleteIcon,onDelete:deleteHandle,size:shape.size,className:classes.chip})};try{chipDefault.displayName="chipDefault",chipDefault.__docgenInfo={description:"",displayName:"chipDefault",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'{ icon?: Element; variant?: "outlined" | "default" | undefined; size?: "small" | "medium" | undefined; deleteIcon?: Element | undefined; } | undefined'}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ onDelete?: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/chip/chipDefault.tsx#chipDefault"]={docgenInfo:chipDefault.__docgenInfo,name:"chipDefault",path:"src/stories/chip/chipDefault.tsx#chipDefault"})}catch(__react_docgen_typescript_loader_error){}try{chipDefault.displayName="chipDefault",chipDefault.__docgenInfo={description:"",displayName:"chipDefault",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'{ icon?: Element; variant?: "outlined" | "default" | undefined; size?: "small" | "medium" | undefined; deleteIcon?: Element | undefined; } | undefined'}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ onDelete?: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/chip/chipDefault.tsx#chipDefault"]={docgenInfo:chipDefault.__docgenInfo,name:"chipDefault",path:"src/stories/chip/chipDefault.tsx#chipDefault"})}catch(__react_docgen_typescript_loader_error){}},1372:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(406),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(628),_chipDefault__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1363),useStyles=Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a)((function(theme){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:theme.spacing(.5),margin:0},chip:{margin:theme.spacing(.5)}}}));__webpack_exports__.default=function ChipArray(props){var classes=useStyles(),chipList=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return props.list.length?props.list.map((function(value,index){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chipDefault__WEBPACK_IMPORTED_MODULE_3__.default,{text:value,options:{onDelete:function onDelete(){return props.onDeleteDispatch({valueToDel:value})}}}))})):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chipDefault__WEBPACK_IMPORTED_MODULE_3__.default,{text:"no Tags"})}),[props]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__.a,{component:"ul",className:classes.root},chipList)};try{chipArray.displayName="chipArray",chipArray.__docgenInfo={description:"",displayName:"chipArray",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"string[]"}},onDeleteDispatch:{defaultValue:null,description:"",name:"onDeleteDispatch",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/chip/chipArray.tsx#chipArray"]={docgenInfo:chipArray.__docgenInfo,name:"chipArray",path:"src/stories/chip/chipArray.tsx#chipArray"})}catch(__react_docgen_typescript_loader_error){}try{chipArray.displayName="chipArray",chipArray.__docgenInfo={description:"",displayName:"chipArray",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"string[]"}},onDeleteDispatch:{defaultValue:null,description:"",name:"onDeleteDispatch",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/chip/chipArray.tsx#chipArray"]={docgenInfo:chipArray.__docgenInfo,name:"chipArray",path:"src/stories/chip/chipArray.tsx#chipArray"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=10.d14e3e938cb7c8412469.bundle.js.map