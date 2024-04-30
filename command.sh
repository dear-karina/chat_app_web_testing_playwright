#!/bin/bash

case "$1" in
    "test")
        # run the tests
        echo "TestMachine is running the tests...."
        cd /home/ubuntu/repo/ChatApp_Web_Testing
        npm run test
        ;;
    "connect")
        # test ssh connection
        echo "TestMachine is connecting..."
        ;;
    "serve")
        # run Express
        echo "Running Express server..."
        cd /home/ubuntu/repo/ChatApp_Web_Testing
        npm start > /dev/null 2>&1 &
        ;;
    "setup")
        # install dependencies and Playwright browser
        echo "Setting up dependencies..."
        cd /home/ubuntu/repo/ChatApp_Web_Testing
        npm install --dev
        npx playwright install --with-deps
        echo "Dependencies installed"
        ;;
    *)
        echo "Unknown command: $1"
        ;;
esac