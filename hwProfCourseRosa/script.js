fetch('https://jsonplaceholder.typicode.com/posts (https://jsonplaceholder.typicode.com/posts)')
        .then(response => response.json())
        .then(data => {
            const posts = document.getElementById('posts');
            data.forEach(post => {
                const li = document.createElement('li');
                li.innerHTML = <h3>${post.title}</h3>                    
                 <p>${post.body}</p>:
                posts.appendChild(li);
            });
        });
