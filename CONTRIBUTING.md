# Contribution Guidelines

Before sending a Pull Request or opening an Issue, ensure it adheres to the following guidelines and policies.

Search previous suggestions and open issues before making a new one, as yours may be a duplicate.

Here's how you can contribute:

- Look at open [Issues](https://github.com/avivace/awesome-gbdev/issues) and provide help or feedback
- [Add a resource](#adding-a-resource)
- [Correct and improve existing entries](#correcting-and-improving-resources)
- [Fix broken links and unavailable resources](#removing-unavailable-resources)
- [Discuss on what should and shouldn't go on the list](https://github.com/gbdev/awesome-gbdev/issues/96), the 'awesome' quality standard

If you are unsure about something or need help, we have a friendly Discord [chat](https://discord.gg/gpBxq85).

## Adding a resource

### Is it "awesome"?

For a resource to be added to the list, it must...

- Be in English;
- Be in a minimal working state;
- Have a clear purpose (implementation reference is okay, too) and/or provide something interesting;
- Provide a minimal documentation briefly describing what is the project and how to make use of it;
- Have reached a state where you would personally recommend it to the Game Boy community in general;
- Be *awesome*.

That last criterion is the most subjective one and ultimately a matter of maintainer judgment.

For resources which don't *quite* make it to the main list, we have [**MORE.md**](MORE.md). If the resource is in a non-English language, still a work in progress, abandoned, or doesn't reach the described standard *but* is still related to Game Boy development/hacking, then you can add it to the **MORE.md** file.

### Pull Request

- Make an individual pull request for each suggestion.
- Use the following format: `[resource](link) - Description.`
- Additions should be added to the bottom of the relevant category.
- New categories or improvements to the existing categorization are appreciated. You're welcome to discuss discrimination and categorization criteria in Issues/PRs.
- Keep descriptions short and simple, but descriptive, pointing out the particularities or major features of the resource.
- Start the description with a capital and end with a full stop/period.
- Check your spelling and grammar.
- It's `Game Boy`, not `gameboy`, `game boy` or `GameBoy`, however, you should honor the title or name of the resource while linking it, even if it's using a wrong lettering \[[1](https://github.com/avivace/awesome-gbdev/issues/34)\].
- Open source emulators go to the EMULATORS.md file.

If you are not confident in forking the repository, making the change and sending the PR, don't hesitate to open an Issue describing the addition (or the change you want to make/discuss).

Before the PR gets approved and merged, we may require a number of reviews from our contributors.

### AI disclosure

There are two different things to disclose: AI used to prepare your contribution, and AI used to make the resource you're adding.

**Your contribution.** If AI tools helped you prepare your PR (e.g. finding the resource or writing its description), follow the [gbdev AI policy](https://gbdev.io/aipolicy.html) and add an `Assisted-by` tag to your commit message.

**The resource.** Resources made with the help of AI are accepted, but they must be marked so readers can make up their own mind about them ([#273](https://github.com/gbdev/awesome-gbdev/issues/273)). Put the mark right after the link, before the description:

- `†` - AI-assisted: the resource contains some AI-generated content (code, documentation, assets), even a small part such as a helper script or a few fixes.
- `‡` - AI-generated: most of the resource was made by AI (e.g. "vibe-coded" projects).

```
- [resource](link) † - Description.
- [resource](link) ‡ - Description.
```

Also mention the AI usage in your PR description, along with how you know about it (e.g. the author says so, the repository has an `AGENTS.md` or `CLAUDE.md`, an AI agent appears among the commit authors). If you're unsure which mark applies, say so in the PR and the maintainers will decide.

### Checking your changes locally

CI runs two checks, here's how you can try them locally.

The list is linted with [awesome-lint](https://github.com/sindresorhus/awesome-lint), using only the rules listed in [`lint/lint.js`](lint/lint.js). With Node.js 20 or later and [Yarn](https://classic.yarnpkg.com/) installed, run from the `lint` folder:

```bash
cd lint
yarn install
yarn lint
```

Links are checked with [lychee](https://github.com/lycheeverse/lychee): install it following its [instructions](https://lychee.cli.rs/guides/getting-started/) (prebuilt binaries, Homebrew, Cargo, Docker and more) and run, from the root of the repository:

```bash
lychee --no-progress --max-retries 3 \
  --exclude '^https?://(www\.)?tcrf\.net' \
  --exclude '^https?://([^/]+\.)?itch\.io' \
  README.md
```

This reports the links in README.md that don't respond. tcrf.net and itch.io links are skipped, as their protection against automated traffic blocks link checkers. A link can fail because a site is temporarily down: try it in your browser before replacing it or opening an issue about it, and see [Removing unavailable resources](#removing-unavailable-resources).

### Website sync markers

The list in README.md is also published on [gbdev.io/resources](https://gbdev.io/resources). Two HTML comments, invisible when the README is rendered, mark the part of the file that gets copied to the website ([#203](https://github.com/gbdev/awesome-gbdev/issues/203)):

- `<!-- gbdev.io:begin body -->`, right before the Documentation section;
- `<!-- gbdev.io:end body -->`, right after the last entry of the Related projects section.

Everything between them ends up on the website; everything outside them (introduction, table of contents, community, about) stays on GitHub only.

Please leave these markers where they are. When adding or editing resources you never need to touch them: just make sure your changes stay between them. Move them only when you're adding, removing or reordering top-level sections in a way that changes what should appear on the website, and mention it in your PR.

### Website updates

Whenever README.md changes on `master`, the [Update gbdev.io](.github/workflows/dispatch-website.yml) workflow sends an `awesome-gbdev-updated` [`repository_dispatch`](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#repository_dispatch) event to [gbdev.github.io](https://github.com/gbdev/gbdev.github.io), which rebuilds and deploys the website with the new content of the list. It can also be run manually from the Actions tab ("Run workflow").

The event is sent with the `GBDEV_IO_DISPATCH_TOKEN` repository secret: a fine-grained personal access token with access to `gbdev/gbdev.github.io` only (Contents: read and write). If it expires or is revoked, the workflow fails and the website stops picking up list changes: generate a new token and update the secret. See the [gbdev.github.io CONTRIBUTING.md](https://github.com/gbdev/gbdev.github.io/blob/dev/CONTRIBUTING.md) for the receiving side.

## Correcting and improving resources

Most of the linked resources are hosted on Git repositories. You are encouraged to report errors in the corresponding upstream repository or contact the authors. If the correction doesn't get merged, fork it and mantain an updated/correct version and open a PR replacing the link on the list with your version.

In any case, open an Issue mentioning the error and its magnitude. This can have two outcomes:

- If the resource is unique/important - while we wait for the error getting corrected in the upstream source - we add an Errata notice next near the link. OR
- The resource gets moved in MORE, until it reaches a decent/maintanable/correct state.

If you think something doesn't fit the list, open an Issue or a PR mentioning the reasons.

## Removing unavailable resources

You're welcome to remove any broken link in the repository, but first try to find a reliable mirror and replace it:

- Check on [Archive.org](https://archive.org/) and Google Cache;
- We may already mirrored it in [*The Game Boy Archive*](https://github.com/gb-archive/core) project;
- Try the GitHub search.

Then, **open an Issue** with any useful details.

If you have some old and unavailable resource (not necessarly listed in the missing list) archived in your hard disk that maybe in the interest (even historical!) of the Game Boy development community, please open an Issue attaching or linking the resource.

### Keeping a resource online

If the resource was published under a license (e.g. OSS), keeping it online (re-uploading, finding mirrors, etc) is always suggested.

If there isn't, discuss with upstream authors and understand their decisions/wishes. You should open an issue to discuss about this.

#### Thank you!
