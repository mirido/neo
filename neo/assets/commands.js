'use strict';

Neo.CommandBase = function() {
};
Neo.CommandBase.prototype.data;
Neo.CommandBase.prototype.execute = function() {}


/*
---------------------------------------------------
	ZOOM
---------------------------------------------------
*/
Neo.ZoomPlusCommand = function(data) {this.data = data};
Neo.ZoomPlusCommand.prototype = new Neo.CommandBase();
Neo.ZoomPlusCommand.prototype.execute = function() {
	if (this.data.zoom < 12) {
        this.data.setZoom(this.data.zoom + 1);
    }
};

Neo.ZoomMinusCommand = function(data) {this.data = data};
Neo.ZoomMinusCommand.prototype = new Neo.CommandBase();
Neo.ZoomMinusCommand.prototype.execute = function() {
	if (this.data.zoom >= 2) {
        this.data.setZoom(this.data.zoom - 1);
    }
};

/*
---------------------------------------------------
	UNDO
---------------------------------------------------
*/
Neo.UndoCommand = function(data) {this.data = data};
Neo.UndoCommand.prototype = new Neo.CommandBase();
Neo.UndoCommand.prototype.execute = function() {
	this.data.undo();
};

Neo.RedoCommand = function(data) {this.data = data};
Neo.RedoCommand.prototype = new Neo.CommandBase();
Neo.RedoCommand.prototype.execute = function() {
	this.data.redo();
};


/*
---------------------------------------------------
---------------------------------------------------
*/



Neo.SubmitCommand = function(data) {this.data = data};
Neo.SubmitCommand.prototype = new Neo.CommandBase();
Neo.SubmitCommand.prototype.execute = function() {
    this.data.submit(document.getElementById('target').value);
};

Neo.CopyrightCommand = function(data) {this.data = data};
Neo.CopyrightCommand.prototype = new Neo.CommandBase();
Neo.CopyrightCommand.prototype.execute = function() {
//  var url = "https://web.archive.org/web/20070924062559/http://www.shichan.jp";
    var url = "http://hp.vector.co.jp/authors/VA016309/";
    if (confirm(url + "\nしぃちゃんのホームページを表示しますか？")) {
        Neo.openURL(url);
    }
};
