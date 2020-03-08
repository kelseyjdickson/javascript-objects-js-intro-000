let playlist = {
  Beyonce : 'Single Ladies',
  JLo: 'Get Loud'
}

function updatePlaylist(playList,artist,song){
   return Object.assign({}, playlist, { [artist]: song })
}
