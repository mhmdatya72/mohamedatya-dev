import { projects, additionalProjects, clientProjects } from './projects'
import projectsAr from '../i18n/projects-ar'

// URL slug from the English title, e.g. "Cordiana ERP System" -> "cordiana-erp-system".
export const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

const groups = [projects, additionalProjects, clientProjects]

export const allProjects = groups.flatMap((items, group) => items.map((p) => ({ ...p, slug: slugify(p.title), group })))

// Arabic overlay (title / description / features) falls back to the English text when a project has no translation.
export const localizeProject = (project, lang) => (lang === 'ar' ? { ...project, ...(projectsAr[project.title] || {}) } : project)

export const getProject = (slug, lang) => {
  const project = allProjects.find((p) => p.slug === slug)
  return project ? localizeProject(project, lang) : null
}

// Neighbouring projects from the same group first, then the rest, so the list never repeats the current one.
export const getRelated = (slug, lang, count = 3) => {
  const current = allProjects.find((p) => p.slug === slug)
  if (!current) return []
  const others = allProjects.filter((p) => p.slug !== slug)
  const sorted = [...others.filter((p) => p.group === current.group), ...others.filter((p) => p.group !== current.group)]
  return sorted.slice(0, count).map((p) => localizeProject(p, lang))
}

export const projectsBase = (lang) => (lang === 'ar' ? '/projects' : '/en/projects')
export const projectPath = (lang, slug) => `${projectsBase(lang)}/${slug}`

// Previous / next project in the portfolio order, wrapping around at both ends.
export const getNeighbors = (slug, lang) => {
  const index = allProjects.findIndex((p) => p.slug === slug)
  if (index < 0) return {}
  const at = (i) => localizeProject(allProjects[(i + allProjects.length) % allProjects.length], lang)
  return { prev: at(index - 1), next: at(index + 1) }
}
