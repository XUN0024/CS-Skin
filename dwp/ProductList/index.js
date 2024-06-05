const data = [{
    itemName:'Headshot',
    itemSrc: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJK6d2yq5ODmOPLO7TdmVRd4cJ5nqfF8dWi0FfjrRFlYGyhI9DEJAc8Z13TrALswey508S-v8_JmyAw73Uk-z-DyPm3Zsr8',
    itemAlt: '',
    itemPrice:100,
    itemFloat:0.41,
},{
    itemName:'BloodSport',
    itemSrc: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_2LyV89Wt0QewqBE6Z2-lcY6UJlRrMF7SqQTvyO7shsK5v5idn3Rn6D5iuyjFoprsug',
    itemAlt: '',
    itemPrice:100,
    itemFloat:0.71,
},{
    itemName:'Headshot',
    itemSrc: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f6pIl2-yYp9SnjA23-BBuNW-iLI-XJgFsZQyG_VW2lOq918e8uszLn2wj5HeAvkVdtQ',
    itemAlt: '',
    itemPrice:100,
    itemFloat:0.31,
},{
    itemName:'Headshot',
    itemSrc: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPL5NqnQmm9u5cRjiOXE_JbwjGu4ohQ0J3f7ItKdI1U3NFGFrAXrxLzrh8e6usibnCAx73FxtivYyhey104Zaedum7XAHh4AoVRq',
    itemAlt: '',
    itemPrice:100,
    itemFloat:0.81,
},{
    itemName:'Headshot',
    itemSrc: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJK6d2yq5ODmOPLO7TdmVRd4cJ5nqfF8dWi0FfjrRFlYGyhI9DEJAc8Z13TrALswey508S-v8_JmyAw73Uk-z-DyPm3Zsr8',
    itemAlt: '',
    itemPrice:100,
    itemFloat:0.95,
},{
    itemName:'Headshot',
    itemSrc: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJK6d2yq5ODmOPLO7TdmVRd4cJ5nqfF8dWi0FfjrRFlYGyhI9DEJAc8Z13TrALswey508S-v8_JmyAw73Uk-z-DyPm3Zsr8',
    itemAlt: '',
    itemPrice:100,
    itemFloat:0.61,
},{
    itemName:'Headshot',
    itemSrc: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJK6d2yq5ODmOPLO7TdmVRd4cJ5nqfF8dWi0FfjrRFlYGyhI9DEJAc8Z13TrALswey508S-v8_JmyAw73Uk-z-DyPm3Zsr8',
    itemAlt: '',
    itemPrice:100,
    itemFloat:0.01,
},
]

const gridContainer = document.querySelector(".grid-container")
let htmlString = ''
let float
for (let i = 0; i < data.length; i++) {
    if(data[i].itemFloat <= 0.9) float = 'BS'
    if(data[i].itemFloat <= 0.7) float = 'WW'
    if(data[i].itemFloat <= 0.5) float = 'FT'
    if(data[i].itemFloat <= 0.3) float = 'MW'
    if(data[i].itemFloat <= 0.1) float = 'FN'
    htmlString += `<div class="grid-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <figure class="weapon"><img src=${data[i].itemSrc} alt=${data[i].itemAlt}></figure>
                        <figcaption>${data[i].itemAlt} ${data[i].itemName} <br/>exterior:${float}<br/><p>RM${data[i].itemPrice}</p></figcaption><button class="addCartBttn"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>`
}

gridContainer.innerHTML = htmlString

