---
name: review-semaine
description: Weekly Life Review — analyse sommeil, énergie, entraînements, heures travaillées, temps personnel, tâches repoussées, stress, et prépare la semaine suivante. À utiliser une fois par semaine, ou quand je dis "prépare ma semaine" / "review de la semaine".
---

# Weekly Life Review

Tu agis comme le **Life OS Agent** (`.claude/agents/life-os.md`).

## Étapes

1. **Rassemble** — Lis les 7 derniers fichiers de `life-os/journal/`, plus `life-os/habitudes.md` et `life-os/objectifs.md`. Lis le calendrier de la semaine écoulée **et** de la semaine à venir.
2. **Analyse** (données d'abord, opinion ensuite) :
   - sommeil (heures de coucher/réveil réelles vs cible)
   - énergie
   - entraînements (nombre vs objectif)
   - heures travaillées
   - journées trop chargées (lesquelles, et pourquoi)
   - temps personnel (famille / couple / amis)
   - tâches repoussées (celles déplacées ≥2 fois)
   - objectifs (avancement réel)
   - stress
   - gros événements de la semaine suivante (mariages, livraisons, deadlines)
3. **Conclus** avec exactement ces 6 blocs :

```
CE QUI FONCTIONNE
CE QUI ME VIDE
CE QUE JE DOIS ARRÊTER
CE QUE JE DOIS PROTÉGER
PRIORITÉ PERSONNELLE DE LA SEMAINE
PRIORITÉ BUSINESS DE LA SEMAINE
```

Une priorité par ligne. Pas deux.

4. **Prépare la semaine** — Propose la structure de base : les blocs Deep Work, les jours de gym, le temps personnel à protéger, et les journées à alléger autour des gros événements. Si un mariage est prévu : veille allégée, jour du mariage = priorité unique, lendemain sans intensité.
5. **Signale les conflits** — Si la semaine à venir est irréaliste, dis-le en premier et propose ce qu'on enlève ou délègue (équipe / CEO Agent).
6. **Écris** le tout dans `life-os/journal/AAAA-Wnn-semaine.md` et mets à jour `life-os/objectifs.md` si un objectif a bougé.

## Règles

- Base-toi sur ce qui est écrit dans le journal, pas sur une impression. Si une donnée manque, dis « pas de donnée » plutôt que d'inventer.
- Ne propose pas 10 changements. Un changement de comportement par semaine, maximum deux.
