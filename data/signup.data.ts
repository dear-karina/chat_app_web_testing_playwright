import {
  randomFullname,
  randomUsername,
  randomPassword,
} from "../ultils/generate";
export const positiveTests: {
  caseName: string;
  fullname: string;
  username: string;
  password: string;
  password_retype?: string | undefined;
  sex: "male" | "female" | undefined;
}[] = [
  {
    caseName: "all valid data (password = 8 chars)",
    fullname: randomFullname(),
    username: randomUsername(),
    password: randomPassword(8),
    password_retype: undefined,
    sex: undefined,
  },
  {
    caseName: "all valid data (male gender)",
    fullname: randomFullname(),
    username: randomUsername(),
    password: randomPassword(),
    password_retype: undefined,
    sex: "male",
  },
  {
    caseName: "all valid data (female gender)",
    fullname: randomFullname(),
    username: randomUsername(),
    password: randomPassword(),
    password_retype: undefined,
    sex: "female",
  },
];
export const negativeTests: {
  caseName: string;
  fullname: string;
  username: string;
  password: string;
  password_retype?: string | undefined;
  sex: "male" | "female" | undefined;
  errorMessage: string;
}[] = [
  {
    caseName: "incorrect password retype",
    fullname: randomFullname(),
    username: randomUsername(),
    password: randomPassword(),
    password_retype: randomPassword(),
    sex: undefined,
    errorMessage: "Passwords do not match",
  },
  {
    caseName: "short password (<8 chars)",
    fullname: randomFullname(),
    username: randomUsername(),
    password: randomPassword(7),
    password_retype: undefined,
    sex: undefined,
    errorMessage: "Password is too short",
  },
  {
    caseName: "registered username",
    fullname: randomFullname(),
    username: "hongducdev",
    password: randomPassword(),
    password_retype: undefined,
    sex: undefined,
    errorMessage: "Username already exists",
  },
  {
    caseName: "empty fullname",
    fullname: "",
    username: randomUsername(),
    password: randomPassword(),
    password_retype: undefined,
    sex: undefined,
    errorMessage: "Please fill in all fields",
  },
  {
    caseName: "empty username",
    fullname: randomFullname(),
    username: "",
    password: randomPassword(),
    password_retype: undefined,
    sex: undefined,
    errorMessage: "Please fill in all fields",
  },
  {
    caseName: "empty password",
    fullname: randomFullname(),
    username: randomUsername(),
    password: "",
    password_retype: undefined,
    sex: undefined,
    errorMessage: "Please fill in all fields",
  },
  {
    caseName: "empty password retype",
    fullname: randomFullname(),
    username: randomUsername(),
    password: randomPassword(),
    password_retype: "",
    sex: undefined,
    errorMessage: "Please fill in all fields",
  },
];
