// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  fitWidth: true,
  gutter: 20
});

// make sure layout looks good after each image loads by re-layouting Masonry
imagesLoaded( grid ).on( 'progress', function() {
  msnry.layout();
});
