export const DownloadLink = ({ href }: { href: string }) => {
  return (
    <p style={{ marginTop: 24 }}>
      <a id="raw-url" download href={href} style={{ fontWeight: 700, color: 'blue' }}>
        Скачайте файл watchers.xml
      </a>{' '}
      и импортируйте его в Settings | Tools | File Watchers
    </p>
  )
}
