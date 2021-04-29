let kickass: {
    name: string;
    age: number;
    hobbies: string[],
    role: [number, string] //tuple property definition. Necessary as TS does not infer tuples, mistaking them for normal arrays.
} = {
    name: 'Zef',
    age: 39,
    hobbies: ['programming','League of Legends','Mentalism'],
    //here we initialize our tuple.
    //Tuple is a fixed sized array, that may contain elements of different types, but in a predefined order.
    //Here first element must be a number, second a string and the number of elements must be two.
    //without tuple definition in line 5, all of that would not be enforced and TS would see an array of numbers or strings,
    //where both values being just numbers, or number of elements being different than two would be allowed.
    role: [1, 'precursor']
}

let fav_anime: string[]; //this means that anime type is an array containing only strings. 
fav_anime = ['Slayers','Psycho Pass','Saber Marionette J']; 


for (let anime of fav_anime) {
    console.log(anime.toUpperCase());
}