/**
 * Created by Bi0GaMe on 21.7.2014 г..
 */
/*Start of local classes*/
Vector2 = function(x,y){
    this.x = 0;
    this.y = 0;

    if(x!= 0 && y == 0) {
        this.x = x;
        this.y = y;
    }
    else{

        if(x != null) this.x = x;
        if(y != null) this.y = y;
    }


    this.previousX = 0;
    this.previousY = 0;

    this.Set = function(x,y){
        if(x == null && y == null) console.log("No x or y has been passed to Vector2's set function");



        else{

            this.previousX = this.x;
            this.previousY = this.y;
            if(x!=null && y == null){
                this.x = x;
                this.y = y;
            }else{
                if(x!= null) this.x = x;
                if(y!= null) this.y = y;
            }
        }
    };

    this.Move = function(vec2){
        this.x += vec2.x;
        this.y += vec2.y;
    };

    this.Normalize = function(){
        var tmp = new Vector2(this.x, this.y);

        var mag = Math.sqrt(tmp.x*tmp.x + tmp.y*tmp.y);

        tmp.x = tmp.x/mag;
        tmp.y = tmp.y/mag;

        return tmp;
    };

    this.Distance = function(vec2){
        if(vec2 != null)
            return Math.sqrt(Math.pow(vec2.x-this.x,2)+ Math.pow(this.y - vec2.y,2));
        else
            return Math.sqrt(Math.pow(this.previousX-this.x,2)+ Math.pow(this.previousY - this.y,2));
    };

    this.HasChanged = function(){
        if(this.x != this.previousX || this.x != this.previousY) return true;
        else return false;
    };

    this.Difference = function(vec2, invert){
        var inv = 1;

        if(invert) inv = -1;

        if(vec2 == null)
            return new Vector2((this.x-this.previousX)*inv, (this.y- this.previousY)*inv);
        else
            return new Vector2((this.x-vec2.x)*inv, (this.y-vec2.y)*inv);
    };

};  //End of Vector2 class