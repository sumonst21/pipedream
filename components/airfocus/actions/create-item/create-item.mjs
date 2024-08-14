import airfocus from "../../airfocus.app.mjs";
import { parseObject } from "../../common/utils.mjs";

export default {
  key: "airfocus-create-item",
  name: "Create Item",
  description: "Creates a new item in airfocus. [See the documentation](https://developer.airfocus.com/endpoints.html)",
  version: "0.0.1",
  type: "action",
  props: {
    airfocus,
    name: {
      propDefinition: [
        airfocus,
        "name",
      ],
    },
    statusId: {
      propDefinition: [
        airfocus,
        "statusId",
      ],
      optional: true,
    },
    description: {
      propDefinition: [
        airfocus,
        "description",
      ],
      optional: true,
    },
    fields: {
      propDefinition: [
        airfocus,
        "fields",
      ],
      optional: true,
    },
    color: {
      propDefinition: [
        airfocus,
        "color",
      ],
      optional: true,
    },
    archived: {
      propDefinition: [
        airfocus,
        "archived",
      ],
      optional: true,
    },
  },
  async run({ $ }) {
    const response = await this.airfocus.createItem({
      $,
      data: {
        statusId: this.statusId,
        name: this.name,
        fields: parseObject(this.fields),
        description: this.description,
        color: this.color,
        archived: this.archived,
      },
    });

    $.export("$summary", `Successfully created item with name ${this.name}`);
    return response;
  },
};