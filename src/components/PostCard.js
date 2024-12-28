import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import moment from 'moment'
import { featuredImagePropTypes } from '../proptypes'

const Moment = moment().constructor

const PostCard = ({ count, image, slug, pageTitle, date, teaser }) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <article ref={ref}>
      <img src={!!image ? image.d.childImageSharp.fluid.src : '/img/default-blog-thumb-01.webp'} alt={image.alt} width="470" height="250" />
      <Link to={slug} className="title">{pageTitle}</Link>
      {!!date && (
        <p className="date" dateTime={date.format('YYYY-MM-DD')}>
          {date.format('MMM D, YYYY')}
        </p>
      )}
      <p>{teaser}</p>
    </article>
  )
}

export const postPropTypes = {
  count: PropTypes.number.isRequired,
  image: featuredImagePropTypes,
  slug: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Moment),
  teaser: PropTypes.string,
}

PostCard.propTypes = postPropTypes

export default PostCard
