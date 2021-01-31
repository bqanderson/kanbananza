import React from 'react'
import List from './List'

const Lists = ({ lists = [] }) => {
  return (
    <section className="Lists">
      {lists.map((list, index) => (
        <List key={index} />
      ))}
    </section>
  )
}

export default Lists
