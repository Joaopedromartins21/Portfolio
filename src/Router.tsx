import { Routes, Route } from 'react-router-dom'
import { App } from './App'

import { Dev } from './page/PageDev'


export function Router(){
    return (
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/dev' element={<Dev />} />
        </Routes>
    )
}