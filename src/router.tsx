import React from 'react'
import { Route, Routes } from 'react-router'
import { Layout } from './layout'
import { Home } from './pages/home'
import { Issues } from './pages/issues'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post">
          <Route path=":issue" element={<Issues />} />
        </Route>
      </Route>
    </Routes>
  )
}
