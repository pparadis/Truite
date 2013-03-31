var chatBot = (function ($, w, undefined) {
    initControls();

    var messageTable = new Array();

    var keywordTable = {};
    keywordTable.asv = "asv";
    keywordTable.chick = "fille";
    keywordTable.wow = "wow";
    keywordTable.lol = "lol";
    keywordTable.poisson = "poisson";

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
                    console.log(stackIndex);
                    console.log("asking for " + messageTable[stackIndex]);
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