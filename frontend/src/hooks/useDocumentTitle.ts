import { useEffect } from 'react'

// Met à jour le <title> du document pour la page courante (SEO de base,
// sans dépendance). Restaure le titre précédent à la destruction.
export function useDocumentTitle(title: string): void {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
