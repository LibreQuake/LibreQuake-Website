#!/bin/bash
#builds the client and server for production
cd server
cargo build --release
cd ..
npm run-script build
