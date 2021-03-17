/** @jsx jsx */
import { Container, jsx, Themed, Box, Flex, useColorMode } from "theme-ui"
import { Circle, Donut } from "./shapes"
import { down, upWide, up } from "../styles/animations"
import Logo from "../icons/logo"
import CircleGrid from "../icons/circle-grid"

const Private = () => {
  const [mode] = useColorMode()

  const isStrange = mode === `strangerThings`

  return (
    <section data-name="private" sx={{ position: `relative`, py: 6 }}>
      <Container>
        <div sx={{ maxWidth: `1200px` }}>
          <Themed.h1 as="h2">Privacy Policy</Themed.h1>
        
          <Themed.p>
          This data protection declaration clarifies the type, scope, and purpose of the processing of personal data (hereinafter referred to as "data") within our online offering and the associated websites, functions, and content as well as external online presences, such as our social media profile. (hereinafter jointly referred to as "online offer"). With regard to the terms used, such as "processing" or "person responsible", we refer you to the definitions in Art. 4 of the Data Protection Basic Regulation (DSGVO).
          </Themed.p>
          <Themed.h3>
            <br />
          Controller
          </Themed.h3>
          <Themed.p>
          Aman Kalra <br />
          Dr. Grosz Str. 3 <br />
          39126 Magdeburg <br />
          </Themed.p>

          <Themed.h3>
            <br />
            Types of data processed:
          </Themed.h3>

          <Themed.p>
          1. Contact data (e.g. e-mail)<br />
          2. Content data (e.g. text input)<br />
          3. Usage data (e.g. websites visited, interest in content, access times)<br />
          4. Meta/communication data (e.g. device information, IP addresses)
          </Themed.p>

          <Themed.h3>
            <br />
            Purpose of processing:
          </Themed.h3>

          <Themed.p>
          1. Provision of the online offer, its functions, and contents<br />
          2. Answering contact requests and communicating with users<br />
          3. Safety precautions<br />
          4. Reach measurement/Marketing<br />
          </Themed.p>


          <Themed.h3>
            <br />
          Terms used
          </Themed.h3>

          <Themed.p>
          "personal data" means any information relating to an identified or identifiable natural person (hereinafter "data subject"); a natural person who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, online identifier (e.g. a cookie) or to one or more specific characteristics which express the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person, is regarded as identifiable.
          <br /> <br />
          "processing" means any operation carried out with or without the aid of automated processes or set of operations, relating to personal data. The term is broad and covers practically every handling of data.
          <br /> <br />
          The "controller" is the natural or legal person, public authority, agency, or other body which alone or jointly with others determines the purposes and means of the processing of personal data.
          </Themed.p>


          <Themed.h3>
            <br />
            Applicable legal bases
          </Themed.h3>


          <Themed.p>
          In accordance with Art. 13 DSGVO we inform you about the legal basis of our data processing. If the legal basis is not mentioned in the data protection declaration, the following applies: The legal basis for obtaining consent is Art. 6 para. 1 lit. a and Art. 7 DSGVO, the legal basis for processing in order to fulfill our services and carry out contractual measures as well as answer inquiries is Art. 6 para. 1 lit. b DSGVO, the legal basis for processing in order to fulfill our legal obligations is Art. 6 para. 1 lit. c DSGVO, and the legal basis for processing in order to safeguard our legitimate interests is Art. 6 para. 1 lit. f DSGVO. In the event that vital interests of the data subject or another natural person make processing of personal data necessary, Art. 6 para. 1 lit. d DSGVO serves as the legal basis.
          </Themed.p>

          <Themed.h3>
            <br />
          Security measures
          </Themed.h3>


          <Themed.p>
          We ask you to inform yourself regularly about the content of our data protection declaration. We will adapt the data protection declaration as soon as the changes to the data processing carried out by us make this necessary. We will inform you as soon as the changes require your cooperation (e.g. consent) or other individual notification.
          </Themed.p>

          <Themed.h3>
            <br />
          Rights of data subjects
          </Themed.h3>

          <Themed.p>
          You have the right to request confirmation as to whether the data in question will be processed and to be informed of this data and to receive further information and a copy of the data in accordance with Art. 15 DSGVO.
          <br /><br />
          You have accordingly. In accordance with Art. 16 DSGVO, you have the right to request the completion of data concerning you or the rectification of incorrect data concerning you.
          <br /><br />
          Pursuant to Art. 17 DSGVO, you have the right to demand that the data concerned be deleted immediately or, alternatively, to demand that the processing of the data be restricted pursuant to Art. 18 DSGVO.

          <br /><br />
          You have the right to demand that the data concerning you which you have provided to us be received in accordance with Art. 20 DSGVO and that it be transferred to other responsible parties.

          <br /><br />
          Pursuant to Art. 77 DSGVO, you also have the right to file a complaint with the competent supervisory authority.
          <br />
          </Themed.p>

          <Themed.h3>
            <br />
          Right of withdrawal
          </Themed.h3>
          <Themed.p>
          You have the right to revoke consents granted pursuant to Art. 7 para. 3 DSGVO with effect for the future.
          </Themed.p>

          <Themed.h3>
            <br />
            Right of objection
          </Themed.h3>

          <Themed.p>
          You may object at any time to the future processing of the data concerning you in accordance with Art. 21 DSGVO. In particular, you may object to the processing of your data for the purposes of direct marketing.

          </Themed.p>

          <Themed.h3>
            <br />
            Cookies and right of objection in the case of direct advertising
          </Themed.h3>


          <Themed.p>
          "Cookies" are small files that are stored on the user's computer. Different data can be stored within the cookies. A cookie is primarily used to store information about a user (or the device on which the cookie is stored) during or after the user's visit to an online service. Temporary cookies, or "session cookies" or "transient cookies", are cookies that are deleted after a user leaves an online offer and closes his browser. The content of a shopping basket in an online shop or a login jam, for example, can be stored in such a cookie. Cookies are referred to as "permanent" or "persistent" and remain stored even after the browser is closed. For example, the login status can be saved if users visit it after several days. The interests of the users who are used for range measurement or marketing purposes can also be stored in such a cookie. Third-party cookies" are cookies that are offered by providers other than the person responsible for operating the online service (otherwise, if they are only the latter's cookies, they are referred to as "first party cookies").
          <br /><br />
          We may use temporary and permanent cookies and explain this in our privacy policy.
          <br /><br />
          If users do not wish cookies to be stored on their computer, they are asked to deactivate the corresponding option in the system settings of their browser. Stored cookies can be deleted in the system settings of your browser. The exclusion of cookies can lead to functional restrictions of this online offer.
          <br /><br />
          A general objection to the use of cookies used for online marketing purposes can be raised for a large number of services, above all in the case of tracking, via the US American website  <Themed.a href="http://www.youronlinechoices.com/"> http://www.youronlinechoices.com/ </Themed.a> http://www.aboutads.info/choices/ or the EU website <Themed.a href="http://www.youronlinechoices.com/"> http://www.youronlinechoices.com/</Themed.a> http://www.youronlinechoices.com/ In addition, cookies can be saved by deactivating them in the browser settings. Please note that in this case not all functions of this online offer can be used.
          </Themed.p>


          <Themed.h3>
            <br />
            Hosting
          </Themed.h3>

          <Themed.p>
          The hosting services used by us serve the provision of the following services: Infrastructure and platform services, computing capacity, storage space and database services, security services, and technical maintenance services which we use for the purpose of operating this online service.
          <br /><br />
          Here we, or our hosting provider, process inventory data, contact data, content data, contract data, usage data, metadata and communication data of customers, interested parties and visitors to this online service on the basis of our legitimate interests in the efficient and secure provision of this online service in accordance with Art. 6 Para. 1 lit. f DSGVO in connection with Art. 28 DSGVO (conclusion of an order processing contract).
          </Themed.p>


          <Themed.h3>
            <br />
          Contacting us
          </Themed.h3>


          <Themed.p>
          When contacting us (e.g. via the contact form, e-mail, telephone, or via social media), the user's details will be processed for the purpose of processing the contact inquiry and processing it in accordance with Art. 6 Para. 1 lit. b) DSGVO. User data can be stored in a customer relationship management system ("CRM system") or a comparable inquiry organization.
          <br /><br />
          We delete the inquiries if they are no longer necessary. We check the necessity every two years; furthermore, the statutory archiving obligations apply.
          </Themed.p>

          <Themed.h3>
            <br />
            SSL encryption
          </Themed.h3>


          <Themed.p>
          This site uses SSL encryption for security reasons and to protect the transmission of confidential content, such as requests you send to us as a site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.
          <br /><br />
          If SSL encryption is activated, the data you transmit to us cannot be read by third parties.

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
        <CircleGrid color="blue" size={200} top="520px" right={[`-1800px`, `-120px`, `-120px`]} />
        <Donut
          size={[`130px`, `130px`, `230px`]}
          color="purple"
          width={[`20px`, `20px`, `50px`]}
          top={[`1000px`, `2268px`]}
          left={[`-75px`, `-75px`, `-102px`]}
          sx={{ animation: `${down} 10s ease-in-out infinite alternate` }}
        />
          <Donut
          size="30px"
          color="green"
          width="5px"
          top="465px"
          left={[`-15px`, `-5px`, `-5px`, `20px`]}
          sx={{ display: [`none`, `none`, `none`, `block`] }}
        />
      <Circle size={[`200px`, `200px`, `300px`]} color="green" top="3535px" right="-75px" sx={{ opacity: 0.40 }} />
      <Donut color="purple" size={[`300px`, `340px`]} top="4150px" width="40px" left="-160px" sx={{ opacity: 0.40 }} />
    </section>
  )
}

export default Private
