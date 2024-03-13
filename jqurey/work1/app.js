// $(document).ready(function() {
//     // console.log("jQuery is loaded!");
// })

// //  jquery syntax
// $(document).ready(function() {
//     $("h1.customClassName").text("this was change by jQuery syntax")
// })

//      jquery selector
// $(document).ready(function() {
//     //jquery code in here
//     $("h1, p").text("changed via jquery 2")
//     $("p.custom-class").text("changed again 3")
//     $("#customId").text("changed again 4")
    
// })

//          html with jquery
    // $(document).ready(function() {
    //     $("#customId").html("<h1>Hello word <span class='custom-class'>Span text</span></h1>")
    //     $("span").text("changed!")
    // })



//          .text in jquery
        // $(document).ready(function() {
        //     $("section").text("this is a text")
        // })

//          how to get form values

        // $(document).ready(function() {
        //    $("input").val("this is changed")
           
        // })

//  `           how to append and prepend html elements
        // $(document).ready(function() {
        //    $("h1")
        //             .append("<u>this is an underline</u>")
        //             .prepend("<i>this is an italic</I>")  
        // })


//              how to add elements before or after an elements
        // $(document).ready(function() {
        //    $("#targets").before("<h3>Hello word this is a title<h3>")
        //    $("#targets").after("<p>this is a paragraph</p>")
           
        // })

//              deleting elements from the dom
    //   $(document).ready(function() {
    //        $("div p.middle-paragraph").remove()
           
    //     })  


//              deleting child element

        //       $(document).ready(function() {
        // //    $("#parent").empty().html("hello word")
        // const $person = $("#parent")
        //         $person.empty()
        //         $person.html("stuff in here")

           
        // })  

//              click event listener
            // $(document).ready(function() {
            //     // $("button").click(function() {
            //     //     console.log("i am clicked!");
            //     // })

            //     // sec syntax
            //     // $("button").on("click", function() {
            //     //     console.log("i am clickable too");
            //     // })

            //     // third syntax
            //     $(document).on("click", "button", function() {
            //         console.log(333);
            //     })

            //     // putting a button dynamically
            //     const $parent = $("#putAButtonHere")
            //     $parent.html("<button>Click me dynamic button</button>")

            // })

//                 hover event listener
            // $(document).ready(function() {
            //     $("#box")
            //          .on("mouseenter", function() {
            //          console.log("you have entered the box zone");
            //      })
            //           .on("mouseleave", function() {
            //           console.warn("you left");
            //      })
            // })

//                  key up event
            // $(document).ready(function() {
            //     $(".select-me").on("keyup", function() {
            //         // console.log("details entered");
            //         console.log($(this).val() );
            //         $(this).val() 
                    
            //     })
            // })

//                   focus event listeners

            // $(document).ready(function() {
            //     $("textarea").on("focus", function() {
            //         console.log("you focused into this input area");
            //     })
            // })

//                   blur event listeners
            // $(document).ready(function() {
            //     $("input").on("blur", function() {
            //         // console.log("you blurred away from this input");
            //         let websiteUrl = $(this).val()
            //         if (websiteUrl.substr(0, 4) !== "http") {
            //             websiteUrl = `http://${websiteUrl}`
            //         }
            //         $(this).val(websiteUrl)
            //     })
            // })

//                     form submission 
            // $(document).ready(function() {
            //     // $("form").on("submit", function(event) {
            //     //     event.preventDefault()
            //     //     console.log("form was not submitted");
            //     // })

            //     $("button").on("click", function(e) {
            //         e.preventDefault()
            //         console.log("button is rendered useless");
            //     })
            // })

//                      how to hide elements
            // $(document).ready(function() {
            //     $("#click-me").on("click", function() {
            //         $("#box").hide()
            //     })
            // })

//                      how to show elements
            // $(document).ready(function() {
            //     $("#click-me").on("click", function() {
            //         $("#box1").show()
            //     })
            // })

//                      how to add css class 
            $(document).ready(function() {
                setTimeout(() => {
                    $(".box").addClass("blue")
                }, 2000);
                
            })

        

