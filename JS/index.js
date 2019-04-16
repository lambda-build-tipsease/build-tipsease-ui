let navigation = document.querySelectorAll('.nav a');

for (i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener('mouseover', function(event) {
        event.target.style.transform = 'scale(2)';
    })
    navigation[i].addEventListener('mouseout', function(event) {
      event.target.style.transform = 'scale(1)';
    })        
}