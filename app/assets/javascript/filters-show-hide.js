$(".manage").hide();
$(".research").hide();
$(".content").hide();
$(".design").hide();
$(".frontend").hide();
$(".testing").hide();
$(function () {
    $(".manage-checkbox").click(function () {
        if ($(this).is(":checked")) {
            $(".manage").show();
        } else {
            $(".manage").hide();
        }
    });
    $(".research-checkbox").click(function () {
        if ($(this).is(":checked")) {
            $(".research").show();
        } else {
            $(".research").hide();
        }
    });
    $(".content-checkbox").click(function() {
        if($(this).is(":checked")) {
            $(".content").show();
        } else {
            $(".content").hide();
        }
    });
    $(".desing-checkbox").click(function() {
        if($(this).is(":checked")) {
            $(".design").show();
        } else {
            $(".design").hide();
        }
    });
    $(".frontend-checkbox").click(function() {
        if($(this).is(":checked")) {
            $(".frontend").show();
        } else {
            $(".frontend").hide();
        }
    });
    $(".testing-checkbox").click(function() {
        if($(this).is(":checked")) {
            $(".testing").show();
        } else {
            $(".testing").hide();
        }
    });
});