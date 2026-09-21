# Calendriers FOG — ce qui existe déjà, et ce qui manque vraiment

**Conclusion : ne créer aucun nouveau calendrier.** Une version antérieure de ce
document en recommandait deux. C'était une erreur, fondée sur l'hypothèse que
Filmmaker Flow ne poussait rien vers Google. Vérification faite, il pousse.

---

## Ce que Filmmaker Flow fait déjà — vérifié

Lecture de l'agenda `cmbombele@gmail.com` le 20 septembre 2026. Tous les
événements de mariage trouvés portent la même signature : une description
contenant le téléphone et le courriel du client, et des liens `msgsndr.com`
de *Reschedule* et *Cancel*. `msgsndr.com` est le domaine de GoHighLevel, la
plateforme sur laquelle Filmmaker Flow est bâti.

| Événement | Date | Contact client présent |
| --- | --- | --- |
| Howardine Metellus's Wedding | 12 sept. 2026 | oui |
| LB Behtani | 1er oct. 2026 | oui |
| Wedding Hélène | 3 oct. 2026 | oui |
| Anne Truong's Wedding | 10 oct. 2026 | oui |
| Lydia Behtani's Wedding | 11 oct. 2026 | oui |
| Kenny Lepage & Marianne Gauthier-Groulx's Wedding | 17 oct. 2026 | oui |
| Wedding Valérie | 17 oct. 2026 | oui |

**La synchronisation fonctionne.** Créer un agenda `🎬 FOG — Mariages` en parallèle
reviendrait à tenir deux listes de mariages — exactement l'erreur qu'on s'est
interdite pour les clients.

Filmmaker Flow possède aussi ses deux calendriers internes **Booked Weddings
(deposit)** et **Booked Weddings (paid in full)**. Cette distinction est plus
précieuse qu'elle en a l'air : voir plus bas.

---

## Le seul vrai manque

Filmmaker Flow suit l'argent que les clients versent à FOG. Il ne suit **pas** :

- ce que FOG doit aux sous-traitants ;
- ce que FOG doit rembourser à un client ;
- l'historique des situations et des décisions.

C'est le rôle de Notion, déjà en place. Rien à ajouter côté calendrier.

---

## Ce qui reste à faire, par ordre d'utilité

### 1. Exploiter « Booked Weddings (deposit) » — c'est là qu'est l'argent

Le découpage *deposit* contre *paid in full* est déjà une liste de comptes à
recevoir. Tout mariage encore dans **deposit** est un client dont le solde de 50 %
n'est pas rentré.

Selon la politique FOG — solde complet un mois avant l'événement — les soldes
suivants sont dus ou en retard :

| Mariage | Solde dû le | Au 21 septembre |
| --- | --- | --- |
| Anne Truong — 10 oct. | 10 septembre | 11 jours de retard |
| Lydia Behtani — 11 oct. | 11 septembre | 10 jours de retard |
| Kenny & Marianne — 17 oct. | 17 septembre | 4 jours de retard |

**Action : ouvrir le calendrier deposit et regarder lesquels de ces trois s'y
trouvent encore.** Chacun est un montant à encaisser immédiatement. C'est la
piste de trésorerie la plus rapide disponible.

### 2. Vérifier si Filmmaker Flow peut relancer le solde automatiquement

Puisqu'il connaît le montant, l'échéance et le statut du paiement, il devrait
pouvoir envoyer un rappel de solde un mois avant l'événement. Si cette
automatisation existe, l'activer règle le problème définitivement et sans ajouter
d'outil. Si elle n'existe pas, c'est la revue du lundi qui prend le relais.

### 3. Optionnel — séparer les mariages de la routine personnelle

Purement cosmétique. Les mariages arrivent dans l'agenda principal, mêlés à une
douzaine d'événements récurrents quotidiens (Réveil 5h00, Bible, Deep Work, Gym,
Coucher). Ça n'empêche personne de travailler : les événements FOG se
reconnaissent à coup sûr — ils ne sont pas récurrents et contiennent un lien
`msgsndr`. C'est d'ailleurs ainsi qu'ils ont été retrouvés.

Si le confort de lecture le justifie, la bonne façon de faire est de **changer
l'agenda de destination dans les réglages du widget de réservation**, pas de créer
un agenda parallèle qu'il faudrait alimenter à la main.

---

## Comment les agents lisent les mariages

Sans rien changer, et de façon fiable :

1. Lire les événements de `cmbombele@gmail.com`.
2. Écarter tout ce qui a un `recurringEventId` — c'est la routine personnelle.
3. Garder ce dont la description contient `msgsndr` — ce sont les dossiers clients.
4. Distinguer un tournage d'une consultation : un vrai mariage dure 6 heures ou
   plus et n'a pas de lien Zoom ; une consultation dure une heure ou moins et en a
   un. En cas de doute, demander à Chris plutôt que supposer.

**Les heures affichées ne sont pas toujours fiables** : l'événement a longtemps
servi de déclencheur d'automatisation plutôt que d'horaire réel. Confirmer auprès
de Chris avant de convoquer une équipe sur la foi d'une heure lue au calendrier.

---

## La règle qui protège la trésorerie

Indépendante de tout outil, et c'est celle qui compte le plus :

**Le jour où un client paie, la part des sous-traitants sort du compte courant.**

Le décalage entre l'encaissement client — un mois avant l'événement — et le
paiement des sous-traitants — trente jours après — est un avantage de trésorerie
de près de deux mois. Un avantage qu'on dépense devient une dette.
