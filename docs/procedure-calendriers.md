# Procédure — Remettre les calendriers FOG en ordre

Objectif : que l'agenda devienne une **source de données fiable** — les mariages
d'un côté, les échéances d'argent de l'autre — au lieu d'un simple déclencheur
d'automatisation noyé dans la routine personnelle.

Deux parties : ce que Chris fait à la main, puis la consigne à donner à l'agent.

---

## PARTIE A — Ce que Chris fait lui-même

L'agent ne peut pas faire ces trois étapes : ses outils Google Calendar gèrent les
**événements**, pas les **agendas**, et il n'a aucun accès à Filmmaker Flow.

### Étape A1 — Créer deux agendas

Dans Google Agenda, sur `cmbombele@gmail.com` :

*Autres agendas* → **+** → *Créer un agenda*

Créer exactement ces deux-là, avec ces noms :

| Nom exact | Ce qu'il contient |
| --- | --- |
| `🎬 FOG — Mariages` | Les vrais tournages, et rien d'autre |
| `💵 FOG — Argent` | Soldes clients à encaisser, paiements sous-traitants à sortir |

Ne rien créer d'autre. Deux agendas suffisent, et trois deviennent vite ingérables.

### Étape A2 — Rediriger la synchronisation Filmmaker Flow

Dans Filmmaker Flow, section *Integrations* / *Calendar* / *Sync* : la connexion
Google existe déjà et pointe sur `cmbombele@gmail.com`. Changer l'agenda de
destination pour **`🎬 FOG — Mariages`** au lieu de l'agenda principal.

Si Filmmaker Flow ne permet pas de choisir l'agenda de destination, le noter et le
dire à l'agent : on passera par une copie automatique à la place.

### Étape A3 — Tester

Créer un mariage bidon dans Filmmaker Flow, vérifier qu'il apparaît bien dans
`🎬 FOG — Mariages` et non dans l'agenda principal, puis le supprimer.

---

## PARTIE B — La consigne à donner à l'agent

À coller telle quelle une fois la partie A terminée.

```
Réorganise mes calendriers Google selon la procédure ci-dessous.

CONTEXTE
- Compte : cmbombele@gmail.com
- Les mariages sont créés dans Filmmaker Flow (CRM) et poussés vers Google Agenda.
- Jusqu'ici tout atterrissait dans l'agenda principal, mélangé à environ douze
  événements récurrents de routine par jour. C'est ce qu'on corrige.
- Deux agendas viennent d'être créés : « 🎬 FOG — Mariages » et « 💵 FOG — Argent ».

RÈGLE ABSOLUE
Tu ne supprimes AUCUN événement sans me l'avoir listé et sans que j'aie dit oui.
Tu crées d'abord, tu me montres, je confirme, et seulement ensuite tu nettoies.

ÉTAPE 1 — INVENTAIRE
Liste les événements NON RÉCURRENTS de l'agenda principal, du 1er janvier 2026 au
31 décembre 2027. Ignore tout ce qui a un recurringEventId : c'est ma routine
personnelle, on n'y touche jamais.

Classe chaque événement en trois colonnes :
  A. VRAI MARIAGE — un tournage réel
  B. RENDEZ-VOUS — consultation, appel de découverte. Signe distinctif : un lien
     Zoom ou msgsndr dans la description, et une durée d'une heure ou moins.
  C. PERSONNEL — hockey, rendez-vous administratifs, etc. On n'y touche pas.

Ne te fie PAS aux heures indiquées : elles ne sont pas fiables, l'événement servait
de déclencheur, pas d'horaire. Fie-toi au titre et à la présence d'un lien de
réservation. Présente-moi le tableau et demande-moi de corriger le classement
avant d'aller plus loin.

ÉTAPE 2 — RECRÉER LES MARIAGES AU BON ENDROIT
Pour chaque événement confirmé comme VRAI MARIAGE, crée-le dans
« 🎬 FOG — Mariages » avec ce format :

  Titre : 🎬 [Nom du client] — Mariage
  Date : la vraie date
  Heure : celle que je te donne. Si je ne la connais pas encore, mets l'événement
          sur la journée entière et note « heure à confirmer » dans la description.
  Description : le bloc structuré ci-dessous, rempli avec ce que je te fournis.

  Client :
  Forfait :
  Modèle de paiement : 100 % à la signature | 50 % réservation + 50 % avant
  Montant reçu :
  Solde :
  Solde dû le :
  Équipe assignée :
  Coût sous-traitants :
  Contact client :

Ce bloc est ce qui transforme l'agenda en base de données. Garde exactement ces
libellés, une ligne chacun : c'est ce qui me permet de tout relire ensuite.

ÉTAPE 3 — CRÉER LES ÉCHÉANCES D'ARGENT
Dans « 💵 FOG — Argent », crée un événement sur la journée entière pour chaque
somme attendue ou due. C'est l'étape la plus importante de toute la procédure :
c'est le trou par lequel l'argent s'échappe.

  Pour un solde client en 50/50 :
    Titre : 💵 [Client] — Solde X $ à encaisser
    Date  : un mois avant le mariage (politique FOG)
    Rappel : 7 jours avant, et le jour même

  Pour un paiement à un sous-traitant :
    Titre : 💵 [Sous-traitant] — Payer X $
    Date  : la date d'échéance du contrat
    Rappel : 3 jours avant

  Pour un remboursement dû à un client :
    Titre : 💵 [Client] — Rembourser X $
    Date  : la date engagée

Si un solde est déjà en retard, crée quand même l'événement à sa date d'origine et
signale-le-moi en rouge dans ton rapport.

ÉTAPE 4 — NETTOYER
Seulement après mon accord explicite : supprime de l'agenda principal les
événements que tu as recréés ailleurs. Rien d'autre. Tu ne touches jamais aux
événements récurrents ni au personnel.

ÉTAPE 5 — VÉRIFIER
Relis les trois agendas et confirme-moi :
- combien de mariages dans « 🎬 FOG — Mariages »
- combien d'échéances dans « 💵 FOG — Argent », et lesquelles sont en retard
- que l'agenda principal ne contient plus aucun mariage
- le total d'argent à encaisser et le total à décaisser sur les 60 prochains jours

Termine par un prévisionnel simple, semaine par semaine, sur 60 jours : ce qui
rentre, ce qui sort, et les semaines où le solde passe sous zéro.
```

---

## PARTIE C — La nouvelle habitude, à chaque signature

Ce qui remplace le geste actuel. À faire une fois que la partie A et la partie B
sont terminées.

À chaque contrat signé, trois entrées au lieu d'une :

| Agenda | Événement | Quand |
| --- | --- | --- |
| 🎬 FOG — Mariages | `🎬 [Client] — Mariage` | Le jour du mariage |
| 💵 FOG — Argent | `💵 [Client] — Solde X $ à encaisser` | Un mois avant (si 50/50) |
| 💵 FOG — Argent | `💵 [Sous-traitant] — Payer X $` | À l'échéance du contrat |

Et la règle qui protège tout le reste : **le jour où le client paie, la part des
sous-traitants sort du compte courant.** L'événement « Payer X $ » sert alors de
simple rappel d'exécution, pas de mauvaise surprise.

### Mieux : supprimer l'étape manuelle

L'entrée au calendrier faite à la main est un point de rupture — le jour où un
contrat se signe pendant un tournage, l'automatisation ne part jamais.

Si Filmmaker Flow permet de déclencher sur « contrat signé » ou « paiement reçu »
plutôt que sur la création d'un événement d'agenda, il faut basculer là-dessus.
C'est la seule correction structurelle de cette procédure ; le reste est du
rangement.
