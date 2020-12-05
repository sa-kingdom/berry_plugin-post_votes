module.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=45)}([function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat.Model},function(t,n,o){"use strict";function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}o.d(n,"a",(function(){return e}))},function(t,n){t.exports=flarum.core.compat["components/Button"]},,function(t,n,o){"use strict";o.d(n,"a",(function(){return i}));var e=o(2),a=o(1),r=o.n(a),s=o(14),i=function(t){function n(){return t.apply(this,arguments)||this}return Object(e.a)(n,t),n}(o.n(s)()(r.a,{points:r.a.attribute("points"),name:r.a.attribute("name"),color:r.a.attribute("color")}))},function(t,n,o){"use strict";function e(t,n){void 0===n&&(n={}),n.style=n.style||{},n.className="rankLabel "+(n.className||"");var o=t.color();return n.style.backgroundColor=n.style.color=o,n.className+=" colored",m("span",n,m("span",{className:"rankLabel-text"},t.name()))}o.d(n,"a",(function(){return e}))},function(t,n){t.exports=flarum.core.compat["utils/Stream"]},function(t,n){t.exports=flarum.core.compat["helpers/icon"]},function(t,n){t.exports=flarum.core.compat["models/Post"]},function(t,n){t.exports=flarum.core.compat["components/IndexPage"]},,function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={Rank:o(5).a}},function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={rankLabel:o(6).a}},function(t,n){t.exports=flarum.core.compat["utils/mixin"]},function(t,n){t.exports=flarum.core.compat["components/Page"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,n){t.exports=flarum.core.compat["models/Discussion"]},function(t,n){t.exports=flarum.core.compat["helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat["helpers/username"]},function(t,n){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,n){t.exports=flarum.core.compat["models/User"]},function(t,n){t.exports=flarum.core.compat["components/UserCard"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionPage"]},,function(t,n){t.exports=flarum.core.compat["components/AffixedSidebar"]},function(t,n){t.exports=flarum.core.compat["helpers/listItems"]},function(t,n){t.exports=flarum.core.compat["components/Notification"]},function(t,n){t.exports=flarum.core.compat["utils/ItemList"]},function(t,n){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,n){t.exports=flarum.core.compat["components/Dropdown"]},function(t,n){t.exports=flarum.core.compat["components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["components/CommentPost"]},function(t,n){t.exports=flarum.core.compat["utils/PostControls"]},function(t,n){t.exports=flarum.core.compat["components/Modal"]},function(t,n){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,n){t.exports=flarum.core.compat["components/PostUser"]},function(t,n,o){(function(n){var o=/^\s+|\s+$/g,e=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,s=parseInt,i="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,c=i||u||Function("return this")(),p=Object.prototype.toString,f=Math.max,l=Math.min,m=function(){return c.Date.now()};function d(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(d(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=d(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||r.test(t)?s(t.slice(2),i?2:8):e.test(t)?NaN:+t}t.exports=function(t,n,o){var e,a,r,s,i,u,c=0,p=!1,v=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var o=e,r=a;return e=a=void 0,c=n,s=t.apply(r,o)}function y(t){return c=t,i=setTimeout(k,n),p?g(t):s}function x(t){var o=t-u;return void 0===u||o>=n||o<0||v&&t-c>=r}function k(){var t=m();if(x(t))return N(t);i=setTimeout(k,function(t){var o=n-(t-u);return v?l(o,r-(t-c)):o}(t))}function N(t){return i=void 0,b&&e?g(t):(e=a=void 0,s)}function j(){var t=m(),o=x(t);if(e=arguments,a=this,u=t,o){if(void 0===i)return y(u);if(v)return i=setTimeout(k,n),g(u)}return void 0===i&&(i=setTimeout(k,n)),s}return n=h(n)||0,d(o)&&(p=!!o.leading,r=(v="maxWait"in o)?f(h(o.maxWait)||0,n):r,b="trailing"in o?!!o.trailing:b),j.cancel=function(){void 0!==i&&clearTimeout(i),c=0,e=u=a=i=void 0},j.flush=function(){return void 0===i?s:N(m())},j}}).call(this,o(44))},,,,,,function(t,n){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,n,o){"use strict";o.r(n),o.d(n,"models",(function(){return e.a})),o.d(n,"components",(function(){return Pt})),o.d(n,"helpers",(function(){return Vt}));var e=o(12),a=o(1),r=o.n(a),s=o(17),i=o.n(s),u=o(9),c=o.n(u),p=o(22),f=o.n(p),l=o(5),d=o(2),h=o(18),v=o.n(h),b=o(15),g=o.n(b),y=o(10),x=o.n(y),k=o(26),N=o.n(k),j=o(3),O=o.n(j),w=o(19),P=o.n(w),L=o(27),V=o.n(L),_=o(20),M=o.n(_),I=o(8),S=o.n(I),U=function(t,n){void 0===n&&(n=!1);var o=app.data["fof-gamification."+t];return n?!!Number(o):o},D=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.oninit=function(n){t.prototype.oninit.call(this,n),app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage||m.route("/"),this.loading=!0,this.users=[],this.refresh()},o.view=function(){var t,n=this;return t=this.loading?P.a.component():O.a.component({className:"Button",onclick:this.loadMore.bind(this)},app.translator.trans("core.forum.discussion_list.load_more_button")),m("div",{className:"TagsPage"},x.a.prototype.hero(),m("div",{className:"container"},m(N.a,null,m("nav",{className:"RankingPage-nav IndexPage-nav sideNav"},m("ul",null,V()(x.a.prototype.sidebarItems().toArray())))),m("div",{className:"RankingPage sideNavOffset"},m("table",{class:"rankings"},m("tr",null,m("th",{className:"rankings-mobile"},app.translator.trans("fof-gamification.forum.ranking.rank")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.name")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.amount"))),this.users.map((function(t,o){return++o,[m("tr",{className:"ranking-"+o},o<4?U("customRankingImages",!0)?m("img",{className:"rankings-mobile rankings-image",src:app.forum.attribute("baseUrl")+app.forum.attribute("fof-gamification.topimage"+o+"Url")}):m("td",{className:"rankings-mobile rankings-"+o},S()("fas fa-trophy")):m("td",{className:"rankings-4 rankings-mobile"},n.addOrdinalSuffix(o)),m("td",null,m("div",{className:"PostUser"},m("h3",{className:"rankings-info"},m("a",{href:app.route.user(t),config:m.route},o<4?v()(t,{className:"info-avatar rankings-"+o+"-avatar"}):""," ",M()(t))))),o<4?m("td",{className:"rankings-"+o},t.points()):m("td",{className:"rankings-4"},t.points()))]}))),m("div",{className:"rankings-loadmore"}," ",t))))},o.refresh=function(t){var n=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.users=[]),this.loadResults().then((function(t){n.users=[],n.parseResults(t)}),(function(){n.loading=!1,m.redraw()}))},o.addOrdinalSuffix=function(t){if("en"===app.data.locale){var n=t%10,o=t%100;return 1===n&&11!==o?t+"st":2===n&&12!==o?t+"nd":3===n&&13!==o?t+"rd":t+"th"}return t},o.loadResults=function(t){var n={};return n.page={offset:t,limit:"10"},app.store.find("rankings",n)},o.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},o.parseResults=function(t){return[].push.apply(this.users,t),this.loading=!1,this.users.sort((function(t,n){return parseFloat(n.points())-parseFloat(t.points())})),m.redraw(),t},n}(g.a),C=o(28),R=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.icon=function(){return this.attrs.notification.content()>0?"fas fa-thumbs-up":"fas fa-thumbs-down"},o.href=function(){return app.route.post(this.attrs.notification.subject())},o.content=function(){var t=this.props.notification.fromUser(),n=parseInt(this.attrs.notification.content());return n>0?app.translator.trans("fof-gamification.forum.notification.upvote",{user:t}):app.translator.trans("fof-gamification.forum.notification.downvote",{user:t})},o.excerpt=function(){return this.attrs.notification.subject().contentPlain()},n}(o.n(C).a),A=o(0),T=o(29),B=o.n(T),F=o(30),$=o.n(F),E=o(31),W=o.n(E),z=o(32),q=o.n(z),G=function(){x.a.prototype.viewItems=function(){var t=new B.a,n=app.discussions.sortMap(),o={};for(var e in n)o[e]=app.translator.trans("core.forum.index_sort."+e+"_button");var a=o[app.search.params().sort]||Object.keys(n).map((function(t){return o[t]}))[0];return/^.*?\/hot/.test(m.route.get())&&(a=app.translator.trans("core.forum.index_sort.hot_button")),t.add("sort",W.a.component({buttonClassName:"Button",label:a},Object.keys(o).map((function(t){var e=o[t],a=(app.search.params().sort||Object.keys(n)[0])===t;return/^.*?\/hot/.test(m.route.get())&&"hot"===t&&(a=!0),/^.*?\/hot/.test(m.route.get())&&"latest"===t&&(a=!1,m.redraw()),O.a.component({icon:!a||"fas fa-check",onclick:app.search.changeSort.bind(app.search,t),active:a},e)})))),t},Object(A.extend)(x.a.prototype,"navItems",(function(t){t.add("rankings",q.a.component({href:app.route("rankings"),icon:"fas fa-trophy"},app.translator.trans("fof-gamification.forum.nav.name")),80)})),Object(A.extend)($.a.prototype,"sortMap",(function(t){t.hot="-hotness"}))},H=o(33),J=o.n(H),K=o(34),Q=o.n(K),X=o(35),Y=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.className=function(){return"VotesModal Modal--small"},o.title=function(){return app.translator.trans("fof-gamification.forum.modal.title")},o.oninit=function(n){t.prototype.oninit.call(this,n),this.loading=!this.attrs.post.upvotes(),this.loading&&this.load()},o.content=function(){var t=this;return this.loading?m("div",{className:"Modal-body"},m(P.a,null)):m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},["upvotes"].map((function(n){var o=t.attrs.post[n]();if(o&&o.length)return m("div",null,m("legend",null,app.translator.trans("fof-gamification.forum.modal."+n+"_label")),o.map((function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},v()(t)," ",M()(t)))})))}))))},o.load=function(){return app.store.find("posts",this.attrs.post.id(),{include:"upvotes"}).then(this.loaded.bind(this))},n}(o.n(X).a),Z=o(36),tt=o.n(Z),nt=function(t,n,o,e,a){if(void 0===a&&(a=t.discussion()),app.session.user){if(!a||a.canVote()||t.canVote())return n&&o&&(n=!1,o=!1),e&&e(!0),m.redraw(),t.save([n,o,"vote"]).then((function(){return null}),(function(){return null})).then((function(){e&&e(!1),a&&a.pushAttributes({votes:t.votes()}),m.redraw()}))}else tt.a.replyAction.call(a,!0)},ot=function(){Object(A.extend)(Q.a,"moderationControls",(function(t,n){n.canSeeVotes()&&t.add("viewVotes",[m(O.a,{icon:"fas fa-thumbs-up",onclick:function(){app.modal.show(Y,{post:n})}},app.translator.trans("fof-gamification.forum.mod_item"))])})),Object(A.extend)(J.a.prototype,"actionItems",(function(t){var n=this,o=this.attrs.post,e=o.hasDownvoted(),a=o.hasUpvoted(),r=U("iconName")||"thumbs",s=!app.session.user||o.canVote();t.add("votes",m("div",{className:"CommentPost-votes "+(U("useAlternateLayout",!0)&&"alternateLayout")},O.a.component({icon:this.voteLoading||"fas fa-"+r+"-up",className:"Post-vote Post-upvote",style:a&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:this.voteLoading||!s,onclick:function(){return nt(o,!a,!1,(function(t){return n.voteLoading=t}))}}),m("label",{className:"Post-points"},o.votes()),O.a.component({icon:this.voteLoading||"fas fa-"+r+"-down",className:"Post-vote Post-downvote",style:e&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:!s,onclick:function(){return nt(o,!1,!e,(function(t){return n.voteLoading=t}))}})),10)}))},et=o(16),at=o.n(et),rt=o(21),st=o.n(rt),it=function(){U("showVotesOnDiscussionPage",!0)&&!U("useAlternateLayout",!0)&&Object(A.extend)(at.a.prototype,"infoItems",(function(t){t.add("discussion-votes",m("span",{className:"DiscussionListItem-votes",title:app.translator.trans("fof-gamification.forum.votes")},S()("far fa-thumbs-up"),st()(this.attrs.discussion.votes())),20)}))},ut=o(37),ct=o.n(ut),pt=o(23),ft=o.n(pt),lt=o(6),mt=function(){var t=function(t){return function(n){return n&&n.attrs&&n.attrs.className&&String(n.attrs.className).split(" ").includes(t)}};Object(A.extend)(ft.a.prototype,"infoItems",(function(t){var n,o=U("pointsPlaceholder"),e=String(this.attrs.user.points());n=o?o.replace("{points}",e):app.translator.trans("fof-gamification.forum.user.points",{points:e}),t.add("points",n)})),Object(A.extend)(ft.a.prototype,"view",(function(n){var o=this.attrs.user,e=function n(o,e){var a=[];if(o&&o.children){var r=o.children.find(t(e));r&&a.push(r),o.children.forEach((function(t){a.push.apply(a,n(t,e))}))}return a}(n,"UserCard-profile")[0],a=Number(U("rankAmt"));if(e){var r=e.children.find(t("UserCard-badges"));return o.ranks()&&(r?r.children.push(o.ranks().reverse().map((function(t,n){if(!a||n<a)return m("li",{className:"User-Rank"},Object(lt.a)(t))}))):e.children.splice(1,0,m("ul",{className:"UserCard-badges badges"},o.ranks().reverse().map((function(t,n){if(!a||n<a)return m("li",{className:"User-Rank"},Object(lt.a)(t))}))))),n}})),Object(A.extend)(ct.a.prototype,"view",(function(t){var n=this.attrs.post.user();if(!n)return t;var o,e=t.children.find((o="h3",function(t){return t&&t.tag&&t.tag===o})),a=Number(U("rankAmt"));e.children.push(n.ranks().reverse().map((function(t,n){if(!a||n<a)return m("span",{className:"Post-Rank"},Object(lt.a)(t))}))),e.children=e.children.filter((function(t){return void 0!==t.tag}))}))},dt=o(24),ht=o.n(dt),vt=o(38),bt=o.n(vt),gt=function(t){return app.store.find("posts",t).then((function(){return m.redraw()}))},yt=[],xt=function(){Object(A.extend)(ht.a.prototype,"oncreate",(function(){app.pusher&&app.pusher.then((function(t){t.main.bind("newVote",(function(t){var n,o,e=app.store.getById("posts",t.post_id),a=t.user_id;e&&e.votes()!==t.votes&&a!=app.session.user.id()&&(n=e.id(),(o=yt[n])?o(n):(o=yt[n]=bt()(gt,1500))(n))}))}))})),Object(A.extend)(ht.a.prototype,"onremove",(function(){app.pusher&&app.pusher.then((function(t){t.main.unbind("newVote")}))}))};function kt(){return(kt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}var Nt=o(7),jt=o.n(Nt),Ot=function(t,n){var o=t.firstPost();return o&&void 0!==o[n]()?o[n]():t[n]()},wt=function(){Object(A.extend)(at.a.prototype,"oninit",(function(){this.voteLoading=jt()(!1)})),Object(A.extend)(at.a.prototype,"view",(function(t){if(t&&t.children){var n=t.children.find((function(t){return t&&t.attrs&&t.attrs.className&&t.attrs.className.includes("DiscussionListItem-content")})),o=this.attrs.discussion,e=o.firstPost(),a=Ot(o,"hasUpvoted"),r=Ot(o,"hasDownvoted"),s=!app.session.user||Ot(o,"canVote"),i={color:app.forum.attribute("themePrimaryColor")},u={disabled:!s},c=U("useAlternateLayout",!0);n.children.unshift(m("div",{className:"DiscussionListItem-votes "+(c&&"alternateLayout")},S()("fas fa-arrow-up",kt({style:a?i:{},onclick:s&&function(){return nt(e,!a,!1,null,o)}},u)),m("span",null,st()(Ot(o,"votes")||0)),S()("fas fa-arrow-down",kt({style:r?i:{},onclick:s&&function(){return nt(e,!1,!r,null,o)}},u))))}}))},Pt={RankingsPage:D,VoteNotification:R,VotesModal:Y},Lt=o(13),Vt=kt({saveVote:nt,setting:U},Lt.a);app.initializers.add("fof-gamification",(function(t){i.a.prototype.votes=r.a.attribute("votes"),i.a.prototype.hasUpvoted=r.a.attribute("hasUpvoted"),i.a.prototype.hasDownvoted=r.a.attribute("hasDownvoted"),i.a.prototype.canVote=r.a.attribute("canVote"),f.a.prototype.points=r.a.attribute("points"),f.a.prototype.ranks=r.a.hasMany("ranks"),c.a.prototype.upvotes=r.a.hasMany("upvotes"),c.a.prototype.votes=r.a.attribute("votes"),c.a.prototype.canVote=r.a.attribute("canVote"),c.a.prototype.canSeeVotes=r.a.attribute("canSeeVotes"),c.a.prototype.hasUpvoted=r.a.attribute("hasUpvoted"),c.a.prototype.hasDownvoted=r.a.attribute("hasDownvoted"),t.store.models.ranks=l.a,t.notificationComponents.vote=R,t.routes.rankings={path:"/rankings",component:D},ot(),G(),mt(),it(),xt(),U("useAlternateLayout",!0)&&wt()}))}]);
//# sourceMappingURL=forum.js.map