
import './App.css'
import  Menu  from './components/Menu'
import { Sidebar } from './components/Sidebar'
import { AlbumGrid } from './components/AlbumGrid'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Menu />
      <div className="container-fluid black-container">
        <div className="row">
          <div className="col-md-2 dark">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/personajes"
                element={<AlbumGrid type="personajes" />} />
              <Route path="/hechizos"
                element={<AlbumGrid type="hechizos" />} />
              <Route path="/"
                element={<AlbumGrid type="default" />} />
              <Route path="/personajes/:casa"
                element={<AlbumGrid type="casa" />} />
            </Routes>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
