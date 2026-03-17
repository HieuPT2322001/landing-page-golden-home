export interface Service {
  id: number
  icon: string
  title: string
  description: string
}

export interface Project {
  id: number
  icon: string
  title: string
  location: string
  description: string
}

export interface Stat {
  id: number
  icon: string
  number: number
  text: string
}

export interface Feature {
  id: number
  icon: string
  title: string
  description: string
}

export interface ContactInfo {
  icon: string
  title: string
  content: string
}

export interface NavLink {
  label: string
  href: string
}

export interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}
