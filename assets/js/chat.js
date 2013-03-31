var chatBot = (function ($, w, undefined) {
    initControls();

    var messageTable = new Array();

    function initControls() {
        $("#frame_input").keyup(function (event) {
            //if (status != 1) return;
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
            //if (status != 1) return;
            chatMsg = $("#frame_input").val();
            if (chatMsg !== "") {
                postFromUser(chatMsg);
                $("#frame_input").val('');
                handleResponse();
            }
        });
    }

    var responseInProgress = false;
    function handleResponse() {
        messageTable.push(chatMsg);
        //console.log("stack " + messageTable.length);
        if (messageTable.length >= 1) {
            if (responseInProgress) {
                return;
            }

            responseInProgress = true;

            responseTimer = setTimeout(function () {
                $("#statusMessage").fadeIn();
                timer = setTimeout(function () {
                    messageTable = new Array();
                    responseInProgress = false;

                    $("#statusMessage").fadeOut();

                    postFromAI(discussionTable[discussionIndex]);

                    if (discussionIndex == discussionTable.length - 1) {
                        postFromAI(discussionTable[discussionIndex]);

                        discussionIndex = 0;

                        byeTimer = setTimeout(function () {
                            $("#nextBtn").click();
                        }, getRandomInt(1000, 4000));
                    }
                }, getRandomInt(1000, 4000));
            }, getRandomInt(1000, 1250));
        }
    }

}(jQuery, window));