<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-05-25 (2)
- Rewrote `WorkflowStepsSection.jsx` — replaced all absolute-positioned text/cards with flexbox grid
- Steps now render as a responsive `flex-row` list with centered text, no overflow issues

## 2026-05-25
- Rebuilt navbar in `Desktop.jsx` with flexbox — replaced all absolute/percentage positioning with `flex items-center`, proper logo sizing, gap-based nav links, and clean CTA buttons
- Removed `ctaButtons` and `navigationItems` config arrays with hardcoded absolute coords; simplified to inline flex layout
- Fixed syntax error in `FooterNavigationSection.jsx`: missing `key` value on `footerBadges.map` div
</changelog>
