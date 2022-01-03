import {connect, styled} from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({state, item}) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">
            <Link link={item.link}>
              {state.theme.featured.showOnList && (
                <FeaturedMedia id={item.featured_media}/>
              )}
              <Title dangerouslySetInnerHTML={{__html: item.acf.name}}/>
            </Link>
          </h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$ {item.acf.price}</h1>
          <div>
            {author && (
              <StyledLink link={author.link}>
                <AuthorName>
                  By <b>{author.name}</b>
                </AuthorName>
              </StyledLink>
            )}
            <PublishDate>
              {" "}
              on <b>{date.toDateString()}</b>
            </PublishDate>
          </div>
          <div>
            {/* If the post has an excerpt (short summary text), we render it */}
            {item.excerpt && (
              <Excerpt dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}/>
            )}
          </div>
          <a
            href={item.link}
            className="w-100 btn btn-lg btn-outline-primary">View</a>
        </div>
      </div>
    </div>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.p`
  font-size: 14px;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
