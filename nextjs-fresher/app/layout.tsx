export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <h2>Navbar</h2>
        <h2>Footer</h2>
      </body>
    </html>
  )
}
