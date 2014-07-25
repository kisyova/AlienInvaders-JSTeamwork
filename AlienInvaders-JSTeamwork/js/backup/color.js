/**
 * Created by Bi0GaMe on 21.7.2014 г..
 */
//Start of Color class
Color = function(r, g, b, a){
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = 1;

    if(r != null) this.r = r;
    if(g != null) this.g = g;
    if(b != null) this.b = b;
    if(a != null) this.a = a;

    this.ToStandard = function(noAlpha){
        if(noAlpha == null || !noAlpha)
            return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
        else
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }
}; //End of Color class