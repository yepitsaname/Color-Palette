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
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: ""},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: ""},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: ""},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: ""},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: ""},
      {color: ["#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE", "#HEXCODE"], title: ""},
    ]
  }


*/

const themes = [
  {
    theme: "Black Relay - Dark Mode",
    palettes: [
      {color: ["#0C0C0C", "#2A2A2A", "#5B5B5B", "#C9A227", "#E63946"], title: "Basic"},
      {color: ["#0B0B0B", "#1E1E2E", "#5E5CE6", "#00F5D4", "#FF004D"], title: "Futuristic"},
      {color: ["#111111", "#2C2C2C", "#6D6D6D", "#B87333", "#D72638"], title: "Industrial"},
      {color: ["#0D0D0D", "#2A2A2A", "#6D6D6D", "#00F5D4", "#D72638"], title: "Merged"},
      {color: ["#0D0D0D", "#2A2A2A", "#6D6D6D", "#2979FF", "#D72638"], title: "Blue Shift"},
      {color: ["#0D0D0D", "#2A2A2A", "#6D6D6D", "#2979FF", "#FF1744"], title: "Red Shift"},
    ]
  },
  {
    theme: "Black Relay - Light Mode",
    palettes: [
      {color: ["#FFFFFF", "#E6E6E6", "#B3B3B3", "#2979FF", "#FF1744"], title: "Basic"},
      {color: ["#FAFAFA", "#E0E0E0", "#9E9E9E", "#18A0FB", "#FF3366"], title: "Futuristic"},
      {color: ["#F5F5F5", "#D9D9D9", "#8C8C8C", "#00C4CC", "#FF003C"], title: "Industrial"},
      {color: ["#FFFFFF", "#F2F2F2", "#BFBFBF", "#B87333", "#E63946"], title: "Merged"},
      {color: ["#FFFFFF", "#F5F7FA", "#D3D3D3", "#82CFFF", "#FF6F91"], title: "Blue Shift"},
      {color: ["#FEFEFE", "#E8E8E8", "#A6A6A6", "#FFC107", "#F50057"], title: "Red Shift"},
    ]
  },
]

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