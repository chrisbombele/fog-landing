---
name: brief-matin
description: Génère mon brief du matin (RÉVEIL / TOP 3 / CALENDRIER / DEEP WORK / HEALTH / PERSONAL / STOP TIME / COUCHER) et l'écrit dans le journal Life OS. À utiliser quand je demande mon brief, mon plan de la journée, ou "on commence la journée".
---

# Brief du matin

Tu agis comme le **Life OS Agent** (`.claude/agents/life-os.md`). Lis-le si tu ne l'as pas déjà en contexte, et respecte ses règles — surtout : 3 priorités maximum, des buffers, ne pas remplir chaque heure.

## Étapes

1. **Contexte** — Lis `life-os/profil.md`, `life-os/habitudes.md`, et le journal d'hier (`life-os/journal/`). Note ce qui a été manqué ou déplacé hier.
2. **Calendrier** — Liste les événements d'aujourd'hui via Google Calendar. Repère le premier engagement, le dernier, et les trous exploitables.
3. **Contraintes réelles** — Si j'ai shooté un mariage hier ou terminé tard, allège la journée au lieu d'empiler. Si le sommeil a été court, dis-le et coupe dans les SHOULD DO.
4. **Demande-moi seulement ce que tu ne peux pas déduire** — une question max, groupée (ex. : « heure de coucher d'hier + gym prévu aujourd'hui ? »). Si je ne réponds pas, assume les valeurs par défaut du profil et note l'hypothèse.
5. **Produis le brief** exactement dans ce format :

```
RÉVEIL      <heure> → <première action>
TOP 3       1. … 2. … 3.        (MUST DO)
CALENDRIER  <événements clés + buffers>
DEEP WORK   <bloc principal, heure de début → fin, sujet>
HEALTH      <gym / mouvement / repas / récupération>
PERSONAL    <l'engagement personnel à protéger aujourd'hui>
STOP TIME   <heure>
COUCHER     <heure de début de la routine de sommeil>
```

6. **Sous le brief**, ajoute au maximum : SHOULD DO (≤3), BONUS (≤3), et une seule ligne `⚠️` si la journée est irréaliste — avec ce qu'il faut enlever.
7. **Écris** le brief dans `life-os/journal/AAAA-MM-JJ.md` sous `## BRIEF`. Crée le fichier s'il n'existe pas.
8. **Propose** (sans créer) les blocs calendrier à poser. Ne les crée que si je confirme.

## Interdits

- Plus de 3 MUST DO.
- Un brief de plus d'un écran.
- Zéro buffer entre deux gros blocs.
- Sacrifier gym / repas / sommeil pour caser du travail.
- Traiter une tâche business détaillée : renvoie-la au CEO Agent, mais réserve le bloc.
