import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const lastCurrentTime = localStorage.getItem('videoplayer-current-time');

if (lastCurrentTime) {
    // console.log('​lastCurrentTime', lastCurrentTime);
    player
      .setCurrentTime(lastCurrentTime)
      .then(function (seconds) {
        // seconds = the actual time that the player seeked to
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });
};

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    // console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', seconds);
    // 'videoplayer-current-time';
  }, 1000)
);








    // const iframe = document.querySelector('iframe');
    // const player = new Vimeo.Player(iframe);
