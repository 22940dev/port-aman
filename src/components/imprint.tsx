/** @jsx jsx */
import { Container, jsx, Themed, Box, Flex, useColorMode } from "theme-ui"
import { Circle, Donut } from "./shapes"
import { down, upWide } from "../styles/animations"
import Logo from "../icons/logo"
import CircleGrid from "../icons/circle-grid"



const Imprint = () => {
  const [mode] = useColorMode()

  const isStrange = mode === `strangerThings`

  return (
    <section data-name="private" sx={{ position: `relative`, py: 6 }}>
      <Container>
        <div sx={{ maxWidth: `1200px` }}>
          <Themed.h1 >Imprint</Themed.h1>
          <Themed.h3>
            <br />
          Angaben gemäß § 5 TMG:
          </Themed.h3>
          <Themed.p>
          Aman Kalra <br />
          Dr. Grosz Str. 3 <br />
          39126 Magdeburg <br />
          </Themed.p>
          
          <Themed.h3>
            <br />
          Kontakt
          </Themed.h3>

          <Themed.a href="mailto:hi@amankalra.com"> hi@amankalra.com </Themed.a>
          
          <Themed.h3>
            <br />
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </Themed.h3>
          <Themed.p>
          Aman Kalra <br />
          Dr. Grosz Str. 3 <br />
          39126 Magdeburg <br />
          </Themed.p>

          <Themed.h3>
            <br />
            Haftung für Inhalte
          </Themed.h3>

          <Themed.p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          <br /> <br />
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Themed.p>

          <Themed.h3>
            <br />
            Haftung für Links
          </Themed.h3>
          <Themed.p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          <br /> <br />
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </Themed.p>


          
          <span sx={{ fontWeight: `bold` }}>Quelle: </span>
           <Themed.a href="https://www.e-recht24.de/impressum-generator.html"> https://www.e-recht24.de/impressum-generator.html </Themed.a>

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
        <CircleGrid color="blue" size={200} top="520px" right={[`-180px`, `-120px`, `-120px`]} />
    </section>
  )
}

export default Imprint
