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
                clas.splice("." + $(this).attr("class").substr(12, 14), 1);
                walked++

                if (walked % 2 == 0) {
                    zeros.push("." + $(this).attr("class").substr(12, 14));
                    console.log("zeros = ", zeros);
                } else {
                    crosses.push("." + $(this).attr("class").substr(12, 14));
                    console.log("crosses = ", crosses);
                }

                for (let i = 0; i < crosses.length; i++) {
                    var a = '.CAImg.Img'+crosses[i].substr(1, 2);
                    $(a).show();
                }

                for (let i = 0; i < zeros.length; i++) {
                    var a = '.ZAImg.Img'+zeros[i].substr(1, 2);
                    $(a).show();
                }


                // if(crosses.indexOf('.AA') != -1 && crosses.indexOf('.BA') != -1 && crosses.indexOf('.CA') != -1){
                //     $('.AImg').show();
                // }
            }
        });
    });
}
