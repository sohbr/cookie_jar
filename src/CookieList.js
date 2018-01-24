import React, { Component } from 'react'
import CookieListItem from './CookieListItem'
import './CookieList.scss'
import './assets/images/almondbutter.webp'
import './assets/images/carrot.webp'
import './assets/images/chocolatechip.webp'
import './assets/images/oatmealraisin.webp'
import './assets/images/peanutbutter.webp'
import './assets/images/snickerdoodle.webp'
import './assets/images/pecansandie.webp'
import './assets/images/sugar.webp'
import './assets/images/oreo.webp'
import './assets/images/doublechoco.webp'
import './assets/images/assorted.webp'
import './assets/images/white.webp'

const cookies = [
  {
    id: 'assorted',
    title: 'Assorted',
    description: 'My assorted cookies',
    img_url: './static/media/assorted.webp'
  },
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
    id: 'chocolatechipwalnut',
    title: 'Chocolate Chip Walnut',
    description: 'My chocolate chip walnut cookie',
    img_url: './static/media/chocolatechip.webp'
  },
  {
    id: 'doublechocolatechipwalnut',
    title: 'Double Chocolate Chip Walnut',
    description: 'My double chocolate chip walnut cookie',
    img_url: './static/media/doublechoco.webp'
  },
  {
    id: 'oatmealraisin',
    title: 'Oatmeal Raisin',
    description: 'My OR cookie',
    img_url: './static/media/oatmealraisin.webp'
  },
  {
    id: 'oreo',
    title: 'Oreo',
    description: 'My oreo cookie',
    img_url: './static/media/oreo.webp'
  },
  {
    id: 'peanutbutter',
    title: 'Peanut Butter',
    description: 'My PB cookie',
    img_url: './static/media/peanutbutter.webp'
  },
  {
    id: 'pecansandie',
    title: 'Pecan Sandie',
    description: 'My pecan sandie cookie',
    img_url: './static/media/pecansandie.webp'
  },
  {
    id: 'snickerdoodle',
    title: 'Snickerdoodle',
    description: 'My snickerdoodle cookie',
    img_url: './static/media/snickerdoodle.webp'
  },
  {
    id: 'sugar',
    title: 'Sugar',
    description: 'My sugar cookie',
    img_url: './static/media/sugar.webp'
  },
  {
    id: 'whitechocolatewalnut',
    title: 'White Chocolate Walnut',
    description: 'My white chocolate walnut cookie',
    img_url: './static/media/white.webp'
  }
]

class CookieList extends Component {
  render() {
    return (
      <ul className="cookie-list">
        {cookies.map(c => (
          <CookieListItem
            key={c.id}
            title={c.title}
            description={c.description}
            image={c.img_url}
          />
        ))}
      </ul>
    )
  }
}

export default CookieList
