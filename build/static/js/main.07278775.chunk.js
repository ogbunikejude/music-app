(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{20:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(2),n=t.n(a),r=t(14),i=t.n(r),j=(t(20),t(5)),d=t(4),h=t.n(d),l=t.p+"static/media/banner.1715e7df.png",b=t.p+"static/media/mp.2b19b39c.png";var o=function(e){return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("img",{src:b}),Object(s.jsxs)("h4",{children:["Track name: ",e.track.track.track_name]}),Object(s.jsxs)("p",{children:["Artist: ",e.track.track.artist_name]}),Object(s.jsxs)("p",{children:["Track ID: ",e.track.track.track_id]}),Object(s.jsx)("button",{onClick:function(){e.setCurrentTrack(e.lyrics)},children:"Show Lyrics"})]})};t(38);var u=function(){var e=Object(a.useState)(null),c=Object(j.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(null),i=Object(j.a)(r,2),d=(i[0],i[1]);return Object(a.useEffect)((function(){h.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=fddd8ab1808d8700b4112d8f508a8659").then((function(e){n(e.data.message.body.track_list)}))}),[]),Object(a.useEffect)((function(){h.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=[201234497,201621042,200360817]fddd8ab1808d8700b4112d8f508a8659").then((function(e){d(e.data.message.body.lyrics)}))}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"Row",children:[Object(s.jsx)("a",{href:"#",className:"logo",children:"Jude Music Blog"}),Object(s.jsxs)("nav",{children:[Object(s.jsx)("a",{href:"#",children:"Home"}),Object(s.jsx)("a",{href:"#",children:"Charts "}),Object(s.jsx)("a",{href:"#",children:"Lyrics"}),Object(s.jsx)("a",{href:"#",children:"Latest"})]})]})})}),Object(s.jsx)("section",{className:"banner",children:Object(s.jsx)("div",{className:"banner1",children:Object(s.jsx)("img",{src:l})})}),Object(s.jsx)("section",{className:"track-list",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"section-title",children:"US Music Chart "}),Object(s.jsx)("h3",{className:"subsection-title",children:"Top Trending Tracks in the US"}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"music-card",children:Object(s.jsx)("div",{children:t?t.map((function(e){return Object(s.jsx)(o,{track:e,setCurrentTrack:d})})):Object(s.jsx)("p",{children:"loading..."})})})})]})})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),s(e),a(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),m()}},[[39,1,2]]]);
//# sourceMappingURL=main.07278775.chunk.js.map