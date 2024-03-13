                                        // how to remove class

    // $(document).ready(function() {
    //     const $box = $(".box")
    //     const $removeblue = $(".remove-blue")
    //     const $removewidth = $(".remove-width")

    //     $removeblue.on("click", function() {
    //         $box.removeClass("blue")
    //     })

    //     $removewidth.on("click", function() {
    //         $box.removeClass("width")
    //     })
    

    // })

                                            // how to toggle css class
    // $(document).ready(function() {
    //     const $box = $(".box")

    //     $(".toggle-blue-class").on("click", () => {
    //         $box.toggleClass("blue")
    //     })
    // })

                                            // adding custom css to elements
    // $(document).ready(function() {
    //      $(".box")
    //     //  .css("background-color", "orange")
    //     //  .css("border-radius", "50%")
    //     //  .css("border", "10px solid black")
    //     .css({
    //         backgroundColor: "red",
    //         border:" 10px solid black",
    //         borderRadius: "50%"
    //     })
    // })

                                            // fading in and fading out
    // $(document).ready(function() {
    //     const $box = $(".box")
    //     $box.fadeOut(5000)
    //     $box.fadeIn(5000)
    // })

                                            // toggle fades
    // $(document).ready(function() {
    //     $("button").on("click", function() {
    //         $(".box").fadeToggle()
    //     })
    // })

                                            // slide up and slide down
    // $(document).ready(function() {
    //     $("button").on("click", function() {
    //         $(".box").slideToggle()
    //     })
    // })

                                            // callback function
    // $(document).ready(function() {
    //     $("button").on("click", function() {
    //         $(".box").toggle(3000, function() {
    //             console.log("toggle effect is complete");
    //         })
    //     })
    // })

                                            // making animations
    // $(document).ready(function() {
    //     $("button").on("click", function() {
    //         $(".box").animate({
    //             opacity: 0.5,
    //             width: "500px",
    //         }, 5000)
    //     })
    // })

                                            // width dimension
    // $(document).ready(function() {
    //     const $box = $(".box")
    //     $box.width()
    //     console.log($box.width());
    //     console.log($box.outerWidth());
    //     console.log($box.innerWidth());
    //     console.log($box.outerWidth(true));
    //     console.log($box.height());
    //     console.log($box.innerHeight());
    //     console.log($box.outerHeight());
    // })

                                            //resizing the window
    // $(document).ready(function() {
    //     $(window).on("resize", function() {
    //         console.log($(window).width(), 'x', $(window).height());
    //         if ($(window).width() <= 280) {
    //             $("body").css("background-color", "black")
    //         }else{
    //             $("body").css("background-color", "white")
    //         }
    //     })
    // })

                                            //  looping through elements
    // $(document).ready(function () {
    //     $("li").each(function (index, elements) {
    //         $(elements).text(`${index + 1}. new item here`)
    //         if (index === 1) {
    //             $(elements)
    //                 .css({
    //                     backgroundColor: "black",
    //                     color: "white"
    //                 })
    //         }
    //     })
    // })

                                            //  how to change elements
    // $(document).ready(function () {
    //    const input = $("input")
    //    input.attr("type", "password")                                            
    // })

                                            // ajax get request
    // $(document).ready(function() {
    //     $.get('https://swapi.dev/api/people/1/', function(data) {
    //         console.log(data['name'])
    //         console.log(data['height'])
    //         console.log(data['mass'])
    //     })
    // })

                                            // ajax post request
    $(document).ready(function() {
        $.post('https://httpbin.org/post', {"hello": "word"}, function(data) {
            console.log('post was complete with this data')
            console.log(data)
            
        })
    })