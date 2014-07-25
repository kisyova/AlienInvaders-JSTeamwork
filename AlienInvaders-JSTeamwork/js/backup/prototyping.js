/**
 * Created by Bi0GaMe on 21.7.2014 г..
 */
/*Start of prototyping*/
Array.prototype.Remove = function(arg, all){
    for(var i = 0; i < this.length; i++){
        if(this[i] == arg){
            this.splice(i,1);

            if(all==null||!all)
                break;
            else
                i--;
        }
    }
}; //End of Remove function

Array.prototype.RemoveAt = function(position){
    this.splice(position,1);
}; //End of RemoveAt function

Array.prototype.Clear = function(){
    this.length = 0;
}; //End of Clear function

Array.prototype.InsertAt = function(arg, position){
    this.splice(position, 0, arg);
}; //End of InsertAt function

Array.prototype.Contains = function(arg){
    for(var i = 0; i < this.length; i++)
        if(this[i] == arg)
            return true;
    return false;
}; //End of Contains function

Array.prototype.Occurs = function(arg){
    var counter = 0;

    for(var i = 0; i< this.length; i++){
        if(this[i] == arg)
            counter++;
    }

    return counter;
}; //End of Occurs function

Array.prototype.SortArray = function(){
    var sorted = [];

    for (var i = 0; i < this.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < this.length; j++) {
            if (this[j] < this[min]) {
                min = j;
            }
        }

        if (min != i) {
            var temp = 0;
            temp = this[i];
            this[i] = this[min];
            this[min] = temp;
        }
    }
};//End of SortArray function


/*End of prototyping*/