(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{283:function(e,t,a){e.exports=a(377)},288:function(e,t,a){},289:function(e,t,a){},376:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),c=(a(288),a(289),a(24)),o=a(42),u=a(72),s=a(54),p=a(79),d=a(73),m=a(36),b=a(78),f=a(46),E="ADD_DETAIL",g="DELETE_PRODUCT",h="GET_PRODUCT",O="ADD_INLINE_PRODUCT",y="CLEAR_INLINE_PRODUCT",v="CHECK_INLINE_PRODUCT",S="SUBMIT_SUPPLIER_DATA",x="CLOSE_SNACKBAR",j="GET_SUPPLIER",C="FORM_SUBMITTED",P="SET_VALUE",I="https://projectsupplier.herokuapp.com/",D=a(83),N=a.n(D);function k(e){return function(t){t({type:P,payload:e})}}function T(e){return function(t){N.a.post(I+"/product/get",{supplierId:e}).then(function(e){"SUCCESSFUL"===e.data.type&&t({type:h,payload:{product:e.data.response}})}).catch(function(e){})}}var F=a(243),_=a(237),A=a(203),U=a(229),w=a(116),R=a(234),B=a(225),L=a(378),M=a(84),V=a(75),z=a.n(V),K=a(392),G=a(393),Q=a(394),W=a(395),q=a(226),H=a(260),X=a.n(H),Z=a(242),J=a(240),Y=a(82);function $(e){return function(t){t({type:P,payload:e})}}function ee(){return function(e){N.a.get(I+"/supplier/get").then(function(t){"SUCCESSFUL"===t.data.type&&e({type:j,payload:{suppliers:t.data.response}})}).catch(function(e){})}}var te=a(233),ae=(Object(L.a)({paper:{padding:10}})(U.a),Object(L.a)({root:{color:"#bdbdbd"}})(M.a)),ne=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={editClicked:!1,productId:"",product:{productName:"",itemQty:0,uom:"KG",packSize:"",packUom:"KG",unitPrice:0,totalPrice:0},addProduct:{productName:"",itemQty:"",uom:"KG",packSize:"",packUom:"KG",unitPrice:"",totalPrice:""},addProductRequiredFields:[],requiredFields:[],showError:!1},a.handleChange=function(e,t){var n=t.target,r=e?"addProduct":"product";if(a.state.productId,r="product","itemQty"===n.name||"unitPrice"===n.name){var i,l="itemQty"===n.name?"unitPrice":"itemQty",u=(n.name,Number(n.value).toFixed(2));a.setState(Object(c.a)({},r,Object(o.a)({},a.state[r],(i={},Object(c.a)(i,n.name,u),Object(c.a)(i,"totalPrice",(n.value*a.state[r][l]).toFixed(2)),i))))}else a.setState(Object(c.a)({},r,Object(o.a)({},a.state[r],Object(c.a)({},t.target.name,t.target.value))))},a.popupHide=function(e){var t=a.props,n=t.setProductValue,r=t.clearInlineProduct;n({editClicked:!1}),e&&r(),a.setState(Object(c.a)({},"product",{productName:"",itemQty:0,uom:"KG",packSize:"",packUom:"KG",unitPrice:0,totalPrice:0}))},a.clearForm=function(e){a.setState(Object(c.a)({},e,{productName:"",itemQty:0,uom:"KG",packSize:"",packUom:"KG",unitPrice:0,totalPrice:0}))},a.saveData=function(e,t){t.preventDefault();var n,r=a.state.product,i=a.props,l=i.addData,u=i.supplierId,s=["productName","itemQty","uom","packSize","packUom","unitPrice","totalPrice"];(s=s.filter(function(e){return"unitPrice"===e||"packSize"===e||"totalPrice"===e?!Number(r[e])||(Number(r[e])<=0||""===r[e].toString().trim()):!r[e]})).length?(a.setState((n={},Object(c.a)(n,"product",Object(o.a)({},a.state.product)),Object(c.a)(n,"requiredFields",s),n)),setTimeout(function(){var e;a.setState((e={},Object(c.a)(e,"product",Object(o.a)({},a.state.product)),Object(c.a)(e,"requiredFields",[]),e))},500)):(l({data:Object(o.a)({},a.state.product,{supplierId:u})},"ADD_INLINE_PRODUCT"!==a.state.productId),a.clearForm("product"))},a.renderRow=function(e){var t=e.data;if(!0===a.props.editClicked&&t._id===a.state.productId){var n=a.state.product,i=n.productName,l=n.itemQty,c=n.uom,o=n.packSize,u=n.packUom,s=n.unitPrice,p=(n.totalPrice,a.state.requiredFields);return r.a.createElement(Z.a,null,r.a.createElement(J.a,null,e.index+1),r.a.createElement(J.a,null,r.a.createElement(F.a,{margin:"dense",value:i,name:"productName",onChange:a.handleChange.bind(Object(m.a)(a),!1),error:-1!==p.indexOf("productName")})),r.a.createElement(J.a,null,r.a.createElement(F.a,{margin:"dense",value:l,name:"itemQty",type:"number",onChange:a.handleChange.bind(Object(m.a)(a),!1),error:-1!==p.indexOf("itemQty")})),r.a.createElement(J.a,null,r.a.createElement(A.a,{value:c,name:"uom",onChange:a.handleChange.bind(Object(m.a)(a),!1),error:-1!==p.indexOf("uom")},r.a.createElement(_.a,{value:"KG"},"Kg"),r.a.createElement(_.a,{value:"LTR"},"Ltr"),r.a.createElement(_.a,{value:"LBS"},"lbs"))),r.a.createElement(J.a,null,r.a.createElement(F.a,{margin:"dense",value:o,name:"packSize",type:"number",onChange:a.handleChange.bind(Object(m.a)(a),!1),error:-1!==p.indexOf("packSize")})),r.a.createElement(J.a,null,r.a.createElement(A.a,{name:"packUom",value:u,onChange:a.handleChange.bind(Object(m.a)(a),!1),error:-1!==p.indexOf("packUom")},r.a.createElement(_.a,{value:"KG"},"Kg"),r.a.createElement(_.a,{value:"LTR"},"Ltr"),r.a.createElement(_.a,{value:"LBS"},"lbs"))),r.a.createElement(J.a,null,r.a.createElement(F.a,{margin:"dense",value:-1!==(s+"").indexOf(".")?s:s+".00",name:"unitPrice",type:"number",onChange:a.handleChange.bind(Object(m.a)(a),!1),error:-1!==p.indexOf("unitPrice")})),r.a.createElement(J.a,null,r.a.createElement(F.a,{margin:"dense",value:-1===(l*s+"").indexOf(".")?l*s+".00":l*s,name:"totalPrice",type:"number",disabled:!0,onChange:a.handleChange.bind(Object(m.a)(a),!1),error:-1!==p.indexOf("totalPrice")})),r.a.createElement(J.a,{style:{display:"flex",flexDirection:"row"}},r.a.createElement(q.a,{onClick:a.saveData.bind(Object(m.a)(a),"ADD_INLINE_PRODUCT"===t._id)},r.a.createElement(K.a,null)),r.a.createElement(q.a,{onClick:a.popupHide.bind(Object(m.a)(a),"ADD_INLINE_PRODUCT"===t._id)},r.a.createElement(G.a,null))))}return r.a.createElement(Z.a,null,r.a.createElement(J.a,null,e.index+1),r.a.createElement(J.a,null,t.productName),r.a.createElement(J.a,null,t.itemQty),r.a.createElement(J.a,null,t.uom),r.a.createElement(J.a,null,t.packSize),r.a.createElement(J.a,null,t.packUom),r.a.createElement(J.a,null,-1!==(t.unitPrice+"").indexOf(".")?t.unitPrice:t.unitPrice+".00"),r.a.createElement(J.a,null,-1!==(t.totalPrice+"").indexOf(".")?t.totalPrice:t.totalPrice+".00"),r.a.createElement(J.a,{style:{display:"flex",flexDirection:"row"}},r.a.createElement(q.a,{"data-productid":t._id,onClick:function(e){var n=e.currentTarget.getAttribute("data-productid");a.props.checkInlineProduct(),a.props.setProductValue({editClicked:!0}),a.setState({productId:n,product:t})}},r.a.createElement(Q.a,null)),r.a.createElement(q.a,{"data-productid":t._id,onClick:function(e){var t=a.props,n=t.supplierId;(0,t.deleteProduct)({supplierId:n,productId:e.currentTarget.getAttribute("data-productid")})}},r.a.createElement(W.a,null))))},a.parseDate=function(e){function t(e){return 1===e.length?"0"+e:e}var a=new Date(e);return"string"===typeof a&&-1!==a.indexOf("invalid")?"-":t(a.getDate().toString())+"/"+t(a.getMonth().toString())+"/"+a.getFullYear()},a.renderSupplier=function(){var e=a.props.classes.gridMargin,t=a.props,n=t.supplierId,i=t.suppliers,l=i.map(function(e){return e.transactionId}).indexOf(n);if(i.length&&-1!==l){var c=i[l],o=c.transactionId,u=c.transactionDate,s=c.importCountry,p=c.billOfEntry,d=c.billOfEntryDate,m=c.countryOfOrigin,b=c.supplierInvoice,f=c.poReference;return r.a.createElement(w.a,{style:{marginTop:10}},r.a.createElement(R.a,{container:!0,xs:12},r.a.createElement(R.a,{item:!0,xs:12,md:4,className:e},r.a.createElement(M.a,{variant:"subtitle1"},"Transaction id #"),r.a.createElement(ae,{variant:"body2"},o||"-"),r.a.createElement(te.a,{light:!0})),r.a.createElement(R.a,{item:!0,xs:12,md:4,className:e},r.a.createElement(M.a,{variant:"subtitle1"},"Transaction date"),r.a.createElement(ae,{variant:"body2"},u&&a.parseDate(u)||"-"),r.a.createElement(te.a,{light:!0})),r.a.createElement(R.a,{item:!0,xs:12,md:4,className:e},r.a.createElement(M.a,{variant:"subtitle1"},"Importing countries"),r.a.createElement(ae,{variant:"body2"},s?s.value:"-"),r.a.createElement(te.a,{light:!0})),r.a.createElement(R.a,{item:!0,xs:12,md:4,className:e},r.a.createElement(M.a,{variant:"subtitle1"},"Country of origin"),r.a.createElement(ae,{variant:"body2"},m?m.value:"-"),r.a.createElement(te.a,{light:!0})),r.a.createElement(R.a,{item:!0,xs:12,md:4,className:e},r.a.createElement(M.a,{variant:"subtitle1"},"Supplier invoice"),r.a.createElement(ae,{variant:"bo2y1"},b||"-"),r.a.createElement(te.a,{light:!0})),r.a.createElement(R.a,{item:!0,xs:12,md:4,className:e},r.a.createElement(M.a,{variant:"subtitle1"},"Bill of entry date"),r.a.createElement(ae,{variant:"body2"},d&&a.parseDate(d)||"-"),r.a.createElement(te.a,{light:!0})),r.a.createElement(R.a,{item:!0,xs:12,md:4,className:e},r.a.createElement(M.a,{variant:"subtitle1"},"Po reference"),r.a.createElement(ae,{variant:"body2"},f||"-"),r.a.createElement(te.a,{light:!0})),r.a.createElement(R.a,{item:!0,xs:12,md:4,className:e},r.a.createElement(M.a,{variant:"subtitle1"},"Bill of entry"),r.a.createElement(ae,{variant:"body2"},p||"-"),r.a.createElement(te.a,{light:!0}))))}},a.componentDidMount=function(){var e=a.props,t=e.location,n=e.getProduct;(0,e.setValue)({currentSupplier:t.state.currentSupplier}),n(t.state.currentSupplier)},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(R.a,{container:!0,xs:12,md:10,style:{margin:"auto",textAlign:"center"}},r.a.createElement(R.a,{item:!0,xs:12},this.renderSupplier()),r.a.createElement(R.a,{item:!0,xs:12,style:{marginTop:"10px"}},r.a.createElement(X.a,{title:"Supplier products",columns:[{title:"S.NO",field:"sno"},{title:"Item",field:"productName"},{title:"Quantity",field:"itemQty"},{title:"UOM",field:"uom"},{title:"Pack Size",field:"packSize"},{title:"Pack UOM",field:"packUom"},{title:"Unit price",field:"unitPrice"},{title:"Total Price",field:"totalPrice"}],data:this.props.product,actions:[{icon:Q.a,tooltip:"edit product"},{icon:W.a,tooltip:"edit product"}],options:{search:!1,paging:!1,actionsColumnIndex:-1},components:{Row:this.renderRow,Toolbar:function(){return r.a.createElement(R.a,{container:!0,xs:12},r.a.createElement(R.a,{xs:6},r.a.createElement(M.a,{variant:"h5",style:{textAlign:"left",margin:10}},"Supplier product")),r.a.createElement(R.a,{xs:6},r.a.createElement(B.a,{variant:"contained",color:"primary",style:{float:"right",margin:10},onClick:function(){e.setState({product:Object.assign({},e.state.product),productId:"ADD_INLINE_PRODUCT"}),e.props.addInlineProduct(),e.props.setProductValue({editClicked:!0})}},"Add new")))}}})))}}]),t}(n.Component),re={addData:function(e,t){return function(a,n){console.log(t);var r=I+"/product/";r+=t?"edit":"add",N.a.post(r,{product:e.data}).then(function(e){"SUCCESSFUL"===e.data.type&&(T(n().supplier.currentSupplier)(a),k({editClicked:!1})(a))})}},getProduct:T,setValue:$,setProductValue:k,deleteProduct:function(e){return function(t,a){N.a.post(I+"/product/delete",e,{withCredentials:!0}).then(function(e){console.log(e),"SUCCESSFUL"===e.data.type&&T(a().supplier.currentSupplier)(t)})}},addInlineProduct:function(){return function(e){return e({type:O})}},clearInlineProduct:function(){return function(e){return e({type:y})}},checkInlineProduct:function(){return function(e){return e({type:v})}}},ie=Object(Y.e)(Object(f.b)(function(e){return{showPopupState:e.product.showPopup,beingEdited:e.product.beingEdited,productId:e.product.productId,product:e.product.product,suppliers:e.supplier.suppliers,supplierId:e.supplier.currentSupplier,editClicked:e.product.editClicked}},re)(Object(L.a)(function(e){return{container:{height:"100vh",width:"100%",backgroundColor:z.a[300],textAlign:"center",padding:0},btn:{marginRight:10},gridMargin:{marginTop:10}}})(ne))),le=a(77),ce=a(115),oe=a(269),ue=a(2),se=a(277),pe=a(220),de=a(9),me=a(33),be=a(223),fe=a(258),Ee=a(270),ge=a.n(Ee),he=Object(pe.a)(function(e){return{root:{flexGrow:1,zIndex:99999},input:{display:"flex",padding:0,height:"60px",zIndex:0,width:"269px"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden",zIndex:99999},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(de.b)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16,position:"relative",left:"10px"},placeholder:{position:"relative",left:"10px",fontSize:16,zIndex:0},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0,width:"269px"},divider:{height:e.spacing(2)},menu:{width:"100%",zIndex:99999}}});function Oe(e){var t=e.inputRef,a=Object(oe.a)(e,["inputRef"]);return r.a.createElement("div",Object.assign({ref:t},a))}var ye={Control:function(e){var t=e.children,a=e.innerProps,n=e.innerRef,i=e.selectProps,l=i.classes,c=i.TextFieldProps;return r.a.createElement(F.a,Object.assign({variant:"outlined",InputProps:{inputComponent:Oe,inputProps:Object(o.a)({className:l.input,ref:n,children:t},a)}},c))},Menu:function(e){return r.a.createElement(w.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},MultiValue:function(e){return r.a.createElement(fe.a,{tabIndex:-1,label:e.children,className:Object(ue.a)(e.selectProps.classes.chip,Object(c.a)({},e.selectProps.classes.chipFocused,e.isFocused)),onDelete:e.removeProps.onClick,deleteIcon:r.a.createElement(ge.a,e.removeProps)})},NoOptionsMessage:function(e){return r.a.createElement(M.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return r.a.createElement(_.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",className:e.selectProps.classes.menu,style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return r.a.createElement(M.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return r.a.createElement(M.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return r.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};var ve=Object(f.b)(function(e){return{suggestion:e.supplier.suggestion}})(function(e){var t=he(),a=Object(me.a)(),n={input:function(e){return Object(o.a)({},e,{color:a.palette.text.primary,"& input":{font:"inherit"}})}};return r.a.createElement("div",{className:t.root},r.a.createElement(be.a,null,r.a.createElement(se.a,{classes:t,styles:n,inputId:"react-select-single",TextFieldProps:{placeholder:"select your country"},onBlur:function(t){var a=t.target.value,n=e.suggestion[e.name].map(function(e){return e.label}),r=!1;n.forEach(function(e){-1!==e.indexOf(a)&&(r=!0)}),r||e.updateSelectValue({name:e.name,value:null})},isClearable:!0,name:e.name,options:e.suggestion[e.name],components:ye,value:e.selectValue,onChange:function(t){e.updateSelectValue({name:e.name,value:t})}})))}),Se=(a(376),a(200)),xe=a(238),je=a(272),Ce=a.n(je),Pe=a(279),Ie=a(271),De=a.n(Ie),Ne=Object(Pe.a)({success:{backgroundColor:"#43a047"},error:{backgroundColor:De.a[500]}});function ke(e){var t=Ne(e),a=e.className,n=e.variant;return r.a.createElement(xe.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:e.formSubmitSuccess},r.a.createElement(Se.a,{message:"Supplier successfuly added",className:Object(ue.a)(t[n],a),action:[r.a.createElement(q.a,{key:"close","aria-label":"Close",color:"inherit",onClick:function(){e.closeSnackBar(!1)}},r.a.createElement(Ce.a,null))]}))}var Te=a(64),Fe=Object(L.a)({root:{marginBottom:10}})(R.a),_e=Object(L.a)({root:{margin:0,marginBottom:10},label:{textTransform:"capitalize"}})(M.a),Ae=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={supplierField:{importCountry:null,countryOfOrigin:null,transactionId:null,transactionDate:null,billOfEntry:"",billOfEntryDate:null,supplierInvoice:"",poReference:""},dateError:{},errorFields:[],formSubmitSuccess:!1},a.handleSelectValue=function(e){a.setState({supplierField:Object(o.a)({},a.state.supplierField,Object(c.a)({},e.name,e.value))})},a.handleTextField=function(e){a.setState({supplierField:Object(o.a)({},a.state.supplierField,Object(c.a)({},e.target.name,e.target.value))})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.supplierField,n=["poReference","transactionDate","billOfEntryDate"];n=n.filter(function(e){if("transactionDate"===e||"billOfEntryDate"===e){var a=t[e]&&new Date(t[e]);if(!a)return!0;if(-1!==[6].indexOf(a.getDay()))return!0;if(-1!==a.toString().indexOf("Invalid")||!t[e])return!0}else{if(!t[e])return!0;if(!t[e].toString().trim())return!0}}),a.setState({errorFields:n}),setTimeout(function(){a.setState({errorFields:[]})},500);var r=Object.keys(a.state.dateError).reduce(function(e){return a.state.dateError[e]},"");n.length||r.length||a.props.submitSupplierData(t,a.props.editMode)},a.handleDateChange=function(e,t){var n=a.state;a.setState({supplierField:Object(o.a)({},a.state.supplierField,Object(c.a)({},t,e))}),e&&-1===e.toString().indexOf("Invalid")?a.setState({dateError:Object(o.a)({},n.dateError,Object(c.a)({},t,!1))}):a.setState({dateError:Object(o.a)({},n.dateError,Object(c.a)({},t,!0))})},a.componentDidMount=function(){var e,t=a.props,n=t.editMode,r=t.supplierToBeEdited,i=t.suppliers;n&&(e=i.map(function(e){return e.transactionId}).indexOf(r),a.setState({supplierField:Object.assign({},a.state.supplierField,i[e])}))},a.componentWillUnmount=function(){a.props.setValue({editMode:!1,supplierToBeEdited:""})},a.changeRoute=function(){var e=a.props,t=e.reRoute,n=e.history,r=e.setValue;t&&setTimeout(function(){n.push("/supplierlist"),r({formSubmitSuccess:!1,reRoute:!1})},2e3)},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.supplierField,a=t.transactionId,n=t.transactionDate,i=t.billOfEntryDate,l=t.billOfEntry,c=t.supplierInvoice,o=t.poReference,u=this.props.classes;return r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:u.form},this.changeRoute(),r.a.createElement(w.a,{className:u.root},r.a.createElement(R.a,{container:!0},r.a.createElement(Fe,{item:!0,xs:12,md:6},r.a.createElement(_e,{variant:"body1"},"Transaction id #"),r.a.createElement("span",null,a)),r.a.createElement(Fe,{item:!0,xs:12,md:6},r.a.createElement(_e,{variant:"body1"},"Transaction date:"),r.a.createElement(le.MuiPickersUtilsProvider,{utils:ce.default},r.a.createElement(le.KeyboardDatePicker,{autoOk:!0,className:Object(ue.a)(u.textField,u.lowZIndex),variant:"dialog",inputVariant:"outlined",format:"dd/MM/yyyy",shouldDisableDate:function(e){return 6===e.getDay()},value:n,error:-1!==this.state.errorFields.indexOf("transactionDate")||this.state.dateError.transactionDate,placeholder:"select date",onChange:function(t){return e.handleDateChange(t,"transactionDate")}}))),r.a.createElement(Fe,{item:!0,xs:12,md:6},r.a.createElement(_e,{variant:"body1"},"Importing countries"),r.a.createElement(ve,{name:"importCountry",updateSelectValue:this.handleSelectValue,selectValue:this.state.supplierField.importCountry})),r.a.createElement(Fe,{item:!0,xs:12,md:6},r.a.createElement(_e,{variant:"body1"},"Country of origin"),r.a.createElement(ve,{name:"countryOfOrigin",updateSelectValue:this.handleSelectValue,selectValue:this.state.supplierField.countryOfOrigin})),r.a.createElement(Fe,{item:!0,xs:12,md:6},r.a.createElement(_e,{variant:"body1"},"Supplier invoice"),r.a.createElement(F.a,{id:"outlined-name",className:u.textField,type:"number",name:"supplierInvoice",value:c,onChange:this.handleTextField,margin:"normal",variant:"outlined",placeholder:"Supplier invoice"})),r.a.createElement(Fe,{item:!0,xs:12,md:6},r.a.createElement(_e,{variant:"body1"},"Bill of entry date"),r.a.createElement(le.MuiPickersUtilsProvider,{utils:ce.default},r.a.createElement(le.KeyboardDatePicker,{autoOk:!0,variant:"dialog",inputVariant:"outlined",format:"dd/MM/yyyy",value:i,error:-1!==this.state.errorFields.indexOf("billOfEntryDate")||this.state.dateError.billOfEntryDate,placeholder:"select date",className:Object(ue.a)(u.textField,u.lowZIndex),onChange:function(t){return e.handleDateChange(t,"billOfEntryDate")},shouldDisableDate:function(e){return 6===e.getDay()}}))),r.a.createElement(Fe,{item:!0,xs:12,md:6,direction:"coloumn"},r.a.createElement(_e,{variant:"body1"},"po reference"),r.a.createElement(F.a,{error:-1!==this.state.errorFields.indexOf("poReference"),name:"poReference",className:u.textField,value:o,type:"text",onChange:this.handleTextField,margin:"normal",variant:"outlined",placeholder:"PO reference text"})),r.a.createElement(Fe,{item:!0,xs:12,md:6},r.a.createElement(_e,{variant:"body1"},"Bill of entry"),r.a.createElement(F.a,{name:"billOfEntry",type:"text",value:l,className:u.textField,onChange:this.handleTextField,margin:"normal",variant:"outlined",placeholder:"bill of entry text"})),r.a.createElement(Fe,{container:!0,xs:12},r.a.createElement(B.a,{variant:"contained",color:"primary",className:u.buttons,type:"submit"},this.props.editMode?"Submit Edit":"Submit"),r.a.createElement(B.a,{variant:"contained",className:u.buttons,component:Te.b,to:"/"},this.props.editMode?"Cancel Edit":"Cancel"))),r.a.createElement(ke,{formSubmitSuccess:this.props.formSubmitSuccess,closeSnackBar:this.props.closeSnackBar,variant:"success"})))}}]),t}(r.a.Component),Ue={submitSupplierData:function(e,t){return function(a){var n=I+"/supplier/";n+=t?"edit":"add",console.log(n),N.a.post(n,{supplier:e}).then(function(e){console.log(e),"SUCCESSFUL"===e.data.type&&a({type:C,payload:{formSubmitSuccess:!0,reRoute:!0}})})}},closeSnackBar:function(e,t){return function(t){t({type:x,payload:{formSubmitSuccess:e}})}},setValue:$},we=Object(Y.e)(Object(f.b)(function(e){return{formSubmitSuccess:e.supplier.formSubmitSuccess,reRoute:e.supplier.reRoute,editMode:e.supplier.editMode,supplierToBeEdited:e.supplier.supplierToBeEdited,suppliers:e.supplier.suppliers}},Ue)(Object(L.a)(function(e){return{outerContainer:{backgroundColor:z.a[300],width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},item:{marginTop:10},form:{width:"80%",margin:"auto"},elemZIndex:{zIndex:1},root:{width:"100%",margin:"10px auto",boxSizing:"border-box",padding:"20px",display:"flex",flexWrap:"wrap"},buttons:{margin:"10px 10px 0px 0px"},outline:{border:"1px solid red"},formControl:{margin:"10px",minWidth:120},textField:{margin:0,width:"269px"},lowZIndex:{zIndex:0}}})(Ae))),Re=a(228),Be=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Re.a,{className:e.container,maxWidth:"xl"},r.a.createElement(Re.a,{className:e.textContainer},r.a.createElement(M.a,{variant:"h2",className:e.typography},"Welcome to our app"),r.a.createElement(B.a,{component:Te.b,to:"/addsupplier",variant:"contained",className:e.primaryBtn},"Add Supplier"),r.a.createElement(B.a,{component:Te.b,to:"/supplierlist",variant:"contained",color:"primary"},"view Suppliers")))}}]),t}(n.Component),Le=Object(L.a)(function(e){return{container:{height:"100vh",width:"100%",backgroundColor:z.a[300],textAlign:"center"},textContainer:{position:"relative",top:"30%",height:"auto"},typography:{color:"#fff"},primaryBtn:{backgroundColor:"#fff",margin:"10px"}}})(Be),Me=a(196),Ve=a(197),ze=a(236),Ke=a(275),Ge=a.n(Ke),Qe=a(274),We=a.n(Qe),qe=a(273),He=a.n(qe),Xe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).componentDidMount=function(){a.props.getListOfSupplier()},a.handleEditClick=function(e){var t=e.currentTarget.getAttribute("data-transactionid"),n=a.props,r=n.history;(0,n.setValue)({editMode:!0,supplierToBeEdited:t}),r.push("/editsupplier")},a.loopSupplier=function(){var e=a.props.suppliers,t="";return e.length?e.map(function(n,i){return t="",i+1!==e.length&&(t=r.a.createElement(te.a,{light:!0})),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve.a,{key:n.transactionId},r.a.createElement(ze.a,{primary:n.transactionId}),r.a.createElement(q.a,{component:Te.b,to:{pathname:"/supplier",state:{currentSupplier:n.transactionId}},"data-transactionid":n.transactionId},r.a.createElement(He.a,null)),r.a.createElement(q.a,{"data-transactionid":n.transactionId,onClick:a.handleEditClick,label:"Comments"},r.a.createElement(We.a,null)),r.a.createElement(q.a,{"data-transactionid":n.transactionId,"aria-label":"delete",onClick:a.props.deleteSupplier.bind(Object(m.a)(a),n.transactionId)},r.a.createElement(Ge.a,null))),t)}):r.a.createElement(ze.a,null,r.a.createElement(M.a,{variant:"h6",style:{textAlign:"center"}},"No suppliers available"))},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12,sm:8,md:6,style:{margin:"10px auto"}},r.a.createElement(w.a,null,r.a.createElement(Me.a,{component:"nav","aria-label":"Mailbox folders"},r.a.createElement(ze.a,null,r.a.createElement(M.a,{variant:"h6",style:{textAlign:"center"}},"SUPPLIERS TRANSACTION IDS")),r.a.createElement(te.a,{light:!0}),this.loopSupplier()))))}}]),t}(n.Component),Ze={getListOfSupplier:ee,setValue:$,deleteSupplier:function(e){return function(t){N.a.post(I+"/supplier/delete",{supplierId:e}).then(function(e){"SUCCESSFUL"===e.data.type?(console.log(e),ee()(t)):console.log(e)}).catch(function(e){})}}},Je=Object(Y.e)(Object(f.b)(function(e){return{suppliers:e.supplier.suppliers}},Ze)(Object(L.a)(function(e){return{container:{height:"100vh",width:"100%",backgroundColor:z.a[300],textAlign:"center",padding:0}}})(Xe)));var Ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,null,r.a.createElement(Y.a,{exact:!0,path:"/",component:Le}),r.a.createElement(Y.a,{exact:!0,path:"/addsupplier",component:we}),r.a.createElement(Y.a,{exact:!0,path:"/editsupplier",component:we}),r.a.createElement(Y.a,{exact:!0,path:"/supplier",component:ie}),r.a.createElement(Y.a,{exact:!0,path:"/supplierlist",component:Je})))},$e=a(51),et=a(276),tt=a(81);var at=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}].map(function(e){return{value:e.label,label:e.label}});var nt=Object($e.c)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a=e.product;return!0===e.beingEdited?a[e.productId]=t.payload.product:a.push(t.payload.product),Object.assign({},e,{product:a},{beingEdited:!1});case P:return Object.assign({},e,t.payload);case g:var n=e.product,r=t.payload.productId;return n=n.filter(function(e,t){return t!==+r}),Object.assign({},e,{product:n});case h:return Object.assign({},e,t.payload);case O:return e.product[e.product.length-1]&&"ADD_INLINE_PRODUCT"===e.product[e.product.length-1]._id?e:Object.assign({},e,{product:[].concat(Object(tt.a)(e.product),[{productName:"",itemQty:0,uom:"KG",packSize:"",packUom:"KG",unitPrice:0,totalPrice:0,_id:"ADD_INLINE_PRODUCT"}])});case y:return Object.assign({},e,{product:Object(tt.a)(e.product).splice(0,e.product.length-1)});case v:if(e.product[e.product.length-1]&&"ADD_INLINE_PRODUCT"===e.product[e.product.length-1]._id)return Object.assign({},e,{product:Object(tt.a)(e.product).splice(0,e.product.length-1)});default:return e}},supplier:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{selectValue:{importCountry:null},suggestion:{importCountry:at,countryOfOrigin:at},suppliers:[],formSubmitSuccess:!1,reRoute:!1,editMode:!1,supplierToBeEdited:"",currentSupplier:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object.assign({},e,{suppliers:[].concat(Object(tt.a)(e.suppliers),[t.payload.supplier])},{formSubmitSuccess:!0});case x:case C:case P:return Object.assign({},e,t.payload);case j:var a=t.payload.suppliers;return a=a.map(function(e){var t=e;return t.importCountry&&(t.importCountry={label:t.importCountry,value:t.importCountry}),t.countryOfOrigin&&(t.countryOfOrigin={label:t.countryOfOrigin,value:t.countryOfOrigin}),t.transactionId=t._id,delete t._id,delete t.__v,t}),Object.assign({},e,{suppliers:a});default:return e}}}),rt=Object($e.e)(nt,{},Object($e.d)(Object($e.a)(et.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));l.a.render(r.a.createElement(f.a,{store:rt},r.a.createElement(Ye,null)),document.getElementById("root"))}},[[283,1,2]]]);
//# sourceMappingURL=main.d78e899a.chunk.js.map