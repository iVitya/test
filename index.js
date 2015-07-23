/**
 * Created by Витя on 23.07.2015.
 */
function randomRange(min,max) {
    return Math.floor(random()*(max-min)+min);
}
for (var i=0; i<10; i++){
    console.log(randomRange(1,20));
}
