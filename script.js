/* Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.*/

let container = document.querySelector(".post");
let card;
let posts = [
    {
        thumb: 'image=924',
        author: 'Aldo Baglio',
        date: 4,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'image=924',
        likes: 10,
    }
]
console.log(posts);
for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    
let card = `<div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?${element.thumb}" alt="${element.author}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author}</div>
                        <div class="post-meta__time">${element.date} mesi fa</div>
                    </div>                    
                </div>
            </div> 
            <div class="post__text">${element.text}</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?${element.thumb}" alt="">
            </div>
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>`;  
container.innerHTML += card;
// console.log(card);
}

let button = document.querySelectorAll('.js-like-button');
let likes = document.querySelector('.js-likes-counter');

for (let index = 0; index < button.length; index++){
    button[index].addEventListener('click', function(){
        button[index].classList.toggle("like-button--liked");
        if(button[index].classList.contains('like-button--liked'))
        {
        likes.innerHTML = posts[index].likes += 1;
        } else 
        {
            likes.innerHTML = posts[index].likes -= 1;
        }
    })
}


