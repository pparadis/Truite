//Javascript file
var status = 0; //0=stopped 1=loading new partner 2=connected to someone
var who = ''; // pascal, jeanfrancois, code18
var whoName = ''; // nom littéral
// conversation par défaut (fallback)
var discussionTable = [
        ["Salutation"],
		["Ça va ?"],
        ["ASV? lol"],
        ["Ouain, c'est pas jeune jeune!"],
        ["Ouain, il fait beau dehors"],
        ["Toi... la vie?"],
        ["T'aime ça les ordinateurs?"],
        ["Je dois quitter! Bye!"]
];
var discussionIndex = 0;

$(document).ready(function () {
    addthis.init();
	// LAYOUT //
	var myLayout = $('body').layout({ 
		applyDemoStyles: true, 
		north: {
				size:"80",
				closable:false,
				spacing_open: 6
			},
		west: {
				size:"350",
				closable:false,
				spacing_open: 6
			},
		east: {
				size:"300",
				closable:false,
				spacing_open: 6,
				initClosed: true
			},
		
	});
	
	var myLayout2 = $('#zone').layout({
		applyDemoStyles: true,
		closable:false,
		center__paneSelector:  "#center",
		south__paneSelector:   "#south",
		spacing_open: 6,
		spacing_closed: 6,
	});
	myLayout2.sizePane("south", 100);
	
	//Roulette management
	var timer;
	var nextBtn = $("#nextBtn");
	var stopBtn = $("#stopBtn");
	var statusBar = $("#status");
	var countNext = 1;
	nextBtn.click(function(e){
        if(countNext == 9){
			status = 5;
			setTimeout(function(){$("#stopBtn").trigger("click");},500);
			setTimeout(function(){$("#nextBtn").attr("disabled", "disabled");
			$("#stopBtn").attr("disabled", "disabled");},1000);
			$.fool('rick'); //  Run the Rick Astley prank
			myLayout.open("east");
			statusBar.html("Poisson d'avril!");
			countNext++;
		}	else{
			countNext++;
		}
		if(status == 0){
			$(this).attr("disabled", "disabled");
			$(this).html("Chargement...");
			statusBar.html("Recherche un partenaire...");
			$("#player").jPlayer("setMedia", getVideo());
			status = 1;
			clearChat();
                                                
			//Simulating loading time randomly between 3 and 7 seconds
			timer = setTimeout(function(){
				nextBtn.removeAttr("disabled");
				nextBtn.html("Suivant");
				statusBar.html("En discussion avec un geek inconnu.");
				$("#frame_conversation").html("<b>Vous êtes connecté à un nouveau geek. Parler, vous pouvez.</b>");
				$("#player").jPlayer("play");
				enableConversationControls();

                                loadConversation(who);
				status = 2;
			},getRandomInt(3000,7000));
		}else if(status == 2){
			status = 1;
			clearChat();
			$("#player").jPlayer("clearMedia");
			$(this).attr("disabled", "disabled");
			$(this).html("Chargement...");
			statusBar.html("Recherche un partenaire...");
			$("#player").jPlayer("setMedia", getVideo());
			status = 1;
			//Simulating loading time randomly between 3 and 7 seconds
			timer = setTimeout(function(){
				nextBtn.removeAttr("disabled");
				nextBtn.html("Suivant");
				statusBar.html("En discussion avec un geek inconnu.");
				$("#frame_conversation").html("<b>Vous êtes maintenant connecté à un nouveau geek. Parler, vous pouvez.</b>");
				$("#player").jPlayer("play");
                                loadConversation(who);
				status = 2;
			},getRandomInt(3000,7000));
		}
		
		
	});
    
	function enableConversationControls(){
	    $("#frame_input").removeAttr("disabled")
	    $("#sendBtn").removeAttr("disabled")
	}

	function disableConversationControls() {
	    $("#frame_input").attr("disabled", "disabled");
	    $("#sendBtn").attr("disabled", "disabled");
	}
        
    function loadConversation(n){
        var AIname = (n == '') ? '' : '/' + n;
        $.get('ajax/chat-start-conversation' + AIname, 
                function(data){
                    discussionIndex = 0;
                    discussionTable = data;
                },
                'json'
        ).done(
            function(){
                if(who != ''){
                    postFromAI(discussionTable[discussionIndex]);
                }
            }
        );
    }
	
	var defaultText = $("#frame_conversation").html();
	stopBtn.click(function(e){
		if(status == 1){
			clearTimeout(timer);
		}
		status = 0;
		clearChat();
		$("#player").jPlayer("clearMedia");
		nextBtn.removeAttr("disabled");
		nextBtn.html("Démarrer");
		statusBar.html("Arrêté.");
		$("#frame_conversation").html(defaultText);
		disableConversationControls();
	});
	
	// Webcam launcher
    var webcamTimerId = null;
    var webcamDetectionAttempts = 0;
        
	$("#user_video").webcam({
		width: 320,
		height: 240,
		mode: "save",
		swffile: "assets/js/jscam.swf",
		//onTick: function() {},
                //onSave: function() {},
		onCapture: function() {
                    webcam.save('ajax/chat-init');
                },
                debug: function(type, string) { 
                    if (string === "Camera started") { 
                        window.webcam.started = true;
                        if (window.webcam.onStarted) { window.webcam.onStarted(); }
                    } 
                },
		onLoad: function() {
                    webcamTimerId = window.setInterval(isWebcamStarted, 1000);
                }
	});
        
	function isWebcamStarted(){                       
            if( webcamDetectionAttempts >= 30 || webcam.started ){
                window.clearInterval(webcamTimerId);
            }
            else{
                webcamDetectionAttempts++;
            }

            if(webcam.started){
                webcam.capture(3); // 3 seconds
            }
	}
	
	//Video player
	$("#player").jPlayer({
		ready: function () {
			
		},
		ended: function () {
		console.log(countNext);
			if(countNext == 3 || countNext == 6 || countNext == 6){
				console.log("restart");
				$("#player").jPlayer("play");
			}else{
				console.log("next");
				nexted();
			}
		},
		swfPath: "../js",
		supplied: "webmv, ogv, m4v",
		size: {
			width: "320px",
			height: "240px"
		}
	});
	
	//Video list
	var videos = new Array();
	var videoIterator = 0;

        var videoName = [];
        videoName['pascal'] = 'Pascal';
        videoName['jeanfrancois'] = 'Jean-François';
        videoName['code18'] = 'Code 18';
        videoName['mathieu'] = 'Mathieu';

        // @todo à compléter
        var videoAI = [];
        videoAI[1] = 'pascal'; // videos[1]
        videoAI[4] = 'jeanfrancois';
        videoAI[6] = 'code18';
        videoAI[7] = 'mathieu';
		
		/*setTimeout(function(){
			$.fool('rick'); //  Run the Rick Astley prank
			myLayout.open("east");
		},3000);*/
		
		
	videos[0] = {
				mp4: "http://creatik.ca/poisson/assets/videos/friday.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/friday.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/friday.webm"
			};	
		
	videos[1] = {
				mp4: "http://creatik.ca/poisson/assets/videos/pascal.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/pascal.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/pascal.webm"
			};

	videos[2] = {
				mp4: "http://creatik.ca/poisson/assets/videos/divan.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/divan.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/divan.webm"
			};			
		
	videos[3] = {
				mp4: "http://creatik.ca/poisson/assets/videos/piano.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/piano.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/piano.webm"
			};	
	
	videos[4] = {
				mp4: "http://creatik.ca/poisson/assets/videos/jf.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/jf.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/jf.webm"
			};	
		      
	videos[5] = {
				mp4: "http://creatik.ca/poisson/assets/videos/dizzy.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/dizzy.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/dizzy.webm"
			};
			
	videos[6] = {
				mp4: "http://creatik.ca/poisson/assets/videos/code18.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/code18.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/code18.webm"
			};

	videos[7] = {
				mp4: "http://creatik.ca/poisson/assets/videos/mathieu.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/mathieu.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/mathieu.webm"
			};						
	
	var nbVideos=videos.length;
	
	function getVideo(){
		var temp=videoIterator;
		if(nbVideos-1 == videoIterator){
			videoIterator = 0;
		}else{
			videoIterator++;
			
		}
                
                if(videoAI[temp] != undefined){
                    who = videoAI[temp];
                    whoName = videoName[who];
                }
                else{
                    who = '';
                    whoName = 'Inconnu';
                }
                
                return videos[temp];
	}
	
	function nexted(){
		$("#stopBtn").trigger("click");
		$('<p><b>Votre geek vous a flushé. Meilleure chance la prochaine fois.</b></p>').appendTo('#frame_conversation');
		$('#center').scrollTop($('#frame_conversation').height());
		statusBar.html("Comme un poisson mort, vous avez été flushé.");
		status = 0;
		$("#statusMessage").hide();
	}
});

function clearChat(){
	/* POUR FAIRE LA SAUVEGARDE*, CETTE FONCTION EST APPELLÉE POUR VIDER
		L'ÉCRAN DE CHAT, APRES UN STOP OU UN NEXT. */
		
	$("#frame_conversation").html("");	
}

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function postFromUser(msg){
    $.post('ajax/chat-submit', { name: 'Visiteur', message: msg } );
	$('<p><strong>Toi:</strong> '+msg+'</p>').appendTo('#frame_conversation');
	$('#center').scrollTop($('#frame_conversation').height());
}

function postFromAI(msg){
    $.post('ajax/chat-submit', { name: whoName, message: msg } );
    
    msg = msg.toString().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i, "<a href='$1' target='_blank'>$1</a>"); 
    
    $('<p><strong>' + whoName + ': </strong>'+msg+'</p>').appendTo('#frame_conversation');
    $('#center').scrollTop($('#frame_conversation').height());

    discussionIndex++;
}
