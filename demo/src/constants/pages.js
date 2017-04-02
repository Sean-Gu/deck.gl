function getDocUrl(filename) {
  return `docs/${filename}`;
}
function getCodeUrl(pathname) {
  return `https://github.com/uber/deck.gl/tree/master/${pathname}`;
}

// mapping from file path in source to generated page url
export const markdownFiles = {};

function generatePath(tree, parentPath = '') {
  if (Array.isArray(tree)) {
    tree.forEach(branch => generatePath(branch, parentPath));
  }
  if (tree.name) {
    tree.path = tree.name.match(/(GeoJson|3D|API|([A-Z]|^)[a-z'0-9]+|\d+)/g).join('-').toLowerCase().replace(/[^\w-]/g, '');
  }
  if (tree.children) {
    generatePath(tree.children, `${parentPath}/${tree.path}`);
  }
  if (typeof tree.content === 'string') {
    markdownFiles[tree.content] = `${parentPath}/${tree.path}`;
  }

  return tree;
}

export const examplePages = generatePath([
  {
    name: 'Index',
    content: 'markdown/examples.md'
  },
  {
    name: 'Core Layers',
    expanded: true,
    children: [
      {
        name: 'LineLayer',
        content: {
          demo: 'LineDemo',
          code: getCodeUrl('examples/line')
        }
      },
      {
        name: 'HexagonLayer',
        content: {
          demo: 'HeatmapDemo',
          code: getCodeUrl('examples/3d-heatmap')
        }
      },
      {
        name: 'IconLayer',
        content: {
          demo: 'IconDemo',
          code: getCodeUrl('examples/icon')
        }
      },
      {
        name: 'GeoJsonLayer',
        content: {
          demo: 'GeoJsonDemo',
          code: getCodeUrl('examples/geojson')
        }
      },
      {
        name: 'ScreenGridLayer',
        content: {
          demo: 'ScreenGridDemo',
          code: getCodeUrl('examples/screen-grid')
        }
      },
      {
        name: 'ArcLayer',
        content: {
          demo: 'ArcDemo',
          code: getCodeUrl('examples/arc')
        }
      },
      {
        name: 'ScatterplotLayer',
        content: {
          demo: 'ScatterplotDemo',
          code: getCodeUrl('examples/scatterplot')
        }
      }
    ]
  },
  {
    name: 'Custom Layers',
    expanded: true,
    children: [
      {
        name: 'Arc Brushing Layer',
        content: {
          demo: 'ArcBrushingDemo',
          code: getCodeUrl('examples/arc-brushing')
        }
      },
      {
        name: 'Trip Routes',
        content: {
          demo: 'TripsDemo',
          code: getCodeUrl('examples/trips')
        }
      }
    ]
  },
  {
    name: 'Beyond Maps',
    expanded: true,
    children: [
      {
        name: '3D Surface Explorer',
        content: {
          demo: 'PlotDemo',
          code: getCodeUrl('examples/plot')
        }
      }
    ]
  }
]);

export const docPages = generatePath([
  {
    name: 'Overview',
    children: [
      {
        name: 'Introduction',
        content: getDocUrl('README.md')
      },
      {
        name: 'What\'s New',
        content: getDocUrl('whats-new.md')
      },
      {
        name: 'Upgrade From V3',
        content: getDocUrl('upgrade-guide.md')
      }
    ]
  },
  {
    name: 'Getting Started',
    children: [
      {
        name: 'Installation',
        content: getDocUrl('get-started/getting-started.md')
      },
      {
        name: 'Using With React',
        content: getDocUrl('get-started/using-with-react.md')
      },
      {
        name: 'Using With Mapbox GL',
        content: getDocUrl('get-started/using-with-mapbox-gl.md')
      },
      {
        name: 'Using Layers',
        content: getDocUrl('get-started/using-layers.md')
      },
      {
        name: 'Interactivity',
        content: getDocUrl('get-started/interactivity.md')
      }
    ]
  },
  {
    name: 'Custom Layers',
    children: [
      {
        name: 'Writing Your Own Layer',
        content: getDocUrl('advanced/custom-layers.md')
      },
      {
        name: 'Composite Layers',
        content: getDocUrl('advanced/composite-layers.md')
      },
      {
        name: 'Subclassed Layers',
        content: getDocUrl('advanced/subclassed-layers.md')
      },
      {
        name: 'Primitive Layers',
        content: getDocUrl('advanced/primitive-layers.md')
      },
      {
        name: 'Writing Shaders',
        content: getDocUrl('advanced/writing-shaders.md')
      }
    ]
  },
  {
    name: 'Advanced Topics',
    children: [
      {
        name: 'Layer Lifecycle',
        content: getDocUrl('advanced/layer-lifecycle.md')
      },
      {
        name: 'Attribute Management',
        content: getDocUrl('advanced/attribute-management.md')
      },
      {
        name: 'Picking',
        content: getDocUrl('advanced/picking.md')
      },
      {
        name: '64 bit Layers',
        content: getDocUrl('advanced/64-bits.md')
      },
      {
        name: 'Performance',
        content: getDocUrl('advanced/performance.md')
      },
      {
        name: 'Coordinate Systems',
        content: getDocUrl('advanced/coordinate-systems.md')
      },
      {
        name: 'Viewports',
        content: getDocUrl('advanced/viewports.md')
      },
      {
        name: 'Using Standalone',
        content: getDocUrl('advanced/using-standalone.md')
      },
      {
        name: 'Tips and Tricks',
        content: getDocUrl('advanced/tips-and-tricks.md')
      }
    ]
  },
  {
    name: 'Layer Catalog',
    children: [
      {
        name: 'ArcLayer',
        content: getDocUrl('layers/arc-layer.md')
      },
      {
        name: 'GeoJsonLayer',
        content: getDocUrl('layers/geojson-layer.md')
      },
      {
        name: 'GridLayer',
        content: getDocUrl('layers/grid-layer.md')
      },
      {
        name: 'GridCellLayer',
        content: getDocUrl('layers/grid-cell-layer.md')
      },
      {
        name: 'HexagonLayer',
        content: getDocUrl('layers/hexagon-layer.md')
      },
      {
        name: 'HexagonCellLayer',
        content: getDocUrl('layers/hexagon-cell-layer.md')
      },
      {
        name: 'IconLayer',
        content: getDocUrl('layers/icon-layer.md')
      },
      {
        name: 'LineLayer',
        content: getDocUrl('layers/line-layer.md')
      },
      {
        name: 'PathLayer',
        content: getDocUrl('layers/path-layer.md')
      },
      {
        name: 'PointCloudLayer',
        content: getDocUrl('layers/point-cloud-layer.md')
      },
      {
        name: 'PolygonLayer',
        content: getDocUrl('layers/polygon-layer.md')
      },
      {
        name: 'ScatterplotLayer',
        content: getDocUrl('layers/scatterplot-layer.md')
      },
      {
        name: 'ScreenGridLayer',
        content: getDocUrl('layers/screen-grid-layer.md')
      },
      {
        name: 'ChoroplethLayer (DEPRECATED)',
        content: getDocUrl('layers/deprecated/choropleth-layer.md')
      },
      {
        name: 'ChoroplethLayer64 (DEPRECATED)',
        content: getDocUrl('layers/deprecated/choropleth-layer-64.md')
      },
      {
        name: 'ExtrudedChoroplethLayer64 (DEPRECATED)',
        content: getDocUrl('layers/deprecated/extruded-choropleth-layer.md')
      }
    ]
  },
  {
    name: 'API Reference',
    children: [
      {
        name: 'AttributeManager',
        content: getDocUrl('api-reference/attribute-manager.md')
      },
      {
        name: 'CompositeLayer',
        content: getDocUrl('api-reference/composite-layer.md')
      },
      {
        name: 'DeckGL',
        content: getDocUrl('api-reference/deckgl.md')
      },
      {
        name: 'Layer',
        content: getDocUrl('api-reference/base-layer.md')
      },
      {
        name: 'LayerManager',
        content: getDocUrl('api-reference/layer-manager.md')
      },
      {
        name: 'OrthographicViewport',
        content: getDocUrl('api-reference/orthographic-viewport.md')
      },
      {
        name: 'PerspectiveViewport',
        content: getDocUrl('api-reference/perspective-viewport.md')
      },
      {
        name: 'Viewport',
        content: getDocUrl('api-reference/viewport.md')
      },
      {
        name: 'WebMercatorViewport',
        content: getDocUrl('api-reference/web-mercator-viewport.md')
      }
    ]
  }]);
