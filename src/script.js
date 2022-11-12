(function ($) {

    $(document).ready(function() {

        /**
         =================================================
         Show Password Script Begin
         =================================================
         +*/

         function showPass () {

            var $target = $(this).closest(".lc-form-group").find(".lc-form-field");

            if($target.attr("type") === "password") {

                $target.attr("type", "text");

                $(this).find("i").attr("class", "uil uil-eye");

            } else {

                $target.attr("type", "password");

                $(this).find("i").attr("class", "uil uil-eye-slash");

            }

        }

        $(".lc-form-pass").click(showPass);

        /***** ===== Show Password Script End ===== *****/



        /**
         =================================================
         Dark Mode Script Begin
         =================================================
         +*/

        $(".lc-switch").click(function() {

            $(this).toggleClass("before:left-5");

            if($(this).hasClass("before:left-5")) {

                $(".lc-mode-text").text("Light Mode");

                $(".lc-moon").addClass("opacity-0");

                $(".lc-sun").removeClass("opacity-0");

            } else {

                $(".lc-mode-text").text("Dark Mode");

                $(".lc-moon").removeClass("opacity-0");

                $(".lc-sun").addClass("opacity-0");

            }
        
        });

        /***** ===== Dark Mode Script End ===== *****/



        /**
         =================================================
         Toggle Menu Script Begin
         =================================================
         +*/

        //  $(".lc-toggle").click(function() {

        //     // $(".lc-sidebar").toggleClass("lc-close");

        //     // $(this).addClass("rotate-180");

        //     // $(".lc-logo-text").toggleClass("opacity-0");
            
        //     // $(".lc-mode-text").toggleClass("opacity-0");

        //     if($(".lc-sidebar").hasClass("lc-close")) {

        //         $(".lc-sidebar").removeClass("lc-close");

        //         $(this).removeClass("rotate-180");

        //         $(".lc-logo-text").addClass("opacity-0");
            
        //         $(".lc-mode-text").addClass("opacity-0");

        //         $(".lc-sidebar").addClass("w-[88px]");

        //         $(".lc-sidebar").removeClass("w-[250px]");

        //         $(".lc-admin-head").addClass("w-[calc(100%-88px)]");

        //         $(".lc-admin-head").removeClass("w-[calc(100%-250px)]");

        //         $(".lc-admin-head").addClass("left-[88px]");

        //         $(".lc-admin-head").removeClass("left-[250px]");

        //     } else {

        //         $(".lc-sidebar").addClass("lc-close");

        //         $(this).addClass("rotate-180");

        //         $(".lc-logo-text").removeClass("opacity-0");
            
        //         $(".lc-mode-text").removeClass("opacity-0");

        //         $(".lc-sidebar").removeClass("w-[88px]");

        //         $(".lc-sidebar").addClass("w-[250px]");

        //         $(".lc-admin-head").removeClass("w-[calc(100%-88px)]");

        //         $(".lc-admin-head").addClass("w-[calc(100%-250px)]");

        //         $(".lc-admin-head").removeClass("left-[88px]");

        //         $(".lc-admin-head").addClass("left-[250px]");

        //     }
        
        // });

        $(".lc-toggle").click(function() {

            $(".lc-sidebar").toggleClass("lc-close");

            $(this).toggleClass("rotate-180");

            $(".lc-logo-text").toggleClass("opacity-0");
            
            $(".lc-mode-text").toggleClass("opacity-0");

            if(!$(".lc-sidebar").hasClass("lc-close")) {

                $(".lc-sidebar").removeClass("w-[88px]");

                $(".lc-sidebar").addClass("w-[250px]");

                $(".lc-admin-head").removeClass("w-[calc(100%-88px)]");

                $(".lc-admin-head").addClass("w-[calc(100%-250px)]");

                $(".lc-admin-head").removeClass("left-[88px]");

                $(".lc-admin-head").addClass("left-[250px]");

            } else {

                $(".lc-sidebar").addClass("w-[88px]");

                $(".lc-sidebar").removeClass("w-[250px]");

                $(".lc-admin-head").addClass("w-[calc(100%-88px)]");

                $(".lc-admin-head").removeClass("w-[calc(100%-250px)]");

                $(".lc-admin-head").addClass("left-[88px]");

                $(".lc-admin-head").removeClass("left-[250px]");

            }
        
        });

        /***** ===== Toggle Menu Script End ===== *****/

        /**
         =================================================
         Filter Script Begin
         =================================================
         +*/

         $(".lc-filter").click(function() {

            if ($(".lc-filter-container").is(":hidden")) {

                $(".lc-filter-container").slideDown("fast");

              } else {

                $(".lc-filter-container").animate({
                    overflow: "hidden",
                    marginTop: "-10px"
                }, 150, function () {
                    $(".lc-filter-container").attr("style", "display: none;");
                });

              }
        
        });

        /***** ===== Filter Script End ===== *****/



        /**
         =================================================
         Modal Script Begin
         =================================================
         +*/

         $(".lc-modal-show").click(function() {

            var target = $(this).attr("id");
          
            var $modalTarget = $(".lc-modal[data-lc-target='" + target + "']");
          
            var $overlayTarget = $(".lc-modal-overlay[data-lc-target='" + target + "']");
          
            $modalTarget.removeClass("opacity-0 pointer-events-none");
          
            $overlayTarget.removeClass("opacity-0 pointer-events-none");
          
            $("body").css("overflow", "hidden");
          
          });
          
          $('.lc-modal-icon-cross').click(function() {
          
            var target = $(this).attr("data-lc-target").replace("#", "");
          
            var $modalTarget = $(".lc-modal[data-lc-target='" + target + "']");
          
            var $overlayTarget = $(".lc-modal-overlay[data-lc-target='" + target + "']");
          
            $modalTarget.addClass("opacity-0 pointer-events-none");
          
            $overlayTarget.addClass("opacity-0 pointer-events-none");
          
            $("body").css("overflow-y", "scroll");
          
          });
          
          $('.lc-modal-overlay').click(function() {
          
          var target = $(this).attr("data-lc-target");
          
            $("[data-lc-target='"+ target +"'] .lc-modal-icon-cross").click();
          
            $("body").css("overflow-y", "scroll");
          
          });

        /***** ===== Modal Script End ===== *****/

    });

}(jQuery));
