class Parser {
    static currentPost = null;
    
    static parseHeaderAuthors() {
        const nav = document.querySelector('.main__header-list');
        const items = Server.data;
        console.log(items)
        const goParse = (items) => {
            let navigation = ``;
            items.forEach((author, index) => {
                navigation += `<a href="#" class="main__header-list__link btn ${index < 1 ? 'active' : ''}" data-id="${author.id}">${author.name}</a>`
            });
            return navigation;
        }

        nav.innerHTML = goParse(items);
    }

    static parseAsideNav() {
        const nav = document.querySelector('.main__aside-list');
        const items = Server.data;

        const goParse = (items) => {
            let navigation = ``;
            items.forEach((author, index) => {
                navigation += `
                <div class="main__aside-list__item btn ${index < 1 ? 'active' : ''}" data-id="${author.id}">
                    <a href="#" data-id="${author.id}" class="btn ${index < 1 ? 'active' : ''}">${author.name}</a>
                    <nav>
                        ${author.posts.map(post => `<a href="#" data-id="${post.id}" class="cng">${post.title}</a>`)}
                    </nav>
                </div>`
            });
            return navigation;
        }

        nav.innerHTML = goParse(items);
    }

    static parseHeaderNav(id) {
        const nav = document.querySelector('.main__header-posts');
        let item;
        if(id.indexOf('-') == -1) {
            item = Server.data.find(item => item.id === id);
        } else {
            item = Server.data.find(item => item.id === id.slice(0, id.indexOf('-')));
        }
        console.log(item)

        const goParse = (posts) => {
            let navigation = ``;
            posts.forEach(post => {
                navigation += `<a href="#" class="main__header-posts__link cng" data-id="${post.id}">${post.title}</a>`
            }); 
            return navigation;
        }

        nav.innerHTML = goParse(item.posts);
    }

    static setDefaults() {
        Mediator.publish('postchange', '1-1');
        clearAllActiveStates('cng');
        setActiveState('1-1');
    }
}
Parser.parseHeaderNav('1')
Parser.parseHeaderAuthors()
Parser.parseAsideNav();

