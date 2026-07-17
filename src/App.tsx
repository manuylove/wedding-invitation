import { weddingContent } from './content'
import { getInvitationFromUrl } from './invitations/lib'
import { Hero } from './sections'
import styles from './App.module.css'

const NEXT_SECTION_ID = 'invitation-content'
const invitation = getInvitationFromUrl(window.location.search)

function App() {
  return (
    <main>
      <Hero
        content={weddingContent.hero}
        invitation={invitation}
        nextSectionId={NEXT_SECTION_ID}
      />
      <div
        aria-hidden="true"
        className={styles.nextSectionAnchor}
        id={NEXT_SECTION_ID}
      />
    </main>
  )
}

export default App
