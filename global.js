    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        });
    }

        // $(document).ready(function() {
        //     $('#myfile').on('change', function() {
        //     var files = $(this).get(0).files;
        //     if (files.length > 20) {
        //         alert('You can only upload up to 20 pictures.');
        //         return;
        //     }
        //     if (files.length === 0) {
        //         return;
        //     }
        //     for (var i = 0; i < files.length; i++) {
        //         var reader = new FileReader();
        //         reader.onload = function(e) {
        //         var img = $('<img>').attr('src', e.target.result);
        //         $('.image-preview').append(img);
        //         };
        //         reader.readAsDataURL(files[i]);
        //     }
        //     });
        // });
      
        var imageInput = document.getElementById("myfile");
        var previewImage = document.getElementById("image-preview");
        previewImage.width="500";
        imageInput.addEventListener("change", function(event) {
            if (event.target.files.length == 0) {
                return;
            }
            var tempUrl = URL.createObjectURL(event.target.files[0]);
            previewImage.setAttribute("src", tempUrl);
        })


       jQuery( document ).ready(function() {
        jQuery(".Second-step-content, .Third-step-content").hide();
           jQuery(".first-step").click(function(){
            jQuery(".Second-step-content, .Third-step-content").hide();
            jQuery(".fisrt-step-content").show();
           });

           jQuery(".second-step").click(function(){
            jQuery(".fisrt-step-content, .Third-step-content").hide();
            jQuery(".Second-step-content").show();
           });

           jQuery(".third-step").click(function(){
               jQuery(".Third-step-content").show();
            jQuery(".fisrt-step-content, .Second-step-content").hide();
           });

           jQuery(".btn-cont").click(function(){
               let projectname = $("#project-name").val();
               console.log(projectname);
                    
           });

           jQuery(".btn-cont-2").click(function(){
            let fname = $("#fname").val();
            let lname = $("#lname").val();
            let email = $("#email").val();
            let phone = $("#phone").val();
            let address = $("#address-line").val();
            let city = $("#city").val();
            let country = $("#country").val();
            let state = $("#state").val();
            let zip = $("#zip").val();

            let objecttotal = {
                "Fname": fname,
                "Lname": lname,
                "Email": email,
                "Phone": phone,
                "Address": address,
                "City": city,
                "Country": country,
                "State": state,
                "Zip": zip,
               }
               console.log(objecttotal);

           });

           jQuery(".tooltiptext").click(function() {
                jQuery(".all-options").show();

           });

            jQuery('.tooltip').children().first('.tooltiptext').click(function(){
                jQuery(".all-options").show();
            });

           $( ".tooltip div , .tooltip-2 div" ).each(function(index) {
            $(this).on("click", function(){
                $(this).toggleClass("active");
                if ($(this).hasClass("active")) {
                    let counterValue = parseInt($("#counter").text());
                    let counteramount = parseFloat($(".amount-price").text());
                    let amountValue = parseFloat($(".price").text());
                    // console.log(counteramount, amountValue);
                    counterValue++;
                    let totalamount = amountValue + counteramount
                    $("#counter").text(counterValue);
                    parseInt($(".amount-price").text(totalamount));
                    
                }
                else{
                    let counterValue = parseInt($("#counter").text());
                    let counteramount = parseFloat($(".amount-price").text());
                    let amountValue = parseFloat($(".price").text());
                    counterValue--;
                    let totalamount = amountValue - counteramount

                    
                    
                    $("#counter").text(counterValue);
                    parseFloat($(".amount-price").text(totalamount));

                }
            });
        });
    });




    

    