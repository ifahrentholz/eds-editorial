# Documentation
<details><summary>src/directives</summary>

## :wrench: Constants

- [getSidekickLibraryId](#gear-getsidekicklibraryid)

### :gear: getSidekickLibraryId

| Constant | Type |
| ---------- | ---------- |
| `getSidekickLibraryId` | `(sidekickElement: SidekickElement) => DirectiveResult<typeof SidekickLibraryId>` |




</details>

<details><summary>src/utils</summary>

## :toolbox: Functions

- [toClassName](#gear-toclassname)
- [addClasses](#gear-addclasses)
- [createOptimizedPicture](#gear-createoptimizedpicture)
- [getMetadata](#gear-getmetadata)
- [replaceBySpecifier](#gear-replacebyspecifier)
- [toCamelCase](#gear-tocamelcase)
- [undefinedOnEmpty](#gear-undefinedonempty)
- [wrap](#gear-wrap)

### :gear: toClassName

Converts a string into a valid CSS class name.

| Function | Type |
| ---------- | ---------- |
| `toClassName` | `(name: string) => string` |

Parameters:

* `name`: - The string to convert into a CSS class name.


### :gear: addClasses

Adds CSS classes to an HTML element.

| Function | Type |
| ---------- | ---------- |
| `addClasses` | `(element: HTMLElement, classes: string) => void` |

Parameters:

* `element`: - The HTML element to which classes will be added.
* `classes`: - A string containing CSS classes separated by commas.


### :gear: createOptimizedPicture

Creates an optimized HTML picture element with responsive image sources and a fallback image.

| Function | Type |
| ---------- | ---------- |
| `createOptimizedPicture` | `(createOptimizedPictureArgs: CreateOptimizedPictureArgs) => HTMLPictureElement or undefined` |

Parameters:

* `createOptimizedPictureArgs`: - The arguments for creating the picture element.


### :gear: getMetadata

Retrieves the content of a specified metadata tag from the document head.

| Function | Type |
| ---------- | ---------- |
| `getMetadata` | `(value: string, doc?: Document) => string` |

Parameters:

* `value`: - The name or property attribute value of the metadata tag.
* `doc`: - The document to search for the metadata tag (default is the current document).


### :gear: replaceBySpecifier

Replaces occurrences of a specified specifier in a string with an HTML tag.

| Function | Type |
| ---------- | ---------- |
| `replaceBySpecifier` | `({ input, specifier, htmlTag }: ReplaceBySpecifier) => string` |

Parameters:

* `param`: - An object containing input string, specifier, and HTML tag.
* `param.input`: - The input string where replacements will be made.
* `param.specifier`: - The specifier string to search for in the input.
* `param.htmlTag`: - The HTML tag to wrap around the parts matched by the specifier.


### :gear: toCamelCase

Sanitizes a string for use as a JavaScript property name.

| Function | Type |
| ---------- | ---------- |
| `toCamelCase` | `(name: string) => string` |

Parameters:

* `name`: - The unsanitized string.


### :gear: undefinedOnEmpty

Returns undefined if the value is an empty string, otherwise returns the value itself.

| Function | Type |
| ---------- | ---------- |
| `undefinedOnEmpty` | `(value: string) => string or undefined` |

Parameters:

* `value`: - The value to check.


### :gear: wrap

Wraps an HTML element with another HTML element.

| Function | Type |
| ---------- | ---------- |
| `wrap` | `(element: HTMLElement, wrapper: HTMLElement) => void` |

Parameters:

* `element`: - The HTML element to wrap.
* `wrapper`: - The HTML element to use as a wrapper.



## :factory: RuntimeCache

### Methods

- [get](#gear-get)
- [set](#gear-set)
- [has](#gear-has)
- [delete](#gear-delete)

#### :gear: get

| Method | Type |
| ---------- | ---------- |
| `get` | `<T>(key: string) => T or undefined` |

#### :gear: set

| Method | Type |
| ---------- | ---------- |
| `set` | `<T>(key: string, value: T) => void` |

#### :gear: has

| Method | Type |
| ---------- | ---------- |
| `has` | `(key: string) => boolean` |

#### :gear: delete

| Method | Type |
| ---------- | ---------- |
| `delete` | `(key: string) => void` |


## :tropical_drink: Interfaces

- [CreateOptimizedPictureArgs](#gear-createoptimizedpictureargs)

### :gear: CreateOptimizedPictureArgs

Represents the arguments for creating an optimized picture element.

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `src` | `string` |  |
| `alt` | `string` |  |
| `width` | `number` |  |
| `height` | `number` |  |
| `eager` | `boolean or undefined` |  |
| `breakpoints` | `BreakPoint[] or undefined` |  |



</details>

<details><summary>src/helpers/sidekick</summary>

## :toolbox: Functions

- [isSidekickLibraryActive](#gear-issidekicklibraryactive)
- [extractSidekickLibraryId](#gear-extractsidekicklibraryid)
- [getHref](#gear-gethref)
- [getLocation](#gear-getlocation)
- [getOrigin](#gear-getorigin)

### :gear: isSidekickLibraryActive

Verifies if the Sidekick Library Plugin is in use by checking if the page is running in an iframe with srcdoc
and if the main element has the sidekick-library class.

| Function | Type |
| ---------- | ---------- |
| `isSidekickLibraryActive` | `() => boolean` |

### :gear: extractSidekickLibraryId

Extracts the innerHTML, the href attribute (if defined) and
the data-library-id attribute (if the Sidekick Library Plugin is active) of a given HTML element.

| Function | Type |
| ---------- | ---------- |
| `extractSidekickLibraryId` | `(element?: HTMLElement or HTMLAnchorElement or null or undefined) => SidekickElement` |

Parameters:

* `element`: - The original HTMLElement or HTMLAnchorElement.


### :gear: getHref

Returns the true origin of the current page in the browser.
If the page is running in an iframe with srcdoc, the ancestor origin + the path query param is returned.

| Function | Type |
| ---------- | ---------- |
| `getHref` | `() => string` |

### :gear: getLocation

Returns the true origin of the current page in the browser.
If the page is running in an iframe with srcdoc, the query param is returned.

| Function | Type |
| ---------- | ---------- |
| `getLocation` | `() => Location` |

### :gear: getOrigin

Returns the true origin of the current page in the browser.
If the page is running in an iframe with srcdoc, the ancestor origin is returned.

| Function | Type |
| ---------- | ---------- |
| `getOrigin` | `() => string` |



## :cocktail: Types

- [SidekickElement](#gear-sidekickelement)

### :gear: SidekickElement

Represents the constructed Element.

| Type | Type |
| ---------- | ---------- |
| `SidekickElement` | `{
  dataLibraryId?: string;
  innerHTML: string;
  href?: string;
}` |



</details>

