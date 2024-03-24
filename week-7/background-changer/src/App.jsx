import { Buttons } from './components/Buttons';
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { backgroundcolorAtom } from './store/atoms/backgroundcolorAtom';

function App() {
  return (
    <RecoilRoot>
      <Maindiv></Maindiv>
    </RecoilRoot>
  )
}


function Maindiv() {
  const bgColor = useRecoilValue(backgroundcolorAtom)
  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', display:"flex", justifyContent:"center" }}>
      <Buttons></Buttons>
    </div>
  )

}
export default App
