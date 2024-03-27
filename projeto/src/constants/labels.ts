interface LabelImage {
  url: string;
  alt: string;
  description: string;
}

export interface Label {
  images: LabelImage[];
  description: string;
}

export const LABELS: Label[] = [
  {
    description: "Máscara",
    images: [
      {
        url: "/required-mask.png",
        alt: "Máscara obrigatória",
        description: "Obrigatório",
      },
      {
        url: "/recommended-mask.png",
        alt: "Máscara recomendada",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Toalha",
    images: [
      {
        url: "/required-towel.png",
        alt: "Toalha obrigatória",
        description: "Obrigatório",
      },
      {
        url: "/recommended-towel.png",
        alt: "Toalha recomendada",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Bebedouro",
    images: [
      {
        url: "/partial-fountain.png",
        alt: "Partial",
        description: "Parcial",
      },
      {
        url: "/forbidden-fountain.png",
        alt: "Proibido",
        description: "Proibido",
      },
    ],
  },
  {
    description: "Vestiário",
    images: [
      {
        url: "/required-lockerroom.png",
        alt: "Liberado",
        description: "Liberado",
      },
      {
        url: "/partial-lockerroom.png",
        alt: "Partial",
        description: "Parcial",
      },
      {
        url: "/forbidden-lockerroom.png",
        alt: "Fechado",
        description: "Fechado",
      },
    ],
  },
];
