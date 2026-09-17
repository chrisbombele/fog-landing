#!/usr/bin/env node
// Invite des membres d'équipe dans FOG Planning (fog-planning-console).
//
// Fait exactement ce que fait l'écran « Équipe → Inviter un membre » :
// appelle l'Admin API Supabase (auth/v1/invite) avec les mêmes métadonnées,
// pour que le trigger handle_new_user() crée la ligne `profiles` avec le bon
// app_role, member_type et skills.
//
// Prérequis : Node 18+ et deux variables d'environnement.
//
//   export SUPABASE_URL="https://<ref>.supabase.co"
//   export SUPABASE_SERVICE_ROLE_KEY="<clé service_role>"
//   export APP_URL="https://<domaine-de-l-app>"   # optionnel, lien de retour
//
//   node scripts/inviter-membres-fog.mjs --dry-run   # aperçu, rien n'est envoyé
//   node scripts/inviter-membres-fog.mjs             # envoie les invitations
//
// ⚠️ La clé service_role donne un accès total à la base : ne la mets jamais
// dans un fichier versionné, uniquement dans ton terminal local.

// ---------------------------------------------------------------------------
// Membres à inviter — modifie ces lignes au besoin.
//   member_type : "interne" | "pigiste"
//   skills      : "photographe" | "videaste" (les deux pour un photo-vidéaste)
//   initials    : 3 caractères max, affichées dans le calendrier
// ---------------------------------------------------------------------------
const MEMBRES = [
  {
    full_name: "Siaka",
    initials: "SI",
    email: "siakakiakite0516@gmail.com",
    member_type: "interne",
    skills: ["photographe", "videaste"],
  },
  {
    full_name: "Asert",
    initials: "AS",
    email: "akilanda4@gmail.com",
    member_type: "interne",
    skills: ["photographe"],
  },
];

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const APP_URL = process.env.APP_URL;
const DRY_RUN = process.argv.includes("--dry-run");

if (!DRY_RUN && (!SUPABASE_URL || !SERVICE_ROLE_KEY)) {
  console.error(
    "SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY doivent être définis.\n" +
      "Relance avec --dry-run pour voir ce qui serait envoyé."
  );
  process.exit(1);
}

async function inviter(membre) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/invite`, {
    method: "POST",
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: membre.email,
      data: {
        full_name: membre.full_name,
        initials: membre.initials,
        member_type: membre.member_type,
        app_role: "shooter",
        skills: membre.skills,
      },
      ...(APP_URL ? { redirect_to: `${APP_URL}/reinitialiser-mot-de-passe` } : {}),
    }),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(body.msg ?? body.error_description ?? body.error ?? `HTTP ${res.status}`);
  }
  return body;
}

let echecs = 0;

for (const membre of MEMBRES) {
  const resume = `${membre.full_name} <${membre.email}> — ${membre.skills.join(" + ")} (${membre.member_type})`;

  if (DRY_RUN) {
    console.log(`[aperçu] ${resume}`);
    continue;
  }

  try {
    const { id } = await inviter(membre);
    console.log(`✅ ${resume} — invitation envoyée (id ${id})`);
  } catch (e) {
    echecs++;
    console.error(`❌ ${resume} — ${e.message}`);
  }
}

if (DRY_RUN) {
  console.log("\nAucune invitation envoyée (--dry-run).");
}

process.exit(echecs > 0 ? 1 : 0);
