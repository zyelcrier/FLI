// This is the driver/ main of the code
import DataFrame from "dataframe-js";
import {Markov} from './Markov';
import path from "path"

function getSongs(df: DataFrame){
  console.log('Inside get songs');
  let songs:string[] = df.toArray();
  console.log('Lyrics retrived for '+songs.length+" songs");
  return songs;
}

async function main(){
  let albumPath = path.resolve(__dirname, "../../DataFiles/Syre_Jaden.csv")
  try{
    let df = await DataFrame.fromCSV(albumPath);
    df.show();
    let df2 =  df.select("Lyrics");
    let songs = getSongs(df2);
    console.log(songs)
  }catch(err){
    console.error(err);
  } 
}

main();
// print(df1)
//songs = df1['Lyrics']
// print(type(songs))
// 
// chain = Markov.MarkovChain(songs)
// #print(chain)