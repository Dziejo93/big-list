import { rest } from "msw";
import faker from "@faker-js/faker";
import { Course } from "../models/courses";

export const handlers = [
  rest.get("/courses", (req, res, ctx) => {
    const data = Array(50000)
      .fill(null)
      .map(
        (): Course => ({
          imageUrl: faker.image.cats(200, 300, true),
          count: faker.datatype.number({ min: 0, max: 30 }),
          name: faker.company.companyName(),
          categories: faker.datatype.array(3).map(String),
        })
      );

    return res(ctx.status(200), ctx.json(data));
  }),
];
