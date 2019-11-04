class Helper {
  playPauseAndUpdate(song) {
    const totalTime = player.getDuration();
    $('#time-control .total-time').text( totalTime );
    player.playPauseAndUpdate (song);
  }
}
const helper = new Helper();
