import { Console } from "console";

export class Markov{
  //chain: any = {};
  chain: Map<string,Set<string>> = new Map<string,Set<string>>();

  constructor(songs:string[]){
    //diffence between in and of
    for(let song of songs){
      song = JSON.stringify(song).toLocaleLowerCase();
      let pref1: string = '\n';
      let pref2: string = '\n';
      let val: string = '';

      let lines: string[] = song.split('\\n'); //had to escape so that is was look for the \n characters
      for(let line of lines){
        line = line.replace(/[^A-Za-z0-9\-\' ]/g, ''); // /g is a global qaulifier to match more than one instance
        line = line.trim();

        let words: string[] = line.split(' ');
        for(let word of words){
          val = word;
          let key: string = `${pref1} , ${pref2}`;

          if(!this.chain.has(key)){//Check that the chain doesnt have the key then adds it
            let tset: Set<string> = new Set<string>([val]);
            this.chain.set(key,tset);
          }else{//chain has current key now check if the curent word is in that key
            //? and ! null check operators look it up
            this.chain.set(key,this.chain.get(key)!.add(word));
          }
          pref1 = pref2; 
          pref2 = val;
        }
      }
    }
    
  }

  print():void{
    console.log(this.chain);
  }

  printKeys():void{
    console.log(this.chain.keys());
  }

  getSet(key:string):Set<string>{
    return this.chain.get(key)!;
  }
  
}