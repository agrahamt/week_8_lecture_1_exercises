var liList = document.querySelectorAll('li')
console.log(liList)
for (var i = 0; i < liList.length; i++) {
  if (liList[i].innerHTML.indexOf('a') !== -1) {
    liList[i].remove()
  } else {
    liList[i].title = liList.innerHTML
  }
}
  
