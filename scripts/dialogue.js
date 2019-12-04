const borderColorChange = () => {
  const travelTips = document.querySelectorAll(".cities__list")
  

  for (const cities__list of travelTips) {
      cities__list.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              cities__list.classList.add("revealInfo")
          }
      )


      cities__list.addEventListener("mouseout", (theMouseOutEvent) => {
          cities__list.classList.remove("revealInfo")
      })
  }
}

const borderColorChange = () => {
  const fishTips = document.querySelectorAll("ul")

  for (const ul of fishTips) {
      ul.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              ul.style.visibility = "hidden";
          }
      )


      ul.addEventListener("mouseout", (theMouseOutEvent) => {
          ul.style.display = "";
      })
  }
}

export default borderColorChange




