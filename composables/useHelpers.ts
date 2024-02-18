export function useHelpers() {
  function debounce<T extends (...args: any[]) => any>(func: T, wait: number = 150): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null

    return function (...args: Parameters<T>) {
      const later = () => {
        timeout = null
        func(...args)
      }

      if (timeout !== null) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(later, wait)
    }
  }

  return { debounce }
}