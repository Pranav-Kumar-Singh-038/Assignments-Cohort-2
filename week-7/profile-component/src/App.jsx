import './App.css'
import { Profile } from './components/Profile'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <div>
      <RecoilRoot>    
        <Profile ></Profile>
      </RecoilRoot>
    </div>
  )
}

export default App
