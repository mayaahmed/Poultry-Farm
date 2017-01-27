var string1= "Apoopan had a burning desire to eat chicken.";
var string2= "One day he said  'There is a goddess living in the Pipal tree.'"; 
var string3= " 'If you cook chicken and offer it to the goddess,' ";
var string4= " 'your chicken farm will grow by leaps and bounds. You must cook it with great care.' ";







	

			function checkCompatibilty () {
				if(!('speechSynthesis' in window)){
					alert('Your browser is not supported. If google chrome, please upgrade!!');
				}
			};

			checkCompatibilty();

			var voiceOptions = document.getElementById('voiceOptions');
			var volumeSlider = document.getElementById('volumeSlider');
			var rateSlider = document.getElementById('rateSlider');
			var pitchSlider = document.getElementById('pitchSlider');
var myText = document.getElementById('myText');

			var voiceMap = [];

			function loadVoices () {
				var voices = speechSynthesis.getVoices();
				for (var i = 0; i < voices.length; i++) {
					var voice = voices[i];
					var option = document.createElement('option');
					option.value = voice.name;
					option.innerHTML = voice.name;
					voiceOptions.appendChild(option);
					voiceMap[voice.name] = voice;
				};
			};

			window.speechSynthesis.onvoiceschanged = function(e){
				loadVoices();
			};



function initializeMsg(msg){
  msg.volume = volumeSlider.value;
				msg.voice = voiceMap[voiceOptions.value];
                msg.rate = rateSlider.value;
				msg.Pitch = pitchSlider.value;
}

function speak(){
                
                var msg1 = new SpeechSynthesisUtterance();
                initializeMsg(msg1);
				msg1.text = string1;
				window.speechSynthesis.speak(msg1);

var msg2 = new SpeechSynthesisUtterance();
                initializeMsg(msg2);
				msg2.text = string2;
				window.speechSynthesis.speak(msg2);
var msg3 = new SpeechSynthesisUtterance();
                initializeMsg(msg3);
				msg3.text = string3;
				window.speechSynthesis.speak(msg3);
                
   var msg4 = new SpeechSynthesisUtterance();
                initializeMsg(msg4);
				msg4.text = string4;
				window.speechSynthesis.speak(msg4);           
                
};


			

speak();

function stop(){
speechSynthesis.cancel();
}

function pause(){
speechSynthesis.pause();
}

function resume(){
speechSynthesis.resume();
}
