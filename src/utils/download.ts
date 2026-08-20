export function getFileNameFromUrl(urlStr: string) {
  try {
    const url = new URL(urlStr, window.location.origin)
    const last = url.pathname.split('/').pop() || 'download.pdf'
    // strip any query/hash and decode
    return decodeURIComponent(last.split('?')[0].split('#')[0]) || 'download.pdf'
  } catch {
    // relative path without origin fallback
    const last = urlStr.split('/').pop() || 'download.pdf'
    return decodeURIComponent(last.split('?')[0].split('#')[0]) || 'download.pdf'
  }
}