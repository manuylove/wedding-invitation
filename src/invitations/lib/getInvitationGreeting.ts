import type { WeddingContent } from '../../content'
import type { Invitation } from '../model'

type GreetingContent = Pick<WeddingContent['hero'], 'greetingFallback'>

export function getInvitationGreeting(
  invitation: Invitation | null | undefined,
  content: GreetingContent,
): string {
  const customGreeting = invitation?.greeting?.trim()

  if (customGreeting) {
    return customGreeting
  }

  return content.greetingFallback
}
