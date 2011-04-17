dojo.provide("basics.MenuItem");
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.declare("basics.MenuItem",[dijit._Widget,dijit._Templated],{
    templateString: "<div class='basicsMenuItem' dojoAttachEvent='onclick:_click'>" +
            "   <div class='icon' dojoAttachPoint='iconNode'></div>" +
            "   <div class='label' dojoAttachPoint='titleNode'></div>" +
            "</div>",
    baseClass: "basicsMenuItem",
    click: null,
    attributeMap: {
        icon: { node: 'iconNode', type:'class' },
        label: { node: 'titleNode', type: 'innerText' }
    },
    postCreate: function () {},
    onClick: function () {},
    _click: function () {
        if(this.click) {
            this.click();
        }
        this.onClick();
    }
});
