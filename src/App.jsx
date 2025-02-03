import React from 'react'

import { Route, Routes } from 'react-router'
import GithubSearch from './pages/GithubSearch'
import Counter from './pages/Counter'
import Products from './pages/Products'

export default function App() {
  return (
    <Routes>
      <Route index element={<GithubSearch />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  )
}
