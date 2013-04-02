var chatBot = (function ($, w, undefined) {
    initControls();

    var messageTable = new Array();
    function initControls() {
        $("#frame_input").keyup(function (event) {
            //if (status != 1) return;
            if (event.keyCode === 13) {
                chatMsg = $(this).val().trim();
                if (chatMsg !== "") {
                    postFromUser(chatMsg);
                    $("#frame_input").val('');
                    handleResponse();
                }
            }
        });
        $("#sendBtn").click(function (event) {
            //if (status != 1) return;
            chatMsg = $("#frame_input").val().trim();
            if (chatMsg !== "") {
                postFromUser(chatMsg);
                $("#frame_input").val('');
                handleResponse();
            }
        });

        $("#retry").click(function (event) {
            location.reload();
        });
    }

    var responseInProgress = false;
    function handleResponse() {
        if (status != 2) return;
        messageTable.push(chatMsg);
        if (messageTable.length >= 1) {
            if (responseInProgress) {
                return;
            }

            responseInProgress = true;

            responseTimer = setTimeout(function () {
                if(who != ''){
                    $("#statusMessage").fadeIn();
                }
                timer = setTimeout(function () {
                    messageTable = new Array();
                    responseInProgress = false;

                    $("#statusMessage").fadeOut();
                    if (status == 2){
                        if(who != ''){
                            postFromAI(discussionTable[discussionIndex]);
                        }

                        if (discussionIndex == discussionTable.length - 1) {
                            if(who != ''){
                                postFromAI(discussionTable[discussionIndex]);
                            }

                            discussionIndex = 0;

                            byeTimer = setTimeout(function () {
                                $("#nextBtn").click();
                            }, getRandomInt(1000, 4000));
                        }
                    } else {
                        $("#statusMessage").hide();
                    }
                }, getRandomInt(1000, 4000));
            }, getRandomInt(1000, 1250));
        }
    }

}(jQuery, window));
