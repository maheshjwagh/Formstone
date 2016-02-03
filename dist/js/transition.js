/*! formstone v0.9.0 [transition.js] 2016-02-03 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a,c){if(c){a.$target=this.find(a.target),a.$check=a.target?a.$target:this,a.callback=c,a.styles=i(a.$check),a.timer=null;var d=a.$check.css(b.transition+"-duration"),e=parseFloat(d);b.support.transition&&d&&e?this.on(l.transitionEnd,a,f):a.timer=m.startTimer(a.timer,50,function(){h(a)},!0)}}function e(a){m.clearTimer(a.timer,!0),this.off(l.namespace)}function f(b){b.stopPropagation(),b.preventDefault();var c=b.data,d=b.originalEvent,e=c.target?c.$target:c.$el;c.property&&d.propertyName!==c.property||!a(d.target).is(e)||g(c)}function g(a){a.always||a.$el[k.namespaceClean]("destroy"),a.callback.apply(a.$el)}function h(a){var b=i(a.$check);j(a.styles,b)||g(a),a.styles=b}function i(b){var c,d,e,f={};if(b instanceof a&&(b=b[0]),n.getComputedStyle){c=n.getComputedStyle(b,null);for(var g=0,h=c.length;h>g;g++)d=c[g],e=c.getPropertyValue(d),f[d]=e}else if(b.currentStyle){c=b.currentStyle;for(d in c)c[d]&&(f[d]=c[d])}return f}function j(b,c){if(a.type(b)!==a.type(c))return!1;for(var d in b)if(!b.hasOwnProperty(d)||!c.hasOwnProperty(d)||b[d]!==c[d])return!1;return!0}var k=b.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:d,_destruct:e,resolve:g}}),l=k.events,m=k.functions,n=b.window}(jQuery,Formstone);