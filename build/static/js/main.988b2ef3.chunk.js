(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{20:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(1),n=t.n(s),r=t(14),i=t.n(r),d=(t(20),t(3)),j=t(4),l=t.n(j),h=t.p+"static/media/banner.1715e7df.png",b=t.p+"static/media/mp.2b19b39c.png";var o=function(e){var c=Object(s.useState)(null),t=Object(d.a)(c,2),n=t[0],r=t[1],i=Object(s.useState)(!1),j=Object(d.a)(i,2),h=j[0],o=j[1],u=Object(s.useRef)(null);return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("img",{src:b}),Object(a.jsxs)("h4",{children:["Track name: ",e.track.track.track_name]}),Object(a.jsxs)("p",{children:["Artist: ",e.track.track.artist_name]}),Object(a.jsxs)("p",{children:["Track ID: ",e.track.track.track_id]}),Object(a.jsx)("button",{className:"button",onClick:function(e){e=u.current.value;l.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id="+e+"&apikey=fddd8ab1808d8700b4112d8f508a8659").then((function(e){r(e.data.message.body.lyrics.lyrics_body),o(!h)}))},ref:u,value:e.track.track.track_id,children:"Show Lyrics"}),Object(a.jsxs)("div",{className:h?"display":"undisplay",children:[Object(a.jsx)("span",{className:"exit",onClick:function(){o(!h)},children:"X"}),Object(a.jsx)("h2",{children:"Track Lyrics"}),Object(a.jsx)("p",{children:e.track.track.track_name}),Object(a.jsx)("div",{children:n})]})]})};t(38);var u=function(){var e=Object(s.useState)(null),c=Object(d.a)(e,2),t=c[0],n=c[1],r=Object(s.useState)(null),i=Object(d.a)(r,2),j=(i[0],i[1]);return Object(s.useEffect)((function(){l.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=fddd8ab1808d8700b4112d8f508a8659").then((function(e){n(e.data.message.body.track_list)}))}),[]),Object(s.useEffect)((function(){l.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=201234497fddd8ab1808d8700b4112d8f508a8659").then((function(e){j(e.data.message.body.lyrics)}))}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"Row",children:[Object(a.jsx)("a",{href:"#",className:"logo",children:"Jude Music Blog"}),Object(a.jsxs)("nav",{children:[Object(a.jsx)("a",{href:"#",children:"Home"}),Object(a.jsx)("a",{href:"#",children:"Charts "}),Object(a.jsx)("a",{href:"#",children:"Lyrics"}),Object(a.jsx)("a",{href:"#",children:"Latest"})]})]})})}),Object(a.jsx)("section",{className:"banner",children:Object(a.jsx)("div",{className:"banner1",children:Object(a.jsx)("img",{src:h})})}),Object(a.jsx)("section",{className:"track-list",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"section-title",children:"US Music Chart "}),Object(a.jsx)("h3",{className:"subsection-title",children:"Top Trending Tracks in the US"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"music-card",children:Object(a.jsx)("div",{children:t?t.map((function(e){return Object(a.jsx)(o,{track:e,setCurrentTrack:j})})):Object(a.jsx)("p",{children:"loading..."})})})})]})})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),a(e),s(e),n(e),r(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),m()}},[[39,1,2]]]);
//# sourceMappingURL=main.988b2ef3.chunk.js.map