window.onload = () => {
    $(document).ready(function () {
        // $('.ZAImg.ImgAA').show();

        var walked = 0;
        var clas = ['.AA', '.AB', '.AC',
            '.BA', '.BB', '.BC',
            '.CA', '.CB', '.CC'];
        var crosses = [];
        var zeros = [];
        console.log(1);


        $(clas.join()).click(function (event) {
            if (clas.indexOf("." + $(this).attr("class").substr(12, 14)) !== -1) {
                walked++
                // console.log(walked);


                if (walked % 2 == 0) {

                    zeros.push("." + $(this).attr("class").substr(12, 14));
                    // console.log("zeros = ", zeros);
                    for (let i = 0; i < crosses.length; i++) {


                        if ("." + $(this).attr("class").substr(12, 14) == crosses[i]) {
                            var a = '.CAImg.Img' + crosses[i].substr(1, 2);
                            console.log(1);
                            $(a).show();
                            $(a).is(':visible')



                            clas.splice("." + $(this).attr("class").substr(12, 14), 1);

                        }
                    }
                } else {

                    crosses.push("." + $(this).attr("class").substr(12, 14));
                    // console.log("crosses = ", crosses);
                    for (let i = 0; i < zeros.length; i++) {


                        if ("." + $(this).attr("class").substr(12, 14) == zeros[i]) {
                            var a = '.ZAImg.Img' + zeros[i].substr(1, 2);

                            // $(a).show();
                            $(a).is(':visible')


                            clas.splice("." + $(this).attr("class").substr(12, 14), 1);

                        }
                    }
                }






                // if(crosses.indexOf('.AA') != -1 && crosses.indexOf('.BA') != -1 && crosses.indexOf('.CA') != -1){
                //     $('.AImg').show();
                // }
            }
        });
    });
}
