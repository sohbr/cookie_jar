import React, { Component } from 'react'
import CookieListItem from './CookieListItem'
import './CookieList.scss'
import './assets/images/almondbutter.webp'
import './assets/images/carrot.webp'
import './assets/images/chocolatechip.webp'
import './assets/images/oatmealraisin.webp'
import './assets/images/peanutbutter.webp'
import './assets/images/snickerdoodle.webp'

const cookies = [
  {
    id: 'almondbutter',
    title: 'Almond Butter',
    description: 'My almond butter cookie',
    img_url: './static/media/almondbutter.webp'
  },
  {
    id: 'carrot',
    title: 'Carrot Cake',
    description: 'My carrot cake cookie',
    img_url: './static/media/carrot.webp'
  },
  {
    id: 'chocolatechip',
    title: 'Chocolate Chip',
    description: 'My chocolate chip cookie',
    img_url: './static/media/chocolatechip.webp'
  },
  {
    id: 'oatmealraisin',
    title: 'Oatmeal Raisin',
    description: 'My OR cookie',
    img_url: './static/media/oatmealraisin.webp'
  },
  {
    id: 'peanutbutter',
    title: 'Peanut Butter',
    description: 'My PB cookie',
    img_url: './static/media/peanutbutter.webp'
  },
  {
    id: 'snickerdoodle',
    title: 'Snickerdoodle',
    description: 'My snickerdoodle cookie',
    img_url: './static/media/snickerdoodle.webp'
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
