import React, { Component } from 'react'
import CookieListItem from './CookieListItem'
import './CookieList.scss'

const cookies = [
  {
    title: 'Almond Butter',
    description: 'My almond butter cookie',
    img_url: './assets/images/almondbutter.webp'
  },
  {
    title: 'Carrot Cake',
    description: 'My carrot cake cookie',
    img_url: './assets/images/carrot.webp'
  },
  {
    title: 'Chocolate Chip',
    description: 'My chocolate chip cookie',
    img_url: './assets/images/chocolatechip.webp'
  },
  {
    title: 'Oatmeal Raisin',
    description: 'My OR cookie',
    img_url: './assets/images/oatmealraisin.webp'
  }
]

class CookieList extends Component {
  render() {
    return (
      <div className="cookie-list">
        {cookies.map(c =>
          <CookieListItem
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
