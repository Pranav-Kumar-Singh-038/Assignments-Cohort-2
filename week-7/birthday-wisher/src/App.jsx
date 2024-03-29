import {RecoilRoot} from 'recoil';
import {CardMaker} from "./components/CardMaker"
import { BirthdayCard } from "./components/BirthdayCard";


function App() {
  return (
     <RecoilRoot>
      <CardMaker></CardMaker>
      {/* <BirthdayCard></BirthdayCard> */}
     </RecoilRoot>
  )
}

export default App
