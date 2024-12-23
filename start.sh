docker-compose up --build
echo "Docker container running"

npm run dev
echo "Server is running: http://localhost:5000"

cd ./server
npm run dev