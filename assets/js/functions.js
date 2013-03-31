//Javasript file

$(document).ready(function () {

	// LAYOUT //
	var myLayout = $('body').layout({ 
		applyDemoStyles: true, 
		north: {
				size:"80"
			},
		west: {
				size:"350"
			},
		east: {
				size:"200"
			},
		
	});
	
	var myLayout2 = $('#zone').layout({
		applyDemoStyles: true,
		center__paneSelector:  "#center",
		south__paneSelector:   "#south",
		spacing_open: 6,
		spacing_closed: 6,
	});
	myLayout2.sizePane("south", 100);
	
	
	
	//Roulette management
	var timer;
	var status = 0; //0=stopped 1=loading new partner 2=connected to someone
	var nextBtn = $("#nextBtn");
	var stopBtn = $("#stopBtn");
	var statusBar = $("#status");

	nextBtn.click(function(e){
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
				//alert("new partner found");
				statusBar.html("En discussion avec un geek inconnu.");
				$("#frame_conversation").html("<b>Vous êtes connecté à un nouveau geek. Parler, vous pouvez.</b>");
				$("#player").jPlayer("play");
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
				//alert("new partner found");
				statusBar.html("En discussion avec un geek inconnu.");
				$("#frame_conversation").html("<b>Vous êtes maintenant connecté à un nouveau geek. Parler, vous pouvez.</b>");
				$("#player").jPlayer("play");
				status = 2;
			},getRandomInt(3000,7000));
		}
	});
	
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
                    webcamTimerId = window.setInterval(is_webcam_started, 1000);
                }
	});
        
	function is_webcam_started(){                       
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
			nexted();
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
	videos[0] = {
				mp4: "http://creatik.ca/poisson/assets/videos/dizzy.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/dizzy.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/dizzy.webm"
			};
	videos[1] = {
				mp4: "http://creatik.ca/poisson/assets/videos/pascal.mp4",
				ogv: "http://creatik.ca/poisson/assets/videos/pascal.ogv",
				webmv: "http://creatik.ca/poisson/assets/videos/pascal.webm"
			};
			
	
	var nbVideos=videos.length;
	
	function getVideo(){
		var temp=videoIterator;
		if(nbVideos-1 == videoIterator){
			videoIterator = 0;
			return videos[temp];
		}else{
			videoIterator++;
			return videos[temp];
		}
	}
	
	function nexted(){
		$("#stopBtn").trigger("click");
		$('<p><b>Votre geek vous a flushé. Meilleure chance la prochaine fois.</b></p>').appendTo('#frame_conversation');
		statusBar.html("Vous avez été flushé.");
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
	$("#frame_conversation").prop({ scrollTop: $("#frame_conversation").prop("scrollHeight") });
}

function postFromAI(msg){
        $.post('ajax/chat-submit', { name: 'AI', message: msg } );
	$('<p><strong>Inconnu: </strong>'+msg+'</p>').appendTo('#frame_conversation');
	$("#frame_conversation").prop({ scrollTop: $("#frame_conversation").prop("scrollHeight") });
}
