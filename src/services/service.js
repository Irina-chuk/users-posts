class Service {
    getResource = async(url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        return await res.json();
    }

    getAllUsers = async() => {
        return await this.getResource("https://jsonplaceholder.typicode.com/users");
    }

    getUser = async(id) => {
        return  await this.getResource(`https://jsonplaceholder.typicode.com/users/${id}`);
          
    }
    
    getAllPosts = async(userId) => {
        return await this.getResource(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    }

    getPost = (id) => {
        return this.getResource(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    getComments = (id) => {
        return this.getResource(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    }

}

export default Service;