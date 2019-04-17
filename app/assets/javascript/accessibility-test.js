$(".management").hide();
$(".management-checkbox").click(function() {
    if($(this).is(":checked")) {
        $(".management").show();
    } else {
        $(".management").hide();
    }
});

$(".research").hide();
$(".research-checkbox").click(function() {
    if($(this).is(":checked")) {
        $(".research").show();
    } else {
        $(".research").hide();
    }
});

$(".content").hide();
$(".content-design-checkbox").click(function() {
    if($(this).is(":checked")) {
        $(".content").show();
    } else {
        $(".content").hide();
    }
});

$(".design").hide();
$(".desing-checkbox").click(function() {
    if($(this).is(":checked")) {
        $(".design").show();
    } else {
        $(".design").hide();
    }
});

$(".frontend").hide();
$(".frontend-checkbox").click(function() {
    if($(this).is(":checked")) {
        $(".frontend").show();
    } else {
        $(".frontend").hide();
    }
});

$(".testing").hide();
$(".testing-checkbox").click(function() {
    if($(this).is(":checked")) {
        $(".testing").show();
    } else {
        $(".testing").hide();
    }
});