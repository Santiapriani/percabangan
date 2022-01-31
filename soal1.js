const myUsers = [
    { name: 'starfish', likes: 'ocean' },
    { name: 'dolphin', likes: 'ocean' },
    { name: 'jellyfish', likes: 'ocean' },
]

const userByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 3;

    return container;
})

console.log(userByLikes)