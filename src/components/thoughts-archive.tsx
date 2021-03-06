/** @jsx jsx */
import { Container, Themed, jsx, Flex } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import RSS from "../icons/rss"
import { Circle, Donut } from "./shapes"
import { CopyBlock, dracula } from "react-code-blocks";

type ThoughtQueryProps = {
  thoughts: {
    totalCount: number
    nodes: {
      title: string
      slug: string
      date: string
      info: string
    }[]
  }
}

const ThoughtsArchive = () => {
  const { thoughts } = useStaticQuery<ThoughtQueryProps>(graphql`
    query {
      thoughts: allThought(sort: { fields: date, order: DESC }) {
        totalCount
        nodes {
          slug
          title
          info
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  `)

  return (
    <section data-name="newsletter-archive">
      <Container>
        <div sx={{ display: `flex`, alignItems: `center`, flexWrap: `wrap` }}>
          <Themed.h2 sx={{ mr: 3 }}> Projects and More! </Themed.h2>
        </div>
        <Themed.p>I have got a chance to work on various projects in my Master's journey and professional life. Along with that, curiosity to learn has led me to explore other repositories on Github. Don't forget to read my experience experimenting with those! Happy reading. 😊 </Themed.p>
        <div sx={{ my: 5 }}>
          {thoughts.nodes.map((entry, index) => (
            <div key={`${entry.title}-${entry.date}`} sx={{ mb: [4], position: `relative` }}>
              <div
                aria-hidden
                sx={{
                  position: `absolute`,
                  left: `-2rem`,
                  fontSize: `5rem`,
                  fontWeight: `bold`,
                  color: `primary`,
                  top: `-2rem`,
                  zIndex: -1,
                  opacity: 0.06,
                }}
              >
                {thoughts.totalCount - index}
              </div>
              <Flex
                sx={{
                  mb: [3, 2],
                  flexWrap: `wrap`,
                  alignItems: [`flex-start`, `center`],
                  flexDirection: [`column`, `row`],
                }}
              >
                <Themed.a
                  as={Link}
                  to={entry.slug}
                  sx={{
                    fontWeight: `semibold`,
                    mr: 3,
                    color: `text`,
                    "&:hover": { color: `primary` },
                    fontSize: [1, 2],
                  }}
                >
                  {entry.title}
                </Themed.a>
                <div sx={{ mr: 3, display: [`none`, `block`], color: `primary` }}>•</div>
                <div sx={{ fontSize: 1, fontStyle: [`italic`, `normal`], color: `text` }}>{entry.date}</div>
              </Flex>
              <div sx={{ fontSize: 1 }}>{entry.info}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ThoughtsArchive
