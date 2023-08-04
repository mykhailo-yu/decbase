const itemsWrapper = document.querySelector(".completed-work__diagram");
const item = document.querySelector(".completed-work__diagram-item");
const svgns = "http://www.w3.org/2000/svg";

createLines();
window.addEventListener("resize", createLines);
function createLines() {
  const itemHeight = item.getBoundingClientRect().height;
  const itemWidth = item.getBoundingClientRect().width;
  const itemWrapperWidth = itemsWrapper.getBoundingClientRect().width;
  const horizontalLineSize = (itemWrapperWidth - 4 * itemWidth) / 6;
  const verticalLineSize = itemHeight / 2;
  const svgWrapper = document.querySelectorAll(
    ".completed-work__diagram-item-svg"
  );
  let svgs = [];
  const lineWidth = window.innerWidth * 0.002;
  if (window.innerWidth >= 768) {
    svgWrapper.forEach((element, index) => {
      element.innerHTML = "<svg></svg>";
      if (index != 1) {
        element.style.top = `${verticalLineSize}px`;
      } else element.style.top = "0";
      element.style.left = `${itemWidth}px`;
      svgs.push(element.firstElementChild);
    });
    svgs.forEach((element, index) => {
      element.style.width = horizontalLineSize * 2;
      element.style.height = verticalLineSize + lineWidth;
      let newPolyline = document.createElementNS(svgns, "polyline");
      newPolyline.setAttribute(
        "style",
        `stroke:#E0E0E0; stroke-width:${lineWidth}; fill:none;`
      );
      if (index === 0 || index === 2) {
        newPolyline.setAttribute(
          "points",
          `0, ${lineWidth} 
          ${horizontalLineSize}, ${lineWidth} 
          ${horizontalLineSize}, ${verticalLineSize} 
          ${horizontalLineSize * 2}, ${verticalLineSize}`
        );
      } else {
        newPolyline.setAttribute(
          "points",
          `0, ${verticalLineSize} 
          ${horizontalLineSize}, ${verticalLineSize} 
          ${horizontalLineSize}, ${lineWidth} 
          ${horizontalLineSize * 2}, ${lineWidth}`
        );
      }
      element.appendChild(newPolyline);
    });
  }
}
