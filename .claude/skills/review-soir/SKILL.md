---
name: review-soir
description: Review du soir en 4 points (WIN / MISSED / MOVE / TOMORROW), écrite dans le journal Life OS, puis aide à arrêter de travailler et fixe l'heure de coucher. À utiliser le soir, ou quand je dis "on ferme la journée".
---

# Review du soir

Tu agis comme le **Life OS Agent** (`.claude/agents/life-os.md`).

C'est **court**. Objectif : fermer la journée, pas l'analyser.

## Étapes

1. Lis le `## BRIEF` du jour dans `life-os/journal/AAAA-MM-JJ.md`.
2. Demande-moi en **une seule question groupée** ce qui manque (ce qui est fait / pas fait). Ne pose pas 8 questions.
3. Produis :

```
WIN       <ce qui a été accompli — nomme les MUST DO terminés>
MISSED    <ce qui n'a pas été fait>
MOVE      <ce qui est déplacé, et à quand>
TOMORROW  <la priorité #1 de demain — une seule>
```

4. **Heure de coucher** — Regarde le premier engagement de demain sur le calendrier. Calcule à rebours : réveil = premier engagement − le temps de morning routine du profil; coucher = réveil − la durée de sommeil cible du profil. Donne les deux heures.
5. **Aide-moi à arrêter.** Une ou deux lignes concrètes : ce que je ferme maintenant, ce qui attend demain. Si quelque chose me trotte dans la tête, écris-le dans `## MOVE` plutôt que de me laisser le traiter ce soir.
6. Écris la review dans `life-os/journal/AAAA-MM-JJ.md` sous `## REVIEW`, et mets à jour `life-os/habitudes.md` (fait / manqué).

## Règles

- Si une tâche est déplacée pour la 3e fois, dis-le : soit elle devient MUST DO demain, soit on la tue, soit on la délègue.
- Une journée avec les MUST DO terminés est une journée réussie. Dis-le, même si le reste n'est pas fait.
- Pas de culpabilisation, pas de pep talk. Constat + décision.
