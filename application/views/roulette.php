<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Poisson!</title>
	<link rel="stylesheet"  type="text/css" href="<?=base_url()?>/assets/css/style.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/jquery.layout.js"></script>
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/jquery.webcam.js"></script> 
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/functions.js"></script>
<script>
	//Camera stuff
	$(document).ready(function() {
		$("#user_video").webcam({
			width: 320,
			height: 240,
			mode: "stream",
			swffile: "<?=base_url()?>/assets/js/jscam_canvas_only.swf",
			//onTick: function() {},
			//onSave: function() {},
			//onCapture: function() {},
			//debug: function() {},
			//onLoad: function() {}
		});
	});
</script>	


</head>
<body>
	<div id="zone" class="ui-layout-center">
		<div id="center">
			<!--Fenêtre de discussion-->
			<div id="frame_conversation">
			Bienvenue sur roulette.
			</div>
		</div>
		
		<div id="south">
		<div style="position:relative">
		<div class="right"><button id="sendBtn">Envoyer</button></div>
		<div class="left">
			<textarea id="frame_input"></textarea>
		</div>
		</div>
		</div>
		
	</div>
	<div class="ui-layout-north">
	<!--Header-->
		<div id="logo">Logo</div>
		<div id="buttons">
			<button id="nextBtn">Démarrer</button>
			<button id="stopBtn">Arrêt</button>
			<div id="status_zone">
				Status: <span id="status">Arrêté.</span>
			</div>
		</div>
	</div>
	
	<div class="ui-layout-east">Publicité</div>
	
	<div class="ui-layout-west">
	<!--Fenêtres de vidéo-->
		<div class="video_zone">
			<div class="user_name">Ton nouvel ami geek</div>
			<div id="top_video" class="video_block"></div>
		</div>
		
		<div class="video_zone">
			<div class="user_name">Toi</div>
			<div id="user_video" class="video_block"></div>
		</div>
		
	</div>
</body>
</html>