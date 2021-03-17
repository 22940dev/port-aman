/** @jsx jsx */
import { Container, jsx, Themed, Box, Flex, useColorMode } from "theme-ui"
import { Circle, Donut } from "./shapes"
import { down, upWide } from "../styles/animations"
import Logo from "../icons/logo"
import CircleGrid from "../icons/circle-grid"



const Project = () => {
  const [mode] = useColorMode()

  const isStrange = mode === `strangerThings`

  return (
    <section data-name="private" sx={{ position: `relative`, py: 6 }}>
      <Container>
        <div sx={{ maxWidth: `1200px` }}>
          <Themed.h1 >Projects and More!</Themed.h1>
          <Themed.p>
          I have got a chance to work on various projects in my Master's journey and professional life. Along with that, curiosity to learn has led me to explore other repositories on Github. Don't forget to read my experience experimenting with those! Happy reading. 😊
          </Themed.p>
          
        

        </div>
      </Container>
      <Circle size={[`200px`, `200px`, `300px`]} color="red" top="1235px" right="-75px" />
        <Donut
        color="blue"
        size="50px"
        top="125px"
        width="8px"
        left="100px"
        sx={{ opacity: 0.5, animation: `${down} 10s ease-in-out infinite alternate` }}
      />
        <Donut color="pink" size={[`300px`, `340px`]} top="150px" width="40px" left="-160px" sx={{ opacity: 0.35 }} />
        <CircleGrid color="blue" size={200} top="220px" right={[`-180px`, `-120px`, `-120px`]} />
    </section>
  )
}

export default Project
