function toggleMenu() {
    document.querySelector(".b-sidebar").classList.toggle("show");
    document.getElementById('b-overlay').classList.toggle('active');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

let isOpen = true;

/*open list*/

$(document).ready(function () {
    $(".sidebar__navigation-item-link").click(function () {
        $(".sidebar__products").slideToggle('slow');
        if (isOpen) {
            $(".sidebar__navigation-item-link svg").css({"transform": "rotate(-90deg)"})
            $(".sidebar__navigation-item-link svg path").css({"fill": "black"})
            isOpen = false;
        } else {
            $(".sidebar__navigation-item-link svg").css({"transform": "rotate(90deg)"})
            $(".sidebar__navigation-item-link svg path").css({"fill": "#F2656B"})
            isOpen = true;
        }

    })
});

/*put away overflow*/

// let isContains = false;
//
// $(document).ready(function () {
//
//     const sidebar = document.querySelector(".b-sidebar");
//
//     if (sidebar && sidebar.classList.contains("show")) {
//         $("body").css({ overflow: "hidden" });
//         isContains = true;
//     } else {
//         $("body").css({ overflow: "auto" });
//         isContains = false;
//     }
// });

