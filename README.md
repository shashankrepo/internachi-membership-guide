# InterNACHI Membership Guide

InterNACHI® is working on a membership guide that we intend to print and send to members and prospective
members. We’d like to publish a web-based version as well, and this is where we need your help! Our web
design team simply doesn’t have the time to give this project the attention it deserves.

**We need a talented front-end designer to take the project on.**

## Applying for the contract

We've probably already reached out to you if you're seeing this repository. (If not, [please see below](#trial-contract).)
Here are the ways to send in your trial work:

1. Submit a PR of your work directly to this repository
2. Create a public fork of this repository and send us the link
3. Create a private fork of this repository and add [@inxilpro](https://github.com/inxilpro) as a collaborator
4. Clone this repository locally and send us a zipped up version with your changes applied

### Trial contract

We are reaching out to designers and offering them a 2-hour trial contract to submit a small sample via one
of the methods below. If we haven't contacted you directly, you're still welcome to apply, although we recommend
that you [contact Chris Morrell](https://twitter.com/inxilpro) first to discuss your hourly rate and get approved
for a 2-hour trial contract.

## Resources

- [Latest print version of the guide](https://s3.us-east-1.amazonaws.com/assets-east-1.nachi.org/pdf/internachi-catalog-2021-10-15.pdf)
- [Current work-in-progress web version of the guide](https://internachi.github.io/internachi-membership-guide/)

## This repository

Right now we're just building everything in `index.html`. We put together a very basic starting point so that there's
a place to work from. The current code is not meant for production and will be completely re-done (hopefully by you!)
before we're finished. It's just there so that you have something to work with for your 2-hour trial.

## Building and Code Style

Once you've cloned the project, make sure everything is installed by running:

```shell
yarn install
```

You can build Tailwind with:

```shell
# Build once
yarn run build

# Watch for changes and build any time HTML is saved
yarn run watch
```

We use [`rustywind`](https://github.com/avencera/rustywind) to enforce Tailwind class order. There is a
pre-commit hook that is set up to apply rustywind automatically, that should be enabled when you run
`yarn install`. If you have trouble committing to your fork/branch, make sure you've run `yarn install` and
if that doesn't work, please run `yarn run postinstall` manually to set up the git hooks.
