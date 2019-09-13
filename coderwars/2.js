// // 140 likes
// 喜欢的人[] "no one likes this"
// ["peter"]  "peter likes this"
// ["Jacob","Alex"]  "Jacob and Alex likes this"
// ["Max","John","Mark"]  "Max and John and Mark likes this"
// ["Alex","John","Mark","Max"]  "Alex and John and 2 others likes this"

//顺序思维  数学思维
// const likes = names => {
//     switch(names.length) {
//         case 0:
//             return 'no one likes this'
//         case 1:
//             return names[0] + ' likes this'
//         case 2:
//             return names[0] + 'and' + names[1] + ' likes this'
//         case 3:
//             return names[0] + 'and' + names[1] +  'and' + names[2] +' likes this'
//         case 4:
//             return names[0] + 'and' + names[1] +  'and' + '2' + 'others' + ' likes this'
//     }
// }
// console.log(likes(['杨书文','涂海霞', 'zz', 'll']));
//4种可能 likes 的模式
// phone number 1 种模式的匹配 name  names[i]
const likes = names => {
    const templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} likes this',
        '{name} and {name} and {name} likes this',
        '{name} and {name} and {n} others likes this',
    ];
    let idx = Math.min(names.lenght, 4);//哪一个模式
    return templates[idx].replace(/{name}|{n}/g,
        function(val) {
        // console.log(val);
        return val === '{name}' ? names.shift() : names.lenght;
    });
};