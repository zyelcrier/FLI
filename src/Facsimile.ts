// This is the driver/ main of the code
import DataFrame from 'dataframe-js';
import {Markov} from './Markov';
import path from "path"

function getSongs(df: DataFrame){
  console.log('Inside get songs method');
  let songs:string[] = df.toArray();
  console.log('Lyrics retrived for '+songs.length+' songs');
  return songs;
}

async function main(){
  let albumPath = path.resolve(__dirname, '../../DataFiles/Syre_Jaden.csv');
  try{
    let df = await DataFrame.fromCSV(albumPath);
    //df.show();
    let df2 =  df.select('Lyrics');
    let songs = getSongs(df2);
    //console.log(`Here are songs: ${songs}`);
    let chain: Markov = new Markov(songs);
    console.log(`Here is the chain:\n`);
    chain.print();
    //chain.printKeys();
    //console.log(chain.getSet(`'\n' , '\n' `));
  }catch(err){
    console.error(err);
  } 
}

main();