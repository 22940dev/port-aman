import React from "react"
import { Global } from "@emotion/react"
import { Themed,Flex, Box, useColorMode } from "theme-ui"
import SEO from "./seo"
import Header from "./header"
import "../fonts/benguiat.css"

type LayoutProps = { children: React.ReactNode; className?: string; thought?: boolean }

const Layout = ({ children, className = ``, thought = false }: LayoutProps) => {
  const [mode] = useColorMode()

  let headingStyles = {}

  if (mode === `strangerThings`) {
    headingStyles = {
      "h1, h2, h3": {
        fontFamily: `Benguiat Bold !important`,
        textShadow: `-0.05rem -0.05rem 1px #ed2b12,
        0.05rem -0.05rem 1px #ed2b12,
        -0.05rem 0.05rem 1px #ed2b12,
        0.05rem 0.05rem 1px #ed2b12,
        0 0 15px #630100,
        0 0 20px #450100`,
      },
    }
  }

  return (
    <>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
          },
          "::selection": {
            backgroundColor: theme.colors.text,
            color: theme.colors.background,
          },
          "#___gatsby": {
            position: `relative`,
            overflowX: `hidden`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            textDecoration: `none`,
            outline: `none`,
            "&:focus": {
              boxShadow: theme.shadows.outline,
            },
          },
          ...headingStyles,
        })}
      />
      {!thought && <SEO />}
      <Header />
      <Box as="main" className={className}>
        {children}
      </Box>
      <Box as="footer" variant="layout.footer">
        &copy; {new Date().getFullYear()} by <Themed.a href="https://www.amankalra.com">Aman Kalra</Themed.a>. All rights
        reserved.{` `}
        <Themed.a rel="nofollow" href="/imprint">
          Imprint
        </Themed.a>
        .{` `}
        <Themed.a rel="nofollow" href="/privacy">
          Privacy.
        </Themed.a>
          <Flex
            sx={{
              justifyContent: `space-evenly`,
              mt: 2,
              
              flexWrap: `wrap`,
              a: { mt: 3, textAlign: `center` },
             
              div: { mt: 1 },
              flexDirection: [`column`, `row`],
            }}
          >
            <Themed.a href="https://www.linkedin.com/in/amankalra172/" sx={{ variant: `buttons.white` }} target="_blank">
            <img src="../linkedin.png"  width="22" height="22" alt="alternatetext" loading="eager" ></img>
            </Themed.a>

            <Themed.a href="https://github.com/amankalra172" sx={{ variant: `buttons.white` }} target="_blank">
            <img src="../github.png"  width="22" height="22" alt="alternatetext" loading="eager" ></img>
            </Themed.a>
            
            <Themed.a href="https://www.instagram.com/amankalra172/" sx={{ variant: `buttons.white` }} target="_blank">
            <img src= "../instagram.png"  width="22" height="22" alt="alternatetext" loading="eager" ></img>
            </Themed.a> 
            
            <Themed.a href="mailto:hi@amankalra.com" sx={{ variant: `buttons.white` }} target="_blank">
            <img src= "../gmail.png"  width="22" height="22" alt="alternatetext" loading="eager" ></img>
            </Themed.a> 

            <Themed.a href="https://www.facebook.com/amankalra172" sx={{ variant: `buttons.white` }} target="_blank">
            <img src="../facebook.png"  width="22" height="22" alt="alternatetext" loading="eager" ></img>
            </Themed.a>
            
            <Themed.a href="https://twitter.com/amankalra172" sx={{ variant: `buttons.white` }} target="_blank">
            <img src="../twitter.png"  width="22" height="22" alt="alternatetext" loading="eager" ></img>
            </Themed.a> 
            
          </Flex>
      </Box>
    </>
  )
}

export default Layout
