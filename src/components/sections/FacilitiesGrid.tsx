import { facilities } from "@/content/facilities";
import { IconTile } from "@/components/ui/IconTile";

export function FacilitiesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
      {facilities.map(({ icon, title, description }) => (
        <div
          key={title}
          className="flex gap-4.5 rounded-md border border-line bg-white p-6.5 transition-[border-color,translate] duration-200 hover:-translate-y-0.75 hover:border-navy"
        >
          <IconTile icon={icon} iconSize={22} tone="pink" size="sm" />
          <div>
            <h3 className="mb-1.5 text-xl">{title}</h3>
            <p className="text-md leading-[1.55] text-muted">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
