fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(post => {
            $('div').append(
                '<p>${post.title}</p>' +
                '<button>delete me</button>')
        })
    })
// $('button').click($(this) => console.log($(this).siblings))