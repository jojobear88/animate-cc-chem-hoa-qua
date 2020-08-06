# [Animate CC] - Hướng dẫn làm game chém hoa quả trên HTML5 Canvas

###### tags: `AnimateCC`, `HTML5 Canvas`

https://hackmd.io/oHi5u1g1TzO4A0KhXY1sRA

Chào các bạn, hôm nay chúng ta sẽ cùng học cách làm game chém hoa quả - ninja fruit trên Animate CC nhé!

Game chém hoa quả là một game khá phổ biến từng có thời gian gây bão khi điện thoại thông minh với màn hình touchscreen lớn ra đời.

Nhiệm vụ của các bạn là chém các quả được "bắn" lên từ dưới màn hình trước khi chúng kịp rơi xuống. Nếu chém trúng thì quả sẽ bị bổ đôi và bắn nước tung tóe thích mắt.

Cùng bắt tay vào làm thôi nào!

Trước tiên hãy đổi tên 'Layer1' thành một cái tên dễ hiểu hơn nhé, chẳng hạn như 'container' (vì nó chứa cả màn chơi mà). 

Sau đó ta sẽ vẽ một hình chữ nhật bao cả màn chơi, đặt nó tại (0,0) và export nó thành symbol với tên là 'container' luôn nhé!

![](https://i.imgur.com/J5z4ra0.png)

Nhưng mục đích chính của mình là tạo nên 1 container ở vị trí (0,0) thôi, nên hãy vào trong symbol và xóa cái khối vừa tạo đi nhé!

Ok, giờ chúng ta hãy tạo một khối vuông tượng trưng cho một trái quả (fruit) sẽ bay lên nhé. Vì khi chém vào thì trái sẽ vỡ đôi, nên ta sẽ vẽ 2 hình chữ nhật ép vào nhau tạo thành hình vuông. 

Export nửa hình vuông với tên là 'Half'. Sau đó kéo 2 nửa hình vuông ra từ Library, tạo thành hình vuông và đặt tên là 'Fruit' (Trái cây). Đặt tên instance của từng nửa lần lượt là half0 và half1.

OK, library của các bạn giờ sẽ có 3 Movieclip như này.

![](https://i.imgur.com/z4JWUp4.png)

Tiếp theo, chúng ta sẽ vẽ hiệu ứng khi chém quả.

Chọn công cụ vẽ hình tròn, fill màu trắng (#FFFFFF) và để Opacity tầm 20%. Ta vẽ một hình tròn tượng trưng cho nước quả. Sau đó dùng công cụ transform để vẽ giống như nước văng tung tóe. Mình vẽ đại một hình như này.

![](https://i.imgur.com/e5zx80R.png)

F8, chọn type là Graphic, và đặt tên là 'Stain' (vết bẩn).

Tiếp theo là hiệu ứng giọt nước bắn ra. Ta vẽ 2 hình tròn lồng nhau. Hình bên ngoài để opacity 30%, trong để opacity 45%. Đại khái thì bong bóng của mình sẽ như thế này.

![](https://i.imgur.com/wHQLpER.png)

F8, chọn type là Graphic, và đặt tên là 'Bubble' (bong bóng).

Giờ là lúc làm một hoạt cảnh phát nổ bắn nước tung tóe sử dụng 2 Graphic vừa tạo. Kéo 'Stain' từ library ra giữa scene, nhấn F8 và export nó thành Movieclip với tên 'Explosion' (phát nổ). Sau đó kéo thêm vài 'Bubble' đè lên nó, mỗi Bubble ta sẽ để 1 layer riêng vì ta muốn tạo chuyển động cho từng Bubble mà.

![](https://i.imgur.com/tzNDE90.png)

Mình sẽ để Movieclip này chạy trong 2s. Trước tiên, vết bẩn sẽ hiện dần dần lên, sau đó bong bóng hiện lên và bay ra nhiều hướng, cuối cùng thì vết bẩn biến mất.

Bắt đầu làm thôi! Mình sẽ cho vết bẩn 10 frame để hiện lên và ẩn đi. Bong bóng thì hiện sớm hơn, 5 frame, sau đó 20 frame để nó di chuyển ra tứ phía. Các bạn có thể tham khảo của mình.

![](https://i.imgur.com/9T0o1KP.png)

Ok, vậy là ta đã tạo được Movieclip phát nổ khi chém quả. Vì đây là Movieclip nên nó sẽ lặp lại mãi. Ta tạo thêm 1 layer 'Code', đặt keyframe ở frame cuối cùng, sau đó nhấn F9, thêm dòng code sau.
```
this.parent.removeChild(this);
```

Click đúp chuột và đặt tên cho Linkage của các phần tử "Half", "Fruit", "Explosion" tương ứng. Chúng ta sẽ gọi tới chúng trong khi code.

![](https://i.imgur.com/BZcH3AA.png)

Giờ quay lại scene làm việc chính và tạo 1 layer  'Code' ở trên layer container, sau đó nhấn F9.

Chúng ta sẽ bắt đầu với hàm khởi tạo init() và khai báo các biến cần dùng đầu tiên. 

Trước hết, chúng ta biết số trái cây được bắn lên màn chơi là một tập hợp nhiều đối tượng 'Fruit', vậy nên ta cần một mảng fruits để chứa các đối tượng này.

Ta cũng thiết lập các thông số ban đầu cho container như gravity (trọng lượng), thời gian delay, độ cao tối đa của trái cây khi bắn lên.
```
var root = this;
var fruits = [];
var container = root.container;

root.init = function() {
    container.gravity = 0.5;
    container.minDelay = 3000;
    container.maxDelay = 6000;
    container.spawnY = canvas.height / stage.scaleY;
}
```

Ngoài ra như đã học ở game "mê cung", để sử dụng chuột trên màn chơi, ta cần enable thao tác chuột với stage.enableMouseOver().

Cuối cùng, để có thể kiểm tra sự kiện liên tục từng frame, ta sử dụng Ticker để bắt sự kiện (đã đề cập trong game "Rắn săn mồi"). Vậy ta có hàm init như sau.

```
stage.enableMouseOver();

root.init = function() {
    ...
    // Create fruit
    root.createFruit();
    
    createjs.Ticker.on("tick", root.onFrameEnter);
}

root.init();
```

Vậy là ta có ba hàm cần khai báo đó là createFruit(), onFrameEnter(), slash(). Lát nữa chúng ta sẽ cần định nghĩa 3 hàm này.

Nhưng trước tiên, chúng ta cần tạo một hàm để trả về một giá trị random. Do trò chơi này các đối tượng không xuất hiện theo một giá trị mặc định, cái nhanh cái chậm, cái xoay nhiều, xoay ít khác nhau.
```
root.randomRange = function(min, max) {
    return Math.random() * (max - min + 1) + min;
}
```

Ok, giờ hãy bắt đầu với đối tượng fruit của chúng ta nào.

Hãy bắt đầu bằng việc viết hàm getReady cho các đối tượng fruit để khai báo các thuộc tính khởi tạo của fruit. Để hàm getReady() được gọi cho mọi đối tượng fruit, ta viết như sau.
```
lib.Fruit.prototype.getReady = function() {
    this.hit = false; // the fruit is not hit
    this.x = root.randomRange(this.nominalBounds.width * 0.5, canvas.width / stage.scaleX - this.nominalBounds.width * 0.5);
    this.y = this.parent.spawnY + this.nominalBounds.height * 0.5;
    this.vY = 0;
    this.forceY = root.randomRange(30, 40);
    this.frictionY = 0.95;
    this.rotationSpeed = root.randomRange(-10, 10);
};
```

Đối tượng 'Fruit' của chúng ta được tạo từ 2 'Half' là half0 và half1, vậy nên cần bổ sung các thuộc tính cho nó. Ta viết thêm ở cuối hàm getReady.
```
lib.Fruit.prototype.getReady = function() {
    ...
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
```

Tiếp theo là "bắn" trái fruit vừa được tạo lên màn hình. Ta viết hàm launch() cho đối tượng fruit như sau.
```
lib.Fruit.prototype.launch = function()
{
	this.offscreen = false;
	this.visible = true;
	this.vY -= this.forceY;
}
```

Cuối cùng là thiết lập để cho các trái fruit bắn ra lệch thời gian với nhau. Ta viết hàm spawn như sau.

```
lib.Fruit.prototype.spawn = function() {
    setTimeout(function(scope) {
        scope.getReady();
        scope.launch();
    }, root.randomRange(this.parent.minDelay, this.parent.maxDelay), this);
}
```

Có vẻ ôn rồi đấy. Ta bắt tay vào viết hàm createFruit() để gọi tới trong hàm init() thôi nào.

```
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
```

Tiếp theo, chúng ta xử lý tới hàm onEnterFrame(). Trong hàm này, chúng ta cần xử lý các sự kiện khi quả bị chém và quả rơi ra khỏi màn hình.

Vậy hãy định nghĩa khi fruit bị chém thì hiệu ứng sẽ thế nào trước nhé.

Fruit sẽ bay lên theo chiều thẳng đứng a.k.a trục y, và khi bị chém thì 2 nửa sẽ bay theo 2 hướng khác nhau a.k.a trục x. Đầu tiên, hãy viết hàm để định nghĩa việc di chuyển này trước.
```
lib.Half.prototype.moveX = function() {
    this.vX *= this.frictionX;
    if (!isNaN(this.vX) && this.vX !== undefined)
		this.x += this.vX;
};

lib.Fruit.prototype.moveY = function() {
    this.vY += this.parent.gravity;
    this.vY *= this.frictionY;
    this.y += this.vY;
};
```

Đã có hàm di chuyển, tiếp theo là áp dụng nó vào chuyển động. Ta viết hàm animate() để định nghĩa cho 2 nửa của quả fruit khi bị chém nào.
```
lib.Fruit.prototype.anim = function()
{
    this.moveY();
    this.half0.moveX();
    this.half1.moveX();
	
    if (!isNaN(this.rotationSpeed) && this.rotationSpeed !== undefined)
        this.rotation += this.rotationSpeed;
		
    if (!isNaN(this.half0.rotationSpeed) && this.half0.rotationSpeed !== undefined)
        this.half0.rotation += this.half0.rotationSpeed;
	
    if (!isNaN(this.half1.rotationSpeed) && this.half1.rotationSpeed !== undefined)
        this.half1.rotation += this.half1.rotationSpeed;
}
```

Tiếp theo, ta cần kiểm tra khi nào thì fruit rời màn hình để lại 'bắn' nó lên. Ta có trục y với gốc (0,0) ở góc trái trên cùng màn hình. Vậy nếu giá trị y của fruit > độ cao của canvas + 1/2 chiều cao của fruit (do tâm ở chính giữa hình) thì nó sẽ ở ngoài màn chơi. Công thức là:
$$
y > {canvas.height  \over scaleY} + nominalBounds.height * 0.5
$$

Ta viết hàm checkOffscreen() như sau.
```
lib.Fruit.prototype.checkOffscreen = function()
{
    if (!this.offscreen && this.y > this.stage.canvas.height / stage.scaleY + this.nominalBounds.height * 0.5) {
        this.offscreen = true;
        this.spawn();
    }
}
```

Tiếp theo là kiểm tra khi chuột va chạm với fruit. Để kiểm tra vị trí của chuột với đối tượng trên màn, ta sử dụng hàm globalToLocal() để kiểm tra. Khi chuột va chạm với fruit thì làm xuất hiện 'explosion', khiến 2 nửa của fruit rơi ra theo 2 hướng khác nhau. Ta làm như sau.
```
lib.Fruit.prototype.checkCollision = function(explosionLinkage) {
    var point = this.globalToLocal(this.stage.mouseX, this.stage.mouseY);
			
    if (!this.hit && this.stage.mouseInBounds && this.hitTest(point.x, point.y)) {		
        var explosion = new lib[explosionLinkage]();
        explosion.x = this.x;
        explosion.y = this.y;
        container.addChild(explosion);
		
        this.hit = true;
        this.rotationSpeed = 0;
		
        this.half0.vX += root.randomRange(-10, -30);
        this.half0.forceX = root.randomRange(40, 60);
        this.half0.frictionX = 0.85;
        this.half0.rotationSpeed = root.randomRange(-15, 15);
		
        this.half1.vX += root.randomRange(10, 30);
        this.half1.forceX = root.randomRange(40, 60);
        this.half1.frictionX = 0.85;
        this.half1.rotationSpeed = root.randomRange(-15, 15);
	}
};
```

Cuối cùng, ta gọi tất cả những điều kiện này trong onEnterFrame để được check liên tục khi chơi.
```
root.onEnterFrame = function(e) {
    for (var i = 0, total = fruits.length; i < total; i++) {
        var fruit = fruits[i];		
        fruit.anim();		
        fruit.checkCollision("Explosion");		
        fruit.checkOffscreen();		
    }
}
```

Vậy là xong rồi đấy, nhấn Ctrl+Enter và bắt đầu thưởng thức việc chém hoa quả bằng "chuột" thôi nào. Các bạn có thể thêm UI và score để màn chơi thêm sinh động nhé!

***Bonus làm hiệu ứng di chuột a.k.a slash*** 

Game chém hoa quả có một tính năng rất hay đó là những đường chém được vẽ trông rất đẹp mắt. Vat rất may mắn, CreateJS hỗ trợ chúng ta với công cụ Particle để tạo các hiệu ứng khi chuyển động.
https://www.createjs.com/demos/easeljs/sparkles

Chúng ta hãy thêm nó vào game của mình nào. Hãy bắt đầu với việc để lại những bong bóng nhỏ trên đường đi của chuột như này nhé.

![](https://i.imgur.com/80n21bR.png)

Trước tiên, chúng ta khai báo particle ở trong init(). Viết ở ngay dưới hàm createFruit().

```
var particles = [];

root.init = function() {
    ...
    // create Particle
    root.totalParticles = 20;
    root.createParticle();
}

```

Và tạo luôn hàm lerp() để các chuyển động của chúng ta mượt mà hơn.
```
root.lerp = function(start, end, ratio) {
    return (1 - ratio) * start + ratio * end;
}
```

Giờ là lúc ta khai báo đối tượng Particle. Particle mà mình sẽ làm là một hình tròn (Circle), có màu và độ lớn thu nhỏ dần. Bắt đầu thôi.
```
function Particle(color, radius, index, scaleRatio) {
    createjs.Shape.call(this, new createjs.Graphics().beginFill(color).drawCircle(0, 0, radius));
    this.ratio = index + 1;
    this.alpha = 1 / this.ratio;
    this.scaleX = this.scaleY = 1 / this.ratio * scaleRatio;
}

Particle.prototype = Object.create(createjs.Shape.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.move = function() {
    this.x = root.lerp(this.x, stage.mouseX / stage.scaleX, 1 / this.ratio);
    this.y = root.lerp(this.y, stage.mouseY / stage.scaleY, 1 / this.ratio);
    this.alpha -= 0.1;
}

Particle.prototype.reset = function() {
    for (var i = particles.length - 1; i >= 0; i--)
        particles[i].alpha = 1;
}
```

Tiếp theo, viết hàm createParticle().
```
root.createParticles = function()
{
    for (var i = 0; i < root.totalParticles; i++) {
        var particle = new Particle("#fff", 8, i, 0.75);
        root.addChild(particle);
        particles[i] = particle;
    }
};
```

Tiếp theo thêm particle vào tại onEnterFrame().
```
root.onEnterFrame = function(e) {
    ...
    for (i = 0, total = particles.length; i < total; i++)
        particles[i].move();
}
```

Giờ tại hàm init(), ta khai báo sự kiện di chuột trên stage.
```
root.init = function() {
    ...
    stage.on("stagemousemove", root.stageMouseMoveHandler);
}

root.stageMouseMoveHandler = function(e) {
    for (var i = particles.length - 1; i >= 0; i--)
        particles[i].reset();
}
```

Vậy là xong rồi đấy, nhấn Ctrl+Enter và thưởng thức thành quả thôi nào!
