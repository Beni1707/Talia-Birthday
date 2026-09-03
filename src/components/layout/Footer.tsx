export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-roseDark py-6">
      <p className="text-center font-sans text-sm text-cream">
        © Beni Kiwa Malonga — {year}
      </p>
    </footer>
  )
}
