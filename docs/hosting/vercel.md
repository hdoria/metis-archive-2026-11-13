# Métis landing on Vercel

The landing lives in `site/landing`. Use the repository root as the Vercel Root Directory so the workspace lockfile and the root LICENSE remain available. `vercel.json` builds only the landing and publishes `site/landing/dist`.

Official domain: `metisapp.com.br`. The `www` hostname redirects permanently to the apex, preserving the request path. Both hostnames must belong to the same Vercel project.

## Deployment

Use the existing Vercel project once linked. `.vercel/` contains machine-local configuration and must remain untracked. Do not copy authentication tokens into the repository.

```sh
npx vercel@65.15.0 link --yes --scope <team> --project metis-landing
npx vercel@65.15.0 build --prod --yes
npx vercel@65.15.0 deploy --prebuilt --prod --archive=tgz
```

The build must include `index.html`, `creditos.html`, `LICENSE.txt`, fonts and application assets. Verify the published URLs after deployment.

## Domain

The domain currently delegates DNS to UOL. Keep its nameservers and manage web records there. Add the apex and www hostnames to the Vercel project, then use `vercel domains inspect` to obtain the exact A and CNAME values. Do not substitute generic addresses or the former host's records. Preserve unrelated mail records.

The previous Sites publication is a historical private preview. Retire its pending custom-domain binding after the Vercel deployment succeeds. Migration of the landing does not publish or distribute application binaries.
