import React from 'react'

const Services = () => {
    const aser = ['one', 'two', 'three', 'four', 'five', 'six'];
  return (
    <div>
        {
        aser.map(lister => {
           return <li>"service" + {lister}</li>
        })
        }
    </div>
  )
}

export default Services;