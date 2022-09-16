const plants = [
    {
      "id": 1,
      "name": "Boston Fern",
      "image": "https://github.com/MultiverseLearningProducts/swe-solutions/blob/main/swe2/mod1/shared/images/boston_fern_sm.jpg?raw=true",
      "description": "Nephrolepis exaltata, known as the sword fern or Boston fern, is a species of fern in the family Lomariopsidaceae native to tropical regions throughout the world.",
      "tag": "shade loving",
      "price": 13.95
    },
    {
      "id": 2,
      "name": "Maidenhair Fern",
      "image": "https://github.com/MultiverseLearningProducts/swe-solutions/blob/main/swe2/mod1/shared/images/maidenhair_fern_sm.jpg?raw=true",
      "description": "Adiantum, the maidenhair fern, is a genus of about 250 species of ferns in the subfamily Vittarioideae of the family Pteridaceae.",
      "tag": "Easy Care",
      "price": 13.95
    },
    {
      "id": 3,
      "name": "Tree Fern",
      "image": "https://github.com/MultiverseLearningProducts/swe-solutions/blob/main/swe2/mod1/shared/images/tree_fern_sm.jpg?raw=true",
      "description": "The tree ferns are the ferns that grow with a trunk elevating the fronds above ground level.",
      "tag": "Moisture Loving",
      "price": 14.95
    },
    {
      "id": 4,
      "name": "Korean rock fern",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/03/83/pl2000038309.jpg?width=940&height=940",
      "description": "A reliable fern with glossy, upright, darkly veined fronds and a delicate spine-pointed tip for shadier spots and underplanting. Polystichum tsussimense is evergreen, but old fronds can be cut back in early spring to reveal the newly emerging purple-tinged fronds that transition to green from neat basal rosettes. Weave it through a partially shaded border in naturalistic drifts and it will make a natural partner for hostas and hellebores. It also shows a good resistance to deer and rabbits.",
      "tag": "Hardy",
      "price": 13.95
    },
    {
      "id": 5,
      "name": "Korean rock fern",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/03/83/pl2000038309.jpg?width=940&height=940",
      "description": "A reliable fern with glossy, upright, darkly veined fronds and a delicate spine-pointed tip for shadier spots and underplanting. Polystichum tsussimense is evergreen, but old fronds can be cut back in early spring to reveal the newly emerging purple-tinged fronds that transition to green from neat basal rosettes. Weave it through a partially shaded border in naturalistic drifts and it will make a natural partner for hostas and hellebores. It also shows a good resistance to deer and rabbits.",
      "tag": "Hardy",
      "price": 13.95
    },
    {
      "id": 6,
      "name": "Maidenhair spleenwort",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/04/52/pl2000045263.jpg?width=940&height=940",
      "description": "A graceful, low-growing fern with slender, dark green fronds, which are held by shiny, near-black stems. A semi-evergreen plant, it will keep its fronds throughout the winter if the temperatures do not drop too low, thus providing year-round interest.",
      "tag": "Hardy",
      "price": 13.95
    },
    {
      "id": 7,
      "name": "Alpine wood fern",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/01/17/pl2000011779.jpg?width=940&height=940",
      "description": "A tough, hardy fern that is native to the Himalayas. In spring, Wallichs wood fern produces bright green, shuttlecock-like fronds on upright, hairy stems, up to 90cm high. Less fine in appearance than many other ferns, it nonetheless makes a dramatic statement in a woodland garden or under deciduous trees. Once established, it will even grow in dry shade. When the leaves die back, the space can be filled with early-flowering snowdrops.",
      "tag": "Shade Loving",
      "price": 13.95
    },
    {
      "id": 8,
      "name": "Giant chain fern",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/02/09/pl2000020983.jpg?width=940&height=940",
      "description": "Found colonising reliably moist spots from Mexico to southwestern Canada, this impressive evergreen fern offers height, drama and year-round interest with its large handsome, dark green foliage. Spectacular when planted beside a pond or allowed to form a sea of green in a woodland garden.",
      "tag": "Moisture Loving",
      "price": 13.95
    },
    {
      "id": 9,
      "name": "Soft shield fern",
      "image": "https://img.crocdn.co.uk/images/products2/pl/00/00/00/18/pl0000001846.jpg?width=940&height=940",
      "description": "One of the loveliest varieties of our native evergreen fern, this has filigree-fine fronds that form a lacy rosette. It is ideal at the front of a shady border, where its elegance can be appreciated, or in a woodland setting among contrasting ferns and foliage plants. Either cut back the old foliage in early January to allow space for spring bulbs, or leave the in place until April when the new fronds appear.",
      "tag": "Moisture Loving",
      "price": 13.95
    },
    {
      "id": 10,
      "name": "Japanese painted fern",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/03/83/pl2000038308.jpg?width=940&height=940",
      "description": "Slowly spreading to form a leafy clump, this decorative fern is ideal for livening up a partially shaded spot with reliably moist (but not waterlogged) soil. Its lacy fronds are initially quite green, but as they mature, they often develop a silvery grey colouring, with a contrasting burgundy-red flush to the stems and midribs. It makes a beautiful addition to a woodland or jungle-themed setting where it can be teamed with other shade-loving perennials including hostas and bergenias.",
      "tag": "Moisture Loving",
      "price": 15.95
    },
    {
      "id": 11,
      "name": "White-striped Cretan brake",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/03/83/pl2000038311.jpg?width=940&height=940",
      "description": "This pretty fern has slender, finger-like fronds, each of which has a ruffled trim and a cream and green variegation. Forming on a slowly spreading rhizome and topping slender stems, they create a rather lacy, ethereal effect. Often retaining some (if not all) of its fronds throughout the winter in milder regions, its happiest in a sheltered spot, but in colder regions, it can be grown in a pot and moved to an unheated greenhouse or conservatory when the temperatures start to drop.",
      "tag": "Shade Loving",
      "price": 15.95
    },
    {
      "id": 12,
      "name": "Prickly rasp fern",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/03/83/pl2000038313.jpg?width=940&height=940",
      "description": "A vibrant, clump-forming fern with glorious maroon, red fronds that mature to green later in the year. This Doodia is wintergreen, dying back only in the coldest of winters, where it will emerge once again in the spring given some protection. Rough Ruby has a beautiful shape making it great for patio pots and containers, where the rough saw-like fronds can provide early seasonal colour and texture to the garden.",
      "tag": "Shade Loving",
      "price": 15.95
    },
    {
      "id": 13,
      "name": "Harts tongue fern",
      "image": "https://img.crocdn.co.uk/images/products2/pl/20/00/01/17/pl2000011772.jpg?width=940&height=940",
      "description": "This lovely harts tongue fern is both eyecatching and versatile. Its lustrous, wavy-edged fronds unfurl in early spring, and remain throughout the year, and are shown off to best effect in a natural-looking context, alongside other ferns, or spring bulbs. Try it at the edge of a woodland area, under trees, or in a shady mixed border. Once established, it can tolerate dry soil.",
      "tag": "Hardy",
      "price": 15.95
    }
  ]

  function createPlantBox(singleEvent){
    // using node() as a shorter function to call document.createTextNode()
    let node = element => document.createTextNode(element)

    // Getting already existing main tag to append children later
    let content = document.getElementsByClassName('plant-group')[0]
    
    // creating the node tree of new elements
    let individualElement = document.createElement('div')
    let eventTitle = document.createElement('h2')
    let description = document.createElement('p')
    let image = document.createElement('img')
    let price = document.createElement('p')
    let tag = document.createElement('p')
    
    // Creating classes for targetting with CSS
    individualElement.className = 'element'
    price.className = 'price'
    tag.className = 'tags'
   
    // Adding the information from the object to its parent elements
    eventTitle.appendChild(node(singleEvent["name"]))
    description.appendChild(node(singleEvent["description"]))
    image.src = singleEvent["image"]
    price.appendChild(node(`Price: £ ${singleEvent["price"]}`))
    tag.appendChild(node(`tag: ${singleEvent["tag"]}`.toLowerCase()))

    // Adding the children elements to the parent element div
    individualElement.appendChild(eventTitle)
    individualElement.appendChild(description)
    individualElement.appendChild(image)
    individualElement.appendChild(price)
    individualElement.appendChild(tag)
    individualElement.addEventListener('click', () => {
      if (individualElement.classList.contains('clicked')) {
        individualElement.classList.remove('clicked')
      } else{
        individualElement.classList.add('clicked');
      }
    })
    // Adding the whole <div> child to the main element
    content.appendChild(individualElement)
  }

  plants.forEach(plant => createPlantBox(plant));