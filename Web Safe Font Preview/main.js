$(document).ready(() => {
  $('#text').on('keyup', event => {
    $('.preview').html($(event.currentTarget).val());
  });
  $('#font').on('change', event => {
    $('.preview').css('font-family', $(event.currentTarget).val());
  });
  $('#weight').on('change', event => {
    $('.preview').css('font-weight', $(event.currentTarget).val());
  });
  $('#size').on('keyup', event => {
    $('.preview').css('font-size', $(event.currentTarget).val() + 'px');
  });
})
