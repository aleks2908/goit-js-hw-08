import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const lastCurrentTime = localStorage.getItem('videoplayer-current-time');

if (lastCurrentTime) {
  player.setCurrentTime(lastCurrentTime);
};

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);