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

    });

}(jQuery));
