// fetch('https://codeup-json-server.glitch.me/movies')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         // data.forEach(post => {
//         //     $('#div').append(
//         //         '<p>${post.title}</p>' +
//         //         '<button>delete me</button>')
//         // })
//     })
// // $('button').click($(this) => console.log($(this).siblings))
//
// function editMovies(e) {
//     var textSearch = nameSelection.value.toLowerCase();
//     var selectedTitle = ratingSelection.value;
//     var filteredMovies = [];
//     console.log(textSearch);
//     movies.forEach(function(movie) {
//         if (movie.rating === selectedTitle) {
//             filteredMovies.push(movie);
//         } else if (selectedTitle === "any") {
//             filteredMovies.push(movie);
//         }
//     });
//     movieToPage(filteredMovies);
// }

const url = 'https://slow-stone-failing.glitch.me/movies'
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(post => {
//             if(typeof(post.title) == 'string'){
//                 console.log(post.title);
//
//                 // function hasTitle(){
//                 //     if(post.title !== 'undefined'){
//                 $('#movies').append(
//                     `<h1>${post.title}</h1>` +
//                     `<h4>Rating:  ${post.rating}</h4>` +
//                     `<img src="${post.poster}" style="height:300px; width:200px;">` +
//                     `<button id="delete">delete movie</button>`
//                 )
//             }
//             //     }
//             // }
//             // return hasTitle()
//         })
// $(`#edit`).click((e) => {
// fetch(url,{
//     method: 'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify(
//     //     {
//     //     title: "",
//     //     director: "",
//     //     rating: 0,
//     //     genre: "",
//     //     id: 0
//     // }
//     )
// }).then(response=>{
//     return response.json()
//     console.log(response.json());
// }).then(data=> {
//     console.log(data)
//     // var titleEntered = editMovie.title
//     data.forEach(post => {
//         // if (typeof (titleEntered) == data[i].title) {
//             console.log(post.title);
//
//             // function hasTitle(){
//             //     if(post.title !== 'undefined'){
//             $('#movies').append(
//                 `<h1>${post.title}</h1>` +
//                 `<h4>Rating:  ${post.rating}</h4>` +
//                 `<img src="${post.poster}" style="height:300px; width:200px;">` +
//                 `<button id="delete">delete movie</button>`
//             )
//         // }
// // this is the data we get after putting our data,
//     });
// })
// })


const changeForm = document.querySelector("#changeForm");
if (changeForm){
    changeForm.addEventListener("submit", function(e){
        submitForm(e, this)
    })
}
async function submitForm(e, form){
    e.preventDefault();
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false,2000);
    const jsonFormData = buildJsonFormData(form);
    const headers = buildHeaders();
    const respone = await fetchService.performPostHttpRequest('https://slow-stone-failing.glitch.me/movies', headers, jsonFormData);
    console.log(response)
    if (response)
        window.location = `?success.html?title-${response.title}&genre-${response.genre}&rating-${response.rating}&director-${response.director}&plot-${response.plot}`;
    else
        console.log('an error occured')
}
function buildJsonFormData(form){
    const jsonFormData = {};
    for (const pair of new FormData(form)){
        jsonFormData[pair[0]] = pair[1];
    }
    return jsonFormData;
}
async function performPostHttpRequest(fetchLink, headers, body) {
    if (!fetchLink || !headers || !body){
        throw new Error("one or more post request")
    }
    try{
        const rawResponse = await fetch(fetchLink, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });
        const content = await rawResponse.json();
        return content;
    }
    catch(err){
        console.error(`error at fetch post`);
        throw err;
    }
}
