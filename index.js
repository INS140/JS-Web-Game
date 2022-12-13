const createObject = (image, posLeft, posBottom) => {
    let object = document.createElement('img')
    object.src = image
    object.style.position = 'fixed'
    object.style.left = posLeft
    object.style.bottom = posBottom
    document.body.append(object)
    return object
}

const createItem = (image, posLeft, posBottom) => {
    let item = createObject(image, posLeft, posBottom)
    item.addEventListener('dblclick', () => item.remove())
    return item
}

const createBackground = (image, height) => {
    let container = document.createElement('div')
    container.style.background = `url(${image}) 100px repeat`
    container.style.height = height
    document.body.append(container)
}

let sky = createBackground('assets/sky.png', '32vh') // must be created first
let grass = createBackground('assets/grass.png', '68vh')
let greenCharacter = createObject('assets/green-character.gif', '100px', '100px')
let pineTree = createObject('assets/pine-tree.png', '450px', '200px')
let tree = createObject('assets/tree.png', '200px', '300px')
let pillar = createObject('assets/pillar.png', '350px', '100px')
let crate = createObject('assets/crate.png', '150px', '200px')
let well = createObject('assets/well.png', '500px', '425px')
let sword = createItem('assets/sword.png', '500px', '405px')
let shield = createItem('assets/shield.png', '165px', '185px')
let staff = createItem('assets/staff.png', '600px', '100px')