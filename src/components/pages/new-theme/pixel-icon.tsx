"use client";

/**
 * Dot-matrix icon: each string is one row, "#" = lit cell, "." = unlit.
 * Lit cells use the text colour (so `group-hover:text-primary` recolours them);
 * unlit cells stay as a faint grid.
 */
export const PIXEL_ICONS = {
  // Terminal prompt  >_
  terminal: [
    "#########",
    "#.......#",
    "#.#.....#",
    "#..#....#",
    "#...#...#",
    "#..#....#",
    "#.#..##.#",
    "#.......#",
    "#########",
  ],
  // Browser window with sidebar layout
  layout: [
    "#########",
    "#.#.#...#",
    "#########",
    "#..#....#",
    "#..#.##.#",
    "#..#....#",
    "#..#.##.#",
    "#..#....#",
    "#########",
  ],
  // Wrench
  wrench: [
    ".....#.#.",
    ".....#.#.",
    ".....###.",
    "....##...",
    "...##....",
    "..##.....",
    ".##......",
    "##.......",
    ".........",
  ],
  // Database cylinder
  database: [
    "..#####..",
    "##.....##",
    "#.#####.#",
    "#.......#",
    "##.....##",
    "#.#####.#",
    "#.......#",
    "##.....##",
    "..#####..",
  ],
} as const;

export type PixelIconName = keyof typeof PIXEL_ICONS;

export function PixelIcon({
  name,
  className = "",
}: {
  name: PixelIconName;
  className?: string;
}) {
  const rows = PIXEL_ICONS[name];

  return (
    <div
      aria-hidden="true"
      className={`grid w-fit gap-[2px] ${className}`}
      style={{ gridTemplateColumns: `repeat(${rows[0].length}, 5px)` }}
    >
      {rows.flatMap((row, y) =>
        row.split("").map((cell, x) => (
          <span
            key={`${x}-${y}`}
            className={`h-[5px] w-[5px] transition-colors duration-300 ${
              cell === "#" ? "bg-current" : "bg-foreground/10"
            }`}
            // Ripple the colour change diagonally across the icon on hover.
            style={{ transitionDelay: `${(x + y) * 15}ms` }}
          />
        ))
      )}
    </div>
  );
}
