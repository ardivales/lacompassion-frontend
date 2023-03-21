(function ($) {

    $(document).ready(function() {

        /**
         =================================================
         Sticky Scroll Script Begin
         =================================================
         +*/

        $(window).scroll(function() {

            if (this.scrollY > 500) {

                $('.tw-scroll-up-btn').removeClass("opacity-0 pointer-events-none bottom-0");
                $('.tw-scroll-up-btn').addClass("opacity-1 pointer-events-auto bottom-6");

            } else {

                $('.tw-scroll-up-btn').removeClass("opacity-1 pointer-events-auto bottom-6");
                $('.tw-scroll-up-btn').addClass("opacity-0 pointer-events-none bottom-0");

            }

        });

        /***** ===== Sticky Scroll Script End ===== *****/

        /**
         =================================================
         Slide-up Script Begin
         =================================================
         +*/

        $('.tw-scroll-up-btn').click(function() {

            $("html").animate({
                scrollTop: 0,
            });

        });

        /***** ===== Slide-up Script End ===== *****/

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

        $(".lc-form-pass-confirm").click(showPass);

        /***** ===== Show Password Script End ===== *****/



        /**
         =================================================
         Dark Mode Script Begin
         =================================================
         +*/

        $(".lc-switch").click(function() {

            $(this).toggleClass("before:before-left-5-important");

            if($(this).hasClass("before:before-left-5-important")) {

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

        $(".lc-toggle").click(function() {

            $(".lc-sidebar").toggleClass("lc-close");

            $(".lc-section").toggleClass("lc-close-group");

            if($(".lc-sidebar").hasClass("lc-close")) {

                $(".lc-sidebar").addClass("md:w-[78px] w-[250px]");

                $(".lc-sidebar").removeClass("md:w-[250px] w-[78px]");

            } else {

                $(".lc-sidebar").removeClass("md:w-[78px] w-[250px]");

                $(".lc-sidebar").addClass("md:w-[250px] w-[78px]");

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
         Hidden/Display Some Part Script Begin
         =================================================
         +*/

        /* ==== Parcours de soins Begin ==== */

        $(".lc-new-consultation").click(function() {

            $(".lc-parcours-form").slideDown("fast");

            $(this).addClass("hidden");

            $(".lc-consultation-container").addClass("hidden");

        });

        $(".lc-close-parcours-forms").click(function() {

            $(".lc-parcours-form").attr("style", "display: none;");

            $(".lc-new-consultation").removeClass("hidden");

            $(".lc-consultation-container").removeClass("hidden");

        });

        /* ==== Parcours de soins End ==== */

        /* ==== Bon Begin ==== */

        $(".lc-new-invoice").click(function() {

            $(".lc-bons-form").slideDown("fast");

            $(this).addClass("hidden");

            $(".lc-invoice-container").addClass("hidden");

        });

        $(".lc-close-bons-form").click(function() {

            $(".lc-bons-form").attr("style", "display: none;");

            $(".lc-new-invoice").removeClass("hidden");

            $(".lc-invoice-container").removeClass("hidden");

        });

        /* ==== Bon End ==== */

        /***** ===== Hidden/Display Some Part Script End ===== *****/



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



        /**
         =================================================
         Profile Available Script Begin
         =================================================
         +*/

         $(document).on("click", "#addAvailable", function(e) {

            const $targetLinePromo = $('.lc-available-row');
    
                var $lastRepeatingGroup = $targetLinePromo.last();
    
                setTimeout(function() {
    
                    let $cloneLastTarget = $lastRepeatingGroup.clone(true);
    
                    $cloneLastTarget.find("input").val("");
    
                    $cloneLastTarget.insertAfter($lastRepeatingGroup);
    
                }, 100);
    
            });
    
            $(".lc-available-delete").click(function() {
    
                if($('.lc-available-row').length < 2) {
                    return;
                }
    
    
                $(this).closest(".lc-available-row").remove();
    
            });

        /***** ===== Profile Available Script End ===== *****/

        /**
         =================================================
         Duplicate Item Script Begin
         =================================================
         +*/

        $(document).on("click", "#addExam", function(e) {

            const $targetLinePromo = $('.lc-exam-row');

            var $lastRepeatingGroup = $targetLinePromo.last();

            setTimeout(function() {

                let $cloneLastTarget = $lastRepeatingGroup.clone(true);

                $cloneLastTarget.find("input").val("");

                $cloneLastTarget.insertAfter($lastRepeatingGroup);

            }, 100);

        });

        $(".lc-exam-delete").click(function() {

            if($('.lc-exam-row').length < 2) {
                return;
            }


            $(this).closest(".lc-exam-row").remove();

        });

        /* ========================================================== */

        $(document).on("click", "#addOrder", function(e) {

            const $targetLinePromo = $('.lc-order-row');

            var $lastRepeatingGroup = $targetLinePromo.last();

            setTimeout(function() {

                let $cloneLastTarget = $lastRepeatingGroup.clone(true);

                $cloneLastTarget.find("input").val("");

                $cloneLastTarget.insertAfter($lastRepeatingGroup);

            }, 100);

        });

        $(".lc-order-delete").click(function() {

            if($('.lc-order-row').length < 2) {
                return;
            }


            $(this).closest(".lc-order-row").remove();

        });

        /* ========================================================== */

        $(document).on("click", "#addBon", function(e) {

            const $targetLinePromo = $('.lc-bon-row');

            var $lastRepeatingGroup = $targetLinePromo.last();

            setTimeout(function() {

                let $cloneLastTarget = $lastRepeatingGroup.clone(true);

                $cloneLastTarget.find("input").val("");

                $cloneLastTarget.insertAfter($lastRepeatingGroup);

            }, 100);

        });

        $(".lc-bon-delete").click(function() {

            if($('.lc-bon-row').length < 2) {
                return;
            }


            $(this).closest(".lc-bon-row").remove();

        });

        /***** ===== Duplicate Item Script End ===== *****/



        /**
         =================================================
         Accordion Card Script Begin
         =================================================
         +*/

         function meRemoveOpen() {

            $(".lc-accordion-item").each((index, item) => {

                if(!$(item).hasClass("lc-accordion-open")) {

                    $(item).removeClass("lc-accordion-open");

                    $(item).removeClass("pb-5");

                    $(item).find(".lc-accordion-header").removeClass("border-b mb-5");

                    $(item).find(".lc-accordion-body").css("height", 0);

                    $(item).find(".lc-accordion-icon").removeClass("rotate-180");

                }

            });

        }

        $(".lc-accordion-header").click(function (e) {

            var $targetItem = $(this).closest(".lc-accordion-item");

            var $targetBody = $targetItem.find(".lc-accordion-body");

            $targetItem.siblings(".lc-accordion-open").removeClass("lc-accordion-open");

            $($targetItem).toggleClass("lc-accordion-open");

            if($($targetItem).hasClass("lc-accordion-open")) {

                $targetItem.addClass("pb-5");

                $(this).addClass("border-b mb-5");

                $targetBody.css("height", $targetBody[0].scrollHeight);

                $targetItem.find(".lc-accordion-icon").addClass("rotate-180");

            } else {

                $targetItem.removeClass("pb-5");

                $(this).removeClass("border-b mb-5");

                $targetBody.css("height", 0);

                $targetItem.find(".lc-accordion-icon").removeClass("rotate-180");

            }

            meRemoveOpen($targetItem);

        });

        /***** ===== Accordion Card Script End ===== *****/



        /**
         =================================================
         Tabs Script Begin
         =================================================
         +*/

         $(".lc-tab").click(function() {

            var targetLi = $(this).attr("data-tab");

            $(".lc-tab-target").addClass('hidden');

                $(".lc-tab-target[data-tab='" + targetLi + "']").removeClass("hidden");

            // $(".lc-tab-target").addClass('hidden');

            // if (targetLi == "fiche") {

                

            // } else if (targetLi == "soins") {



            // } else {



            // }

        });

         /***** ===== Tabs Script End ===== *****/



        /**
         =================================================
         Select 2 Script Begin
         =================================================
         +*/

        $('.antecedent-familiaux').select2();

        $('.antecedent-medicaux').select2();

        $(".select2-selection--multiple").addClass("w-full text-slate-500 mt-1 py-2 border-none ring-1 ring-gray-200 focus:ring-gray-200 placeholder-slate-400 rounded-md");

        $(".select2-selection--multiple").css("border", "none");

        /***** ===== Select 2 Script End ===== *****/



        /**
         =================================================
         Sweet Alert 2 Script Begin
         =================================================
         +*/

        $(".sweetalert").click(function () {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning', /* error | success */
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });

        });

        /***** ===== Sweet Alert 2 Script End ===== *****/

    });

}(jQuery));
