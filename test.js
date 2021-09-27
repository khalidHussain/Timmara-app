let array = [
    {
        name: 'abc',
        class: 1
    },
    {
        name: 'def',
        class: 2
    },
    {
        name: 'abd',
        class: 2
    },
    {
        name: 'deg',
        class: 3
    },
    {
        name: 'abf',
        class: 1
    }
]

function test(startsWith, classToFind) {
    return array.find(item => item.name.startsWith(startsWith) && item.class === classToFind)
}
 
console.log(test('a', 2));