//here we have our first ts custom type - enum
//it allows to define key=>value pairs that can be used in reverse.
//by default values you pass are given numeric keys starting from 0.
//so Role[0] equals 'ADMIN', while Role.ADMIN will return 0.
//this can however be totally overriten with different key values, no necessairly numbers at all!
//that being said, non-numeric values will not allow for the reverse value=>key assignement.
//Role.REVIEWER will return 'recenzent', but ROLE.recenzent will return undefined.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 100] = "USER";
    Role["REVIEWER"] = "recenzent";
})(Role || (Role = {}));
var kickass = {
    name: 'Zef',
    age: 39,
    hobbies: ['programming', 'League of Legends', 'Mentalism'],
    role: Role.REVIEWER
};
var fav_anime; //this means that anime type is an array containing only strings. 
fav_anime = ['Slayers', 'Psycho Pass', 'Saber Marionette J'];
for (var _i = 0, fav_anime_1 = fav_anime; _i < fav_anime_1.length; _i++) {
    var anime = fav_anime_1[_i];
    console.log(anime.toUpperCase());
}
console.log(Role);
