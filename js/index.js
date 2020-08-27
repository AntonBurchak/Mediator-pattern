
Mediator.subscribe('postchange', parsePost)
Mediator.subscribe('activechange', Parser.parseHeaderNav)
// Mediator.subscribe('postchange', onPostChange);



const parent = document.querySelector('.main__inner');

parent.addEventListener('click', (e) => {
    e.preventDefault();
    const {classList} = e.target;

    if(classList.contains('cng')) {

        Mediator.publish('postchange', e.target.getAttribute('data-id'));
        clearAllActiveStates('cng');
        setActiveState(e.target.getAttribute('data-id'));
        


    } else if(classList.contains('btn')) {

        Mediator.publish('activechange', e.target.getAttribute('data-id'));
        clearAllActiveStates('btn');
        setActiveState(e.target.getAttribute('data-id'))
        setActiveState(Server.currentPost);
    }
})

function parsePost(id) { // 1-1, 1-2, 2-1 etc...
    const area = document.querySelector('.main__textarea');
    const author = Server.data.find(item => item.id === id.slice(0, id.indexOf('-')));
    const post = author.posts.find(post => post.id === id)
    
    area.innerHTML = `
        <img src="${post.image}">
        <h2>${post.title}</h2>
        <p>${post.body}</p>`

        setActiveState(id);

    Server.currentPost = id;
}

function clearAllActiveStates(type) {
    let elements;
    
    if(type === 'btn') {
        elements = document.querySelectorAll('.btn');
        
    } else {
        elements = document.querySelectorAll('.cng');
    }

    elements.forEach(el => {
        if(el.classList.contains('active')) {
            el.classList.remove('active')
        }
    })
}

function setActiveState(id) {
    const current = document.querySelectorAll(`[data-id="${id}"]`);
    current.forEach(item => item.classList.add('active'));
}

Parser.setDefaults();
