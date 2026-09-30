import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

const tones = {
  sky: "bg-sky text-navy",
  pink: "bg-pink-tint text-pink",
  navy: "bg-navy text-white",
  "solid-pink": "bg-pink text-white",
  glass: "bg-white/18 text-white",
} as const;

const sizes = {
  md: "size-14 rounded-2xl",
  sm: "size-12 rounded-sm",
} as const;

type IconTileProps = {
  icon: IconName;
  iconSize?: number;
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
  className?: string;
};

export function IconTile({
  icon,
  iconSize = 28,
  tone = "sky",
  size = "md",
  className,
}: IconTileProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        sizes[size],
        tones[tone],
        className,
      )}
    >
      <Icon name={icon} size={iconSize} />
    </span>
  );
}
