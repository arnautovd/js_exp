

const {addWord} = require('./newmod');

const func = () => {
    let myBlockOfWords = 'hello world'.split(' ');
    if (myBlockOfWords.length > 1) {
        return myBlockOfWords.map(word => word.length)
    }
    return null;
}

console.log(func());

const admins = [
    {
        name: 'Dima',
        age: 29,
        job: 'sysadmin',
        skills: ['python', 'js', 'ansible']
    },
    {
        name: 'Stas',
        age: 30,
        job: 'coder',
        skills: ['C++', 'C#', 'asterisk']
    },
    {
        name: 'Mike',
        age: 22,
        job: 'coder',
        skills: ['C++', 'C#', 'asterisk']
    },

]

const new_list = admins.map(admin => admin.job.replace('sysadmin', 'coder'))
for (admin of admins) {
    for (l of new_list) {
        admin.job = l;
    }
}
console.log(admins);

console.log(addWord('word again'));


console.log(Math.tanh(120));