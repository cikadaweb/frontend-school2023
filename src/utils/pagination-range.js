export function PaginationRange (currentPage, totalPage) {
  const pages = []

  if (totalPage <= 7) {
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i)
    }
  } else {
    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPage)
    } else if (currentPage >= totalPage - 3) {
      pages.push(1)
      pages.push('...')
      for (let i = totalPage - 4; i <= totalPage; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPage)
    }
  }

  return pages
}
