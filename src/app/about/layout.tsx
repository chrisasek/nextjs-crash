export const metadata = {
  title: 'About Page',
  description: 'The about page.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
