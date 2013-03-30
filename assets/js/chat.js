var chatBot = (function ($, w, undefined) {
    //init();
    initControls();

    var hashtable = {};
    hashtable.item1 = "Item 1";
    hashtable.item2 = "Item 2";
    hashtable.item3 = "Item 3";
    hashtable.item4 = "Item 4";
    hashtable.item5 = "Item 5";
    hashtable.item6 = "Item 6";



    function pushMessage() {

        var timer = setTimeout(function () {
            if (status === 1)
            {
                console.log("message");
            }
        }, getRandomInt(1000, 7000));

    }



    function initControls() {
        //Detect Enter when textarea is selected
        $("#frame_input").keyup(function (event) {
            if (event.keyCode === 13) {
                chatMsg = $(this).val();
                if (chatMsg !== "") {
                    postFromUser(chatMsg);
                    $("#frame_input").val('');
                }
            }
        });
        $("#sendBtn").click(function (event) {
            chatMsg = $("#frame_input").val();
            if (chatMsg !== "") {
                postFromUser(chatMsg);
                $("#frame_input").val('');
            }
        });
    }

}(jQuery, window));