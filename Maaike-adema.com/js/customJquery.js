    console.log( "document loaded" );
    // mobile nav
    $('.mobileNavIcon').on('click', function() {
        $(this).toggleClass('close');
        $('.mobileNavBody').toggleClass('open');
    });

    // close mobile nav when clicked outside of menu
    $('.closeBtn').on('click', function() {
        $('.mobileNavIcon').toggleClass('close');
        $('.mobileNavBody').toggleClass('open');
    });

    // prevent menu from closing when clicked inside the menu
    $('.mobileNavBody .inner, .mobileNavIcon').on('click', function(event) {
        event.stopPropagation();
    })

    