# fog-landing

## Agents

### `fog-people-finance-manager`

Agent Claude Code défini dans [`.claude/agents/fog-people-finance-manager.md`](.claude/agents/fog-people-finance-manager.md).

Il joue le rôle de **People, Finance & Conflict Resolution Manager** de FOG Production
(photographie et vidéographie de mariage) : relations employés, sous-traitants,
photographes, vidéastes, éditeurs, assistants, fournisseurs, partenaires et clients.

À utiliser pour : une plainte, un paiement réclamé ou en retard, un désaccord sur des
heures ou un tarif, une demande d'augmentation, un conflit d'équipe, un problème de
qualité ou de comportement, un avertissement, une fin de collaboration, ou l'analyse
d'une capture d'écran de conversation.

Chaque réponse suit le même format : analyse (faits / perceptions / obligations),
niveau de risque (🟢 🟡 🟠 🔴), options et conséquences, stratégie recommandée,
message exact à envoyer, prochaines étapes.

Exemple :

```
> Utilise l'agent fog-people-finance-manager : un vidéaste sous-traitant réclame
> un paiement de 1 200 $ en retard de trois semaines et menace d'arrêter de
> travailler avec nous.
```

## Automatisations

Trois routines programmées font tourner l'agent sans intervention, adossées à un
registre Notion (paiements, collaborateurs, journal des situations) :
revue du lundi, veille quotidienne des signaux à risque, bilan mensuel.

Aucune routine n'envoie de message à un être humain : elles préparent, tu approuves.

Détails, horaires et identifiants : [`docs/automatisations.md`](docs/automatisations.md).
