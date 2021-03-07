import React from 'react'
import Lists from './pages/Lists'
import Light from './pages/Light'
import Group from './pages/Group'
import Rename from './pages/Light/Rename'

import useLights from './hooks/useLights'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default function App (props) {
  const { lights, setPower, setBright, setRGB, setCT } = useLights()
  return (
    <Router>
      <div className='w-full min-h-screen box-border bg-gray-800 text-white'>
        <Switch>
          <Route exact path='/'>
            <Lists
              {...{
                lights,
                setPower,
                setBright,
                setRGB,
                setCT
              }}
            />
          </Route>
          <Route path='/light/:id'>
            <Light
              {...{
                lights,
                setPower,
                setBright,
                setRGB,
                setCT
              }}
            />
          </Route>
          <Route path='/light/:id/rename'>
            <Rename
              {...{
                lights,
                setPower,
                setBright,
                setRGB,
                setCT
              }}
            />
          </Route>
          <Route path='/light-group/:id'>
            <Group
              {...{
                lights,
                setPower,
                setBright,
                setRGB,
                setCT
              }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
