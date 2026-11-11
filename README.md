 ISBN & ORA eBook Process — Internal Note
1. What an ISBN is
A 13-digit identifier for one format of one edition of one book. It is a number only — no title, author, or cover. It does not make a book appear in any search engine on its own.

One ISBN = one format. PDF, EPUB, Audiobook each need a separate ISBN. A new cover or price does not need a new ISBN.

2. Ethiopian ISBN system (EALS / Wemezeker)
Ethiopia’s official prefix: 978-99944 and 978-99990 (issued by the International ISBN Agency in London).

ISBNs are allocated by the Ethiopian Archive and Library Service (EALS / Wemezeker).

ORA registers as a publisher, requests a block of ISBNs, and receives a batch reference (e.g., EALS-2026-Q4).

These ISBNs are already internationally valid — no second "international ISBN" is needed.

3. ORA eBook workflow (6 steps)
Step	Screen	What happens
1. Publisher registration	External (EALS)	ORA is registered; obtains ISBN blocks
2. Pool registration	ISBN Management → Register ISBNs	Enter ISBN-13, format, EALS batch. Status = Available
3. Editorial + proof gates	Editorial → Pending Production → Author Proofs	Both must pass before any ISBN is assigned
4. Assignment	Publication → Ready to Publish → Publish Setup	Assign one ISBN per format; irreversible lock
5. Report to EALS	ISBN Management → Export EALS Report	Export CSV of assigned-but-unreported ISBNs; mark as Reported
6. Legal deposit	External (EALS)	EALS records the ISBN in the national bibliography
4. Where the book is discoverable
Location	Automatic?
ORA public catalog	✅ Yes
Ethiopia national bibliography (via EALS)	✅ Yes
Amazon / isbnsearch.org	❌ No — requires separate Amazon KDP listing
WorldCat / Open Library	❌ No — requires library acquisition or manual submission
The ISBN never changes when listed elsewhere. Extra platforms = extra visibility, same ISBN.

5. Key design decisions
Pool registration is separate from book assignment.

No book metadata is captured during pool registration.

Assignment only allowed after editorial + proof approval.

One ISBN per format — enforced at Final Publishing.

Assignment is irreversible.

EALS export contains only unreported rows, with bibliographic fields (no cover image).

6. Known gaps (optional, not blockers)
Void reason capture (dropdown + note).

reportedAt timestamp instead of boolean reported.

7. Summary
ORA eBook follows a standard, ISO 2108-compliant, EALS-aligned ISBN workflow: register pooled numbers first, assign one ISBN per format after approval, publish to ORA, report used ISBNs to EALS. Commercial discoverability (Amazon, WorldCat) is a separate distribution step and does not change the ISBN.
