//Este archivo contiene una función que convierte string a minúsculas y remplaza espacios por guiones, y otra que hace lo inverso

function categoriesNameConvert(name) {
  return name.toLowerCase().replace(/ /g, "-");
}

function categoriesNameRevert(name) {
 let transform = name.replace(/-/g, " ");
 return transform.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export { categoriesNameConvert, categoriesNameRevert };