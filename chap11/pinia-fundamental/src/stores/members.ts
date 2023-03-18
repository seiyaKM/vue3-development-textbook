import { defineStore } from 'pinia'
import type { Member } from '../types/Member'

type State = {
  members: Map<number, Member>
}

export const useMembersStore = defineStore({
  id: 'members',
  state: (): State => {
    return { members: new Map<number, Member>() }
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        const member = state.members.get(id) as Member
        return member
      }
    }
  },
  actions: {
    init(): void {
      this.members.set(1234, {
        id: 1234,
        name: 'steve',
        email: 'steve@example.com',
        point: 100,
        note: 'steeeeeeeeve!'
      })
      this.members.set(5678, {
        id: 5678,
        name: 'mike',
        email: 'mike@example.com',
        point: 80
      })
    },
    addMember(member: Member): void {
      this.members.set(member.id, member)
    }
  }
})
