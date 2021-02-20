import React from 'react'
import Post from './Post'
import Banner from '../Banner'
import styled from 'styled-components'
import {setMaxWidth} from '../../themes/styles'
const Posts = ({posts, title}) => {
  return <Wrapper>
          <div className="posts">
            <h1 className="posts-title">
              {title}
            </h1>
            <div className="posts-center">
              {/* posts column */}
              <article>
                  {posts.map(post=> {
                    return <Post key={post.id} {...post}/>
                  })}
              </article>
                      {/* aside about column */}
              <article>
                <Banner/>
              </article>
            </div>
          </div>
        </Wrapper>
}


const Wrapper = styled.section`
.posts {
  width: 85vw;
  max-width: ${setMaxWidth};
  margin: 0 auto;
  margin-bottom: 4rem;
}
.posts-title {
  font-weight: 700;
  text-transform: uppercase;
  color: ${({theme}) => theme.hotPink};
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
}
@media screen and (min-width: 992px) {
  .posts {
    width: 92vw;
  }
}
@media screen and (min-width: 1170px) {
  .posts-center {
    display: grid;
    grid-template-columns: 1fr 250px;
    column-gap: 1rem;
  }
}
`
export default Posts
