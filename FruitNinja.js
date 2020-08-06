(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Stain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.227)").s().p("AivFQQgqgagRgeIgOAAQhEAAgygoQgxgoAAg4QAAgfAPgaQgigIgagUQgngcAAgmQAAglAigdQgigTAAgaQAAgcAkgWQAYgMAbgFQAOgoArgfQA7guBSgCQAJgJAJgFQA4goBLAAQA8AAAsAXQAGgGAIgFQAugfA9gBQA/ABAtAfQAdATALAaQAvACAjAYQAnAbAAAoQAAAhgcAYQAhAIAbAUQAnAfAAArQAAAqgnAeQgPALgOAIQAlAlAAAwQAAAwglAiQgUAUgWALQgGAdgfATQgiAZgzAAQgiAAgcgLQgRARgZARQhHAqhiABQhjgBhHgqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-37.8,100,75.69999999999999);


(lib.Half = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AnzD6IAAnzIPnAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Half, new cjs.Rectangle(-50,-25,100,50), null);


(lib.Container = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Bubble = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.447)").s().p("AiBCDQg2g2AAhNQAAhMA2g1QA1g2BMAAQBMAAA3A2QA2A1AABMQAABNg2A2Qg3A2hMAAQhMAAg1g2g");
	this.shape.setTransform(20.5,-21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AlsFtQiXiXAAjWQAAjUCXiYQCYiXDUAAQDWAACXCXQCXCYAADUQAADWiXCXQiXCXjWAAQjUAAiYiXgABLlaQg2A1AABNQAABNA2A2QA1A2BNAAQBMAAA3g2QA2g2AAhNQAAhNg2g1Qg3g2hMAAQhNAAg1A2g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-51.6,103.2,103.2);


(lib.Fruit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.half1 = new lib.Half();
	this.half1.name = "half1";
	this.half1.setTransform(0,25);

	this.half0 = new lib.Half();
	this.half0.name = "half0";
	this.half0.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.half0},{t:this.half1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fruit, new cjs.Rectangle(-50,-50,100,100), null);


(lib.Explosion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Bubble_6
	this.instance = new lib.Bubble("synched",0);
	this.instance.setTransform(12.95,-0.15,0.2138,0.2138,54.1918);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:54.1909,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({x:16.1797,y:-2.8579,alpha:0.9333},0).wait(1).to({x:19.403,y:-5.1766,alpha:0.8667},0).wait(1).to({x:22.6198,y:-7.1067,alpha:0.8},0).wait(1).to({x:25.8301,y:-8.6485,alpha:0.7333},0).wait(1).to({x:29.0342,y:-9.8027,alpha:0.6667},0).wait(1).to({x:32.232,y:-10.5694,alpha:0.6},0).wait(1).to({x:35.4238,y:-10.9491,alpha:0.5333},0).wait(1).to({x:38.6096,y:-10.9417,alpha:0.4667},0).wait(1).to({x:41.7894,y:-10.5475,alpha:0.4},0).wait(1).to({x:44.9634,y:-9.7664,alpha:0.3333},0).wait(1).to({x:48.1318,y:-8.5982,alpha:0.2667},0).wait(1).to({x:51.2945,y:-7.0429,alpha:0.2},0).wait(1).to({x:54.4517,y:-5.1,alpha:0.1333},0).wait(1).to({x:57.6035,y:-2.7692,alpha:0.0667},0).wait(1).to({x:60.75,y:-0.05,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Bubble_5
	this.instance_1 = new lib.Bubble("synched",0);
	this.instance_1.setTransform(9.95,9.65,0.1976,0.1976,97.497);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.1977,scaleY:0.1977,rotation:97.5009,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({x:14.2091,y:8.7735,alpha:0.9333},0).wait(1).to({x:18.2385,y:8.2457,alpha:0.8667},0).wait(1).to({x:22.0384,y:8.0664,alpha:0.8},0).wait(1).to({x:25.6091,y:8.2353,alpha:0.7333},0).wait(1).to({x:28.9509,y:8.7524,alpha:0.6667},0).wait(1).to({x:32.064,y:9.6176,alpha:0.6},0).wait(1).to({x:34.9485,y:10.8309,alpha:0.5333},0).wait(1).to({x:37.6047,y:12.3924,alpha:0.4667},0).wait(1).to({x:40.0324,y:14.3023,alpha:0.4},0).wait(1).to({x:42.2319,y:16.5609,alpha:0.3333},0).wait(1).to({x:44.2029,y:19.1686,alpha:0.2667},0).wait(1).to({x:45.9454,y:22.1258,alpha:0.2},0).wait(1).to({x:47.4592,y:25.4329,alpha:0.1333},0).wait(1).to({x:48.7441,y:29.0907,alpha:0.0667},0).wait(1).to({x:49.8,y:33.1,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Bubble_4
	this.instance_2 = new lib.Bubble("synched",0);
	this.instance_2.setTransform(8.65,-12.1,0.1676,0.1676);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({x:8.989,y:-16.4358,alpha:0.9333},0).wait(1).to({x:9.6455,y:-20.395,alpha:0.8667},0).wait(1).to({x:10.6191,y:-23.978,alpha:0.8},0).wait(1).to({x:11.9094,y:-27.1852,alpha:0.7333},0).wait(1).to({x:13.5163,y:-30.0171,alpha:0.6667},0).wait(1).to({x:15.4396,y:-32.4737,alpha:0.6},0).wait(1).to({x:17.6792,y:-34.5553,alpha:0.5333},0).wait(1).to({x:20.2352,y:-36.262,alpha:0.4667},0).wait(1).to({x:23.1076,y:-37.5938,alpha:0.4},0).wait(1).to({x:26.2965,y:-38.5506,alpha:0.3333},0).wait(1).to({x:29.8022,y:-39.1322,alpha:0.2667},0).wait(1).to({x:33.625,y:-39.3384,alpha:0.2},0).wait(1).to({x:37.7652,y:-39.1687,alpha:0.1333},0).wait(1).to({x:42.2233,y:-38.6228,alpha:0.0667},0).wait(1).to({x:47,y:-37.7,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Bubble_3
	this.instance_3 = new lib.Bubble("synched",0);
	this.instance_3.setTransform(-6.25,-10.3,0.2306,0.2306,-90);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({x:-7.0047,y:-15.0174,alpha:0.9333},0).wait(1).to({x:-8.0676,y:-19.321,alpha:0.8667},0).wait(1).to({x:-9.4384,y:-23.2112,alpha:0.8},0).wait(1).to({x:-11.1171,y:-26.6888,alpha:0.7333},0).wait(1).to({x:-13.1037,y:-29.7543,alpha:0.6667},0).wait(1).to({x:-15.3982,y:-32.4082,alpha:0.6},0).wait(1).to({x:-18.0007,y:-34.6508,alpha:0.5333},0).wait(1).to({x:-20.9115,y:-36.4825,alpha:0.4667},0).wait(1).to({x:-24.1308,y:-37.9033,alpha:0.4},0).wait(1).to({x:-27.6589,y:-38.9135,alpha:0.3333},0).wait(1).to({x:-31.4964,y:-39.513,alpha:0.2667},0).wait(1).to({x:-35.6436,y:-39.7016,alpha:0.2},0).wait(1).to({x:-40.1011,y:-39.4792,alpha:0.1333},0).wait(1).to({x:-44.8696,y:-38.8455,alpha:0.0667},0).wait(1).to({x:-49.95,y:-37.8,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Bubble_2
	this.instance_4 = new lib.Bubble("synched",0);
	this.instance_4.setTransform(-4,11.9,0.1415,0.1415,180);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({x:-7.1149,y:12.1349,alpha:0.9333},0).wait(1).to({x:-10.014,y:12.5791,alpha:0.8667},0).wait(1).to({x:-12.6974,y:13.2322,alpha:0.8},0).wait(1).to({x:-15.1654,y:14.0939,alpha:0.7333},0).wait(1).to({x:-17.4185,y:15.164,alpha:0.6667},0).wait(1).to({x:-19.4568,y:16.4421,alpha:0.6},0).wait(1).to({x:-21.2804,y:17.9283,alpha:0.5333},0).wait(1).to({x:-22.8896,y:19.6223,alpha:0.4667},0).wait(1).to({x:-24.2845,y:21.524,alpha:0.4},0).wait(1).to({x:-25.465,y:23.6335,alpha:0.3333},0).wait(1).to({x:-26.4311,y:25.9508,alpha:0.2667},0).wait(1).to({x:-27.1828,y:28.4759,alpha:0.2},0).wait(1).to({x:-27.72,y:31.209,alpha:0.1333},0).wait(1).to({x:-28.0424,y:34.1502,alpha:0.0667},0).wait(1).to({x:-28.15,y:37.3,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Bubble_1
	this.instance_5 = new lib.Bubble("synched",0);
	this.instance_5.setTransform(-8.2,1.4,0.1965,0.1965,-150.0023);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-150.001,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({x:-12.2437,y:-1.2892,alpha:0.9333},0).wait(1).to({x:-16.2275,y:-3.5516,alpha:0.8667},0).wait(1).to({x:-20.1515,y:-5.3877,alpha:0.8},0).wait(1).to({x:-24.0161,y:-6.7978,alpha:0.7333},0).wait(1).to({x:-27.8217,y:-7.7821,alpha:0.6667},0).wait(1).to({x:-31.5686,y:-8.3409,alpha:0.6},0).wait(1).to({x:-35.2572,y:-8.4743,alpha:0.5333},0).wait(1).to({x:-38.8878,y:-8.1821,alpha:0.4667},0).wait(1).to({x:-42.4606,y:-7.4643,alpha:0.4},0).wait(1).to({x:-45.9759,y:-6.3207,alpha:0.3333},0).wait(1).to({x:-49.4341,y:-4.7509,alpha:0.2667},0).wait(1).to({x:-52.8353,y:-2.7545,alpha:0.2},0).wait(1).to({x:-56.1799,y:-0.331,alpha:0.1333},0).wait(1).to({x:-59.468,y:2.5202,alpha:0.0667},0).wait(1).to({x:-62.7,y:5.8,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Stain
	this.instance_6 = new lib.Stain("synched",0);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-51.6,144.8,96.2);


// stage content:
(lib.FruitNinja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var fruits = [];
		var container = root.container;
		
		root.init = function() {
			container.totalFruits = 7;
		    container.gravity = 0.5;
		    container.minDelay = 3000;
		    container.maxDelay = 6000;
		    container.spawnY = canvas.height / stage.scaleY;
			
		    // Create fruit
		    root.createFruit();
			
		    createjs.Ticker.on('tick', root.onFrameEnter);
		    stage.on('stagemousemove', root.slash);
		}
		
		root.randomRange = function(min, max) {
		    return Math.random() * (max - min + 1) + min;
		}
		
		root.lerp = function(start, end, ratio) {
		    return (1 - ratio) * start + ratio * end;
		}
		
		root.createFruit = function() {
		    for (var i = 0; i < container.totalFruits; i++) {
		        var fruit = new lib.Fruit();
		        fruit.hit = true;
		        container.addChild(fruit);
		        fruit.visible = false;
		        fruit.spawn();
		        fruits[i] = fruit;
		    }
		}
		
		root.onEnterFrame = function() {
			
		}
		
		root.slash = function() {
			
		}
		
		lib.Fruit.prototype.getReady = function() {
		    this.hit = false; // the fruit is not hit
		    this.x = root.randomRange(this.nominalBounds.width * 0.5, canvas.width / stage.scaleX - this.nominalBounds.width * 0.5);
		    this.y = this.parent.spawnY + this.nominalBounds.height * 0.5;
		    this.vY = 0;
		    this.forceY = root.randomRange(30, 40);
		    this.frictionY = 0.95;
		    this.rotationSpeed = root.randomRange(-10, 10);
			
		    this.half0.x = 0;
		    this.half0.y = -15;
		    this.half0.rotation = 0;
		    this.half0.vX = 0;
		    this.half0.forceX = 0;
		    this.half0.frictionX = 0;
		    this.half0.rotationSpeed = 0;
			
		    this.half1.x = 0;
		    this.half1.y = 15;
		    this.half1.rotation = 0;
		    this.half1.vX = 0;
		    this.half1.forceX = 0;
		    this.half1.frictionX = 0;
		    this.half1.rotationSpeed = 0;
		}
		
		lib.Fruit.prototype.launch = function()
		{
			this.offscreen = false;
			this.visible = true;
			this.vY -= this.forceY;
		}
		
		lib.Fruit.prototype.spawn = function() {
		    setTimeout(function(scope) {
		        scope.getReady();
		        scope.launch();
		    }, root.randomRange(this.parent.minDelay, this.parent.maxDelay), this);
		}
		
		root.init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Code
	this.textScore = new cjs.Text("", "38px 'Times New Roman'", "#FFFFFF");
	this.textScore.name = "textScore";
	this.textScore.lineHeight = 44;
	this.textScore.lineWidth = 157;
	this.textScore.alpha = 0.44705882;
	this.textScore.parent = this;
	this.textScore.setTransform(825.45,26);

	this.timeline.addTween(cjs.Tween.get(this.textScore).wait(1));

	// Container
	this.container = new lib.Container();
	this.container.name = "container";

	this.timeline.addTween(cjs.Tween.get(this.container).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1335.5,408,-351.5,-337.9);
// library properties:
lib.properties = {
	id: '36ACDD998BE9B14BBC6F91575A44AF77',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['36ACDD998BE9B14BBC6F91575A44AF77'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;