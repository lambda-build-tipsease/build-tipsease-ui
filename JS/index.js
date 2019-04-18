let navigation = document.querySelectorAll('a');

for (i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener('mouseover', function(event) {
        event.target.style.transform = 'scale(2)';
    })
    navigation[i].addEventListener('mouseout', function(event) {
      event.target.style.transform = 'scale(1)';
    })        
};


class Names{
    constructor(name) {
        this.name = name;
        name.addEventListener('mouseover', (event) => {
          if(event.target.style.transform == 'scale(2)'){
            event.target.removeAttribute('style')
          }else{
            event.target.style.transform = 'scale(2)';
          }
        })
    }
}
let tipImag = document.getElementById('tip-img')
tipImag.addEventListener('click', (event) => {
  if(event.target.style.transform == 'scale(2)'){
    event.target.removeAttribute('style')
  }else{  event.target.style.transform = 'scale(2)'} 
})
let names = document.querySelectorAll('.name')
names.forEach(name => {
    new Names(name)
});
