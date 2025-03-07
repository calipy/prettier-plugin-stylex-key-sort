import {
  PSEUDO_CLASS_PRIORITIES,
  AT_RULE_PRIORITIES,
  PSEUDO_ELEMENT_PRIORITY,
} from '@stylexjs/shared';

type PriorityAndType = {
  priority: number;
  type: 'string' | 'pseudoClass' | 'pseudoElement' | 'atRule' | 'wellKnown';
};

export default function getKeyValuePriorityAndType(
  keyValue: string,
): PriorityAndType {
  if (keyValue.startsWith('@supports')) {
    return { priority: AT_RULE_PRIORITIES['@supports'], type: 'atRule' };
  }

  if (keyValue.startsWith('::')) {
    return { priority: PSEUDO_ELEMENT_PRIORITY, type: 'pseudoElement' };
  }

  if (keyValue.startsWith(':')) {
    const prop =
      keyValue.startsWith(':') && keyValue.includes('(')
        ? keyValue.slice(0, keyValue.indexOf('('))
        : keyValue;

    return {
      priority:
        PSEUDO_CLASS_PRIORITIES[prop as keyof typeof PSEUDO_CLASS_PRIORITIES] ??
        40,
      type: 'pseudoClass',
    };
  }

  if (keyValue.startsWith('@media')) {
    return { priority: AT_RULE_PRIORITIES['@media'], type: 'atRule' };
  }

  if (keyValue.startsWith('@container')) {
    return { priority: AT_RULE_PRIORITIES['@container'], type: 'atRule' };
  }
  const wellKnownPriority = wellKnown.findIndex((v) => v === keyValue);
  if (wellKnownPriority >= 0) {
    return { priority: wellKnownPriority + 4000, type: 'wellKnown' };
  }
  return { priority: 1, type: 'string' };
}

const wellKnown = [
  // Size
  'block-size',
  'height',
  'inline-size',
  'width',
  'max-block-size',
  'max-height',
  'max-inline-size',
  'max-width',
  'min-block-size',
  'min-height',
  'min-inline-size',
  'min-width',
  // Position
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'inset',
  'inset-block',
  'inset-block-start',
  'inset-block-end',
  'inset-inline',
  'inset-inline-start',
  'inset-inline-end',
  'clear',
  'float',
  'z-index',
  // Layout
  'display',
  'flex',
  'flex-basis',
  'flex-grow',
  'flex-shrink',
  'flex-flow',
  'flex-direction',
  'flex-wrap',
  'grid',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'grid-area',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'align-tracks',
  'justify-tracks',
  'masonry-auto-flow',
  'grid-gap',
  'gap',
  'grid-row-gap',
  'row-gap',
  'grid-column-gap',
  'column-gap',
  'place-content',
  'align-content',
  'justify-content',
  'place-items',
  'align-items',
  'justify-items',
  'place-self',
  'align-self',
  'justify-self',
  'box-sizing',
  'background-blend-mode',
  'isolation',
  'mix-blend-mode',
  'animation',
  'animation-composition',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-range',
  'animation-range-end',
  'animation-range-start',
  'animation-timing-function',
  'animation-timeline',
  'scroll-timeline',
  'scroll-timeline-axis',
  'scroll-timeline-name',
  'timeline-scope',
  'view-timeline',
  'view-timeline-axis',
  'view-timeline-inset',
  'view-timeline-name',
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-repeat',
  'background-size',
  'background-position',
  'background-position-x',
  'background-position-y',
  'border',
  'border-color',
  'border-style',
  'border-width',
  'border-block',
  'border-block-color',
  'border-block-stylex',
  'border-block-width',
  'border-block-start',
  'border-top',
  'border-block-start-color',
  'border-top-color',
  'border-block-start-style',
  'border-top-style',
  'border-block-start-width',
  'border-top-width',
  'border-block-end',
  'border-bottom',
  'border-block-end-color',
  'border-bottom-color',
  'border-block-end-style',
  'border-bottom-style',
  'border-block-end-width',
  'border-bottom-width',
  'border-inline',
  'border-inline-color',
  'border-inline-style',
  'border-inline-width',
  'border-inline-start',
  'border-left',
  'border-inline-start-color',
  'border-left-color',
  'border-inline-start-style',
  'border-left-style',
  'border-inline-start-width',
  'border-left-width',
  'border-inline-end',
  'border-right',
  'border-inline-end-color',
  'border-right-color',
  'border-inline-end-style',
  'border-right-style',
  'border-inline-end-width',
  'border-right-width',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-radius',
  'border-start-end-radius',
  'border-start-start-radius',
  'border-end-end-radius',
  'border-end-start-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'box-shadow',
  'accent-color',
  'appearance',
  'aspect-ratio',
  'caret',
  'caret-color',
  'caret-shape',
  'cursor',
  'ime-mode',
  'input-security',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'pointer-events',
  'resize',
  'text-overflow',
  'user-select',
  'margin',
  'margin-block',
  'margin-block-start',
  'margin-top',
  'margin-block-end',
  'margin-bottom',
  'margin-inline',
  'margin-inline-start',
  'margin-left',
  'margin-inline-end',
  'margin-right',
  'margin-trim',
  'overscroll-behavior',
  'overscroll-behavior-block',
  'overscroll-behavior-y',
  'overscroll-behavior-inline',
  'overscroll-behavior-x',
  'padding',
  'padding-block',
  'padding-block-start',
  'padding-top',
  'padding-block-end',
  'padding-bottom',
  'padding-inline',
  'padding-inline-start',
  'padding-left',
  'padding-inline-end',
  'padding-right',
  'visibility',
  'color',
  'color-scheme',
  'forced-color-adjust',
  'opacity',
  'print-color-adjust',
  'columns',
  'column-count',
  'column-width',
  'column-fill',
  'column-span',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'contain',
  'contain-intrinsic-size',
  'contain-intrinsic-block-size',
  'contain-intrinsic-width',
  'contain-intrinsic-height',
  'contain-intrinsic-inline-size',
  'container',
  'container-name',
  'container-type',
  'content-visibility',
  'counter-increment',
  'counter-reset',
  'counter-set',
  'order',
  'font',
  'font-family',
  'font-size',
  'font-stretch',
  'font-style',
  'font-weight',
  'line-height',
  'font-variant',
  'font-variant-alternates',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-emoji',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-optical-sizing',
  'font-palette',
  'font-variation-settings',
  'font-size-adjust',
  'font-smooth',
  'font-synthesis-position',
  'font-synthesis-small-caps',
  'font-synthesis-style',
  'font-synthesis-weight',
  'line-height-step',
  'box-decoration-break',
  'break-after',
  'break-before',
  'break-inside',
  'orphans',
  'widows',
  'content',
  'quotes',
  'image-orientation',
  'image-rendering',
  'image-resolution',
  'object-fit',
  'object-position',
  'initial-letter',
  'initial-letter-align',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'clip',
  'clip-path',
  'mask',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-mode',
  'mask-origin',
  'mask-position',
  'mask-repeat',
  'mask-size',
  'mask-type',
  'mask-border',
  'mask-border-mode',
  'mask-border-outset',
  'mask-border-repeat',
  'mask-border-slice',
  'mask-border-source',
  'mask-border-width',
  'all',
  'text-rendering',
  'offset',
  'offset-anchor',
  'offset-distance',
  'offset-path',
  'offset-position',
  'offset-rotate',
  '-webkit-box-orient',
  '-webkit-line-clamp',
  'overflow',
  'overflow-block',
  'overflow-y',
  'overflow-inline',
  'overflow-x',
  'overflow-clip-margin',
  'scroll-gutter',
  'scroll-behavior',
  'page',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'ruby-align',
  'ruby-merge',
  'ruby-position',
  'overflow-anchor',
  'scroll-margin',
  'scroll-margin-block',
  'scroll-margin-block-start',
  'scroll-margin-top',
  'scroll-margin-block-end',
  'scroll-margin-bottom',
  'scroll-margin-inline',
  'scroll-margin-inline-start',
  'scroll-margin-left',
  'scroll-margin-inline-end',
  'scroll-margin-right',
  'scroll-padding',
  'scroll-padding-block',
  'scroll-padding-block-start',
  'scroll-padding-top',
  'scroll-padding-block-end',
  'scroll-padding-bottom',
  'scroll-padding-inline',
  'scroll-padding-inline-start',
  'scroll-padding-left',
  'scroll-padding-inline-end',
  'scroll-padding-right',
  'scroll-snap-align',
  'scroll-snap-stop',
  'scroll-snap-type',
  'scrollbar-color',
  'scrollbar-width',
  'shape-image-threshold',
  'shape-margin',
  'shape-outside',
  'azimuth',
  'border-collapse',
  'border-spacing',
  'caption-side',
  'empty-cells',
  'table-layout',
  'vertical-align',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-skip',
  'text-decoration-skip-ink',
  'text-decoration-style',
  'text-decoration-thickness',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-position',
  'text-emphasis-style',
  'text-shadow',
  'text-underline-offset',
  'text-underline-position',
  'hanging-punctuation',
  'hyphenate-character',
  'hyphenate-limit-chars',
  'hyphens',
  'letter-spacing',
  'line-break',
  'overflow-wrap',
  'paint-order',
  'tab-size',
  'text-align',
  'text-align-last',
  'text-indent',
  'text-justify',
  'text-size-adjust',
  'text-transform',
  'text-wrap',
  'white-space',
  'white-space-collapse',
  'word-break',
  'word-spacing',
  'word-wrap',
  'backface-visibility',
  'perspective',
  'perspective-origin',
  'rotate',
  'scale',
  'transform',
  'transform-box',
  'transform-origin',
  'transform-style',
  'translate',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'view-transition-name',
  'will-change',
  'direction',
  'text-combine-upright',
  'text-orientation',
  'unicode-bidi',
  'writing-mode',
  'backdrop-filter',
  'filter',
  'math-depth',
  'math-shift',
  'math-style',
  'touch-action',
].reverse();
