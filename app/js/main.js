$('.my-carousel').slick({
  dots: true,                
  infinite: true,            
  speed: 300,               
  slidesToShow: 1,          
  slidesToScroll: 1,      
  focusOnSelect: true,    
  customPaging: function(slider, i) {
    return '<button class="custom-dot">' + (i + 1) + '</button>';
  }
});