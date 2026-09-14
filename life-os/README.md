# Life OS — Personal Chief of Staff

Le 4e et dernier agent du système. Les trois autres gèrent le business ; celui-ci me gère **moi**.

| Agent | Domaine |
|---|---|
| Instagram Agent | leads / DMs / calls |
| Operations Tracker | trackers / chiffres / data quotidienne |
| CEO Agent | décisions / équipe / business |
| **Life OS Agent** | moi / temps / énergie / productivité |

Un business organisé ne sert à rien si je me couche à 2h, me réveille explosé, saute le gym et passe la journée à répondre à des notifications. Le but du business est aussi de me donner une meilleure vie — pas de remplir chaque minute avec plus de travail.

## Utilisation

| Quand | Commande |
|---|---|
| Le matin | `/brief-matin` |
| Le soir | `/review-soir` |
| Une fois par semaine | `/review-semaine` |
| N'importe quand | « demande au life-os agent … » |

L'agent lui-même : [`.claude/agents/life-os.md`](../.claude/agents/life-os.md)

## Fichiers

| Fichier | Rôle |
|---|---|
| `profil.md` | **Source de vérité.** Horaires, contraintes fixes, énergie, santé, vie perso. À remplir en premier. |
| `objectifs.md` | Objectifs du trimestre + priorité personnelle et business de la semaine. |
| `habitudes.md` | Les 5 habitudes suivies, mises à jour à la review du soir. |
| `journal/AAAA-MM-JJ.md` | Un fichier par jour : brief du matin + review du soir. |
| `journal/AAAA-Wnn-semaine.md` | La weekly review. |
| `journal/MODELE.md` | Gabarit d'une journée. |

## Mise en route

1. Remplis `profil.md` — tant que les `À REMPLIR` sont là, l'agent doit redemander l'info à chaque fois.
2. Remplis la priorité de la semaine dans `objectifs.md`.
3. Lance `/brief-matin` demain matin.
4. Lance `/review-soir` le soir.
5. Au bout de 7 jours, lance `/review-semaine` — c'est là que le système commence vraiment à servir.

Le journal est la mémoire de l'agent : sans lui, chaque jour repart de zéro et la weekly n'a aucune donnée à analyser.

## Ce que cet agent ne fait pas

Décisions business, chiffres, contenu, DMs. Il renvoie vers le bon agent — mais il **réserve le temps** pour ce travail dans le calendrier. C'est sa job.
