/** @jsx jsx */
import { Container, jsx, Themed, Box, Flex, useColorMode } from "theme-ui"
import { Circle, Donut } from "./shapes"
import { down, upWide } from "../styles/animations"
import Logo from "../icons/logo"
import CircleGrid from "../icons/circle-grid"

const AboutMe = () => {
  const [mode] = useColorMode()

  const isStrange = mode === `strangerThings`

  return (
    <section data-name="about-me" sx={{ position: `relative`, py: 6 }}>
      <Container>
        <div sx={{ maxWidth: `760px` }}>
          <Themed.h1 as="h2">About Me</Themed.h1>
          <Themed.p>
            Hi{` `}
            <span role="img" aria-label="Hand Wave">
              👋
            </span>
          </Themed.p>
          <Themed.p>
          I am Aman Kalra, currently pursuing M.Sc in Digital Engineering at Otto-von-Guericke University,
           Magdeburg, Germany.
          </Themed.p>
          <Themed.p>
          My interests are deep-rooted in the field of product management and utilizing data for the betterment of 
          consumers, social service, and entrepreneurship to explore various working aspects of the current dynamic world. 
          </Themed.p>
          <Themed.p>
          This personal website was made as a hobby project where I blog about different GitHub
           repositories that pricks my interest and solve real-life problems. 
            I learned so much using free and open-source content that I wanted to contribute back{` `}
            <span role="img" aria-label="Party Popper">
              🎉
            </span> .
          </Themed.p>
          <Themed.p>
          To know more about my work, scroll down. On the fun side, you can scroll through my {` `}     
            <Themed.a href="https://www.instagram.com/amankalra172/">
            Instagram  </Themed.a> page for thoughts, pictures, and emotions.
          </Themed.p>
        </div>
      </Container>
      <Circle size={[`200px`, `200px`, `300px`]} color="red" top="-75px" right="-75px" />
      <Circle
        size={[`25px`, `25px`, `50px`]}
        color="gray"
        top="-25px"
        right={[`175px`, `175px`, `275px`]}
        sx={{ zIndex: 10 }}
      />
      <Circle
        size={[`15px`, `15px`, `25px`]}
        color="pink"
        top="50px"
        right={[`145px`, `145px`, `375px`]}
        sx={{ animation: `${upWide} 20s ease-in-out infinite alternate` }}
      />
       <img src="about_180.png"  width="190" height="190" alt="alternatetext"
        sx={{
          width: [70, 70, 90],
          height: [70, 70, 90],
          top: `105px`,
          right: [`40px`, `40px`, `240px`],
          position: `absolute`,
          color: `white`,
        }} 
      /> 
      <Circle
        size={[`100px`, `100px`, `120px`]}
        color="black"
        top="90px"
        right={[`25px`, `25px`, `225px`]}
        sx={{ boxShadow: `0 0 0 30px rgba(90, 103, 216, 0.15)` }}
      />
      <Donut color="yellow" size="200px" top="-100px" width="30px" left="-50px" sx={{ opacity: 0.5 }} />
      <Donut
        color="blue"
        size="50px"
        top="-25px"
        width="8px"
        left="180px"
        sx={{ opacity: 0.5, animation: `${down} 10s ease-in-out infinite alternate` }}
      />
      <Container sx={{ mt: [6, 7], position: `relative` }}>
        <Box
          sx={{
            borderRadius: `xl`,
            variant: isStrange ? `gradients.strangerThings` : `gradients.indigo`,
            p: [4, 4, 5],
            color: `white`,
            boxShadow: (t: { colors: { [key: string]: any[] } }) => `0px 20px 25px ${t.colors.shadow}`,
          }}
        >
          <h3
            sx={{
              fontWeight: `bold`,
              fontSize: [2, 3, 4],
              textAlign: `center`,
              mb: 4,
              mt: 0,
              textShadow: `0 1px 1px rgba(0, 0, 0, 0.2)`,
            }}
          >
            Skills and Learnings!
          </h3>
          <Themed.p sx={{ textShadow: `0 1px 1px rgba(0, 0, 0, 0.2)` }}>
            The startup world has always made me curious about solving a problem. 
            The same zeal has led to exploring various internships, social works in NGOs, 
            and instilled dedication in my professional work. Below are some skills and learnings, 
            I am proud of and pursue them in my everyday challenge. {` `}
            <span role="img" aria-label="Smile">
              😊
            </span>
          </Themed.p>
          <Flex
            sx={{
              justifyContent: `space-evenly`,
              mt: 4,
              flexWrap: `wrap`,
              a: { mt: 3, textAlign: `center` },
              div: { mt: 3 },
              flexDirection: [`column`, `row`],
            }}
          >
            <a sx={{ variant: `buttons.white` }}>
              Python
            </a>
            <a sx={{ variant: `buttons.white` }}>
              Machine Learning
            </a>
            <a sx={{ variant: `buttons.white` }}>
              Business Decision
            </a>
            <a sx={{ variant: `buttons.white` }}>
            SQL
            </a>
            <a sx={{ variant: `buttons.white` }}>
              Databases
            </a>
            <a sx={{ variant: `buttons.white` }}>
              Deep Learning
            </a>
            <a  sx={{ variant: `buttons.white` }}>
            Leadership 
            </a>
            <a  sx={{ variant: `buttons.white` }}>
            Analytical  
            </a>
            <a  sx={{ variant: `buttons.white` }}>
            Marketing  
            </a>
            <a  sx={{ variant: `buttons.white` }}>
            Organizational 
            </a>
          </Flex>
        </Box>
        <img src="File_000.png"  width="300" height="300" alt="Skills"
        sx={{
          width: [70, 70, 90],
          height: [70, 70, 90],
          top: `-52px`,
          right: [`10px`, `84px`],
          position: `absolute`,
        }} 
      /> 

          <Circle
          color="orange"
          size={[`60px`, `80px`, `130px`]}
          top={[`0px`, `-30px`, `-60px`]}
          right={[`20px`, `70px`]}
          sx={{boxShadow: `0 0 0 30px rgba(90, 103, 216, 0.15)`  }}
        />
        <Circle
          color="green"
          size={[`20px`, `25px`, `30px`]}
          top={[`-10px`, `-40px`, `-80px`]}
          right={[`100px`, `170px`, `220px`]}
          sx={{ zIndex: 10 }}
        />
        <Donut color="pink" size={[`300px`, `340px`]} top="150px" width="40px" right="-160px" sx={{ opacity: 0.35 }} />
        <CircleGrid color="blue" size={260} top="-20px" left={[`-180px`, `-120px`, `-120px`]} />
      </Container>
    </section>
  )
}

export default AboutMe
