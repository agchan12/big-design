(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{KL3r:function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),a=t("ERkP"),o=t.n(a),i=t("GsAr"),l=t("lIm4"),s=t("cxan"),c=t("R5dR"),u=t("nFRM"),p=o.a.createElement,d=[{name:"actions",types:"object[]",description:p(o.a.Fragment,null,"Accepts an array of objects with ",p(c.a,{href:"/button"},"Button")," props and an additional"," ",p(l.a,null,"text")," prop. See example for usage.")},{name:"backdrop",types:"boolean",defaultValue:"true",description:"Determines if the backdrop is shown."},{name:"closeOnClickOutside",types:"boolean",defaultValue:"false",description:p(o.a.Fragment,null,"Controls whether ",p(l.a,null,"onClose")," is called when clicking outside of the modal.")},{name:"closeOnEscKey",types:"boolean",defaultValue:"true",description:p(o.a.Fragment,null,"Controls whether ",p(l.a,null,"onClose")," is called when pressing the ESC key.")},{name:"header",types:"string",description:"Sets visible text that describes the content of the modal."},{name:"isOpen",types:"boolean",defaultValue:"false",description:"Determines if the modal/dialog is open."},{name:"onClose",types:"() => void",description:"Function that will be called on close events."},{name:"variant",types:["modal","dialog"],defaultValue:"modal",description:"Determines the modal variant."}],f=function(e){return p(u.a,Object(s.a)({title:"Modal",propList:d},e))},h=o.a.createElement;n.default=function(){return h(o.a.Fragment,null,h(r.H0,null,"Modal"),h(r.Text,null,"A modal appears as a layer on top of the primary interface. Modals disrupt users from interacting with the page until they complete a specific task."," ",h(r.Link,{href:"https://design.bigcommerce.com/components/modals",target:"_blank"},"Modals Design Guidelines"),"."),h(i.a,null,"function Example() {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\n\n      <Modal\n        actions={[\n          { text: 'Cancel', variant: 'subtle', onClick: () => setIsOpen(false) },\n          { text: 'Apply', onClick: () => setIsOpen(false) },\n        ]}\n        header=\"Modal Title\"\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        closeOnEscKey={true}\n        closeOnClickOutside={false}\n      >\n        <Text>\n          Ea tempor sunt amet labore proident dolor proident commodo in exercitation ea nulla sunt pariatur. Nulla\n          sunt ipsum do eu consectetur exercitation occaecat labore aliqua. Aute elit occaecat esse ea fugiat\n          esse. Reprehenderit sunt ea ea mollit commodo tempor amet fugiat.\n        </Text>\n        <Text>\n          Esse ipsum est consectetur nulla aute deserunt. Anim sint nisi consequat officia adipisicing irure.\n          Nulla ea reprehenderit elit eu nostrud sunt veniam dolore ex occaecat qui. Commodo ullamco ut sint dolor\n          quis cillum in et enim culpa esse exercitation ad. Eiusmod adipisicing nisi culpa esse laborum cupidatat\n          ad pariatur proident. Consectetur ex sint ullamco non ex.\n        </Text>\n      </Modal>\n    </>\n  );\n}"),h(r.H1,null,"Dialog"),h(r.Text,null,"Setting the variant prop to ",h(l.a,{primary:!0},"dialog")," results in a simplified version of a Modal. The purpose of a dialog is to act as a safety net for a user attempting a destructive action."," ",h(r.Link,{href:"https://design.bigcommerce.com/components/modals-confirmation",target:"_blank"},"Modals\u2013Confirmation Design Guidelines"),"."),h(i.a,null,"function Example() {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>\n\n      <Modal\n        actions={[\n          { text: 'Cancel', variant: 'subtle', onClick: () => setIsOpen(false) },\n          { text: 'Apply', onClick: () => setIsOpen(false) },\n        ]}\n        header=\"Dialog Title\"\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        closeOnEscKey={true}\n        closeOnClickOutside={false}\n        variant=\"dialog\"\n      >\n        <Text>\n          Ea tempor sunt amet labore proident dolor proident commodo in exercitation ea nulla sunt pariatur.\n        </Text>\n      </Modal>\n    </>\n  );\n}"),h(r.H1,null,"API"),h(f,null))}},KeDb:function(e,n,t){"use strict";var r=t("zQIG"),a=t("8mBC"),o=t("cMav"),i=t("pSQP"),l=t("I/kN"),s=t("Y3ZS"),c=t("pONU");n.__esModule=!0,n.default=void 0;var u,p=c(t("ERkP")),d=t("cRaD"),f=t("fvxO"),h=s(t("7xIC"));function m(e){return e&&"object"===typeof e?(0,f.formatWithValidation)(e):e}var g=new Map,v=window.IntersectionObserver,y={};function k(){return u||(v?u=new v((function(e){e.forEach((function(e){if(g.has(e.target)){var n=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),g.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){function n(e){var t;return r(this,n),(t=o(this,i(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,r=null;return function(a,o){if(r&&a===n&&o===t)return r;var i=e(a,o);return n=a,t=o,r=i,i}}((function(e,n){return{href:m(e),as:n?m(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),i=o.href,l=o.as;if(function(e){var n=(0,d.parse)(e,!1,!0),t=(0,d.parse)((0,f.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var s=window.location.pathname;i=(0,d.resolve)(s,i),l=l?(0,d.resolve)(s,l):i,e.preventDefault();var c=t.props.scroll;null==c&&(c=l.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](i,l,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return l(n,e),a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,a=(0,d.resolve)(e,t);return[a,r?(0,d.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var n=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=k();return t?(t.observe(e),g.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}g.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();h.default.prefetch(n[0],n[1],e).catch((function(e){0})),y[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,a=t.as;"string"===typeof n&&(n=p.default.createElement("a",null,n));var o=p.Children.only(n),i={ref:function(n){e.handleRef(n),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(n):"object"===typeof o.ref&&(o.ref.current=n))},onMouseEnter:function(n){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),n}(p.Component);n.default=b},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("jvFD"),o=t.n(a),i=t("ERkP"),l=t.n(i).a.createElement;function s(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var n=e.as,t=e.children,a=e.href;return l(o.a,{href:a,as:s(n)},"string"===typeof t?l(r.Link,{href:u(a)?a:""},t):t)};function u(e){return e&&"#"===e.charAt(0)}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("d2TB"),a=t("XPf/"),o=t("BtTX"),i=t("ERkP"),l=t.n(i),s=t("j/s1"),c=Object(s.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=l.a.createElement,p=function(e){var n=e.children,t=e.title,l=Object(i.useState)(!0),s=l[0],p=l[1],d=function(){return p(!s)};return u("div",null,u(c,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},s?u(a.a,{title:"Expand"}):u(o.a,{title:"Collapse"}),u(r.Text,null,t)),!s&&n)}},ftxc:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Modal/ModalPage",function(){return t("KL3r")}])},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),a=t.n(r),o=t("j/s1"),i=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(o.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(o.d)(["color:",";"],t.colors.primary70)})),l=a.a.createElement,s=function(e){return l(i,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("ERkP"),o=t.n(a),i=t("lIm4"),l=t("c2K2"),s=o.a.createElement,c=function(e){var n=e.collapsible,t=e.id,a=e.propList,c=e.title,p=function(){return s(r.TableFigure,null,s(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return s(o.a.Fragment,null,s(i.a,{primary:!0},n),t?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(i.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(r.Text,null,n)}}],items:a}),s(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(l.a,{title:"".concat(c," Props")},p()):s(o.a.Fragment,null,s(r.H2,{id:t},c),p())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return s(o.a.Fragment,{key:e},e.type===r.Link?s(i.a,{highlight:!1},e):s(i.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?s(i.a,{highlight:!1},n):s(i.a,null,n)}}},[["ftxc",1,2,5,6,9,8,0,3,4,7,10]]]);