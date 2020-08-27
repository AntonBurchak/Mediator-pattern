class Server {
    static data = this.getData();
    
    static getData() {
        return [
            {
                name: "Author 1",
                id: '1',
                posts: [
                    {
                        id: '1-1',
                        image: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=1-1.com',
                        title: "Post 1-1",
                        body: "Post 1 description"
                    },
                    {   
                        id: '1-2',
                        image: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com',
                        title: "Post 1-2",
                        body: "Post 2 description"
                    },
                    {
                        id: '1-3',
                        image: 'https://via.placeholder.com/150',
                        title: "Post 1-3",
                        body: "Post 3 description"
                    }
                ]
            },
            {
                name: "Author 2",
                id: '2',
                posts: [
                    {
                        id: '2-1',
                        image: 'https://via.placeholder.com/150',
                        title: "Post 2-1",
                        body: "Post 1 description"
                    },
                    {
                        id: '2-2',
                        image: 'https://via.placeholder.com/150',
                        title: "Post 2-2",
                        body: "Post 2 description"
                    },
                    {
                        id: '2-3',
                        image: 'https://via.placeholder.com/150',
                        title: "Post 2-3",
                        body: "Post 3 description"
                    }
                ]
            }
        ]
    }
}

