import { keysToSnakeCase } from "neetoui/utils"; // Ensure correct import path
import { stringify } from "qs";
import { isEmpty, toPairs, pipe, omit } from "ramda";

export const buildUrl = (route, params) => {
  const placeholders = [];

  toPairs(params).forEach(([key, value]) => {
    if (route.includes(`:${key}`)) {
      placeholders.push(key);
      route = route.replace(`:${key}`, encodeURIComponent(value));
    }
  });

  const queryParams = pipe(
    omit(placeholders),
    keysToSnakeCase,
    stringify
  )(params);

  // Append query parameters if not empty
  return isEmpty(queryParams) ? route : `${route}?${queryParams}`;
};
