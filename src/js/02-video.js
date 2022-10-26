import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = "videoplayer-current-time";
   const iframe = document.querySelector('iframe');
const player = new Player(iframe);
storage(); 
player.on('timeupdate', throttle(timeLine, 1000));

		
function timeLine(data) {
	 const dataPosition = data.seconds;
		 localStorage.setItem(STORAGE_KEY, dataPosition);
		 console.log(dataPosition);
}


function storage() {
	if (!localStorage.getItem(STORAGE_KEY)) {
		player.setCurrentTime(0);
	} else {
		player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
	}
}





				  
