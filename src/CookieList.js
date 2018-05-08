import React, { Component } from 'react'
import CookieListItem from './CookieListItem'
import StarDivider from './StarDivider'

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
    headline: 'My delicious assorted cookies',
    description:
      'A long, detailed description explaining why my assorted cookies is the best in the whole world.',
    img_url: './static/media/assorted.webp'
  },
  {
    id: 'almondbutter',
    title: 'Almond Butter',
    headline: 'My delicious almond butter cookie',
    description:
      'A long, detailed description explaining why my almond butter cookie is the best in the whole world.',
    img_url: './static/media/almondbutter.webp'
  },
  {
    id: 'carrot',
    title: 'Carrot Cake',
    headline: 'My delicious carrot cake cookie',
    description:
      'A long, detailed description explaining why my carrot cake cookie is the best in the whole world.',
    img_url: './static/media/carrot.webp'
  },
  {
    id: 'chocolatechip',
    title: 'Chocolate Chip',
    headline: 'My delicious chocolate chip cookie',
    description:
      'A long, detailed description explaining why my chocolate chip cookie is the best in the whole world.',
    img_url: './static/media/chocolatechip.webp'
  },
  {
    id: 'chocolatechipwalnut',
    title: 'Chocolate Chip Walnut',
    headline: 'My delicious chocolate chip walnut cookie',
    description:
      'A long, detailed description explaining why my chocolate chip walnut cookie is the best in the whole world.',
    img_url: './static/media/chocolatechip.webp'
  },
  {
    id: 'doublechocolatechipwalnut',
    title: 'Double Chocolate Chip Walnut',
    headline: 'My delicious double chocolate chip walnut cookie',
    description:
      'A long, detailed description explaining why my double chocolate chip walnut cookie is the best in the whole world.',
    img_url: './static/media/doublechoco.webp'
  },
  {
    id: 'oatmealraisin',
    title: 'Oatmeal Raisin',
    headline: 'My delicious OR cookie',
    description:
      'A long, detailed description explaining why my OR cookie is the best in the whole world.',
    img_url: './static/media/oatmealraisin.webp'
  },
  {
    id: 'oreo',
    title: 'Oreo',
    headline: 'My delicious oreo cookie',
    description:
      'A long, detailed description explaining why my oreo cookie is the best in the whole world.',
    img_url: './static/media/oreo.webp'
  },
  {
    id: 'peanutbutter',
    title: 'Peanut Butter',
    headline: 'My delicious PB cookie',
    description:
      'A long, detailed description explaining why my PB cookie is the best in the whole world.',
    img_url: './static/media/peanutbutter.webp'
  },
  {
    id: 'pecansandie',
    title: 'Pecan Sandie',
    headline: 'My delicious pecan sandie cookie',
    description:
      'A long, detailed description explaining why my pecan sandie cookie is the best in the whole world.',
    img_url: './static/media/pecansandie.webp'
  },
  {
    id: 'snickerdoodle',
    title: 'Snickerdoodle',
    headline: 'My delicious snickerdoodle cookie',
    description:
      'A long, detailed description explaining why my snickerdoodle cookie is the best in the whole world.',
    img_url: './static/media/snickerdoodle.webp'
  },
  {
    id: 'sugar',
    title: 'Sugar',
    headline: 'My delicious sugar cookie',
    description:
      'A long, detailed description explaining why my sugar cookie is the best in the whole world.',
    img_url: './static/media/sugar.webp'
  },
  {
    id: 'whitechocolatewalnut',
    title: 'White Chocolate Walnut',
    headline: 'My delicious white chocolate walnut cookie',
    description:
      'A long, detailed description explaining why my white chocolate walnut cookie is the best in the whole world.',
    img_url: './static/media/white.webp'
  }
]

class CookieList extends Component {
  render() {
    return (
      <div className="cookies">
        <h2>COOKIES</h2>
        <StarDivider />
        <ul className="cookie-list">
          {cookies.map(c =>
            <CookieListItem
              key={c.id}
              title={c.title}
              headline={c.headline}
              description={c.description}
              image={c.img_url}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default CookieList
