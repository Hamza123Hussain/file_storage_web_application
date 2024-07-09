import { File, House, Star, Trash } from 'lucide-react'

export const Sidebaritems = [
  {
    Name: 'Home',
    Icon: <House />,
    href: '/DashBoard',
  },
  {
    Name: 'My Files',
    Icon: <File />,
    href: 'Files',
  },
  { Name: 'Important', Icon: <Star />, href: 'Important' },
  { Name: 'Trash', Icon: <Trash />, href: 'Trash' },
]
