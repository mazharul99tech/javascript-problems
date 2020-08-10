var marks = [24, 45, 75, 99, 98, 87, 33];
var max = marks[0];
for (var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Biggest number is: ", max);