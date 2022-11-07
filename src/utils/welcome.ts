// this utility is used to welcome users in the console
function getRandomRGBNumber() {
  return Math.floor(Math.random() * 256)
}

function getRandomColor() {
  const r = getRandomRGBNumber()
  const g = getRandomRGBNumber()
  const b = getRandomRGBNumber()

  return [`rgb(${r}, ${g}, ${b})`, `rgb(${255 - r}, ${255 - g}, ${255 - b})`]
}

function welcome(title: string) {
  const [color, invertedColor] = getRandomColor()

  const styles = [
    'font-size: 12px',
    `color: ${color}`,
    `border: 1px solid ${invertedColor}`,
    `background-color: ${invertedColor}`,
    'border-radius: 5px',
    'padding: 5px'
  ].join(';')

  console.log(`%c🎖️🎖️ ${`Adny Music`} 🎅🎅`, styles)
  console.log(
    `%c✨✨✨ Welcome ${title} 🌈🌈🌈`,
    'color: #fff; border-radius: 5px; padding: 5px 25px;background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)'
  )
}

export default welcome
