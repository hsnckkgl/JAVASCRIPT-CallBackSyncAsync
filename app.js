let posts = [{
        "title": "title 1",
        "body": "body 1"
    },
    {
        "title": "title 2",
        "body": "body 2"
    }
]

function addPost(callback /*callback function*/ ) {

    setTimeout(function () {
        posts.push({
            "title": "title 3",
            "body": "body 3"
        })
        callback(); // callback function
    }, 3000);
}

function getAllPosts() {
    setTimeout(function () {
        let output = "<ul>";
        posts.forEach(function (post) {
            output += `<li>${post.title} - ${post.body}</li>`;

        })
        output += "</ul>";
        document.getElementById('output').innerHTML = output;
    }, 2000);
}
addPost(getAllPosts); // to make it sync and it will run after 5 sec.