function makeTextDisappear() {
    $('p').fadeOut();
}
$(function() {
    $('#makeDisappear').on('click', makeTextDisappear);
});
