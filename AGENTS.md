# Prototype Instructions

Run the local server yourself and open the preview in the in-app browser. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Hero scroll direction: preserve the 5dfe9f2 behavior where the hero media feels pinned to the viewport while the promo/nav/copy layer moves over it. Lower dark sections should slide over the hero media without exposing top gaps or making the copy feel glued to the image.

Header behavior: keep the promo strip fixed and visible throughout the whole site. The navigation bar should stay visible for an initial scroll distance, tuck upward smoothly on downward scroll, and reappear smoothly whenever the user scrolls upward anywhere on the page.
