import { faker } from "@faker-js/faker";

export const randomFullname = (): string => {
  return faker.person.fullName();
};
const timestampInMillis: string = Date.now().toString();
export const randomUsername = (base?: string): string => {
  if (base === undefined) {
    return faker.internet.userName();
  }
  return `${base}_${timestampInMillis}`;
};
export const randomPassword = (length?: number): string => {
  return faker.internet.password({ length });
};
export const randomSex = (): string => {
  return faker.person.sex();
};
export const randomMessage = (paragraphCount: number = 1): string => {
  return faker.lorem.paragraphs((paragraphCount = paragraphCount));
};
