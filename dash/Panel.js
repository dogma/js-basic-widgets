dojo.provide("basics.dash.Panel");
dojo.require("basics.Panel");
dojo.require("dijit._Templated");
dojo.require("dijit._Widget");
dojo.declare("basics.dash.Panel",[dijit._Widget,dijit._Templated,basics.Panel],{
    attributeMap: {
        title: { node: 'titleNode', type:'innerHTML'},
        body: { node: 'bodyNode', type: 'innerHTML'},
        footer: { node: 'footerNode', type: 'innerHTML'}
    },
    postCreate: function () {
        if(this.title) {this.attr("title",this.title);}
        if(this.body) {this.attr("body",this.body);}
        if(this.footer) {this.attr("footer",this.footer);}
        if(!this.footer || this.footer == "" ) { this.footerNode.parentNode.removeChild(this.footerNode); }
    }
});