window.onload = () => {
    $(document).ready(function () {
        // $('.ZAImg.ImgAA').show();

        var walked = 0;
        var clas = ['.AA', '.AB', '.AC',
            '.BA', '.BB', '.BC',
            '.CA', '.CB', '.CC'];
        var crosses = [];
        var zeros = [];


            $(clas.join()).click(function (event) {
                console.log(walked);
                var thisClassString = clas[clas.indexOf("." + $(this).attr("class").substr(12, 14))];
                var thisClassInt = clas.indexOf("." + $(this).attr("class").substr(12, 14));


                if (thisClassInt !== -1) {
                    walked++

                    if (walked % 2 === 0) {

                        crosses.push(thisClassString);


                        for (let i = 0; i < crosses.length; i++) {

                            if (thisClassString === crosses[i]) {
                                var a = '.CAImg.Img' + crosses[i].substr(1, 2);
                                $(a).show();

                                clas.splice(thisClassInt, 1);

                            }
                        }


                    } else {
                        zeros.push(thisClassString);


                        for (let i = 0; i < zeros.length; i++) {

                            if (thisClassString === zeros[i]) {
                                var a = '.ZAImg.Img' + zeros[i].substr(1, 2);
                                $(a).show();

                                clas.splice(thisClassInt, 1);

                            }
                        }
                    }

                }

            });

        }
    )
        ;
    }

















