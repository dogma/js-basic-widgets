dojo.provide("basics.dash.Column");
dojo.require("dojo.dnd.Source");
dojo.require("dijit._Templated");
dojo.require("dijit._Widget");
dojo.require("basics.dash.Panel");
dojo.declare("basics.dash.Column",[dijit._Widget,dijit._Templated],{
    widgetType: ["widget"],
    acceptType: ["widget"],
    dragDelay: 15,
    templateString:"<div class='baseColumn'>" +
            "<div class='title' dojoAttachPoint='titleNode'></div>" +
            "<div class='body' dojoAttachPoint='bodyNode'></div>" +
            "</div>",
    attributeMap: {
        title:{ node: 'titleNode', type: 'innerHTML'},
        body: { node: 'bodyNode', type: 'innerHTML'}
    },
    postCreate: function () {
        this.domNode.id = this.id;
        var ob = this;

        console.info(this.title);
        if(this.title) { this.attr("title",this.title); }
        if(this.attr("title") == "" ) { dojo.style(this.titleNode,"display","none"); }
        if(this.body) { this.attr("body",this.body); }

        this.sortList = new dojo.dnd.Source(this.domNode, {
            accept: this.acceptType,
            creator: function(data,hint) {
                return ob._widgetCreator(data,hint);
            },
            listType: "widget",
            withHandles: true,
            parent: this.bodyNode,
            simpleSelection: true,
            delay: this.dragDelay,
            generateText: false
        });

        dojo.subscribe("/dnd/start",null, function (e){
            dojo.addClass(ob.domNode,"target");
        });
        dojo.subscribe("/dnd/cancel",null, function (e){
            dojo.removeClass(ob.domNode,"target");
        });
        dojo.subscribe("/dnd/drop",null, function (e){
            dojo.removeClass(ob.domNode,"target");
        });
    },
    add: function(data){
        this.sortList.insertNodes(false,[data]);
    },
    _widgetCreator: function (data,hint){

        //This is used to create sortable story entries. It contains the extra code
        //used by the dnd 'stuff' to make these nodes sortable.
        var panel;
        if(hint == "avatar"){
            panel = this._makePanel(data,true);
            panel.makeAvatar();
        } else {
            panel = this._makePanel(data);
        }

        return {node: panel.domNode, data: data, type: this.acceptType}
    },
    _makePanel: function (data) {
        return basics.dash.Panel({
            title: data.title,
            body: data.body,
            footer: data.footer
        });
    },
    addPanel: function (panel) {

    }
});