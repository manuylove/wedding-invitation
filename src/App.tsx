import { weddingContent } from './content'
import { getInvitationFromUrl } from './invitations/lib'
import { Hero, PersonalMessage, TenYears, Timeline, Venue } from './sections'

const PERSONAL_MESSAGE_SECTION_ID = 'personal-message'
const invitation = getInvitationFromUrl(window.location.search)

function App() {
  return (
    <main>
      <Hero
        content={weddingContent.hero}
        invitation={invitation}
        nextSectionId={PERSONAL_MESSAGE_SECTION_ID}
      />
      <PersonalMessage
        content={weddingContent.personalMessage}
        id={PERSONAL_MESSAGE_SECTION_ID}
      />
      <TenYears content={weddingContent.tenYears} />
      <Timeline content={weddingContent.timeline} />
      <Venue content={weddingContent.venue} />
    </main>
  )
}

export default App
