# Automatisations — FOG Production

Trois routines programmées alimentent l'agent `fog-people-finance-manager`
et un registre Notion qui leur sert de source de vérité.

Horaires exprimés en heure du Québec (`America/Montreal`). Les expressions cron
sont en UTC : **elles décalent d'une heure au changement d'heure** (novembre et
mars). À réajuster deux fois par année, ou à accepter tel quel.

## Le registre Notion

Sous la page **FOG Production — Quartier général stratégique** :

| Base | Rôle | Lien |
| --- | --- | --- |
| 💵 Paiements & Factures | Une ligne par montant dû. Montant, échéance, date promise, statut, relance reçue. | https://app.notion.com/p/3209665386c9416685f51a134469f6cd |
| 👥 Collaborateurs & Relations | Tarif convenu, type d'entente, fiabilité, coût de remplacement, état de la relation, avertissements. | https://app.notion.com/p/670aac9a32874c98b41d3f9d7922c393 |
| ⚖️ Journal des situations | Chaque conflit, décision, précédent créé, niveau de risque, preuves conservées. | https://app.notion.com/p/f2e960a766f2489199acd7d8130e423a |

Les trois bases sont liées : un paiement pointe vers un collaborateur, une
situation aussi. C'est ce qui permet à l'agent de voir, en une requête, qu'un
vidéaste qui réclame son paiement est aussi celui dont le coût de remplacement
est élevé et dont la relation est déjà tendue.

Deux colonnes portent l'essentiel de la valeur :

- **Relance reçue** — cochée quand la personne a dû réclamer son dû. C'est le
  meilleur indicateur avancé de l'érosion d'une relation.
- **Précédent créé** — ce que la décision autorise quelqu'un à réclamer la
  prochaine fois. Remplie honnêtement, cette colonne évite les décisions
  contradictoires d'un mois à l'autre.

## Les routines

| Routine | Quand | Cron (UTC) | ID |
| --- | --- | --- | --- |
| Revue du lundi : paiements, heures & relations | Lundi 8 h 00 | `0 12 * * 1` | `trig_018c7tNVAvfWw4TgdZQYN8Fn` |
| Veille quotidienne des signaux à risque | Lun-ven 8 h 30 | `30 12 * * 1-5` | `trig_01DUE1tLyEmdnCDa6g9PQyEP` |
| Bilan mensuel relations & paiements | 1er du mois 9 h 00 | `0 13 1 * *` | `trig_01XXJHdFkaq8NrYRGbrDYSGU` |

### Revue du lundi

Cinq passes : collecte des heures du week-end écoulé, paiements en retard et dus
cette semaine, relances subies, relations à surveiller, balayage Slack des sept
derniers jours. Sort un rapport classé par niveau de risque avec un message prêt
à envoyer pour chaque item. Notification par téléphone et par courriel.

Le lundi matin est choisi parce que les mariages ont lieu le week-end :
confirmer les heures dans les 48 heures supprime la majorité des disputes
d'heures avant qu'elles existent.

### Veille quotidienne

Balaye les dernières 24 h de Slack à la recherche de signaux : réclamation de
paiement, menace d'arrêt, mise en demeure, harcèlement, plainte client, conflit
interne, ton qui monte. Répond `RAS` et se tait quand il n'y a rien — c'est
volontaire, une veille qui notifie tous les jours finit par être ignorée.
Notification par téléphone seulement.

### Bilan mensuel

Santé des paiements, compteur de relances, dégradations de relations, risque de
départ des collaborateurs difficiles à remplacer, précédents créés et
contradictions entre décisions, situations ouvertes depuis plus de 30 jours.
Écrit une page Notion et résume en dix lignes. Notification par courriel.

## Règle non négociable

**Aucune routine n'envoie de message à un être humain.** Elles préparent
l'analyse et le texte exact ; Chris approuve et envoie. Un message au mauvais
ton sur une situation 🟠 ou 🔴 est irréversible et peut coûter un collaborateur
ou déclencher une mise en demeure. L'automatisation fait gagner le temps
d'analyse et de rédaction, jamais le jugement final.

## Connecteurs requis

Les routines ont été créées sans connecteurs attachés : les sessions déclenchées
n'ont donc **pas** accès aux outils Notion et Slack tant que ce n'est pas
corrigé. Le correctif : recréer ou éditer les routines depuis l'interface
Routines de claude.ai, qui permet d'attacher Notion et Slack.

Chaque prompt de routine contient déjà l'instruction de signaler explicitement
un accès manquant plutôt que de conclure à tort qu'il n'y a rien à signaler.

## Ce qui n'est pas automatisé

Les conversations par texto, WhatsApp et courriel ne sont pas connectées. Pour
celles-là, le fonctionnement reste manuel : coller la conversation ou la capture
d'écran à l'agent, qui produit l'analyse et le message. La veille automatique ne
couvre que Slack.

## Prochaines extensions possibles

- **Confirmation d'équipe 72 h avant chaque mariage** (nécessite Google
  Calendar) : équipe assignée, tarif, heures, lieu, heure d'arrivée. Réduit les
  absences et coupe court aux désaccords d'heures.
- **Relance automatique des factures clients impayées** côté comptes à recevoir.
