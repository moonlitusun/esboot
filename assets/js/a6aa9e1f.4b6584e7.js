"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7643],{93:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(758);var n=a(3526),s=a(3191),i=a(5530),r=a(431),l=a(9871),o=a(1477),c=a(9051),d=a(784),g=a(197),m=a(2918),u=a(6070);function h(e){const t=(0,m.kJ)(e);return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.A)(),{blogDescription:n,blogTitle:r,permalink:l}=t,o="/"===l?a:r;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.be,{title:o,description:n}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:a,sidebar:n}=e;return(0,u.jsxs)(l.A,{sidebar:n,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(o.A,{metadata:t})]})}function j(e){return(0,u.jsxs)(i.e3,{className:(0,n.A)(r.G.wrapper.blogPages,r.G.page.blogListPage),children:[(0,u.jsx)(x,{...e}),(0,u.jsx)(h,{...e}),(0,u.jsx)(p,{...e})]})}},1477:(e,t,a)=>{a.d(t,{A:()=>r});a(758);var n=a(5821),s=a(7362),i=a(6070);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,i.jsx)(s.A,{permalink:a,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},6662:(e,t,a)=>{a.d(t,{A:()=>U});a(758);var n=a(3526),s=a(2918),i=a(6070);function r(e){let{children:t,className:a}=e;return(0,i.jsx)("article",{className:a,children:t})}var l=a(3839);const o={title:"title_hMZT"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=(0,s.e7)(),{permalink:c,title:d}=a,g=r?"h1":"h2";return(0,i.jsx)(g,{className:(0,n.A)(o.title,t),children:r?d:(0,i.jsx)(l.A,{to:c,children:d})})}var d=a(5821),g=a(417),m=a(7442);const u={container:"container_Ynxu"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,children:a})}function p(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,s.e7)(),{date:r,readingTime:l}=a,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,n.A)(u.container,"margin-vert--md",t),children:[(0,i.jsx)(x,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{}),(0,i.jsx)(h,{readingTime:l})]})]});var c}var A=a(4470);const b={authorCol:"authorCol_GFoa",imageOnlyAuthorRow:"imageOnlyAuthorRow_o2iF",imageOnlyAuthorCol:"imageOnlyAuthorCol_c1IM"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,s.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,i.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,n.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,i.jsx)(A.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(j,{}),(0,i.jsx)(f,{})]})}var N=a(2463),_=a(2696);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,s.e7)();return(0,i.jsx)("div",{id:r?N.LU:void 0,className:(0,n.A)("markdown",a),children:(0,i.jsx)(_.A,{children:t})})}var k=a(431),w=a(5460),y=a(4164);function P(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(P,{})})}function C(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:a,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,m=a.length>0;if(!(m||g||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,i.jsx)("div",{className:(0,n.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(y.A,{tags:a})})}),e&&(0,i.jsx)(w.A,{className:(0,n.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,i.jsx)("div",{className:(0,n.A)("col",{"col--9":g}),children:(0,i.jsx)(y.A,{tags:a})}),g&&(0,i.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":m}),children:(0,i.jsx)(R,{blogPostTitle:r,to:e.permalink})})]})}function U(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,n.A)(l,a),children:[(0,i.jsx)(v,{}),(0,i.jsx)(T,{children:t}),(0,i.jsx)(C,{})]})}},784:(e,t,a)=>{a.d(t,{A:()=>r});a(758);var n=a(2918),s=a(6662),i=a(6070);function r(e){let{items:t,component:a=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(n.in,{content:t,children:(0,i.jsx)(a,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},7362:(e,t,a)=>{a.d(t,{A:()=>r});a(758);var n=a(3526),s=a(3839),i=a(6070);function r(e){const{permalink:t,title:a,subLabel:r,isNext:l}=e;return(0,i.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:a})]})}},9548:(e,t,a)=>{a.d(t,{A:()=>l});a(758);var n=a(3526),s=a(3839);const i={tag:"tag_oHDD",tagRegular:"tagRegular_x3_Q",tagWithCount:"tagWithCount_L_1X"};var r=a(6070);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},4164:(e,t,a)=>{a.d(t,{A:()=>o});a(758);var n=a(3526),s=a(5821),i=a(9548);const r={tags:"tags_PqtU",tag:"tag_iAyF"};var l=a(6070);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}}}]);