/**
 * Created by Витя on 23.07.2015.
 */
function randomRange {
    min= min  || 1;
    max=  max || 1;

    return Math.floor(random()*(max-min)+min);
}
console.log(randomRange(1,20);