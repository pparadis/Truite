<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>GeekRoulette.ca - L'endroit par excellence pour vos blind-dates geeks et hétéros</title>
    <meta name="description" content="L'endroit par excellence pour vos blind-dates geeks et hétéros" />
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link rel="stylesheet"  type="text/css" href="<?=base_url()?>/assets/css/style.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/jquery.layout.js"></script>
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/jquery.webcam.js"></script> 
	<script type="text/JavaScript" src="<?=base_url()?>/assets/js/jquery.jplayer.min.js"></script> 
    <meta property="og:image" content="/share-facebook.png"/>  
    
</head>
<body>
	<div id="zone" class="ui-layout-center">
		<div id="center" style="position:relative;">
            <!--Fenêtre de discussion-->
            <div id="frame_conversation">
                <p style="margin-bottom:10px;">Bienvenue sur <strong>GeekRoulette.ca</strong>, l'endroit par excellence pour vos blind-dates geeks et hétéros, comme quoi ça peut être facile pour un geek de se faire de nouveaux amis.</p><p style="font-weight: bold">À propos du service:</p>
                <ul>
                    <li>Il est défendu de montrer sa bizoune (aussi grosse soit-elle).</li>
                    <li>Il n'est pas défendu d'être topless si vous êtes une femme âgée entre 20 à 25 ans.</li>
                    <li>Il n'est pas nécessaire d'avoir une bonne haleine pour chatter, mais nous vous conseillons fortement d'au moins mâcher une gomme à la menthe afin de ne pas brûler les pixels de votre écran.</li>
                    <li>Les invocations sataniques sont interdites les lundis et jeudis.</li>
					<li>L'équipe se réserve le droit de monitorer vos conversations, pour but d'analyse geek.</li>
                </ul>
                <p style="font-weight: bold">Comment faire la discussion à un geek:</p>
                <ul>
                    <li>Jasez de votre sorte de chips préférée.</li>
                    <li>Demandez à votre geek de convertir un nombre en binaire.</li>
                    <li>Lancez un débat; Sega ou Nintendo? Pirate ou ninja? Star Wars ou Star Trek? Crémeuse ou traditionnelle? Le sens du rouleau de papier de toilette : extérieur ou intérieur? Chrome ou IE? (lol)</li>
                </ul>			
                <p style="font-size: 16px; margin: 20px 0">Appuyez sur <b style="color: #0f7b0d">Démarrer</b> pour commencer.</p>
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
	
	<div class="ui-layout-east">
        <h4>GeekRoulette est une réalisation de : </h4>
        <ul style="list-style-type: none; padding:0; margin:0;">
            <li style="padding-bottom:5px;"><a href="#">Jean-François Gagné-Bérubé</a> (<a href="#">FailQC</a>)</li>
            <li style="padding-bottom:5px;"><a href="http://code18.blogspot.ca/">Code18</a></li>
            <li style="padding-bottom:5px;"><a href="http://frenchcoding.com/about/">Pascal Paradis</a></li>
            <li style="padding-bottom:5px;"><a href="#">Saymone P.</a></li>
        </ul>
    </div>
	
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