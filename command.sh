#!/bin/bash

case "$1" in
    "test")
        # run the tests
        echo "TestMachine is running the tests...."
        cd /home/ubuntu/repo/chat_app_web_testing_playwright 
        npm run test
        ;;
    "test-login")
        # run the tests
        echo "TestMachine is running the tests...."
        cd /home/ubuntu/repo/chat_app_web_testing_playwright 
        npm run test-login
        ;;
    "show-report")
        # run the tests
        echo "TestMachine is running the tests...."
        cd /home/ubuntu/repo/chat_app_web_testing_playwright 
        npx playwright show-report
        ;;
    "update")
        # run the tests
        echo "TestMachine is updating repo...."
        cd /home/ubuntu/repo/chat_app_web_testing_playwright 
        git pull
        ;;
    "connect")
        # test ssh connection
        echo "TestMachine is connecting..."
        ;;
    "serve")
        # run Express
        echo "Running Express server..."
        cd /home/ubuntu/repo/chat_app_web_testing_playwright 
        npm start > /dev/null 2>&1 &
        ;;
    "setup")
        # install dependencies and Playwright browser
        echo "Setting up dependencies..."
        cd /home/ubuntu/repo/chat_app_web_testing_playwright 
        npm install --dev
        npx playwright install --with-deps
        echo "Dependencies installed"
        ;;
    *)
        echo "Unknown command: $1"
        ;;
esac