import { ReactNode } from 'react'

export interface IJobCardProps {
  src: string
  alt: string
  children: ReactNode
  direction: 'left' | 'right'
  quality?: string
  width: number
  height: number
}
