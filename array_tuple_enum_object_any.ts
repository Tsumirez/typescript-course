enum Role {ADMIN=1,USER=100,REVIEWER='recenzent'}

let kickass = {
    name: 'Zef',
    age: 39,
    hobbies: ['programming','League of Legends','Mentalism'],
    role: Role.REVIEWER
}

//any type is just what it says - allowance to use any type or comination of.
//in short TS will let anything slide and not bother. Obviously this is contradictory
//to the purpose of TS - which is enforcing types and stricter control.
//use this type only when you just can't know what will be stored in given variable/property, yet 
//you need it to function. It's a "back off pal, I got this" command to TS.
let challenge: any;
challenge = ['wash dishes', 'exercise', 'groceries', {languages: ['hindi']}];

let fav_anime: string[];
fav_anime = ['Slayers','Psycho Pass','Saber Marionette J']; 


for (let anime of fav_anime) {
    console.log(anime.toUpperCase());
}

console.log(Role);