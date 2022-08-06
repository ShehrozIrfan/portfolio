$('#navbarNavDropdown').on('show.bs.collapse', function () {
  $('a.nav-link').click(function () {
    $('#navbarNavDropdown').collapse('hide');
  });
});
