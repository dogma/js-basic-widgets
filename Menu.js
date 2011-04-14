dojo.provide("basics.Menu");
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.require("basics.MenuBody");
dojo.require("basics.MenuItem");
dojo.declare("basics.Menu",[dijit._Widget,dijit._Templated],{
    templateString: "<div class='baseMenu off'>" +
            "<div class='button' dojoAttachPoint='buttonNode' dojoAttachEvent='onclick:toggle'></div>" +
            "<div class='body' dojoAttachPoint='bodyNode'></div>" +
            "</div>",
    attributeMap: {
        title: { node: "buttonNode", type: "innerText" },
        body: { node: "bodyNode", type: "innerHTML" }
    },
    postCreate: function () {
        this.body = new basics.MenuBody({ body: "" },this.bodyNode);
    },
    addItem: function (item) {
        var ob = this;
        dojo.connect(item,"onClick",function () {
            ob.toggle();
        });
        this.body.addItem(item);
    },
    add: function (label, callback, icon) {
        var item = new basics.MenuItem({label:label,callback:callback,icon:icon});
        this.addItem(item);
    },
    toggle: function () {
        dojo.toggleClass(this.domNode,"off");
        if(dojo.hasClass(this.domNode,"off")) {
            dijit.popup.close(this.body);
        } else {
            dijit.popup.open({ popup: this.body, parent: this, around: this.buttonNode, orient: {BL: 'TL', BR:'TR',TR:'BR'},
                onCancel: function () {console.info("not cancelling");},
                onExecute:function () {console.info("execute");},
                onClose: function () {console.info("close");}
            });
        }
    }
});