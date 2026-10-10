import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ramène la page en haut à chaque changement de route (React Router
// conserve sinon la position de scroll précédente, ex. lien « Accueil »
// du footer cliqué depuis le bas de page).
// - Réagit uniquement au pathname : les changements de query params
//   (filtres /destinations, préremplissage /reservation) ne déclenchent
//   aucun scroll et restent fonctionnels.
// - Respecte les ancres : si un hash est présent (#main-content du lien
//   d'évitement, ou future ancre), le défilement natif est préservé.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
