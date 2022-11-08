sudo docker build -t udin-app:latest .
sudo docker run -d -p 3000:3000 --name udin udin-app:latest
