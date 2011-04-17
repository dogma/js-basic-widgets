dojo.provide("basics.Panel");
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.declare("basics.Panel",[dijit._Widget,dijit._Templated],{
    icon: "users",
    title: "default",
    isClosable: true,
    templateString: "<div class='basePanel'>" +
            "<div class='head dojoDndHandle'>" +
            "   <div class='title'>" +
            "      <div class='icon' dojoAttachPoint='iconNode'></div>" +
            "      <div class='titleText' dojoAttachPoint='titleNode'></div>" +
            "   </div>" +
            "   <div class='close-icon' dojoAttachPoint='closeNode' dojoAttachEvent='onclick:close'>x</div>" +
            "</div>" +
            "<div class='body' dojoAttachPoint='bodyNode'></div>" +
            "<div class='footer' dojoAttachPoint='footerNode'></div>" +
            "</div>",
    baseClass: "basicsPanel",
    attributeMap: {
        title: { node: "titleNode", type: "innerText" },
        body: {  node: "bodyNode", type: "innerHTML" },
        icon: { node: "iconNode", type: "class" },
        width: { node: "domNode", type: "attribute" },
        height: { node: "domNode", type: "attribute" }
    },
    postCreate: function () {
        if(!this.isClosable) {
            this.closeNode.parentNode.removeChild(this.closeNode);
        }
    },
    close: function () {
        this.domNode.parentNode.removeChild(this.domNode);
    },
    makeAvatar: function () {
        dojo.addClass(this.domNode,"avatar");
    }
});