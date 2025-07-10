// 1: Select the element with the ID 'about'.
//    Store the element in the variable `about`.
const about = document.querySelector('#about')
about.style.border = '2px solid firebrick'

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
const h2Elements = document.querySelectorAll('h2')
h2Elements.forEach((h2) => {
  h2.style.color = 'darkcyan'
})

// 3: Select all elements with the class '.card'.
//    Set their background color to the color of your choice.
const cardElements = document.querySelectorAll('.card')
cardElements.forEach((card) => {
  card.style.backgroundColor = 'lightskyblue'
})

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.

ul.style.border = '2px solid indigo'

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.

container.style.backgroundColor = 'royalblue'

// 6: Select all <a> elements that have a 'title' attribute.
//    Set their color value to the color of your choice.
