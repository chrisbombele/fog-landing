# Inviter des membres dans FOG Planning

L'app FOG (`chrisbombele/fog-planning-console`) crée les comptes d'équipe par
invitation courriel : Supabase crée le compte `auth.users`, le trigger
`handle_new_user()` crée la ligne `profiles` (rôle, statut, compétences), et le
membre choisit son mot de passe via le lien reçu.

## Option 1 — depuis l'app (recommandé)

Connecte-toi en **admin**, va sur `/equipe/inviter` (menu Équipe → Inviter un
membre) et remplis le formulaire. Une invitation par membre.

## Option 2 — en lot, depuis le terminal

`inviter-membres-fog.mjs` fait le même appel que le formulaire, pour plusieurs
membres d'un coup. Node 18+, aucune dépendance à installer.

```sh
export SUPABASE_URL="https://<ref>.supabase.co"
export SUPABASE_SERVICE_ROLE_KEY="<clé service_role>"
export APP_URL="https://<domaine-de-l-app>"   # optionnel

node scripts/inviter-membres-fog.mjs --dry-run   # aperçu, rien n'est envoyé
node scripts/inviter-membres-fog.mjs             # envoie les invitations
```

La liste des membres est en haut du script, dans `MEMBRES`.

> La clé `service_role` donne un accès total à la base. Elle reste dans ton
> terminal local — ne la mets jamais dans un fichier versionné.
