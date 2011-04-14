dojo.provide("basics.MenuBody");
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.require("basics.MenuItem");
dojo.declare("basics.MenuBody",[dijit._Widget,dijit._Templated],{
    templateString: "<div class='basicsMenuBody' style='display:none;' dojoAttachPoint='bodyNode'></div>",
    attributeMap: {
        body: { node: 'bodyNode', type: 'innerHTML' }
    },
    postCreate: function () {},
    addItem:function (item) {
        this.bodyNode.appendChild(item.domNode);
    }
});