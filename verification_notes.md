# Verification Notes

## Desktop, 1440 × 1000

The redesigned desktop page renders with a persistent dark-green research book spine, visible Equity / Insight brand mark and wordmark, a brass data-cut marker in the hero, vertical filing-system signal tabs, an asymmetric signal-desk layout, and a more explicit audit-trail closing section. The desktop reading flow follows the intended conclusion-before-evidence sequence.

## Mobile, 390 × 844

The mobile layout removes the fixed spine in favour of a compact navigation trigger, keeps the research headline legible, stacks the market snapshot and research sections cleanly, converts the vertical signal tabs to compact index controls, and preserves the searchable signal list and detail drawer in a single-column flow.

## Technical checks

TypeScript check completed successfully after the final layout change. Generated asset URLs are referenced directly from persistent project storage. This is a static, source-backed presentation of the 2026-08-17 U.S. market brief and does not claim real-time market data.

## Full-page language integrity verification

Three discrete verification rounds were completed for the multilingual correction. The structural audit confirmed that navigation, hero content, signal cards, pre-market tables, source notes and footer disclosures are driven by the active language pack rather than residual hard-coded copy. The lexical audit confirmed that the Traditional Chinese pack contains no flagged simplified-only characters, the Simplified Chinese pack contains no flagged traditional-only characters, and the English pack contains no Chinese characters. The coverage audit confirmed that each language includes ten signal entries, four pre-market rows and all major page sections.

Visual verification was then captured for `?lang=TW`, `?lang=CN` and `?lang=EN`. The views show a fully Chinese Traditional interface, a fully Chinese Simplified interface and a fully English interface respectively, including the header research-edition label, navigation, hero, market sections, signal desk, pre-market area, source labels and footer. Language is also shareable through the `lang` URL parameter.

## Readability and breadth-chart refinement

The desktop screenshots for `?lang=TW` and `?lang=CN` confirm that the file-index controls now use normal horizontal text rather than rotated vertical glyphs. The categories remain visually similar to a research binder but are readable in their natural writing direction. The breadth module now presents a normalised stacked-participation chart for NYSE and Nasdaq, a gold/coral legend, average declining participation, volume participation versus the 20-day average, energy-sector confirmation, individual ratio readouts, and source/normalisation notes. Values are derived from the cited 17 August Reuters breadth ratios and volume figures.
