# HealthyStep
Next.js + Tailwind + MDX blog.

## Dev
npm i
npm run dev

## Owner Posting (No Code) — GitHub Issues
- Go to **Issues → New Issue → ✍️ New Blog Post** (issue template).
- Fill the form, **attach a banner image** in the content box (drag & drop).
- Submit. A workflow saves the image to `/public/uploads/` and creates `.mdx` in `content/posts/`.


## New Features
- **Delete posts (no code):** Open GitHub → Issues → New Issue → **🗑️ Delete Blog Post**, enter slug or title, submit. A workflow removes the `.mdx` and its banner image.
- **Search autosuggestions:** On /blog, the search box now shows live suggestions powered by `/api/search`.

## Edit Posts Workflow
- Owner goes to GitHub → Issues → New Issue → ✏️ Edit Blog Post
- Fill slug or title and content changes
- Workflow creates a Pull Request with edits
- Developer reviews & merges → Vercel redeploys

## Admin Trash Icon
- Set `NEXT_PUBLIC_ADMIN_MODE=true` in your `.env.local` or Vercel environment
- A trash icon appears on blog cards linking to a prefilled delete issue form
- Keeps deletion flow simple for admins only

---

## Admin Mode (for quick delete button)
Set environment variables (locally or on Vercel):
```
NEXT_PUBLIC_ADMIN_MODE=true
NEXT_PUBLIC_REPO_URL=https://github.com/youruser/yourrepo
```
- When `NEXT_PUBLIC_ADMIN_MODE=true`, a trash icon appears on each card linking to a pre-filled delete issue.
- Default is **off** so normal visitors never see it.

## Cookie banner removed
- Cookie consent UI removed by request.
- Analytics still controlled via `lib/settings.js` (`ANALYTICS_ENABLED` and `PLAUSIBLE_DOMAIN`).

## Edit Post (PR workflow)
- Use **Issues → ✏️ Edit Blog Post** template.
- Submitting creates a branch + Pull Request with the changes.
- Review and merge to publish.
