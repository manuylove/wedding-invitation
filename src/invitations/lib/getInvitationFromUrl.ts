import { invitations } from '../data'
import type { Invitation } from '../model'

const INVITE_SEARCH_PARAM = 'invite'

export function getInvitationFromUrl(search: string): Invitation | null {
  const params = new URLSearchParams(search)
  const slug = params.get(INVITE_SEARCH_PARAM)

  if (!slug) {
    return null
  }

  return invitations.find((invitation) => invitation.slug === slug) ?? null
}
