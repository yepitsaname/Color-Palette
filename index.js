/**
* @typedef {string} color hex value of a color
/**
* @typedef {Object} palette
* @property {[color]} color array of colors in a palette
* @property {string} title name of the palette
/**
* @typedef {Object} theme an object containing all the theming data
* @property {string} theme theme name
* @property {palette[]} palettes all the palettes in the theme
/**
* @typedef {[theme]} themes
*/
// Theming data - Add your themes here to view them on the web page
/*
 A Theme
{
    theme: "Name of Theme",
    palettes: [
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: "palette name"},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: "palette name"},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: "palette name"},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: "palette name"},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: "palette name"},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: "palette name"},
    ]
  }


*/

const themes = [/* Your Themes Here */]

/**
 * Takes in a color and returns an html element with that color as the background
 * @param {string} color color value in hex
 * @returns {string} html Swatch element
 */
function Swatch(color){
  return (`<div class="swatch" style="background-color: ${color};">
    ${(()=>{
      let match = ntc.name(color);
      return (`
        <p class="${match[2] ? 'match' : 'close'}">${match[1]}</p>
        `)
    })()}
    <p>${color}</p>
  </div>`)
}

/**
 * Takes in a set of colors and definitions and builds a palette component
 * @param {string[]} colors
 * @param {string[]} [definitions=[]]
 * @returns {string} html Palette component
 */
function Palette(colors, title){
  return (
    `<div class="palette-container">
      <h4>${title}</h4>
      <div class="palette">
        ${(
          ()=>colors.map(color=>Swatch(color)).join("")
        )()}
      </div>
    </div>`
  )
}


/**
 * takes in an array of palette objects and return a palette board component
 * @param {theme} theme
 * @returns {string} a palette board component
 */
function PaletteBoard(theme){
  return (`<div class="palette-board">
    <h2>${theme.theme}</h2>
    ${(
      ()=>theme.palettes.map(palette=>Palette(...Object.values(palette))).join("")
    )()}
  </div>`)
}

const root = document.querySelector('#root');
root.innerHTML = themes.map(theme=>PaletteBoard(theme)).join("");
