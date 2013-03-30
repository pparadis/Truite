//Javasript file

//Layout stuff
$(document).ready(function () {
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
	myLayout2.sizePane("south", 60);
	
	
	
	//Roulette management
	var status = 0; //0=stopped 1=loading new partner 2=connected to someone
	var nextBtn = $("#nextBtn");
	var stopBtn = $("#stopBtn");
	var statusBar = $("#status");

	nextBtn.click(function(e){
		if(status == 0){
			$(this).attr("disabled", "disabled");
			$(this).html("Chargement...");
			statusBar.html("Recherche un partenaire...");
			//Simulating loading time randomly between 3 and 7 seconds
			setTimeout(function(){
				nextBtn.removeAttr("disabled");
				nextBtn.html("Suivant");
				//alert("new partner found");
				statusBar.html("En discussion avec un geek inconnu.");
			},getRandomInt(3000,7000));
		}
	});
	
	stopBtn.click(function(e){
		nextBtn.removeAttr("disabled");
		nextBtn.html("Démarrer");
		statusBar.html("Arrêté.");
	});
	
	//Detect Enter when textarea is selected
	$("#frame_input").keyup(function(event){
			if(event.keyCode == 13){
				chatMsg = $(this).val();
				if(chatMsg != ""){					
					postFromUser(chatMsg);
					$("#frame_input").val('');
				}
			}
		});
});

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function postFromUser(msg){
	$('<p class="informateur"><strong>Toi:</strong> '+msg+'</p>').appendTo('#frame_conversation');
	$("#frame_conversation").prop({ scrollTop: $("#frame_conversation").prop("scrollHeight") });
}

function postFromAI(msg){
	$('<p class="informateur"><strong>Inconnu: </strong>'+msg+'</p>').appendTo('#frame_conversation');
	$("#frame_conversation").prop({ scrollTop: $("#frame_conversation").prop("scrollHeight") });
}
