import config from '../config';

export default {
  index_patterns: [config.indexName],
  mappings: {
    [config.docType]: {
      properties: {
        source: {
          type: 'keyword',
        },
        deleted: {
          type: 'boolean',
        },
        seq: {
          type: 'integer',
        },
        name: {
          type: 'keyword',
        },
        version: {
          type: 'keyword',
        },
        dependencies: {
          type: 'keyword',
        },
        expandedDependencies: {
          type: 'keyword',
        },
        dependenciesWithVersions: {
          type: 'nested',
          properties: {
            name: {
              type: 'keyword',
            },
            version: {
              type: 'keyword',
            },
          },
        },
        devDependencies: {
          type: 'keyword',
        },
        expandedDevDependencies: {
          type: 'keyword',
        },
        devDependenciesWithVersions: {
          type: 'nested',
          properties: {
            name: {
              type: 'keyword',
            },
            version: {
              type: 'keyword',
            },
          },
        },
        allDependencies: {
          type: 'keyword',
        },
      },
    },
  },
};
