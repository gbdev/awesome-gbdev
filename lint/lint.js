// Runs awesome-lint on the README with only the rules listed below.
// Rule names are the ones awesome-lint prints next to each error.
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import awesomeLint from 'awesome-lint';
import config from 'awesome-lint/config.js';
import remarkGfm from 'remark-gfm';
import remarkLint from 'remark-lint';

const rules = new Set([
	// General Markdown rules
	'blockquote-indentation',
	'checkbox-character-style',
	'checkbox-content-indent',
	'code-block-style',
	'definition-case',
	'definition-spacing',
	'emphasis-marker',
	'fenced-code-marker',
	'file-extension',
	'final-newline',
	'hard-break-spaces',
	'heading-style',
	'link-title-style',
	'list-item-bullet-indent',
	'list-item-indent',
	'no-blockquote-without-marker',
	'no-emphasis-as-heading',
	'no-file-name-articles',
	'no-file-name-consecutive-dashes',
	'no-file-name-irregular-characters',
	'no-file-name-mixed-case',
	'no-file-name-outer-dashes',
	'no-heading-content-indent',
	'no-heading-indent',
	'no-heading-punctuation',
	'no-multiple-toplevel-headings',
	'no-shell-dollars',
	'no-table-indentation',
	'no-undefined-references',
	'no-unneeded-full-reference-image',
	'no-unneeded-full-reference-link',
	'no-unused-definitions',
	'ordered-list-marker-style',
	'ordered-list-marker-value',
	'rule-style',
	'strong-marker',
	'table-cell-padding',
	'table-pipe-alignment',
	'table-pipes',
	'unordered-list-marker-style',

	// Awesome list rules
	'awesome-contributing',
	'awesome-github',
	'awesome-no-ci-badge',
	'awesome-spell-check',
	'balanced-punctuation',
	// 'double-link',
	// 'no-repeat-item-in-description',
]);

// Lint from the repository root, where the README is
process.chdir(fileURLToPath(new URL('..', import.meta.url)));

const ruleName = plugin => (Array.isArray(plugin) ? plugin[0] : plugin).name?.replace(/^remark-lint:/, '');

await awesomeLint.report({
	filename: 'README.md',
	config: [
		// Not rules: parse the README as GitHub Flavored Markdown and report lint messages
		remarkLint,
		remarkGfm,
		...config.filter(plugin => rules.has(ruleName(plugin))),
	],
});
