import { c, Props } from "atomico";
import tailwindcss from "../tailwindcss.css";

function cardTitle({ name, helperText }: Props<typeof cardTitle.props>) {
  return (
    <host shadowDom>
      <div class="flex gap-4 items-center">
        <slot name="avatar"></slot>
        <div class="flex flex-col gap-1">
          <h1 class="text-2xl md:text-xl text-blue-500">{name}</h1>
          <p class="text-md md:text-xs text-gray-400">{helperText}</p>
        </div>
      </div>
    </host>
  );
}

cardTitle.props = {
  name: String,
  helperText: String,
};

cardTitle.styles = [tailwindcss];

export const CardTitle = c(cardTitle);

customElements.define("seam-card-title", CardTitle);
