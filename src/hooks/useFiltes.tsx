import type { ChangeEvent } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface TableDataItem {
  [key: string]: any
}

export function useFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const value = event.target.value.trim()
    const name = event.target.name

    if (!value) {
      current.delete(name)
    } else {
      current.set(name, value)
    }

    const search = current.toString()
    const query = search ? `?${search.toLowerCase()}` : ''
    router.push(`${pathname}${query}`)
  }

  const normalizeString = (str: string) =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  const getFilteredData = (tableData: TableDataItem[]) => {
    const params = Array.from(searchParams.entries())

    return tableData.filter(item => {
      return params.every(([key, value]) => {
        if (key in item) {
          const normalizedValue = normalizeString(value)
          const itemValue = item[key]

          if (typeof itemValue === 'number') {
            return itemValue === parseInt(normalizedValue, 10)
          }
          return normalizeString(itemValue) === normalizedValue
        }
        return true
      })
    })
  }

  return {
    onSelectChange,
    getFilteredData,
  }
}
