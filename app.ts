//here we have our first ts custom type - enum
//it allows to define key=>value pairs that can be used in reverse.
//by default values you pass are given numeric keys starting from 0.
//so Role[0] equals 'ADMIN', while Role.ADMIN will return 0.
//this can however be totally overriten with different key values, no necessairly numbers at all!
//that being said, non-numeric values will not allow for the reverse value=>key assignement.
//Role.REVIEWER will return 'recenzent', but ROLE.recenzent will return undefined.
enum Role {ADMIN=1,USER=100,REVIEWER='recenzent'}

let kickass = {
    name: 'Zef',
    age: 39,
    hobbies: ['programming','League of Legends','Mentalism'],
    role: Role.REVIEWER
}

let fav_anime: string[]; //this means that anime type is an array containing only strings. 
fav_anime = ['Slayers','Psycho Pass','Saber Marionette J']; 


for (let anime of fav_anime) {
    console.log(anime.toUpperCase());
}

console.log(Role);