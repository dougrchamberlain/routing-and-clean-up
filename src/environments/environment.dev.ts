export const environment = {
  // we probably should start a plan to refactor this file down.
  //standardize these names
  documentApiListUrl: 'https://enfcxuq8ldjvjby.m.pipedream.net',
  fileTypeApiUrl: 'https://enntxvsaaolys18.m.pipedream.net',
  jmesPathSearchString:
    '[*].PatientFileModels[].{description:Description,id:PatientFileId,url:PDFUrlIOS,subtype: FileSubTypeDescription, type: FileTypeDescription}',
  microsoft: {
    instrumentationKey: '00dfa4ac-871d-4f8b-be70-fb7029e445bb'
  },
  production: false,
  subTypeApiUrl: 'https://enr9xji4lnjos47.m.pipedream.net',
  viewRouteUrl: '../view'
  //that error I just had to fix is why we should include hanging commas in our linting!
};
