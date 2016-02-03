/*! formstone v0.9.0 [tooltip.js] 2016-02-03 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){this.on(p.mouseEnter,a,f)}function e(a){k(),this.off(p.namespace)}function f(a){k();var b=a.data;b.left=a.pageX,b.top=a.pageY,i(b)}function g(a){var b=a.data;q.clearTimer(b.timer),k()}function h(a){j(a.pageX,a.pageY)}function i(c){k();var d="";d+='<div class="',d+=[o.base,o[c.direction],c.theme,c.customClass].join(" "),d+='">',d+='<div class="'+o.content+'">',d+=c.formatter.call(c.$el,c),d+='<span class="'+o.caret+'"></span>',d+="</div>",d+="</div>",r={$tooltip:a(d),$el:c.$el},b.$body.append(r.$tooltip);var e=r.$tooltip.find(n.content),f=r.$tooltip.find(n.caret),i=c.$el.offset(),l=c.$el.outerHeight(),m=c.$el.outerWidth(),s=0,t=0,u=0,v=0,w=!1,x=!1,y=f.outerHeight(!0),z=f.outerWidth(!0),A=e.outerHeight(!0),B=e.outerWidth(!0);"right"===c.direction||"left"===c.direction?(x=(A-y)/2,v=-A/2,"right"===c.direction?u=c.margin:"left"===c.direction&&(u=-(B+c.margin))):(w=(B-z)/2,u=-B/2,"bottom"===c.direction?v=c.margin:"top"===c.direction&&(v=-(A+c.margin))),e.css({top:v,left:u}),f.css({top:x,left:w}),c.follow?c.$el.on(p.mouseMove,c,h):(c.match?"right"===c.direction||"left"===c.direction?(t=c.top,"right"===c.direction?s=i.left+m:"left"===c.direction&&(s=i.left)):(s=c.left,"bottom"===c.direction?t=i.top+l:"top"===c.direction&&(t=i.top)):"right"===c.direction||"left"===c.direction?(t=i.top+l/2,"right"===c.direction?s=i.left+m:"left"===c.direction&&(s=i.left)):(s=i.left+m/2,"bottom"===c.direction?t=i.top+l:"top"===c.direction&&(t=i.top)),j(s,t)),c.timer=q.startTimer(c.timer,c.delay,function(){r.$tooltip.addClass(o.visible)}),c.$el.one(p.mouseLeave,c,g)}function j(a,b){r&&r.$tooltip.css({left:a,top:b})}function k(){r&&(r.$el.off([p.mouseMove,p.mouseLeave].join(" ")),r.$tooltip.remove(),r=null)}function l(a){return this.data("title")}var m=b.Plugin("tooltip",{widget:!0,defaults:{customClass:"",delay:0,direction:"top",follow:!1,formatter:l,margin:15,match:!1,theme:"fs-light"},classes:["content","caret","visible","top","bottom","right","left"],methods:{_construct:d,_destruct:e}}),n=m.classes,o=n.raw,p=m.events,q=m.functions,r=null}(jQuery,Formstone);