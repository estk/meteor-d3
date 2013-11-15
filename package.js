Package.describe({
  summary: "The version of d3 required for Rickshaw"
});

Package.on_use(function (api, where) {
  api.add_files('d3/d3.v2.js', 'client');
  
  if (typeof(api.export) !== 'undefined') {
    api.export('d3', 'client');
  }
});
