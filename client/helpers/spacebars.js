UI.registerHelper('pluralize', function(n, word) { 
  //pluralizer
  if (n === 1) {
    return '1 ' + word; 
  } else {
    return n + ' ' + word + 's'; 
  }
});