import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id, imageUrl, avatarUrl, author, topic, title} = eachItem
  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
