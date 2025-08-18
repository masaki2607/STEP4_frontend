#!/bin/bash

echo "Starting Azure App Service deployment..."
echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Environment: $NODE_ENV"
echo "Port: $PORT"

# 必要なディレクトリを作成
mkdir -p .next/static
mkdir -p .next/server

# Next.jsをビルド（プロダクション環境の場合）
if [ "$NODE_ENV" = "production" ]; then
    echo "Building Next.js application..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "Build failed!"
        exit 1
    fi
    echo "Build completed successfully"
fi

# サーバーを起動
echo "Starting server..."
exec node server.js
