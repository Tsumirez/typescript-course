let kickass = {
    name: 'Zef',
    age: 39,
    hobbies: ['programming','League of Legends','Mentalism']
}

let fav_anime: string[]; //this means that anime type is an array containing only strings. 
fav_anime = ['Slayers','Psycho Pass','Saber Marionette J']; //trap here! adding values like this is fine and dandy.
// but if you try via fav_anime.push(), TS will let it through but js will have runtime error! In js it's not an array until 
// you initialized it as such, and typescript array type declaration in line 7 does not count as such. For JS you just tried 
// to use an array method on named, but not initialized variable, therefore making it confused and throwing error.


for (let anime of fav_anime) {
    console.log(anime.toUpperCase()); //typescript recognizes that each entry from array fav_anime is a string and has no 
    //issues with using string methods on it
}