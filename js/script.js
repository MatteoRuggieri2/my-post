// seleziono il bottone
const newPostButton = document.querySelector('.btn-create');
console.log(newPostButton)

// seleziono il post
const post = document.querySelector('.post');
console.log(post)

// seleziono dove mettere il post (container)
const postContainer = document.getElementById('post-container');
console.log(postContainer)

newPostButton.addEventListener('click', createNewPost)

// Devo creare una funzione che al click del bottone, mi crea un nuovo post
function createNewPost () {

    newPost = `
    <div class="post">

        <!-- User Info -->
        <div class="post-user">

            <!-- User Avatar -->
            <div class="user-avatar">
                <img src="img/user-img.jpg" alt="User avatar">
            </div>

            <!-- User Name -->
            <div class="user-name">
                Matteo
            </div>
        </div>

        <!-- Post Text -->
        <div class="post-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis eveniet possimus pariatur natus dolores ipsam adipisci aut temporibus harum, nulla consequatur id odit deleniti facilis velit suscipit, tempore totam!</p>
        </div>

        <!-- Post Img -->
        <div class="post-img">
            <img src="img/lago.jpg" alt="Lago">
        </div>
    </div>
    `




    postContainer.innerHTML += newPost;
}