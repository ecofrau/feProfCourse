async function getUserList(userIds) {
    try {
        const response = await Promise.all(
            userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
        );
        
        const userData = await Promise.all(
            response.map(res => res.json())
        );
        
        const userList = document.createElement('ul');
        userData.forEach((user, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = (`${index + 1}.  ${user.name}  ${user.email}`);
            userList.appendChild(listItem);
        });
        
        document.body.appendChild(userList);
    } catch (error) {
        console.error('Error while fetching user data:', error);
    }
}

// Beispeil der Funtion getUserList
const userIds = [8, 7, 9]; // z.B. für mich
getUserList(userIds);

