/*! formstone v0.9.0 [swap.js] 2016-02-03 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(b){b.enabled=!1,b.active=!1,b.classes=a.extend(!0,{},n,b.classes),b.target=this.data(m+"-target"),b.$target=a(b.target).addClass(b.classes.raw.target),b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")";var c=this.data(m+"-linked");b.linked=c?"[data-"+m+'-linked="'+c+'"]':!1;var d=this.data(m+"-group");b.group=d?"[data-"+m+'-group="'+d+'"]':!1,b.$swaps=a().add(this).add(b.$target),this.on(o.click+b.dotGuid,b,k)}function e(b){b.collapse||!b.group||a(b.group).filter("[data-"+m+"-active]").length||a(b.group).eq(0).attr("data-"+m+"-active","true"),b.onEnable=this.data(m+"-active")||!1,a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){i.call(b.$el,b,!0)},leave:function(){j.call(b.$el,b,!0)}})}function f(b){a.fsMediaquery("unbind",b.rawGuid),b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")).off(o.namespace)}function g(b,c){if(b.enabled&&!b.active){b.group&&!c&&a(b.group).not(b.$el).not(b.linked)[l.namespaceClean]("deactivate",!0);var d=b.group?a(b.group).index(b.$el):null;b.$swaps.addClass(b.classes.raw.active),c||b.linked&&a(b.linked).not(b.$el)[l.namespaceClean]("activate",!0),this.trigger(o.activate,[d]),b.active=!0}}function h(b,c){b.enabled&&b.active&&(b.$swaps.removeClass(b.classes.raw.active),c||b.linked&&a(b.linked).not(b.$el)[l.namespaceClean]("deactivate",!0),this.trigger(o.deactivate),b.active=!1)}function i(b,c){b.enabled||(b.enabled=!0,b.$swaps.addClass(b.classes.raw.enabled),c||a(b.linked).not(b.$el)[l.namespaceClean]("enable"),this.trigger(o.enable),b.onEnable?(b.active=!1,g.call(this,b)):(b.active=!0,h.call(this,b)))}function j(b,c){b.enabled&&(b.enabled=!1,b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")),c||a(b.linked).not(b.$el)[l.namespaceClean]("disable"),this.trigger(o.disable))}function k(a){p.killEvent(a);var b=a.data;b.active&&b.collapse?h.call(b.$el,b):g.call(b.$el,b)}var l=b.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:d,_postConstruct:e,_destruct:f,activate:g,deactivate:h,enable:i,disable:j}}),m=l.namespace,n=l.classes,o=l.events,p=l.functions}(jQuery,Formstone);