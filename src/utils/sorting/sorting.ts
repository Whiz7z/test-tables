export const filterData: any = (
  filterProperty: string,
  filterDirection: string,
  isString: boolean,
  data: any
) => {
  if (filterProperty === "creationDate" || filterProperty === "date") {
    if (filterDirection === "ascended") {
      return [...data].sort(
        (a: any, b: any) =>
          Date.parse(a[filterProperty]) - Date.parse(b[filterProperty])
      );
    } else if (filterDirection === "descended") {
      return [...data].sort(
        (a: any, b: any) =>
          Date.parse(b[filterProperty]) - Date.parse(a[filterProperty])
      );
    }
  }

  if (isString) {
    if (filterDirection === "ascended") {
      return [...data].sort((a: any, b: any) =>
        a[filterProperty].localeCompare(b[filterProperty])
      );
    } else if (filterDirection === "descended") {
      return [...data].sort((a: any, b: any) =>
        b[filterProperty].localeCompare(a[filterProperty])
      );
    }
  }

  if (filterDirection === "ascended") {
    return [...data].sort(
      (a: any, b: any) => a[filterProperty] - b[filterProperty]
    );
  } else if (filterDirection === "descended") {
    return [...data].sort(
      (a: any, b: any) => b[filterProperty] - a[filterProperty]
    );
  }
};
