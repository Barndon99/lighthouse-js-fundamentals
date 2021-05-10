const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0 ) {
    return undefined;
  } else {
      let area = length * width;
      return area;
  }    
}

const calculateTriangleArea = function (base, height) {
  if (base < 0 || width < 0) {
    return undefined;
  } else {
    let area = (base * height) / 2;
    return area;
  }
}

const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined;
  } else {
      let area = (radius * radius) * Math.PI;
      return area;
  }    
}