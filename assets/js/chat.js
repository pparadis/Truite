var chatBot = (function ($, w, undefined) {
    initControls();

    var messageTable = new Array();

    var keywordTable = {};
    keywordTable.asv = "asv";
    keywordTable.chick = "fille";
    keywordTable.wow = "wow";
    keywordTable.lol = "lol";
    keywordTable.poisson = "poisson";

    //function pushMessage(a, b, callback) {
    //    callback();
    //}

    //asyncLoop(1000, function (loop) {
    //    pushMessage(1, 2, function (result) {
    //        console.log(loop.iteration());
    //        loop.next();
    //    })},
    //    function () {
    //        console.log('cycle ended')
    //    }
    //);

    //function asyncLoop(iterations, func, callback) {
    //    var index = 0;
    //    var done = false;
    //    var loop = {
    //        next: function () {
    //            if (done) {
    //                return;
    //            }
    //            if (index < iterations) {
    //                index++;
    //                func(loop);

    //            } else {
    //                done = true;
    //                callback();
    //            }
    //        },
    //        iteration: function () {
    //            return index - 1;
    //        },
    //        break: function () {
    //            done = true;
    //            callback();
    //        }
    //    };
    //    loop.next();
    //    return loop;
    //}
    function initControls() {
        $("#frame_input").keyup(function (event) {
            if (event.keyCode === 13) {
                chatMsg = $(this).val();
                if (chatMsg !== "") {
                    postFromUser(chatMsg);
                    $("#frame_input").val('');
                    handleResponse();
                }
            }
        });
        $("#sendBtn").click(function (event) {
            chatMsg = $("#frame_input").val();
            if (chatMsg !== "") {
                postFromUser(chatMsg);
                $("#frame_input").val('');
                handleResponse();
            }
        });

        var responseInProgress = false;
        function handleResponse() {
            messageTable.push(chatMsg);
            //console.log("stack " + messageTable.length);
            if (messageTable.length >= 2) {
                if (responseInProgress) {
                    return;
                }

                responseInProgress = true;
                $("#statusMessage").fadeIn();
                timer = setTimeout(function () {
                    var stackIndex = getRandomInt(0, messageTable.length - 1);
                    //get answer ajax
                    messageTable = new Array();
                    responseInProgress = false;
                    $("#statusMessage").fadeOut();
                    
                    
                    postFromAI(keywordTable.asv);
                }, getRandomInt(1000, 4000));
            }
        }
    }

}(jQuery, window));