# fog-landing

## Agents

### `fog-cfo`

Agent Claude Code défini dans [`.claude/agents/fog-cfo.md`](.claude/agents/fog-cfo.md).

**CFO, Wealth Strategist & People Operations Manager** de FOG Production
(photographie et vidéographie de mariage, Cowansville, Québec — Chris et Cianna).

Il couvre trois domaines dans un seul rôle :

**Finance d'entreprise** — trésorerie réelle, prévisionnel 30/60/90 jours et 6/12 mois,
priorité de paiement quand les liquidités ne suffisent pas, allocation de chaque entrée
d'argent, réserves, dettes, rentabilité par mariage, achats importants, tableau de bord
mensuel.

**Patrimoine** — rémunération structurée des propriétaires, règle
`revenu → obligations → réserves → investissements → style de vie`, comptes Wealthsimple,
stratégie ETF, objectif 1 M$, REEE et patrimoine des deux enfants, éducation financière.

**People Operations** — relations et conflits financiers avec employés, sous-traitants,
photographes, vidéastes, éditeurs, assistants, fournisseurs et clients : analyse,
niveau de risque (🟢 🟡 🟠 🔴), stratégie, message exact à envoyer, plan de suivi.

Garde-fous inscrits dans le rôle : aucune stratégie fiscale inventée (les questions
LLC américaine / fiscalité Canada–États-Unis sont listées pour un CPA), aucun rendement
garanti ni date promise, séparation systématique entre fait, hypothèse, projection et
risque, et une donnée inconnue s'écrit comme inconnue.

Exemple :

```
> Utilise l'agent fog-cfo : on vient d'encaisser 4 200 $ pour un mariage de juin.
> Comment je répartis ?
```

## Automatisations

Trois routines programmées adossées à un registre Notion en quatre bases liées
(paiements, collaborateurs, clients et contrats, journal des situations) :
revue du lundi, veille quotidienne des signaux à risque, tableau de bord CFO mensuel.

Aucune routine n'envoie de message à un être humain : elles préparent, tu approuves.

Détails, horaires et identifiants : [`docs/automatisations.md`](docs/automatisations.md).
