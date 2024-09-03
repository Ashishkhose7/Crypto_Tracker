import { coinsData, globalData, imageData, newsData } from "../actions";
import Dashboard from "../Components/Dashbaord/Dashboard";
export default async function Home() {
  const {globalstats} =  await globalData();
  const {coinsstats} = await coinsData();
  const {newsstats} = await newsData();
  const {imagestats} = await imageData();

  const imgdata = [];
  if(imagestats){
    for (const key in imagestats.photos) {
      imgdata.push(imagestats.photos[key].src.medium);
    }
  }

  return (
    <>
      {/* <head>
        <title>KRYPTo - Dashboard</title>
      </head> */}
      <main>
        <Dashboard globaldata={globalstats?.data} coinsdata={coinsstats?.data?.coins.slice(0, 10)} newsdata={newsstats} imgurls={imgdata}/>
      </main>
    </>
  );
}
