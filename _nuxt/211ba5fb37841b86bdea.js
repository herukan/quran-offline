(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{179:function(t,e,a){var s=a(199);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(25).default)("6d017c60",s,!0,{})},180:function(t,e,a){var s=a(201);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(25).default)("deb58848",s,!0,{})},198:function(t,e,a){"use strict";var s=a(179);a.n(s).a},199:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.surah__header[data-v-e511f438] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.surah__title[data-v-e511f438] {\n  font-size: 2rem;\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n.surah__title--latin[data-v-e511f438] {\n    width: 100%;\n    font-size: 1.5rem;\n}\n.surah__trans[data-v-e511f438] {\n  text-align: right;\n  font-style: italic;\n  line-height: 2;\n}\n.surah__count[data-v-e511f438] {\n  text-align: right;\n}\n",""])},200:function(t,e,a){"use strict";var s=a(180);a.n(s).a},201:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.feed[data-v-15779f57] {\n  display: block;\n  width: 90%;\n  margin: 1em auto;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #ccc;\n}\n.feed__title[data-v-15779f57] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    font-size: 1.5rem;\n}\n.feed__title svg[data-v-15779f57] {\n      margin-right: .2em;\n}\n.feed__empty[data-v-15779f57] {\n    text-align: left;\n    padding-top: 1em;\n    color: #333;\n    font-style: italic;\n}\n",""])},218:function(t,e,a){"use strict";a.r(e);a(38),a(55);var s=a(8),n=a.n(s),i=(a(0),a(1),a(2),a(79)),r=a(9),l={name:"LastReadCard",props:{surah:{type:Object,default:function(){return{}}}},computed:{},methods:{getSurahDetailUrl:function(t,e){return"/".concat(t,"#verse-").concat(e)},goToSurahDetail:function(t,e){var a=this.getSurahDetailUrl(t,e);this.$router.push(a)}}},c=(a(198),a(4)),d=Object(c.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"surah__root"},[a("a",{staticClass:"surah block_content has-shadow",on:{click:function(e){e.preventDefault(),t.goToSurahDetail(t.surah.index,t.surah.verse)}}},[a("div",{staticClass:"surah__header"},[a("div",{staticClass:"surah__header--left"},[a("div",{staticClass:"surah__index tag_index",staticStyle:{width:"130px"}},[t._v("\n          Ayat ke "+t._s(t.surah.verse)+"\n        ")])]),t._v(" "),a("div",{staticClass:"surah__header--right"},[a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"surah__title"},[t._v("\n            "+t._s(t.surah.arabic)+"\n          ")])]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n            "+t._s(t.surah.latin)+"\n          ")])])])])])])},[],!1,null,"e511f438",null);d.options.__file="LastReadCard.vue";var o=d.exports,u=a(18),h=a(23),f={name:"LastVersePage",components:{IosBookmarkIcon:i.a,LastReadCard:o},computed:n()({},Object(r.d)(["allSurahList","lastReadVerse"]),{isHaveLastRead:function(){return Object(h.c)(this.lastReadVerse&&this.lastReadVerse.surah)},lastReadVerseData:function(){var t=this;if(this.isHaveLastRead){var e=this.allSurahList.find(function(e){return e.index===t.lastReadVerse.surah});return Object.assign({},e,{verse:this.lastReadVerse.verse})}return null}}),mounted:function(){this.setHeaderTitle(u.a.LAST_READ),this.fetchSurahInfo()},methods:n()({},Object(r.c)(["setHeaderTitle"]),Object(r.b)(["fetchAllSurah"]),{fetchSurahInfo:function(){this.fetchAllSurah({success:function(){}})}})},_=(a(200),Object(c.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosBookmarkIcon",{attrs:{w:"1em",h:"1em"}}),this._v("\n      Ayat terakhir dibaca:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveLastRead?e("div",[e("LastReadCard",{attrs:{surah:this.lastReadVerseData}})],1):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum pernah menandai salah satu ayat sebagai terakhir dibaca.\n      ")])])])])},[],!1,null,"15779f57",null));_.options.__file="last-verse.vue";e.default=_.exports}}]);