#!/bin/bash
#builds the client and server for development
cd server
cargo build
cd ..
npm run-script build-development
