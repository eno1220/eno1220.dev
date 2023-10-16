export function getSiteName(url: string): string {
  const urlObj = new URL(url)
  return urlObj.hostname || ''
}

export function getSiteIcon(url: string): string {
  const siteName = getSiteName(url)
  return `https://www.google.com/s2/favicons?domain=${siteName}&sz=64`
}
