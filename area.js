const calculateRectangleArea = function (length, width) {
  if (length >= 0 && width >= 0) {
    let area = length * width;
    return area;
  }
}

const calculateTriangleArea = function (base, height) {
  if (base >= 0 && height >= 0) {
    let area = (base * height) / 2;
    return area;
  }
}

const calculateCircleArea = function (radius) {
  if (radius >= 0) {
    let area = Math.PI * (radius ** 2);
    return area;
  }  
}