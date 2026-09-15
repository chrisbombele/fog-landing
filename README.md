# fog-landing

## Agent Instagram

Un agent expert en stratégie Instagram, branding, contenu et croissance organique.

### Utilisation

```
/instagram-expert
```

ou, pour une analyse longue en arrière-plan, via l'agent `instagram-expert`.

### Avant la première utilisation

Remplir `.claude/skills/instagram-expert/CONTEXT.md`. Tant que les champs sont
marqués `[À REMPLIR]`, l'agent demandera les informations manquantes au lieu de
produire une stratégie générique.

### Structure

```
.claude/agents/instagram-expert.md          définition de l'agent
.claude/skills/instagram-expert/
  SKILL.md                                  point d'entrée
  CONTEXT.md                                contexte de la marque (à remplir)
  references/formats.md                     structures Reels / carrousels, hooks, profil
  references/metriques.md                   arbre de diagnostic, seuils de lecture
  references/journal.md                     journal des tests
```
