// Options for MUI's styled() so props prefixed with `$` are only used for
// styling and not passed on to the wrapped component or the DOM (like
// styled-components' transient props). The other names are MUI's defaults.
export const transient = {
    shouldForwardProp: (prop: PropertyKey) =>
        typeof prop !== 'string' ||
        !(prop.startsWith('$') || ['ownerState', 'theme', 'sx', 'as'].includes(prop))
}
