import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const NotFound = () => (
  <main className="page-head" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
    <div className="wrap">
      <h1 className="grad-text">404</h1>
      <p style={{ margin: '1rem auto 2rem' }}>This page doesn't exist. Let's get you back to the portfolio.</p>
      <Link to="/" className="btn btn-primary"><FaArrowLeft size={13} /> Back home</Link>
    </div>
  </main>
)

export default NotFound
