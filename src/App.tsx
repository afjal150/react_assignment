import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Explore from "./components/Explore"
import Footer from "./components/Footer"
import Languages from "./components/Languages"
import Nav from "./components/Nav"
import Privacy from "./components/Privacy"
import type { ILanguageTypes } from "./Types/languagetypes"


const usersFetch = async(): Promise<ILanguageTypes[]> =>   {
  const response = await fetch("/public/data.json");
  const data = await response.json();
  return data;
}
  

function App() {
  const usersPromise = usersFetch();

      const [stack, setstack] = useState<ILanguageTypes[]>([]);


 return (
  <>
  <Nav></Nav>
    <Banner></Banner>
  <div className="m-8"></div>
    <Explore></Explore>

    <Suspense fallback={<h3>Loading.......</h3>}>
        <Languages usersPromise={usersPromise} stack={stack} setstack={setstack}></Languages>
    </Suspense>



     <div className="divider"></div>
    <Footer></Footer>
     <div className="divider"></div>
     <Privacy></Privacy>
  </>
 )
}

export default App
