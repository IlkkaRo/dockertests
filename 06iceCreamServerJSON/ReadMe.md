make Dockerfile (pay attention to capitals)

docker build -t icecreamserverjson .

docker run -d --name myice -p 3000:3000 icecreamserverjson
