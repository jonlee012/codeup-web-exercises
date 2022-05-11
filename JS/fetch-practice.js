fetch('https://codeup-json-server.glitch.me/movies')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // data.forEach(post => {
        //     $('#div').append(
        //         '<p>${post.title}</p>' +
        //         '<button>delete me</button>')
        // })
    })
// $('button').click($(this) => console.log($(this).siblings))