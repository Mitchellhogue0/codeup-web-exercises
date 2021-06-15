const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// let usersWithLanguages = users.filter(function (user){
//     return user.languages.length >= 3;
// });

// >>>>>>>>>>>>>>OR<<<<<<<<<<<<<<<<<<<<<

let usersWithLanguages = users.filter(user => user.languages.length >= 3);

console.log(usersWithLanguages);

let emails = users.map(user => user.email);

console.log(emails);


let averageYrs = users.reduce((accumulator, currentVal) => {
    return accumulator + currentVal.yearsOfExperience;
}, 0) / users.length;

console.log(averageYrs);


let longestEmail = emails.reduce((accumulator, currentVal) => {
    return accumulator.length > currentVal.length
        ? accumulator
        : currentVal;
}, "");

console.log(longestEmail);

let nameString = users.reduce((accumulator, currentVal, index) => {
    if(index === users.length -1){
        return accumulator + currentVal.name + ".";
    }
    return accumulator + currentVal.name + ", ";
}, "Your instructors are: ");

console.log(nameString);

// let uniqueLanguages = users.filter(user => user.languages === 1)

let uniqueLanguages = users.reduce((acc, user) => {
   let uniqueLang = user.languages.filter((lang) => {
       if (!acc.includes(lang)){
           return lang;
       }
    })
    acc.push(...uniqueLang);
   return acc;
}, [])

console.log(uniqueLanguages)