const users = [];

const addUser = ({ id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);
}

const removeUser = () => {

}

const getUser = () => {

}
const getUsersInRoom = () => {

}
