#!/bin/sh
npm run build
cp -r ./build/ ./docker/app/
cd docker
docker-compose build --no-cache app
docker tag docker_app:latest facurossi/portfolio:latest
docker push facurossi/portfolio:latest
scp -i ~/.ssh/awsFacu.pem  ./deploy/docker-compose.yml ec2-user@18.222.73.246:/opt/portfolio
ssh -i ~/.ssh/awsFacu.pem ec2-user@18.222.73.246 << EOF
			cd /opt/portfolio/
 			docker-compose up -d --force-recreate portfolio
			exit
EOF