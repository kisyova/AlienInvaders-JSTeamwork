/**
 * Created by Bi0GaMe on 21.7.2014 г..
 */
var canvas          = document.getElementById("canvas");
var ctx             = canvas.getContext('2d');
canvas.style.width  = canvas.width + "px";
canvas.style.height = canvas.height + "px";
input.offset = new Vector2(GetLeft(canvas), GetTop(canvas));

var player = new Player();

var floor = new Rectangle(0,400,400,20);
floor.color = new Color(0,0,0,1);
var enemies =[];
enemies.push(new Rectangle(0,200, 50,150));

var enemyBullet = new Rectangle(10,10,5,5);
enemyBullet.color = new Color(255,0,255,1);


function GenerateRect(){
    var temp = new Rectangle(Math.random()*400, Math.random()*400, 20, 20);
    temp.color = new Color(0,0,0,1);
    enemies.push(temp);
}

function ShowLog(){
    for (var j = 0; j < enemies.length; j++) {
        document.getElementById('log').value = player.rect.Intersects(enemies[j]);
    }
}

function ShowLog2(){
    document.getElementById('log2').value = player.jumpAvailable;
}

for(var i =0; i<enemies.length;i++){
    enemies[i].color = new Color(0,0,0,1);
}

var Update = setInterval(function(){
    ShowLog();
    ShowLog2();
    enemyBullet.y += 1.5;



    var old = new Vector2(player.rect.x,player.rect.y);
    player.Update();

    var collided = false;
    for (var j = 0; j < enemies.length; j++) {


        if (player.rect.Intersects(floor)||player.rect.Intersects(enemies[j])) {
            if(player.rect.Intersects(enemyBullet))
            { alert("KILLED");}
            player.rect.y = old.y;

            player.jumpAvailable = true;
            player.jumping = false;
            if (player.lookingRight)
                player.animation.SetRow(0);
            else
                player.animation.SetRow(2);
            collided = true;

            if (player.rect.Intersects(enemies[j])) {
                player.rect.x = old.x;
                player.jumpAvailable = false;
                if (!player.rect.Intersects(floor)) {
                    player.rect.y += 2;
                }
            }
        }
    }

    if(!collided)
    {
        player.jumpAvailable = false;
        if(player.lookingRight) {
            player.animation.SetRow(4);
            player.animation.SetLimit(1);
        }else{
            player.animation.SetRow(4);
            player.animation.SetColumn(1);
            player.animation.SetLimit(1);
        }
    }
},8);

var Draw = setInterval(function Draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i< enemies.length;i++){
        enemies[i].Draw(ctx);
    }
    floor.Draw(ctx);
    player.Draw(ctx);
    enemyBullet.Draw(ctx);

},33);