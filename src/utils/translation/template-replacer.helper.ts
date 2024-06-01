export const templateReplacer =
  (templateString: string) => (values: Record<string, string | number>) =>
    templateString.replace(/{{([\s\S]+?)}}/g, item => {
      const key = item.replace(/\W/g, '');

      if (values[key]) return values[key].toString();

      return item;
    });
