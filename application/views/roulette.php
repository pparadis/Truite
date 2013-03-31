<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>GeekRoulette.ca - L'endroit par excellence pour vos blind-dates geeks et hétéros</title>
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link rel="stylesheet"  type="text/css" href="<?=base_url()?>/assets/css/style.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/jquery.layout.js"></script>
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/jquery.webcam.js"></script> 
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/jquery.jplayer.min.js"></script> 
    
</head>
<body>
	<div id="zone" class="ui-layout-center">
		<div id="center" style="position:relative;">
            <!--Fenêtre de discussion-->
            <div id="frame_conversation">
                <p style="margin-bottom:10px;">Bienvenue sur GeekRoulette.ca, l'endroit par excellence pour vos blind-dates geeks et hétéros, comme quoi ça peut être facile pour un geek de se faire de nouveaux amis.</p><p>À propos du service:</p>
                <ul>
                    <li>Il est défendu de montrer sa bizoune.</li>
                    <li>Les invocations sataniques sont interdites les lundis et jeudis.</li>
					<li>L'équipe se réserve le droit de monitorer vos conversations, pour but d'analyse geek.</li>
                </ul>
                <p>Comment faire la discussion à un geek:</p>
                <ul>
                    <li>Jasez de votre sorte de chips préférée.</li>
                    <li>Demandez à votre geek de convertir un nombre en binaire.</li>
                    <li>Lancez un débat; Sega ou Nintendo? Pirate ou ninja? Chrome ou IE? (lol)</li>
                </ul>			
                <p>Appuyez sur <b>Démarrer</b> pour commencer.</p>
            </div>
            <div id="statusMessage">
                Réponse en cours d'écriture
            </div>
		</div>
		
		<div id="south">
            <div class="left">
                <textarea id="frame_input" disabled="disabled" rows="3"></textarea>
                <button id="sendBtn" disabled="disabled" class="btn btn-large btn-primary">Envoyer</button>
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
			<div id="top_video" class="video_block"><div id="player" class="jp-jplayer"></div><div id="video_shield"></div></div>
		</div>
		
		<div class="video_zone">
			<div class="user_name">Toi</div>
			<div id="user_video" class="video_block"></div>
		</div>
		
	</div>

    <script src="/assets/js/bootstrap.min.js"></script>
    <script type="text/JavaScript" src="<?=base_url()?>/assets/js/functions.js"></script>
    <script type="text/JavaScript" src="<?=base_url()?>/assets/js/chat.js"></script>
	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-39743030-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
</body>
</html>