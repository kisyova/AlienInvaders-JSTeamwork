/**
 * Created by Bi0GaMe on 21.7.2014 г..
 */
var canvas          = document.getElementById("canvas");
var ctx             = canvas.getContext('2d');
canvas.style.width  = canvas.width + "px";
canvas.style.height = canvas.height + "px";
input.offset = new Vector2(GetLeft(canvas), GetTop(canvas));

var player = new Player();

var rect = new Rectangle(0,0,200,200);
rect.color = new Color(255,0,0,1);

var floor = new Rectangle(0,400,450,20);
var inter = new Rectangle(0,400,200,20);

floor.color = new Color(255,255,0,1);
inter.color = new Color(0,0,255,1);

var Update = setInterval(function(){
    player.Update();
    rect.y += 3;
    var old = new Vector2(player.rect.x, player.rect);
    if(player.rect.Intersects(inter)){
        player.rect.y -= 2;
    }

},8);

var Draw = setInterval(function Draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    inter.Draw(ctx);
    floor.Draw(ctx);
    rect.Draw(ctx);
    player.Draw(ctx);
},33);