import React, { Component } from 'react'
import CookieListItem from './CookieListItem'
import './CookieList.scss'

const cookies = [
  {
    id: 'almondbutter',
    title: 'Almond Butter',
    description: 'My almond butter cookie',
    img_url: './assets/images/almondbutter.webp'
  },
  {
    id: 'carrot',
    title: 'Carrot Cake',
    description: 'My carrot cake cookie',
    img_url: './assets/images/carrot.webp'
  },
  {
    id: 'chocolatechip',
    title: 'Chocolate Chip',
    description: 'My chocolate chip cookie',
    img_url: './assets/images/chocolatechip.webp'
  },
  {
    id: 'oatmealraisin',
    title: 'Oatmeal Raisin',
    description: 'My OR cookie',
    img_url: './assets/images/oatmealraisin.webp'
  },
  {
    id: 'peanutbutter',
    title: 'Peanut Butter',
    description: 'My PB cookie',
    img_url: './assets/images/peanutbutter.webp'
  },
  {
    id: 'snickerdoodle',
    title: 'Snickerdoodle',
    description: 'My snickerdoodle cookie',
    img_url: './assets/images/snickerdoodle.webp'
  }
]

class CookieList extends Component {
  render() {
    return (
      <div className="cookie-list">
        {cookies.map(c =>
          <CookieListItem
            key={c.id}
            title={c.title}
            description={c.description}
            image={c.img_url}
          />
        )}
      </div>
    )
  }
}

export default CookieList
