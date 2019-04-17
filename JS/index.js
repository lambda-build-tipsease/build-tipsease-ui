let navigation = document.querySelectorAll('a');

for (i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener('mouseover', function(event) {
        event.target.style.transform = 'scale(2)';
    })
    navigation[i].addEventListener('mouseout', function(event) {
      event.target.style.transform = 'scale(1)';
    })        
}
let logo = document.getElementsByTagName('h3');
logo.addEventListener('mouseover', function(event) {
    event.target.style.transform = 'scale(3)';
});
logo.addEventListener('mouseout', (event) => event.target.style.transform = 'scale(1)');
// class Name{
//     constructor(name) {
//         this.name = name;
//         this.expand = this.name.querySelector('')
//     }
// }

// let names = document.querySelectorAll('.name')
// names.forEach(name => {
//     new Name(name)
// });
