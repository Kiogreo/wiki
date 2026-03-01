#!/bin/sh

# install git for pnpm to work
apk add git

# install pnpm
corepack enable pnpm

# verify versions
node -v
pnpm -v

# build & serve the app
pnpm install --frozen-lockfile && pnpm dev --host
