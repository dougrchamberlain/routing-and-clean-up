export const environment = {
  production: false,
  view_route_url: './view',
  documentApiListUrl:
    'https://localhost/MDIWebMVC/Areas/Summary/Api/Documents/Load',
  microsoft: {
    instrumentationKey: '00dfa4ac-871d-4f8b-be70-fb7029e445bb'
  },
  jmesPathSearchString:
    '[*].PatientFileModels[].{description:Description,id:PatientFileId,PDFUrl:PDFUrl,subtype: FileSubTypeDescription, type: FileTypeDescription}'
};
