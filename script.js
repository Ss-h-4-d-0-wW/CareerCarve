$(function () {
  $(".wrapper").sortable();
  $(".menu-icon").draggable({
    connectToSortable: ".wrapper",
    helper: "clone",
    revert: "invalid",
  });
  $(".comp1").disableSelection();
});