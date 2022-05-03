import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";

const defaultItem = {
  headline: "Talk Name",
  time: "11:00 am",
  name: "Author"
};

export const scheduleBlockSchema: TinaTemplate = {
  name: "schedule",
  label: "Schedule",
  ui: {
    defaultItem: {
      headline: "Event Schedule",
      subhead: "Central European Time",
      items: [defaultItem, defaultItem, defaultItem],
    },
  },
  fields: [
    backgroundSchema,
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Items",
      name: "items",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Title",
          name: "headline",
          type: "string",
        },
        {
          label: "Time",
          name: "time",
          type: "string",
        },
        {
          label: "Speaker Name",
          name: "name",
          type: "string",
        },
      ]
    },
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    navigationLabelSchema,
  ],
};
