export class Markov{
  chain: any = {};

  constructor(songs:string[]){
    for(let song in songs){
      var pref1 = '\n'
      var pref2 = '\n'
      var val = ''
      for(var line in song.split('\n')){
        line = line.replace('[^A-Za-z0-9-\']', ' ')
        // line = line.replace('  ', ' ')
        for(var word in line.split(' ')){
          var val = word
          var key = [pref1, pref2]
          if(!this.chain.hasOwnProperty(key)){
            this.chain.key = {val:1}
          }
          else{
            if(word in this.chain.key){
              this.chain.key.word+=1
            }
            else{
              this.chain.key.word =1
            }
          }
          pref1 = pref2 
          pref2 = val
        }
      }
    }
    
  }
  //The equivalent to a to string
  // def __repr__(self):
  // return  str(self.chain)

}