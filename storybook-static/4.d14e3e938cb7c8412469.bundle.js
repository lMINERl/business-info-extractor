(window.webpackJsonp=window.webpackJsonp||[]).push([[4,0,6],{1362:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_checkboxDefault__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(635),_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1412),_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2__),_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1413),_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.default=function CheckboxAddFavorite(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkboxDefault__WEBPACK_IMPORTED_MODULE_1__.default,{handleChange:props.handleChange,content:{keyId:props.keyId,defaultValue:void 0},options:{iconShape:{unCheckedIcon:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_2___default.a,null),checkedIcon:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default.a,null)}}})};try{checkboxAddFavorite.displayName="checkboxAddFavorite",checkboxAddFavorite.__docgenInfo={description:"",displayName:"checkboxAddFavorite",props:{handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},keyId:{defaultValue:null,description:"",name:"keyId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/checkbox/checkboxAddFavorite.tsx#checkboxAddFavorite"]={docgenInfo:checkboxAddFavorite.__docgenInfo,name:"checkboxAddFavorite",path:"src/stories/checkbox/checkboxAddFavorite.tsx#checkboxAddFavorite"})}catch(__react_docgen_typescript_loader_error){}try{checkboxAddFavorite.displayName="checkboxAddFavorite",checkboxAddFavorite.__docgenInfo={description:"",displayName:"checkboxAddFavorite",props:{handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},keyId:{defaultValue:null,description:"",name:"keyId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/checkbox/checkboxAddFavorite.tsx#checkboxAddFavorite"]={docgenInfo:checkboxAddFavorite.__docgenInfo,name:"checkboxAddFavorite",path:"src/stories/checkbox/checkboxAddFavorite.tsx#checkboxAddFavorite"})}catch(__react_docgen_typescript_loader_error){}},1376:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var objectSpread2=__webpack_require__(22),slicedToArray=__webpack_require__(15),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Card=__webpack_require__(1339),CardActions=__webpack_require__(1341),CardContent=__webpack_require__(1340),Typography=__webpack_require__(49),makeStyles=__webpack_require__(406),esm_extends=__webpack_require__(2),objectWithoutProperties=__webpack_require__(3),clsx_m=(__webpack_require__(8),__webpack_require__(5)),withStyles=__webpack_require__(7),CardHeader_CardHeader=react.forwardRef((function CardHeader(props,ref){var action=props.action,avatar=props.avatar,classes=props.classes,className=props.className,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,_props$disableTypogra=props.disableTypography,disableTypography=void 0!==_props$disableTypogra&&_props$disableTypogra,subheaderProp=props.subheader,subheaderTypographyProps=props.subheaderTypographyProps,titleProp=props.title,titleTypographyProps=props.titleTypographyProps,other=Object(objectWithoutProperties.a)(props,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),title=titleProp;null==title||title.type===Typography.a||disableTypography||(title=react.createElement(Typography.a,Object(esm_extends.a)({variant:avatar?"body2":"h5",className:classes.title,component:"span",display:"block"},titleTypographyProps),title));var subheader=subheaderProp;return null==subheader||subheader.type===Typography.a||disableTypography||(subheader=react.createElement(Typography.a,Object(esm_extends.a)({variant:avatar?"body2":"body1",className:classes.subheader,color:"textSecondary",component:"span",display:"block"},subheaderTypographyProps),subheader)),react.createElement(Component,Object(esm_extends.a)({className:Object(clsx_m.a)(classes.root,className),ref:ref},other),avatar&&react.createElement("div",{className:classes.avatar},avatar),react.createElement("div",{className:classes.content},title,subheader),action&&react.createElement("div",{className:classes.action},action))})),esm_CardHeader_CardHeader=Object(withStyles.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(CardHeader_CardHeader),createSvgIcon=__webpack_require__(240),Person=Object(createSvgIcon.a)(react.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var Avatar_Avatar=react.forwardRef((function Avatar(props,ref){var alt=props.alt,childrenProp=props.children,classes=props.classes,className=props.className,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,imgProps=props.imgProps,sizes=props.sizes,src=props.src,srcSet=props.srcSet,_props$variant=props.variant,variant=void 0===_props$variant?"circle":_props$variant,other=Object(objectWithoutProperties.a)(props,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),children=null,loaded=function useLoaded(_ref){var src=_ref.src,srcSet=_ref.srcSet,_React$useState=react.useState(!1),loaded=_React$useState[0],setLoaded=_React$useState[1];return react.useEffect((function(){if(src||srcSet){setLoaded(!1);var active=!0,image=new Image;return image.src=src,image.srcSet=srcSet,image.onload=function(){active&&setLoaded("loaded")},image.onerror=function(){active&&setLoaded("error")},function(){active=!1}}}),[src,srcSet]),loaded}({src:src,srcSet:srcSet}),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded;return children=hasImgNotFailing?react.createElement("img",Object(esm_extends.a)({alt:alt,src:src,srcSet:srcSet,sizes:sizes,className:classes.img},imgProps)):null!=childrenProp?childrenProp:hasImg&&alt?alt[0]:react.createElement(Person,{className:classes.fallback}),react.createElement(Component,Object(esm_extends.a)({className:Object(clsx_m.a)(classes.root,classes.system,classes[variant],className,!hasImgNotFailing&&classes.colorDefault),ref:ref},other),children)})),esm_Avatar_Avatar=Object(withStyles.a)((function styles(theme){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:theme.palette.background.default,backgroundColor:"light"===theme.palette.type?theme.palette.grey[400]:theme.palette.grey[600]},circle:{},rounded:{borderRadius:theme.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(Avatar_Avatar),IconButton=__webpack_require__(299),MEDIA_COMPONENTS=["video","audio","picture","iframe","img"],CardMedia_CardMedia=react.forwardRef((function CardMedia(props,ref){var children=props.children,classes=props.classes,className=props.className,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,image=props.image,src=props.src,style=props.style,other=Object(objectWithoutProperties.a)(props,["children","classes","className","component","image","src","style"]),isMediaComponent=-1!==MEDIA_COMPONENTS.indexOf(Component),composedStyle=!isMediaComponent&&image?Object(esm_extends.a)({backgroundImage:'url("'.concat(image,'")')},style):style;return react.createElement(Component,Object(esm_extends.a)({className:Object(clsx_m.a)(classes.root,className,isMediaComponent&&classes.media,-1!=="picture img".indexOf(Component)&&classes.img),ref:ref,style:composedStyle,src:isMediaComponent?image||src:void 0},other),children)})),esm_CardMedia_CardMedia=Object(withStyles.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(CardMedia_CardMedia),red=__webpack_require__(1417),red_default=__webpack_require__.n(red),Share=__webpack_require__(1418),Share_default=__webpack_require__.n(Share),pannelDefault=__webpack_require__(604),checkboxAddFavorite=__webpack_require__(1362),menuDefault=__webpack_require__(602),MoreVert=__webpack_require__(603),MoreVert_default=__webpack_require__.n(MoreVert),replaceableText=__webpack_require__(607),replacableTextArea=__webpack_require__(605),replacableButton=__webpack_require__(606),cardComplexStyles=Object(makeStyles.a)((function(theme){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:theme.transitions.create("transform",{duration:theme.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:red_default.a[500]}}}));__webpack_exports__.default=function CardComplex(props){var classes=cardComplexStyles(),_React$useState=react_default.a.useState(!1),_React$useState2=Object(slicedToArray.a)(_React$useState,2),editMode=_React$useState2[0],setEditMode=_React$useState2[1],_React$useState3=react_default.a.useState({settings:[],AvatarChar:"",title:"",subTitle:"",image:{path:"",title:""},description:"",pannel:react_default.a.createElement(react_default.a.Fragment,null)}),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),cardContent=_React$useState4[0],setCardContent=_React$useState4[1];react_default.a.useEffect((function(){setCardContent((function(old){return Object(objectSpread2.a)(Object(objectSpread2.a)({},old),props.cardContent)}))}),[props.cardContent]),react_default.a.useEffect((function(){var _props$shouldEdit;setEditMode(null!==(_props$shouldEdit=props.shouldEdit)&&void 0!==_props$shouldEdit&&_props$shouldEdit)}),[props.shouldEdit]);var CardAvatar=Object(react.useMemo)((function(){return console.log("avatarChanged"),props.hasAvatar?react_default.a.createElement(esm_Avatar_Avatar,{"aria-label":"recipe",className:classes.avatar},cardContent.AvatarChar):null}),[props.hasAvatar,classes.avatar,cardContent.AvatarChar]),CardSettings=Object(react.useMemo)((function(){return props.hasSettings&&cardContent.settings.length?react_default.a.createElement(replacableButton.a,{shouldReplace:editMode,defaultText:"Save",click:props.onSaveClick,mainElement:function mainElement(){return react_default.a.createElement(menuDefault.a,{content:{menuList:cardContent.settings},shape:{buttonIcon:react_default.a.createElement(MoreVert_default.a,null)}})}}):null}),[props.hasSettings,cardContent.settings,editMode,props.onSaveClick]),CardImage=Object(react.useMemo)((function(){return props.hasImage?react_default.a.createElement(esm_CardMedia_CardMedia,{className:classes.media,image:cardContent.image.path,title:cardContent.image.title}):null}),[props.hasImage,cardContent.image,classes.media]),CardFavourate=Object(react.useMemo)((function(){return props.hasFavourate?react_default.a.createElement(checkboxAddFavorite.default,{handleChange:props.onFavourateClick,keyId:"add Fav"}):null}),[props.hasFavourate,props.onFavourateClick]),CardShare=Object(react.useMemo)((function(){return props.hasShare?react_default.a.createElement(IconButton.a,{"aria-label":"share",onClick:props.onShareClick},react_default.a.createElement(Share_default.a,null)):null}),[props.hasShare,props.onShareClick]),CardPannel=props.hasPannel?Object(pannelDefault.a)(react_default.a.createElement(CardContent.a,null,cardContent.pannel)):null,Title=react_default.a.useMemo((function(){return react_default.a.createElement(replaceableText.a,{defaultText:cardContent.title,shouldReplace:editMode,change:props.onTitleChange,mainElement:function mainElement(){return react_default.a.createElement(Typography.a,{component:"h6"},cardContent.title)}})}),[editMode,cardContent.title,props.onTitleChange]),SubTitle=react_default.a.useMemo((function(){return react_default.a.createElement(replaceableText.a,{defaultText:cardContent.subTitle,shouldReplace:editMode,change:props.onSubTitleChange,mainElement:function mainElement(){return react_default.a.createElement(Typography.a,{component:"a",color:"textSecondary"},cardContent.subTitle||"")}})}),[editMode,cardContent.subTitle,props.onSubTitleChange]),cardHeader=Object(react.useMemo)((function(){return react_default.a.createElement(esm_CardHeader_CardHeader,{avatar:CardAvatar,action:CardSettings,title:Title,subheader:SubTitle})}),[SubTitle,Title,CardAvatar,CardSettings]),descriptionCom=react_default.a.useMemo((function(){return props.hasDescription?react_default.a.createElement(replacableTextArea.a,{change:props.onDescriptionChange,defaultText:cardContent.description,shouldReplace:editMode,shape:{rows:5,cols:30},mainElement:function mainElement(){return react_default.a.createElement(Typography.a,{variant:"body2",color:"textSecondary",component:"p"},cardContent.description)}}):null}),[props.hasDescription,cardContent.description,editMode,props.onDescriptionChange]);return react_default.a.createElement(Card.a,{className:classes.root},cardHeader,CardImage,react_default.a.createElement(CardContent.a,null,descriptionCom),react_default.a.createElement(CardActions.a,null,CardFavourate,CardShare,CardPannel?CardPannel.Icon:null),CardPannel?CardPannel.Pannel:null)};try{cardComplex.displayName="cardComplex",cardComplex.__docgenInfo={description:"",displayName:"cardComplex",props:{hasAvatar:{defaultValue:null,description:"",name:"hasAvatar",required:!1,type:{name:"boolean"}},hasSettings:{defaultValue:null,description:"",name:"hasSettings",required:!1,type:{name:"boolean"}},hasShare:{defaultValue:null,description:"",name:"hasShare",required:!1,type:{name:"boolean"}},hasFavourate:{defaultValue:null,description:"",name:"hasFavourate",required:!1,type:{name:"boolean"}},hasDescription:{defaultValue:null,description:"",name:"hasDescription",required:!1,type:{name:"boolean"}},hasPannel:{defaultValue:null,description:"",name:"hasPannel",required:!1,type:{name:"boolean"}},hasImage:{defaultValue:null,description:"",name:"hasImage",required:!1,type:{name:"boolean"}},shouldEdit:{defaultValue:null,description:"",name:"shouldEdit",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"CardVariant"}},cardContent:{defaultValue:null,description:"",name:"cardContent",required:!1,type:{name:"CardContent"}},onSaveClick:{defaultValue:null,description:"",name:"onSaveClick",required:!1,type:{name:"any"}},onFavourateClick:{defaultValue:null,description:"",name:"onFavourateClick",required:!1,type:{name:"any"}},onShareClick:{defaultValue:null,description:"",name:"onShareClick",required:!1,type:{name:"any"}},onTitleChange:{defaultValue:null,description:"",name:"onTitleChange",required:!1,type:{name:"any"}},onSubTitleChange:{defaultValue:null,description:"",name:"onSubTitleChange",required:!1,type:{name:"any"}},onDescriptionChange:{defaultValue:null,description:"",name:"onDescriptionChange",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/cards/cardComplex.tsx#cardComplex"]={docgenInfo:cardComplex.__docgenInfo,name:"cardComplex",path:"src/stories/cards/cardComplex.tsx#cardComplex"})}catch(__react_docgen_typescript_loader_error){}try{cardComplex.displayName="cardComplex",cardComplex.__docgenInfo={description:"",displayName:"cardComplex",props:{hasAvatar:{defaultValue:null,description:"",name:"hasAvatar",required:!1,type:{name:"boolean"}},hasSettings:{defaultValue:null,description:"",name:"hasSettings",required:!1,type:{name:"boolean"}},hasShare:{defaultValue:null,description:"",name:"hasShare",required:!1,type:{name:"boolean"}},hasFavourate:{defaultValue:null,description:"",name:"hasFavourate",required:!1,type:{name:"boolean"}},hasDescription:{defaultValue:null,description:"",name:"hasDescription",required:!1,type:{name:"boolean"}},hasPannel:{defaultValue:null,description:"",name:"hasPannel",required:!1,type:{name:"boolean"}},hasImage:{defaultValue:null,description:"",name:"hasImage",required:!1,type:{name:"boolean"}},shouldEdit:{defaultValue:null,description:"",name:"shouldEdit",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"CardVariant"}},cardContent:{defaultValue:null,description:"",name:"cardContent",required:!1,type:{name:"CardContent"}},onSaveClick:{defaultValue:null,description:"",name:"onSaveClick",required:!1,type:{name:"any"}},onFavourateClick:{defaultValue:null,description:"",name:"onFavourateClick",required:!1,type:{name:"any"}},onShareClick:{defaultValue:null,description:"",name:"onShareClick",required:!1,type:{name:"any"}},onTitleChange:{defaultValue:null,description:"",name:"onTitleChange",required:!1,type:{name:"any"}},onSubTitleChange:{defaultValue:null,description:"",name:"onSubTitleChange",required:!1,type:{name:"any"}},onDescriptionChange:{defaultValue:null,description:"",name:"onDescriptionChange",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/cards/cardComplex.tsx#cardComplex"]={docgenInfo:cardComplex.__docgenInfo,name:"cardComplex",path:"src/stories/cards/cardComplex.tsx#cardComplex"})}catch(__react_docgen_typescript_loader_error){}},1409:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(107);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_default=(0,_interopRequireDefault(__webpack_require__(122)).default)(_react.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");exports.default=_default},1410:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(107);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_default=(0,_interopRequireDefault(__webpack_require__(122)).default)(_react.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");exports.default=_default},1411:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(107);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_default=(0,_interopRequireDefault(__webpack_require__(122)).default)(_react.default.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");exports.default=_default},1412:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(107);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_default=(0,_interopRequireDefault(__webpack_require__(122)).default)(_react.default.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");exports.default=_default},1413:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(107);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_default=(0,_interopRequireDefault(__webpack_require__(122)).default)(_react.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");exports.default=_default},1417:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};exports.default=_default},1418:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(107);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_default=(0,_interopRequireDefault(__webpack_require__(122)).default)(_react.default.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");exports.default=_default},635:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var toConsumableArray=__webpack_require__(84),objectSpread2=__webpack_require__(22),slicedToArray=__webpack_require__(15),react=__webpack_require__(0),react_default=__webpack_require__.n(react),IconButton=__webpack_require__(299),CheckBox=__webpack_require__(1409),CheckBox_default=__webpack_require__.n(CheckBox),CheckBoxOutlineBlank=__webpack_require__(1410),CheckBoxOutlineBlank_default=__webpack_require__.n(CheckBoxOutlineBlank),IndeterminateCheckBox=__webpack_require__(1411),IndeterminateCheckBox_default=__webpack_require__.n(IndeterminateCheckBox),FormLabel=__webpack_require__(1345),labels_labelForm=function LabelForm(props){return react_default.a.createElement(FormLabel.a,{htmlFor:props.content.forId},props.content.text)};try{labelForm.displayName="labelForm",labelForm.__docgenInfo={description:"",displayName:"labelForm",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"{ text: string; forId?: string | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/labels/labelForm.tsx#labelForm"]={docgenInfo:labelForm.__docgenInfo,name:"labelForm",path:"src/stories/labels/labelForm.tsx#labelForm"})}catch(__react_docgen_typescript_loader_error){}try{labelForm.displayName="labelForm",labelForm.__docgenInfo={description:"",displayName:"labelForm",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"{ text: string; forId?: string | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/labels/labelForm.tsx#labelForm"]={docgenInfo:labelForm.__docgenInfo,name:"labelForm",path:"src/stories/labels/labelForm.tsx#labelForm"})}catch(__react_docgen_typescript_loader_error){}var defaultCheckboxIconShapes={checkedIcon:react_default.a.createElement(CheckBox_default.a,null),unCheckedIcon:react_default.a.createElement(CheckBoxOutlineBlank_default.a,null),intermidiateIcon:react_default.a.createElement(IndeterminateCheckBox_default.a,null)},defaultCheckboxIconValues={unCheckedIconValue:!1,checkIconValue:!0,intermidateIconValue:void 0};__webpack_exports__.default=function CheckboxDefault(props){var options=props.options?props.options:{iconShape:defaultCheckboxIconShapes,iconValues:defaultCheckboxIconValues},iconShape=options.iconShape?options.iconShape:defaultCheckboxIconShapes,iconValue=options.iconValues?options.iconValues:defaultCheckboxIconValues,_useReducer=Object(react.useReducer)((function(state,action){var newState=Object(objectSpread2.a)({},state),newValueArr=Object(toConsumableArray.a)(newState.valueArr),newShapeArr=Object(toConsumableArray.a)(newState.shapeArr);return options.iconValues&&options.iconValues.intermidateIconValue&&(newValueArr.push(iconValue.intermidateIconValue),newShapeArr.push(iconShape.intermidiateIcon)),Object(objectSpread2.a)(Object(objectSpread2.a)({},newState),{},{valueArr:newValueArr,shapeArr:newShapeArr})}),{valueArr:[iconValue.unCheckedIconValue,iconValue.checkIconValue],shapeArr:[iconShape.unCheckedIcon,iconShape.checkedIcon]}),_useReducer2=Object(slicedToArray.a)(_useReducer,2),optionsState=_useReducer2[0],optionsDispatch=_useReducer2[1],_useReducer3=Object(react.useReducer)((function(state,payload){var newState=Object(objectSpread2.a)({},state);return newState.count<optionsState.valueArr.length-1?newState.count=newState.count+1:newState.count=0,Object(objectSpread2.a)({},newState)}),{count:0}),_useReducer4=Object(slicedToArray.a)(_useReducer3,2),countState=_useReducer4[0],changeCountDispatch=_useReducer4[1],_useReducer5=Object(react.useReducer)((function(state,payload){var newState=Object(objectSpread2.a)({},state);return newState.value=optionsState.valueArr[payload],Object(objectSpread2.a)({},newState)}),{name:props.content.keyId,id:props.content.keyId,value:optionsState.valueArr[countState.count]}),_useReducer6=Object(slicedToArray.a)(_useReducer5,2),changeHandleState=_useReducer6[0],changeHandleDispatch=_useReducer6[1];Object(react.useEffect)((function(){optionsDispatch()}),[]);var formLabel=Object(react.useMemo)((function(){return props.content.label?react_default.a.createElement(labels_labelForm,{content:{text:props.content.label,forId:props.content.keyId}}):null}),[props.content.keyId,props.content.label]),iconButton=Object(react.useMemo)((function(){return react_default.a.createElement(IconButton.a,{name:props.content.keyId,id:props.content.keyId,defaultValue:props.content.defaultValue,value:optionsState.valueArr[countState.count],onClick:function onClick(){changeCountDispatch(),changeHandleDispatch(countState.count),props.handleChange({target:Object(objectSpread2.a)({},changeHandleState)})}},optionsState.shapeArr[countState.count])}),[countState.count,props,optionsState,changeHandleState]);return react_default.a.createElement("div",null,iconButton,formLabel)};try{checkboxDefault.displayName="checkboxDefault",checkboxDefault.__docgenInfo={description:"",displayName:"checkboxDefault",props:{handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(event: any) => void"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"CheckBoxContent"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ iconShape?: CheckBoxIconShapes; iconValues?: CheckBoxIconValues | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/checkbox/checkboxDefault.tsx#checkboxDefault"]={docgenInfo:checkboxDefault.__docgenInfo,name:"checkboxDefault",path:"src/stories/checkbox/checkboxDefault.tsx#checkboxDefault"})}catch(__react_docgen_typescript_loader_error){}try{checkboxDefault.displayName="checkboxDefault",checkboxDefault.__docgenInfo={description:"",displayName:"checkboxDefault",props:{handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(event: any) => void"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"CheckBoxContent"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ iconShape?: CheckBoxIconShapes; iconValues?: CheckBoxIconValues | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/checkbox/checkboxDefault.tsx#checkboxDefault"]={docgenInfo:checkboxDefault.__docgenInfo,name:"checkboxDefault",path:"src/stories/checkbox/checkboxDefault.tsx#checkboxDefault"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=4.d14e3e938cb7c8412469.bundle.js.map