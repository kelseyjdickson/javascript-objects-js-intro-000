let playlist = {
  Beyonce : 'Single Ladies',
  JLo: 'Get Loud'
}

function updatePlaylist(playlist,artist,song){
   return Object.assign({}, playlist, { [artist]: song })
}
